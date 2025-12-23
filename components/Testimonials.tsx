'use client';

import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        quote: "The craftsmanship of Nenyon Furnitures is truly exceptional. Our new dining set is the centerpiece of our home!",
        author: "Jane Doe",
        role: "Interior Designer",
        rating: 5
    },
    {
        id: 2,
        quote: "I love the unique, modern designs. Nenyon Furnitures helped us create the perfect living space.",
        author: "John Smith",
        role: "Homeowner",
        rating: 5
    },
    {
        id: 3,
        quote: "Outstanding quality and fantastic customer service. Highly recommend Nenyon Furnitures!",
        author: "Emily White",
        role: "Architect",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-16 xl:px-24 mb-32 mx-auto">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.span 
                        className="inline-block text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        ⭐ Client Stories
                    </motion.span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Loved by Our Customers
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
                        Discover how our premium furniture has transformed living spaces and exceeded expectations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
                            className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl relative border border-gray-100/50 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Star Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </motion.svg>
                                ))}
                            </div>

                            <div className="text-5xl text-blue-200 font-serif mb-4">"</div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-10 font-light">
                                {testimonial.quote}
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500 font-light">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
