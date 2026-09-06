import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, HandHeart, Recycle } from "lucide-react";
import { CorporateInquiryButton } from "@/components/CorporateInquiryButton";

export const metadata: Metadata = {
  title: "Sustainability, ESG & CSR",
  description:
    "SHATHI Group's approach to responsible operations, considered materials, and long-term community value.",
  alternates: { canonical: "/esg" },
};

const commitments = [
  {
    icon: Recycle,
    label: "01 // Resource awareness",
    title: "Consider the life of every material.",
    copy: "Across relevant business lines, we are focused on better material decisions, durable specifications, and a more thoughtful approach to the full life of a product or project.",
  },
  {
    icon: Building2,
    label: "02 // Responsible operations",
    title: "Make standards practical.",
    copy: "Our operating priorities include clear partner expectations, quality-minded procurement, and business practices that can be consistently understood and applied.",
  },
  {
    icon: HandHeart,
    label: "03 // Shared value",
    title: "Grow with our communities.",
    copy: "We believe durable businesses create value beyond the transaction—through respectful partnerships, capable teams, and the trust they earn over time.",
  },
];

export default function EsgPage() {
  return (
    <main className="overflow-x-clip bg-neutral-50 pt-16 text-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-neutral-100 lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              01 // Sustainability, ESG &amp; CSR
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.96] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              Build value with responsibility in view.
            </h1>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-600 lg:col-span-4 lg:justify-self-end">
            SHATHI Group is shaping a practical approach to responsible growth—one
            that considers materials, operating standards, partnerships, and the
            long-term health of the markets we serve.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {commitments.map(({ icon: Icon, label, title, copy }) => (
              <article key={label} className="flex min-h-72 flex-col border border-neutral-200 bg-white p-7 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">{label}</p>
                <Icon className="mt-auto h-7 w-7 stroke-[1.25] text-neutral-950" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-2xl leading-tight tracking-tight text-neutral-950">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-neutral-200 py-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Partner information
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-neutral-950 sm:text-4xl">
              Request a conversation about responsible sourcing, project standards, or partnership practice.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <CorporateInquiryButton
              category="Strategic Partnership"
              label="Speak with the corporate desk"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
            />
            <Link href="/about" className="inline-flex min-h-11 items-center gap-2 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-700 transition hover:text-neutral-950">
              Our heritage &amp; vision
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
