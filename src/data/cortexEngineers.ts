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
    slug: "navid-islam",
    name: "Navid Islam",
    role: "Lead UI/UX Architect",
    titleTag: "01 // PRODUCT DESIGN & INTERACTION",
    avatar: "/cortex/engineers/navid.jpg",
    bio: "Navid Islam is a lead UI/UX architect specializing in enterprise design systems and high-conversion SaaS digital products.",
    clientMessage: "We craft seamless digital interfaces where architectural precision meets intuitive human behavior.",
    stack: ["Figma", "Tailwind CSS", "Design Tokens", "React", "Next.js"],
    education: [
      { degree: "B.Sc. in Computer Science & Human-Computer Interaction", institution: "BRAC University", year: "2019", focus: "Interaction design and ergonomic user workflows." },
    ],
    experience: [
      { role: "Lead UI/UX Architect", company: "Cortex Soft Solutions", period: "2023 â€” Present", highlights: ["Builds token-based design systems and high-conversion SaaS interfaces."] },
    ],
    projects: [
      { title: "Enterprise Dashboard Suite", category: "SaaS Design System", description: "A dark-mode-first analytics dashboard with real-time telemetry.", metrics: ["42% faster task completion"], image: "/cortex/engineers/navid.jpg", demoUrl: "/cortex" },
    ],
  },  {
    slug: "sofia-lin",
    name: "Sofia Lin",
    role: "VP, Cloud Engineering & Infrastructure",
    titleTag: "[ CLOUD // RESILIENCE ]",
    avatar: "/cortex/engineers/sofia-lin.png",
    bio: "Sofia directs cloud engineering with an emphasis on operational clarity: infrastructure must be secure, explainable, and inexpensive to evolve. She helps CORTEXIO Softsolutions clients retain architectural freedom while keeping high-performance systems easy to run.",
    stack: ["Terraform", "GCP", "AWS", "Istio", "Grafana"],
    education: [
      { degree: "MS, Computer Science", institution: "Stanford University", year: "2012", focus: "Reliable distributed infrastructure" },
      { degree: "BS, Electrical Engineering", institution: "UC Berkeley", year: "2010", focus: "Networks and systems" },
    ],
    experience: [
      { role: "VP, Cloud Engineering & Infrastructure", company: "CORTEXIO Softsolutions", period: "2021 — Present", highlights: ["Builds zero-trust, observable foundation layers", "Leads cloud cost and reliability reviews for portfolio companies"] },
      { role: "Engineering Director", company: "Google Cloud", period: "2014 — 2021", highlights: ["Guided enterprise cloud adoption programs", "Established platform reliability practices across global teams"] },
      { role: "Infrastructure Engineer", company: "ScaleGrid Labs", period: "2012 — 2014", highlights: ["Developed automated environment provisioning and monitoring"] },
    ],
    projects: [
      { title: "Northstar Control Plane", category: "Cloud platform", description: "A unified control plane that gives business units safe self-service environments without decentralising governance.", metrics: ["63% faster provisioning", "Policy-as-code", "Unified observability"], image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80", demoUrl: "/cortex" },
      { title: "Harbour Resilience Program", category: "Infrastructure modernisation", description: "A staged replatforming program that retired brittle hosting dependencies while maintaining continuous service.", metrics: ["Zero planned downtime", "41% lower run cost", "Multi-region recovery"], image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=1400&q=80", demoUrl: "/cortex" },
    ],
  },
  {
    slug: "marcus-sterling",
    name: "Marcus Sterling",
    role: "Chief AI & Machine Learning Engineer",
    titleTag: "[ INTELLIGENCE // APPLIED ]",
    avatar: "/cortex/engineers/marcus-sterling.png",
    bio: "Marcus takes AI from isolated experiments into measured, governed products. He develops the data contracts, evaluation loops, and human controls that let CORTEXIO Softsolutions clients use intelligent systems as dependable operational infrastructure.",
    stack: ["Python", "PyTorch", "Ray", "MLflow", "Vector Search"],
    education: [
      { degree: "PhD, Machine Learning", institution: "MIT", year: "2014", focus: "Representation learning and robust evaluation" },
      { degree: "BS, Mathematics & Computing", institution: "Imperial College London", year: "2009", focus: "Statistical systems" },
    ],
    experience: [
      { role: "Chief AI & Machine Learning Engineer", company: "CORTEXIO Softsolutions", period: "2022 — Present", highlights: ["Defines applied AI delivery standards and evaluation gates", "Leads cross-functional intelligent workflow programs"] },
      { role: "Staff Research Engineer", company: "DeepMind", period: "2015 — 2022", highlights: ["Contributed to production-oriented model evaluation systems", "Partnered with product teams on responsible deployment methods"] },
      { role: "Quantitative Engineer", company: "DataFoundry", period: "2013 — 2015", highlights: ["Built decision-support models for complex operations"] },
    ],
    projects: [
      { title: "Meridian Decision Studio", category: "Applied AI platform", description: "An enterprise decision-support environment combining document intelligence, workflows, and reviewable model outputs.", metrics: ["71% less manual triage", "Traceable evaluations", "Private retrieval layer"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80", demoUrl: "/cortex" },
      { title: "Aperture Forecasting Engine", category: "Predictive operations", description: "A planning system that synthesises sales, inventory, and lead-time signals into explainable forecasts.", metrics: ["27% forecast improvement", "Weekly retraining", "Scenario controls"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80", demoUrl: "/cortex" },
    ],
  },
  {
    slug: "elena-rostova",
    name: "Elena Rostova",
    role: "Lead Full-Stack & Systems Security Specialist",
    titleTag: "[ PRODUCT // SECURITY ]",
    avatar: "/cortex/engineers/elena-rostova.png",
    bio: "Elena bridges the interface and the security boundary. Her teams build customer-facing systems that feel deliberate at every touchpoint while retaining the identity, privacy, and audit controls expected from serious enterprise software.",
    stack: ["Next.js", "TypeScript", "Node.js", "OIDC", "OWASP ASVS"],
    education: [
      { degree: "MSc, Information Security", institution: "ETH Zürich", year: "2013", focus: "Secure systems and applied cryptography" },
      { degree: "BSc, Software Engineering", institution: "TU Munich", year: "2011", focus: "Human-centred product systems" },
    ],
    experience: [
      { role: "Lead Full-Stack & Systems Security Specialist", company: "CORTEXIO Softsolutions", period: "2021 — Present", highlights: ["Leads secure application delivery from product discovery through launch", "Pairs usable experience design with auditable system controls"] },
      { role: "Security Engineering Lead", company: "Stripe", period: "2015 — 2021", highlights: ["Supported secure product-platform integrations", "Developed application security review practices"] },
      { role: "Software Security Engineer", company: "Alpine Systems", period: "2013 — 2015", highlights: ["Built secure web applications for regulated operations"] },
    ],
    projects: [
      { title: "Lattice Commerce OS", category: "High-performance commerce", description: "A composable commerce platform with a headless storefront, governed fulfilment flows, and a real-time customer operations desk.", metrics: ["2.1× conversion uplift", "Sub-second interactions", "Role-based operations"], image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80", demoUrl: "/cortex" },
      { title: "Keystone Identity Fabric", category: "Secure SaaS foundation", description: "A portable identity and permission layer that gives multi-tenant product teams a secure base for rapid delivery.", metrics: ["OIDC-first", "Full audit trail", "Tenant isolation"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80", demoUrl: "/cortex" },
    ],
  },
];

export function getCortexEngineer(slug: string) {
  return cortexEngineers.find((engineer) => engineer.slug === slug);
}
