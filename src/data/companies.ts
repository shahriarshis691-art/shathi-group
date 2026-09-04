export type CompanyCategory =
  | "Apparel & Lifestyle"
  | "Horology & Luxury Timepieces"
  | "Architectural Surfaces & Ceramics"
  | "Technology & Enterprise Software";

export interface Company {
  id: string;
  name: string;
  slug: string;
  category: CompanyCategory;
  tagline: string;
  description: string;
  features: string[];
  logoPlaceholder: string;
  websiteUrl: string;
  storeUrl?: string;
  brandStory?: string;
  productVerticals?: string[];
  flagshipHighlights?: string[];
}

function logoFor(slug: string) {
  return `/logos/${slug}.svg`;
}

export const companies: Company[] = [
  {
    id: "shis-fashion",
    name: "Shis Fashion",
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
    websiteUrl: "https://shisfashion.example.com",
    storeUrl: "https://shop.shisfashion.example.com",
    brandStory:
      "Shis Fashion specializes in contemporary, premium menswear — from sharp tailoring to elevated casual staples. Built on premium cotton fabrics and modern urban fits, every piece carries the brand's signature acid-washed graphics and laid-back-luxe attitude.",
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
    name: "XeroXii",
    slug: "xeroxii",
    category: "Horology & Luxury Timepieces",
    tagline: "Precision Craftsmanship & Modern Luxury",
    description:
      "XeroXii is a modern luxury watchmaker where precision engineering meets minimalist design, protected by scratch-resistant sapphire crystal and built to age gracefully.",
    features: [
      "Precision Engineering",
      "Sapphire Crystal",
      "Minimalist Luxury",
    ],
    logoPlaceholder: logoFor("xeroxii"),
    websiteUrl: "https://xeroxiiwatches.example.com",
    storeUrl: "https://shop.xeroxiiwatches.example.com",
    brandStory:
      "XeroXii is a modern luxury watchmaker where precision engineering meets minimalist design. Each timepiece is built around Swiss-grade movements and protected by scratch-resistant sapphire crystal, designed to age gracefully through the decades.",
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
    name: "Ceravo Tiles & Ceramic",
    slug: "ceravo-tiles",
    category: "Architectural Surfaces & Ceramics",
    tagline: "Architectural Elegance & Surface Innovation",
    description:
      "Ceravo Tiles & Ceramic engineers premium porcelain and ceramic surfaces for residential and commercial architecture, fusing high durability with architectural finishes.",
    features: [
      "Premium Porcelain",
      "Architectural Finishes",
      "High Durability",
    ],
    logoPlaceholder: logoFor("ceravo-tiles"),
    websiteUrl: "https://ceravotiles.example.com",
    storeUrl: "https://dealer.ceravotiles.example.com",
    brandStory:
      "Ceravo Tiles & Ceramic engineers premium porcelain and ceramic surfaces for residential and commercial architecture. Our collections balance high durability with architectural finishes, delivered through a nationwide dealer network.",
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
    id: "cortex-softsolutions",
    name: "Cortex SoftSolutions",
    slug: "cortex-softsolutions",
    category: "Technology & Enterprise Software",
    tagline: "Scalable Software & Digital Transformation",
    description:
      "Cortex SoftSolutions builds cloud-native enterprise platforms that power digital transformation — from AI-driven workflows to fully custom software that scales with its clients.",
    features: [
      "Cloud Systems",
      "AI Workflows",
      "Custom Enterprise Platforms",
    ],
    logoPlaceholder: logoFor("cortex-softsolutions"),
    websiteUrl: "https://cortexsoftsolutions.example.com",
    storeUrl: "https://cortexsoftsolutions.example.com/contact",
    brandStory:
      "Cortex SoftSolutions builds cloud-native enterprise platforms that power digital transformation. From AI-driven workflows to fully custom software, we deliver scalable systems that grow with our clients.",
    productVerticals: [
      "Cloud-Native Platforms",
      "AI Workflow Automation",
      "Enterprise Resource Planning",
      "Custom Integrations",
    ],
    flagshipHighlights: [
      "'CortexOS' unified platform suite",
      "No-code AI workflow builder",
      "SOC 2 compliant cloud hosting",
      "Dedicated customer success team",
    ],
  },
];
