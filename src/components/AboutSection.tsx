import { Compass, Eye, ShieldCheck, Target } from "lucide-react";
import { SlideIn, type SlideDirection } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    icon: Compass,
    title: "Group Overview",
    body: "Founded on the principle that lasting businesses are built through integrity, SHATHI Group of Companies brings together a diversified portfolio spanning fashion, luxury, building materials, and home living. Each subsidiary operates with shared values and an unwavering focus on long-term value creation.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "To deliver category-defining products and services through brands that customers trust — combining craftsmanship, innovation, and operational excellence across every market we serve.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be recognized as a globally respected Indian conglomerate that elevates standards in every category it enters, while uplifting the communities and partners that share our journey.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate Governance",
    body: "We are guided by an independent board, strict compliance protocols, and transparent reporting. Ethical conduct, accountability, and sustainability are non-negotiables — embedded in every policy and every decision.",
  },
];

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6">
        {pillars.map(({ icon: Icon, title, body }, index) => {
          const direction: SlideDirection =
            index === 0 ? "left" : index === 2 ? "right" : "up";

          return (
            <SlideIn key={title} direction={direction} delay={index * 0.08}>
              <article className="flex flex-col rounded-sm border border-slate-200/80 bg-[#F9F9FA] p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-slate-400 md:p-8">
                <Icon className="mb-5 h-6 w-6 stroke-[1.5] text-slate-800" aria-hidden />
                <h3 className="mb-3 font-serif text-lg font-normal tracking-tight text-slate-900 md:text-xl">
                  {title}
                </h3>
                <p className="font-sans text-xs leading-relaxed tracking-normal text-slate-500 md:text-[13px]">
                  {body}
                </p>
              </article>
            </SlideIn>
          );
        })}
      </div>
    </section>
  );
}
