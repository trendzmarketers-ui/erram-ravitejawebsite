import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Work", "Creative", "Ventures", "Projects", "About", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  /* When NOT scrolled (over dark hero), hide the navbar on desktop
     since the hero has its own integrated nav. On mobile, show burger. */
  const overHero = !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
        borderBottom: scrolled ? "1px solid #EAEAEA" : "none",
        ...(overHero ? { pointerEvents: "none" as const } : {}),
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
        <button
          onClick={() => scrollTo("hero")}
          className="cursor-pointer font-serif text-[1.25rem] tracking-[0.02em] transition-opacity duration-500"
          style={{
            color: overHero ? "transparent" : "#111111",
            pointerEvents: overHero ? "none" : "auto",
            opacity: overHero ? 0 : 1,
          }}
        >
          Raviteja Erram
        </button>

        {/* Desktop */}
        <div
          className="hidden md:flex items-center gap-8 transition-opacity duration-500"
          style={{ opacity: overHero ? 0 : 1, pointerEvents: overHero ? "none" : "auto" }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link === "Creative" ? "creative-work" : link.toLowerCase())}
              className="cursor-pointer font-sans text-body text-[0.85rem] tracking-[0.08em] uppercase transition-colors duration-300 hover:text-ink"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile toggle — always visible */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden cursor-pointer transition-colors duration-300"
          style={{
            color: overHero ? "#D6C6A8" : "#111111",
            pointerEvents: "auto",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-8 flex flex-col gap-4"
          style={{
            backgroundColor: overHero ? "rgba(13,13,13,0.95)" : "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            pointerEvents: "auto",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link === "Creative" ? "creative-work" : link.toLowerCase())}
              className="cursor-pointer text-left py-2 font-sans text-[0.95rem] tracking-[0.08em] uppercase"
              style={{ color: overHero ? "#D6C6A8" : "#111111" }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
