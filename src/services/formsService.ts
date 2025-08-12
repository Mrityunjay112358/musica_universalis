import { supabase } from '../lib/supabase';
import { hasSupabaseCredentials } from '../lib/supabase';
import { authService } from './authService';

export interface VolunteerApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  dateOfBirth?: string;
  occupation?: string;
  volunteerType: string;
  musicalBackground?: string;
  instruments?: string;
  teachingExperience?: string;
  timeCommitment?: string;
  availability?: string[];
  languages?: string;
  motivation: string;
  references?: string;
}

export interface PartnerSchoolApplicationData {
  organizationName: string;
  organizationType: string;
  contactPersonName: string;
  contactPersonTitle: string;
  email: string;
  phone: string;
  website?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  numberOfStudents: string;
  ageGroups?: string[];
  currentMusicPrograms?: string;
  facilities?: string;
  partnershipGoals: string;
  availableResources?: string;
  timeline: string;
  additionalInfo?: string;
}

export interface DonationData {
  donationType: 'one-time' | 'monthly';
  amount: number;
  currency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  isAnonymous?: boolean;
  receiveUpdates?: boolean;
}

export interface InstrumentSponsorshipData {
  instrumentType: string;
  instrumentName: string;
  sponsorshipType: 'one-time' | 'monthly';
  amount: number;
  currency: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  dedicateInstrument?: boolean;
  dedicationName?: string;
  dedicationMessage?: string;
  receiveUpdates?: boolean;
}

export interface ChapterApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  zipCode?: string;
  organizationName?: string;
  organizationType?: string;
  currentRole: string;
  musicalBackground?: string;
  leadershipExperience: string;
  communityNeeds: string;
  targetAudience?: string;
  expectedStudents: string;
  availableResources?: string;
  timeCommitment: string;
  startTimeline: string;
  supportNeeded: string;
  additionalInfo?: string;
  agreeToTerms: boolean;
  receiveTraining?: boolean;
}

class FormsService {
  async submitVolunteerApplication(data: VolunteerApplicationData): Promise<{ error: string | null }> {
    try {
      if (!hasSupabaseCredentials()) {
        console.log('Demo mode: Volunteer application would be submitted:', data);
        return { error: null };
      }

      const { error } = await supabase
        .from('volunteer_applications')
        .insert([
          {
            user_id: null,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            zip_code: data.zipCode,
            country: data.country || 'United States',
            date_of_birth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
            occupation: data.occupation,
            volunteer_type: data.volunteerType,
            musical_background: data.musicalBackground,
            instruments: data.instruments,
            teaching_experience: data.teachingExperience,
            time_commitment: data.timeCommitment,
            availability: data.availability,
            languages: data.languages,
            motivation: data.motivation,
            reference_info: data.references,
          }
        ]);

      if (error) {
        console.error('Volunteer application error:', error);
        return { error: error.message };
      }

      return { error: null };
    } catch (error) {
      console.error('Submit volunteer application error:', error);
      return { error: 'An unexpected error occurred' };
    }
  }

  async submitPartnerSchoolApplication(data: PartnerSchoolApplicationData): Promise<{ error: string | null }> {
    try {
      if (!hasSupabaseCredentials()) {
        console.log('Demo mode: Partner school application would be submitted:', data);
        return { error: null };
      }

      const { error } = await supabase
        .from('partner_school_applications')
        .insert([
          {
            user_id: null,
            organization_name: data.organizationName,
            organization_type: data.organizationType,
            contact_person_name: data.contactPersonName,
            contact_person_title: data.contactPersonTitle,
            email: data.email,
            phone: data.phone,
            website: data.website,
            address: data.address,
            city: data.city,
            state: data.state,
            zip_code: data.zipCode,
            country: data.country || 'United States',
            number_of_students: data.numberOfStudents,
            age_groups: data.ageGroups,
            current_music_programs: data.currentMusicPrograms,
            facilities: data.facilities,
            partnership_goals: data.partnershipGoals,
            available_resources: data.availableResources,
            timeline: data.timeline,
            additional_info: data.additionalInfo,
          }
        ]);

      if (error) {
        console.error('Partner school application error:', error);
        return { error: error.message };
      }

      return { error: null };
    } catch (error) {
      console.error('Submit partner school application error:', error);
      return { error: 'An unexpected error occurred' };
    }
  }

