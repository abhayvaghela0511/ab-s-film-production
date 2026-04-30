"use client";
import {
    Pencil,
    Scissors,
    Video,
    Cpu,
    Plane,
    Calendar,
    Palette
} from "lucide-react";
import { motion } from "framer-motion";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cinematography and Film Production",
    "provider": {
        "@type": "LocalBusiness",
        "name": "AB's Film",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Film Production Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-Production" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cinematography" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drone Aerial Photography" } }
        ]
    }
};

const services = [
    {
        title: "Pre-Production",
        desc: "Concept development, scripting, and storyboard planning for high-end productions.",
        icon: <Pencil className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Post-Production",
        desc: "Advanced editing, color grading, and visual effects to bring your vision to life.",
        icon: <Scissors className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Cinematography",
        desc: "Masterful camera work using state-of-the-art equipment for emotional storytelling.",
        icon: <Video className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Post-Process",
        desc: "Specialized processing for complex visual sequences and experimental media.",
        icon: <Cpu className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Aerial",
        desc: "High-precision drone cinematography for breathtaking perspectives and scale.",
        icon: <Plane className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Event",
        desc: "Comprehensive coverage for high-profile events, conferences, and celebrations.",
        icon: <Calendar className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Recent Art",
        desc: "Custom artistic finishing and digital remastering for a unique aesthetic signature.",
        icon: <Palette className="w-6 h-6 text-yellow-500" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 bg-black/90 text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <header>
                        <p className="text-yellow-500 text-xs tracking-[0.3em] uppercase font-bold mb-4">
                            Professional Film Services in Rajkot
                        </p>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase">
                            Our <span className="text-yellow-500">Expertise</span>
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            AB's Film provides premium <strong>cinematography</strong>,
                            <strong> aerial drone shots</strong>, and <strong>post-production editing</strong>.
                            We specialize in high-end wedding films and corporate event coverage across
                            Gujarat, ensuring every emotion is captured with cinematic precision.
                        </p>
                    </header>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1
                            }
                        }
                    }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    show: { opacity: 1, scale: 1 }
                                }}
                                transition={{ duration: 0.7 }}
                                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-yellow-500/30"
                            >
                                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-yellow-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}