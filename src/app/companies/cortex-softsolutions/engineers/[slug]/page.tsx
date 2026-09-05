import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cortexEngineers, getCortexEngineer } from "@/data/cortexEngineers";

export function generateStaticParams() {
  return cortexEngineers.map((engineer) => ({ slug: engineer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const engineer = getCortexEngineer(slug);

  return engineer
    ? { title: `${engineer.name} | CORTEXIO Softsolutions` }
    : { title: "Engineer Not Found | CORTEXIO Softsolutions" };
}

export default async function CortexEngineerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const engineer = getCortexEngineer(slug);

  if (!engineer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-neutral-950">
      <header className="border-b border-neutral-200 bg-white/80 px-6 py-5 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/companies/cortex-softsolutions" className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-neutral-950">
            ← Return to CORTEXIO Systems Overview
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">Engineering portfolio / 01</span>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#11131a] px-6 py-14 text-white md:px-10 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.18)_0%,transparent_42%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.62fr)] lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300">CORTEXIO Softsolutions {engineer.titleTag}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">{engineer.name}</h1>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-neutral-300">{engineer.role}</p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-300">{engineer.bio}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {engineer.stack.map((technology) => (
                <span key={technology} className="border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-100">
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-white/15 bg-neutral-900">
            <Image src={engineer.avatar} alt={`${engineer.name}, ${engineer.role}`} fill priority sizes="(min-width: 1024px) 30vw, 80vw" className="object-cover grayscale" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">CORTEXIO / specialist file</span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">01 / Multinational experience</p>
          <h2 className="mt-4 font-serif text-4xl leading-none text-neutral-950">Systems shaped in demanding environments.</h2>
        </div>
        <div className="border-t border-neutral-300">
          {engineer.experience.map((entry, index) => (
            <article key={`${entry.company}-${entry.period}`} className="grid gap-5 border-b border-neutral-300 py-7 sm:grid-cols-[4rem_minmax(0,1fr)_10rem]">
              <span className="font-mono text-[10px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-2xl text-neutral-950">{entry.role}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{entry.company}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
                  {entry.highlights.map((highlight) => <li key={highlight}>— {highlight}</li>)}
                </ul>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 sm:text-right">{entry.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white px-6 py-16 md:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">02 / Educational credentials</p>
            <h2 className="mt-4 font-serif text-4xl leading-none text-neutral-950">Depth before delivery.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {engineer.education.map((education) => (
              <article key={`${education.degree}-${education.institution}`} className="border border-neutral-200 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">{education.year}</p>
                <h3 className="mt-5 font-serif text-2xl text-neutral-950">{education.degree}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-600">{education.institution}</p>
                <p className="mt-6 text-sm leading-relaxed text-neutral-600">{education.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 border-b border-neutral-300 pb-7 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">03 / Selected builds</p>
            <h2 className="mt-4 font-serif text-4xl leading-none text-neutral-950">Featured project demos.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600">Representative product systems built around measurable operations, ownership, and performance.</p>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          {engineer.projects.map((project) => (
            <article key={project.title} className="group overflow-hidden border border-neutral-200 bg-white transition-shadow hover:shadow-xl">
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <Image src={project.image} alt={`${project.title} software interface concept`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <span className="absolute left-5 top-5 bg-[#11131a]/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-100">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-3xl text-neutral-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => <span key={metric} className="border border-neutral-200 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">{metric}</span>)}
                </div>
                <Link href={project.demoUrl} className="mt-7 inline-flex font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-950 transition-transform group-hover:translate-x-1">
                  Explore project context →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
