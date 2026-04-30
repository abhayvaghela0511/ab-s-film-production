"use client";
import Link from "next/link";
import { Mail, Globe, Tv, Camera } from "lucide-react";
import Youtube from "@/icons/Youtube";
import Instagram from "@/icons/Instagram";
import Linkedin from "@/icons/Linkdin";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

                {/* Brand Column */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-serif font-bold tracking-tighter text-yellow-500 uppercase">
                        AB's Film
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Sophisticated Cinematic Solutions for Global Brands.
                        Redefining visual storytelling through high-tech precision.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" aria-label="Visit our YouTube channel" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                            <Youtube size={18} />
                        </Link>
                        <Link href="#" aria-label="Visit our LinkedIn profile" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                            <Instagram size={18} />
                        </Link>
                    </div>
                </div>

                {/* Agency Links */}
                <div>
                    <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Agency</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="#portfolio" className="hover:text-white transition-colors">Studio</Link></li>
                        <li><Link href="#services" className="hover:text-white transition-colors">Capabilities</Link></li>
                        <li><Link href="#portfolio" className="hover:text-white transition-colors">Showreel</Link></li>
                        <li><Link href="#contact" className="hover:text-white transition-colors">Bookings</Link></li>
                    </ul>
                </div>

                {/* Connect Column */}
                <div>
                    <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Connect</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3 text-gray-400 group">
                            <Mail size={16} className="text-yellow-500" />
                            <a href="mailto:contact@absfilm.agency" className="group-hover:text-white transition-colors">
                                contact@absfilm.agency
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 group">
                            <Globe size={16} className="text-yellow-500" />
                            <span className="group-hover:text-white transition-colors">
                                Global Operations
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest">
                <p>© {currentYear} AB'S FILM. DESIGNED FOR THE FUTURE.</p>
                <p>All Rights Reserved.</p>
            </div>
        </footer>
    );
}