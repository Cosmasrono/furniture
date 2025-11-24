'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';

// Placeholder gallery data
const galleryImages = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Living Room Project 1',
    description: 'A harmonious blend of modern and traditional elements in a spacious living area.',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Bedroom Project 1',
    description: 'Serene bedroom design featuring bespoke wooden furniture and warm lighting.',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Dining Room Project 1',
    description: 'Elegant dining space with a large custom table, perfect for gatherings.',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Office Project 1',
    description: 'Functional and stylish home office setup for productivity and comfort.',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Outdoor Patio Project',
    description: 'Luxurious outdoor patio furniture for ultimate relaxation.',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Living Room Project 2',
    description: 'Spacious living room with bespoke shelving and comfortable seating.',
  },
];

export default function ShowroomPage() {
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
          Virtual Showroom
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-700 text-xl mb-16 max-w-3xl mx-auto"
        >
          Explore our beautifully designed spaces and see how Nenyon Furnitures can transform your home.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full h-60 bg-gray-200">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{image.alt}</h3>
                <p className="text-gray-700">{image.description}</p>
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
