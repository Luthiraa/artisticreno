'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

const commercialProjects = [
  {
    id: 1,
    title: 'Modern Office Renovation',
    location: 'Downtown Toronto, ON',
    description: 'Complete office transformation with open workspace design, glass partitions, and modern amenities.',
    image: '/images/commercial-service.jpg',
    category: 'Office',
    year: '2024',
    features: ['Open Workspace', 'Glass Partitions', 'Modern Amenities', 'LED Lighting']
  },
  {
    id: 2,
    title: 'Retail Store Design',
    location: 'Yorkdale Mall, ON',
    description: 'High-end retail space with custom displays, premium finishes, and strategic lighting.',
    image: '/images/project3.jpg',
    category: 'Retail',
    year: '2024',
    features: ['Custom Displays', 'Premium Finishes', 'Strategic Lighting', 'Security Systems']
  },
  {
    id: 3,
    title: 'Restaurant Renovation',
    location: 'King Street, Toronto',
    description: 'Fine dining restaurant with luxury finishes, custom bar, and professional kitchen upgrade.',
    image: '/images/project4.jpg',
    category: 'Restaurant',
    year: '2023',
    features: ['Luxury Finishes', 'Custom Bar', 'Professional Kitchen', 'Acoustic Design']
  },
  {
    id: 4,
    title: 'Medical Clinic Fit-out',
    location: 'Mississauga, ON',
    description: 'Modern medical facility with specialized treatment rooms, reception area, and accessibility features.',
    image: '/images/one-stop-solution.jpg',
    category: 'Healthcare',
    year: '2023',
    features: ['Treatment Rooms', 'Reception Area', 'Accessibility Features', 'Medical Equipment']
  },
  {
    id: 5,
    title: 'Corporate Headquarters',
    location: 'Financial District, Toronto',
    description: 'Executive office renovation with boardrooms, private offices, and collaborative spaces.',
    image: '/images/comercial.jpg',
    category: 'Corporate',
    year: '2024',
    features: ['Boardrooms', 'Private Offices', 'Collaborative Spaces', 'Executive Lounges']
  },
  {
    id: 6,
    title: 'Educational Facility',
    location: 'York University, ON',
    description: 'University building renovation with modern classrooms, laboratory spaces, and study areas.',
    image: '/images/about-us-2.jpg',
    category: 'Education',
    year: '2023',
    features: ['Modern Classrooms', 'Laboratory Spaces', 'Study Areas', 'Technology Integration']
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
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Commercial Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Explore our portfolio of professional spaces that inspire success and productivity
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
              {commercialProjects.map((project, index) => (
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
