import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../data/blog";
import { Navbar } from "../components/Navbar";
import { ContactSection as Footer } from "../components/ContactSection";
import { useSEO } from "../hooks/useSEO";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Inject strict SEO based on the blog article loaded
  useSEO({
    title: post.title,
    description: post.excerpt,
    canonical: `https://ravitejaerram.com/${post.id}`, // User specifically requested root-level paths for these articles
    ogType: "article",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-body selection:bg-gold/20 font-sans">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase text-muted-text hover:text-ink transition-colors mb-10 no-underline"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-[0.8rem] text-gold uppercase tracking-[0.1em] font-medium mb-6">
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-divider"></span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[1.15] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 border-b border-divider pb-8">
            <img src={post.author.avatar} alt="Raviteja Erram" className="w-12 h-12 rounded-full border border-divider" />
            <div>
              <p className="font-medium text-ink m-0">{post.author.name}</p>
              <p className="text-[0.85rem] text-muted-text m-0">{post.date}</p>
            </div>
          </div>
        </motion.div>

        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 rounded-xl overflow-hidden shadow-sm"
          >
            <img src={post.coverImage} alt={post.title} className="w-full object-cover max-h-[500px]" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-lg md:prose-xl prose-stone max-w-none text-body [&>h3]:font-serif [&>h3]:text-ink [&>h3]:font-normal [&>h3]:mt-12 [&>h3]:mb-6 [&>p]:leading-relaxed [&>p]:mb-6 [&>strong]:text-ink"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>
        
        <div className="mt-20 pt-10 border-t border-divider flex items-center justify-between">
            <h3 className="text-[1.2rem] font-serif m-0 text-ink">Explore more by Raviteja Erram</h3>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 font-sans text-[0.8rem] tracking-[0.1em] uppercase text-gold hover:text-ink transition-colors no-underline"
            >
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
      </main>

      <Footer />
    </div>
  );
}
