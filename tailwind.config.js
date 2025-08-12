/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-blue': '#000000',
        'deep-purple': '#0a0a0f',
        'cosmic-purple': '#050510',
        'stellar-blue': '#0f0f1a',
        'nebula-purple': '#0d0d1a',
        'galaxy-blue': '#1a1a2e',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #000000 0%, #0a0a0f 25%, #050510 50%, #0d0d1a 75%, #0f0f1a 100%)',
        'stellar-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
      },
      animation: {
        'twinkle': 'twinkle 2.5s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(59, 130, 246, 0.5)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'cosmic': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
};