import Image from "next/image";
import Link from "next/link";

const materialStudies = [
  {
    title: "Limestone Vein",
    detail: "Large-format porcelain / 1200 × 2400 mm",
    image: "/ceravo/material-architecture.png",
    position: "object-[58%_center]",
  },
  {
    title: "Gallery Travertine",
    detail: "Honed architectural surface / warm grey",
    image: "/ceravo/real-estate-ceramics.png",
    position: "object-center",
  },
  {
    title: "Monolith Sand",
    detail: "Precision ceramic cladding / matte finish",
    image: "/ceravo/material-architecture.png",
    position: "object-[80%_center]",
  },
  {
    title: "Quiet Marble",
    detail: "Interior floor system / low-slip texture",
    image: "/ceravo/real-estate-ceramics.png",
    position: "object-[42%_bottom]",
  },
];

const specificationRows = [
  ["01", "Porcelain slab systems", "1200 × 2400 / 1600 × 3200", "Residential & hospitality"],
  ["02", "Architectural wall tiles", "600 × 1200 / 800 × 1600", "Interior & exterior facades"],
  ["03", "Vitrified floor collection", "600 × 600 / 600 × 1200", "High-traffic commercial"],
  ["04", "Bespoke surface programs", "Project specific", "Developer specifications"],
];

const journal = [
  {
    label: "Material Notes",
    title: "Why a surface needs room to breathe",
    image: "/ceravo/material-architecture.png",
    position: "object-[60%_center]",
  },
  {
    label: "Project Journal",
    title: "The quiet performance of a monolithic wall",
    image: "/ceravo/real-estate-ceramics.png",
    position: "object-[65%_center]",
  },
  {
    label: "Specification Guide",
    title: "Selecting finishes for commercial longevity",
    image: "/ceravo/material-architecture.png",
    position: "object-[92%_bottom]",
  },
];

function SectionHeader({ number, title, detail }: { number: string; title: string; detail: string }) {
  return (
    <div className="grid gap-5 border-b border-[#aaa8a0] pb-6 md:grid-cols-[9rem_1fr] md:items-end">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#79776f]">{number}</p>
      <div>
        <h2 className="font-sans text-2xl font-normal uppercase tracking-tight text-[#242421] sm:text-3xl">{title}</h2>
        <p className="mt-2 max-w-xl font-mono text-[10px] uppercase tracking-[0.18em] text-[#79776f]">{detail}</p>
      </div>
    </div>
  );
}

