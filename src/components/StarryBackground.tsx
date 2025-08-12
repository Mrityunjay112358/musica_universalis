import React, { useEffect, useState } from 'react';

export default function StarryBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 4
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-purple-950/50" />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${2 + star.delay}s infinite ease-in-out`,
            animationDelay: `${star.delay}s`,
            opacity: 0.4 + Math.random() * 0.6
          }}
        />
      ))}
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl floating" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl floating" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl floating" />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-xl floating" />
      
      {/* Additional atmospheric elements */}
      <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full blur-2xl floating" />
      <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-gradient-to-r from-purple-500/25 to-cyan-500/25 rounded-full blur-2xl floating" />
    </div>
  );
}