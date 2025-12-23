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
    image: 'https://images.pexels.com/photos/3556089/pexels-photo-3556089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/3556090/pexels-photo-3556090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3556091/pexels-photo-3556091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    image: 'https://images.pexels.com/photos/5910155/pexels-photo-5910155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/5910156/pexels-photo-5910156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5910157/pexels-photo-5910157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/6489084/pexels-photo-6489084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6489085/pexels-photo-6489085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    longDescription: 'The Acacia Coffee Table is a versatile piece that combines rustic charm with modern functionality. Crafted from solid Acacia wood, known for its distinct grain and durability, this table features clean lines and a lower shelf for storage. It\'s perfect for adding warmth and character to any living space.',
    image: 'https://images.pexels.com/photos/3945696/pexels-photo-3945696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3945698/pexels-photo-3945698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    name: 'Daisy Arm Chair',
    description: 'Contemporary arm chair with elegant design and superior comfort.',
    longDescription: 'The Daisy Arm Chair is a modern statement piece crafted with quality upholstery and sturdy wooden frame. Perfect for living rooms, bedrooms, or offices, this chair combines style and comfort in perfect harmony. Available in multiple fabric colors.',
    image: 'https://images.pexels.com/photos/2062536/pexels-photo-2062536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/5910158/pexels-photo-5910158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3556095/pexels-photo-3556095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room',
    style: 'Contemporary',
    material: 'Wood, Fabric Upholstery',
    room: 'Living Room, Bedroom',
    price: 30000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '6',
    name: 'Amina Five Seater Sofa Set',
    description: 'Luxurious five-seater sofa set with spacious seating and modern design.',
    longDescription: 'The Amina Five Seater Sofa Set is a premium furniture piece that offers both luxury and practicality. Upholstered in high-quality fabric with a solid wooden frame, this set is perfect for large living rooms and family spaces. Its elegant silhouette and ample seating make it ideal for entertaining guests.',
    image: 'https://images.pexels.com/photos/5910155/pexels-photo-5910155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/5910156/pexels-photo-5910156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5910157/pexels-photo-5910157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room, Sofas & Seating',
    style: 'Contemporary, Modern',
    material: 'Fabric, Hardwood Frame',
    room: 'Living Room',
    price: 85000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '7',
    name: 'Crafted Six Seater Dining Set',
    description: 'Premium six-seater dining set with handcrafted details and superior quality.',
    longDescription: 'This exquisite six-seater dining set features a solid hardwood table paired with six matching chairs. Handcrafted with attention to detail, it\'s perfect for formal dining rooms and entertaining. The rich finishes and ergonomic chair design make every meal an elegant affair.',
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/6489084/pexels-photo-6489084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6489085/pexels-photo-6489085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Dining Room, Dining Sets',
    style: 'Classic, Traditional',
    material: 'Hardwood',
    room: 'Dining Room',
    price: 130000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '8',
    name: '5x6 White Mirrored Bed',
    description: 'Modern white bed frame with integrated mirror design.',
    longDescription: 'The 5x6 White Mirrored Bed combines functionality with contemporary style. The integrated mirrored headboard adds elegance and makes the bedroom feel more spacious. Crafted with quality materials, it\'s perfect for modern bedroom designs.',
    image: 'https://images.pexels.com/photos/3945696/pexels-photo-3945696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3945698/pexels-photo-3945698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Bedroom, Beds',
    style: 'Modern, Contemporary',
    material: 'Wood, Mirror',
    room: 'Bedroom',
    price: 55000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '9',
    name: '6x6 Bed Frame',
    description: 'Spacious queen-size bed frame in classic brown finish.',
    longDescription: 'This 6x6 bed frame offers ample space and comfort. Crafted from solid wood with a warm brown finish, it complements various bedroom decor styles. The sturdy construction ensures durability and longevity for years of comfortable sleep.',
    image: 'https://images.pexels.com/photos/5910155/pexels-photo-5910155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/5910156/pexels-photo-5910156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5910157/pexels-photo-5910157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Bedroom, Beds',
    style: 'Traditional, Classic',
    material: 'Solid Wood',
    room: 'Bedroom',
    price: 50000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '10',
    name: 'Chest of Drawers',
    description: 'Elegant storage chest with multiple drawers for organized living.',
    longDescription: 'This functional chest of drawers combines practical storage with elegant design. Featuring five spacious drawers, it\'s perfect for bedrooms or living rooms. The rich wood finish and metal handles add a touch of sophistication to any interior.',
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/6489084/pexels-photo-6489084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6489085/pexels-photo-6489085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Storage, Home Décor',
    style: 'Traditional, Modern',
    material: 'Hardwood',
    room: 'Bedroom, Living Room',
    price: 45000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '11',
    name: '2-Seater Curved Sofa',
    description: 'Stylish curved sofa perfect for modern living spaces.',
    longDescription: 'The 2-Seater Curved Sofa brings contemporary elegance to any room. Its graceful curved design and soft upholstery create a welcoming space. Ideal for couples or compact living rooms, it\'s both functional and a stylish statement piece.',
    image: 'https://images.pexels.com/photos/3945696/pexels-photo-3945696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/3945697/pexels-photo-3945697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3945698/pexels-photo-3945698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room, Sofas & Seating',
    style: 'Contemporary, Modern',
    material: 'Fabric, Hardwood',
    room: 'Living Room',
    price: 65000,
    currency: 'KSh',
    available: true,
  },
  {
    id: '12',
    name: 'Ottoman/Pouffe',
    description: 'Versatile ottoman that doubles as a footrest and extra seating.',
    longDescription: 'This compact ottoman is a multifunctional furniture piece. Use it as a footrest, extra seating, or even a side table for your coffee cup. Available in various fabric colors, it adds comfort and style to any room.',
    image: 'https://images.pexels.com/photos/5910155/pexels-photo-5910155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/5910156/pexels-photo-5910156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5910157/pexels-photo-5910157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Living Room, Accent Furniture',
    style: 'Contemporary, Casual',
    material: 'Fabric, Foam',
    room: 'Living Room, Bedroom',
    price: 18500,
    currency: 'KSh',
    available: true,
  },
  {
    id: '13',
    name: 'Sheesham Wood Wardrobe',
    description: 'Premium wardrobe with spacious storage and elegant finish.',
    longDescription: 'Crafted from premium Sheesham wood, this wardrobe offers ample storage for your entire wardrobe. Its sturdy construction and elegant design make it a centerpiece in any bedroom. Multiple compartments and shelves ensure organized storage.',
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/6489084/pexels-photo-6489084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6489085/pexels-photo-6489085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'Bedroom, Storage',
    style: 'Traditional, Contemporary',
    material: 'Sheesham Wood',
    room: 'Bedroom',
    price: 85000,
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
        return productValue.includes(filterValue);
      }
      return true;
    });
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2 text-amber-900">Our Furniture Collection</h1>
        <p className="text-gray-600 mb-12">Explore our premium Kenyan modern furniture pieces. Each item is carefully curated for quality and design.</p>

        {/* Filters */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-amber-900 mb-3">Category</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterClick('category', null)}
                className={`block w-full text-left px-3 py-2 rounded ${activeFilters.category === null ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterClick('category', category)}
                  className={`block w-full text-left px-3 py-2 rounded ${activeFilters.category === category ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-amber-900 mb-3">Style</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterClick('style', null)}
                className={`block w-full text-left px-3 py-2 rounded ${activeFilters.style === null ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
              >
                All
              </button>
              {styles.map(style => (
                <button
                  key={style}
                  onClick={() => handleFilterClick('style', style)}
                  className={`block w-full text-left px-3 py-2 rounded ${activeFilters.style === style ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-amber-900 mb-3">Material</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterClick('material', null)}
                className={`block w-full text-left px-3 py-2 rounded ${activeFilters.material === null ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
              >
                All
              </button>
              {materials.map(material => (
                <button
                  key={material}
                  onClick={() => handleFilterClick('material', material)}
                  className={`block w-full text-left px-3 py-2 rounded ${activeFilters.material === material ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-amber-900 mb-3">Room</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleFilterClick('room', null)}
                className={`block w-full text-left px-3 py-2 rounded ${activeFilters.room === null ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
              >
                All
              </button>
              {rooms.map(room => (
                <button
                  key={room}
                  onClick={() => handleFilterClick('room', room)}
                  className={`block w-full text-left px-3 py-2 rounded ${activeFilters.room === room ? 'bg-amber-200 text-amber-900' : 'hover:bg-gray-100'}`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">
                    {product.category}
                  </span>
                  <span className="inline-block bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.style}
                  </span>
                </div>
                <div className="mb-4 border-t pt-4">
                  <p className="text-xl font-bold text-amber-900">{product.currency} {product.price?.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{product.material}</p>
                </div>

                {/* Expandable Details */}
                {expandedProductId === product.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold text-amber-900 mb-2">Details</h4>
                    <p className="text-sm text-gray-700 mb-3">{product.longDescription}</p>
                    <p className="text-sm text-gray-600"><strong>Room:</strong> {product.room}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Material:</strong> {product.material}</p>
                    {product.additionalImages && (
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {product.additionalImages.map((img, idx) => (
                          <div key={idx} className="relative h-20 w-full rounded overflow-hidden bg-gray-200">
                            <Image src={img} alt={`${product.name} view ${idx + 2}`} fill className="object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => handleToggleExpand(product.id)}
                    className="flex-1 px-4 py-2 bg-amber-100 text-amber-900 rounded hover:bg-amber-200 transition-colors font-semibold"
                  >
                    {expandedProductId === product.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <a
                    href={`https://wa.me/254700000000?text=I'm interested in ${product.name} priced at ${product.currency} ${product.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded hover:from-amber-600 hover:to-orange-600 transition-all font-semibold text-center"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your filters. Please try different selections.</p>
          </div>
        )}
      </div>
    </div>
  );
}
