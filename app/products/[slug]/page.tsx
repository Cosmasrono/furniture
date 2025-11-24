'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import { useState } from 'react'; // Import useState
import ImageLightbox from '@/components/ImageLightbox'; // Import ImageLightbox

// Placeholder product data (should match the data in app/products/page.tsx)
const products = [
  {
    id: '1',
    name: 'Blockwood Single Seater Sofa',
    description: 'A contemporary single-seater sofa featuring a durable wooden frame and high-density foam cushions.',
    longDescription: 'This exquisite Blockwood single-seater sofa is handcrafted with a solid mvuli hardwood frame, high-density foam cushions, and premium Kenyan cotton upholstery. Its contemporary design and robust construction ensure comfort and longevity. Ideal for modern living rooms, bedrooms, or office reception areas.',
    image: 'https://images.pexels.com/photos/706140/pexels-photo-706140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1031975/pexels-photo-1031975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room',
    style: 'Contemporary',
    material: 'Mvuli Wood, Fabric',
    dimensions: 'W: 220cm, D: 90cm, H: 80cm',
    colors: ['Grey', 'Beige', 'Charcoal'],
    price: 79999, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '2',
    name: 'Handcrafted Teak Accent Chair',
    description: 'An antique-style stool crafted with intricate designs, adding a touch of elegance to any space.',
    longDescription: 'This unique accent chair is a masterpiece of Kenyan craftsmanship, made from sustainably sourced Teak wood. Its intricate hand-carved details and ergonomic design provide both comfort and artistic flair. A perfect statement piece for a discerning collector, suitable for living rooms or grand hallways.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room',
    style: 'Traditional, Modern',
    material: 'Teak Wood',
    room: 'Living Room, Study',
    price: 35000, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '3',
    name: 'Mahogany Dining Table',
    description: 'A spacious 7-seater dining table designed for living rooms, offering both comfort and style.',
    longDescription: 'This elegant dining table, crafted from solid Mahogany wood, is designed to be the heart of your home. Its spacious surface comfortably accommodates up to 8 people, making it ideal for family gatherings and entertaining. The rich, dark finish and sturdy construction reflect superior Kenyan woodworking, blending tradition with modern lines.',
    image: 'https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/279720/pexels-photo-279720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Dining Room',
    style: 'Classic, Contemporary',
    material: 'Mahogany Wood',
    room: 'Dining Room',
    price: 130000, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '4',
    name: 'Acacia Coffee Table',
    description: 'A blend of timeless design and modern functionality, this coffee table complements various decor styles.',
    longDescription: 'The Acacia Coffee Table is a versatile piece that combines rustic charm with modern functionality. Crafted from solid Acacia wood, known for its distinct grain and durability, this table features clean lines and a lower shelf for storage. It’s perfect for adding warmth and character to any living space.',
    image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room',
    style: 'Rustic Modern',
    material: 'Acacia Wood',
    room: 'Living Room',
    price: 32000, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '5',
    name: 'Sheesham Wood Wardrobe',
    description: 'Spacious and elegant wardrobe to complement any modern bedroom.',
    longDescription: 'Organize your bedroom with our stunning Sheesham Wood Wardrobe. Known for its strength and beautiful grain, Sheesham wood brings a touch of natural elegance. This wardrobe offers ample storage with multiple shelves and a hanging rail, making it both practical and stylish for modern homes.',
    image: 'https://images.pexels.com/photos/271755/pexels-photo-271755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3773574/pexels-photo-3773574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Bedroom',
    style: 'Sleek, Contemporary',
    material: 'Sheesham Wood',
    room: 'Bedroom',
    price: 85000, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '6',
    name: 'Bamboo Outdoor Lounge Set',
    description: 'Durable and comfortable lounge chair for your patio or garden.',
    longDescription: 'Create an oasis in your outdoor space with our eco-friendly Bamboo Lounge Set. Crafted from sustainable bamboo, this set offers exceptional durability and a natural aesthetic. Perfect for patios, gardens, or balconies, it combines comfort with a laid-back, modern outdoor style.',
    image: 'https://images.pexels.com/photos/2062536/pexels-photo-2062536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/706140/pexels-photo-706140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1031975/pexels-photo-1031975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Outdoor',
    style: 'Casual, Bohemian',
    material: 'Bamboo, Fabric',
    room: 'Outdoor',
    price: 45000, // KSh
    currency: 'KSh',
    available: true,
  },
];

interface ProductDetailProps {
  params: { slug: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products.find((p) => p.id === params.slug);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxImage, setCurrentLightboxImage] = useState('');

  const openLightbox = (imageSrc: string) => {
    setCurrentLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentLightboxImage('');
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 lg:p-16 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image Gallery */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-8 cursor-zoom-in"
                onClick={() => openLightbox(product.image)}
              >
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="grid grid-cols-3 gap-4">
                {product.additionalImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="relative w-full h-24 bg-gray-200 rounded-lg overflow-hidden cursor-zoom-in hover:shadow-md transition-shadow"
                    onClick={() => openLightbox(img)}
                  >
                    <Image 
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 20vw"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-700 text-xl mb-6"
              >
                {product.longDescription}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                {product.currency} {product.price.toLocaleString()}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-800 text-lg mb-4"
              >
                <h2 className="font-bold mb-2">Specifications:</h2>
                <ul>
                  <li><strong>Category:</strong> {product.category}</li>
                  <li><strong>Style:</strong> {product.style}</li>
                  <li><strong>Material:</strong> {product.material}</li>
                  <li><strong>Dimensions:</strong> {product.dimensions}</li>
                  <li><strong>Available Colors:</strong> {product.colors.join(', ')}</li>
                </ul>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gray-900 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-gray-700 transition-colors mt-8"
              >
                Inquire About This Product
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Related Products Section (Placeholder) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full mt-20"
        >
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 leading-tight">Related Products</h2>
          <p className="text-center text-gray-700 text-lg">[Placeholder for related products carousel/grid]</p>
        </motion.section>
      </div>
      <footer className="mt-20 text-center text-gray-600 text-lg w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
        <p>&copy; 2025 Nenyon Furnitures. All rights reserved.</p>
      </footer>

      {isLightboxOpen && (
        <ImageLightbox src={currentLightboxImage} alt={product.name} onClose={closeLightbox} />
      )}
    </div>
  );
}
