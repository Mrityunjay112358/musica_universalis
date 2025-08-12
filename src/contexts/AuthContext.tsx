import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/authService';
import type { User } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<{ error: string | null }>;
  signUp: (data: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      console.log('Checking auth status...');
      const { user: currentUser } = await authService.getCurrentUser();
      console.log('Auth status result:', currentUser ? 'User found' : 'No user');
      setUser(currentUser);
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (username: string, password: string) => {
    console.log('AuthContext signIn called');
    const { user: signedInUser, error } = await authService.signIn({ username, password });
    if (signedInUser) {
      console.log('Setting user in context:', signedInUser.username);
      setUser(signedInUser);
    }
    return { error };
  };

  const signUp = async (data: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    console.log('AuthContext signUp called');
    const { user: newUser, error } = await authService.signUp(data);
    if (newUser) {
      console.log('Setting new user in context:', newUser.username);
      setUser(newUser);
    }
    return { error };
  };

  const signOut = async () => {
    console.log('AuthContext signOut called');
    await authService.signOut();
    setUser(null);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}