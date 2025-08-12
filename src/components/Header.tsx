import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Music, Instagram, Linkedin } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <div>
      <header className="glass-dark border-b border-white/10 relative z-20">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={linkVariants}
            >
              <Link to="/" className="flex items-center gap-4">
                <motion.img 
                  variants={iconVariants}
                  src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Musica Universalis Logo"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h1 className="text-2xl font-bold gradient-text-purple">MUSICA UNIVERSALIS</h1>
                  <p className="text-sm text-slate-400 italic">"Where Every Soul Finds Its Sound"</p>
                </div>
              </Link>
            </motion.div>
            
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  <Link 
                    to="/team" 
                    className={`transition-colors text-lg font-medium ${isActive('/team') ? 'text-purple-400' : 'text-slate-300 hover:text-purple-400'}`}
                  >
                    Meet the Team
                  </Link>
                </motion.div>
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={linkVariants}
                >
                  <Link 
                    to="/join" 
                    className={`transition-colors text-lg font-medium ${isActive('/join') ? 'text-purple-400' : 'text-slate-300 hover:text-purple-400'}`}
                  >
                    Join Our Movement
                  </Link>
                </motion.div>
              </nav>
              
              <div className="flex items-center gap-4">
                <motion.a 
                  href="https://www.instagram.com/musica.universalis_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass rounded-xl text-slate-400 hover:text-pink-400 transition-colors border border-white/10 hover:border-pink-500/50"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/company/musicauniversalis/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-slate-400 hover:text-blue-400 transition-colors border border-white/10 hover:border-blue-500/50"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}