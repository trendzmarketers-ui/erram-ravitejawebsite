import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { CreativeWorkModal } from "./CreativeWorkModal";
import { creativeWorks, type CreativeWork } from "../data/portfolio";

/* Split into 3 rows for the infinite scroll effect */
const row1 = creativeWorks.filter((_, i) => i % 3 === 0);
const row2 = creativeWorks.filter((_, i) => i % 3 === 1);
const row3 = creativeWorks.filter((_, i) => i % 3 === 2);

/* ─── Infinite Row Component ─── */

const CARD_W = 316; // 300 + 16 gap
const SPEED = 35;   // seconds per full loop

function InfiniteRow({
  items,
  direction,
  onCardClick,
}: {
  items: CreativeWork[];
  direction: "left" | "right";
  onCardClick: (item: CreativeWork) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  /* Duplicate the list 4× so it feels seamless */
  const looped = [...items, ...items, ...items, ...items];
  const totalW = items.length * CARD_W;

  const animName = direction === "left" ? "scrollLeft" : "scrollRight";

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 4%, black 96%, transparent)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={rowRef}
        className="flex gap-4 will-change-transform"
        style={{
          width: `${looped.length * CARD_W}px`,
          animation: `${animName} ${SPEED}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {looped.map((item, i) => (
          <ScrollCard key={`${item.id}-${i}`} item={item} onClick={() => onCardClick(item)} />
        ))}
      </div>

      {/* Inject keyframes */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalW}px); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-${totalW}px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/* ─── Card ─── */

function ScrollCard({
  item,
  onClick,
}: {
  item: CreativeWork;
  onClick: () => void;
}) {
  return (
    <div
      className="flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer group bg-white border border-divider shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-400 hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:z-10"
      style={{ width: 300, height: 200 }}
      onClick={onClick}
    >
      {/* Image fills entire card */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
        }}
      >
        {/* Category badge */}
        <span
          className="self-start px-2.5 py-0.5 rounded-full mb-2 font-tight text-[0.58rem] tracking-[0.14em] uppercase text-gold border backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(198,167,105,0.15)",
            borderColor: "rgba(198,167,105,0.3)",
          }}
        >
          {item.category}
        </span>

        {/* Title */}
        <h4 className="font-serif text-white text-[1rem] leading-[1.3]">
          {item.title}
        </h4>

        {/* Gold line */}
        <div className="w-6 h-px mt-2 bg-gold" />
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export function CreativeWorkSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = useCallback((item: CreativeWork) => {
    const idx = creativeWorks.findIndex((w) => w.id === item.id);
    setCurrentIndex(idx);
    setModalOpen(true);
  }, []);

  return (
    <section id="creative-work" className="py-24 md:py-32 overflow-hidden bg-white">
      {/* Header */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
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
          className="mb-4 font-serif text-ink text-[clamp(1.8rem,4vw,3rem)]"
        >
          Creative Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-body text-[0.95rem] leading-[1.7] max-w-[600px]"
        >
          A curated selection of visual projects across social media, web design, and branding.
        </motion.p>
      </div>

      {/* 3 Scrolling Rows */}
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <InfiniteRow items={row1} direction="left" onCardClick={handleCardClick} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <InfiniteRow items={row2} direction="right" onCardClick={handleCardClick} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <InfiniteRow items={row3} direction="left" onCardClick={handleCardClick} />
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <CreativeWorkModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        items={creativeWorks}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
