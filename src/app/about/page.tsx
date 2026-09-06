import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Eye, ShieldCheck } from "lucide-react";
import { CorporateInquiryButton } from "@/components/CorporateInquiryButton";

export const metadata: Metadata = {
  title: "About — Heritage & Vision",
  description:
    "Learn about SHATHI Group's heritage, vision, and long-term approach to building considered businesses.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: Compass,
    label: "01 // Portfolio perspective",
    title: "Build with a long horizon.",
    copy: "We bring distinct businesses together around a shared standard: considered decisions, disciplined execution, and a commitment to value that outlasts short-term trends.",
  },
  {
    icon: Eye,
    label: "02 // Brand clarity",
    title: "Respect the character of every business.",
    copy: "From digital systems to materials and luxury-led consumer experiences, each SHATHI Group company retains a clear point of view while benefiting from group-level stewardship.",
  },
  {
    icon: ShieldCheck,
    label: "03 // Responsible growth",
    title: "Earn trust in the details.",
    copy: "We put integrity, craftsmanship, and practical accountability at the centre of how we develop partnerships, serve clients, and grow our portfolio.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-neutral-50 pt-16 text-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              01 // SHATHI Group heritage &amp; vision
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.96] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              A considered group of businesses, built to endure.
            </h1>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-600 lg:col-span-4 lg:justify-self-end">
            SHATHI Group brings together specialist companies across technology,
            fashion, precision luxury, architectural materials, and mobility. Our
            shared focus is simple: create relevance today while building durable
            value for tomorrow.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 md:grid-cols-3">
            {principles.map(({ icon: Icon, label, title, copy }) => (
              <article key={label} className="bg-white p-7 sm:p-8 lg:p-10">
                <Icon className="h-6 w-6 stroke-[1.25] text-neutral-950" aria-hidden="true" />
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                  {label}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-neutral-950">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-neutral-200 py-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              The group perspective
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-neutral-950 sm:text-4xl">
              Independent points of view, connected by a common operating standard.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
            <CorporateInquiryButton
              category="Strategic Partnership"
              label="Start a corporate conversation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
            />
            <Link
              href="/leadership"
              className="inline-flex min-h-11 items-center gap-2 px-1 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-700 transition hover:text-neutral-950"
            >
              Meet our leadership approach
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
