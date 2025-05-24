'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const residentialProjects = [
  {
    id: 1,
    title: 'Kitchen',
    description: 'Complete kitchen renovations with custom cabinetry, premium countertops, modern appliances, and functional layouts for your dream cooking space.',
    image: '/images/kitchen.jpg',
    features: ['Custom Cabinetry', 'Premium Countertops', 'Modern Appliances', 'Space Optimization']
  },
  {
    id: 2,
    title: 'Bathroom',
    description: 'Luxury bathroom transformations featuring high-end fixtures, custom vanities, tile work, and spa-like amenities for ultimate relaxation.',
    image: '/images/bathroom.jpg',
    features: ['High-End Fixtures', 'Custom Vanities', 'Tile Installation', 'Modern Design']
  },
  {
    id: 3,
    title: 'Waterproofing',
    description: 'Professional waterproofing solutions for basements, foundations, and exterior walls to protect your home from moisture damage.',
    image: '/images/waterproof.jpeg',
    features: ['Basement Waterproofing', 'Foundation Sealing', 'Exterior Protection', 'Moisture Control']
  },
  {
    id: 4,
    title: 'Cement Floor',
    description: 'Durable cement flooring solutions including polished concrete, decorative finishes, and industrial-grade applications for modern homes.',
    image: '/images/cement.jpg',
    features: ['Polished Concrete', 'Decorative Finishes', 'Industrial Grade', 'Easy Maintenance']
  },
  {
    id: 5,
    title: 'Flooring',
    description: 'Premium flooring installation including hardwood, laminate, vinyl, and tile with expert craftsmanship and attention to detail.',
    image: '/images/florring.jpg',
    features: ['Hardwood Installation', 'Laminate Flooring', 'Vinyl Planks', 'Tile Work']
  },
  {
    id: 6,
    title: 'Electrical',
    description: 'Comprehensive electrical services including panel upgrades, rewiring, outlet installation, and smart home integration for modern living.',
    image: '/images/electrical.jpg',
    features: ['Panel Upgrades', 'Rewiring Services', 'Smart Home Integration', 'Code Compliance']
  },
  {
    id: 7,
    title: 'Plumbing',
    description: 'Expert plumbing services including pipe installation, fixture upgrades, water heater replacement, and emergency repairs.',
    image: '/images/plumbing.jpg',
    features: ['Pipe Installation', 'Fixture Upgrades', 'Water Heater Service', 'Emergency Repairs']
  }
];

export default function ResidentialProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Residential Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Professional renovation services to transform your home into your dream space
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
          </div>        </section>        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residentialProjects.map((project, index) => (
                <motion.div
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
            >              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your residential renovation project and bring your vision to life
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
