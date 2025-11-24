'use client';

import { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';

// Realistic placeholder product data for Kenyan modern furniture with prices
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
    room: 'Living Room, Bedroom, Office',
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
  {
    id: '7',
    name: 'Kilim Accent Ottoman',
    description: 'A vibrant ottoman featuring authentic Kenyan Kilim fabric, perfect as an accent piece or extra seating.',
    longDescription: 'Add a touch of vibrant Kenyan culture to your home with this unique Kilim Accent Ottoman. Upholstered with genuine hand-woven Kilim fabric, each ottoman tells a story through its intricate patterns and rich colors. The sturdy wooden base ensures durability, while the dense foam provides comfortable seating. Ideal for living rooms, studies, or as a decorative footrest, this piece seamlessly blends traditional artistry with modern home decor.',
    image: 'https://images.pexels.com/photos/5998124/pexels-photo-5998124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/5998129/pexels-photo-5998129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5998126/pexels-photo-5998126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room, Accent Furniture',
    style: 'Bohemian, Ethnic Modern',
    material: 'Kilim Fabric, Wood',
    room: 'Living Room, Bedroom, Study',
    price: 18500, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '8',
    name: 'Coastal Hardwood Console Table',
    description: 'A sleek console table crafted from locally sourced coastal hardwood, perfect for hallways or living room entries.',
    longDescription: 'This elegant console table brings the serene beauty of the Kenyan coast into your home. Handcrafted from durable coastal hardwoods like neem or casuarina, its minimalist design highlights the natural grain and rich tones of the wood. Perfect for displaying decor, holding keys, or as a stylish entryway piece, it combines practical functionality with a modern, earthy aesthetic.',
    image: 'https://images.pexels.com/photos/1109304/pexels-photo-1109304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/1109304/pexels-photo-1109304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/276646/pexels-photo-276646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Hallway, Living Room',
    style: 'Minimalist, Coastal Modern',
    material: 'Neem Wood, Casuarina Wood',
    room: 'Hallway, Living Room, Entryway',
    price: 42000, // KSh
    currency: 'KSh',
    available: true,
  },
  {
    id: '9',
    name: 'Upcycled Drum Side Table',
    description: 'An eclectic side table made from upcycled metal drums, featuring unique hand-painted African motifs.',
    longDescription: 'Embrace sustainable style with this one-of-a-kind Upcycled Drum Side Table. Each piece is crafted from a repurposed metal drum, meticulously cleaned, treated, and then hand-painted with vibrant, contemporary African patterns by local artists. This side table is not just furniture; it’s a conversation starter, perfect for adding an artistic and industrial-chic touch to any modern living space, bedroom, or creative studio.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room, Accent Furniture',
    style: 'Industrial, Eclectic, African Contemporary',
    material: 'Upcycled Metal, Paint',
    room: 'Living Room, Bedroom, Studio',
    price: 25000, // KSh
    currency: 'KSh',
    available: true,
  },
];

const getUniqueFilters = (key: keyof typeof products[0]) => {
  const filters = new Set<string>();
  products.forEach(product => {
    if (typeof product[key] === 'string') {
      (product[key] as string).split(', ').forEach(item => filters.add(item.trim()));
    }
  });
  return Array.from(filters);
};

const categories = getUniqueFilters('category');
const styles = getUniqueFilters('style');
const materials = getUniqueFilters('material');
const rooms = getUniqueFilters('room');

export default function ProductsPage() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string | null>>({
    category: null,
    style: null,
    material: null,
    room: null,
  });

  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  const handleToggleExpand = (productId: string) => {
    setExpandedProductId(prevId => (prevId === productId ? null : productId));
  };

  const handleFilterClick = (filterType: string, filterValue: string | null) => {
    setActiveFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType] === filterValue ? null : filterValue,
    }));
  };

  const filteredProducts = products.filter(product => {
    return Object.entries(activeFilters).every(([filterType, filterValue]) => {
      if (!filterValue) return true;
      const productValue = product[filterType as keyof typeof products[0]];
      if (typeof productValue === 'string') {
        return productValue.split(', ').map(item => item.trim()).includes(filterValue);
      }
      return false;
    });
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-gray-900 leading-tight"
        >
          Our Collections
        </motion.h1>

        {/* Filters */}
        <div className="flex flex-col gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <h3 className="text-xl font-semibold text-gray-800 w-full text-center mb-2">Categories:</h3>
            <button
              onClick={() => handleFilterClick('category', null)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${!activeFilters.category ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterClick('category', category)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${activeFilters.category === category ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <h3 className="text-xl font-semibold text-gray-800 w-full text-center mb-2">Styles:</h3>
            <button
              onClick={() => handleFilterClick('style', null)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${!activeFilters.style ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              All
            </button>
            {styles.map(style => (
              <button
                key={style}
                onClick={() => handleFilterClick('style', style)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${activeFilters.style === style ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {style}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <h3 className="text-xl font-semibold text-gray-800 w-full text-center mb-2">Materials:</h3>
            <button
              onClick={() => handleFilterClick('material', null)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${!activeFilters.material ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              All
            </button>
            {materials.map(material => (
              <button
                key={material}
                onClick={() => handleFilterClick('material', material)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${activeFilters.material === material ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {material}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <h3 className="text-xl font-semibold text-gray-800 w-full text-center mb-2">Rooms:</h3>
            <button
              onClick={() => handleFilterClick('room', null)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${!activeFilters.room ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              All
            </button>
            {rooms.map(room => (
              <button
                key={room}
                onClick={() => handleFilterClick('room', room)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${activeFilters.room === room ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {room}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative w-full h-60 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-3 text-gray-900 cursor-pointer"
                      onClick={() => handleToggleExpand(product.id)}
                    >
                      {product.name}
                    </h3>
                    {expandedProductId === product.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="mt-4 text-gray-700 text-lg"
                      >
                        <p className="mb-2"><span className="font-semibold">Description:</span> {product.description}</p>
                        <p className="mb-2"><span className="font-semibold">Material:</span> {product.material}</p>
                        <p className="mb-2"><span className="font-semibold">Style:</span> {product.style}</p>
                        <p className="mb-2"><span className="font-semibold">Room:</span> {product.room}</p>
                        <p className="text-xl font-bold text-gray-900">{product.currency} {product.price.toLocaleString()}</p>
                      </motion.div>
                    )}
                    {expandedProductId !== product.id && (
                      <p className="text-gray-700 text-lg mb-2">{product.description}</p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-center text-xl text-gray-700"
            >
              No products match your current filters.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
