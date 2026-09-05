"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const modelImage = "/shis/shis-editorial-model.png";

/**
 * A pinned editorial lookbook with GPU-only Y transforms. The GSAP context and
 * matchMedia cleanup ensure triggers are removed during client-side navigation.
 */
export function ShisLookbook() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const matchMedia = gsap.matchMedia();
    const context = gsap.context(() => {
      matchMedia.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const select = gsap.utils.selector(section);
          const layers = [
            // Lower travel values read as distant, slower planes.
            { selector: "[data-shis-layer='ambient']", travel: 8 },
            { selector: "[data-shis-layer='background']", travel: 14 },
            { selector: "[data-shis-layer='headline']", travel: 24 },
            // Increase these values for a stronger foreground parallax effect.
            { selector: "[data-shis-layer='midground']", travel: 32 },
            { selector: "[data-shis-layer='foreground']", travel: 46 },
            { selector: "[data-shis-layer='caption']", travel: 36 },
          ];

          layers.forEach(({ selector, travel }) => {
            gsap.fromTo(
              select(selector),
              { yPercent: -travel / 2, force3D: true },
              {
                yPercent: travel / 2,
                ease: "none",
                force3D: true,
                scrollTrigger: {
                  trigger: section,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 0.65,
                  invalidateOnRefresh: true,
                },
              }
            );
          });

          gsap.fromTo(
            select("[data-shis-image]"),
            { scale: 1.03, force3D: true },
            {
              scale: 1.1,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.65,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      );
    }, section);

    return () => {
      matchMedia.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="shis-lookbook-heading"
      className="relative bg-[#151515] text-neutral-100 md:h-[185vh]"
    >
      <div className="relative min-h-[820px] overflow-hidden border-y border-white/10 sm:min-h-[960px] md:sticky md:top-0 md:h-screen md:min-h-0">
        <div
          aria-hidden="true"
          data-shis-layer="ambient"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_20%_76%,rgba(255,255,255,0.07),transparent_26%)] will-change-transform transform-gpu"
        />
        <div
          aria-hidden="true"
          data-shis-layer="background"
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:4rem_4rem] will-change-transform transform-gpu"
        />

        <p className="absolute left-6 top-8 z-20 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-400 sm:left-10 md:left-14 md:top-12">
          SHIS Fashion / Editorial Study
        </p>

        <h2
          id="shis-lookbook-heading"
          data-shis-layer="headline"
          className="pointer-events-none absolute left-6 top-[14%] z-20 max-w-[10ch] font-serif text-6xl font-normal leading-[0.76] tracking-[-0.07em] text-neutral-100 sm:left-10 sm:text-8xl md:left-[8vw] md:top-[23%] md:max-w-[9ch] md:text-[clamp(6rem,11vw,12rem)] will-change-transform transform-gpu"
        >
          <span className="block">THE</span>
          <span className="block pl-[0.28em]">LOOKBOOK</span>
          <span className="block text-neutral-500">SEASON 02</span>
        </h2>

        <figure
          data-shis-layer="background"
          className="absolute right-[6%] top-[12%] z-10 aspect-[4/5] w-[47vw] max-w-[23rem] overflow-hidden border border-white/15 bg-neutral-800 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:right-[10%] sm:w-[38vw] md:right-[9%] md:top-[8%] md:w-[22vw] will-change-transform transform-gpu"
        >
          <Image
            src={modelImage}
            alt="SHIS Fashion lookbook model in an acid-washed outer layer"
            fill
            sizes="(min-width: 768px) 22vw, 47vw"
            className="object-cover object-[67%_center]"
            data-shis-image
          />
        </figure>

        <figure
          data-shis-layer="midground"
          className="absolute bottom-[12%] left-[7%] z-30 aspect-[3/4] w-[38vw] max-w-[19rem] overflow-hidden border border-white/20 bg-neutral-800 shadow-[0_32px_80px_rgba(0,0,0,0.52)] sm:left-[12%] sm:w-[31vw] md:bottom-[13%] md:left-[20%] md:w-[18vw] will-change-transform transform-gpu"
        >
          <Image
            src={modelImage}
            alt="SHIS Fashion layered hoodie and denim editorial detail"
            fill
            sizes="(min-width: 768px) 18vw, 38vw"
            className="object-cover object-[57%_18%]"
            data-shis-image
          />
        </figure>

        <figure
          data-shis-layer="foreground"
          className="absolute bottom-[7%] right-[14%] z-40 aspect-[4/5] w-[31vw] max-w-[15rem] overflow-hidden border border-white/30 bg-neutral-800 shadow-[0_34px_90px_rgba(0,0,0,0.58)] sm:right-[18%] sm:w-[26vw] md:bottom-[10%] md:right-[28%] md:w-[14vw] will-change-transform transform-gpu"
        >
          <Image
            src={modelImage}
            alt="SHIS Fashion utility-pant texture and silhouette"
            fill
            sizes="(min-width: 768px) 14vw, 31vw"
            className="object-cover object-[75%_78%]"
            data-shis-image
          />
        </figure>

        <div
          data-shis-layer="caption"
          className="absolute bottom-7 right-6 z-50 max-w-[15rem] border-t border-white/40 pt-3 font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.18em] text-neutral-300 sm:bottom-10 sm:right-10 md:bottom-12 md:right-[8vw] will-change-transform transform-gpu"
        >
          02 / A study in volume, washed texture, and quiet utility.
        </div>

        <div className="absolute bottom-7 left-6 z-50 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:bottom-10 sm:left-10 md:bottom-12 md:left-14">
          Contemporary Menswear
        </div>
      </div>
    </section>
  );
}
