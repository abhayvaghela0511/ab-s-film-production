"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Book Now", href: "#contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/30 backdrop-blur-md px-6 py-5 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo - Ensuring it links to the top */}
                <Link style={{ letterSpacing: 8 }} href="#home" className="text-2xl font-prata flex items-center gap-2 font-bold tracking-tighter text-white uppercase font-serif hover:opacity-80 transition-opacity">
                    <Image src="/logo.png" alt="AB's Film Logo" width={60} height={60} className="inline-block mr-2" />
                    <span className="mt-0.5">AB'S FILM</span>
                </Link>

                {/* Desktop Links with Hover Effect */}
                <ul className="hidden md:flex items-center gap-10 text-[12px] font-bold uppercase tracking-[0.3em] text-white/80">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative group">
                            <Link href={link.href} className="hover:text-white transition-colors duration-300">
                                {link.name}
                            </Link>
                            {/* Animated Underline */}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-[1px] bg-[#EAB308] w-0 group-hover:w-full transition-all duration-300"
                            />
                        </li>
                    ))}
                </ul>

                {/* Mobile Contact Trigger */}
                <Link
                    href="#contact"
                    className="text-[10px] font-bold tracking-[0.2em] uppercase border border-[#EAB308]/40 px-5 py-2 rounded-full text-[#EAB308] hover:bg-[#EAB308] hover:text-black transition-all duration-500"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}