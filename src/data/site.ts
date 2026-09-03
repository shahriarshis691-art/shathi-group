export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export const companies: Company[] = [
  {
    id: "shathi-textiles",
    name: "SHATHI Textiles",
    tagline: "Quality fabrics, globally sourced.",
    description:
      "A vertically integrated textile operation serving retail and industrial clients.",
  },
  {
    id: "shathi-logistics",
    name: "SHATHI Logistics",
    tagline: "Moving business forward.",
    description:
      "End-to-end freight, warehousing, and supply-chain solutions across the region.",
  },
  {
    id: "shathi-properties",
    name: "SHATHI Properties",
    tagline: "Spaces that work.",
    description:
      "Commercial and residential developments designed for long-term value.",
  },
];

export const siteConfig = {
  name: "SHATHI Group of Companies",
  shortName: "SHATHI Group",
  email: "info@shathigroup.example",
  phone: "+1 (000) 000-0000",
  address: "Corporate Headquarters",
};