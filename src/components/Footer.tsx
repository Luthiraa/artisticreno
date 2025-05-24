'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg text-dark-text overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Logo and Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/artistic-reno-logo.png"
                alt="Artistic Reno Logo"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Transforming spaces with precision and passion. Your trusted partner for residential and commercial renovations in the Greater Toronto Area.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-dark-bg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-dark-bg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-dark-bg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.726-1.378l-.741 2.845c-.266 1.017-1.009 2.293-1.499 3.063C9.516 23.614 10.747 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-primary-gold/20 rounded-full flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-dark-bg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.988 15.139 2 12.545 2 7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748L12.545 10.239z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/residential-projects" className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link href="/commercial-projects" className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-primary-gold rounded-full mr-3"></span>
                Kitchen Renovations
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-primary-gold rounded-full mr-3"></span>
                Bathroom Remodeling
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-primary-gold rounded-full mr-3"></span>
                Basement Finishing
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-primary-gold rounded-full mr-3"></span>
                Home Construction
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-primary-gold rounded-full mr-3"></span>
                Commercial Projects
              </li>
              <li className="text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-primary-gold rounded-full mr-3"></span>
                Building Maintenance
              </li>
            </ul>
          </motion.div>

          {/* Contact Information & Recent Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-400 text-sm">
                  <p>1180 -250 Consumers Rd</p>
                  <p>Toronto, Ontario M2J 4V6</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@artisticreno.ca" className="text-gray-400 hover:text-primary-gold transition-colors text-sm">
                  info@artisticreno.ca
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+16472866276" className="text-gray-400 hover:text-primary-gold transition-colors text-sm">
                  +1 (647) 286‑6276
                </a>
              </div>
            </div>

            {/* Recent Project Highlight */}
            <div className="bg-dark-card/50 rounded-lg p-4 border border-gray-700/50">
              <h4 className="text-sm font-semibold text-white mb-2">Latest Project</h4>
              <p className="text-xs text-gray-400 mb-1">December 2024</p>
              <p className="text-sm font-medium text-gray-300 mb-1">Luxury Kitchen Transformation</p>
              <p className="text-xs text-gray-400">Complete modern kitchen renovation in Mississauga</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Artistic Reno. All rights reserved. | 
              <span className="text-primary-gold"> Licensed & Insured</span>
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-gold transition-colors">
                Sitemap
              </Link>
            </div>
          </div>        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;