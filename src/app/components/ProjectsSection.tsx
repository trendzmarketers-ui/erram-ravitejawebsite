import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-sans text-gold text-[0.8rem] tracking-[0.2em] uppercase"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-serif text-ink text-[clamp(1.8rem,4vw,3rem)]"
        >
          Projects
        </motion.h2>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-0 rounded-xl overflow-hidden bg-white border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-gold"
            >
              <div className="overflow-hidden h-[220px] md:h-[260px]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span
                  className="inline-block mb-4 px-3 py-1 rounded-full w-fit font-tight text-[0.7rem] tracking-[0.1em] text-gold bg-gold-light border border-gold-border uppercase"
                >
                  {p.tag}
                </span>
                <h3 className="flex items-center gap-2 font-serif text-ink text-[1.4rem] mb-3">
                  {p.title}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold" />
                </h3>
                <p className="font-sans text-body text-[0.9rem] leading-[1.7]">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
