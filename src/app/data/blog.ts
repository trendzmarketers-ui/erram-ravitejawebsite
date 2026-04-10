export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "design-thinking-process",
    title: "The Design Thinking Process: From Idea to Execution",
    excerpt: "How a structured design thinking process can transform abstract concepts into tangible, high-performing digital experiences.",
    content: `
When approaching a new project, it's easy to jump straight into visuals. However, true design solves problems before it paints pictures. 

### 1. Empathy First
Understanding the end-user is non-negotiable. Whether it's a corporate website or a social media campaign, knowing what the audience needs dictates the entire structural hierarchy.

### 2. Define the Core
Distill the problem down to its simplest form. If the problem is "we need a better website," the actual core requirement might be "we need to reduce friction in the checkout process."

### 3. Ideate Freely
No idea is a bad idea in the early stages. Wireframing and rough sketches allow for rapid iteration without the emotional commitment of polished designs.

### 4. Prototype and Test
Build functional prototypes. A design only works if it feels natural in the hands of the user. We continually test, refine, and polish until the experience is completely seamless.
    `,
    date: "Oct 12, 2026",
    readTime: "4 min read",
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1742440710453-d5db3a357362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNzczNDE0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: {
      name: "Raviteja Erram",
      avatar: "/logo.png",
      role: "Creative Director"
    }
  },
  {
    id: "visual-storytelling-branding",
    title: "Visual Storytelling in Modern Branding",
    excerpt: "Why aesthetics alone are no longer enough to capture consumer attention in a saturated digital market.",
    content: `
In today's digital landscape, consumers are bombarded with thousands of marketing messages daily. A beautiful logo or a trendy color palette is no longer enough to differentiate a brand.

### The Shift from Aesthetics to Narrative
Brands need to communicate a story. Visual storytelling uses design elements—typography, imagery, color pacing, and layout architecture—to guide the viewer through an emotional journey.

When I designed the identity for TrendZ, the focus wasn't on picking a "nice" color. It was about choosing a deep, authoritative ink tone paired with a sophisticated gold to tell a story of premium quality and unwavering reliability.

Every post, every email, every page should feel like another chapter in the same book. Consistent narrative builds trust, and trust builds legacy.
    `,
    date: "Sep 28, 2026",
    readTime: "3 min read",
    category: "Branding",
    author: {
      name: "Raviteja Erram",
      avatar: "/logo.png",
      role: "Creative Director"
    }
  },
  {
    id: "minimalism-is-not-boring",
    title: "Minimalism is Not Boring: The Art of Restraint",
    excerpt: "Exploring how minimalism in digital design actually highlights content and reduces cognitive load.",
    content: `
There is a common misconception that minimalism equates to a lack of effort or creativity. In reality, minimalism is the art of restraint. It is painstakingly difficult to achieve because when you strip away the noise, every remaining element must be perfect.

### White Space as an Active Element
White space (or negative space) is not empty space; it is an active structural element. It provides breathing room, drawing the eye exactly where it needs to go. 

By removing unnecessary decorative elements, we lower the user's cognitive load. They don't have to figure out how to use the interface; it becomes completely intuitive. The content shines, and the message is delivered without friction.
    `,
    date: "Aug 15, 2026",
    readTime: "5 min read",
    category: "Philosophy",
    coverImage: "https://images.unsplash.com/photo-1760037034804-2dce280659e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbG9nbyUyMGRlc2lnbiUyMGJyYW5kaW5nfGVufDF8fHx8MTc3MzM0MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    author: {
      name: "Raviteja Erram",
      avatar: "/logo.png",
      role: "Creative Director"
    }
  }
];
