'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
}

const products: Product[] = [
    {
        id: 'minimalist-sofa',
        name: 'Minimalist Sofa',
        description: 'Elegantly designed with clean lines and exceptional comfort. A perfect statement piece.',
        image: 'https://images.pexels.com/photos/5998124/pexels-photo-5998124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'handcrafted-accent-chair',
        name: 'Handcrafted Accent Chair',
        description: 'Crafted from sustainable local wood, combining expert artistry with contemporary design.',
        image: 'https://images.pexels.com/photos/1109304/pexels-photo-1109304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'contemporary-dining-table',
        name: 'Contemporary Dining Table',
        description: 'A perfect blend of Kenyan craftsmanship and sleek modern design, ideal for any home.',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];

interface FeaturedProductsProps {
    inquireViaWhatsApp: (productName: string) => void;
}

export default function FeaturedProducts({ inquireViaWhatsApp }: FeaturedProductsProps) {
    return (
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-16 xl:px-24 mb-32 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        Featured Pieces
                    </h2>
                    <p className="text-gray-500 text-lg max-w-md">
                        Curated selection of our finest furniture, designed to elevate your living space.
                    </p>
                </div>
                <button className="hidden md:block text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                    View All Products
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100"
                    >
                        <div className="relative w-full h-80 bg-gray-100 overflow-hidden">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            <button
                                onClick={() => inquireViaWhatsApp(product.name)}
                                className="absolute bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-600"
                                aria-label="Inquire on WhatsApp"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h3>
                            <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                            <button
                                onClick={() => inquireViaWhatsApp(product.name)}
                                className="w-full py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Inquire on WhatsApp
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-12 text-center md:hidden">
                <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1">
                    View All Products
                </button>
            </div>
        </section>
    );
}
