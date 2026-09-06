"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Enterprise Cloud Suite",
    category: "Cloud Infrastructure",
    summary:
      "Scalable multi-tenant infrastructure built for high concurrency and zero-downtime deployments across global regions.",
    link: "#",
    linkText: "VIEW ARCHITECTURE →",
    image: "/cortex/projects/enterprise-cloud-suite.webp",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Platform",
    summary:
      "Secure, high-throughput transaction engine with biometric auth and real-time ledger reconciliation.",
    link: "#",
    linkText: "READ MORE",
    image: "/cortex/projects/fintech-mobile-app.webp",
  },
  {
    title: "Editorial Headless Commerce",
    category: "E-Commerce",
    summary:
      "Composable storefront with edge-cached product discovery and multi-channel fulfillment orchestration.",
    link: "#",
    linkText: "VIEW ARCHITECTURE →",
    image: "/cortex/projects/editorial-commerce.webp",
  },
  {
    title: "AI Analytics Dashboard",
    category: "Data Intelligence",
    summary:
      "Real-time predictive analytics layer with model governance, anomaly detection, and natural-language querying.",
    link: "#",
    linkText: "READ MORE",
    image: "/cortex/projects/ai-analytics.webp",
  },
];

export function CortexProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLElement>>(new Map());
  const isUserInteracting = useRef(false);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX = useRef(0);
  const [cardStep, setCardStep] = useState(404);

  const totalItems = projects.length;
  const extendedProjects = [
    projects[projects.length - 1],
    ...projects,
    projects[0],
  ];

  const calculateStep = useCallback(() => {
    if (typeof window === 'undefined') return 404;
    const isMobile = window.innerWidth < 640;
    const cardWidth = isMobile ? window.innerWidth * 0.85 : 380;
    const gap = isMobile ? 16 : 24;
    return cardWidth + gap;
  }, []);

  useEffect(() => {
    setCardStep(calculateStep());

    const handleResize = () => {
      setCardStep(calculateStep());
      const container = containerRef.current;
      if (container) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = activeIndex * calculateStep();
        container.style.scrollBehavior = 'smooth';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateStep, activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft = 1 * cardStep;
  }, [cardStep]);

  const scrollToIndex = useCallback((index: number, smooth = true) => {
    const container = containerRef.current;
    const el = itemRefs.current.get(index);
    if (!container || !el) return;

    if (smooth) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    } else {
      el.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'start' });
    }
  }, []);

  const handleInfiniteJump = useCallback(() => {
    const container = containerRef.current;
    if (!container || isUserInteracting.current) return;

    const scrollLeft = container.scrollLeft;
    const tolerance = 10;

    if (Math.abs(scrollLeft - ((totalItems + 1) * cardStep)) < tolerance) {
      container.style.scrollBehavior = 'auto';
      const el = itemRefs.current.get(1);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'start' });
    } else if (Math.abs(scrollLeft - (0 * cardStep)) < tolerance) {
      container.style.scrollBehavior = 'auto';
      const el = itemRefs.current.get(totalItems);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'start' });
    }
  }, [cardStep, totalItems]);

  useEffect(() => {
    const timeout = setTimeout(handleInfiniteJump, 600);
    return () => clearTimeout(timeout);
  }, [activeIndex, handleInfiniteJump]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        scrollToIndex(next, true);
        return next;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, scrollToIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      const next = prev - 1;
      scrollToIndex(next, true);
      return next;
    });
  }, [scrollToIndex]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      const next = prev + 1;
      scrollToIndex(next, true);
      return next;
    });
  }, [scrollToIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isUserInteracting.current = true;
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 40;

    container.style.scrollBehavior = 'smooth';

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setActiveIndex((prev) => {
          const next = prev + 1;
          scrollToIndex(next, true);
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = prev - 1;
          scrollToIndex(next, true);
          return next;
        });
      }
    }

    interactionTimeoutRef.current = setTimeout(() => {
      isUserInteracting.current = false;
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
              Selected Work & Software Deployments
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-normal text-neutral-900 tracking-tight">
              What we do
            </h2>
          </div>
<div className="flex items-center gap-2">
             <Button
               variant="secondary"
               onClick={goPrev}
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
               aria-label="Previous project"
             >
               <svg
                 width="16"
                 height="16"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <path d="M19 12H5M12 19l-7-7 7-7" />
               </svg>
             </Button>
             <Button
               variant="secondary"
               onClick={goNext}
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
               aria-label="Next project"
             >
               <svg
                 width="16"
                 height="16"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
               >
                 <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
             </Button>
           </div>
        </div>

        <div
          ref={containerRef}
          className="mt-10 flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {extendedProjects.map((project, index) => {
            return (
              <article
                key={`${project.title}-${index}`}
                ref={(el) => {
                  if (el) itemRefs.current.set(index, el);
                }}
                className="w-[85vw] sm:w-[380px] shrink-0 snap-start"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-neutral-200/60">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface mockup`}
                    fill
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pt-6 pb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                  <a
                    href={project.link}
                    className="inline-block text-xs uppercase tracking-widest font-mono font-bold text-neutral-900 mt-4 underline underline-offset-4 hover:opacity-70 transition-opacity min-h-[44px] flex items-center"
                  >
                    {project.linkText}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
