'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const residentialProjects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    location: 'Toronto, ON',
    description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and modern appliances.',
    image: '/images/project1.jpg',
    category: 'Kitchen',
    year: '2024',
    features: ['Custom Cabinetry', 'Quartz Countertops', 'Smart Appliances', 'LED Lighting']
  },
  {
    id: 2,
    title: 'Luxury Bathroom Remodel',
    location: 'Mississauga, ON',
    description: 'Spa-like bathroom renovation featuring marble tiles, rainfall shower, and heated floors.',
    image: '/images/project2.jpg',
    category: 'Bathroom',
    year: '2024',
    features: ['Marble Tiles', 'Rainfall Shower', 'Heated Floors', 'Custom Vanity']
  },
  {
    id: 3,
    title: 'Whole Home Renovation',
    location: 'Markham, ON',
    description: 'Complete home makeover including open-concept living, hardwood flooring, and modern fixtures.',
    image: '/images/completed-projects.jpg',
    category: 'Full Renovation',
    year: '2023',
    features: ['Open Concept', 'Hardwood Flooring', 'Modern Fixtures', 'Custom Built-ins']
  },
  {
    id: 4,
    title: 'Contemporary Living Room',
    location: 'Richmond Hill, ON',
    description: 'Living room transformation with custom millwork, fireplace redesign, and premium finishes.',
    image: '/images/residential-service.jpg',
    category: 'Living Room',
    year: '2023',
    features: ['Custom Millwork', 'Fireplace Design', 'Premium Finishes', 'Built-in Storage']
  },
  {
    id: 5,
    title: 'Master Suite Addition',
    location: 'Vaughan, ON',
    description: 'New master suite addition with walk-in closet, ensuite bathroom, and private balcony.',
    image: '/images/residential.jpg',
    category: 'Addition',
    year: '2024',
    features: ['Walk-in Closet', 'Ensuite Bathroom', 'Private Balcony', 'Skylights']
  },
  {
    id: 6,
    title: 'Basement Renovation',
    location: 'North York, ON',
    description: 'Basement transformation into entertainment space with bar area, home theater, and guest room.',
    image: '/images/about-us-1.jpg',
    category: 'Basement',
    year: '2023',
    features: ['Bar Area', 'Home Theater', 'Guest Room', 'Full Bathroom']
  }
];

export default function ResidentialProjectsPage() {
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
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Residential Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover our portfolio of stunning home transformations across the Greater Toronto Area
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
        </section>

        {/* Projects Grid */}
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary-gold text-sm mb-3">{project.location}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-800">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss your residential renovation project and bring your vision to life
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
