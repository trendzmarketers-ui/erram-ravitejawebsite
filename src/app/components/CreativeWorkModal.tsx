import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { CreativeWork } from "../data/portfolio";

interface CreativeWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CreativeWork[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function CreativeWorkModal({ isOpen, onClose, items, currentIndex, onNavigate }: CreativeWorkModalProps) {
  const item = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 backdrop-blur-[20px]"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-surface border border-divider transition-all duration-300 hover:bg-ink hover:border-ink group"
          >
            <X size={18} className="text-ink group-hover:text-white" />
          </motion.button>

          {/* Previous arrow */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-white border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-ink hover:border-ink group"
          >
            <ChevronLeft size={22} className="text-ink group-hover:text-white" />
          </motion.button>

          {/* Next arrow */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer bg-white border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:bg-ink hover:border-ink group"
          >
            <ChevronRight size={22} className="text-ink group-hover:text-white" />
          </motion.button>

          {/* Content */}
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-[900px] rounded-2xl overflow-hidden bg-white border border-divider shadow-[0_40px_100px_rgba(0,0,0,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <motion.img
                key={item.img}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full font-tight text-[0.65rem] tracking-[0.12em] uppercase text-gold bg-gold-light border border-gold-border"
                >
                  {item.category}
                </span>
                <span className="font-tight text-[0.65rem] text-faint tracking-[0.1em]">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>
              <h3 className="font-serif text-ink text-[1.5rem] mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-body text-[0.9rem] leading-[1.7]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
