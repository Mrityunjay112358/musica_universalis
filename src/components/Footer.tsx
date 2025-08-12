import React from 'react';
import { Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 text-white py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src="/musica-universalis-logo.png"
            alt="Musica Universalis Logo"
            className="h-8 w-8 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/logo.png";
            }}
          />
          <span className="font-bold text-xl gradient-text-purple">MUSICA UNIVERSALIS</span>
        </div>
        <p className="text-slate-400 text-lg">
          © 2025 Musica Universalis. Bringing music education to every child.
        </p>
        <div className="mt-4">
          <p className="text-slate-500 italic">
            "Where Every Soul Finds Its Sound"
          </p>
        </div>
      </div>
    </footer>
  );
}