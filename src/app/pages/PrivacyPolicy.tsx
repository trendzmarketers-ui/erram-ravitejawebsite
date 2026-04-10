import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSEO } from "../hooks/useSEO";

export function PrivacyPolicy() {
  const navigate = useNavigate();

  useSEO({
    title: "Privacy Policy",
    description:
      "Read the privacy policy for ravitejaerram.com. Learn how your personal information is collected, used, and protected when you visit the website.",
    canonical: "https://ravitejaerram.com/privacy",
  });

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
            Privacy Policy
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
            Welcome to ravitejaerram.com. Your privacy is important to us. This Privacy Policy explains how information is collected, used, and protected when you visit this website.
          </p>

          <div>
            <h2 className="legal-heading">1. Information We Collect</h2>
            <p className="body-text">We may collect the following types of information:</p>
            <h3 className="legal-subheading">Personal Information</h3>
            <p className="body-text">When you contact us through forms or email, we may collect:</p>
            <ul className="legal-list"><li>Name</li><li>Email address</li><li>Phone number (if provided)</li><li>Message content</li></ul>
            <p className="body-text">This information is used only to respond to your inquiry.</p>
            <h3 className="legal-subheading">Non-Personal Information</h3>
            <p className="body-text">We may automatically collect basic technical information such as:</p>
            <ul className="legal-list"><li>Browser type</li><li>Device type</li><li>Pages visited</li><li>Time spent on pages</li><li>IP address</li></ul>
            <p className="body-text">This information helps improve website performance and user experience.</p>
          </div>

          <div>
            <h2 className="legal-heading">2. How We Use Your Information</h2>
            <p className="body-text">Information collected may be used to:</p>
            <ul className="legal-list"><li>Respond to inquiries or collaboration requests</li><li>Improve website performance</li><li>Understand visitor engagement</li><li>Maintain website security</li></ul>
            <p className="body-text">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="legal-heading">3. Cookies</h2>
            <p className="body-text">This website may use cookies or similar technologies to improve user experience. Cookies help us understand:</p>
            <ul className="legal-list"><li>Website traffic</li><li>Visitor behavior</li><li>Performance analytics</li></ul>
            <p className="body-text">You may disable cookies through your browser settings if desired.</p>
          </div>

          <div>
            <h2 className="legal-heading">4. Third-Party Services</h2>
            <p className="body-text">This website may include links or integrations with external services such as:</p>
            <ul className="legal-list"><li>LinkedIn</li><li>Instagram</li><li>Email providers</li><li>Analytics tools</li></ul>
            <p className="body-text">These platforms have their own privacy policies. We are not responsible for their practices.</p>
          </div>

          <div>
            <h2 className="legal-heading">5. Data Security</h2>
            <p className="body-text">We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. However, no online system is completely secure.</p>
          </div>

          <div>
            <h2 className="legal-heading">6. External Links</h2>
            <p className="body-text">This website may contain links to external websites. We are not responsible for the privacy practices of those websites.</p>
          </div>

          <div>
            <h2 className="legal-heading">7. Changes to This Policy</h2>
            <p className="body-text">This Privacy Policy may be updated occasionally. Updates will be posted on this page.</p>
          </div>

          <div>
            <h2 className="legal-heading">8. Contact</h2>
            <p className="body-text">For any privacy-related questions, please contact:</p>
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
