'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const commercialProjects = [
  {
    id: 1,
    title: 'Carpet',
    description: 'Professional carpet installation and replacement services for commercial spaces with high-quality materials and expert craftsmanship.',
    image: '/images/carpet.jpg',
    features: ['Commercial Grade Carpeting', 'Pattern Matching', 'Quick Installation', 'Moisture Resistant Options']
  },
  {
    id: 2,
    title: 'Electrical',
    description: 'Complete electrical solutions including wiring, panel upgrades, lighting systems, and code compliance for commercial properties.',
    image: '/images/electrical-cc.jpg',
    features: ['Panel Upgrades', 'Code Compliance', 'Emergency Lighting', 'Energy Efficient Solutions']
  },
  {
    id: 3,
    title: 'Floor',
    description: 'Comprehensive flooring services including hardwood, laminate, tile, and vinyl installation with precision and durability.',
    image: '/images/flooring.jpg',
    features: ['Hardwood Installation', 'Tile & Stone', 'Vinyl Flooring', 'Floor Refinishing']
  },
  {
    id: 4,
    title: 'Lighting',
    description: 'Modern lighting design and installation to enhance ambiance, productivity, and energy efficiency in commercial spaces.',
    image: '/images/electrical-c.jpg',
    features: ['LED Solutions', 'Ambient Lighting', 'Task Lighting', 'Smart Controls']
  },
  {
    id: 5,
    title: 'Railing',
    description: 'Custom railing installation and repair services for stairs, balconies, and safety barriers with various materials and styles.',
    image: '/images/railing.jpg',
    features: ['Stainless Steel Rails', 'Glass Railings', 'Safety Compliance', 'Custom Designs']
  },
  {
    id: 6,
    title: 'Washrooms',
    description: 'Complete washroom renovation and construction services including plumbing, fixtures, accessibility features, and modern finishes.',
    image: '/images/washroom.jpg',
    features: ['ADA Compliance', 'Modern Fixtures', 'Tile Installation', 'Plumbing Services']
  },
  {
    id: 7,
    title: 'Epoxy',
    description: 'Professional epoxy flooring solutions for commercial and industrial spaces offering durability, chemical resistance, and easy maintenance.',
    image: '/images/epoxy-c.jpg',
    features: ['Chemical Resistant', 'Easy Maintenance', 'Slip Resistant', 'Quick Cure Options']
  }
];

export default function CommercialProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Commercial Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Professional renovation services for all your commercial space needs
              </p>
              <Link href="/">
                <motion.button
                  className="bg-primary-gold text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Home
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commercialProjects.map((project, index) => (                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                      <div className="w-12 h-1 bg-primary-gold rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="space-y-3">
                      <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-primary-gold/10 to-yellow-500/10 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-gold/20 hover:bg-primary-gold/20 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-gold to-yellow-500 text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Business Space?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your commercial renovation project and create a space that drives success
              </p>
              <Link href="/#contact">
                <motion.button
                  className="bg-white text-primary-gold px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
