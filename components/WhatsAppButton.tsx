'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming react-icons is installed or will be

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link 
        href="https://wa.me/254712345678" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors text-white text-3xl"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp />
      </Link>
    </motion.div>
  );
}
