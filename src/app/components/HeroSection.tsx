import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import type { MotionValue } from "motion/react";

/* ═══════════════════════════════════════════════════════
   CINEMATIC HERO — Layered Typography + Fixed Cutout
   ═══════════════════════════════════════════════════════
   LAYER STACK (bottom → top):
     z-[-1] BackgroundImage — original dark photo, fullscreen, FIXED
     z-0    BackgroundText  — solid #D6C6A8, parallax y: 0 → -150px
     z-10   CutoutSubject   — transparent PNG, centered, FIXED (no animation)
     z-12   SubtleGlow      — soft radial glow under subject for grounding
     z-15   DarkOverlays    — top + bottom gradient for UI readability
     z-20   ForegroundText  — stroke outline, parallax y: 0 → -250px
     z-40   UI chrome       — nav, labels, scroll indicator
     z-50   Grain           — film noise texture

   SCROLL ANIMATION (Framer Motion + Sticky):
     • Uses CSS position: sticky for a completely jitter-free pin.
     • useScroll + useSpring provides silky smooth interpolation.
     • Hardware acceleration enforced on images.

   PERFORMANCE:
     • Images served as optimized WebP from /public (~94KB vs 10.8MB)
     • Progressive loading with blur-up placeholder for background
     • fetchpriority="high" on critical images for LCP
   ═══════════════════════════════════════════════════════ */

const HERO_TEXT = "RAVITEJA";
const NAV_LINKS = ["Work", "Creative", "Ventures", "Projects", "About", "Contact"];

const textBase: React.CSSProperties = {
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  fontWeight: 900,
  fontSize: "clamp(6rem, 22vw, 20rem)",
  letterSpacing: "-0.04em",
  lineHeight: 0.85,
  textTransform: "uppercase",
  userSelect: "none",
  whiteSpace: "nowrap",
  willChange: "transform",
};

/* ─── Layer Stack Sub-components ─── */

function BackgroundImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Tiny blur placeholder — instant */}
      <img
        src="/hero-bg-tiny.webp"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover"
        style={{
          objectPosition: "center 20%",
          filter: "blur(20px)",
          transform: "scale(1.1) translateZ(0)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.6s ease-out",
          position: "absolute",
          inset: 0,
        }}
        draggable={false}
      />
      {/* Full-res hero background */}
      <img
        src="/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="w-full h-full object-cover"
        style={{
          objectPosition: "center 20%",
          willChange: "transform",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
        onLoad={() => setLoaded(true)}
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(13,13,13,0.4) 0%, rgba(13,13,13,0.85) 100%)",
        }}
      />
    </div>
  );
}

function BackgroundText({ y, opacity }: { y: MotionValue<number>; opacity: MotionValue<number> }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible"
      style={{ zIndex: 0, y, opacity, willChange: "transform, opacity" }}
    >
      <span aria-hidden="true" style={{ ...textBase, color: "#D6C6A8" }}>
        {HERO_TEXT}
      </span>
    </motion.div>
  );
}

function CutoutSubject() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
      <img
        src="/hero-cutout.webp"
        alt="Raviteja Erram"
        fetchPriority="high"
        className="w-full h-full object-cover"
        style={{
          objectPosition: "center 20%",
          willChange: "transform",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden"
        }}
        draggable={false}
      />
    </div>
  );
}

function SubjectGlow() {
  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
      style={{
        zIndex: 12,
        width: "50%",
        height: "18%",
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(214,198,168,0.06) 0%, transparent 70%)",
      }}
    />
  );
}

function DarkOverlays() {
  return (
    <>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 15,
          height: "30%",
          background:
            "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 15,
          height: "25%",
          background:
            "linear-gradient(to top, rgba(13,13,13,0.65) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
        }}
      />
    </>
  );
}

function ForegroundText({ y, opacity }: { y: MotionValue<number>; opacity: MotionValue<number> }) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible"
      style={{ zIndex: 20, y, opacity, willChange: "transform, opacity" }}
    >
      <span
        aria-hidden="true"
        style={{
          ...textBase,
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(214,198,168,0.4)",
          paintOrder: "stroke fill",
        }}
      >
        {HERO_TEXT}
      </span>
    </motion.div>
  );
}

function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 50,
        opacity: 0.035,
        mixBlendMode: "overlay",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION — Main Export
   ═══════════════════════════════════════════════════════ */
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We assign a height of 200vh to the container to give it scroll runway.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Adding a spring ensures silky smooth interpolation regardless of mouse wheel stepping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgY = useTransform(smoothProgress, [0, 1], [0, -150]);
  const fgY = useTransform(smoothProgress, [0, 1], [0, -250]);
  const textOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 0.8, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-[200vh] bg-ink-dark">
      {/* Sticky container that locks the scene in place while we scroll through the 200vh container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* ── Layer Stack ── */}
        <BackgroundImage />
        <BackgroundText y={bgY} opacity={textOpacity} />
        <CutoutSubject />
        <SubjectGlow />
        <DarkOverlays />
        <ForegroundText y={fgY} opacity={textOpacity} />
        <GrainOverlay />

        {/* ═══════════════════════════════════════
            UI CHROME (z-40)
           ═══════════════════════════════════════ */}

        {/* Top-left: label */}
        <div
          className="absolute top-8 left-8 md:top-10 md:left-12 font-sans text-[0.6rem] tracking-[0.28em] uppercase"
          style={{ zIndex: 40, color: "rgba(214,198,168,0.55)" }}
        >
          Creative Presentation
        </div>

        {/* Top-right: navigation */}
        <nav
          className="absolute top-8 right-8 md:top-10 md:right-12 hidden md:flex items-center gap-8"
          style={{ zIndex: 40 }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() =>
                scrollTo(link === "Creative" ? "creative-work" : link.toLowerCase())
              }
              className="cursor-pointer font-sans text-[0.6rem] tracking-[0.2em] uppercase bg-transparent border-none p-0 transition-colors duration-300 hover:!text-gold-text"
              style={{ color: "rgba(214,198,168,0.5)" }}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Bottom-left: credit */}
        <div
          className="absolute bottom-8 left-8 md:bottom-10 md:left-12"
          style={{ zIndex: 40 }}
        >
          <p
            className="font-sans text-[0.55rem] tracking-[0.28em] uppercase mb-[5px]"
            style={{ color: "rgba(214,198,168,0.45)" }}
          >
            Designed by
          </p>
          <p className="font-sans text-[0.8rem] tracking-[0.1em] text-gold-text">
            Raviteja Erram
          </p>
        </div>

        {/* Bottom-right: URL */}
        <div
          className="absolute bottom-8 right-8 md:bottom-10 md:right-12 font-tight text-[0.6rem] tracking-[0.22em] uppercase"
          style={{ zIndex: 40, color: "rgba(214,198,168,0.4)" }}
        >
          ravitejaerram.com
        </div>

        {/* Bottom-center: scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 40 }}
        >
          <span
            className="font-sans text-[0.5rem] tracking-[0.35em] uppercase"
            style={{ color: "rgba(214,198,168,0.35)" }}
          >
            Scroll
          </span>
          <div
            className="w-px animate-hero-scroll-pulse"
            style={{
              height: "32px",
              background: "linear-gradient(to bottom, rgba(214,198,168,0.35), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
