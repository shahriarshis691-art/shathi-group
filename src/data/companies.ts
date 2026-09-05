export type CompanyCategory =
  | "Apparel & Lifestyle"
  | "Horology & Luxury Timepieces"
  | "Architectural Surfaces & Ceramics"
  | "Technology & Enterprise Software"
  | "Mobility & Automotive";

export interface Company {
  id: string;
  name: string;
  slug: string;
  category: CompanyCategory;
  tagline: string;
  subtitle?: string;
  description: string;
  features: string[];
  logoPlaceholder: string;
  image: string;
  imageAlt: string;
  websiteUrl: string;
  storeUrl?: string;
  brandStory?: string;
  productVerticals?: string[];
  flagshipHighlights?: string[];
  globalPresence?: string[];
}

function logoFor(slug: string) {
  return `/logos/${slug}.svg`;
}

export const companies: Company[] = [
  {
    id: "cortex-softsolutions",
    name: "CORTEXIO Softsolutions",
    slug: "cortex-softsolutions",
    category: "Technology & Enterprise Software",
    tagline: "Scalable Software & Digital Transformation",
    description:
      "CORTEXIO Softsolutions builds cloud-native enterprise platforms that power digital transformation — from AI-driven workflows to fully custom software that scales with its clients.",
    features: [
      "Cloud Systems",
      "AI Workflows",
      "Custom Enterprise Platforms",
    ],
    logoPlaceholder: logoFor("cortex-softsolutions"),
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Minimalist circuit board and server architecture",
    websiteUrl: "https://cortexio-softsolutions.example.com",
    storeUrl: "https://cortexio-softsolutions.example.com/contact",
    brandStory:
      "CORTEXIO Softsolutions builds cloud-native enterprise platforms that power digital transformation. From AI-driven workflows to fully custom software, we deliver scalable systems that grow with our clients.",
    productVerticals: [
      "Cloud-Native Platforms",
      "AI Workflow Automation",
      "Enterprise Resource Planning",
      "Custom Integrations",
    ],
    flagshipHighlights: [
      "'CORTEXIO OS' unified platform suite",
      "No-code AI workflow builder",
      "SOC 2 compliant cloud hosting",
      "Dedicated customer success team",
    ],
  },
  {
    id: "shis-fashion",
    name: "SHIS Fashion",
    slug: "shis-fashion",
    category: "Apparel & Lifestyle",
    tagline: "Contemporary & Premium Men's Apparel",
    description:
      "A contemporary menswear house built on premium cotton fabrics, modern urban fits, and signature acid-washed graphics — for the modern individualist.",
    features: [
      "Premium Cotton Fabrics",
      "Modern Urban Fits",
      "Acid-Washed Graphics",
    ],
    logoPlaceholder: logoFor("shis-fashion"),
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Menswear tailoring on a model",
    websiteUrl: "https://shisfashion.example.com",
    storeUrl: "https://shop.shisfashion.example.com",
    brandStory:
      "SHIS Fashion specializes in contemporary, premium menswear — from sharp tailoring to elevated casual staples. Built on premium cotton fabrics and modern urban fits, every piece carries the brand's signature acid-washed graphics and laid-back-luxe attitude.",
    productVerticals: [
      "Menswear Collections",
      "Bespoke Blazers",
      "Casual Essentials",
      "Graphic Tees & Outerwear",
    ],
    flagshipHighlights: [
      "Premium Pima-cotton suiting fabrics",
      "Signature acid-wash denim program",
      "Made-to-measure tailoring service",
      "Seasonless core capsule",
    ],
  },
  {
    id: "xeroxii",
    name: "XEROXII Luxury Watches and Jewellery",
    slug: "xeroxii",
    category: "Horology & Luxury Timepieces",
    tagline: "Haute Horology & Fine Jewellery Maison",
    subtitle: "Luxury Watches & Fine Jewellery",
    description:
      "XEROXII is a modern luxury watchmaker where precision engineering meets minimalist design, protected by scratch-resistant sapphire crystal and built to age gracefully.",
    features: [
      "Precision Engineering",
      "Sapphire Crystal",
      "Minimalist Luxury",
    ],
    globalPresence: [
      "Bangladesh",
      "Japan",
      "United Kingdom",
      "United States",
      "France",
      "Germany",
    ],
    logoPlaceholder: logoFor("xeroxii"),
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury wristwatch detail",
    websiteUrl: "https://xeroxiiwatches.example.com",
    storeUrl: "https://shop.xeroxiiwatches.example.com",
    brandStory:
      "XEROXII is a modern luxury watchmaker where precision engineering meets minimalist design. Each timepiece is built around Swiss-grade movements and protected by scratch-resistant sapphire crystal, designed to age gracefully through the decades.",
    productVerticals: [
      "Automatic Dress Watches",
      "Sport Chronographs",
      "Limited Edition Series",
      "Bespoke Engraving",
    ],
    flagshipHighlights: [
      "'Axiom' collection with Swiss ETA movements",
      "Box sapphire crystal with anti-reflective coating",
      "Hand-finished Cotes de Genevre detailing",
      "Five-year international warranty",
    ],
  },
  {
    id: "ceravo-tiles",
    name: "CE R A VO Building Meterials",
    slug: "ceravo-tiles",
    category: "Architectural Surfaces & Ceramics",
    tagline: "Architectural Elegance & Surface Innovation",
    description:
      "CE R A VO engineers premium porcelain and ceramic surfaces for residential and commercial architecture, fusing high durability with architectural finishes.",
    features: [
      "Premium Porcelain",
      "Architectural Finishes",
      "High Durability",
    ],
    logoPlaceholder: logoFor("ceravo-tiles"),
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Contemporary architecture with refined surfaces",
    websiteUrl: "https://ceravotiles.example.com",
    storeUrl: "https://dealer.ceravotiles.example.com",
    brandStory:
      "CE R A VO engineers premium porcelain and ceramic surfaces for residential and commercial architecture. Our collections balance high durability with architectural finishes, delivered through a nationwide dealer network.",
    productVerticals: [
      "Large-Format Porcelain Slabs",
      "Ceramic Wall Collections",
      "Vitrified Pavers",
      "Custom Architectural Spec",
    ],
    flagshipHighlights: [
      "'Marblea' large-format porcelain series",
      "PEI IV wear-rated finishes",
      "Custom sizing and logo imprinting",
      "100+ dealer partners across India",
    ],
  },
  {
    id: "velorix-motors",
    name: "VELORIX Motors",
    slug: "velorix-motors",
    category: "Mobility & Automotive",
    tagline: "Performance Mobility, Refined for Modern Roads",
    description:
      "VELORIX Motors develops performance-led mobility solutions with sculpted design, connected technology, and a focus on every detail of the driving experience.",
    features: [
      "Performance Engineering",
      "Connected Mobility",
      "Precision Craftsmanship",
    ],
    logoPlaceholder: logoFor("velorix-motors"),
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Performance car in a mountain landscape",
    websiteUrl: "https://velorixmotors.example.com",
    brandStory:
      "VELORIX Motors brings together expressive automotive design and modern engineering. Every vehicle is shaped around responsive performance, thoughtful technology, and a quiet confidence that lasts well beyond the journey.",
    productVerticals: [
      "Performance Grand Tourers",
      "Executive Mobility",
      "Connected Vehicle Services",
      "Bespoke Fleet Programs",
    ],
    flagshipHighlights: [
      "Driver-focused performance architecture",
      "Connected cockpit experience",
      "Tailored corporate fleet solutions",
      "Dedicated ownership concierge",
    ],
  },
];
