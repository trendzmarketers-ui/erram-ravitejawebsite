/* ─── Type Definitions ─── */

export interface CreativeWork {
  id: number;
  title: string;
  category: string;
  desc: string;
  img: string;
}

export interface FeaturedWork {
  id: number;
  title: string;
  category: string;
  img: string;
  tall: boolean;
}

export interface Project {
  title: string;
  desc: string;
  tag: string;
  img: string;
}

export interface Idea {
  title: string;
  desc?: string;
  img?: string;
  type: "text" | "image";
}

/* ─── Creative Works ─── */

export const creativeWorks: CreativeWork[] = [
  {
    id: 1,
    title: "Social Media Campaign",
    category: "Social Media",
    desc: "Comprehensive social media visual campaign featuring dynamic layouts, bold typography, and brand-consistent color palettes designed for maximum engagement across Instagram and Facebook.",
    img: "https://images.unsplash.com/photo-1689004624325-6edf074228dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbiUyMGNvbG9yZnVsJTIwZ3JhcGhpY3xlbnwxfHx8fDE3NzM0MTYzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Restaurant Poster",
    category: "Poster Design",
    desc: "Elegant restaurant promotional poster with appetizing food photography, refined typography, and a warm color scheme that captures the dining experience.",
    img: "https://images.unsplash.com/photo-1769693679423-97bc160c34c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBvc3RlciUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MTYzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Website Design",
    desc: "Sleek corporate website design with intuitive navigation, clean layout hierarchy, and responsive design principles that ensure a seamless user experience across all devices.",
    img: "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMxODYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Event Brochure",
    category: "Brochure Design",
    desc: "Multi-page event brochure design with structured information hierarchy, high-quality imagery, and consistent branding elements throughout the print layout.",
    img: "https://images.unsplash.com/photo-1555000001-d923003e3c0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicm9jaHVyZSUyMHByaW50JTIwZGVzaWdufGVufDF8fHx8MTc3MzQxNjM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Luxury Brand Identity",
    category: "Branding",
    desc: "Complete brand identity system for a luxury lifestyle brand including logo design, color palette, typography selection, and comprehensive brand guidelines documentation.",
    img: "https://images.unsplash.com/photo-1759563874667-73fd773d33d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3MzQxNjM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "Instagram Stories Suite",
    category: "Social Media",
    desc: "Cohesive Instagram stories template suite with animated elements, swipe-up integrations, and branded visual storytelling across multiple frames.",
    img: "https://images.unsplash.com/photo-1626862647712-a38156ab0488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBzdG9yeSUyMGRlc2lnbiUyMHBob25lJTIwbW9ja3VwfGVufDF8fHx8MTc3MzQxNjM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    title: "Music Festival Poster",
    category: "Poster Design",
    desc: "Bold, eye-catching music festival poster with vibrant neon aesthetics, dynamic compositions, and expressive typography that captures the energy of live events.",
    img: "https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBvc3RlciUyMHR5cG9ncmFwaHklMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzM0MTYzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    title: "E-Commerce Platform",
    category: "Website Design",
    desc: "Modern e-commerce website design with dark elegant aesthetics, intuitive product browsing, seamless checkout flow, and conversion-optimized landing pages.",
    img: "https://images.unsplash.com/photo-1716251212768-609b9140f3ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwdWklMjBkYXJrJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzM0MTYzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    title: "Product Catalog",
    category: "Brochure Design",
    desc: "Premium product catalog with meticulous layout design, studio-quality product photography, and detailed specifications presented in an accessible format.",
    img: "https://images.unsplash.com/photo-1586436008908-49c3fb035022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwY2F0YWxvZyUyMGJyb2NodXJlJTIwbGF5b3V0fGVufDF8fHx8MTc3MzQxNjM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 10,
    title: "Premium Packaging",
    category: "Branding",
    desc: "Luxury product packaging design with tactile textures, metallic foil accents, and premium unboxing experience that elevates the brand perception.",
    img: "https://images.unsplash.com/photo-1759563871375-a728c4e7218d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHBhY2thZ2luZyUyMGRlc2lnbiUyMHByZW1pdW18ZW58MXx8fHwxNzczNDE2Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 11,
    title: "Fashion Campaign",
    category: "Social Media",
    desc: "High-fashion social media campaign with editorial-quality visuals, curated color grading, and aspirational lifestyle imagery designed for maximum brand impact.",
    img: "https://images.unsplash.com/photo-1634475742248-1d6e17c072b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc29jaWFsJTIwbWVkaWElMjBjYW1wYWlnbnxlbnwxfHx8fDE3NzM0MTYzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 12,
    title: "Creative Agency Portfolio",
    category: "Website Design",
    desc: "Immersive portfolio website for a creative agency featuring smooth animations, dynamic project showcases, and an innovative navigation experience.",
    img: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHBvcnRmb2xpbyUyMHdlYiUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0MTYzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 13,
    title: "Concert Event Poster",
    category: "Poster Design",
    desc: "Atmospheric concert poster with dramatic lighting effects, layered visual elements, and attention-grabbing headline treatments that drive ticket sales.",
    img: "https://images.unsplash.com/photo-1759136871942-9605a371ba46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBwb3N0ZXIlMjBuZW9ufGVufDF8fHx8MTc3MzQxNjM3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 14,
    title: "Minimalist Logo System",
    category: "Branding",
    desc: "Clean, minimalist logo design system with versatile variations, clear space guidelines, and scalable vector assets for consistent brand application across all touchpoints.",
    img: "https://images.unsplash.com/photo-1760037034804-2dce280659e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbG9nbyUyMGRlc2lnbiUyMGJyYW5kaW5nfGVufDF8fHx8MTc3MzM0MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

/* ─── Featured Work (masonry gallery) ─── */

export const featuredWorkFilters = ["All", "Photography", "Video Editing", "Design Projects", "Creative Experiments"];

export const featuredWorks: FeaturedWork[] = [
  { id: 1, title: "Seascape Long Exposure", category: "Photography", img: "/portfolio/seascape.jpg", tall: true },
  { id: 2, title: "Vizag Sunset", category: "Photography", img: "/portfolio/vizag_sunset.jpg", tall: false },
  { id: 3, title: "The Train Journey", category: "Photography", img: "/portfolio/train_bridge.jpg", tall: true },
  { id: 4, title: "Snowy Village", category: "Photography", img: "/portfolio/snowy_village.jpg", tall: false },
  { id: 5, title: "Campfire by the Mountains", category: "Photography", img: "/portfolio/sunset_fire.jpg", tall: false },
  { id: 6, title: "Studio Portrait", category: "Photography", img: "/portfolio/portrait_man.jpg", tall: true },
  { id: 7, title: "Gym Aesthetics Collage", category: "Photography", img: "/portfolio/gym_collage.jpg", tall: true },
  { id: 8, title: "Focus", category: "Photography", img: "/portfolio/gym_lifting.jpg", tall: false },
  { id: 9, title: "Dedication", category: "Photography", img: "/portfolio/gym_sitting.jpg", tall: true },
  { id: 10, title: "Architectural Vision", category: "Design Projects", img: "https://images.unsplash.com/photo-1485025798926-cde0f0d24cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWwlMjBkYXJrfGVufDF8fHx8MTc3MzM3MDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", tall: false },
  { id: 11, title: "Motion Reel", category: "Video Editing", img: "https://images.unsplash.com/photo-1765654706297-de1123d8f199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzQxNDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", tall: true },
  { id: 12, title: "Leopard in the Wild", category: "Photography", img: "/portfolio/leopard_walking.jpg", tall: true },
  { id: 13, title: "Painted Stork", category: "Photography", img: "/portfolio/bird_branch.jpg", tall: false },
  { id: 14, title: "Leopard Resting", category: "Photography", img: "/portfolio/leopard_rock.jpg", tall: true },
  { id: 15, title: "White Tiger", category: "Photography", img: "/portfolio/white_tiger.jpg", tall: false },
  { id: 16, title: "Lioness", category: "Photography", img: "/portfolio/lioness.jpg", tall: false },
  { id: 17, title: "TrendZ Event Design", category: "Design Projects", img: "/portfolio/trendz_event_design.png", tall: false },
];

/* ─── Projects ─── */

export const projects: Project[] = [
  {
    title: "Platform Development",
    desc: "End-to-end creative platform built for photographers and event professionals with modern UI/UX.",
    tag: "Development",
    img: "https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkYXJrJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzM0MTQwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Automation Systems",
    desc: "AI-powered automation pipelines for digital marketing, content distribution, and analytics.",
    tag: "AI & Automation",
    img: "https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVjaG5vbG9neSUyMHNjcmVlbnN8ZW58MXx8fHwxNzczNDE0MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Interior Design Portfolio",
    desc: "Modern residential and commercial spaces designed with HiveSpaces — luxury meets functionality.",
    tag: "Design",
    img: "https://images.unsplash.com/photo-1762810944373-d3cd437cbd1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeSUyMHNwYWNlfGVufDF8fHx8MTc3MzQxNDA3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Brand Strategy & Identity",
    desc: "Comprehensive brand identity systems built for modern businesses — from visual language to market positioning.",
    tag: "Branding",
    img: "https://images.unsplash.com/photo-1755728531186-4efe610d8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVldCUyMGxvZ2lzdGljcyUyMHRyYW5zcG9ydGF0aW9uJTIwdHJ1Y2tzfGVufDF8fHx8MTc3MzQxNDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

/* ─── Ideas & Experiments ─── */

export const ideas: Idea[] = [
  {
    title: "AI-Powered Visual Curation",
    desc: "Exploring machine learning for automated photography grading and creative selection workflows.",
    type: "text",
  },
  {
    title: "Spatial Design Experiments",
    img: "https://images.unsplash.com/photo-1485025798926-cde0f0d24cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWwlMjBkYXJrfGVufDF8fHx8MTc3MzM3MDQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "image",
  },
  {
    title: "Creative Coding",
    img: "https://images.unsplash.com/photo-1742440710453-d5db3a357362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzczNDE0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "image",
  },
];
