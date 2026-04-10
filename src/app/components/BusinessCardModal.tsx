import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Linkedin, Globe, Phone } from "lucide-react";

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BusinessCardModal({ isOpen, onClose }: BusinessCardModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsFlipped(false);
      setTilt({ x: 0, y: 0 });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -20,
      y: (x - 0.5) * 20,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 backdrop-blur-[16px]"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center p-8 md:p-12 rounded-2xl bg-white border border-divider shadow-[0_40px_100px_rgba(0,0,0,0.15)] max-w-[480px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-surface text-muted-text transition-all duration-300 hover:text-ink hover:bg-divider"
            >
              <X size={18} />
            </button>

            {/* Title */}
            <p className="mb-6 font-sans text-faint text-[0.7rem] tracking-[0.25em] uppercase">
              Tap card to flip
            </p>

            {/* 3D Card — keeping dark premium card design */}
            <div
              ref={cardRef}
              className="cursor-pointer"
              style={{ perspective: "1200px", width: 350, height: 200, maxWidth: "100%" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                animate={{
                  rotateY: isFlipped ? 180 : 0,
                  rotateX: tilt.x,
                }}
                transition={{
                  rotateY: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  rotateX: { duration: 0.15, ease: "easeOut" },
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* FRONT SIDE */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #141414 100%)",
                    border: "1px solid rgba(198,167,105,0.25)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Gold shimmer line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(198,167,105,0.5), transparent)" }}
                  />
                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-gold-muted" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-gold-muted" />

                  <div className="absolute inset-0 flex flex-col justify-center px-8">
                    <p className="font-serif text-[#F5F5F5] text-[1.35rem] mb-1 tracking-[0.02em]">
                      Raviteja Erram
                    </p>
                    <p className="font-tight text-gold text-[0.55rem] tracking-[0.2em] uppercase mb-4">
                      Entrepreneur &bull; Designer &bull; Creator
                    </p>
                    <div className="w-12 h-px bg-gold/30" />
                  </div>
                  <div className="absolute bottom-4 right-8">
                    <p className="font-sans text-[rgba(245,245,245,0.15)] text-[0.5rem] tracking-[0.15em] uppercase">
                      ravitejaerram.com
                    </p>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 50%, #141414 100%)",
                    border: "1px solid rgba(198,167,105,0.25)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(198,167,105,0.5), transparent)" }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center px-8 py-5">
                    <p className="font-sans text-[rgba(245,245,245,0.3)] text-[0.55rem] tracking-[0.2em] uppercase mb-3">
                      Get in Touch
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {[
                        { icon: Mail, text: "hello@ravitejaerram.com" },
                        { icon: Phone, text: "+91 XXXXX XXXXX" },
                        { icon: Linkedin, text: "linkedin.com/in/ravitejaerram" },
                        { icon: Globe, text: "ravitejaerram.com" },
                      ].map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-3">
                          <Icon size={12} className="text-gold shrink-0" />
                          <span className="font-sans text-[rgba(245,245,245,0.7)] text-[0.7rem]">
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-gold/30" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-gold/30" />
                </div>
              </motion.div>
            </div>

            {/* Subtitle */}
            <p className="mt-6 font-sans text-[#CCCCCC] text-[0.65rem] tracking-[0.15em]">
              Interactive Digital Card
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
