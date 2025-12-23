'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
    return (
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-16 xl:px-24 mb-32 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                >
                    <Image
                        src="https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="About Nenyon Furnitures"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
    <div>
                        <motion.span 
                            className="text-sm font-bold text-amber-700 uppercase tracking-widest"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            🇰🇪 Our Legacy
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 tracking-tight">
                            Preserving Tradition, Creating Tomorrow
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                        <p className="text-xl">
                            Nenyon celebrates Kenya's artistic heritage through contemporary furniture design. We blend centuries of traditional craftsmanship—from Makonde carving to Kikoi weaving—with modern aesthetics to create timeless pieces.
                        </p>
                        <p>
                            Every item is handcrafted by master artisans using sustainably sourced local woods like acacia and mango. We believe in honoring Kenya's cultural richness while meeting the demands of modern living.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8">
                        <div>
                            <p className="text-4xl font-bold text-gray-900">15+</p>
                            <p className="text-sm text-gray-500 mt-1">Years</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-gray-900">500+</p>
                            <p className="text-sm text-gray-500 mt-1">Clients</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-gray-900">1K+</p>
                            <p className="text-sm text-gray-500 mt-1">Projects</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                        <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors">
                            Learn More About Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
