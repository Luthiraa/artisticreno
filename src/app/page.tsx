'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

const heroSlides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Excellence in Construction',
    subtitle: 'Building Your Vision, One Project at a Time',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Professional Renovations',
    subtitle: 'Transform Your Space with Expert Craftsmanship',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Quality Guaranteed',
    subtitle: '25+ Years of Experience in the GTA',
  },
];

const features = [
  { title: 'Reliability & Trust', description: 'Our promise stands on the proven track record.' },
  { title: 'Quality Workmanship', description: 'We deliver projects of lasting value.' },
  { title: 'Fair & Transparent Pricing', description: 'No hidden fees. We offer clear quotes.' },
];

const services = [
  { name: 'Residential', image: '/images/residential-service.jpg', description: 'Tailoring to your needs with our expert residential construction services.' },
  { name: 'Commercial', image: '/images/commercial-service.jpg', description: 'Delivering high-quality commercial construction services.' },
];

const numberedServices = [
  { number: 1, title: 'Building Construction', description: 'Professional building construction services for residential and commercial projects.' },
  { number: 2, title: 'Building Renovation', description: 'Expert building renovation services to modernize and enhance your property.' },
  { number: 3, title: 'Building Maintenance', description: 'Comprehensive building maintenance services for optimal property upkeep.' },
  { number: 4, title: 'Interior Design', description: 'Expert interior design services to transform your space with style and functionality.' },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section - Updated Text */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url(/images/hero-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
          <div className="relative z-10 container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Building <br /> for a lifetime.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              We offer top-quality interior renovations, new home construction, and commercial project solutions.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View All
            </motion.button>
          </div>
        </section>

        {/* Welcome / About Company Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-primary-green mb-2">Welcome</h3>
                <h2 className="text-4xl font-bold mb-6">About Company</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Dedicated to delivering exceptional quality and outstanding results.
                </p>
                <p className="text-gray-600 mb-6">
                  With over 25 years of experience, AR Construction has established itself as a leader in providing innovative and professional construction and renovation services.
                </p>
                <p className="text-gray-600 mb-6">
                  Our expertise spans office remodeling, home renovations and luxurious kitchen and bath upgrades, allowing us to transform your dreams into reality with precision and creativity.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Read More
                </motion.button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Placeholder for images from the About Us section in the image, potentially combined or styled differently */}
                <Image
                  src="/images/about-company.jpg" // Placeholder image
                  alt="About Company"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Value Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-8"
            >
              Our Value
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-lg text-gray-700 text-center mb-8"
            >
              We are committed to integrity, quality, customer satisfaction, innovation, safety, sustainability, professionalism, reliability, community, and continuous improvement.
            </motion.p>
            {/* Placeholder for Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Image
                src="/images/signature.png" // Placeholder for signature image
                alt="Founder Signature"
                width={200}
                height={100}
              />
              <p className="text-lg font-semibold mt-2">Afzal Mulaffer</p>
              <p className="text-gray-600">Founder</p>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section - Updated */}
        <section className="py-16 bg-white">
          <div className="container text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-4"
            >
              We have 25 years experience in construction
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-primary-green">15</p>
                <p className="text-lg text-gray-600">Active Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-primary-green">870</p>
                <p className="text-lg text-gray-600">Satisfied Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-bold text-primary-green">45</p>
                <p className="text-lg text-gray-600">Projects Complete</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Construction Area Percentages */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            {/* Add a title or context if needed, not explicitly in image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-center">
                <p className="text-5xl font-bold text-primary-green mb-2">85%</p>
                <p className="text-lg text-gray-600">Commercial building upgrades</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="text-center">
                <p className="text-5xl font-bold text-primary-green mb-2">78%</p>
                <p className="text-lg text-gray-600">Interior construction</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="text-center">
                <p className="text-5xl font-bold text-primary-green mb-2">83%</p>
                <p className="text-lg text-gray-600">Exterior Construction</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="text-center">
                <p className="text-5xl font-bold text-primary-green mb-2">72%</p>
                <p className="text-lg text-gray-600">Renovation & Remodeling</p>
              </motion.div>
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} viewport={{ once: true }} className="text-center">
                <p className="text-5xl font-bold text-primary-green mb-2">85%</p>
                <p className="text-lg text-gray-600">Preventative maintenance</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission Section (Placeholder based on image text) */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-8"
            >
              Our Mission
            </motion.h2>
            {/* Add mission statement text here */}
          </div>
        </section>

        {/* Site Areas What We Serve Section */}
         <section className="py-20 bg-gray-50">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-8"
                >
                    Site Areas <br /> what we serve
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">RESIDENTIAL CONSTRUCTION</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">RENOVATION AND REFURBISHMENT</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">COMMERCIAL CONSTRUCTION</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">INTERIOR DESIGN</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">FRAMING SERVICES</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">ELECTRICAL SERVICES</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">PLUMBING SERVICES</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">BUILDING MAINTENANCE</p></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md text-center"><p className="text-lg font-semibold text-primary-green">LANDSCAPING</p></motion.div>
                </div>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Read More
                    </motion.button>
                </motion.div>
            </div>
         </section>

        {/* Our Services Section - Numbered Cards */}
        <section id="our-services" className="py-20 bg-white">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {numberedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl font-bold text-primary-green mb-4">{service.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  {/* Optional: Add Read More link */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Work Together / Contact Info Section */}
        <section id="contact" className="py-20 bg-primary-green text-white">
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
          </div>
        </section>

        {/* Mission Section (Content Placeholder) */}
        {/* Moved down as per image flow */}
         <section className="py-20 bg-white">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-8"
            >
              Mission
            </motion.h2>
            {/* Add mission statement text here */}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
