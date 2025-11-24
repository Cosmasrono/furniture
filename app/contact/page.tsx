'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-gray-900 leading-tight"
        >
          Get In Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 text-lg"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 text-lg"
                  placeholder="your@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 text-lg"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-700 transition-colors"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.section>

          {/* Contact Info & Map */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Details</h2>
            <div className="space-y-6 text-lg text-gray-700 mb-8">
              <p><strong>Phone:</strong> <a href="tel:+254712345678" className="text-gray-900 hover:underline">+254 712 345 678</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@nenyonfurnitures.com" className="text-gray-900 hover:underline">info@nenyonfurnitures.com</a></p>
              <p><strong>Location:</strong> 123 Design Street, Nairobi, Kenya</p>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-gray-900">Follow Us</h3>
            <div className="flex gap-6 mb-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-3xl" aria-label="Facebook"><i className="fab fa-facebook-square"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-3xl" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-3xl" aria-label="Twitter"><i className="fab fa-twitter-square"></i></Link>
            </div>

            <h3 className="text-3xl font-bold mb-6 text-gray-900">Find Us</h3>
            <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Google Maps Embed */}
              <p className="flex items-center justify-center h-full text-gray-600 text-lg">
                [Google Maps Embed Placeholder]
              </p>
            </div>
          </motion.section>
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-600 text-lg w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        <p>&copy; 2025 Nenyon Furnitures. All rights reserved.</p>
      </footer>
    </div>
  );
}
