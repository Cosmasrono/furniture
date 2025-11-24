'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';

export default function AboutPage() {
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
          Our Story & Craftsmanship
        </motion.h1>

        {/* Company Story */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <Image 
                src="https://images.pexels.com/photos/5998124/pexels-photo-5998124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Nenyon Furnitures Story" 
                width={700}
                height={500}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Journey</h2>
              <p className="text-gray-700 text-lg mb-4">
                Nenyon Furnitures began with a simple vision: to blend the rich artistic heritage of Kenya with contemporary design principles. 
                Founded by passionate artisans, our journey is rooted in a deep appreciation for quality materials and timeless aesthetics.
              </p>
              <p className="text-gray-700 text-lg">
                Every piece we create is a testament to meticulous craftsmanship, designed to bring elegance and functionality to modern homes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Craftsmanship & Values */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Craftsmanship & Sustainability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Craft</h3>
              <p className="text-gray-700 text-lg mb-4">
                At Nenyon, craftsmanship is more than just a process – it's a philosophy. Our skilled artisans meticulously 
                hand-select the finest local woods and materials, ensuring every cut, joint, and finish meets our exacting standards.
              </p>
              <p className="text-gray-700 text-lg">
                We combine traditional techniques with modern innovation to create furniture that is not only beautiful but also built to last for generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-700 text-lg mb-4">
                Sustainability is at the heart of everything we do. We are committed to responsible sourcing, minimizing waste, 
                and supporting local communities through fair labor practices.
              </p>
              <p className="text-gray-700 text-lg">
                We believe in creating furniture that not only enriches your home but also respects our planet and its people.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
      <footer className="mt-20 text-center text-gray-600 text-lg w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        <p>&copy; 2025 Nenyon Furnitures. All rights reserved.</p>
      </footer>
    </div>
  );
}
