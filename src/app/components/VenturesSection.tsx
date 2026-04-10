import { motion } from "motion/react";
import { Globe, Home } from "lucide-react";
import { TrendZCard } from "./interactive/TrendZCard";
import { HiveSpacesCard } from "./interactive/HiveSpacesCard";

const ventures = [
  {
    icon: Globe,
    name: "TrendZ Marketers",
    desc: "Creative marketing agency focused on digital marketing, brand strategy, content creation, and performance marketing.",
  },
  {
    icon: Home,
    name: "HiveSpaces",
    role: "Design Partner",
    desc: "Interior design studio specializing in modern residential and commercial spaces.",
  },
];

export function VenturesSection() {
  return (
    <section id="ventures" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-sans text-gold text-[0.8rem] tracking-[0.2em] uppercase"
        >
          Business
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-serif text-ink text-[clamp(1.8rem,4vw,3rem)]"
        >
          Ventures
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {ventures.map((v, i) => {
            const Icon = v.icon;
            const CardWrapper = v.name === "HiveSpaces" ? HiveSpacesCard : TrendZCard;
            
            return (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="h-full"
              >
                <CardWrapper className="group p-10 h-full">
                <div
                  className="trendz-icon w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gold-light border border-gold-border"
                >
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className={`font-serif text-ink text-[1.4rem] ${v.role ? "mb-1.5" : "mb-3"}`}>
                  {v.name}
                </h3>
                {v.role && (
                  <p className="font-tight text-gold text-[0.75rem] tracking-[0.1em] uppercase mb-3">
                    {v.role}
                  </p>
                )}
                <p className="font-sans text-body text-[0.9rem] leading-[1.7]">
                  {v.desc}
                </p>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
