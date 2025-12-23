'use client';

import { motion } from "framer-motion";

interface Category {
    id: string;
    name: string;
    icon: string;
    description: string;
    image: string;
}

const categories: Category[] = [
    {
        id: 'sofas',
        name: 'Sofas & Armchairs',
        icon: '🛋️',
        description: 'Fabric and leather sofas, recliners, and accent chairs',
        image: 'https://images.pexels.com/photos/3556089/pexels-photo-3556089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'dining',
        name: 'Dining Furniture',
        icon: '🍽️',
        description: 'Dining sets, tables, chairs, and bar furniture',
        image: 'https://images.pexels.com/photos/5910155/pexels-photo-5910155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'bedroom',
        name: 'Bedroom Suites',
        icon: '🛏️',
        description: 'Beds, dressers, nightstands, and storage solutions',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'office',
        name: 'Office Furniture',
        icon: '🖥️',
        description: 'Executive desks, office chairs, and workstations',
        image: 'https://images.pexels.com/photos/3974897/pexels-photo-3974897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'outdoor',
        name: 'Outdoor Furniture',
        icon: '🌿',
        description: 'Garden sofas, patio sets, and outdoor lounging',
        image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'decor',
        name: 'Home Décor',
        icon: '✨',
        description: 'Cushions, rugs, lamps, and decorative pieces',
        image: 'https://images.pexels.com/photos/3945696/pexels-photo-3945696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];

export default function CategoryShowcase() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-16 xl:px-24 mb-32 mx-auto">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block text-sm font-semibold text-amber-700 mb-3 uppercase tracking-wider"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        📚 Complete Collections
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Explore our diverse range of furniture collections designed for every room and lifestyle
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            {/* Category Card */}
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg mb-4 bg-gradient-to-br from-gray-100 to-gray-200">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${category.image}')` }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.05 }}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-3xl">{category.icon}</span>
                                            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                                        </div>
                                        <p className="text-gray-200 text-sm font-light">
                                            {category.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Hover Button */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-4 right-4 bg-amber-600 text-white p-3 rounded-full shadow-lg"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Card Footer */}
                            <motion.div
                                className="bg-white border border-gray-200 rounded-lg p-4 group-hover:border-amber-600 group-hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                            >
                                <button className="w-full py-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                                    Explore {category.name} →
                                </button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 text-center border border-amber-200"
                >
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                        Can't Find What You're Looking For?
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Contact our sales team for custom furniture solutions and personalized recommendations
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Contact Us Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
