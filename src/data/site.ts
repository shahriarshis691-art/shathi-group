import { directContacts } from "./contact";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/#businesses" },
  { label: "Leadership", href: "/leadership" },
  { label: "ESG & CSR", href: "/esg" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export const siteConfig = {
  name: "SHATHI Group of Companies",
  shortName: "SHATHI Group",
  domain: "shathigroup.com",
  url: "https://shathigroup.com",
  description:
    "SHATHI Group of Companies is a diversified portfolio of trusted businesses spanning lifestyle apparel, luxury timepieces, premium tiles, and designer sanitaryware — united by integrity, craftsmanship, and long-term value.",
  keywords: [
    "SHATHI Group",
    "SHATHI Group of Companies",
    "lifestyle apparel",
    "timepieces",
    "watches",
    "tiles",
    "ceramic tiles",
    "porcelain tiles",
    "sanitaryware",
    "bath fixtures",
    "home living",
    "fashion",
    "luxury",
    "corporate conglomerate",
    "conglomerate",
    "India",
    "trusted brands",
  ],
  ogImage: "/hero-image/hero.2.jpg",
  language: "en",
  locale: "en_IN",
  email: directContacts.corporate.email,
  phone: "+880 1979614216",
  address: "SHATHI Tower, Corporate Park, Main Business District, India",
  social: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};
