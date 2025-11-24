'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

// Placeholder blog post data
const blogPosts = [
  {
    id: '1',
    title: '5 Tips for Choosing the Perfect Sofa',
    description: 'Discover how to select a sofa that combines comfort, style, and durability for your living space.',
    image: 'https://images.pexels.com/photos/1031975/pexels-photo-1031975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'November 15, 2025',
  },
  {
    id: '2',
    title: 'The Art of Kenyan Woodworking',
    description: 'Explore the traditional techniques and modern innovations behind our handcrafted wooden furniture.',
    image: 'https://images.pexels.com/photos/1769324/pexels-photo-1769324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'October 28, 2025',
  },
  {
    id: '3',
    title: 'Designing a Modern Dining Space',
    description: 'Ideas and inspiration for creating a contemporary and inviting dining room for your home.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'September 20, 2025',
  },
];

export default function BlogPage() {
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
          Our Blog & Inspiration
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative w-full h-60 bg-gray-200">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h3>
                  <p className="text-gray-700 text-lg mb-4">{post.description}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </Link>
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
