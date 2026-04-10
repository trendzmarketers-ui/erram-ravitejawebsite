import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { ContactSection as Footer } from "../components/ContactSection";
import { useSEO } from "../hooks/useSEO";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function AboutPage() {
  useSEO({
    title: "About Raviteja Erram — Digital Marketing & Business Strategist",
    description:
      "Learn more about Raviteja Erram, an entrepreneur and digital strategy expert focused on building scalable modern brands through data-backed marketing.",
    canonical: "https://ravitejaerram.com/about",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-body selection:bg-gold/20 font-sans">
      <Navbar />
      
      {/* Hero Section of About */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase text-muted-text hover:text-ink transition-colors mb-12 no-underline"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-ink leading-[1.1] mb-8">
            About Raviteja Erram
          </h1>
          
          <p className="text-[1.25rem] md:text-[1.5rem] leading-relaxed text-ink/80 font-light max-w-3xl mb-16">
            Raviteja Erram is an Entrepreneur, Digital Marketing & Business Strategist focused on building scalable brands through performance-driven marketing, strong brand positioning, and data-backed growth strategies.
          </p>

          <div className="w-24 h-[2px] bg-gold mb-16" />
        </motion.div>

        {/* Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg md:prose-xl prose-stone max-w-none text-body [&>h2]:font-serif [&>h2]:text-ink [&>h2]:font-normal [&>h2]:mt-16 [&>h2]:mb-8 [&>p]:leading-relaxed [&>p]:mb-6"
        >
          <h2>The Journey of Raviteja Erram</h2>
          <p>
            The digital world is evolving at an unprecedented pace, and navigating it requires more than just traditional advertising. It requires an architect. <strong>Raviteja Erram</strong> is an entrepreneur, digital marketing expert, and business strategist deeply focused on building modern, scalable brands in the digital era. With years of experience mapping market logic against creative design, Raviteja Erram helps organizations transform digital chaos into measurable business growth.
          </p>
          <p>
            Throughout his career, Raviteja Erram has operated at the exact intersection of creativity and data analytics. He recognized early on that a beautiful brand identity means nothing if it cannot be found, and that a high-traffic campaign is useless without a compelling narrative. This philosophy became the cornerstone of his methodology—ensuring that every decision is backed by intelligent data, while every user interaction remains profoundly human and emotionally resonant.
          </p>

          <h2>Ventures by Raviteja Erram</h2>
          <p>
            As the driving force behind <strong>TrendZ Marketers</strong>, Raviteja Erram specializes in delivering end-to-end digital marketing solutions that consistently push the envelope. TrendZ Marketers isn’t just an agency; it is a strategic hub where Raviteja Erram architects brand ecosystems ranging from performance marketing pipelines to immersive content curation. His approach fundamentally ensures that campaigns are not only visually compelling but ultimately conversion-focused and revenue-oriented.
          </p>
          <p>
            Beyond agency leadership, the portfolio of Raviteja Erram extends into cross-disciplinary innovation. He is associated with <strong>HiveSpaces</strong> as a core design partner. Here, Raviteja Erram translates his digital design philosophy into physical architecture, contributing to innovative spatial concepts that seamlessly align with both modern corporate operations and sophisticated lifestyle needs. It is this unique, multidisciplinary vision of Raviteja Erram that bridges the gap between digital interaction and physical experience. Additionally, his recent expansions through <strong>SMT Enterprises</strong> reinforce his capacity to scale diverse service portfolios locally and globally.
          </p>

          <h2>Core Competencies of Raviteja Erram</h2>
          <p>
            The tactical expertise of Raviteja Erram is comprehensive and rigorously tested across varied markets. What sets Raviteja Erram apart is an unwillingness to settle for surface-level analytics. His expertise directly encompasses:
          </p>
          <ul className="list-disc pl-6 mb-8 text-ink space-y-3 font-medium">
            <li><strong>Brand Positioning and Identity Building:</strong> Crafting the specific emotional resonance that connects a brand to its target demographic seamlessly.</li>
            <li><strong>Performance Marketing & Lead Generation:</strong> Utilizing advanced paid media equations and programmatic logic to command attention at optimized cost.</li>
            <li><strong>Social Media Growth Strategies:</strong> Analyzing algorithmic momentum to organically build massive digital communities for brands.</li>
            <li><strong>Content-Driven Marketing Ecosystems:</strong> Designing self-sustaining creative supply chains that educate and convert audiences simultaneously.</li>
            <li><strong>Business Scalability and Digital Transformation:</strong> Moving legacy businesses into modern API-led and cloud-backed branding infrastructures.</li>
          </ul>

          <h2>Why Raviteja Erram? The System Over The Campaign</h2>
          <p>
            Many digital strategists look exactly at the immediate horizon: the next social media post, the next ad creative, or the next press release. <strong>Raviteja Erram</strong> looks at the entire systemic architecture. What genuinely sets Raviteja Erram apart from his peers is this obsessive focus on engineering long-term systems instead of executing isolated campaigns. 
          </p>
          <p>
            When Raviteja Erram audits a brand, he evaluates the permanence of its digital footprint. He builds systems—funnels, automated marketing pathways, programmatic SEO logic, and evergreen content libraries—that secure long-term digital authority and robust consistency. A brand architecture designed by Raviteja Erram does not decay when the advertising budget stops; it compounds over time.
          </p>
          <p>
            Today, <strong>Raviteja Erram</strong> continues to work with visionary businesses, hyper-growth startups, and established professionals. His ultimate objective remains identical across all verticals: to help elite organizations definitively establish an unshakeable digital presence, pull exactly the right audience into their orbit, and rapidly convert attention into transformative, measurable results.
          </p>
          
          <div className="mt-16 flex items-center justify-between border-t border-divider pt-12">
            <h3 className="text-[1.5rem] font-serif m-0 text-ink">Ready to innovate?</h3>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 font-sans text-[0.8rem] tracking-[0.1em] uppercase text-gold hover:text-ink transition-colors no-underline"
            >
              Read insights by Raviteja Erram <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
