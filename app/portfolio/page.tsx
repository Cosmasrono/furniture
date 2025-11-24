'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';

// Placeholder project data
const projects = [
  {
    id: '1',
    title: 'Modern Nairobi Loft',
    description: 'A sophisticated interior design project for a luxury loft in Nairobi.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Coastal Villa furnishing',
    description: 'Custom furniture solutions for a stunning villa overlooking the Kenyan coast.',
    image: 'https://images.pexels.com/photos/1879060/pexels-photo-1879060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Boutique Hotel Lobby',
    description: 'Creating a welcoming and elegant atmosphere for a boutique hotel lobby.',
    image: 'https://images.pexels.com/photos/210240/pexels-photo-210240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Contemporary Family Home',
    description: 'Tailored furniture and decor for a vibrant family home in the suburbs.',
    image: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Executive Office Space',
    description: 'Designing a sleek and productive environment for a corporate executive office.',
    image: 'https://images.pexels.com/photos/39265/office-desk-workspace-working-39265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'Artistic Cafe Interior',
    description: 'Unique furniture pieces contributing to the artistic vibe of a modern cafe.',
    image: 'https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function PortfolioPage() {
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
          Our Portfolio & Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-gray-700 text-xl mb-16 max-w-3xl mx-auto"
        >
          Discover our past projects and see how Nenyon Furnitures brings unique design visions to life.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full h-60 bg-gray-200">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
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
