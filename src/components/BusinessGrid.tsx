import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies, type Company } from "@/data/companies";
import { SlideIn } from "@/components/ui/ScrollReveal";

export function BusinessGrid() {
  return (
    <section
      aria-labelledby="businesses-heading"
      id="businesses"
      className="bg-transparent"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto px-6 py-16">
        {companies.map((company, index) => (
          <SlideIn
            key={company.id}
            direction={index < 2 ? "left" : "right"}
            delay={[0, 0.1, 0.1, 0.2, 0.2][index] ?? 0.2}
          >
            <li className="list-none">
              <SubsidiaryCard company={company} index={index} />
            </li>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}

function SubsidiaryCard({ company, index }: { company: Company; index: number }) {
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <div className="flex flex-col">
      <Link
        href={`/companies/${company.slug}`}
        aria-label={`Explore ${company.name}`}
        className="group block"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-neutral-200">
          <Image
            alt={company.imageAlt}
            className="object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            src={company.image}
          />
        </div>
      </Link>

      <div className="mt-4">
        <p className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 block mb-1">
          {numeral}
        </p>
        <Link
          href={`/companies/${company.slug}`}
          aria-label={`Explore ${company.name}`}
          className="group block"
        >
          <p className="text-sm md:text-base font-bold tracking-[0.15em] text-neutral-900 uppercase font-sans">
            {company.name}
          </p>
        </Link>
        <Link
          href={`/companies/${company.slug}`}
          aria-label={`Explore ${company.name}`}
          className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 uppercase tracking-widest mt-1 hover:text-black transition-colors"
        >
          Explore Collection
          <ArrowUpRight className="h-3 w-3" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
