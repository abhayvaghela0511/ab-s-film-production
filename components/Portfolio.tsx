"use client";
import { useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import 'next-cloudinary/dist/cld-video-player.css';

const CldVideoPlayer = dynamic(
    () => import('next-cloudinary').then(mod => mod.CldVideoPlayer),
    {
        ssr: false,
        loading: () => <div className="h-full w-full bg-zinc-900 animate-pulse rounded-2xl" />,
    }
);

const categories = ["All", "Wedding", "Drone", "Events", "Reels"];

const projects = [
    { id: 1, title: "Grand Royal Wedding", category: "Wedding", src: "grand_royal-wedding_fbrgys_7ebc_0f1ab7", size: "large", type: "image" },
    { id: 2, title: "Social Media Reel", category: "Reels", src: "Video_Project_2_okltjg", size: "vertical", type: "video" },
    { id: 3, title: "Mountain Drone Shot", category: "Drone", src: "mountain-drone-shot_lnjxcu", size: "small", type: "image" },
    { id: 4, title: "Everest Drone Shot", category: "Drone", src: "cld-sample-2", size: "large", type: "image" },
    { id: 5, title: "Corporate Gala", category: "Events", src: "corporate-gala_nl5djk", size: "small", type: "image" },
    { id: 6, title: "Beach Pre-Wedding", category: "Wedding", src: "batch-pre-wedding_lonhj1", size: "medium", type: "image" },
    { id: 7, title: "Night Party", category: "Events", src: "night-party_m5bijs", size: "small", type: "image" },
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [isMounted, setIsMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const filteredProjects = filter === "All"
        ? projects.slice(0, 5)
        : projects.filter(p => p.category === filter);

    const onMouseEnter = (e: any, project: any) => {
        if (project.type === "video" && videoRef.current) {
            videoRef.current.play();
        }
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="h-full w-full bg-zinc-900 animate-pulse rounded-2xl" />;

    return (
        <section id="portfolio" className="py-24 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}>

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <span className="text-yellow-500 text-xs tracking-[0.3em] uppercase font-bold">Our Work</span>
                        <h2 className="mt-4 text-4xl md:text-6xl font-serif font-bold uppercase">
                            Portfolio <span className="text-yellow-500 text-outline">Gallery</span>
                        </h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? "bg-yellow-500 border-yellow-500 text-black"
                                    : "border-white/10 bg-white/5 text-white hover:border-yellow-500/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div layout viewport={{ once: false, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1.0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.4 }}
                                className={`relative group overflow-hidden rounded-2xl bg-zinc-900 transition-all duration-500 ${project.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[600px]' :
                                    project.size === 'vertical' ? 'md:col-span-1 md:row-span-2 h-[600px]' :
                                        'h-[290px]'
                                    }`}
                            >
                                {/* MEDIA LAYER */}
                                <div className="absolute inset-0 w-full h-full">
                                    {project.type === 'video' ? (
                                        <CldVideoPlayer
                                            width="1080"
                                            height="1920"
                                            src={project.src}
                                            videoRef={videoRef}
                                            autoPlay="always"
                                            muted={true}
                                            loop={true}
                                            controls={false}
                                            transformation={{
                                                width: 1080,
                                                height: 1920,
                                                crop: 'fill',
                                                gravity: 'center',
                                            }}
                                            fluid={true}
                                            className="absolute inset-0 w-full h-full"
                                        />
                                    ) : (
                                        <CldImage
                                            width={project.size === 'large' ? 1000 : 800}
                                            height={project.size === 'large' ? 900 : 900}
                                            src={project.src}
                                            alt={project.title}
                                            crop="fill"
                                            className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                </div>

                                {/* OVERLAY LAYER - This is what catches the hover now */}
                                <div onMouseEnter={(e) => onMouseEnter(e, project)} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                                    <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}