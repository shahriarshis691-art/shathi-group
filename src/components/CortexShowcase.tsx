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
      className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-neutral-200 bg-[#FAFAFA] text-neutral-950 select-none lg:flex-row"
    >
      <aside className="flex flex-col gap-8 border-b border-neutral-200 p-6 sm:p-8 lg:basis-[15%] lg:justify-between lg:border-r lg:border-b-0">
        <div className="font-mono text-sm font-bold tracking-[0.25em] text-neutral-900">
          CORTEXIO
        </div>

        <nav aria-label="CORTEXIO initiative specs">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-4 text-[11px] font-mono uppercase tracking-widest text-neutral-500 lg:block lg:space-y-4">
            {architectureSpecs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:info@cortexio-softsolutions.com"
          className="w-fit font-mono text-xs text-neutral-400 transition-colors hover:text-neutral-950"
        >
          info@cortexio-softsolutions.com
        </a>
      </aside>

      <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:basis-[38%] lg:p-16">
        <p className="font-mono text-[10px] tracking-[0.35em] text-neutral-400 uppercase mb-3">
          LIMITED INITIATIVE // 10 FOUNDING PARTNERS
        </p>
        <h2
          id="cortex-showcase-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold uppercase tracking-tight text-neutral-950 leading-[1.02]"
        >
          BESPOKE SOFTWARE & APPS — LIFETIME FREE FOR 10 ENTERPRISES
        </h2>
        <p className="text-neutral-600 font-sans text-xs sm:text-sm leading-relaxed mt-5 max-w-lg">
          CORTEXIO Softsolutions is selecting 10 ambitious businesses to receive
          custom enterprise software, bespoke e-commerce systems, and
          high-performance apps completely free for life. From tailored
          architecture to full deployment—accelerate your operational scale with
          zero development costs.
        </p>
        <Link
          href="/companies/cortex-softsolutions"
          className="mt-8 inline-flex items-center justify-center border border-neutral-950 px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white w-fit"
        >
          CLAIM YOUR FREE ACCESS [10 SPOTS] →
        </Link>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden lg:h-auto lg:flex-1">
        <Image
          alt="CORTEXIO Softsolutions leadership"
          className="object-cover object-top filter grayscale contrast-105 transition-transform duration-700 hover:scale-105"
          fill
          sizes="(min-width: 1024px) 47vw, 100vw"
          src="/cortex/image-Picsart-AiImageEnhancer.png"
        />
      </div>
    </section>
  );
}
