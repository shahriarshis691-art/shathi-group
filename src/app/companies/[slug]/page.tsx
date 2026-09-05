import { CompanyClient } from "./CompanyClient";
import { companies } from "@/data/companies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: company.name,
    description: company.description,
    alternates: { canonical: `/companies/${company.slug}` },
    openGraph: {
      title: company.name,
      description: company.description,
      url: `/companies/${company.slug}`,
      images: [{ url: company.image, alt: company.imageAlt }],
    },
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  return <CompanyClient company={company} />;
}
