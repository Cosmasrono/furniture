'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section 
            ref={ref}
            className="relative w-full h-[90vh] flex items-center justify-center text-center px-6 mb-20 bg-cover bg-center overflow-hidden" 
            style={{ backgroundImage: "url('https://images.pexels.com/photos/18413160/pexels-photo-18413160/free-photo-of-minimalist-living-room-design-with-a-modern-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 backdrop-blur-[1px]"></div>
            
            {/* Animated accent elements */}
            <motion.div 
                className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
                className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 text-white max-w-5xl mx-auto"
            >
                {/* Premium badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-block"
                >
                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide backdrop-blur-md">
                        ✨ Premium Kenyan Craftsmanship
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6 drop-shadow-2xl"
                >
                    Kenyan Heritage <br /> 
                    <motion.span 
                        className="font-light italic bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text text-transparent"
                        animate={inView ? { opacity: [0.8, 1, 0.8] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Meets Modern Design
                    </motion.span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light tracking-wide text-gray-100 drop-shadow-lg"
                >
                    Discover handcrafted furniture that honors Kenya's artistic traditions while embracing contemporary elegance. Each piece tells a story of skill, heritage, and sustainable craftsmanship.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                    >
                        Explore Collections
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                        View Showcase
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
