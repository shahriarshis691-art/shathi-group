import Image from "next/image";
import Link from "next/link";

const materialSystems = [
  "Porcelain tiles",
  "Luxury ceramics",
  "Marble & slab finishes",
  "Real estate specifications",
];

export function CeravoShowcase() {
  return (
    <section
      aria-labelledby="ceravo-heading"
      className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-neutral-200 bg-[#FAFAFA] text-neutral-950 select-none lg:flex-row"
    >
      <aside className="flex flex-col gap-8 border-b border-neutral-200 p-6 sm:p-8 lg:basis-[15%] lg:justify-between lg:border-r lg:border-b-0">
        <div className="font-mono text-sm font-bold tracking-[0.25em] text-neutral-900">
          CE R A VO
        </div>

        <nav aria-label="CE R A VO collections">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-4 text-[11px] font-mono uppercase tracking-widest text-neutral-500 lg:block lg:space-y-4">
            {materialSystems.map((system) => (
              <li key={system}>{system}</li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+8801712345678"
          className="w-fit font-mono text-xs text-neutral-400 transition-colors hover:text-neutral-950"
        >
          +880 17 1234 5678
        </a>
      </aside>

      <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:basis-[38%] lg:p-16">
        <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.35em] text-neutral-400">
          Premium Tiles & Ceramic Solutions // Shathi Group
        </p>
        <h2
          id="ceravo-heading"
          className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 uppercase md:text-5xl"
        >
          Architectural ceramics & luxury building materials
        </h2>
        <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-600 md:text-sm">
          Engineered for high-end residential, commercial real estate, and modern
          developments. CE R A VO provides premium porcelain slabs, architectural ceramic
          finishes, and precision building surfaces crafted for structural longevity and
          luxury interior design.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/ceravo"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-950 text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all duration-300 shadow-xl"
          >
            VIEW DETAILS &amp; COLLECTION →
          </Link>
          <a
            href="https://www.ceravo.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-neutral-950 text-neutral-950 font-mono text-xs tracking-[0.2em] uppercase hover:bg-neutral-950 hover:text-white transition-all duration-300"
          >
            VISIT CERAVO.ONLINE ↗
          </a>
        </div>
      </div>

      <div className="relative h-full min-h-[450px] w-full overflow-hidden bg-neutral-100 lg:min-h-full lg:basis-[47%]">
        <Image
          src="/ceravo/real-estate-ceramics.png"
          alt="CE R A VO Luxury Ceramic Surfaces and Architectural Materials"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center contrast-105 transition-transform duration-700 hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15"
        />

        <div className="absolute inset-y-0 right-0 flex w-16 flex-col items-center justify-between border-l border-white/40 bg-white/15 py-6 font-mono text-[10px] text-neutral-700 backdrop-blur-[2px] sm:w-20 sm:py-8">
          <span aria-hidden="true" className="h-16 w-px bg-neutral-700/50" />
          <span className="[writing-mode:vertical-rl] rotate-180 tracking-[0.2em]">
            01 / 03
          </span>
          <div className="flex flex-col items-center gap-4 uppercase tracking-[0.18em]">
            <a href="#contact" className="transition-colors hover:text-neutral-950">
              Inquiry
            </a>
            <a href="#contact" className="transition-colors hover:text-neutral-950">
              Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
