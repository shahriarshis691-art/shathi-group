import Image from "next/image";
import Link from "next/link";

const architectureSpecs = [
  "01 / 10 EXCLUSIVE SLOTS",
  "LIFETIME FREE DEVELOPMENT",
  "BESPOKE E-COMMERCE & APPS",
  "ENTERPRISE NODE ARCHITECTURE",
];

export function CortexShowcase() {
  return (
    <section
      aria-labelledby="cortex-showcase-heading"
      className="relative flex min-h-[640px] w-full flex-row overflow-hidden border-b border-neutral-200 bg-[#FAFAFA] text-neutral-950 select-none lg:min-h-screen"
    >
      <aside className="flex basis-[22%] flex-col justify-between gap-4 border-r border-neutral-200 p-3 sm:basis-[15%] sm:gap-8 sm:p-8">
        <div className="font-mono text-[9px] font-bold tracking-[0.1em] text-neutral-900 sm:text-sm sm:tracking-[0.25em]">
          CORTEXIO
        </div>

        <nav aria-label="CORTEXIO initiative specs">
          <ul className="hidden grid-cols-2 gap-x-5 gap-y-4 text-[11px] font-mono uppercase tracking-widest text-neutral-500 sm:grid lg:block lg:space-y-4">
            {architectureSpecs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:info@cortexio-softsolutions.com"
          className="w-full break-all font-mono text-[7px] text-neutral-400 transition-colors hover:text-neutral-950 sm:w-fit sm:text-xs"
        >
          info@cortexio-softsolutions.com
        </a>
      </aside>

      <div className="flex basis-[40%] flex-col justify-center p-3 sm:basis-[38%] sm:p-12 lg:p-16">
        <p className="mb-2 font-mono text-[7px] uppercase tracking-[0.12em] text-neutral-400 sm:mb-3 sm:text-[10px] sm:tracking-[0.35em]">
          LIMITED INITIATIVE // 10 FOUNDING PARTNERS
        </p>
        <h2
          id="cortex-showcase-heading"
          className="font-sans text-base font-extrabold leading-[1.02] tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl lg:text-6xl"
        >
          BESPOKE SOFTWARE & APPS — LIFETIME FREE FOR 10 ENTERPRISES
        </h2>
        <p className="mt-3 max-w-lg font-sans text-[9px] leading-relaxed text-neutral-600 sm:mt-5 sm:text-sm">
          CORTEXIO Softsolutions is selecting 10 ambitious businesses to receive
          custom enterprise software, bespoke e-commerce systems, and
          high-performance apps completely free for life. From tailored
          architecture to full deployment—accelerate your operational scale with
          zero development costs.
        </p>
        <Link
          href="/companies/cortex-softsolutions"
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center border border-neutral-950 px-2 py-3 font-mono text-[7px] uppercase tracking-[0.08em] text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white sm:mt-8 sm:w-fit sm:px-8 sm:text-xs sm:tracking-[0.2em]"
        >
          CLAIM YOUR FREE ACCESS [10 SPOTS] →
        </Link>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          alt="CORTEXIO Softsolutions leadership"
          className="object-cover object-top filter grayscale contrast-105 transition-transform duration-700 hover:scale-105"
          fill
          sizes="(min-width: 1024px) 47vw, 38vw"
          src="/cortex/image-Picsart-AiImageEnhancer.png"
        />
      </div>
    </section>
  );
}
