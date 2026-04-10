import {
  Cpu, MapPin, Radio, ShieldCheck, Siren, LocateFixed,
  Camera, Monitor, Wifi, ZoomIn, Users, Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─── Type Definitions ─── */

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  desc: string;
  highlights?: string[];
  link?: { label: string; href: string };
}

export interface Achievement {
  num: number;
  suffix: string;
  label: string;
}

export interface Education {
  years: string;
  institution: string;
  location: string;
  degree: string;
  desc: string;
}

export interface ProjectFeature {
  icon: LucideIcon;
  text: string;
}

export interface ProjectUseCase {
  title: string;
  desc: string;
}

export interface ProjectDetail {
  title: string;
  subtitle: string;
  badge: string;
  year: string;
  institution?: string;
  organization?: string;
  role?: string;
  type: string;
  overview: string;
  concept: string;
  impact: string;
  features: ProjectFeature[];
  useCases?: ProjectUseCase[];
}

/* ─── Work Experience ─── */

export const experiences: Experience[] = [
  {
    company: "TrendZ Marketers",
    role: "Co-Founder",
    duration: "Aug 2023 – Present",
    location: "Hyderabad, India",
    desc: "Co-founded a digital marketing agency focused on building strong brand identities and scalable digital growth strategies. Lead brand strategy, digital campaigns, and technology-driven marketing solutions for clients across healthcare, events, and technology sectors.",
    highlights: [
      "Delivered 60+ brand transformations and 40+ digital campaigns",
      "Led SEO, PPC, social media strategy, and content marketing initiatives",
      "Built 30+ digital platforms including websites and applications",
      "Integrated analytics and data-driven insights to improve marketing performance and ROI",
      "Developed innovative brand storytelling and growth strategies for emerging businesses",
    ],
    link: { label: "View Campaigns", href: "#" },
  },
  {
    company: "ABP Travels & Facilities",
    role: "Business Consultant",
    duration: "Jun 2024 – Present",
    location: "Visakhapatnam, India",
    desc: "Provide strategic consulting to improve operational efficiency and business expansion for a corporate transportation services company.",
    highlights: [
      "Developed corporate mobility and transportation solutions",
      "Identified new market opportunities and partnerships",
      "Implemented digital booking and scheduling systems",
      "Introduced data-driven operational metrics and performance tracking",
      "Designed new revenue streams including premium services and corporate travel packages",
    ],
  },
  {
    company: "SMT Enterprises",
    role: "Founder",
    duration: "May 2024 – Present",
    location: "Visakhapatnam, India",
    desc: "Founded a multi-service business delivering digital marketing, technology support, business consulting, and corporate transportation services.",
    highlights: [
      "Built scalable service models using AI-powered marketing and automation",
      "Managed corporate employee transportation logistics",
      "Implemented SEO, social media campaigns, and digital growth strategies",
      "Delivered operational efficiency solutions through business process automation",
    ],
  },
  {
    company: "Vertocity",
    role: "Marketing Operations Manager",
    duration: "Aug 2024 – Mar 2025",
    location: "Hyderabad, India",
    desc: "Led marketing operations and campaign management while implementing automation-driven workflows to improve digital marketing efficiency.",
    highlights: [
      "Developed and executed marketing strategies and digital campaigns",
      "Managed content creation and performance marketing initiatives",
      "Introduced automation tools to streamline marketing workflows",
      "Enhanced brand visibility and audience engagement",
    ],
    link: { label: "View Creative Work", href: "#" },
  },
  {
    company: "Indus Hospitals",
    role: "Head of Digital Marketing",
    duration: "Oct 2023 – Jul 2024",
    location: "Visakhapatnam, India",
    desc: "Led digital marketing operations for a healthcare organization, focusing on patient engagement, online visibility, and strategic marketing initiatives.",
    highlights: [
      "Managed hospital digital branding and marketing campaigns",
      "Implemented SEO and social media marketing strategies",
      "Developed healthcare-focused content marketing strategies",
      "Improved patient outreach and digital engagement metrics",
    ],
  },
  {
    company: "LG India",
    role: "Digital Marketing Executive",
    duration: "May 2023 – Jul 2023",
    location: "Visakhapatnam, India",
    desc: "Worked on digital marketing initiatives supporting brand campaigns and online engagement strategies.",
  },
  {
    company: "Vertocity",
    role: "Multimedia Graphic Designer",
    duration: "Oct 2021 – May 2023",
    location: "Hyderabad, India",
    desc: "Designed visual assets including marketing creatives, digital content, and branding materials while supporting campaign execution.",
    link: { label: "View Creative Work", href: "#" },
  },
];

export const achievements: Achievement[] = [
  { num: 60, suffix: "+", label: "Brand Transformations" },
  { num: 40, suffix: "+", label: "Digital Campaigns" },
  { num: 30, suffix: "+", label: "Digital Platforms Built" },
  { num: 10, suffix: "+", label: "Industries Served" },
];

