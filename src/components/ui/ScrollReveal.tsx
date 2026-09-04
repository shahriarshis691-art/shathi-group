"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type SlideDirection = "left" | "right" | "up";

interface SlideInProps {
  children: ReactNode;
  direction?: SlideDirection;
  delay?: number;
  distance?: number;
  className?: string;
}

const editorialEase = [0.22, 1, 0.36, 1] as const;

/**
 * Reveals content as it enters the viewport, returning it to its origin state
 * when it leaves so reverse scrolling feels as deliberate as forward scrolling.
 */
export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  distance = 64,
  className,
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();
  const verticalDistance = Math.round(distance * (2 / 3));
  const initialOffset = shouldReduceMotion
    ? { x: 0, y: 0, opacity: 1 }
    : {
        x: direction === "left" ? -distance : direction === "right" ? distance : 0,
        y: direction === "up" ? verticalDistance : 0,
        opacity: 0,
      };

  return (
    <motion.div
      className={className}
      initial={initialOffset}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.85, ease: editorialEase, delay }
      }
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
