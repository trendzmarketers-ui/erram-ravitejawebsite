import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function TermsConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-16 cursor-pointer bg-transparent border-none font-sans text-muted-text text-[0.8rem] tracking-[0.1em] transition-all duration-300 hover:text-ink"
        >
          <ArrowLeft size={16} />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-sans text-gold text-[0.75rem] tracking-[0.2em] uppercase">
            Legal
          </p>
          <h1 className="mb-4 font-serif text-ink text-[clamp(2rem,5vw,3rem)]">
            Terms & Conditions
          </h1>
          <p className="mb-16 font-tight text-faint text-[0.75rem] tracking-[0.1em]">
            Last Updated: March 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-12 legal-content"
        >
          <p className="body-text">
            Welcome to ravitejaerram.com. By accessing this website, you agree to the following terms.
          </p>

          <div>
            <h2 className="legal-heading">1. Use of the Website</h2>
            <p className="body-text">
              This website is intended to showcase the work, projects, ventures, and professional portfolio of Raviteja Erram. Users may browse and view content for informational purposes.
            </p>
            <p className="body-text mt-3">You agree not to:</p>
            <ul className="legal-list"><li>Misuse the website</li><li>Attempt unauthorized access</li><li>Copy or reproduce content without permission</li></ul>
          </div>

          <div>
            <h2 className="legal-heading">2. Intellectual Property</h2>
            <p className="body-text">All content on this website including:</p>
            <ul className="legal-list"><li>Photographs</li><li>Designs</li><li>Text</li><li>Graphics</li><li>Branding</li><li>Projects</li></ul>
            <p className="body-text">is the intellectual property of Raviteja Erram, unless stated otherwise. Unauthorized reproduction or distribution is prohibited.</p>
          </div>

          <div>
            <h2 className="legal-heading">3. Project and Work Representation</h2>
            <p className="body-text">
              The projects, ventures, and case studies displayed on this website represent professional experience and collaborations. Descriptions are provided for informational and portfolio purposes.
            </p>
          </div>

          <div>
            <h2 className="legal-heading">4. External Links</h2>
            <p className="body-text">This website may contain links to external platforms such as:</p>
            <ul className="legal-list"><li>LinkedIn</li><li>Instagram</li><li>Partner websites</li></ul>
            <p className="body-text">We are not responsible for the content or policies of those websites.</p>
          </div>

          <div>
            <h2 className="legal-heading">5. Limitation of Liability</h2>
            <p className="body-text">The information on this website is provided for general informational purposes. We do not guarantee that:</p>
            <ul className="legal-list"><li>All information is always current</li><li>The website will always be available without interruption</li></ul>
            <p className="body-text">Use of this website is at your own discretion.</p>
          </div>

          <div>
            <h2 className="legal-heading">6. Changes to Terms</h2>
            <p className="body-text">
              These Terms and Conditions may be updated periodically. Continued use of the website indicates acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="legal-heading">7. Contact</h2>
            <p className="body-text">For questions regarding these terms, contact:</p>
            <div className="mt-4 p-6 rounded-xl bg-surface border border-divider">
              <p className="font-serif text-ink text-[1rem] mb-1.5">Raviteja Erram</p>
              <p className="font-sans text-body text-[0.85rem] leading-[1.8]">
                Website: ravitejaerram.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
