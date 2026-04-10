import { useState, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { BusinessCardModal } from "./BusinessCardModal";

/**
 * XOR-based email obfuscation.
 * The email is stored as encoded bytes and only decoded on user interaction,
 * preventing automated bot scraping from the DOM and page source.
 */
const EMAIL_KEY = 42;
const EMAIL_ENCODED = [
  74, 71, 70, 70, 73, 22, 88, 67, 82, 73, 88, 71, 74, 67, 71, 88, 88, 67, 77, 28, 69, 73, 77,
];

function decodeEmail(): string {
  return EMAIL_ENCODED.map((c) => String.fromCharCode(c ^ EMAIL_KEY)).join("");
}

const socials = [
  { icon: Mail, label: "Email", href: "#email" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export function ContactSection() {
  const [showCard, setShowCard] = useState(false);

  const handleEmailClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${decodeEmail()}`;
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Gold divider */}
        <div className="mx-auto mb-16 w-16 h-[2px] bg-gold" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-ink text-[clamp(1.8rem,4vw,3rem)] mb-6"
        >
          Let's build something meaningful together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 font-sans text-body text-[0.95rem]"
        >
          Open for collaborations, creative projects, and new ventures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            const isEmail = s.label === "Email";
            return (
              <a
                key={s.label}
                href={s.href}
                onClick={isEmail ? handleEmailClick : undefined}
                className="flex items-center gap-2 text-body no-underline transition-all duration-300 hover:text-ink group"
              >
                <Icon size={18} />
                <span className="font-sans text-[0.85rem] tracking-[0.06em]">
                  {s.label}
                </span>
              </a>
            );
          })}
        </motion.div>

        {/* View My Card Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={() => setShowCard(true)}
            className="relative px-8 py-3.5 rounded-full overflow-hidden cursor-pointer font-sans text-[0.8rem] tracking-[0.15em] uppercase bg-transparent text-gold border border-gold transition-all duration-500 hover:bg-gold hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,167,105,0.2)]"
          >
            View My Card
          </button>
        </motion.div>

        <BusinessCardModal isOpen={showCard} onClose={() => setShowCard(false)} />

        {/* Divider */}
        <div className="mx-auto mt-16 mb-8 w-16 h-px bg-divider" />

        <div className="flex justify-center gap-6 mb-4">
          <Link
            to="/privacy"
            className="font-sans text-muted-text text-[0.7rem] tracking-[0.08em] no-underline transition-all duration-300 hover:text-ink"
          >
            Privacy Policy
          </Link>
          <span className="text-divider text-[0.7rem]">|</span>
          <Link
            to="/terms"
            className="font-sans text-muted-text text-[0.7rem] tracking-[0.08em] no-underline transition-all duration-300 hover:text-ink"
          >
            Terms & Conditions
          </Link>
        </div>

        <p className="font-sans text-faint text-[0.75rem] tracking-[0.1em]">
          &copy; 2026 Raviteja Erram. All rights reserved.
        </p>
      </div>
    </section>
  );
}
