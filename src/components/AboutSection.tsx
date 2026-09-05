import { Compass, Eye, ShieldCheck, Target } from "lucide-react";
import { SlideIn, type SlideDirection } from "@/components/ui/ScrollReveal";
import { ParallaxContainer } from "@/components/ui/ParallaxContainer";

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
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:gap-8">
        {pillars.map(({ icon: Icon, title, body }, index) => {
          const direction: SlideDirection =
            index === 0 ? "left" : index === 2 ? "right" : "up";

          return (
            <SlideIn key={title} direction={direction} delay={index * 0.08}>
              <ParallaxContainer depth="foreground" yRange={[28, -34]}>
                <article className="flex flex-col rounded-sm border border-neutral-200 bg-white p-7 transition-colors duration-300 hover:border-neutral-900 md:p-8">
                  <Icon className="mb-5 h-6 w-6 stroke-[1.5] text-neutral-900" aria-hidden />
                  <h3 className="mb-3 font-serif text-lg font-normal tracking-tight text-neutral-950 md:text-xl">
                    {title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed tracking-normal text-neutral-600 md:text-[13px]">
                    {body}
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
