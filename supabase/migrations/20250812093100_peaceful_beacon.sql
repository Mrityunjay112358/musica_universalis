/*
  # Complete Forms Backend System (Without Newsletter)

  1. New Tables
    - `volunteer_applications` - Store volunteer application data
    - `partner_school_applications` - Store school partnership applications
    - `donations` - Store donation records
    - `instrument_sponsorships` - Store instrument sponsorship data
    - `chapter_applications` - Store chapter start applications

  2. Security
    - Enable RLS on all tables
    - Add policies for secure access
    - Add indexes for performance
*/

-- Volunteer Applications Table
CREATE TABLE IF NOT EXISTS volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  address text,
  city text,
  state text,
  zip_code text,
  country text DEFAULT 'United States',
  date_of_birth date,
  occupation text,
  volunteer_type text NOT NULL,
  musical_background text,
  instruments text,
  teaching_experience text,
  time_commitment text,
  availability text[],
  languages text,
  motivation text NOT NULL,
  reference_info text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Partner School Applications Table
CREATE TABLE IF NOT EXISTS partner_school_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  organization_name text NOT NULL,
  organization_type text NOT NULL,
  contact_person_name text NOT NULL,
  contact_person_title text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  website text,
  address text,
  city text,
  state text,
  zip_code text,
  country text DEFAULT 'United States',
  number_of_students text NOT NULL,
  age_groups text[],
  current_music_programs text,
  facilities text,
  partnership_goals text NOT NULL,
  available_resources text,
  timeline text NOT NULL,
  additional_info text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Donations Table
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  donation_type text NOT NULL,
  amount decimal(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'USD',
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  address text,
  city text,
  state text,
  zip_code text,
  country text DEFAULT 'United States',
  payment_method text DEFAULT 'card',
  payment_status text DEFAULT 'pending',
  transaction_id text,
  is_anonymous boolean DEFAULT false,
  receive_updates boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Instrument Sponsorships Table
CREATE TABLE IF NOT EXISTS instrument_sponsorships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  instrument_type text NOT NULL,
  instrument_name text NOT NULL,
  sponsorship_type text NOT NULL,
  amount decimal(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'USD',
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  address text,
  city text,
  state text,
  zip_code text,
  country text DEFAULT 'United States',
  dedicate_instrument boolean DEFAULT false,
  dedication_name text,
  dedication_message text,
  payment_status text DEFAULT 'pending',
  transaction_id text,
  receive_updates boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Chapter Applications Table
CREATE TABLE IF NOT EXISTS chapter_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  country text NOT NULL,
  zip_code text,
  organization_name text,
  organization_type text,
  current_role text NOT NULL,
  musical_background text,
  leadership_experience text NOT NULL,
  community_needs text NOT NULL,
  target_audience text,
  expected_students text NOT NULL,
  available_resources text,
  time_commitment text NOT NULL,
  start_timeline text NOT NULL,
  support_needed text NOT NULL,
  additional_info text,
  agree_to_terms boolean DEFAULT false,
  receive_training boolean DEFAULT true,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_school_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE instrument_sponsorships ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous form submissions
CREATE POLICY "Allow anonymous volunteer applications"
  ON volunteer_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous partner applications"
  ON partner_school_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous donations"
  ON donations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous sponsorships"
  ON instrument_sponsorships
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous chapter applications"
  ON chapter_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_volunteer_applications_email ON volunteer_applications(email);
CREATE INDEX IF NOT EXISTS idx_partner_school_applications_email ON partner_school_applications(email);
CREATE INDEX IF NOT EXISTS idx_donations_email ON donations(email);
CREATE INDEX IF NOT EXISTS idx_instrument_sponsorships_email ON instrument_sponsorships(email);
CREATE INDEX IF NOT EXISTS idx_chapter_applications_email ON chapter_applications(email);