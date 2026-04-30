import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 — Page Not Found",
    description:
        "The page you're looking for doesn't exist. Head back to AB's Film homepage.",
};

export default function NotFound() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">
            {/* Ambient glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/[0.04] blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-yellow-500/[0.06] blur-[80px] pointer-events-none animate-pulse" />

            {/* Film grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Large 404 number */}
                <div className="relative mb-8">
                    <h1
                        className="text-[10rem] md:text-[14rem] font-serif font-black leading-none tracking-tighter select-none"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(234,179,8,0.25) 0%, rgba(234,179,8,0.03) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        404
                    </h1>

                    {/* Horizontal rule accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
                        <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-yellow-500/60" />
                        <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.4em]">
                            Lost Frame
                        </span>
                        <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-yellow-500/60" />
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-2xl md:text-4xl font-serif font-bold uppercase tracking-tight mb-4">
                    Scene <span className="text-yellow-500">Not Found</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
                    This frame doesn't exist in our reel. The scene you're
                    looking for may have been moved or never made it past the
                    cutting room floor.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-[#EAB308] text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/#portfolio"
                        className="border border-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:border-yellow-500/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        View Portfolio
                    </Link>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-16 flex items-center justify-center gap-3 text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                    <span className="block w-8 h-[1px] bg-white/10" />
                    AB'S FILM
                    <span className="block w-8 h-[1px] bg-white/10" />
                </div>
            </div>
        </section>
    );
}
