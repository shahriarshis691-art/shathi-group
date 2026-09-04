import { Compass, Eye, ShieldCheck, Sparkles, Target } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Group Overview",
    body: "Founded on the principle that lasting businesses are built through integrity, SHATHI Group of Companies brings together a diversified portfolio spanning fashion, luxury, building materials, and home living. Each subsidiary operates with shared values and an unwavering focus on long-term value creation.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To deliver category-defining products and services through brands that customers trust — combining craftsmanship, innovation, and operational excellence across every market we serve.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be recognized as a globally respected Indian conglomerate that elevates standards in every category it enters, while uplifting the communities and partners that share our journey.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate Governance",
    body: "We are guided by an independent board, strict compliance protocols, and transparent reporting. Ethical conduct, accountability, and sustainability are non-negotiables — embedded in every policy and every decision.",
  },
];

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/4 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/2 -translate-x-1/4 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-corporate relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 font-sans text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
            <Sparkles className="h-4 w-4" aria-hidden />
            About SHATHI Group
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl lg:text-5xl text-balance"
          >
            A diversified group built on trust.
          </h2>
          <p className="mt-5 font-sans text-sm md:text-[15px] font-normal text-neutral-600 leading-relaxed text-balance">
            SHATHI Group of Companies is a house of brands — uniting
            industry-leading businesses under a single standard of excellence,
            governance, and customer commitment.
          </p>
        </div>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {pillars.map(({ icon: Icon, title, body }) => (
            <li key={title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/50" aria-hidden="true" />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200/80 text-slate-700 shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="relative mt-5 font-serif text-xl font-bold uppercase tracking-[0.14em] text-neutral-900">
                  {title}
                </h3>
                <p className="relative mt-3 font-sans text-sm md:text-[15px] font-normal text-neutral-600 leading-relaxed">
                  {body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
