import { Award, Building2, HeartHandshake, MapPin } from "lucide-react";
import { SlideIn, type SlideDirection } from "@/components/ui/ScrollReveal";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

const stats = [
  {
    icon: Building2,
    value: "4+",
    label: "Strategic Brands",
    sub: "Across four industries",
  },
  {
    icon: Award,
    value: "Trusted",
    label: "Quality",
    sub: "Certified standards",
  },
  {
    icon: MapPin,
    value: "Pan-India",
    label: "Nationwide Footprint",
    sub: "Dealer & retail network",
  },
  {
    icon: HeartHandshake,
    value: "Always",
    label: "Customer First",
    sub: "Lifetime support",
  },
];

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-[#0B0C0E] py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:gap-8">
        {stats.map(({ icon: Icon, value, label, sub }, index) => {
          const direction: SlideDirection = index % 2 === 0 ? "left" : "right";

          return (
            <SlideIn key={label} direction={direction} delay={index * 0.08}>
              <ParallaxContainer
                depth="foreground"
                yRange={index % 2 === 0 ? [30, -38] : [20, -28]}
              >
                <article className="flex flex-col rounded-sm border border-neutral-800 bg-[#111215] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-colors duration-300 hover:border-neutral-600 md:p-8">
                  <Icon className="mb-5 h-6 w-6 stroke-[1.5] text-neutral-200" aria-hidden />
                  <p className="font-serif text-3xl font-normal tracking-tight text-neutral-100">
                    {value}
                  </p>
                  <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {label}
                  </p>
                  <p className="mt-2 font-sans text-xs leading-relaxed tracking-normal text-neutral-500 md:text-[13px]">
                    {sub}
                  </p>
                </article>
              </ParallaxContainer>
            </SlideIn>
          );
        })}
      </div>
    </section>
  );
}
