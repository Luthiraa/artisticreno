'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <svg
          width="600"
          height="100"
          viewBox="0 0 600 100"
          className="text-primary-gold"
        >
          {/* A */}
          <motion.path
            d="M20 90 L40 10 L60 90 M30 50 L50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          {/* R */}
          <motion.path
            d="M80 90 L80 10 L105 10 L115 30 L105 50 L80 50 M90 50 L120 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
          />
          
          {/* T */}
          <motion.path
            d="M135 10 L175 10 M155 10 L155 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          />
          
          {/* I */}
          <motion.path
            d="M195 10 L195 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          />
          
          {/* S */}
          <motion.path
            d="M220 10 H250 V45 H220 V55 H250 V90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          />
          
          {/* T */}
          <motion.path
            d="M270 10 L310 10 M290 10 L290 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* I */}
          <motion.path
            d="M330 10 L330 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          />
          
          {/* C - Adjusted to match image (flipped horizontally) */}
          <motion.path
            d="M390 10 L390 90 M390 10 L360 10 M390 90 L360 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
          />

          {/* R */}
          <motion.path
            d="M405 90 L405 10 L430 10 L440 30 L430 50 L405 50 M415 50 L445 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
          />

          {/* E */}
          <motion.path
            d="M465 10 H495 V50 H465 V90 H495 M465 10 V90"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
          />

          {/* N */}
          <motion.path
            d="M520 90 L520 10 L550 90 L550 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
          />

          {/* O */}
          <motion.path
            d="M575 10 H605 V90 H575 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.1 }}
          />
        </svg>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-dark-text mt-4 text-lg"
        >
          Building Your Dreams
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader; 