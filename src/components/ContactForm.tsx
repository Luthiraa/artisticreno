'use client';

import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-dark-card p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-center">Get In Touch</h3>
      <form className="space-y-6">
        <div>          <label htmlFor="name" className="block text-sm font-medium text-dark-text">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm text-dark-text"
          />
        </div>
        <div>          <label htmlFor="email" className="block text-sm font-medium text-dark-text">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm text-dark-text"
          />
        </div>
        <div>          <label htmlFor="phone" className="block text-sm font-medium text-dark-text">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm text-dark-text"
          />
        </div>
        <div>          <label htmlFor="message" className="block text-sm font-medium text-dark-text">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-dark-secondary border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm text-dark-text"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full btn-primary"
        >
          Submit Now
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;