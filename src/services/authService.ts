import { supabase } from '../lib/supabase';
import { hasSupabaseCredentials } from '../lib/supabase';
import type { User } from '../lib/supabase';

export interface SignUpData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignInData {
  username: string;
  password: string;
}

class AuthService {
  async signUp(data: SignUpData): Promise<{ user: User | null; error: string | null }> {
    try {
      console.log('Starting sign up process for:', data.username);

      // First, sign up with Supabase Auth using email
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: undefined,
          data: {
            username: data.username,
            first_name: data.firstName,
            last_name: data.lastName,
          }
        }
      });

      if (authError) {
        console.error('Auth signup error:', authError);
        return { user: null, error: authError.message };
      }

      if (!authData.user) {
        return { user: null, error: 'Failed to create user account' };
      }

      console.log('Auth user created:', authData.user.id);

      // Wait a moment for the database trigger to populate the users table
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get the user data from the custom users table (populated by trigger)
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id);

      let finalUserData: User;
      if (userData && userData.length > 0 && !userError) {
        console.log('Got user data from custom table:', userData[0].username);
        finalUserData = userData[0];
      } else {
        console.log('Using auth data as fallback');
        // Fallback to auth data if custom table query fails
        finalUserData = {
          id: authData.user.id,
          username: data.username,
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          created_at: authData.user.created_at,
          updated_at: authData.user.updated_at || authData.user.created_at,
        };
      }

      return { user: finalUserData, error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { user: null, error: 'An unexpected error occurred during sign up' };
    }
  }

  async signIn(data: SignInData): Promise<{ user: User | null; error: string | null }> {
    try {
      console.log('Starting sign in process for:', data.username);

      // Try to find user by username first
      let userEmail = data.username;
      
      // If it doesn't contain @, it's a username - try to find the email
      if (!data.username.includes('@')) {
        try {
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('email')
            .eq('username', data.username);

          if (userData && userData.length > 0 && !userError) {
            userEmail = userData[0].email;
            console.log('Found email for username:', userEmail);
          } else {
            console.log('Username not found in custom table, trying as email');
          }
        } catch (lookupError) {
          console.log('Username lookup failed, trying as email:', lookupError);
        }
      }

      // Sign in with Supabase Auth using email
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: data.password,
      });

      if (authError) {
        console.error('Auth signin error:', authError);
        return { user: null, error: 'Invalid username/email or password' };
      }

      if (!authData.user) {
        return { user: null, error: 'Failed to sign in' };
      }

      console.log('Auth sign in successful:', authData.user.id);

      // Get user data from custom users table (should be populated by trigger)
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id);

      let finalUserData: User;
      if (userData && userData.length > 0 && !userError) {
        console.log('Got user data from custom table:', userData[0].username);
        finalUserData = userData[0];
      } else {
        console.log('Custom user data not found, using auth data as fallback');
        // Fallback to auth data if custom table query fails
        finalUserData = {
          id: authData.user.id,
          username: authData.user.user_metadata?.username || data.username,
          email: authData.user.email || userEmail,
          first_name: authData.user.user_metadata?.first_name || 'User',
          last_name: authData.user.user_metadata?.last_name || '',
          created_at: authData.user.created_at,
          updated_at: authData.user.updated_at || authData.user.created_at,
        };
      }

      return { user: finalUserData, error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { user: null, error: 'An unexpected error occurred during sign in' };
    }
  }

  async signOut(): Promise<{ error: string | null }> {
    try {
      console.log('Signing out user');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
        return { error: error.message };
      }
      return { error: null };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error: 'An unexpected error occurred during sign out' };
    }
  }

  async getCurrentUser(): Promise<{ user: User | null; error: string | null }> {
    try {
      if (!hasSupabaseCredentials()) {
        console.log('Demo mode: No authentication required');
        return { user: null, error: null };
      }

      const { data: authData, error: authError } = await supabase.auth.getUser();

      if (authError || !authData.user) {
        console.log('No current user found');
        return { user: null, error: null };
      }

      console.log('Current user found:', authData.user.id);

      // Get user data from custom users table (should be populated by trigger)
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authData.user.id);

      let finalUserData: User;
      if (userData && userData.length > 0 && !userError) {
        console.log('Got user data from custom table:', userData[0].username);
        finalUserData = userData[0];
      } else {
        console.log('Custom user data not found, using auth data as fallback');
        // Fallback to auth data if custom table query fails
        finalUserData = {
          id: authData.user.id,
          username: authData.user.user_metadata?.username || 'user',
          email: authData.user.email || '',
          first_name: authData.user.user_metadata?.first_name || 'User',
          last_name: authData.user.user_metadata?.last_name || '',
          created_at: authData.user.created_at,
          updated_at: authData.user.updated_at || authData.user.created_at,
        };
      }

      return { user: finalUserData, error: null };
    } catch (error) {
      console.error('Get current user error:', error);
      return { user: null, error: 'An unexpected error occurred' };
    }
  }
}

export const authService = new AuthService();