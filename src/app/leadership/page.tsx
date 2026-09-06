import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Landmark, Scale, UsersRound } from "lucide-react";
import { CorporateInquiryButton } from "@/components/CorporateInquiryButton";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description:
    "Explore SHATHI Group's leadership philosophy and governance approach across its diversified portfolio.",
  alternates: { canonical: "/leadership" },
};

const governancePillars = [
  {
    icon: Landmark,
    title: "Stewardship",
    copy: "Portfolio decisions are considered through the lens of long-term relevance, brand integrity, and practical value creation.",
  },
  {
    icon: Scale,
    title: "Accountability",
    copy: "Clear ownership, thoughtful review, and transparent partner communication guide the way the group operates.",
  },
  {
    icon: UsersRound,
    title: "Collaborative leadership",
    copy: "Specialist teams retain the focus required by their markets while working within a shared group direction.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="overflow-x-clip bg-white pt-16 text-neutral-950">
      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              01 // Leadership &amp; governance
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.96] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              Direction with discipline. Growth with responsibility.
            </h1>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-600 lg:col-span-4 lg:justify-self-end">
            SHATHI Group&apos;s leadership model connects strategic oversight with
            specialist execution, helping each business make decisions that stay
            true to its market and its stakeholders.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:col-span-5 lg:mx-0">
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-neutral-300" aria-hidden="true" />
            <Image
              src="/founder-image/founder.png"
              alt="S M Shahriar Walid, Founder and CEO of SHATHI Group"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 28rem, 100vw"
              className="object-cover object-top grayscale"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Founder &amp; chief executive officer
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-neutral-950 sm:text-5xl">
              S M Shahriar Walid
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              As Founder and CEO, S M Shahriar Walid steers SHATHI Group&apos;s
              diversified portfolio through a leadership philosophy grounded in
              stewardship, operational focus, and the pursuit of enduring client
              trust. The mandate is to give each company the clarity to lead in
              its category while maintaining a consistent standard of care across
              the group.
            </p>
            <CorporateInquiryButton
              category="Strategic Partnership"
              label="Connect with the corporate desk"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Operating principles
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-neutral-950 sm:text-4xl">
                Governance in practice.
              </h2>
            </div>
            <Link
              href="/esg"
              className="inline-flex min-h-11 items-center gap-2 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-700 transition hover:text-neutral-950"
            >
              Explore responsibility &amp; ESG
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 pt-8 md:grid-cols-3">
            {governancePillars.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="border border-neutral-200 bg-white p-7 sm:p-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}{" //"}
                </p>
                <Icon className="mt-8 h-6 w-6 stroke-[1.25] text-neutral-950" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-2xl tracking-tight text-neutral-950">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
