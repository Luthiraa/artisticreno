'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Navigation from '@/components/Navigation';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import PartnerLogos from '@/components/PartnerLogos';

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
                      <div className="max-w-2xl">
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={`title-${index}`}
                          transition={{ duration: 0.8 }}
                          className="text-5xl md:text-7xl font-bold mb-4 text-left"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={`subtitle-${index}`}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-xl md:text-2xl mb-8 text-left"
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
                          >
                            <motion.button
                              whileHover={{ scale: 1.1, backgroundColor: "#f3c06a" }}
                              whileTap={{ scale: 0.95 }}
                              className="w-14 h-14 rounded-full bg-primary-gold flex items-center justify-center text-white shadow-lg"
                              onClick={() => {
                                document.getElementById('about')?.scrollIntoView({ 
                                  behavior: 'smooth' 
                                });
                              }}
                              aria-label="Scroll to About section"
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="28" 
                                height="28" 
                                viewBox="0 0 24 24" 
                                fill="white" 
                                strokeWidth="2"
                                className="transform translate-y-1"
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
            <div className="absolute bottom-10 z-10">
              <div className="container">
                <div className="max-w-2xl pl-40 md:pl-64">
                  <div className="flex space-x-6">
                    {heroSlides.map((_, index) => (
                      <div key={index} className="relative">
                        <div 
                          className={`h-1 w-28 md:w-36 ${index === activeIndex ? 'bg-white/30' : 'bg-white/15'} overflow-hidden`}
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
                        <div className="mt-2 text-left text-xs font-medium text-white/90">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left side - Image columns */}              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative lg:h-[550px]">                  {/* Main image */}
                  <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src="/images/about-us-1.jpg"
                      alt="Artistic Reno Team"
                      width={600}
                      height={450}
                      className="rounded-lg object-cover w-full h-[400px]"
                    />
                  </div>
                    {/* Secondary image - Drilling picture positioned to overlap the main image */}
                  <div className="absolute bottom-1/4 -right-14 z-20 overflow-hidden rounded-lg shadow-xl max-w-[280px]">
                    <Image
                      src="/images/about-us-2.jpg"
                      alt="Artistic Reno Project"
                      width={280}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  
                  {/* Logo overlay */}
                  <div className="absolute -top-10 -left-10 z-30 bg-[var(--dark-bg)] p-4 rounded-lg shadow-xl">
                    <Image
                      src="/images/artistic-reno-logo.png"
                      alt="Artistic Reno Logo"
                      width={100}
                      height={100}
                      className="rounded-lg object-contain"
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
        <section className="py-16 bg-[var(--dark-secondary)] overflow-hidden relative">
          {/* Background overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-secondary)] to-[#0F0F0F] opacity-95 z-0"></div>
          
          <div className="container relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-primary-gold"
            >
              Our Partners
            </motion.h2>
            
            {/* Decorative line under the heading */}
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-16"></div>
            
            {/* Using PartnerLogos client component */}
            <PartnerLogos />
          </div>        </section>
          {/* Our Services Section */}
        <section className="py-16 bg-white text-black">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Residential Service Card - exactly like the reference image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg relative"
              >
                <div className="relative h-80">
                  <Image
                    src="/images/residential.jpg"
                    alt="Residential Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Residential</h3>
                  <p className="text-gray-700 text-sm">
                    Transform your home with our expert residential construction services, 
                    delivering lasting quality and precision every step of the way
                  </p>
                </div>
              </motion.div>
              
              {/* Commercial Service Card - exactly like the reference image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg relative"
              >
                <div className="relative h-80">
                  <Image
                    src="/images/comercial.jpg"
                    alt="Commercial Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                  <h3 className="text-2xl font-bold mb-2">Commercial</h3>
                  <p className="text-gray-700 text-sm">
                    Delivering high-performance commercial spaces with precision construction, 
                    durable materials, and a commitment to excellence
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 section-dark text-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
             >
                <h2 className="text-4xl font-bold mb-4">Let's work together</h2>
                <p className="text-2xl font-semibold mb-4">+1 (647) 286‑6276</p>
                <p className="text-lg mb-6">1180 -250 Consumers Rd <br /> Toronto Ontario <br /> M2J 4V6</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Get In Touch
                </motion.button>
             </motion.div>
            <ContactForm />
          </div>        </section>
      </main>
    </>
  );
}
