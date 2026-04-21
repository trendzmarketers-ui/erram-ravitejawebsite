import { Link } from "react-router";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { ContactSection as Footer } from "../components/ContactSection";
import { blogPosts } from "../data/blog";
import { useSEO } from "../hooks/useSEO";

export function BlogPage() {
  useSEO({
    title: "Blog — Design, Branding & Creative Strategy Insights",
    description:
      "Read insights on design thinking, visual storytelling, and brand strategy from Raviteja Erram. Explore articles on minimalism, creative direction, and modern digital design.",
    canonical: "https://ravitejaerram.com/blog",
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-body selection:bg-gold/20 font-sans">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 max-w-[1000px] mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="font-sans text-gold text-[0.75rem] tracking-[0.2em] uppercase mb-4">
            Insights & Thoughts
          </p>
          <h1 className="font-serif text-ink text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-6">
            The Blog.
          </h1>
          <p className="max-w-[500px] mx-auto text-body text-[1.05rem] leading-[1.6]">
            Exploring design thinking, branding strategies, and the art of visual storytelling in the modern digital landscape.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col md:flex-row gap-8 md:gap-12 items-start"
            >
              {/* Optional Cover Image */}
              {post.coverImage && (
                <div className="w-full md:w-[45%] overflow-hidden rounded-[4px]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content Side */}
              <div className={`flex flex-col ${post.coverImage ? "w-full md:w-[55%]" : "w-full max-w-[700px] mx-auto text-center md:text-left"}`}>
                <div className="flex items-center gap-3 mb-4 text-[0.8rem] text-body/60 uppercase tracking-wider font-medium">
                  <span className="text-gold">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-divider"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link to={`/${post.id}`} className="no-underline">
                  <h2 className="font-serif text-ink text-[1.5rem] md:text-[2rem] leading-[1.25] mb-4 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-body text-[1rem] leading-[1.7] mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className={`flex items-center gap-3 mt-auto ${post.coverImage ? "" : "justify-center md:justify-start"}`}>
                  <div className="w-10 h-10 rounded-full bg-divider overflow-hidden flex items-center justify-center text-ink font-serif font-bold text-sm">
                    {post.author.avatar ? (
                      <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover grayscale opacity-80" />
                    ) : (
                      post.author.name.charAt(0)
                    )}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[0.85rem] font-medium text-ink">{post.author.name}</span>
                    <span className="text-[0.75rem] text-body/70">{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
