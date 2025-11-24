'use client';

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-6 mb-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://images.pexels.com/photos/18413160/pexels-photo-18413160/free-photo-of-minimalist-living-room-design-with-a-modern-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-white max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6 drop-shadow-xl">
                    Modern Elegance <br /> <span className="font-light italic">For Your Home</span>
                </h1>
                <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light tracking-wide text-gray-100 drop-shadow-md">
                    Discover timeless design and unparalleled quality in Kenyan modern furniture.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-md border border-white text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Explore Collections
                </motion.button>
            </motion.div>
        </section>
    );
}
