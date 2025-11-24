'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';

// Placeholder Instagram feed data
const instagramPosts = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Instagram Post 1',
    link: '#',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Instagram Post 2',
    link: '#',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Instagram Post 3',
    link: '#',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Instagram Post 4',
    link: '#',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Instagram Post 5',
    link: '#',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Instagram Post 6',
    link: '#',
  },
];

export default function InstagramPage() {
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
          Our Instagram Feed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-700 text-xl mb-16 max-w-3xl mx-auto"
        >
          Follow us on Instagram for daily dose of design inspiration, behind-the-scenes, and new arrivals.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full h-48 md:h-60 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <i className="fab fa-instagram text-white text-4xl"></i>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-600 text-lg w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        <p>&copy; 2025 Nenyon Furnitures. All rights reserved.</p>
      </footer>
    </div>
  );
}
