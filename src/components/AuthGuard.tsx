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

  // Temporarily bypass authentication - render children directly
  return (
    <div>
      {children}
    </div>
  );

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

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <StarryBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/musica-universalis-logo.png"
                alt="Musica Universalis Logo"
                className="h-20 w-20 object-contain mr-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/logo.png";
                }}
              />
              <div>
                <h1 className="text-4xl font-bold gradient-text-purple mb-2">MUSICA UNIVERSALIS</h1>
                <p className="text-slate-400 italic">"Where Every Soul Finds Its Sound"</p>
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-12 border border-white/10 mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Welcome to Our Community</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Join our mission to bring music education to children worldwide. 
                Sign in to access our programs, resources, and community.
              </p>

              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg neon-purple"
              >
                Sign In / Sign Up
              </button>
            </div>
          </motion.div>
        </div>

        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </div>
    );
  }

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