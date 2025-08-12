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
      {children}
    </div>
  );

  return (
    <div>
      {/* User is authenticated, show the main app */}
      {children}
      
      {/* Optional: Add a user menu in the header */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="glass-dark rounded-xl p-3 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="text-sm text-slate-300">
              Welcome, <span className="text-white font-medium">{user.first_name || user.username}</span>
            </div>
            <div className="text-xs text-slate-400">
              ID: {user.id.slice(0, 8)}...
            </div>
            <button
              onClick={signOut}
              className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}