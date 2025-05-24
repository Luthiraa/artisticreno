'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Navigation from '@/components/Navigation';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';
import PartnerLogos from '@/components/PartnerLogos';
import Preloader from '@/components/Preloader';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const heroSlides = [
  {
    image: '/hero.jpg',
    title: 'Building for a lifetime',
    subtitle: 'We offer top-quality interior renovations, new home construction, and commercial project solutions.',
  },
  {
    image: '/hero1.jpg',
    title: 'Excellence in Construction',
    subtitle: 'Building Your Vision, One Project at a Time',
  },
  {
    image: '/hero3.jpg',
    title: 'Quality Guaranteed',
    subtitle: '25+ Years of Experience in the GTA',
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
      <AnimatePresence>
        <Preloader />
      </AnimatePresence>
      <Navigation />
      <main>
        {/* Hero Section - Carousel with Left-oriented Text */}
        <section id="home" className="relative h-screen flex items-center text-white">
          <div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              loop={true}
              speed={800}
              className="h-full w-full"
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index} className="h-full w-full">
                  <div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${slide.image})`,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      filter: 'brightness(0.85)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/40" aria-hidden="true"></div>
                  <div className="relative h-full flex items-center">
                    <div className="container">
                      <div className="max-w-2xl">                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={`title-${index}`}
                          transition={{ duration: 0.8 }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-left"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={`subtitle-${index}`}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-left"
                        >
                          {slide.subtitle}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-left"
                        >
                          <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2,
                              ease: "easeInOut"
                            }}
                          >                            <motion.button
                              whileHover={{ scale: 1.1, backgroundColor: "#f3c06a" }}
                              whileTap={{ scale: 0.95 }}
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-gold flex items-center justify-center text-white shadow-lg"
                              onClick={() => {
                                document.getElementById('about')?.scrollIntoView({ 
                                  behavior: 'smooth' 
                                });
                              }}
                              aria-label="Scroll to About section"
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="white" 
                                strokeWidth="2"
                                className="transform translate-y-1 sm:w-7 sm:h-7"
                              >
                                <polygon points="4 8, 12 16, 20 8" />
                              </svg>
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
              {/* Custom progress bar - aligned with main text content */}
            <div className="absolute bottom-6 sm:bottom-10 z-10">
              <div className="container">
                <div className="max-w-2xl px-4 sm:pl-20 md:pl-40 lg:pl-64">
                  <div className="flex space-x-3 sm:space-x-6">
                    {heroSlides.map((_, index) => (
                      <div key={index} className="relative">
                        <div 
                          className={`h-1 w-16 sm:w-24 md:w-28 lg:w-36 ${index === activeIndex ? 'bg-white/30' : 'bg-white/15'} overflow-hidden`}
                        >
                          <motion.div 
                            className="h-full bg-primary-gold"
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: index === activeIndex ? "100%" : "0%" 
                            }}
                            transition={{ 
                              duration: index === activeIndex ? 5 : 0,
                              ease: "linear"
                            }}
                            key={`progress-${activeIndex}-${index}`}
                          />
                        </div>
                        <div className="mt-2 text-left text-xs font-medium text-white/90 hidden sm:block">
                          {index === 0 && "Building Careers"}
                          {index === 1 && "Strong Safety Teams"}
                          {index === 2 && "Green Building"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        {/* About Company Section */}
        <section id="about" className="py-20 relative bg-[var(--dark-bg)] text-white">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[var(--dark-bg)] z-0"></div>
              <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left side - Image columns */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative order-2 lg:order-1"
              >
                <div className="relative h-[300px] sm:h-[400px] lg:h-[550px]">
                  {/* Main image */}
                  <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src="/images/epoxy-ar.png"
                      alt="Artistic Reno Team"
                      width={600}
                      height={450}
                      className="rounded-lg object-cover w-full h-[250px] sm:h-[300px] lg:h-[400px]"
                    />
                  </div>
                  {/* Secondary image - Drilling picture positioned to overlap the main image */}
                  <div className="absolute bottom-1/4 -right-6 sm:-right-10 lg:-right-14 z-20 overflow-hidden rounded-lg shadow-xl max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]">
                    <Image
                      src="/images/about-us-2.jpg"
                      alt="Artistic Reno Project"
                      width={280}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  {/* Logo overlay */}
                  <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 lg:-top-10 lg:-left-10 z-30 bg-[var(--dark-bg)] p-3 sm:p-4 rounded-lg shadow-xl">
                    <Image
                      src="/images/artistic-reno-logo.png"
                      alt="Artistic Reno Logo"
                      width={80}
                      height={80}
                      className="rounded-lg object-contain sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                    />
                  </div>
                </div>
              </motion.div>
                {/* Right side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-7 lg:pl-12 mt-16 lg:mt-0"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-gold mb-2">About Our Company</h3>
                    <h2 className="text-4xl font-bold mb-6">Artistic Reno</h2>
                  </div>
                  
                  <p className="text-lg">
                    Unleashing creativity in every project, Artistic Reno transforms spaces with precision and passion. Our dedicated team brings 15+ years of experience in residential and commercial renovations across the Greater Toronto Area.
                  </p>
                  
                  <p className="text-[var(--dark-text)]">
                    From kitchen and bathroom remodels to complete home renovations, we deliver exceptional craftsmanship and innovative solutions tailored to your vision. Our commitment to quality materials and meticulous attention to detail ensures results that exceed expectations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>        </section>          {/* Our Partners Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-primary-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-gold/3 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block bg-primary-gold/10 px-6 py-2 rounded-full mb-4"
              >
                <span className="text-primary-gold font-semibold text-sm uppercase tracking-wide">
                  Trusted By Industry Leaders
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary-gold">Partners</span>
              </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re proud to work with some of the most prestigious venues and organizations in the Greater Toronto Area, 
                delivering exceptional construction and renovation services.
              </p>
            </motion.div>
            
            {/* Enhanced PartnerLogos component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PartnerLogos />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Excellence</h3>
                <p className="text-gray-600">Licensed and insured with proven track record</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">Consistently meeting project deadlines</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600">Superior craftsmanship in every project</p>
              </div>
            </motion.div>
          </div>
        </section>{/* Our Services Section */}
        <ServicesSection />        {/* Enhanced Contact Section */}
        <section id="contact" className="relative py-24 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg text-white overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-gold/5 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Let&apos;s <span className="text-primary-gold">Connect</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to transform your space? Contact our expert team today for a consultation. 
                We&apos;re here to bring your vision to life.
              </p>
              
              {/* Main CTA Button - Yellow for high visibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <motion.a
                  href="tel:+16472866276"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-yellow-300 transition-all duration-300 hover:shadow-yellow-400/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now: (647) 286-6276</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-dark-card/90 to-dark-secondary/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-2xl h-full text-center group-hover:border-primary-gold/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Call Us Direct</h3>
                  <a href="tel:+16472866276" className="text-3xl font-bold text-primary-gold hover:text-yellow-400 transition-colors block mb-4">
                    (647) 286-6276
                  </a>
                  <p className="text-gray-300 text-lg">
                    Speak with our experts immediately for instant consultation and project quotes.
                  </p>
                </motion.div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-dark-card/90 to-dark-secondary/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-2xl h-full text-center group-hover:border-primary-gold/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                  <a href="mailto:info@artisticreno.ca" className="text-xl font-bold text-primary-gold hover:text-yellow-400 transition-colors block mb-4 break-all">
                    info@artisticreno.ca
                  </a>                  <p className="text-gray-300 text-lg">
                    Send us your project details and we&apos;ll respond within 24 hours with a detailed proposal.
                  </p>
                </motion.div>
              </motion.div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-gradient-to-br from-dark-card/90 to-dark-secondary/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 shadow-2xl h-full text-center group-hover:border-primary-gold/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Visit Our Office</h3>
                  <div className="text-gray-300 text-lg leading-relaxed mb-4">
                    <p className="font-semibold text-primary-gold">1180 -250 Consumers Rd</p>
                    <p>Toronto, Ontario</p>
                    <p>M2J 4V6</p>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Schedule an in-person consultation at our Toronto office to discuss your project in detail.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Business Hours & Extra Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-20 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Business Hours */}
                <div className="bg-gradient-to-br from-dark-card/80 to-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-primary-gold font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-primary-gold font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-dark-card/80 to-dark-secondary/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center justify-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">Free Consultations</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
