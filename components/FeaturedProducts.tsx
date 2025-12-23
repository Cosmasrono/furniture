'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: string;
    tag?: string;
}

const products: Product[] = [
    {
        id: 'cambridge-7-seater',
        name: 'Cambridge 7-Seater Fabric Sofa',
        description: 'Premium fabric sofa featuring modern design with deep seating comfort. Perfect for contemporary homes. Available in multiple fabric colors and finishes.',
        image: 'https://images.pexels.com/photos/3556089/pexels-photo-3556089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 'KES 189,999',
        tag: 'Best Seller'
    },
    {
        id: 'evella-accent-chair',
        name: 'Evella Premium Accent Chair',
        description: 'Stylish accent chair with ergonomic seating. Upholstered in quality fabric with wooden frame. Ideal as a statement piece for living rooms and bedrooms.',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 'KES 45,999',
        tag: 'Popular'
    },
    {
        id: 'bryant-8-seater-dining',
        name: 'Bryant 8-Seater Dining Set',
        description: 'Elegant dining set including spacious table and 8 comfortable chairs. Crafted with quality wood and upholstered seats for dining experiences.',
        image: 'https://images.pexels.com/photos/5910155/pexels-photo-5910155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 'KES 249,999',
        tag: 'Limited Edition'
    }
];

interface FeaturedProductsProps {
    inquireViaWhatsApp: (productName: string) => void;
}

export default function FeaturedProducts({ inquireViaWhatsApp }: FeaturedProductsProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="w-full px-6 md:px-12 lg:px-16 xl:px-24 mb-32 mx-auto">
            <div className="max-w-7xl mx-auto">
                {/* Header with gradient */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
                >
                    <div>
                        <motion.span 
                            className="inline-block text-sm font-semibold text-amber-700 mb-3 uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            🇰🇪 Made in Kenya
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                            Kenyan Modern Masterpieces
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl font-light leading-relaxed">
                            Each piece celebrates Kenya's rich cultural heritage with contemporary design. Handcrafted by master artisans using sustainable local materials and traditional techniques.
                        </p>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                    >
                        View All Products →
                    </motion.button>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            onMouseEnter={() => setHoveredId(product.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group flex flex-col h-full"
                        >
                            {/* Product Image Container */}
                            <motion.div 
                                className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden mb-6 shadow-lg"
                                whileHover={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                
                                {/* Product Tag */}
                                {product.tag && (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                                    >
                                        {product.tag}
                                    </motion.div>
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* CTA Button */}
                                <motion.button
                                    onClick={() => inquireViaWhatsApp(product.name)}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={hoveredId === product.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl z-10"
                                    aria-label="Inquire on WhatsApp"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                </motion.button>
                            </motion.div>

                            {/* Product Info */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-base mb-4 font-light leading-relaxed">
                                    {product.description}
                                </p>
                                
                                {product.price && (
                                    <p className="text-2xl font-bold text-gray-900 mb-6">
                                        {product.price}
                                    </p>
                                )}

                                <motion.button 
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:hidden mt-12 text-center"
                >
                    <button className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg">
                        View All Products
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
