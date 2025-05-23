import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <Image
                src="/images/artistic-reno-logo-white.png" // Placeholder for your white logo
                alt="Artistic Reno Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="text-gray-400 text-sm mt-4">© {new Date().getFullYear()} Artistic Reno. All rights reserved.</p>
            {/* Social Links Placeholder */}
            <div className="flex space-x-4 mt-4">
              {/* Add social media icons here (Facebook, Instagram, Twitter) */}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Useful links</h3>
            <ul>
              <li className="mb-2"><Link href="#about" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">About</Link></li>
              <li className="mb-2"><Link href="#projects" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">Projects</Link></li>
              <li className="mb-2"><Link href="#contact" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">Contact Us</Link></li>
              {/* Add Web Mail, Privacy Policy links if needed */}
            </ul>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul>
              <li className="mb-2">Interior Renovations</li>
              <li className="mb-2">House Construction</li>
              <li className="mb-2">Commercial Construction</li>
              <li className="mb-2">Building Maintenance</li>
              <li className="mb-2">Landscaping</li>
              {/* Add more services as needed based on the Site Areas list */}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <p className="mb-2 text-gray-400">1180 -250 Consumers Rd</p>
            <p className="mb-2 text-gray-400">Toronto Ontario</p>
            <p className="mb-2 text-gray-400">M2J 4V6</p>
            <p className="mb-2 text-gray-400">Email: <a href="mailto:info@artisticreno.ca" className="hover:underline text-gray-400">info@artisticreno.ca</a></p>
            <p className="mb-2 text-gray-400">Phone: <a href="tel:+16472866276" className="hover:underline text-gray-400">+1 (647) 286‑6276</a></p>
          </motion.div>

          {/* Recent Projects Placeholder (as seen in image) */}
          {/* This would likely be a dynamic section fetching recent projects */}
          {/* For now, adding a placeholder structure */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
          >
             <h3 className="text-lg font-semibold mb-4 text-white">Recent Projects</h3>
             {/* Placeholder for a single recent project entry */}
             <div className="text-gray-400 text-sm">
                 <p className="mb-1">30 May 2023</p>
                 <p className="font-semibold">Transforming Office Spaces:</p>
                 <p>A Recent Project by AR Construction</p>
                 <p className="text-xs mt-1">By Admin</p>
             </div>
             {/* Add more recent projects as needed */}
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer; 