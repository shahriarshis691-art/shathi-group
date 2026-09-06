"use client";

import { useEffect, type ReactNode } from "react";
import { smoothScrollEvent, type SmoothScrollRequest } from "@/lib/smooth-scroll";

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

      void import("lenis").then(({ default: Lenis }) => {
        if (disposed || currentGeneration !== generation) return;

        const lenis = new Lenis({
          autoRaf: false,
          duration: 1.2,
          easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
          syncTouch: false,
          anchors: { offset: -96, duration: 1.1 },
          overscroll: false,
        });
        let animationFrame = 0;

        const raf = (time: number) => {
          lenis.raf(time);
          animationFrame = window.requestAnimationFrame(raf);
        };
        const handleScrollRequest = (event: Event) => {
          const { target, offset = -96, duration = 1.1 } = (
            event as CustomEvent<SmoothScrollRequest>
          ).detail;
          lenis.scrollTo(target, { offset, duration });
        };

        document.documentElement.dataset.smoothScroll = "lenis";
        animationFrame = window.requestAnimationFrame(raf);
        window.addEventListener(smoothScrollEvent, handleScrollRequest);

        cleanup = () => {
          window.cancelAnimationFrame(animationFrame);
          window.removeEventListener(smoothScrollEvent, handleScrollRequest);
          delete document.documentElement.dataset.smoothScroll;
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
