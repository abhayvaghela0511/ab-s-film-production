"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
    "/images/wedding.avif",
    "/images/car-delivery.avif",
    "/images/drone.webp",
    "/images/event.avif",
    "/images/night-lights.avif",
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* 1. Background Slideshow with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                {slides.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-60" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            sizes="100vw"
                            priority={index === 0} // Load first image immediately for SEO/LCP
                            className={`object-cover transition-transform duration-[5000ms] ease-linear ${index === currentSlide ? "scale-110" : "scale-100"
                                }`}
                        />
                    </div>
                ))}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
            </div>

            {/* 3. Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
                <div className="mb-6 flex items-center gap-2 rounded-full border border-yellow-600/30 bg-black/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-yellow-500 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Cinematic Excellence
                </div>

                <h1 className="max-w-5xl text-4xl md:text-6xl font-cabin font-bold leading-tight mb-6">
                    <span className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
                        WE DON'T JUST SHOOT <br /> VIDEOS &nbsp;
                    </span>
                    <span className="font-lobster bg-clip-text text-8xl text-transparent bg-linear-to-r from-yellow-400 to-yellow-600 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                        we capture <br /> emotions.
                    </span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-gray-300 font-light mb-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
                    High-end film production studio specializing in cinematic storytelling and emotional depth.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
                    <Link
                        href="#contact"
                        className="bg-[#EAB308] text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-1"
                    >
                        Start a Project
                    </Link>
                    <Link
                        href="#portfolio"
                        className="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1"
                    >
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}