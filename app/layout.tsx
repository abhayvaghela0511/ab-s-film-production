import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_AR, Lobster_Two, Cabin, Style_Script, Prata } from "next/font/google";
// import { Playwrite_AR } from "next/font/google"; "next/font/local"
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Playwrite_AR_Font = Playwrite_AR({
  variable: "--font-playwrite-ar",
  weight: "400",
});

const Lobster_Two_Font = Lobster_Two({
  variable: "--font-lobster-two",
  weight: "400",
});

const Cabin_Font = Cabin({
  variable: "--font-cabin",
  weight: "400",
});

const prataFont = Prata({
  variable: "--font-prata",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "AB'S FILM | Cinematic Wedding & Event Cinematography Rajkot",
    template: "%s | AB'S FILM",
  },
  description: "AB's Film — Premium cinematography, aerial drone photography, and event film production in Rajkot, Gujarat. We capture emotions through a cinematic lens.",
  keywords: [
    "Cinematography Rajkot",
    "Wedding Filmmaker Gujarat",
    "Drone Photography Rajkot",
    "Film Production Studio",
    "Event Cinematography India",
    "Wedding Videographer Rajkot",
    "AB's Film",
  ],
  metadataBase: new URL('https://absfilm.agency'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AB'S FILM | Cinematic Wedding & Event Cinematography Rajkot",
    description: "Expert film production in Rajkot. Capturing emotions through a cinematic lens.",
    url: 'https://absfilm.agency',
    siteName: "AB's Film",
    images: [
      {
        url: '/og-image.jpg', // Create a 1200x630 image for WhatsApp/FB sharing
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${Playwrite_AR_Font.variable} ${Lobster_Two_Font.variable} ${Cabin_Font.variable} ${prataFont.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
