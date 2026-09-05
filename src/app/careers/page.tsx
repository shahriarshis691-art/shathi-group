import type { Metadata } from "next";
import { ArrowUpRight, BriefcaseBusiness, Lightbulb, Network } from "lucide-react";
import { CorporateInquiryButton } from "@/components/CorporateInquiryButton";

export const metadata: Metadata = {
  title: "Careers & Talent Acquisition",
  description:
    "Explore career paths and submit an expression of interest to SHATHI Group's talent acquisition desk.",
  alternates: { canonical: "/careers" },
};

const pathways = [
  {
    icon: BriefcaseBusiness,
    title: "Commercial & brand operations",
    copy: "For people who pair category sensitivity with strong operational judgment across brand, sales, retail, and partnerships.",
  },
  {
    icon: Lightbulb,
    title: "Product & digital systems",
    copy: "For product thinkers, engineers, and designers who can translate ambitious ideas into useful, resilient customer experiences.",
  },
  {
    icon: Network,
    title: "Projects & materials delivery",
    copy: "For specialists in materials, specification, project execution, and the details that shape meaningful physical spaces.",
  },
];

export default function CareersPage() {
  return (
    <main className="overflow-x-hidden bg-white pt-16 text-neutral-950">
      <section className="border-b border-neutral-200 bg-neutral-950 px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              01 // Careers &amp; talent acquisition
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build the work that endures.
            </h1>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-300 lg:col-span-4 lg:justify-self-end">
            SHATHI Group welcomes considered expressions of interest from people
            who care about craft, ownership, and building experiences with a
            lasting point of view.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-8 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Expressions of interest
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-neutral-950 sm:text-4xl">
                Where your expertise can contribute.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              We review relevant profiles as team and project needs arise. Please
              use the talent desk to introduce your experience and focus.
            </p>
          </div>
          <div className="grid gap-6 pt-8 md:grid-cols-3">
            {pathways.map(({ icon: Icon, title, copy }, index) => (
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

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-neutral-200 py-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Talent desk
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl tracking-tight text-neutral-950 sm:text-4xl">
              Share your profile with the team.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
              Select Talent Acquisition in the form, tell us about your expertise,
              and include the kind of opportunity you are looking to explore.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <CorporateInquiryButton
              category="Careers / Talent Acquisition"
              label="Submit an expression of interest"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
            />
            <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500">
              Talent desk opens in a secure inquiry form
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
