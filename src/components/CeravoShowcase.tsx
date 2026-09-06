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
      className="relative flex min-h-[660px] w-full flex-row overflow-hidden border-b border-neutral-200 bg-[#FAFAFA] text-neutral-950 select-none lg:min-h-screen"
    >
      <aside className="flex basis-[22%] flex-col justify-between gap-4 border-r border-neutral-200 p-3 sm:basis-[15%] sm:gap-8 sm:p-8">
        <div className="font-mono text-[9px] font-bold tracking-[0.1em] text-neutral-900 sm:text-sm sm:tracking-[0.25em]">
          CE R A VO
        </div>

        <nav aria-label="CE R A VO collections">
          <ul className="hidden grid-cols-2 gap-x-5 gap-y-4 text-[11px] font-mono uppercase tracking-widest text-neutral-500 sm:grid lg:block lg:space-y-4">
            {materialSystems.map((system) => (
              <li key={system}>{system}</li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+8801712345678"
          className="w-full break-all font-mono text-[8px] text-neutral-400 transition-colors hover:text-neutral-950 sm:w-fit sm:text-xs"
        >
          +880 17 1234 5678
        </a>
      </aside>

      <div className="flex basis-[40%] flex-col justify-center p-3 sm:basis-[38%] sm:p-12 lg:p-16">
        <p className="mb-2 text-[7px] font-mono uppercase tracking-[0.12em] text-neutral-400 sm:mb-3 sm:text-[10px] sm:tracking-[0.35em]">
          Premium Tiles & Ceramic Solutions // Shathi Group
        </p>
        <h2
          id="ceravo-heading"
          className="text-base font-extrabold leading-tight tracking-tight text-neutral-950 uppercase sm:text-3xl md:text-5xl"
        >
          Architectural ceramics & luxury building materials
        </h2>
        <p className="mt-3 max-w-md text-[9px] leading-relaxed text-neutral-600 sm:mt-4 sm:text-xs md:text-sm">
          Engineered for high-end residential, commercial real estate, and modern
          developments. CE R A VO provides premium porcelain slabs, architectural ceramic
          finishes, and precision building surfaces crafted for structural longevity and
          luxury interior design.
        </p>
        <div className="mt-4 flex flex-col items-stretch gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/ceravo"
            className="inline-flex min-h-11 items-center justify-center bg-neutral-950 px-2 py-3 font-mono text-[7px] uppercase tracking-[0.08em] text-white shadow-xl transition-colors duration-300 hover:bg-neutral-800 sm:px-8 sm:text-xs sm:tracking-[0.2em]"
          >
            VIEW DETAILS &amp; COLLECTION →
          </Link>
          <a
            href="https://www.ceravo.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center border border-neutral-950 px-2 py-3 font-mono text-[7px] uppercase tracking-[0.08em] text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-white sm:px-8 sm:text-xs sm:tracking-[0.2em]"
          >
            VISIT CERAVO.ONLINE ↗
          </a>
        </div>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden bg-neutral-100">
        <Image
          src="/ceravo/real-estate-ceramics.png"
          alt="CE R A VO Luxury Ceramic Surfaces and Architectural Materials"
          fill
          sizes="(min-width: 1024px) 47vw, 38vw"
          className="object-cover object-center contrast-105 transition-transform duration-700 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15"
        />

        <div className="absolute inset-y-0 right-0 flex w-10 flex-col items-center justify-between border-l border-white/40 bg-white/15 py-4 font-mono text-[8px] text-neutral-700 backdrop-blur-[2px] sm:w-20 sm:py-8 sm:text-[10px]">
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
