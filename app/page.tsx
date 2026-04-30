import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata = {
  title: "AB'S FILM | Cinematic Wedding & Event Cinematography Rajkot",
  description: "Expert film production in Rajkot. Services include Pre-production, Drone Aerial shots, Post-production, and Event coverage. We capture emotions through a cinematic lens.",
  keywords: ["Cinematography Rajkot", "Wedding Filmmaker Gujarat", "Drone Photography Rajkot", "Film Production Studio"],
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
