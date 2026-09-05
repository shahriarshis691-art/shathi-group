export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  metrics: string;
  image: string;
  tags: string[];
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface CortexEngineer {
  slug: string;
  name: string;
  role: string;
  tag: string;
  badge: string;
  clientMessage: string;
  bio: string;
  image: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  accordionItems: AccordionItem[];
}

export const cortexEngineers: CortexEngineer[] = [
  {
    slug: "ryan-vance",
    name: "Dr. Ryan Vance",
    role: "Principal Distributed Systems Architect",
    tag: "DISTRIBUTED SYSTEMS",
    badge: "01 // CLOUD ARCHITECTURE",
    clientMessage:
      "We architect software that guarantees 99.99% uptime while eliminating unnecessary licensing overhead.",
    image: "/cortex/engineers/ryan-vance.png",
    bio: "Dr. Ryan Vance is a principal distributed systems architect with over fourteen years of experience designing fault-tolerant cloud infrastructure at planetary scale. After completing his PhD at Cambridge on consensus algorithms for geo-replicated data stores, he joined AWS where he led the architecture of several foundational services used by millions of developers worldwide. At CORTEX, Ryan translates that pedigree into bespoke distributed platforms that keep mission-critical enterprise systems running with uncompromising consistency and sub-millisecond latency.",
    accordionItems: [
      {
        title: "Technical Core",
        content:
          "Consensus algorithms, CRDTs, distributed event mesh design, fault-tolerant control planes, and formal verification with TLA+.",
      },
      {
        title: "Past Engagements",
        content:
          "AWS Step Functions and EventBridge, Microsoft Research Azure Cosmos DB, and 200+ enterprise client architectures at CORTEX.",
      },
      {
        title: "Direct Portfolio Route",
        content: "/companies/cortex-softsolutions/engineers/ryan-vance",
      },
    ],
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "University of Cambridge",
        year: "2012",
        details: "Dissertation on consensus algorithms for geo-replicated data stores; introduced optimisations later adopted in production distributed databases.",
      },
      {
        degree: "MEng in Computer Science",
        institution: "University of Cambridge",
        year: "2008",
        details: "First-class honours; specialised in distributed computing, formal verification, and large-scale systems design.",
      },
    ],
    experience: [
      {
        role: "Principal Distributed Systems Architect",
        company: "CORTEX Soft Solutions",
        period: "2021 – Present",
        highlights: [
          "Leads architecture for CORTEXOS unified platform, serving 200+ enterprise clients across 12 regions.",
          "Designed a custom distributed event mesh handling 2.4M events per second with zero data loss.",
          "Mentors a team of twelve senior engineers on eventual consistency, CRDTs, and saga orchestration.",
        ],
      },
      {
        role: "Senior Principal Engineer",
        company: "Amazon Web Services (AWS)",
        period: "2015 – 2021",
        highlights: [
          "Architected core services for AWS Step Functions and EventBridge, processing trillions of events annually.",
          "Authored internal design docs on idempotency patterns still used across AWS serverless platforms.",
          "Led the migration of a critical control plane from monolith to micro-frontends, reducing deployment risk by 40 percent.",
        ],
      },
      {
        role: "Research Engineer",
        company: "Microsoft Research",
        period: "2012 – 2015",
        highlights: [
          "Contributed to early Azure Cosmos DB research on multi-master replication and tunable consistency.",
          "Published three peer-reviewed papers on distributed consensus and failure recovery in cloud environments.",
        ],
      },
    ],
    projects: [
      {
        title: "CortexOS Event Mesh",
        type: "Custom Enterprise Platform",
        description:
          "A globally distributed event-driven backbone enabling real-time data synchronisation between ERP, CRM, and ML pipelines across enterprise clients.",
        metrics: "2.4M events/sec • 12 regions • 99.999% availability SLA",
        image: "/cortex/engineers/ryan-vance.png",
        tags: ["Distributed Systems", "Event Streaming", "Kafka", "Go"],
      },
      {
        title: "Geo-Replicated Control Plane",
        type: "SaaS System",
        description:
          "A multi-region control plane with automatic failover, quorum-based writes, and conflict-free replicated data types for offline-capable SaaS modules.",
        metrics: "Sub-50ms p99 latency • Zero-downtime region failover",
        image: "/cortex/engineers/ryan-vance.png",
        tags: ["CRDT", "Multi-Region", "TypeScript", "Kubernetes"],
      },
      {
        title: "Formal Verification Suite",
        type: "Custom Software",
        description:
          "An internal toolchain that applies TLA+ model checking to infrastructure-as-code templates before production deployment.",
        metrics: "38 critical race conditions caught pre-production in the first year",
        image: "/cortex/engineers/ryan-vance.png",
        tags: ["TLA+", "Infrastructure", "DevOps", "Safety"],
      },
    ],
  },
  {
    slug: "sofia-lin",
    name: "Sofia Lin",
    role: "VP of Cloud Infrastructure",
    tag: "CLOUD INFRASTRUCTURE",
    badge: "02 // CLOUD INFRASTRUCTURE",
    clientMessage:
      "We run enterprise-grade infrastructure so your teams can ship faster, with fewer outages and predictable cloud spend.",
    image: "/cortex/engineers/sofia-lin.png",
    bio: "Sofia Lin is the VP of Cloud Infrastructure at CORTEX Soft Solutions, bringing a decade of large-scale platform engineering from Google Cloud and a deep conviction that infrastructure should be invisible, self-healing, and cost-predictable. With a master's degree from Stanford and a background spanning exascale compute clusters to serverless abstraction layers, Sofia architects the compute and storage foundations on which every CORTEX client platform is built.",
    accordionItems: [
      {
        title: "Technical Core",
        content:
          "Multi-cloud abstraction, autoscaling primitives, FinOps orchestration, zero-trust network fabrics, and confidential computing.",
      },
      {
        title: "Past Engagements",
        content:
          "Google Kubernetes Engine at Google Cloud, Airbnb service reliability, and a global 18,000+ node fleet managed at CORTEX.",
      },
      {
        title: "Direct Portfolio Route",
        content: "/companies/cortex-softsolutions/engineers/sofia-lin",
      },
    ],
    education: [
      {
        degree: "MS in Computer Science",
        institution: "Stanford University",
        year: "2013",
        details: "Concentration in cloud computing and resource management; thesis on autoscaling heuristics for heterogeneous compute fleets.",
      },
      {
        degree: "BS in Electrical Engineering & Computer Sciences",
        institution: "University of California, Berkeley",
        year: "2011",
        details: "Graduated with honours; led the university's student cluster computing team to two national championships.",
      },
    ],
    experience: [
      {
        role: "VP of Cloud Infrastructure",
        company: "CORTEX Soft Solutions",
        period: "2020 – Present",
        highlights: [
          "Owns a global fleet of 18,000+ compute nodes across AWS, Azure, and GCP with 99.98% uptime.",
          "Reduced annual cloud expenditure by 28 percent through workload rightsizing and spot-instance orchestration.",
          "Pioneered an internal FinOps practice now embedded in every client delivery team.",
        ],
      },
      {
        role: "Senior Staff Infrastructure Engineer",
        company: "Google Cloud",
        period: "2015 – 2020",
        highlights: [
          "Designed autoscaling and load-balancing primitives for Google Kubernetes Engine serving over one billion requests daily.",
          "Led the confidential computing launch programme, integrating Trusted Execution Environments into GKE node pools.",
          "Authored Google's public cloud reliability playbook for multi-tenant control planes.",
        ],
      },
      {
        role: "Cloud Reliability Engineer",
        company: "Airbnb",
        period: "2013 – 2015",
        highlights: [
          "Built the first service-level-objective framework that aligned engineering KPIs with business outcomes.",
          "Introduced chaos engineering practices that reduced mean time to recovery by 60 percent.",
        ],
      },
    ],
    projects: [
      {
        title: "Cortex Hybrid Cloud Mesh",
        type: "ERP Integration",
        description:
          "A unified control plane that abstracts AWS, Azure, and GCP into a single provisioning, observability, and governance layer for CORTEX clients.",
        metrics: "18,000+ nodes managed • 3 cloud providers • 28% cost reduction",
        image: "/cortex/engineers/sofia-lin.png",
        tags: ["Multi-Cloud", "Terraform", "FinOps", "Go"],
      },
      {
        title: "Zero-Trust Network Fabric",
        type: "SaaS System",
        description:
          "A software-defined perimeter replacing VPNs with identity-aware microsegmentation and just-in-time access for hybrid engineering teams.",
        metrics: "Zero breaches in 3 years • 40,000+ daily access grants",
        image: "/cortex/engineers/sofia-lin.png",
        tags: ["Zero Trust", "Security", "Networking", "Envoy"],
      },
      {
        title: "Real-Time Cost Intelligence",
        type: "Custom Software",
        description:
          "An internal ERP-grade dashboard that correlates infrastructure telemetry with unit economics, alerting engineering leads before budgets deviate.",
        metrics: "$4.2M avoided overspend in the first eighteen months",
        image: "/cortex/engineers/sofia-lin.png",
        tags: ["Analytics", "ERP", "FinOps", "Python"],
      },
    ],
  },
  {
    slug: "marcus-sterling",
    name: "Marcus Sterling",
    role: "Chief AI & ML Specialist",
    tag: "AI & MACHINE LEARNING",
    badge: "03 // AI & MACHINE LEARNING",
    clientMessage:
      "We embed production-grade AI directly into your workflows—cutting costs by over 60% while raising accuracy to enterprise-grade levels.",
    image: "/cortex/engineers/marcus-sterling.png",
    bio: "Marcus Sterling is CORTEX's Chief AI & ML Specialist, a researcher-engineer who bridges the gap between frontier model development and production-grade inference systems. Trained at MIT and shaped by DeepMind's most demanding research programmes, Marcus now leads the design of CORTEX's AI microservices layer — the engine behind predictive analytics, autonomous workflow agents, and natural-language interfaces embedded in every client engagement.",
    accordionItems: [
      {
        title: "Technical Core",
        content:
          "Neural architecture search, efficient inference, quantisation, dynamic batching, multi-agent orchestration, and MLOps pipelines.",
      },
      {
        title: "Past Engagements",
        content:
          "DeepMind AlphaFold and data-centre cooling RL, OpenAI early safety research, and AI microservices for 200+ CORTEX clients.",
      },
      {
        title: "Direct Portfolio Route",
        content: "/companies/cortex-softsolutions/engineers/marcus-sterling",
      },
    ],
    education: [
      {
        degree: "PhD in Artificial Intelligence",
        institution: "Massachusetts Institute of Technology (MIT)",
        year: "2016",
        details: "Research focused on neural architecture search and efficient inference; advisor collaboration with MIT-IBM Watson AI Lab.",
      },
      {
        degree: "SM in Electrical Engineering & Computer Science",
        institution: "Massachusetts Institute of Technology (MIT)",
        year: "2013",
        details: "Specialisation in machine learning and optimisation; recipient of the MIT EECS Outstanding Graduate Student Award.",
      },
    ],
    experience: [
      {
        role: "Chief AI & ML Specialist",
        company: "CORTEX Soft Solutions",
        period: "2019 – Present",
        highlights: [
          "Architects the AI microservices layer powering predictive analytics, NLP assistants, and autonomous workflow agents for CORTEX clients.",
          "Reduced average model inference cost by 62 percent through quantisation, distillation, and dynamic batching optimisations.",
          "Establishes the company's responsible AI governance framework, ensuring EU AI Act compliance across all client deployments.",
        ],
      },
      {
        role: "Senior Research Scientist",
        company: "DeepMind",
        period: "2016 – 2019",
        highlights: [
          "Contributed to AlphaFold and reinforcement learning for data-centre cooling, cutting Google's energy overhead by 30 percent.",
          "Published nine first-author papers at NeurIPS, ICML, and ICLR on efficient transformers and meta-learning.",
        ],
      },
      {
        role: "Applied Scientist Intern",
        company: "OpenAI",
        period: "2015 – 2016",
        highlights: [
          "Worked on early generative model safety and instruction-tuning techniques that informed later GPT alignment research.",
        ],
      },
    ],
    projects: [
      {
        title: "CortexAI Inference Gateway",
        type: "Custom Software",
        description:
          "A high-throughput, low-latency gateway that routes, caches, and load-balances requests across a fleet of fine-tuned language and vision models.",
        metrics: "50K tokens/sec throughput • 180ms p99 latency • 40% cost reduction",
        image: "/cortex/engineers/marcus-sterling.png",
        tags: ["LLM", "Inference", "Rust", "Kubernetes"],
      },
      {
        title: "Autonomous ERP Agent",
        type: "ERP Integration",
        description:
          "A multi-agent system that interprets natural-language business queries, executes ERP transactions, and surfaces anomaly explanations to finance teams.",
        metrics: "75% reduction in month-end closing time • 92% forecast accuracy",
        image: "/cortex/engineers/marcus-sterling.png",
        tags: ["Agents", "ERP", "Python", "LangChain"],
      },
      {
        title: "Predictive Maintenance SaaS",
        type: "SaaS System",
        description:
          "A time-series forecasting platform for industrial IoT clients, combining sensor fusion with Gaussian process models to predict equipment failures.",
        metrics: "85% reduction in unplanned downtime • 3.2M sensor streams processed daily",
        image: "/cortex/engineers/marcus-sterling.png",
        tags: ["IoT", "Time Series", "MLOps", "GCP"],
      },
    ],
  },
  {
    slug: "elena-rostova",
    name: "Elena Rostova",
    role: "Lead Systems Security Specialist",
    tag: "SYSTEMS SECURITY",
    badge: "04 // SYSTEMS SECURITY",
    clientMessage:
      "We bake zero-trust security into every layer of the stack—so breaches become impossible, not just unlikely.",
    image: "/cortex/engineers/elena-rostova.png",
    bio: "Elena Rostova is CORTEX's Lead Systems Security Specialist, an offensive-defensive engineer who has spent her career breaking, hardening, and defending the infrastructure that underpins the world's most sensitive financial and enterprise platforms. A graduate of ETH Zürich and former Stripe security principal, Elena now embeds zero-trust principles, secure-by-design architecture, and continuous verification into every CORTEX engagement.",
    accordionItems: [
      {
        title: "Technical Core",
        content:
          "Zero-trust architecture, applied cryptography, secure SDK design, real-time fraud detection, and DevSecOps automation.",
      },
      {
        title: "Past Engagements",
        content:
          "Stripe global payments security, PCI DSS compliance, NCC Group red-team exercises, and CORTEX client deployment security.",
      },
      {
        title: "Direct Portfolio Route",
        content: "/companies/cortex-softsolutions/engineers/elena-rostova",
      },
    ],
    education: [
      {
        degree: "MSc in Information Security",
        institution: "ETH Zürich",
        year: "2014",
        details: "Specialised in applied cryptography and secure systems; thesis on side-channel-resistant smart contract execution.",
      },
      {
        degree: "BSc in Computer Science",
        institution: "ETH Zürich",
        year: "2012",
        details: "First-class honours; active member of the ETH hacking lab and competitive CTF team.",
      },
    ],
    experience: [
      {
        role: "Lead Systems Security Specialist",
        company: "CORTEX Soft Solutions",
        period: "2020 – Present",
        highlights: [
          "Owns security architecture for all CORTEX client deployments, from initial threat modelling to continuous penetration testing.",
          "Reduced mean time to patch critical vulnerabilities from 14 days to 6 hours through automated dependency scanning and canary releases.",
          "Designed a secure-by-design SDK adopted by every engineering squad, cutting security review cycles by 55 percent.",
        ],
      },
      {
        role: "Staff Security Engineer",
        company: "Stripe",
        period: "2015 – 2020",
        highlights: [
          "Led the Payments Security team responsible for PCI DSS compliance across Stripe's global processing stack.",
          "Built real-time fraud signal pipelines processing 300M+ events daily with sub-10ms anomaly detection.",
          "Authored Stripe's public security whitepaper on end-to-end encryption for cardholder data.",
        ],
      },
      {
        role: "Security Consultant",
        company: "NCC Group",
        period: "2014 – 2015",
        highlights: [
          "Conducted red-team exercises and secure code reviews for Fortune 500 financial institutions and government agencies.",
        ],
      },
    ],
    projects: [
      {
        title: "Cortex Secure SDK",
        type: "Custom Software",
        description:
          "A hardened client-side SDK with built-in input sanitisation, encrypted local storage, certificate pinning, and runtime integrity checks for enterprise applications.",
        metrics: "Zero critical CVEs in production for 24+ months • 55% faster security reviews",
        image: "/cortex/engineers/elena-rostova.png",
        tags: ["Security", "SDK", "TypeScript", "Cryptography"],
      },
      {
        title: "Zero-Trust Identity Mesh",
        type: "SaaS System",
        description:
          "An identity-aware access layer enforcing device posture, continuous authentication, and fine-grained authorisation across CORTEX's multi-cloud estate.",
        metrics: "300M+ events daily • Sub-10ms anomaly detection • PCI DSS Level 1",
        image: "/cortex/engineers/elena-rostova.png",
        tags: ["IAM", "Zero Trust", "Go", "Open Policy Agent"],
      },
      {
        title: "Secure ERP Deployment Framework",
        type: "ERP Integration",
        description:
          "A deployment wrapper that enforces secrets management, infrastructure scanning, and runtime monitoring for every ERP client rollout.",
        metrics: "14 days → 6 hours mean time to patch • 100% secret rotation coverage",
        image: "/cortex/engineers/elena-rostova.png",
        tags: ["DevSecOps", "ERP", "Terraform", "Security"],
      },
    ],
  },
];
