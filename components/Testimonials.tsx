'use client';

import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        quote: "The craftsmanship of Nenyon Furnitures is truly exceptional. Our new dining set is the centerpiece of our home!",
        author: "Jane Doe",
        role: "Interior Designer"
    },
    {
        id: 2,
        quote: "I love the unique, modern designs. Nenyon Furnitures helped us create the perfect living space.",
        author: "John Smith",
        role: "Homeowner"
    },
    {
        id: 3,
        quote: "Outstanding quality and fantastic customer service. Highly recommend Nenyon Furnitures!",
        author: "Emily White",
        role: "Architect"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full max-w-7xl px-6 md:px-12 lg:px-16 xl:px-24 mb-32 mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Client Stories
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Hear from those who have transformed their spaces with our furniture.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gray-50 p-10 rounded-2xl relative"
                    >
                        <div className="text-6xl text-gray-200 font-serif absolute top-6 left-8">"</div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 pt-4">
                            {testimonial.quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
