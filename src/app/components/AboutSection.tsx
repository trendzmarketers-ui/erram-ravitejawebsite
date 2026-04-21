import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const PORTRAIT = "/raviteja-portrait.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
        >
          <img
            src={PORTRAIT}
            alt="Raviteja Erram"
            className="w-full h-[500px] md:h-[600px] object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-sans text-gold text-[0.8rem] tracking-[0.2em] uppercase">
            About
          </p>
          <h2 className="mb-8 font-serif text-ink text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.3]">
            I design systems, create visual experiences, and build businesses.
          </h2>
          <p className="mb-6 font-sans text-body text-[0.95rem] leading-[1.8]">
            Raviteja Erram is a multidisciplinary professional working across photography, design, and marketing. With a passion for building systems that merge creativity and technology, he crafts visual narratives and business solutions that stand apart.
          </p>
          <p className="font-sans text-body text-[0.95rem] leading-[1.8]">
            From founding creative platforms to designing modern spaces, his work is driven by a singular vision — to create meaningful, impactful experiences at the intersection of design and business.
          </p>

          {/* View Experience link */}
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 mt-6 font-sans text-gold text-[0.85rem] tracking-[0.08em] no-underline transition-all duration-300 hover:text-ink group"
          >
            View Full Experience
            <ArrowUpRight size={16} />
          </Link>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-divider pt-8">
            {[
              { num: "50+", label: "Projects" },
              { num: "2", label: "Ventures" },
              { num: "5+", label: "Years" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-tight text-gold text-[1.8rem]">{s.num}</p>
                <p className="font-sans text-muted-text text-[0.8rem] tracking-[0.08em] uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}