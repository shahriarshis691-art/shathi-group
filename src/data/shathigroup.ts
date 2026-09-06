/**
 * Public-content inventory crawled from https://www.shathigroup.space/
 * on 2026-09-06. Asset URLs intentionally point to the live domain so this
 * module can be consumed independently of the current Next.js deployment.
 */

export type AssetKind = "image" | "logo" | "favicon";

export interface AssetReference {
  readonly kind: AssetKind;
  readonly url: string;
  readonly alt: string;
  readonly referencedFrom: readonly string[];
}

export interface NavigationLink {
  readonly label: string;
  readonly href: string;
  readonly location: "primary" | "footer" | "sitemap";
}

export interface StoryMetric {
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly icon: string;
}

export interface ContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export interface FeaturePoint {
  readonly title: string;
  readonly description: string;
}

export interface ContentSection {
  readonly eyebrow?: string;
  readonly title: string;
  readonly body: string;
}

export interface Venture {
  readonly id: string;
  readonly name: string;
  readonly displayName: string;
  readonly category: string;
  readonly route: string;
  readonly externalUrl?: string;
  readonly tagline: string;
  readonly summary: string;
  readonly brandStory: string;
  readonly featurePoints: readonly FeaturePoint[];
  readonly productVerticals: readonly string[];
  readonly flagshipHighlights: readonly string[];
  readonly metrics: readonly StoryMetric[];
  readonly contentSections: readonly ContentSection[];
  readonly contacts: readonly ContactLink[];
  readonly imageUrls: readonly string[];
  readonly logoUrl?: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

export interface OperationalHours {
  readonly label: string;
  readonly value: string;
  readonly published: boolean;
}

export interface SiteConfig {
  readonly crawlSource: string;
  readonly crawledOn: string;
  readonly name: string;
  readonly shortName: string;
  readonly canonicalUrl: string;
  readonly openGraphImage: string;
  readonly description: string;
  readonly hero: {
    readonly eyebrow: string;
    readonly headline: string;
    readonly tagline: string;
    /** The live hero has no separately rendered sub-headline. */
    readonly subheadline: null;
    readonly summary: string;
    readonly primaryCta: NavigationLink;
    readonly secondaryCta: NavigationLink;
    readonly imageUrl: string;
    readonly imageAlt: string;
  };
  readonly story: {
    readonly overview: string;
    readonly history: string;
    readonly mission: string;
    readonly vision: string;
    readonly governance: string;
  };
  readonly contact: {
    readonly address: string;
    readonly email: ContactLink;
    readonly phone: ContactLink;
    readonly secondaryContacts: readonly ContactLink[];
    readonly operationalHours: OperationalHours;
  };
  readonly socialLinks: readonly SocialLink[];
  readonly iconography: {
    readonly library: "lucide-react";
    readonly icons: readonly string[];
    readonly customSvgDescriptions: readonly string[];
  };
}

const liveUrl = "https://www.shathigroup.space";

export const navigationLinks: readonly NavigationLink[] = [
  { label: "Home", href: "/", location: "primary" },
  { label: "Ventures", href: "/#ventures", location: "primary" },
  { label: "Our Story", href: "/#story", location: "primary" },
  { label: "Contact", href: "/#contact", location: "primary" },
  { label: "ESG & CSR", href: "/esg", location: "footer" },
  { label: "Careers", href: "/careers", location: "footer" },
  { label: "CE R A VO", href: "/ceravo", location: "sitemap" },
  { label: "Velorix Motors", href: "/velorix", location: "sitemap" },
  {
    label: "CORTEXIO Softsolutions",
    href: "/companies/cortex-softsolutions",
    location: "sitemap",
  },
  { label: "SHIS Fashion", href: "/companies/shis-fashion", location: "sitemap" },
  { label: "XEROXII", href: "/companies/xeroxii", location: "sitemap" },
  { label: "CE R A VO portfolio", href: "/companies/ceravo-tiles", location: "sitemap" },
  { label: "Velorix portfolio", href: "/companies/velorix-motors", location: "sitemap" },
  {
    label: "Sarker Adhara profile",
    href: "/companies/cortex-softsolutions/engineers/sarker-adhara",
    location: "sitemap",
  },
  {
    label: "Maskat Md Mahadi Hassan profile",
    href: "/companies/cortex-softsolutions/engineers/maskat-md-mahadi-hassan",
    location: "sitemap",
  },
  {
    label: "SM Shahriar Walid profile",
    href: "/companies/cortex-softsolutions/engineers/sm-shahriar-walid",
    location: "sitemap",
  },
];

export const policyLinks: readonly NavigationLink[] = [
  { label: "Privacy Policy", href: "/privacy", location: "footer" },
  { label: "Terms of Use", href: "/terms", location: "footer" },
];

export const storyMetrics: readonly StoryMetric[] = [
  {
    value: "4+",
    label: "Strategic Brands",
    description: "Across four industries",
    icon: "Building2",
  },
  {
    value: "Trusted",
    label: "Quality",
    description: "Certified standards",
    icon: "Award",
  },
  {
    value: "Pan-India",
    label: "Nationwide Footprint",
    description: "Dealer & retail network",
    icon: "MapPin",
  },
  {
    value: "Always",
    label: "Customer First",
    description: "Lifetime support",
    icon: "HeartHandshake",
  },
];

export const siteConfig: SiteConfig = {
  crawlSource: `${liveUrl}/`,
  crawledOn: "2026-09-06",
  name: "SHATHI Group of Companies",
  shortName: "SHATHI Group",
  canonicalUrl: "https://shathigroup.com",
  openGraphImage: "https://shathigroup.com/hero-image/hero.2.jpg",
  description:
    "SHATHI Group of Companies is a diversified portfolio of trusted businesses spanning lifestyle apparel, luxury timepieces, premium tiles, and designer sanitaryware — united by integrity, craftsmanship, and long-term value.",
  hero: {
    eyebrow: "SHATHI Group",
    headline: "SHATHI Group of Companies",
    tagline:
      "A diversified portfolio of trusted businesses, united by integrity, craftsmanship, and long-term value.",
    subheadline: null,
    summary:
      "SHATHI Group of Companies is a diversified portfolio of trusted businesses spanning lifestyle apparel, luxury timepieces, premium tiles, and designer sanitaryware — united by integrity, craftsmanship, and long-term value.",
    primaryCta: { label: "Partner With Us", href: "#contact", location: "primary" },
    secondaryCta: { label: "Explore Our Brands", href: "#businesses", location: "primary" },
    imageUrl: `${liveUrl}/hero-image/hero-architecture-v2.png`,
    imageAlt: "Shathi Group Corporate Overview",
  },
  story: {
    overview:
      "Founded on the principle that lasting businesses are built through integrity, SHATHI Group of Companies brings together a diversified portfolio spanning fashion, luxury, building materials, and home living. Each subsidiary operates with shared values and an unwavering focus on long-term value creation.",
    history:
      "SHATHI Group brings together specialist companies across technology, fashion, precision luxury, architectural materials, and mobility. Its shared focus is to create relevance today while building durable value for tomorrow.",
    mission:
      "To deliver category-defining products and services through brands that customers trust — combining craftsmanship, innovation, and operational excellence across every market we serve.",
    vision:
      "To be recognized as a globally respected Indian conglomerate that elevates standards in every category it enters, while uplifting the communities and partners that share our journey.",
    governance:
      "We are guided by an independent board, strict compliance protocols, and transparent reporting. Ethical conduct, accountability, and sustainability are non-negotiables — embedded in every policy and every decision.",
  },
  contact: {
    address: "SHATHI Tower, Corporate Park, Main Business District, India",
    email: {
      label: "Corporate & Founder",
      value: "shahriarshis691@gmail.com",
      href: "mailto:shahriarshis691@gmail.com?subject=Inquiry%20-%20Shathi%20Group",
    },
    phone: {
      label: "Direct Line",
      value: "+880 1979614216",
      href: "tel:+8801979614216",
    },
    secondaryContacts: [
      {
        label: "Managing Director & Cybersecurity Engineer",
        value: "adharasarker2910@gmail.com",
        href: "mailto:adharasarker2910@gmail.com?subject=Direct%20Inquiry%20-%20Managing%20Director%20%26%20Engineering",
      },
      {
        label: "CORTEXIO WhatsApp",
        value: "+880 1979614216",
        href: "https://wa.me/8801979614216?text=Hello%20CORTEXIO",
      },
    ],
    operationalHours: {
      label: "Operational hours",
      value: "Not published on the live website",
      published: false,
    },
  },
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
  ],
  iconography: {
    library: "lucide-react",
    icons: [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUpRight",
      "Award",
      "BriefcaseBusiness",
      "Building2",
      "Check",
      "CheckCircle2",
      "Compass",
      "Download",
      "ExternalLink",
      "Eye",
      "Factory",
      "Facebook",
      "Gauge",
      "Gem",
      "HandHeart",
      "HeartHandshake",
      "Instagram",
      "Landmark",
      "Lightbulb",
      "Linkedin",
      "Loader2",
      "Mail",
      "MapPin",
      "Maximize2",
      "Menu",
      "Network",
      "Phone",
      "Recycle",
      "Scale",
      "Send",
      "Shield",
      "ShieldCheck",
      "Sparkles",
      "Target",
      "Twitter",
      "UsersRound",
      "X",
      "Youtube",
    ],
    customSvgDescriptions: [
      "Velorix chassis wireframe with airflow, battery-pack, and torque-node labels",
      "CORTEXIO carousel previous and next arrows",
      "CORTEXIO module glyphs for Enterprise Core, Cloud Sovereign, AI Microservices, Data Mesh, and Edge Compute",
      "CE R A VO circular surface-architecture glyph",
    ],
  },
};

