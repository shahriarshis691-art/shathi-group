export interface CortexEducation {
  degree: string;
  institution: string;
  year: string;
  focus: string;
}

export interface CortexExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface CortexProject {
  title: string;
  category: string;
  description: string;
  metrics: string[];
  image: string;
  demoUrl: string;
}

export interface CortexEngineer {
  slug: string;
  name: string;
  role: string;
  titleTag?: string;
  avatar: string;
  bio: string;
  clientMessage?: string;
  stack: string[];
  education: CortexEducation[];
  experience: CortexExperience[];
  projects: CortexProject[];
  id?: string;
  index?: string;
  category?: string;
  quote?: string;
  technicalCore?: string[];
  pastEngagements?: string[];
  directPortfolioRoute?: string;
  image?: string;
}

export const cortexEngineers: CortexEngineer[] = [
  {
    slug: "sarker-adhara",
    name: "Sarker Adhara",
    role: "MANAGING DIRECTOR & CYBERSECURITY ENGINEER",
    titleTag: "01 // MANAGING DIRECTOR & CYBERSECURITY",
    index: "01",
    category: "Cybersecurity",
    avatar: "/cortex/managingdirector.png",
    bio: "Sarker Adhara serves as Managing Director & Cybersecurity Engineer at CORTEXIO Softsolutions, directing cybersecurity strategy and resilient systems architecture. Combining specialized digital business and innovation expertise from Tokyo International University with mission-critical security paradigms, she ensures enterprise platforms remain impervious to evolving threat landscapes.",
    clientMessage: "As Managing Director & Cybersecurity Engineer, I defend sovereign digital architecture through rigorous threat modeling, zero-trust protocols, and resilient infrastructure.",
    stack: ["Zero-Trust Architecture & Threat Modeling", "Enterprise Penetration Testing & Defense", "Cloud Security Posture Management (CSPM)", "Identity & Cryptographic Protocol Design"],
    education: [
      { degree: "Digital Business & Innovation", institution: "Tokyo International University", year: "", focus: "Cybersecurity strategy, digital resilience, and enterprise security architecture." },
    ],
    experience: [
      { role: "MANAGING DIRECTOR & CYBERSECURITY ENGINEER", company: "CORTEXIO Softsolutions", period: "Present", highlights: ["Directing cybersecurity strategy and resilient systems architecture for sovereign digital platforms."] },
      { role: "Digital Systems Infrastructure Specialist", company: "Tokyo International University Digital Systems Infrastructure", period: "Previous", highlights: ["Focused on digital systems infrastructure and security integration."] },
      { role: "Zero-Trust Implementation Lead", company: "Enterprise Zero-Trust Implementation", period: "Previous", highlights: ["Led enterprise zero-trust implementation and defense strategies."] },
      { role: "Cryptographic Security Auditor", company: "Cross-Border Cryptographic Security Audits", period: "Previous", highlights: ["Conducted cross-border cryptographic security audits and protocol design."] },
    ],
    projects: [
      { title: "Sovereign Digital Resilience Architecture", category: "Cybersecurity", description: "Enterprise cybersecurity architecture combining zero-trust protocols, threat modeling, and resilient infrastructure for sovereign digital platforms.", metrics: ["Zero-trust architecture", "Threat modeling rigor", "Resilient infrastructure"], image: "/cortex/managingdirector.png", demoUrl: "/companies/cortex-softsolutions" },
    ],
  },
  {
    slug: "maskat-md-mahadi-hassan",
    name: "Maskat Md Mahadi Hassan",
    role: "DIGITAL BUSINESS & INNOVATION LEAD",
    titleTag: "02 // DIGITAL BUSINESS & INNOVATION",
    index: "02",
    category: "Digital Business & Innovation",
    avatar: "/cortex/engineers/navid.jpg",
    bio: "Specializing in digital strategy, business model innovation, and technological scalability. Leveraging global perspective from Tokyo International University to architect high-impact digital ventures.",
    clientMessage: "Transforming enterprise capabilities through sovereign digital architectures and sustainable market innovation.",
    stack: ["Digital Business Strategy & Modeling", "Enterprise Technology Transformation", "Cross-Border Market Architecture", "Product Innovation Lifecycle"],
    education: [
      { degree: "Digital Business & Innovation", institution: "Tokyo International University", year: "", focus: "Digital strategy, business model innovation, and technological scalability." },
    ],
    experience: [
      { role: "DIGITAL BUSINESS & INNOVATION LEAD", company: "CORTEXIO Softsolutions", period: "Present", highlights: ["Transforming enterprise capabilities through sovereign digital architectures and sustainable market innovation."] },
      { role: "Digital Systems Specialist", company: "Tokyo International University", period: "Previous", highlights: ["Specialized in digital systems and enterprise technology transformation."] },
      { role: "Strategy Consultant", company: "Enterprise Strategy Frameworks", period: "Previous", highlights: ["Developed enterprise strategy frameworks for digital ventures."] },
      { role: "Venture Planning Lead", company: "Global Commercial Venture Planning", period: "Previous", highlights: ["Led global commercial venture planning initiatives."] },
    ],
    projects: [
      { title: "Sovereign Digital Venture Architecture", category: "Digital Business", description: "High-impact digital venture architecture combining sovereign digital systems with sustainable market innovation.", metrics: ["Sovereign digital architectures", "Sustainable market innovation", "Cross-border scalability"], image: "/cortex/engineers/maskat-md-mahadi-hassan.jpg", demoUrl: "/companies/cortex-softsolutions" },
    ],
  },
  {
    id: "sm-shahriar-walid",
    slug: "sm-shahriar-walid",
    titleTag: "03 // FOUNDER & CHIEF ARCHITECT",
    name: "SM Shahriar Walid",
    role: "FOUNDER & CEO, SHATHI GROUP // LEAD & FOUNDER, CORTEXIO",
    index: "03",
    category: "Founding & Strategy",
    quote: "Architecting autonomous digital ecosystems and high-impact enterprises designed for generational resilience.",
    bio: "SM Shahriar Walid is the Founder & CEO of Shathi Group and the visionary lead behind CORTEXIO Softsolutions. Directing corporate strategy, technological innovation, and scalable digital architectures across the conglomerate's diverse portfolio.",
    technicalCore: [
      "Enterprise Digital Architecture",
      "Strategic Conglomerate Governance",
      "High-Scale Systems Design",
      "Technology Venture Incubation"
    ],
    pastEngagements: [
      "Shathi Group Conglomerate Architecture",
      "CORTEXIO Autonomous Ecosystems",
      "Multi-Industry Digital Integration"
    ],
    directPortfolioRoute: "/companies/cortex-softsolutions/engineers/sm-shahriar-walid",
    image: "/cortex/engineers/engineer.founder.png.jpg",
    avatar: "/cortex/engineers/engineer.founder.png.jpg",
    stack: [],
    education: [],
    experience: [],
    projects: []
  },
];

export function getCortexEngineer(slug: string) {
  return cortexEngineers.find((engineer) => engineer.slug === slug);
}
