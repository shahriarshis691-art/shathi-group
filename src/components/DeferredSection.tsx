"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  className: string;
}

/**
 * Keeps below-the-fold chunks out of the initial mobile request while reserving
 * their layout footprint. The generous margin starts loading before a section
 * actually enters view, avoiding a visible loading boundary during scrolling.
 */
export function DeferredSection({ children, className }: DeferredSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsReady(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className} aria-busy={!isReady}>
      {isReady ? children : null}
    </div>
  );
}
