import type { Metadata } from "next";
import { companies } from "@/data/companies";
import { CompanyClient } from "../companies/[slug]/CompanyClient";

const cortexCompany = companies.find((c) => c.slug === "cortex-softsolutions");

if (!cortexCompany) {
  throw new Error("CORTEXIO company not found");
}

export const metadata: Metadata = {
  title: cortexCompany.name,
  description: cortexCompany.description,
  alternates: { canonical: "/cortexio" },
  openGraph: {
    title: cortexCompany.name,
    description: cortexCompany.description,
    url: `${process.env.NEXT_PUBLIC_APP_URL || "https://shathigroup.com"}/cortexio`,
    images: [{ url: cortexCompany.image, alt: cortexCompany.imageAlt }],
  },
  twitter: {
    title: cortexCompany.name,
    description: cortexCompany.description,
    images: [cortexCompany.image],
  },
};

export default function CortexioPage() {
  return <CompanyClient company={cortexCompany!} />;
}