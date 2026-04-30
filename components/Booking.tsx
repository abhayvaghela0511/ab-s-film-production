"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        eventType: "Wedding",
        date: "",
        location: "Rajkot",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        fetch('/api/send-sms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        setFormData({
            name: "",
            eventType: "Wedding",
            date: "",
            location: "Rajkot",
            message: "",
        });

        const waMessage = `🎥 Booking Request \n \n
--------------------------\n
👤 Name: ${formData.name}\n
🎬 Event: ${formData.eventType}\n
📅 Date: ${formData.date || 'Not specified'}\n
📍 Loc: ${formData.location}\n
💬 Msg: ${formData.message}\n
--------------------------`;
        window.open(`https://wa.me/919714385877?text=${waMessage}`, "_blank");
    };

    return (
        <section id="contact" className="py-24 px-6 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Side: Contact Info */}
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9 }} className="space-y-8">
                    <div>
                        <span className="text-yellow-500 text-xs tracking-[0.3em] uppercase font-bold">Get In Touch</span>
                        <h2 className="mt-4 text-4xl md:text-6xl font-serif font-bold uppercase leading-tight">
                            Book Your <span className="text-yellow-500">Shoot</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
                            Fill out the form and we'll connect with you on WhatsApp instantly with a confirmation and quote.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 transition-colors">
                                <Phone className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-300 uppercase tracking-widest">Call / WhatsApp</p>
                                <p className="text-lg font-medium">+91 97143 85877</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 transition-colors">
                                <Mail className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-300 uppercase tracking-widest">Email Us</p>
                                <p className="text-lg font-medium">absfilm0511@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 transition-colors">
                                <MapPin className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-300 uppercase tracking-widest">Location</p>
                                <p className="text-lg font-medium">Rajkot, Gujarat, India</p>
                            </div>
                        </div>
                    </div>

                    {/* <button
                        onClick={() => window.open('https://wa.me/919714385877', '_blank')}
                        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-green-500/20"
                    >
                        Chat Directly on WhatsApp
                    </button> */}
                </motion.div>

                {/* Right Side: Glassmorphism Form */}
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9 }} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl relative">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="booking-name" className="text-xs uppercase tracking-widest text-gray-400">Full Name</label>
                            <input
                                id="booking-name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-yellow-500 outline-none transition-all"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="booking-event-type" className="text-xs uppercase tracking-widest text-gray-400">Event Type</label>
                            <select
                                id="booking-event-type"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-yellow-500 outline-none transition-all appearance-none"
                                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            >
                                <option value="Wedding">Wedding Shoot</option>
                                <option value="Drone">Drone Cinematography</option>
                                <option value="Event">Event Coverage</option>
                                <option value="Reels">Social Media Reels</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="booking-date" className="text-xs uppercase tracking-widest text-gray-400">Event Date</label>
                                <input
                                    id="booking-date"
                                    type="date"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-yellow-500 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="booking-location" className="text-xs uppercase tracking-widest text-gray-400">Location</label>
                                <input
                                    id="booking-location"
                                    type="text"
                                    placeholder="Rajkot"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-yellow-500 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="booking-message" className="text-xs uppercase tracking-widest text-gray-400">Message</label>
                            <textarea
                                id="booking-message"
                                rows={4}
                                placeholder="Tell us about your event requirements..."
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:border-yellow-500 outline-none transition-all resize-none"
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            Book Now <Send className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}