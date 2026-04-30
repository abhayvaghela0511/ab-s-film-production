"use client";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Instagram from "@/icons/Instagram";

const contactCards = [
    {
        title: "Location",
        info: "Rajkot, Gujarat, India",
        icon: <MapPin className="w-6 h-6 text-yellow-500" />,
        link: "https://maps.google.com/?q=Rajkot,Gujarat",
    },
    {
        title: "Phone / WhatsApp",
        info: "+91 97143 85877",
        icon: <Phone className="w-6 h-6 text-yellow-500" />,
        link: "https://wa.me/919714385877",
    },
    {
        title: "Email",
        info: "absfilm0511@gmail.com",
        icon: <Mail className="w-6 h-6 text-yellow-500" />,
        link: "mailto:absfilm0511@gmail.com",
    },
    {
        title: "Instagram",
        info: "@absfilm",
        icon: <Instagram className="w-6 h-6 text-yellow-500" />,
        link: "https://instagram.com/absfilm",
    },
];

export default function Contact() {
    return (
        <section id="contact-details" className="py-24 bg-black text-white px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1.0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <span className="text-yellow-500 text-xs tracking-[0.3em] uppercase font-bold">Find Us</span>
                    <h2 className="mt-4 text-4xl md:text-6xl font-serif font-bold uppercase">
                        Contact <span className="text-yellow-500">Us</span>
                    </h2>
                </motion.div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {contactCards.map((card, index) => (
                        <motion.a
                            href={card.link}
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1.0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            target="_blank"
                            className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.07] hover:border-yellow-500/30 transition-all group"
                        >
                            <div className="mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{card.title}</h4>
                            <p className="text-sm font-medium">{card.info}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Map & CTA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1.0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }} className="space-y-6">
                        <span className="text-yellow-500 text-xs tracking-widest uppercase font-bold">Location</span>
                        <h3 className="text-3xl font-serif font-bold uppercase">
                            Rajkot <span className="text-yellow-500">Operations</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            We are based in Rajkot, capturing stories across the city and beyond.
                            Whether it’s a destination wedding or a local brand shoot, our team is ready to travel.
                        </p>
                        <button
                            onClick={() => window.open('https://wa.me/919714385877', '_blank')}
                            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
                        >
                            <MessageCircle className="w-5 h-5" /> Message Us on WhatsApp
                        </button>
                    </motion.div>

                    {/* Fixed Google Map Embed */}
                    <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1.0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.8 }} className="w-full h-[350px] rounded-3xl overflow-hidden border border-white/10 grayscale invert brightness-75 hover:grayscale-0 hover:invert-0 transition-all duration-700">
                        <iframe
                            title="AB's Film Office Location — Rajkot, Gujarat"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202157774!2d70.73889419106037!3d22.296996500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c986ed5c35f1%3A0x6968032549a1758c!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714138000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}