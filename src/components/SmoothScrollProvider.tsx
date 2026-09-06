"use client";

import { useEffect, type ReactNode } from "react";

interface SmoothScrollProviderProps {
  readonly children: ReactNode;
}

/**
 * Enables Lenis only for pointer-driven desktop layouts. Touch devices and
 * reduced-motion users retain the browser's native scrolling behavior.
 */
export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    const desktopPointer = window.matchMedia(
      "(min-width: 768px) and (pointer: fine)",
    );
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let cleanup: (() => void) | undefined;
    let disposed = false;
    let generation = 0;

    const syncScrollMode = () => {
      const currentGeneration = ++generation;
      cleanup?.();
      cleanup = undefined;

      if (!desktopPointer.matches || motionPreference.matches) return;

      void Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
        if (disposed || currentGeneration !== generation) return;

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          autoRaf: false,
          duration: 1.2,
          easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
          syncTouch: false,
        });
        const updateScrollTrigger = () => ScrollTrigger.update();
        const updateLenis = (time: number) => lenis.raf(time * 1000);

        lenis.on("scroll", updateScrollTrigger);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        cleanup = () => {
          lenis.off("scroll", updateScrollTrigger);
          gsap.ticker.remove(updateLenis);
          lenis.destroy();
        };
      });
    };

    syncScrollMode();
    desktopPointer.addEventListener("change", syncScrollMode);
    motionPreference.addEventListener("change", syncScrollMode);

    return () => {
      disposed = true;
      generation += 1;
      desktopPointer.removeEventListener("change", syncScrollMode);
      motionPreference.removeEventListener("change", syncScrollMode);
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
