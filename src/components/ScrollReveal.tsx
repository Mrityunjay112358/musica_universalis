import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ 
        once: true, 
        margin: "-100px" 
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  );
}