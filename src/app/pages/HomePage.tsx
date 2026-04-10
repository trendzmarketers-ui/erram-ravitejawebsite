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
    title: "Raviteja Erram – Entrepreneur | Digital Marketing & Business Strategist",
    description:
      "Official website of Raviteja Erram. Entrepreneur, digital marketer, and founder working on Trend Z Marketers, SMT Enterprises, and innovative business ventures.",
    canonical: "https://ravitejaerram.com/",
  });

  return (
    <div className="bg-white">
      <h1 className="sr-only">Raviteja Erram</h1>
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
