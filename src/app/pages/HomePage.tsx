import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { WhatIDoSection } from "../components/WhatIDoSection";
import { FeaturedWorkSection } from "../components/FeaturedWorkSection";
import { CreativeWorkSection } from "../components/CreativeWorkSection";
import { VenturesSection } from "../components/VenturesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { IdeasSection } from "../components/IdeasSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { useSEO } from "../hooks/useSEO";

export function HomePage() {
  useSEO({
    title: "Raviteja Erram — Entrepreneur, Designer & Creative Strategist",
    description:
      "Explore the portfolio of Raviteja Erram — entrepreneur, designer, and creative strategist. Specializing in digital marketing, photography, brand identity, and business innovation in Hyderabad & Vizag.",
    canonical: "https://ravitejaerram.com/",
  });

  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <div className="border-b border-divider" />
      <WhatIDoSection />
      <div className="border-b border-divider" />
      <FeaturedWorkSection />
      <div className="border-b border-divider" />
      <CreativeWorkSection />
      <div className="border-b border-divider" />
      <VenturesSection />
      <div className="border-b border-divider" />
      <ProjectsSection />
      <div className="border-b border-divider" />
      <IdeasSection />
      <div className="border-b border-divider" />
      <AboutSection />
      <div className="border-b border-divider" />
      <ContactSection />
    </div>
  );
}