export const ventures: readonly Venture[] = [
  {
    id: "cortex-softsolutions",
    name: "CORTEXIO Softsolutions",
    displayName: "CORTEXIO",
    category: "Technology & Enterprise Software",
    route: "/companies/cortex-softsolutions",
    tagline: "Scalable Software & Digital Transformation",
    summary:
      "CORTEXIO Softsolutions builds cloud-native enterprise platforms that power digital transformation — from AI-driven workflows to fully custom software that scales with its clients.",
    brandStory:
      "CORTEXIO Softsolutions was founded on a singular belief: enterprise infrastructure should outlive the subscription cycles that constrain it. It eliminates recurring cloud dependencies by engineering custom microservices and sovereign architectures that belong entirely to the client. Every system is built for lifetime ownership — no vendor lock-in, no perpetually renewing licenses, and no hidden operational drift.",
    featurePoints: [
      {
        title: "Lifetime-free founding-partner initiative",
        description:
          "CORTEXIO is selecting 10 ambitious businesses to receive custom enterprise software, bespoke e-commerce systems, and high-performance apps completely free for life.",
      },
      {
        title: "Sovereign technology",
        description:
          "Custom microservices and sovereign architectures are designed for operational autonomy and client ownership.",
      },
      {
        title: "Engineering precision",
        description:
          "Distributed databases, event-driven pipelines, and real-time observability stacks are engineered into every layer.",
      },
    ],
    productVerticals: [
      "Cloud-Native Platforms",
      "AI Workflow Automation",
      "Enterprise Resource Planning",
      "Custom Integrations",
    ],
    flagshipHighlights: [
      "CORTEXIO OS unified platform suite",
      "No-code AI workflow builder",
      "SOC 2 compliant cloud hosting",
      "Dedicated customer success team",
    ],
    metrics: [
      { value: "10", label: "Exclusive slots", description: "Founding partners in the limited initiative", icon: "Building2" },
      { value: "Free for life", label: "Development", description: "Custom software, e-commerce, and apps", icon: "Award" },
      { value: "Zero", label: "Development costs", description: "From tailored architecture through full deployment", icon: "CheckCircle2" },
    ],
    contentSections: [
      {
        eyebrow: "Build Your",
        title: "Website",
        body: "We create professional websites that grow your brand.",
      },
      {
        eyebrow: "Selected Work & Software Deployments",
        title: "What we do",
        body: "Enterprise Cloud Suite, Fintech Mobile App, Editorial Headless Commerce, and AI Analytics Dashboard are the published deployment examples.",
      },
      {
        eyebrow: "CORTEXIO Architecture Collection",
        title: "Enterprise systems",
        body: "Published architecture modules include Enterprise Core, Cloud Sovereign, AI Microservices, Data Mesh, and Edge Compute.",
      },
    ],
    contacts: [
      {
        label: "Managing Director & Cybersecurity Engineer",
        value: "adharasarker2910@gmail.com",
        href: "mailto:adharasarker2910@gmail.com?subject=Direct%20Inquiry%20-%20Managing%20Director%20%26%20Engineering",
      },
      { label: "Phone", value: "+880 1979614216", href: "tel:+8801979614216" },
    ],
    imageUrls: [
      `${liveUrl}/cortex/image-Picsart-AiImageEnhancer.png`,
      `${liveUrl}/cortex/build-your-vision.png`,
      `${liveUrl}/cortex/managingdirector.png`,
      `${liveUrl}/cortex/engineers/navid.jpg`,
      `${liveUrl}/cortex/engineers/maskat-md-mahadi-hassan.jpg`,
      `${liveUrl}/cortex/engineers/engineer.founder.png.jpg`,
      `${liveUrl}/cortex/projects/enterprise-cloud-suite.webp`,
      `${liveUrl}/cortex/projects/fintech-mobile-app.webp`,
      `${liveUrl}/cortex/projects/editorial-commerce.webp`,
      `${liveUrl}/cortex/projects/ai-analytics.webp`,
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "shis-fashion",
    name: "SHIS Fashion",
    displayName: "SHIS FASHION",
    category: "Apparel & Lifestyle",
    route: "/companies/shis-fashion",
    externalUrl: "https://www.shisfashion.com",
    tagline: "Contemporary & Premium Men's Apparel",
    summary:
      "A contemporary menswear house built on premium cotton fabrics, modern urban fits, and signature acid-washed graphics — for the modern individualist.",
    brandStory:
      "SHIS Fashion specializes in contemporary, premium menswear — from sharp tailoring to elevated casual staples. Built on premium cotton fabrics and modern urban fits, every piece carries the brand's signature acid-washed graphics and laid-back-luxe attitude.",
    featurePoints: [
      {
        title: "Premium Pima Cotton",
        description:
          "Extra-long staple fibers are woven into fabrics with superior softness, strength, and a luxurious hand feel that holds shape season after season.",
      },
      {
        title: "Acid-Wash Graphics",
        description:
          "Signature acid-washed treatments on denim and jersey bases create one-of-a-kind faded textures with a laid-back luxe attitude.",
      },
      {
        title: "Modern Urban Fits",
        description:
          "Tailored silhouettes use structured shoulders, tapered legs, and dropped shoulders that move with the city.",
      },
    ],
    productVerticals: ["Menswear Collections", "Bespoke Blazers", "Casual Essentials", "Graphic Tees & Outerwear"],
    flagshipHighlights: [
      "Premium Pima-cotton suiting fabrics",
      "Signature acid-wash denim program",
      "Made-to-measure tailoring service",
      "Seasonless core capsule",
    ],
    metrics: [],
    contentSections: [
      {
        eyebrow: "Contemporary Men's Apparel // Oversized Essentials",
        title: "SHIS FASHION",
        body: "The home showcase identifies the brand as the apparel subsidiary and links directly to its store.",
      },
    ],
    contacts: [{ label: "Store", value: "www.shisfashion.com", href: "https://www.shisfashion.com" }],
    imageUrls: [
      `${liveUrl}/shis/shis-editorial-model.png`,
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    ],
    logoUrl: `${liveUrl}/logos/shis-fashion.svg`,
  },
  {
    id: "xeroxii",
    name: "XEROXII Luxury Watches and Jewellery",
    displayName: "XEROXII",
    category: "Horology & Luxury Timepieces",
    route: "/companies/xeroxii",
    externalUrl: "https://www.xeroxii.com",
    tagline: "Haute Horology & Fine Jewellery Maison",
    summary:
      "XEROXII is a modern luxury watchmaker where precision engineering meets minimalist design, protected by scratch-resistant sapphire crystal and built to age gracefully.",
    brandStory:
      "XEROXII is a modern luxury watchmaker where precision engineering meets minimalist design. Each timepiece is built around Swiss-grade movements and protected by scratch-resistant sapphire crystal, designed to age gracefully through the decades.",
    featurePoints: [
      {
        title: "Swiss Automatic movement",
        description: "Swiss-grade ETA calibre with 25 jewels and a 38-hour power reserve, regulated in six positions.",
      },
      {
        title: "Box Sapphire crystal",
        description: "Scratch-resistant sapphire crystal with anti-reflective coating on both sides for optimal legibility.",
      },
      {
        title: "Hand-finished construction",
        description: "Movement assembly, Côtes de Genève and perlage finishing, case construction, and final regulation are completed by hand.",
      },
    ],
    productVerticals: ["Automatic Dress Watches", "Sport Chronographs", "Limited Edition Series", "Bespoke Engraving"],
    flagshipHighlights: [
      "Axiom collection with Swiss ETA movements",
      "Box sapphire crystal with anti-reflective coating",
      "Hand-finished Côtes de Genève detailing",
      "Five-year international warranty",
    ],
    metrics: [
      { value: "25 jewels", label: "Movement", description: "Swiss ETA calibre with a 38-hour power reserve", icon: "Gauge" },
      { value: "100 m / 10 ATM", label: "Water resistance", description: "Suitable for swimming and snorkeling, but not diving", icon: "Shield" },
      { value: "5 years", label: "Warranty", description: "International manufacturing-defect coverage", icon: "CheckCircle2" },
      { value: "21 days", label: "Assembly regulation", description: "Components are hand-assembled, regulated, and timed", icon: "Gem" },
    ],
    contentSections: [
      {
        eyebrow: "Specifications",
        title: "Engineered to last decades",
        body: "Every XEROXII timepiece is built around exacting standards — from the movement to the crystal.",
      },
      {
        eyebrow: "Horological Craft",
        title: "Hand-finished detail",
        body: "From movement assembly to final polishing, every stage is completed by hand.",
      },
    ],
    contacts: [{ label: "Website", value: "www.xeroxii.com", href: "https://www.xeroxii.com" }],
    imageUrls: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
    ],
    logoUrl: `${liveUrl}/logos/xeroxii.svg`,
  },
  {
    id: "ceravo-tiles",
    name: "CE R A VO Building Materials",
    displayName: "CE R A VO",
    category: "Architectural Surfaces & Ceramics",
    route: "/ceravo",
    externalUrl: "https://www.ceravo.online",
    tagline: "Architectural Elegance & Surface Innovation",
    summary:
      "CE R A VO engineers premium porcelain and ceramic surfaces for residential and commercial architecture, fusing high durability with architectural finishes.",
    brandStory:
      "CE R A VO specifies ceramic surfaces as part of the architecture — not as an afterthought. Every collection is selected for scale, tactile quality, and real-world endurance; porcelain, ceramic, and engineered stone systems are brought into a disciplined architectural palette.",
    featurePoints: [
      {
        title: "Architectural ceramics",
        description:
          "Premium porcelain slabs, architectural ceramic finishes, and precision building surfaces are engineered for high-end residential, commercial real estate, and modern developments.",
      },
      {
        title: "Specification support",
        description:
          "The project team supports selection, technical detailing, and coordinated delivery so the installed surface carries the clarity of the original specification.",
      },
      {
        title: "Finish collection",
        description:
          "Matte, polished, and porcelain-grade treatments are positioned for architectural impact, commercial load, and temperature variation.",
      },
    ],
    productVerticals: ["Large-Format Porcelain Slabs", "Ceramic Wall Collections", "Vitrified Pavers", "Custom Architectural Spec"],
    flagshipHighlights: [
      "Marblea large-format porcelain series",
      "PEI IV wear-rated finishes",
      "Custom sizing and logo imprinting",
      "100+ dealer partners across India",
    ],
    metrics: [
      { value: "1200 × 2400 / 1600 × 3200", label: "Porcelain slab systems", description: "Residential and hospitality applications", icon: "Building2" },
      { value: "600 × 1200 / 800 × 1600", label: "Architectural wall tiles", description: "Interior and exterior facades", icon: "Building2" },
      { value: "PEI IV", label: "Porcelain grade", description: "Dense vitrified body for commercial load", icon: "ShieldCheck" },
    ],
    contentSections: [
      {
        eyebrow: "The Ceravo approach",
        title: "Material intelligence, quietly expressed.",
        body: "Material systems for residences, hospitality, and commercial projects where durability and atmosphere have equal weight.",
      },
      {
        eyebrow: "Surface studies",
        title: "A selection of large-format material directions",
        body: "Published studies are Limestone Vein, Gallery Travertine, Monolith Sand, and Quiet Marble.",
      },
    ],
    contacts: [
      { label: "Ceravo direct line", value: "+880 17 1234 5678", href: "tel:+8801712345678" },
      { label: "Website", value: "www.ceravo.online", href: "https://www.ceravo.online" },
    ],
    imageUrls: [
      `${liveUrl}/ceravo/real-estate-ceramics.png`,
      `${liveUrl}/ceravo/material-architecture.png`,
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "velorix-motors",
    name: "VELORIX Motors",
    displayName: "Velorix Motors",
    category: "Mobility & Automotive",
    route: "/velorix",
    externalUrl: "https://www.velorixmotors.com",
    tagline: "Performance Mobility, Refined for Modern Roads",
    summary:
      "VELORIX Motors develops performance-led mobility solutions with sculpted design, connected technology, and a focus on every detail of the driving experience.",
    brandStory:
      "VELORIX Motors brings together expressive automotive design and modern engineering. Every vehicle is shaped around responsive performance, thoughtful technology, and a quiet confidence that lasts well beyond the journey.",
    featurePoints: [
      {
        title: "Grand-touring experience",
        description:
          "Velorix brings performance, precision engineering, and bespoke craftsmanship into one uncompromising grand-touring experience.",
      },
      {
        title: "Responsive electric architecture",
        description:
          "Precision-tuned torque delivery, a high-voltage core, and adaptive aero systems are configured as one responsive performance architecture.",
      },
      {
        title: "Tailored ownership",
        description:
          "Connected vehicle services, corporate fleet programs, and ownership support are designed around modern mobility.",
      },
    ],
    productVerticals: ["Performance Grand Tourers", "Executive Mobility", "Connected Vehicle Services", "Bespoke Fleet Programs"],
    flagshipHighlights: [
      "Driver-focused performance architecture",
      "Connected cockpit experience",
      "Tailored corporate fleet solutions",
      "Dedicated ownership concierge",
    ],
    metrics: [
      { value: "1,250 HP", label: "Powertrain & Output", description: "Dual axial-flux motors", icon: "Gauge" },
      { value: "0–100 km/h in 1.89 s", label: "Dynamic Acceleration", description: "Launch control active", icon: "Gauge" },
      { value: "120 kWh", label: "Energy Architecture", description: "900V silicon-carbide fast charge; 10–80% in 12 min", icon: "Battery" },
      { value: "0.198 Cd", label: "Aerodynamics & Downforce", description: "Active carbon splitter and rear airbrake", icon: "Wind" },
    ],
    contentSections: [
      {
        eyebrow: "High Performance Automotive",
        title: "Unleash Pure Dynamism",
        body: "Every surface is tuned for response; every detail is built to make the road feel entirely yours.",
      },
      {
        eyebrow: "Dynamic Telemetry",
        title: "Velocity, refined.",
        body: "Bespoke performance configuration for the Velorix GT electric platform.",
      },
    ],
    contacts: [{ label: "Website", value: "www.velorixmotors.com", href: "https://www.velorixmotors.com" }],
    imageUrls: [
      `${liveUrl}/velorix/black-coupe.png`,
      `${liveUrl}/velorix/velorix-hero.png`,
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    ],
    logoUrl: `${liveUrl}/logos/velorix-motors.svg`,
  },
];

/** Every raster, vector logo, and favicon referenced by a published route. */
export const assetInventory: readonly AssetReference[] = [
  {
    kind: "favicon",
    url: `${liveUrl}/favicon.ico`,
    alt: "SHATHI Group favicon",
    referencedFrom: ["all published routes"],
  },
  {
    kind: "logo",
    url: `${liveUrl}/logos/shathi-group.svg`,
    alt: "SHATHI Group mark",
    referencedFrom: ["global header", "leadership"],
  },
  {
    kind: "logo",
    url: `${liveUrl}/logos/shis-fashion.svg`,
    alt: "SHIS Fashion logo",
    referencedFrom: ["/companies/shis-fashion"],
  },
  {
    kind: "logo",
    url: `${liveUrl}/logos/xeroxii.svg`,
    alt: "XEROXII logo",
    referencedFrom: ["/companies/xeroxii"],
  },
  {
    kind: "logo",
    url: `${liveUrl}/logos/velorix-motors.svg`,
    alt: "Velorix Motors logo",
    referencedFrom: ["/companies/velorix-motors"],
  },
  {
    kind: "image",
    url: `${liveUrl}/hero-image/hero-architecture-v2.png`,
    alt: "Shathi Group Corporate Overview",
    referencedFrom: ["home hero"],
  },
  {
    kind: "image",
    url: "https://shathigroup.com/hero-image/hero.2.jpg",
    alt: "SHATHI Group of Companies — SHATHI Group corporate mark",
    referencedFrom: ["home Open Graph and Twitter metadata"],
  },
  {
    kind: "image",
    url: `${liveUrl}/founder-image/founder.png`,
    alt: "S M Shahriar Walid, Founder and CEO of SHATHI Group",
    referencedFrom: ["/leadership", "home founder section"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/image-Picsart-AiImageEnhancer.png`,
    alt: "CORTEXIO Softsolutions leadership",
    referencedFrom: ["home CORTEXIO showcase"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/build-your-vision.png`,
    alt: "Build Your Website",
    referencedFrom: ["/companies/cortex-softsolutions"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/managingdirector.png`,
    alt: "Sarker Adhara",
    referencedFrom: ["CORTEXIO leadership", "/companies/cortex-softsolutions/engineers/sarker-adhara"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/engineers/navid.jpg`,
    alt: "Maskat Md Mahadi Hassan",
    referencedFrom: ["CORTEXIO leadership", "/companies/cortex-softsolutions/engineers/maskat-md-mahadi-hassan"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/engineers/maskat-md-mahadi-hassan.jpg`,
    alt: "Sovereign Digital Venture Architecture interface concept",
    referencedFrom: ["/companies/cortex-softsolutions/engineers/maskat-md-mahadi-hassan"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/engineers/engineer.founder.png.jpg`,
    alt: "SM Shahriar Walid",
    referencedFrom: ["CORTEXIO leadership", "/companies/cortex-softsolutions/engineers/sm-shahriar-walid"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/projects/enterprise-cloud-suite.webp`,
    alt: "Enterprise Cloud Suite interface mockup",
    referencedFrom: ["CORTEXIO selected work"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/projects/fintech-mobile-app.webp`,
    alt: "Fintech Mobile App interface mockup",
    referencedFrom: ["CORTEXIO selected work"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/projects/editorial-commerce.webp`,
    alt: "Editorial Headless Commerce interface mockup",
    referencedFrom: ["CORTEXIO selected work"],
  },
  {
    kind: "image",
    url: `${liveUrl}/cortex/projects/ai-analytics.webp`,
    alt: "AI Analytics Dashboard interface mockup",
    referencedFrom: ["CORTEXIO selected work"],
  },
  {
    kind: "image",
    url: `${liveUrl}/shis/shis-editorial-model.png`,
    alt: "SHIS Fashion oversized streetwear editorial",
    referencedFrom: ["home SHIS Fashion showcase"],
  },
  {
    kind: "image",
    url: `${liveUrl}/ceravo/real-estate-ceramics.png`,
    alt: "CE R A VO luxury ceramic surfaces and architectural materials",
    referencedFrom: ["home CE R A VO showcase", "/ceravo"],
  },
  {
    kind: "image",
    url: `${liveUrl}/ceravo/material-architecture.png`,
    alt: "CE R A VO porcelain cladding at a contemporary architectural entrance",
    referencedFrom: ["/ceravo"],
  },
  {
    kind: "image",
    url: `${liveUrl}/velorix/black-coupe.png`,
    alt: "Velorix Motors High Performance Coupe",
    referencedFrom: ["home Velorix showcase"],
  },
  {
    kind: "image",
    url: `${liveUrl}/velorix/velorix-hero.png`,
    alt: "Velorix GT matte silver electric hypercar",
    referencedFrom: ["/velorix"],
  },
  {
    kind: "image",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalist circuit board and server architecture",
    referencedFrom: ["CORTEXIO business card"],
  },
  {
    kind: "image",
    url: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    alt: "Menswear tailoring on a model",
    referencedFrom: ["SHIS Fashion business card"],
  },
  {
    kind: "image",
    url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury wristwatch detail",
    referencedFrom: ["XEROXII business card"],
  },
  {
    kind: "image",
    url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
    alt: "XEROXII Luxury Timepiece",
    referencedFrom: ["home XEROXII showcase"],
  },
  {
    kind: "image",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary architecture with refined surfaces",
    referencedFrom: ["CE R A VO business card"],
  },
  {
    kind: "image",
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    alt: "Performance car in a mountain landscape",
    referencedFrom: ["Velorix business card"],
  },
];

/**
 * These labels were named in the import request but are not published in the
 * live sitemap or page content. They are deliberately not inferred from the
 * currently published CE R A VO or Velorix entries.
 */
export const unpublishedRequestedVentures: readonly string[] = ["Impress Tiles", "Bath & Beyond"];
