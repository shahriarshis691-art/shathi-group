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
    title: `${company.name} | SHATHI Group`,
    description: company.description,
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
