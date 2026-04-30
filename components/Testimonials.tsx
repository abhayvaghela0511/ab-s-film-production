"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
    {
        name: "Rahul & Priya",
        text: "AB's Film captured our wedding like a Bollywood film. Absolutely stunning cinematography. Every emotion was perfectly captured!",
        service: "Wedding Film",
    },
    {
        name: "Mehul Shah",
        text: "The drone shots at our function were breathtaking! Professional team, on time, and delivered beyond our expectations.",
        service: "Drone Shoot",
    },
    {
        name: "Kiran Patel",
        text: "The Instagram reel they made for my restaurant went viral! Over 50k views in 2 days. Incredible work by AB's Film.",
        service: "Brand Reel",
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <span className="text-yellow-500 text-xs tracking-[0.3em] uppercase font-bold border-b border-yellow-500/30 pb-2">
                    Client Love
                </span>
                <h2 className="mt-8 text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight">
                    What <span className="text-yellow-500">They Say</span>
                </h2>
            </div>

            <div className="flex overflow-hidden group">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-colors duration-500"
                        >
                            <Quote className="w-8 h-8 text-yellow-500/20 mb-4" />
                            <p className="text-gray-300 italic text-sm md:text-base leading-relaxed whitespace-normal">
                                "{review.text}"
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-[1px] w-8 bg-yellow-500"></div>
                                <div>
                                    <h4 className="font-bold text-white tracking-wide">{review.name}</h4>
                                    <p className="text-xs text-yellow-500/60 uppercase tracking-widest">{review.service}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}