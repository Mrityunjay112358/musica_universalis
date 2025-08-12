import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create client even with placeholder values to prevent app crashes
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Check if we have real Supabase credentials
export const hasSupabaseCredentials = () => {
  return supabaseUrl !== 'https://placeholder.supabase.co' && 
         supabaseAnonKey !== 'placeholder-key' &&
         supabaseUrl && supabaseAnonKey;
};

export type User = {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
};