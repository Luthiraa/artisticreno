'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerLogos = [
  { src: "/partners/BMO_Stadium_(logo).png", alt: "BMO Stadium" },
  { src: "/partners/metroconventionlogo.png", alt: "Metro Convention Centre" },
  { src: "/partners/public-storage-logo.png", alt: "Public Storage" },
  { src: "/partners/Rogers_Centre.svg.png", alt: "Rogers Centre" },
  { src: "/partners/Scotiabank_Arena_logo.png", alt: "Scotiabank Arena" }
];

export default function PartnerLogos() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use the same structure for both server and client renders
  // Just disable animations until client-side mounting
  return (
    <div className="relative w-full overflow-hidden py-10" style={{ height: '400px' }}>
      {!isMounted ? (
        // Static version during server-side rendering and initial load
        <div className="flex gap-20 absolute whitespace-nowrap" style={{ left: '50%', transform: 'translateX(-50%)' }}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={600}
                height={400}
                style={{ objectFit: 'contain' }}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* First set of logos */}
          <motion.div 
            className="flex gap-20 absolute whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}        
            style={{ top: 0 }}
          >        
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={`first-${index}`} className="flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={600}
                  height={400}
                  style={{ objectFit: 'contain' }}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>

          {/* Second set of logos */}
          <motion.div 
            className="flex gap-20 absolute whitespace-nowrap"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}        
            style={{ top: 0 }}
          >        
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={600}
                  height={400}
                  style={{ objectFit: 'contain' }}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
