/*
  # Complete Forms Backend System

  1. New Tables
    - `volunteer_applications` - Store volunteer application data
    - `partner_school_applications` - Store school partnership applications
    - `donations` - Store donation records
    - `instrument_sponsorships` - Store instrument sponsorship data
    - `chapter_applications` - Store chapter start applications
    - `newsletter_subscribers` - Store newsletter subscriptions

  2. Security
    - Enable RLS on all tables
    - Add policies for secure access
    - Add indexes for performance
*/

-- Volunteer Applications Table
CREATE TABLE IF NOT EXISTS volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
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
  references text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Partner School Applications Table
CREATE TABLE IF NOT EXISTS partner_school_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
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
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  donation_type text NOT NULL, -- 'one-time' or 'monthly'
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
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  instrument_type text NOT NULL,
  instrument_name text NOT NULL,
  sponsorship_type text NOT NULL, -- 'one-time' or 'monthly'
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
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
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

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  first_name text,
  last_name text,
  subscribed boolean DEFAULT true,
  subscription_date timestamptz DEFAULT now(),
  unsubscribe_token text UNIQUE DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE volunteer_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_school_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE instrument_sponsorships ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policies for volunteer_applications
CREATE POLICY "Users can read own volunteer applications"
  ON volunteer_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own volunteer applications"
  ON volunteer_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for partner_school_applications
CREATE POLICY "Users can read own partner applications"
  ON partner_school_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own partner applications"
  ON partner_school_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for donations
CREATE POLICY "Users can read own donations"
  ON donations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own donations"
  ON donations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for instrument_sponsorships
CREATE POLICY "Users can read own sponsorships"
  ON instrument_sponsorships
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sponsorships"
  ON instrument_sponsorships
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for chapter_applications
CREATE POLICY "Users can read own chapter applications"
  ON chapter_applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own chapter applications"
  ON chapter_applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for newsletter_subscribers (public access for subscription)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read newsletter subscriptions"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_volunteer_applications_user_id ON volunteer_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_volunteer_applications_status ON volunteer_applications(status);
CREATE INDEX IF NOT EXISTS idx_partner_school_applications_user_id ON partner_school_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_partner_school_applications_status ON partner_school_applications(status);
CREATE INDEX IF NOT EXISTS idx_donations_user_id ON donations(user_id);
CREATE INDEX IF NOT EXISTS idx_donations_payment_status ON donations(payment_status);
CREATE INDEX IF NOT EXISTS idx_instrument_sponsorships_user_id ON instrument_sponsorships(user_id);
CREATE INDEX IF NOT EXISTS idx_instrument_sponsorships_payment_status ON instrument_sponsorships(payment_status);
CREATE INDEX IF NOT EXISTS idx_chapter_applications_user_id ON chapter_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_chapter_applications_status ON chapter_applications(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_volunteer_applications_updated_at
  BEFORE UPDATE ON volunteer_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partner_school_applications_updated_at
  BEFORE UPDATE ON partner_school_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_donations_updated_at
  BEFORE UPDATE ON donations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_instrument_sponsorships_updated_at
  BEFORE UPDATE ON instrument_sponsorships
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_chapter_applications_updated_at
  BEFORE UPDATE ON chapter_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();