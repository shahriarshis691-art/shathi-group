export type CompanyCategory =
  | "Fashion & Apparel"
  | "Luxury & Lifestyle"
  | "Building Materials"
  | "Home & Living";

export interface Company {
  id: string;
  name: string;
  category: CompanyCategory;
  tagline: string;
  description: string;
  features: string[];
  logoPlaceholder: string;
  websiteUrl: string;
}

export const companies: Company[] = [
  {
    id: "shis-fashion",
    name: "Shis Fashion",
    category: "Fashion & Apparel",
    tagline: "Style that speaks.",
    description:
      "A contemporary fashion house offering ready-to-wear collections, premium tailoring, and seasonal capsule lines for the modern wardrobe.",
    features: [
      "Ready-to-wear collections",
      "Bespoke tailoring services",
      "Seasonal capsule drops",
      "In-store and online retail",
    ],
    logoPlaceholder: "/logos/shis-fashion.svg",
    websiteUrl: "https://shisfashion.example.com",
  },
  {
    id: "xeroxii-watches",
    name: "XeroXii Watches",
    category: "Luxury & Lifestyle",
    tagline: "Time, redefined.",
    description:
      "A luxury watchmaker crafting precision timepieces that blend minimalist design with Swiss-grade movement and lasting materials.",
    features: [
      "Swiss-grade automatic movements",
      "Sapphire crystal glass",
      "Limited-edition releases",
      "International warranty service",
    ],
    logoPlaceholder: "/logos/xeroxii-watches.svg",
    websiteUrl: "https://xeroxiiwatches.example.com",
  },
  {
    id: "impress-tiles",
    name: "Impress Tiles",
    category: "Building Materials",
    tagline: "Surfaces that impress.",
    description:
      "A leading manufacturer and distributor of premium porcelain, ceramic, and vitrified tiles for residential, commercial, and architectural projects.",
    features: [
      "Porcelain and ceramic collections",
      "Architectural-grade finishes",
      "Pan-India dealer network",
      "Custom design and sizing",
    ],
    logoPlaceholder: "/logos/impress-tiles.svg",
    websiteUrl: "https://impresstiles.example.com",
  },
  {
    id: "bath-and-beyond",
    name: "Bath and Beyond",
    category: "Home & Living",
    tagline: "Elevate everyday rituals.",
    description:
      "A premium bath and home solutions brand offering designer fittings, sanitaryware, faucets, and wellness products for modern living spaces.",
    features: [
      "Designer sanitaryware",
      "Premium faucets and fittings",
      "Smart bath solutions",
      "Showroom and project sales",
    ],
    logoPlaceholder: "/logos/bath-and-beyond.svg",
    websiteUrl: "https://bathandbeyond.example.com",
  },
];