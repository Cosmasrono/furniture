'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';

// Placeholder style guide/lookbook data
const lookbookItems = [
  {
    id: '1',
    title: 'Minimalist Living',
    description: 'Embrace simplicity and functionality with clean lines and a serene color palette.',
    image: 'https://images.pexels.com/photos/2061730/pexels-photo-2061730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Rustic Modern Charm',
    description: 'Combine natural textures and warm tones with modern forms for a cozy yet chic ambiance.',
    image: 'https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Contemporary Elegance',
    description: 'Sophisticated designs featuring bold statements, rich materials, and striking aesthetics.',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Urban Industrial Fusion',
    description: 'Blend raw industrial elements with polished modern furniture for an edgy, metropolitan feel.',
    image: 'https://images.pexels.com/photos/2563768/pexels-photo-2563768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Scandi-Boho Retreat',
    description: 'Light woods, natural fibers, and a touch of bohemian flair for a relaxed, inviting space.',
    image: 'https://images.pexels.com/photos/3958957/pexels-photo-3958957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'African Inspired Interiors',
    description: 'Infuse vibrant colors, unique patterns, and artisanal pieces for an authentic African modern look.',
    image: 'https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function LookbookPage() {
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
          Style Guide & Lookbook
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-700 text-xl mb-16 max-w-3xl mx-auto"
        >
          Find inspiration for your next interior design project with our curated style guides and lookbooks.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {lookbookItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full h-60 bg-gray-200">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-600 text-lg w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        <p>&copy; 2025 Nenyon Furnitures. All rights reserved.</p>
      </footer>
    </div>
  );
}
