import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { featuredWorkFilters, featuredWorks } from "../data/portfolio";

export function FeaturedWorkSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? featuredWorks : featuredWorks.filter((w) => w.category === active);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
  };

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [lightboxIndex, filtered.length]);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-sans text-gold text-[0.8rem] tracking-[0.2em] uppercase"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 font-serif text-ink text-[clamp(1.8rem,4vw,3rem)]"
        >
          Featured Work
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {featuredWorkFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`cursor-pointer px-5 py-2 rounded-full font-sans text-[0.8rem] tracking-[0.06em] transition-all duration-300 border ${
                active === f
                  ? "text-white bg-ink border-ink"
                  : "text-body bg-surface border-divider hover:border-gold hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}>
          <Masonry gutter="16px">
            {filtered.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(filtered.findIndex(f => f.id === work.id))}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-divider"
              >
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ height: work.tall ? "480px" : "320px" }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}
                >
                  <div>
                    <p className="font-sans text-gold text-[0.7rem] tracking-[0.15em] uppercase mb-1">
                      {work.category}
                    </p>
                    <p className="font-serif text-white text-[1.25rem]">
                      {work.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Uncropped Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={28} />
              </button>

              <motion.img
                key={filtered[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={filtered[lightboxIndex].img}
                alt={filtered[lightboxIndex].title}
                className="w-full h-full object-contain cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                 <p className="text-white/70 font-sans tracking-widest text-sm uppercase">{filtered[lightboxIndex].category}</p>
                 <h3 className="text-white font-serif text-2xl mt-1">{filtered[lightboxIndex].title}</h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
