'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partnerLogos = [
  { src: "/partners/BMO_Stadium_(logo).png", alt: "BMO Stadium" },
  { src: "/partners/metroconventionlogo.png", alt: "Metro Convention Centre" },
  { src: "/partners/public-storage-logo.png", alt: "Public Storage" },
  { src: "/partners/Rogers_Centre.svg.png", alt: "Rogers Centre" },
  { src: "/partners/Scotiabank_Arena_logo.png", alt: "Scotiabank Arena" }
];

// Calculate the total width of one set of logos with gaps
const logoWidth = 180;
const gapWidth = 48;
const numberOfLogos = partnerLogos.length;
const totalSetWidth = (logoWidth * numberOfLogos) + (gapWidth * (numberOfLogos - 1));

export default function PartnerLogos() {
  
  return (
    <div className="relative w-full overflow-hidden py-8" style={{ height: '140px' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-1/4 w-16 h-16 bg-primary-gold/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 right-1/4 w-20 h-20 bg-primary-gold/5 rounded-full blur-2xl"></div>
      </div>

      {/* Use a single row with repeated logos for continuous scroll */}
      <motion.div 
        className="flex gap-12 items-center whitespace-nowrap relative z-10"
        initial={{ x: 0 }}
        animate={{ x: -totalSetWidth }} // Animate to the negative width of one set
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}        
        style={{ width: totalSetWidth * 2, top: 0 }} // Set container width to twice the set width
      >        
        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
          <motion.div 
            key={`logo-${index}`} 
            className="flex items-center justify-center flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: logoWidth, height: '100px' }}
          >
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={140} 
              height={70} 
              style={{ objectFit: 'contain' }}
              className="opacity-75 hover:opacity-100 transition-all duration-300 filter hover:filter-none"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced gradient overlays for edge fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent z-20"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent z-20"></div>

      {/* Subtle animated line */}
      <motion.div 
        className="absolute bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary-gold to-transparent z-10"
        initial={{ width: 0, x: "50%" }}
        animate={{ 
          width: ["0%", "100%", "0%"],
          x: ["50%", "0%", "50%"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
