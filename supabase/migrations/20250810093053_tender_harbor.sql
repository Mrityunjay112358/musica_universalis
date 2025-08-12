/*
  # Sync Users Table with Supabase Auth

  1. Database Trigger
    - Automatically populate users table when auth.users is updated
    - Handle both INSERT and UPDATE operations
    - Extract metadata from auth.users

  2. Function
    - Create handle_new_user() function
    - Sync user data from auth.users to public.users
    - Handle errors gracefully

  3. Security
    - Maintain existing RLS policies
    - Ensure data consistency
*/

-- Create function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into public.users table
  INSERT INTO public.users (
    id,
    username,
    email,
    first_name,
    last_name,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', 'User'),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    NEW.created_at,
    NEW.updated_at
  )
  ON CONFLICT (id) DO UPDATE SET
    username = COALESCE(NEW.raw_user_meta_data->>'username', EXCLUDED.username),
    email = NEW.email,
    first_name = COALESCE(NEW.raw_user_meta_data->>'first_name', EXCLUDED.first_name),
    last_name = COALESCE(NEW.raw_user_meta_data->>'last_name', EXCLUDED.last_name),
    updated_at = NEW.updated_at;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT OR UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Backfill existing auth users into public.users table
INSERT INTO public.users (
  id,
  username,
  email,
  first_name,
  last_name,
  created_at,
  updated_at
)
SELECT 
  au.id,
  COALESCE(au.raw_user_meta_data->>'username', split_part(au.email, '@', 1)) as username,
  au.email,
  COALESCE(au.raw_user_meta_data->>'first_name', 'User') as first_name,
  COALESCE(au.raw_user_meta_data->>'last_name', '') as last_name,
  au.created_at,
  au.updated_at
FROM auth.users au
WHERE au.id NOT IN (SELECT id FROM public.users)
ON CONFLICT (id) DO NOTHING;