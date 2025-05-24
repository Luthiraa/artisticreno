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
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-50 flex items-center justify-center"
    >
      <div className="text-center px-4">
        {/* Company Name in Clean Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-wide">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-gold"
            >
              ARTISTIC
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white ml-2 sm:ml-4"
            >
              RENO
            </motion.span>
          </h1>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"        >
          <div className="flex justify-center items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-3 border-primary-gold border-t-transparent rounded-full"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-300 text-base sm:text-lg font-medium tracking-wider"
            >
              Loading...
            </motion.span>
          </div>
        </motion.div>        <svg
          width="600"
          height="100"
          viewBox="0 0 600 100"
          className="text-primary-gold opacity-0"
        ></svg>
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8"        >
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-light tracking-wide">
            Building Your Dreams
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="h-0.5 bg-primary-gold mx-auto mt-4 max-w-xs"
          />
        </motion.div>
        
        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12"        >
          <div className="w-48 sm:w-64 mx-auto bg-gray-800 rounded-full h-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="bg-gradient-to-r from-primary-gold to-yellow-500 h-1 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader; 