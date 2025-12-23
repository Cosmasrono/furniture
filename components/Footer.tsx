'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white pt-24 pb-12">
            <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16 xl:px-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Nenyon</h3>
                        <p className="text-gray-400 leading-relaxed mb-8 font-light">
                            Celebrating Kenya's artistic heritage through contemporary furniture design. Handcrafted by master artisans with sustainable materials since 2010.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.799.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-amber-400 transition-colors duration-300 font-light">Home</Link></li>
                            <li><Link href="/about" className="hover:text-amber-400 transition-colors duration-300 font-light">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-amber-400 transition-colors duration-300 font-light">Collections</Link></li>
                            <li><Link href="/contact" className="hover:text-amber-400 transition-colors duration-300 font-light">Contact</Link></li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            <li className="flex items-start gap-3 hover:text-amber-400 transition-colors">
                                <span className="mt-1 text-lg">📍</span>
                                <span>Multiple Showrooms<br />Across Kenya</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-amber-400 transition-colors cursor-pointer">
                                <span className="text-lg">📞</span>
                                <a href="tel:+254757450716">+254 757 450 716</a>
                            </li>
                            <li className="flex items-center gap-3 hover:text-amber-400 transition-colors cursor-pointer">
                                <span className="text-lg">✉️</span>
                                <a href="mailto:info@nenyon.com">info@nenyon.com</a>
                            </li>
                            <li className="flex items-center gap-3 hover:text-amber-400 transition-colors cursor-pointer">
                                <span className="text-lg">💬</span>
                                <a href="https://wa.me/254757450716" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
                        <p className="text-gray-400 mb-6 font-light">Subscribe for exclusive deals and updates.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors placeholder-gray-500"
                            />
                            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold px-4 py-3 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800/50 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm"
                >
                    <p className="font-light">&copy; {new Date().getFullYear()} Nenyon Furnitures. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-amber-400 transition-colors duration-300 font-light">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-amber-400 transition-colors duration-300 font-light">Terms of Service</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
