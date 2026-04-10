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

interface HiveSpacesCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function HiveSpacesCard({ children, className = "" }: HiveSpacesCardProps) {
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

    // Ambient interior dust emission
    if (isHovered) {
      // Much less frequent emission than tech particles
      if (Math.random() > 0.6) {
        spawnParticle(x, y);
      }
    }
  };

  const spawnParticle = (x: number, y: number) => {
    particlesRef.current.push({
      x,
      y,
      // Very slow, drifting movement (like thermal dust)
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.7) * 0.6, // Plume upwards naturally
      life: 1,
      // Particles live longer (1s to 2s)
      maxLife: 60 + Math.random() * 60,
      // Ambient dust is very small
      size: Math.random() * 0.8 + 0.3,
    });
  };

  // 60fps simulation loop
  const drawParticles = () => {
    if (!canvasRef.current || !canvasRef.current.getContext) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

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
      const opacity = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(214, 168, 90, ${opacity * 0.6})`; // Warm Gold (#D6A85A)
      ctx.fill();
    }

    if (particles.length > 0) {
      frameRef.current = requestAnimationFrame(drawParticles);
    } else {
      frameRef.current = null;
    }
  };

  useEffect(() => {
    if (isHovered && !frameRef.current) {
      frameRef.current = requestAnimationFrame(drawParticles);
    }
    return () => {};
  });

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`hivespaces-interactive-card relative overflow-hidden rounded-[16px] group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#FDFCFB] border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default will-change-transform z-10 hover:z-20 hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#3B2A1F] hover:border-[#5A3E2B] hover:shadow-[0_24px_50px_-12px_rgba(89,62,43,0.3)] ${className}`}
    >
      {/* ── Spotlight Background (follows mouse) ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out z-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 350px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(214, 168, 90, 0.15), transparent 70%)",
        }}
      />

      {/* ── Base Ambient Warm Glow ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"
        style={{
          boxShadow: "inset 0 0 50px rgba(214, 168, 90, 0.08)",
        }}
      />

      {/* ── Particle Canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0 w-full h-full z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
}
