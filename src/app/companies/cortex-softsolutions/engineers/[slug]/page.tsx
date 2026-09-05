import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cortexEngineers } from "@/data/cortexEngineers";

export function generateStaticParams() {
  return cortexEngineers.map((engineer) => ({
    slug: engineer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const engineer = cortexEngineers.find((e) => e.slug === slug);

  if (!engineer) {
    return { title: "Engineer Not Found | CORTEX Soft Solutions" };
  }

  return {
    title: `${engineer.name} | CORTEX Engineering Portfolio`,
    description: engineer.bio,
  };
}

export default async function EngineerPortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const engineer = cortexEngineers.find((e) => e.slug === slug);

  if (!engineer) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A0A0A]">
      <nav className="border-b border-neutral-200/80 bg-white/80 backdrop-blur-sm" aria-label="Breadcrumb">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/companies/cortex-softsolutions"
            className="inline-flex items-center gap-2 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 transition hover:text-navy-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to CORTEX Overview
          </Link>
        </div>
      </nav>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-200/80 shadow-sm">
                <Image
                  src={engineer.image}
                  alt={engineer.name}
                  fill
                  priority
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <span className="mt-4 block font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500">
                {engineer.tag}
              </span>
            </div>

            <div>
              <h1 className="font-serif text-4xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-5xl">
                {engineer.name}
              </h1>
              <p className="mt-3 font-mono text-sm font-medium uppercase tracking-[0.2em] text-neutral-700">
                {engineer.role}
              </p>
              <p className="mt-6 font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
                {engineer.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Multinational Career History
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl">
            Career History
          </h2>

          <div className="mt-12 space-y-0">
            {engineer.experience.map((item, idx) => (
              <div key={idx} className="relative grid gap-6 border-b border-neutral-100 py-10 last:border-b-0 sm:grid-cols-[200px_1fr]">
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {item.period}
                  </p>
                  <p className="mt-1 font-sans text-sm font-semibold text-neutral-900">
                    {item.role}
                  </p>
                  <p className="font-sans text-sm text-neutral-600">
                    {item.company}
                  </p>
                </div>
                <ul className="space-y-3">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-3 font-sans text-sm leading-relaxed text-neutral-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-[#F7F8FA] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Academic Credentials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl">
            Academic Credentials
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {engineer.education.map((edu, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {edu.year}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold uppercase tracking-[0.14em] text-neutral-900">
                  {edu.degree}
                </h3>
                <p className="mt-1 font-sans text-sm font-semibold text-neutral-700">
                  {edu.institution}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-600">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Software & Systems Showcase
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-[0.12em] text-neutral-900 sm:text-4xl">
            Software & Systems Showcase
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engineer.projects.map((project, idx) => (
              <article key={idx} className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-[#F7F8FA] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {project.type}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-bold uppercase tracking-[0.14em] text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-neutral-700">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
                      {project.metrics}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
