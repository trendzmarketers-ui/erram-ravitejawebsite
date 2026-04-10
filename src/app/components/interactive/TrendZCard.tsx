import React, { useRef, useState, useEffect, ReactNode } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

interface TrendZCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TrendZCard({ children, className = "", delay = 0 }: TrendZCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);

  // Track mouse for CSS variables (Spotlight)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    // Spawn 1-2 particles on movement
    if (isHovered) {
      const count = Math.random() > 0.4 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        spawnParticle(x, y);
      }
    }
  };

  const spawnParticle = (x: number, y: number) => {
    particlesRef.current.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      life: 1,
      // Particles live for ~30-70 frames (0.5s to 1.1s)
      maxLife: 30 + Math.random() * 40,
      size: Math.random() * 1.5 + 0.5,
    });
  };

  // 60fps simulation loop
  const drawParticles = () => {
    if (!canvasRef.current || !canvasRef.current.getContext) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    // Ensure canvas dimensions match high-DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasRef.current.getBoundingClientRect();
    
    if (canvasRef.current.width !== rect.width * dpr || canvasRef.current.height !== rect.height * dpr) {
      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, rect.width, rect.height);

    const particles = particlesRef.current;

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life++;

      if (p.life >= p.maxLife) {
        particles.splice(i, 1);
        continue;
      }

      // Smooth fade in and out curve
      const progress = p.life / p.maxLife;
      const opacity = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${opacity * 0.7})`; // Soft neon green
      ctx.fill();
    }

    // Keep running until all particles are dead
    if (particles.length > 0) {
      frameRef.current = requestAnimationFrame(drawParticles);
    } else {
      frameRef.current = null;
    }
  };

  useEffect(() => {
    if (isHovered && !frameRef.current) {
      // Start loop when hovered if not already running
      frameRef.current = requestAnimationFrame(drawParticles);
    }
    return () => {
      // Don't cancel immediately on unmount so particles can fade smoothly if mouse leaves
    };
  });

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`trendz-interactive-card relative overflow-hidden rounded-[16px] group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default will-change-transform z-10 hover:z-20 hover:scale-[1.02] hover:-translate-y-1.5 hover:bg-[#0A0A0A] hover:border-[#1F1F1F] hover:shadow-[0_24px_50px_-12px_rgba(16,185,129,0.25)] ${className}`}
    >
      {/* ── Spotlight Background (follows mouse) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16,185,129,0.15), transparent 80%)",
        }}
      />

      {/* ── Base Ambient Glow ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"
        style={{
          boxShadow: "inset 0 0 30px rgba(16,185,129,0.05)",
        }}
      />

      {/* ── Particle Canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0 w-full h-full z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div >
  );
}
