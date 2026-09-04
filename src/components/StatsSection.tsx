import { Award, Building2, HeartHandshake, MapPin } from "lucide-react";
import { SlideIn, type SlideDirection } from "@/components/ui/ScrollReveal";

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
      className="bg-white py-16 sm:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6">
        {stats.map(({ icon: Icon, value, label, sub }, index) => {
          const direction: SlideDirection = index % 2 === 0 ? "left" : "right";

          return (
            <SlideIn key={label} direction={direction} delay={index * 0.08}>
              <article className="flex flex-col rounded-sm border border-slate-200/80 bg-[#F9F9FA] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-slate-400 md:p-8">
                <Icon className="mb-5 h-6 w-6 stroke-[1.5] text-slate-800" aria-hidden />
                <p className="font-serif text-3xl font-normal tracking-tight text-slate-900">
                  {value}
                </p>
                <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 font-sans text-xs leading-relaxed tracking-normal text-slate-500 md:text-[13px]">
                  {sub}
                </p>
              </article>
            </SlideIn>
          );
        })}
      </div>
    </section>
  );
}