export const skills: string[] = [
  "Digital Marketing Strategy",
  "Brand Development",
  "SEO Optimization",
  "AI Marketing Automation",
  "Photography & Visual Storytelling",
  "Content Creation",
  "Business Consulting",
  "Operations Strategy",
  "Transportation & Fleet Management",
  "Social Media Marketing",
  "Performance Marketing",
  "Web Development",
  "Data Analytics",
  "Campaign Management",
  "Creative Direction",
];

export const education: Education[] = [
  {
    years: "2022 — 2023",
    institution: "Andhra University",
    location: "Visakhapatnam",
    degree: "Diploma in Photography",
    desc: "Focused on visual storytelling, composition, lighting techniques, and professional photography practices.",
  },
  {
    years: "2016 — 2020",
    institution: "Raghu Engineering College",
    location: "",
    degree: "Bachelor of Engineering (B.E.)",
    desc: "Completed undergraduate engineering program with emphasis on analytical thinking, technical problem-solving, and systems understanding.",
  },
];

/* ─── Featured Projects ─── */

export const spuProject: ProjectDetail = {
  title: "Speed Control Unit (SPU)",
  subtitle: "Intelligent Traffic Speed Regulation System",
  badge: "Final Year Project",
  year: "2020",
  institution: "Raghu Engineering College",
  type: "Mechanical Engineering",
  overview:
    "Developed an automated vehicle speed control system designed to improve road safety in restricted traffic zones. The system automatically regulates a vehicle's speed when it enters designated no-speeding areas such as school zones, hospitals, and high-risk traffic regions.",
  concept:
    "When a vehicle enters a predefined geofenced no-speeding zone, the Speed Control Unit automatically adjusts the vehicle's speed to match the permitted limit for that area. Emergency vehicles such as ambulances and police vehicles are excluded from restrictions, allowing them to operate without limitations during emergencies.",
  impact:
    "This project demonstrates the integration of mechanical systems, location-based technologies, and intelligent traffic management concepts to create safer urban transportation systems.",
  features: [
    { icon: Cpu, text: "Automatic vehicle speed regulation in restricted zones" },
    { icon: LocateFixed, text: "Geo-location based zone detection" },
    { icon: Radio, text: "Geofencing technology integration" },
    { icon: ShieldCheck, text: "Maintains traffic discipline and safe driving speeds" },
    { icon: MapPin, text: "Reduces risk of collisions in sensitive areas" },
    { icon: Siren, text: "Special vehicle override for ambulances, emergency services, and police" },
  ],
};

export const sbsProject: ProjectDetail = {
  title: "Surgical Broadcast System",
  subtitle: "PTZ Camera-Based Medical Broadcasting",
  badge: "Healthcare Innovation",
  year: "2023 – 2024",
  organization: "Indus Hospitals",
  role: "Head of Digital Marketing / Digital Systems Contributor",
  type: "Healthcare Technology",
  overview:
    "Conceptualized and helped design a surgical broadcasting system using PTZ (Pan-Tilt-Zoom) cameras to capture and stream medical procedures from multiple perspectives inside operation theatres.",
  concept:
    "The PTZ camera system allows remote operation to pan, tilt, and zoom without interrupting the surgical workflow, ensuring that critical moments during procedures can be captured from optimal viewing angles.",
  impact:
    "By integrating PTZ camera technology with surgical broadcasting, the hospital can create a modern digital infrastructure that enhances both clinical practice and learning — improving medical education, surgical documentation, remote collaboration, and overall hospital operational efficiency.",
  features: [
    { icon: Camera, text: "Multi-angle surgical broadcasting from inside operation theatres" },
    { icon: Video, text: "PTZ camera controls for pan, tilt, and zoom functionality" },
    { icon: Wifi, text: "Remote camera operation without interfering with surgical procedures" },
    { icon: Monitor, text: "High-definition live streaming and recording" },
    { icon: ZoomIn, text: "Zoom capability for critical surgical details" },
    { icon: Users, text: "Central monitoring system for multiple displays" },
  ],
  useCases: [
    {
      title: "Medical Training & Education",
      desc: "Surgeries can be broadcast to lecture halls or classrooms, enabling medical students and junior doctors to observe complex procedures without overcrowding the operation theatre.",
    },
    {
      title: "Live Surgical Demonstrations",
      desc: "Hospitals can stream surgeries during medical conferences, workshops, or specialist training programs, allowing remote audiences to learn from experienced surgeons.",
    },
    {
      title: "Remote Expert Consultation",
      desc: "Specialists in other locations can watch the surgery live and provide guidance, improving surgical outcomes in complex or rare cases.",
    },
    {
      title: "Surgical Documentation",
      desc: "The system enables recording of surgical procedures for documentation, case studies, and medical research.",
    },
    {
      title: "Quality Control & Review",
      desc: "Hospital management and senior surgeons can review recorded procedures to analyze surgical techniques, improve protocols, and enhance patient safety.",
    },
    {
      title: "Patient Case Explanation",
      desc: "Recorded procedures can help doctors explain treatment methods to patients and families, improving transparency and trust.",
    },
  ],
};
