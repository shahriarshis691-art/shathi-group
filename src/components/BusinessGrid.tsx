import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies, type Company } from "@/data/companies";
import { SlideIn } from "@/components/ui/ScrollReveal";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

export function BusinessGrid() {
  return (
    <section
      aria-labelledby="businesses-heading"
      id="businesses"
      className="bg-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-[90rem] mx-auto px-6 py-16">
        {companies.map((company, index) => (
          <SlideIn
            key={company.id}
            direction={index < 2 ? "left" : "right"}
            delay={[0, 0.1, 0.1, 0.2, 0.2][index] ?? 0.2}
          >
            <ParallaxContainer
              depth="foreground"
              yRange={index % 2 === 0 ? [36, -42] : [18, -24]}
            >
              <SubsidiaryCard company={company} index={index} />
            </ParallaxContainer>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}

function SubsidiaryCard({ company, index }: { company: Company; index: number }) {
  const isCortex = company.slug === "cortex-softsolutions";
  const numeral = isCortex ? "01" : String(index + 1).padStart(2, "0");
  const displayName = isCortex ? "CORTEXIO SOFTSOLUTIONS" : company.name;
  const cardHref = isCortex ? "/companies/cortex-softsolutions" : `/companies/${company.slug}`;
  const actionLabel = isCortex ? "EXPLORE PLATFORM" : "Explore Collection";

  return (
    <div className="flex flex-col">
      <Link
        href={cardHref}
        aria-label={`Explore ${company.name}`}
        className="group block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-neutral-100">
          <ParallaxContainer
            depth="midground"
            yRange={[-18, 18]}
            interactive
            planeClassName="h-full"
            contentClassName="h-full"
            className="absolute inset-0"
          >
            <Image
              alt={company.imageAlt}
              className="object-cover filter grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              src={company.image}
            />
          </ParallaxContainer>
        </div>
      </Link>

      <div className="mt-4">
        <p className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 block mb-1">
          {numeral}
        </p>
        <Link
          href={cardHref}
          aria-label={`Explore ${company.name}`}
          className="group block"
        >
          <p className="text-sm md:text-base font-bold tracking-[0.15em] text-neutral-950 uppercase font-sans">
            {displayName}
          </p>
        </Link>
        <Link
          href={cardHref}
          aria-label={`Explore ${company.name}`}
          className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 uppercase tracking-widest mt-1 hover:text-neutral-950 transition-colors"
        >
          {actionLabel}
          <ArrowUpRight className="h-3 w-3" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
