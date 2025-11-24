'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';

// Placeholder blog post data (should match the data in app/blog/page.tsx)
const blogPosts = [
  {
    id: '1',
    title: '5 Tips for Choosing the Perfect Sofa',
    description: 'Discover how to select a sofa that combines comfort, style, and durability for your living space.',
    longContent: 'Choosing the perfect sofa involves more than just aesthetics. Consider the size of your space, the primary use of the sofa (lounge vs. formal), the durability of the frame and upholstery, and of course, your personal style. A good sofa is an investment that provides comfort and defines your living area.',
    image: 'https://images.pexels.com/photos/1031975/pexels-photo-1031975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'November 15, 2025',
    author: 'Nenyon Furnitures Team',
  },
  {
    id: '2',
    title: 'The Art of Kenyan Woodworking',
    description: 'Explore the traditional techniques and modern innovations behind our handcrafted wooden furniture.',
    longContent: 'Kenyan woodworking is a craft passed down through generations, blending indigenous knowledge with contemporary design needs. Our artisans use sustainable local hardwoods like mvuli and mahogany, employing techniques that ensure both beauty and longevity. Each piece tells a story of cultural heritage and meticulous skill.',
    image: 'https://images.pexels.com/photos/1769324/pexels-photo-1769324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'October 28, 2025',
    author: 'Nenyon Furnitures Team',
  },
  {
    id: '3',
    title: 'Designing a Modern Dining Space',
    description: 'Ideas and inspiration for creating a contemporary and inviting dining room for your home.',
    longContent: 'A modern dining space is more than just a place to eat; it\'s where memories are made. Focus on a statement dining table, comfortable chairs, and thoughtful lighting. Incorporate natural elements and clean lines to create an inviting atmosphere that reflects your personal style. Consider a blend of wood and metal for a contemporary look.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'September 20, 2025',
    author: 'Nenyon Furnitures Team',
  },
];

interface BlogPostDetailProps {
  params: { slug: string };
}

export default function BlogPostDetail({ params }: BlogPostDetailProps) {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 lg:p-16 mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg mb-6"
          >
            By {post.author} on {post.date}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-10"
          >
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-800 text-lg leading-relaxed mb-8"
          >
            {post.longContent}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/blog" className="text-gray-900 hover:underline font-semibold text-lg">
              &larr; Back to Blog Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <footer className="mt-20 text-center text-gray-600 text-lg w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        <p>&copy; 2025 Nenyon Furnitures. All rights reserved.</p>
      </footer>
    </div>
  );
}
