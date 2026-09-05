"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const projects = [
  {
    title: "Enterprise Cloud Suite",
    category: "Cloud Infrastructure",
    summary:
      "Scalable multi-tenant infrastructure built for high concurrency and zero-downtime deployments across global regions.",
    link: "#",
    linkText: "VIEW ARCHITECTURE →",
    mockup: "browser",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Platform",
    summary:
      "Secure, high-throughput transaction engine with biometric auth and real-time ledger reconciliation.",
    link: "#",
    linkText: "READ MORE",
    mockup: "mobile",
  },
  {
    title: "Editorial Headless Commerce",
    category: "E-Commerce",
    summary:
      "Composable storefront with edge-cached product discovery and multi-channel fulfillment orchestration.",
    link: "#",
    linkText: "VIEW ARCHITECTURE →",
    mockup: "browser",
  },
  {
    title: "AI Analytics Dashboard",
    category: "Data Intelligence",
    summary:
      "Real-time predictive analytics layer with model governance, anomaly detection, and natural-language querying.",
    link: "#",
    linkText: "READ MORE",
    mockup: "dashboard",
  },
  {
    title: "Supply Chain OS",
    category: "Operations",
    summary:
      "End-to-end logistics orchestration platform with IoT sensor fusion and autonomous exception handling.",
    link: "#",
    linkText: "VIEW ARCHITECTURE →",
    mockup: "dashboard",
  },
];

function MockupBrowser() {
  return (
    <div className="flex h-full w-full flex-col bg-neutral-900 text-neutral-100">
      <div className="flex items-center gap-2 border-b border-neutral-800 px-3 py-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-neutral-700" />
          <div className="h-2 w-2 rounded-full bg-neutral-700" />
          <div className="h-2 w-2 rounded-full bg-neutral-700" />
        </div>
        <div className="h-4 flex-1 rounded bg-neutral-800" />
      </div>
      <div className="flex flex-1">
        <div className="w-12 border-r border-neutral-800 p-2 space-y-2">
          <div className="h-2 w-8 rounded bg-neutral-800" />
          <div className="h-2 w-6 rounded bg-neutral-800" />
          <div className="h-2 w-10 rounded bg-neutral-800" />
        </div>
        <div className="flex-1 p-3 space-y-2">
          <div className="h-3 w-3/4 rounded bg-neutral-800" />
          <div className="h-3 w-1/2 rounded bg-neutral-800" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="aspect-square rounded bg-neutral-800" />
            <div className="aspect-square rounded bg-neutral-800" />
            <div className="aspect-square rounded bg-neutral-800" />
          </div>
          <div className="mt-3 h-16 rounded bg-neutral-800" />
        </div>
      </div>
    </div>
  );
}

function MockupMobile() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-neutral-100 p-4">
      <div className="flex h-full w-full max-w-[160px] flex-col rounded-[2rem] border-4 border-neutral-900 bg-white shadow-xl overflow-hidden">
        <div className="h-5 w-full bg-neutral-900" />
        <div className="flex-1 space-y-2 p-2">
          <div className="h-20 rounded-xl bg-neutral-100" />
          <div className="h-2 w-3/4 rounded bg-neutral-200" />
          <div className="h-2 w-1/2 rounded bg-neutral-200" />
          <div className="mt-3 space-y-2">
            <div className="h-8 rounded-lg bg-neutral-100" />
            <div className="h-8 rounded-lg bg-neutral-100" />
            <div className="h-8 rounded-lg bg-neutral-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupDashboard() {
  return (
    <div className="flex h-full w-full flex-col bg-slate-900 p-3 text-neutral-100">
      <div className="flex items-center justify-between">
        <div className="h-2 w-20 rounded bg-slate-700" />
        <div className="flex gap-1">
          <div className="h-2 w-8 rounded bg-slate-700" />
          <div className="h-2 w-8 rounded bg-slate-700" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded bg-slate-800 p-2">
          <div className="h-2 w-6 rounded bg-slate-700" />
          <div className="mt-1 h-5 w-10 rounded bg-slate-700" />
        </div>
        <div className="rounded bg-slate-800 p-2">
          <div className="h-2 w-6 rounded bg-slate-700" />
          <div className="mt-1 h-5 w-10 rounded bg-slate-700" />
        </div>
        <div className="rounded bg-slate-800 p-2">
          <div className="h-2 w-6 rounded bg-slate-700" />
          <div className="mt-1 h-5 w-10 rounded bg-slate-700" />
        </div>
      </div>
      <div className="mt-3 h-24 rounded bg-slate-800 p-2">
        <div className="flex h-full items-end gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-cyan-500/60"
              style={{ height: `${40 + ((i * 37) % 60)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mockups: Record<string, () => JSX.Element> = {
  browser: MockupBrowser,
  mobile: MockupMobile,
  dashboard: MockupDashboard,
};

export function CortexProjectSlider() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());
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
            <button
              type="button"
              onClick={goPrev}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="min-h-[44px] min-w-[44px] h-10 w-10 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
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
            </button>
            <button
              type="button"
              onClick={goNext}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="min-h-[44px] min-w-[44px] h-10 w-10 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
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
            </button>
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
            const Mockup = mockups[project.mockup];
            return (
              <article
                key={`${project.title}-${index}`}
                ref={(el) => {
                  if (el) itemRefs.current.set(index, el);
                }}
                className="w-[85vw] sm:w-[380px] shrink-0 snap-start"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-none bg-neutral-100">
                  <Mockup />
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