  async submitDonation(data: DonationData): Promise<{ error: string | null }> {
    try {
      if (!hasSupabaseCredentials()) {
        console.log('Demo mode: Donation would be submitted:', data);
        return { error: null };
      }

      const { error } = await supabase
        .from('donations')
        .insert([
          {
            user_id: null,
            donation_type: data.donationType,
            amount: data.amount,
            currency: data.currency,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            zip_code: data.zipCode,
            country: data.country || 'United States',
            is_anonymous: data.isAnonymous || false,
            receive_updates: data.receiveUpdates !== false,
            payment_status: 'pending', // Would be updated by payment processor
          }
        ]);

      if (error) {
        console.error('Donation submission error:', error);
        return { error: error.message };
      }

      return { error: null };
    } catch (error) {
      console.error('Submit donation error:', error);
      return { error: 'An unexpected error occurred' };
    }
  }

  async submitInstrumentSponsorship(data: InstrumentSponsorshipData): Promise<{ error: string | null }> {
    try {
      if (!hasSupabaseCredentials()) {
        console.log('Demo mode: Instrument sponsorship would be submitted:', data);
        return { error: null };
      }

      const { error } = await supabase
        .from('instrument_sponsorships')
        .insert([
          {
            user_id: null,
            instrument_type: data.instrumentType,
            instrument_name: data.instrumentName,
            sponsorship_type: data.sponsorshipType,
            amount: data.amount,
            currency: data.currency,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            zip_code: data.zipCode,
            country: data.country || 'United States',
            dedicate_instrument: data.dedicateInstrument || false,
            dedication_name: data.dedicationName,
            dedication_message: data.dedicationMessage,
            receive_updates: data.receiveUpdates !== false,
            payment_status: 'pending', // Would be updated by payment processor
          }
        ]);

      if (error) {
        console.error('Instrument sponsorship error:', error);
        return { error: error.message };
      }

      return { error: null };
    } catch (error) {
      console.error('Submit instrument sponsorship error:', error);
      return { error: 'An unexpected error occurred' };
    }
  }

  async submitChapterApplication(data: ChapterApplicationData): Promise<{ error: string | null }> {
    try {
      if (!hasSupabaseCredentials()) {
        console.log('Demo mode: Chapter application would be submitted:', data);
        return { error: null };
      }

      const { error } = await supabase
        .from('chapter_applications')
        .insert([
          {
            user_id: null,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            city: data.city,
            state: data.state,
            country: data.country,
            zip_code: data.zipCode,
            organization_name: data.organizationName,
            organization_type: data.organizationType,
            current_role: data.currentRole,
            musical_background: data.musicalBackground,
            leadership_experience: data.leadershipExperience,
            community_needs: data.communityNeeds,
            target_audience: data.targetAudience,
            expected_students: data.expectedStudents,
            available_resources: data.availableResources,
            time_commitment: data.timeCommitment,
            start_timeline: data.startTimeline,
            support_needed: data.supportNeeded,
            additional_info: data.additionalInfo,
            agree_to_terms: data.agreeToTerms,
            receive_training: data.receiveTraining !== false,
          }
        ]);

      if (error) {
        console.error('Chapter application error:', error);
        return { error: error.message };
      }

      return { error: null };
    } catch (error) {
      console.error('Submit chapter application error:', error);
      return { error: 'An unexpected error occurred' };
    }
  }
}

export const formsService = new FormsService();