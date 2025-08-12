import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import StarryBackground from './StarryBackground';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
        <StarryBackground />
        <div className="relative z-10 text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mx-auto mb-4"
          >
            <Music className="w-full h-full text-purple-400" />
          </motion.div>
          <p className="text-xl text-slate-300">Loading...</p>
        </div>
      </div>
    );
  }

  // Temporarily bypass authentication - render children directly
  return (
    <div>
      {/* User is authenticated, show the main app */}
      {children}
    </div>
  );
}