export function CeravoDetailPage() {
  return (
    <main className="min-h-screen bg-[#d6d4ce] text-[#242421] selection:bg-[#9d9a91]/40">
      <header className="border-b border-[#aaa8a0] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5f5d57]">
          <Link href="/" className="transition-colors hover:text-[#242421]">← Shathi Group</Link>
          <p className="hidden md:block">Premium tiles & ceramic systems</p>
          <a href="https://www.ceravo.online" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#242421]">
            Ceravo.online ↗
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] border-x border-[#aaa8a0] lg:grid-cols-[8.5rem_minmax(0,1fr)_minmax(22rem,0.72fr)]">
        <aside className="flex min-h-28 items-center justify-between border-b border-[#aaa8a0] px-5 py-5 lg:min-h-[520px] lg:flex-col lg:items-start lg:justify-between lg:border-r lg:border-b-0 lg:px-8 lg:py-10">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#73716b]">01 — 04</span>
          <span className="font-sans text-2xl leading-none text-[#242421]">◌</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#73716b] lg:[writing-mode:vertical-rl] lg:rotate-180">
            Surface architecture
          </span>
        </aside>

        <div className="flex min-h-[420px] flex-col justify-between p-8 sm:p-12 lg:min-h-[520px] lg:p-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#79776f]">CE R A VO / Tiles & Ceramics</p>
            <h1 className="mt-12 font-sans text-5xl font-normal leading-[0.93] tracking-[-0.06em] text-[#242421] sm:text-6xl lg:text-7xl">
              CE R A<br />VO
            </h1>
          </div>
          <div className="mt-12 max-w-sm">
            <p className="font-sans text-sm leading-relaxed text-[#55534e]">
              Material systems for residences, hospitality, and commercial projects where durability and atmosphere have equal weight.
            </p>
            <a
              href="https://www.ceravo.online"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex border-b border-[#242421] pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#242421] transition-opacity hover:opacity-60"
            >
              View current collections ↗
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] border-t border-[#aaa8a0] lg:border-t-0">
          <Image
            src="/ceravo/material-architecture.png"
            alt="CE R A VO porcelain cladding at a contemporary architectural entrance"
            fill
            priority
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-5 left-5 border-l border-white/80 pl-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/90">
            Material study / 01
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-x border-t border-[#aaa8a0] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeader number="02 — About" title="Material intelligence, quietly expressed." detail="The Ceravo approach" />
        <div className="grid gap-8 pt-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
          <p className="font-sans text-lg leading-relaxed text-[#33322e] sm:text-xl">
            We specify ceramic surfaces as part of the architecture—not as an afterthought. Every collection is selected for scale, tactile quality, and real-world endurance.
          </p>
          <div className="grid gap-6 text-sm leading-relaxed text-[#615f59] sm:grid-cols-2">
            <p>From private residences to high-traffic commercial environments, CE R A VO brings porcelain, ceramic, and engineered stone systems into a disciplined architectural palette.</p>
            <p>Our project team supports selection, technical detailing, and coordinated delivery so the installed surface carries the same clarity as the original specification.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-x border-t border-[#aaa8a0] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeader number="03 — Collections" title="Surface studies" detail="A selection of large-format material directions" />
        <div className="mt-8 grid gap-px bg-[#aaa8a0] sm:grid-cols-2 lg:grid-cols-4">
          {materialStudies.map((study) => (
            <article key={study.title} className="bg-[#d6d4ce] p-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={study.image} alt={study.title} fill sizes="(min-width: 1024px) 22vw, 50vw" className={`object-cover ${study.position}`} />
              </div>
              <div className="pt-4">
                <h3 className="font-sans text-sm uppercase tracking-tight text-[#33322e]">{study.title}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-[#79776f]">{study.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-x border-t border-[#aaa8a0] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeader number="04 — Specifications" title="Built for the project at hand." detail="Technical programs / application overview" />
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse font-mono text-[10px] uppercase tracking-[0.14em] text-[#56544e]">
            <thead className="border-b border-[#aaa8a0] text-[#79776f]">
              <tr>
                <th className="px-2 py-4 text-left font-normal">Index</th>
                <th className="px-2 py-4 text-left font-normal">System</th>
                <th className="px-2 py-4 text-left font-normal">Format</th>
                <th className="px-2 py-4 text-right font-normal">Application</th>
              </tr>
            </thead>
            <tbody>
              {specificationRows.map(([index, system, format, application]) => (
                <tr key={index} className="border-b border-[#b9b7b0] transition-colors hover:bg-white/25">
                  <td className="px-2 py-5">{index}</td>
                  <td className="px-2 py-5 text-[#33322e]">{system}</td>
                  <td className="px-2 py-5">{format}</td>
                  <td className="px-2 py-5 text-right">{application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-x border-y border-[#aaa8a0] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeader number="05 — Journal" title="From the materials desk" detail="Notes on specifying surfaces with longevity" />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {journal.map((article) => (
            <article key={article.title}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#bbb9b1]">
                <Image src={article.image} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className={`object-cover ${article.position}`} />
              </div>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#79776f]">{article.label}</p>
              <h3 className="mt-2 max-w-xs font-sans text-lg leading-tight text-[#33322e]">{article.title}</h3>
              <a href="https://www.ceravo.online" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex font-mono text-[10px] uppercase tracking-[0.18em] text-[#55534e] transition-colors hover:text-[#242421]">
                Read note ↗
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
