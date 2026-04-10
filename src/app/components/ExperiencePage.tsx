import React, { useEffect, useRef, useState, useCallback } from "react";
import { useSEO } from "../hooks/useSEO";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, ArrowUpRight, X,
} from "lucide-react";
import { useNavigate } from "react-router";
import {
  experiences, achievements, skills, education,
  spuProject, sbsProject,
} from "../data/experiences";

/* ─── Count-Up Hook ─── */

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

/* ─── Achievement Card ─── */

function AchievementCard({ num, suffix, label, delay }: { num: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(num, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="font-tight text-gold text-[clamp(2rem,4vw,3.2rem)]">
        {count}{suffix}
      </p>
      <p className="font-sans text-body text-[0.85rem] tracking-[0.06em] mt-2">
        {label}
      </p>
    </motion.div>
  );
}

/* ─── Main Page ─── */

export function ExperiencePage() {
  const navigate = useNavigate();
  const [spuModalOpen, setSpuModalOpen] = useState(false);
  const [sbsModalOpen, setSbsModalOpen] = useState(false);

  useSEO({
    title: "Professional Experience — Career, Skills & Achievements",
    description:
      "Explore the professional experience of Raviteja Erram — digital marketing leadership, brand transformations, 60+ campaigns, and ventures across healthcare, creative agencies, and technology.",
    canonical: "https://ravitejaerram.com/experience",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = useCallback(() => navigate("/"), [navigate]);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* ── Sticky Nav Bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-divider"
        style={{
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 1px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <button
            onClick={handleBack}
            className="cursor-pointer flex items-center gap-2 font-sans text-body text-[0.85rem] tracking-[0.06em] transition-colors duration-300 hover:text-ink"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <button
            onClick={handleBack}
            className="cursor-pointer font-serif text-ink text-[1.25rem] tracking-[0.02em]"
          >
            Raviteja Erram
          </button>
          <div className="w-[60px]" />
        </div>
      </nav>

      {/* ─── 1. Page Header ─── */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-12 text-center bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-gold text-[0.8rem] tracking-[0.25em] uppercase mb-6"
          >
            Career
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-ink text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] mb-6"
          >
            Professional Experience
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto w-16 h-[2px] mb-6 bg-gold"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-sans text-body text-[1.05rem] leading-[1.7] max-w-[650px] mx-auto mb-10"
          >
            A journey across digital marketing, creative design, business strategy, and operational innovation.
          </motion.p>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { val: "10+", label: "Brands Transformed" },
              { val: "60+", label: "Campaigns Executed" },
              { val: "30+", label: "Platforms Developed" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-tight text-ink text-[1.3rem]">{s.val}</p>
                <p className="font-sans text-muted-text text-[0.72rem] tracking-[0.1em] uppercase mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 2. Experience Timeline ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center font-serif text-ink text-[clamp(1.6rem,3vw,2.4rem)]"
          >
            Work History
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-px bg-divider" />

            <div className="flex flex-col gap-8 md:gap-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="relative md:pl-[72px]"
                >
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute top-8 w-[14px] h-[14px] rounded-full items-center justify-center bg-white border-2 border-gold"
                    style={{ left: "22px" }}
                  >
                    <div className="w-[5px] h-[5px] rounded-full bg-gold" />
                  </div>

                  {/* Card */}
                  <div
                    className="p-8 md:p-10 rounded-xl bg-white border border-divider shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-500 cursor-default hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 hover:border-gold"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-serif text-ink text-[1.3rem] mb-1">
                          {exp.company}
                        </h3>
                        <p className="font-sans text-gold text-[0.85rem]">
                          {exp.role}
                        </p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <p className="font-tight text-ink text-[0.78rem] tracking-[0.04em]">
                          {exp.duration}
                        </p>
                        <p className="font-sans text-muted-text text-[0.75rem]">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className={`font-sans text-body text-[0.9rem] leading-[1.75] ${exp.highlights ? "mb-4" : ""}`}>
                      {exp.desc}
                    </p>

                    {exp.highlights && (
                      <ul className="flex flex-col gap-1.5 mt-2">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5">
                            <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                            <span className="font-sans text-body text-[0.84rem] leading-relaxed">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.link && (
                      <a
                        href={exp.link.href}
                        className="inline-flex items-center gap-1.5 mt-5 font-sans text-gold text-[0.8rem] tracking-[0.06em] no-underline transition-colors duration-300 hover:text-ink"
                      >
                        {exp.link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Key Achievements ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center font-serif text-ink text-[clamp(1.6rem,3vw,2.4rem)]"
          >
            Key Achievements
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {achievements.map((a, i) => (
              <AchievementCard key={a.label} num={a.num} suffix={a.suffix} label={a.label} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Skills & Expertise ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center font-serif text-ink text-[clamp(1.6rem,3vw,2.4rem)]"
          >
            Skills & Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="px-5 py-2.5 rounded-full font-sans text-[0.82rem] text-body bg-white border border-divider shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-default hover:border-gold hover:text-ink hover:shadow-[0_4px_16px_rgba(198,167,105,0.1)]"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. Education ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center font-serif text-ink text-[clamp(1.6rem,3vw,2.4rem)]"
          >
            Education
          </motion.h2>

          {/* Two-column education rows */}
          <div className="max-w-[900px] mx-auto flex flex-col">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 rounded-lg px-4 md:px-6 -mx-4 md:-mx-6 border-b border-divider transition-colors duration-300 cursor-default hover:bg-surface"
              >
                {/* Left — Year */}
                <div className="shrink-0">
                  <p className="font-tight text-gold text-[0.9rem] tracking-[0.04em]">
                    {edu.years}
                  </p>
                </div>

                {/* Right — Details */}
                <div>
                  <h3 className="font-serif text-ink text-[1.25rem] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="font-sans text-muted-text text-[0.82rem] mb-3">
                    {edu.institution}{edu.location ? `, ${edu.location}` : ""}
                  </p>
                  <p className="font-sans text-body text-[0.88rem] leading-[1.75]">
                    {edu.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SPU Final Year Project Highlight Card */}
          <ProjectHighlightCard
            project={spuProject}
            tags={["Geofencing-Based Speed Regulation", "Smart Traffic Safety", spuProject.type]}
            onViewProject={() => setSpuModalOpen(true)}
            delay={0.2}
          />

          {/* SBS Healthcare Innovation Highlight Card */}
          <ProjectHighlightCard
            project={sbsProject}
            tags={["PTZ Camera Technology", "Surgical Broadcasting", sbsProject.type]}
            onViewProject={() => setSbsModalOpen(true)}
            delay={0.4}
          />
        </div>
      </section>

      {/* SPU Project Modal */}
      <ProjectDetailModal
        isOpen={spuModalOpen}
        onClose={() => setSpuModalOpen(false)}
        project={spuProject}
        tags={["Geofencing-Based Speed Regulation", "Smart Traffic Safety", spuProject.type]}
        creditLabel="Institution"
        creditValue={spuProject.institution ?? ""}
      />

      {/* SBS Project Modal */}
      <ProjectDetailModal
        isOpen={sbsModalOpen}
        onClose={() => setSbsModalOpen(false)}
        project={sbsProject}
        tags={["PTZ Camera Technology", "Surgical Broadcasting", sbsProject.type]}
        creditLabel="Organization"
        creditValue={sbsProject.organization ?? ""}
        useCases={sbsProject.useCases}
      />

      {/* ── Footer CTA ── */}
      <section className="py-16 px-6 md:px-12 text-center bg-surface border-t border-divider">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-muted-text text-[0.75rem] tracking-[0.1em]">
            &copy; 2026 Raviteja Erram. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   REUSABLE SUB-COMPONENTS
   ═══════════════════════════════════════════ */

/* ─── Project Highlight Card (used for SPU and SBS on the Education section) ─── */

interface ProjectHighlightCardProps {
  project: typeof spuProject;
  tags: string[];
  onViewProject: () => void;
  delay: number;
}

function ProjectHighlightCard({ project, tags, onViewProject, delay }: ProjectHighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="max-w-[900px] mx-auto mt-16"
    >
      <div
        className="rounded-2xl overflow-hidden bg-white border border-divider shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-default hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-gold"
      >
        {/* Top accent bar */}
        <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #C6A769, rgba(198,167,105,0.3))" }} />

        <div className="p-8 md:p-12">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full mb-4 font-tight text-[0.65rem] tracking-[0.12em] uppercase text-gold bg-gold-light border border-gold-border">
                {project.badge}
              </span>
              <h3 className="font-serif text-ink text-[1.5rem] mb-1">
                {project.title}
              </h3>
              <p className="font-sans text-body text-[0.92rem]">
                {project.subtitle}
              </p>
            </div>
            <div className="sm:text-right shrink-0">
              <p className="font-tight text-ink text-[0.78rem]">
                {project.year}
              </p>
              <p className="font-sans text-muted-text text-[0.75rem]">
                {project.institution ?? project.organization ?? ""}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full font-sans text-[0.7rem] text-body bg-surface border border-divider"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-sans text-body text-[0.9rem] leading-[1.75]">
            {project.overview}
          </p>

          {/* View Project button */}
          <button
            onClick={onViewProject}
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-full font-sans text-[0.8rem] tracking-[0.08em] text-ink bg-transparent border border-ink transition-all duration-300 cursor-pointer hover:bg-ink hover:text-white"
          >
            View Project
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Unified Project Detail Modal (replaces SPUProjectModal + SBSProjectModal) ─── */

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: typeof spuProject;
  tags: string[];
  creditLabel: string;
  creditValue: string;
  useCases?: Array<{ title: string; desc: string }>;
}

function ProjectDetailModal({
  isOpen, onClose, project, tags, creditLabel, creditValue, useCases,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        window.removeEventListener("keydown", handleKey);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 backdrop-blur-[20px]"
          style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
          onClick={onClose}
        >
          {/* Close */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-surface border border-divider transition-all duration-300 hover:bg-ink hover:border-ink group"
          >
            <X size={18} className="text-ink group-hover:text-white" />
          </motion.button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-[860px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-divider shadow-[0_40px_100px_rgba(0,0,0,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold accent bar */}
            <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #C6A769, rgba(198,167,105,0.2))" }} />

            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full mb-4 font-tight text-[0.65rem] tracking-[0.12em] uppercase text-gold bg-gold-light border border-gold-border">
                  {project.badge} &middot; {project.year}
                </span>
                <h2 className="font-serif text-ink text-[clamp(1.5rem,3vw,2rem)] mb-1">
                  {project.title}
                </h2>
                <p className="font-sans text-body text-[0.95rem]">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full font-sans text-[0.7rem] text-body bg-surface border border-divider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-8 bg-divider" />

              {/* Overview + Concept */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-serif text-ink text-[1.15rem] mb-3">Overview</h3>
                  <p className="font-sans text-body text-[0.88rem] leading-[1.8]">{project.overview}</p>
                </div>
                <div>
                  <h3 className="font-serif text-ink text-[1.15rem] mb-3">System Concept</h3>
                  <p className="font-sans text-body text-[0.88rem] leading-[1.8]">{project.concept}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-serif text-ink text-[1.15rem] mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div
                        key={f.text}
                        className="flex items-start gap-3 p-4 rounded-lg bg-[#FAFAFA] border border-[#F0F0F0] transition-colors duration-300 hover:border-gold-muted"
                      >
                        <div className="shrink-0 mt-0.5">
                          <Icon size={16} className="text-gold" />
                        </div>
                        <span className="font-sans text-[#555555] text-[0.84rem] leading-normal">
                          {f.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Impact */}
              <div className="p-6 rounded-xl bg-surface border border-divider">
                <h3 className="font-serif text-ink text-[1.05rem] mb-2.5">Impact</h3>
                <p className="font-sans text-body text-[0.88rem] leading-[1.8]">{project.impact}</p>
              </div>

              {/* Use Cases (SBS only) */}
              {useCases && (
                <div className="mt-8 pt-6">
                  <h3 className="font-serif text-ink text-[1.15rem] mb-3">Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((uc) => (
                      <div key={uc.title} className="p-4 rounded-lg bg-[#FAFAFA] border border-[#F0F0F0] transition-colors duration-300">
                        <h4 className="font-serif text-ink text-[1rem] mb-2">{uc.title}</h4>
                        <p className="font-sans text-body text-[0.88rem] leading-relaxed">{uc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Credit */}
              <div className="mt-8 pt-6 flex items-center justify-between border-t border-divider">
                <div>
                  <p className="font-sans text-muted-text text-[0.75rem] tracking-[0.08em] uppercase">{creditLabel}</p>
                  <p className="font-sans text-ink text-[0.88rem] mt-0.5">{creditValue}</p>
                </div>
                <div className="text-right">
                  <p className="font-sans text-muted-text text-[0.75rem] tracking-[0.08em] uppercase">Discipline</p>
                  <p className="font-sans text-ink text-[0.88rem] mt-0.5">{project.type}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}