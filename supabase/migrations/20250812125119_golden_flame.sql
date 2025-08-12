/*
  # Add missing columns to partner_school_applications table

  1. Changes
    - Add `state` column to partner_school_applications table
    - Add any other potentially missing columns
    - Ensure all form fields have corresponding database columns

  2. Security
    - Maintain existing RLS policies
    - No changes to security model
*/

-- Add missing state column to partner_school_applications
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'partner_school_applications' AND column_name = 'state'
  ) THEN
    ALTER TABLE partner_school_applications ADD COLUMN state text;
  END IF;
END $$;

-- Add missing address column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'partner_school_applications' AND column_name = 'address'
  ) THEN
    ALTER TABLE partner_school_applications ADD COLUMN address text;
  END IF;
END $$;

-- Add missing zip_code column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'partner_school_applications' AND column_name = 'zip_code'
  ) THEN
    ALTER TABLE partner_school_applications ADD COLUMN zip_code text;
  END IF;
END $$;

-- Add missing city column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'partner_school_applications' AND column_name = 'city'
  ) THEN
    ALTER TABLE partner_school_applications ADD COLUMN city text;
  END IF;
END $$;

-- Refresh the schema cache
NOTIFY pgrst, 'reload schema';