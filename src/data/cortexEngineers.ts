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
  titleTag: string;
  avatar: string;
  bio: string;
  clientMessage?: string;
  stack: string[];
  education: CortexEducation[];
  experience: CortexExperience[];
  projects: CortexProject[];
}

export const cortexEngineers: CortexEngineer[] = [
  {
    slug: "sarker-adhara",
    name: "Sarker Adhara",
    role: "HEAD OF CYBERSECURITY & DIGITAL RESILIENCE",
    titleTag: "01 // CYBERSECURITY & DIGITAL RESILIENCE",
    avatar: "/cortex/managingdirector.png",
    bio: "Sarker Adhara directs cybersecurity strategy and resilient systems architecture at CORTEXIO Softsolutions. Combining specialized digital business and innovation expertise from Tokyo International University with mission-critical security paradigms, she ensures enterprise platforms remain impervious to evolving threat landscapes.",
    clientMessage: "Defending sovereign digital architecture through rigorous threat modeling, zero-trust protocols, and resilient infrastructure.",
    stack: ["Zero-Trust Architecture & Threat Modeling", "Enterprise Penetration Testing & Defense", "Cloud Security Posture Management (CSPM)", "Identity & Cryptographic Protocol Design"],
    education: [
      { degree: "Digital Business & Innovation", institution: "Tokyo International University", year: "", focus: "Cybersecurity strategy, digital resilience, and enterprise security architecture." },
    ],
    experience: [
      { role: "HEAD OF CYBERSECURITY & DIGITAL RESILIENCE", company: "CORTEXIO Softsolutions", period: "Present", highlights: ["Defending sovereign digital architecture through rigorous threat modeling, zero-trust protocols, and resilient infrastructure."] },
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
];

export function getCortexEngineer(slug: string) {
  return cortexEngineers.find((engineer) => engineer.slug === slug);
}
