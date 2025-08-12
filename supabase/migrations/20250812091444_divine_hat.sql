-- Allow anonymous form submissions
-- Run this AFTER running all the migration files

-- Allow anonymous volunteer applications
CREATE POLICY "Allow anonymous volunteer applications"
  ON volunteer_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous partner applications  
CREATE POLICY "Allow anonymous partner applications"
  ON partner_school_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous donations
CREATE POLICY "Allow anonymous donations"
  ON donations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous sponsorships
CREATE POLICY "Allow anonymous sponsorships"
  ON instrument_sponsorships
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous chapter applications
CREATE POLICY "Allow anonymous chapter applications"
  ON chapter_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Newsletter subscriptions already allow anonymous access