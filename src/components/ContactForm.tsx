'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-dark-card/90 to-dark-secondary/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-700/50"
    >      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2 text-white">Get Your Free Quote</h3>
        <p className="text-gray-300">Tell us about your project and we&apos;ll get back to you within 24 hours</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-dark-bg/80 border border-gray-600/50 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Enter your full name"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-dark-bg/80 border border-gray-600/50 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </motion.div>

        {/* Phone Input */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-dark-bg/80 border border-gray-600/50 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
            placeholder="(647) 123-4567"
          />
        </motion.div>

        {/* Project Type Select */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-dark-bg/80 border border-gray-600/50 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white transition-all duration-300"
          >
            <option value="">Select a project type</option>
            <option value="kitchen">Kitchen Renovation</option>
            <option value="bathroom">Bathroom Renovation</option>
            <option value="basement">Basement Finishing</option>
            <option value="home">Full Home Renovation</option>
            <option value="commercial">Commercial Project</option>
            <option value="new-construction">New Construction</option>
            <option value="other">Other</option>
          </select>
        </motion.div>

        {/* Message Textarea */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-4 bg-dark-bg/80 border border-gray-600/50 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
            placeholder="Tell us about your project... What are your goals, timeline, and budget range?"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02, backgroundColor: "#f3c06a" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary-gold text-dark-bg py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-700/50"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>24hr Response</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure & Private</span>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;