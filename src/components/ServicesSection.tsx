'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const servicesData = {
  residential: {
    title: 'Residential Services',
    subtitle: 'Transforming your house into a dream home',
    description: 'We specialize in complete home renovations, kitchen and bathroom remodels, flooring installations, and custom interior design. Our team brings creativity and precision to every residential project.',
    features: [
      'Kitchen & Bathroom Renovations',
      'Custom Interior Design',
      'Flooring & Tiling',
      'Paint & Finishing',
      'Home Additions',
      'Complete Home Makeovers'
    ],    images: [
      '/images/res1.jpg',
      '/images/res2.jpg',
      '/images/res3.jpg',
      '/images/residential-service.jpg'
    ],
    mainImage: '/images/residential.jpg'
  },
  commercial: {
    title: 'Commercial Services',
    subtitle: 'Professional spaces that inspire success',
    description: 'From office renovations to retail spaces, we deliver commercial projects that enhance productivity and create impressive business environments. We work with tight schedules and maintain the highest quality standards.',
    features: [
      'Office Renovations',
      'Retail Space Design',
      'Restaurant & Hospitality',
      'Healthcare Facilities',
      'Educational Institutions',
      'Industrial Projects'
    ],
    images: [
      '/images/commercial-service.jpg',
      '/images/comm1.jpg',
      '/images/comm2.jpg',
      '/images/one-stop-solution.jpg'
    ],
    mainImage: '/images/comercial.jpg'
  }
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<'residential' | 'commercial'>('residential');
  const currentService = servicesData[activeService];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white text-black overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive renovation solutions for residential and commercial spaces
          </p>
        </motion.div>

        {/* Service Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              {Object.keys(servicesData).map((service) => (
                <motion.button
                  key={service}
                  onClick={() => setActiveService(service as 'residential' | 'commercial')}
                  className={`relative px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    activeService === service
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeService === service && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary-gold to-yellow-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">
                    {service}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            {/* Image Collage Section */}
            <motion.div
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >              <div className="relative h-[650px] w-full">
                {/* Main Background Image - Largest */}
                <motion.div
                  className="absolute top-0 left-0 w-[65%] h-[55%] z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={currentService.mainImage}
                      alt={`${currentService.title} main`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium opacity-90">Featured Project</p>
                    </div>
                  </div>
                </motion.div>                {/* Top Right Overlapping Image */}
                <motion.div
                  className="absolute top-10 right-[-5%] w-[45%] h-[40%] z-20"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src={currentService.images[0]}
                      alt={`${currentService.title} project 1`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/10 to-transparent" />
                  </div>
                </motion.div>                {/* Bottom Left Overlapping Image */}
                <motion.div
                  className="absolute bottom-16 left-8 w-[42%] h-[35%] z-30"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src={currentService.images[1]}
                      alt={`${currentService.title} project 2`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>                {/* Bottom Right Image - BIGGER and SHIFTED UP */}
                <motion.div
                  className="absolute bottom-4 right-[-5%] w-[48%] h-[42%] z-40"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ 
                    scale: 1.08,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <Image
                      src={currentService.images[2]}
                      alt={`${currentService.title} project 3`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>

                {/* Clean Decorative Elements */}
                <motion.div
                  className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-primary-gold/15 to-transparent rounded-full blur-md z-0"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-8 right-16 w-16 h-16 bg-gradient-to-tl from-primary-gold/15 to-transparent rounded-full blur-md z-0"
                  animate={{ 
                    scale: [1.1, 1, 1.1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </div>
            </motion.div>

            {/* Text Content Section */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <motion.h3
                  className="text-lg font-semibold text-primary-gold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentService.subtitle}
                </motion.h3>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {currentService.title}
                </motion.h2>
              </div>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {currentService.description}
              </motion.p>

              {/* Features List */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-xl font-semibold mb-4">What We Offer:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-gold rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>              {/* Enhanced CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-6"
              >
                {/* Single prominent button */}
                <motion.a
                  href={activeService === 'residential' ? '/residential-projects' : '/commercial-projects'}
                  className="inline-block bg-gradient-to-r from-primary-gold to-yellow-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(243, 192, 106, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our {activeService === 'residential' ? 'Residential' : 'Commercial'} Portfolio
                </motion.a>
                
                {/* Contact information */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                >
                  <motion.a
                    href="tel:+16472866276"
                    className="flex items-center space-x-2 text-primary-gold hover:text-yellow-400 transition-colors font-semibold"
                    whileHover={{ scale: 1.02 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(647) 286-6276</span>
                  </motion.a>
                  
                  <span className="hidden sm:block text-gray-400">|</span>
                  
                  <motion.a
                    href="mailto:info@artisticreno.ca"
                    className="flex items-center space-x-2 text-primary-gold hover:text-yellow-400 transition-colors font-semibold"
                    whileHover={{ scale: 1.02 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@artisticreno.ca</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
