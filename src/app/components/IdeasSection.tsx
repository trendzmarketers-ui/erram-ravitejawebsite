import { motion } from "motion/react";
import { ideas } from "../data/portfolio";

export function IdeasSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 font-sans text-gold text-[0.8rem] tracking-[0.2em] uppercase"
        >
          Lab
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 font-serif text-ink text-[clamp(1.8rem,4vw,3rem)]"
        >
          Ideas & Experiments
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, i) => (
            <motion.article
              key={idea.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden bg-white border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {idea.type === "image" && idea.img ? (
                <div className="overflow-hidden h-[200px]">
                  <img
                    src={idea.img}
                    alt={idea.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="p-6">
                <h3 className={`font-serif text-ink text-[1.1rem] ${idea.type === "text" ? "mb-3" : ""}`}>
                  {idea.title}
                </h3>
                {idea.type === "text" && idea.desc && (
                  <p className="font-sans text-body text-[0.85rem] leading-[1.7]">
                    {idea.desc}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
