import { motion } from "motion/react";
import { Camera, Palette, MonitorSmartphone, Megaphone } from "lucide-react";

const categories = [
  { icon: Camera, title: "Visual Creation", desc: "Photography and video editing" },
  { icon: Palette, title: "Design & Architecture", desc: "Interior and exterior design" },
  { icon: MonitorSmartphone, title: "Digital Systems", desc: "Digital marketing and AI automation" },
  { icon: Megaphone, title: "Brand & Marketing", desc: "Brand strategy and performance marketing" },
];

export function WhatIDoSection() {
  return (
    <section id="whatido" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-sans text-gold text-[0.8rem] tracking-[0.2em] uppercase"
        >
          Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-serif text-ink text-[clamp(1.8rem,4vw,3rem)]"
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="premium-card p-10 h-full flex flex-col"
              >
                <div className="premium-card-icon w-12 h-12 flex items-center justify-center mb-8">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-ink tracking-wide text-[1.2rem] mb-3">
                  {cat.title}
                </h3>
                <p className="font-sans text-body text-[0.85rem] leading-relaxed tracking-wide opacity-90">
                  {cat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
