"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
  type RefObject,
} from "react";

export type ParallaxDepth = "background" | "midground" | "foreground";

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  planeClassName?: string;
  contentClassName?: string;
  depth?: ParallaxDepth;
  target?: RefObject<HTMLElement | null>;
  yRange?: [number, number];
  scaleRange?: [number, number];
  interactive?: boolean;
  interactiveDistance?: number;
}

const depthRanges: Record<ParallaxDepth, [number, number]> = {
  background: [-40, 40],
  midground: [-72, 72],
  foreground: [-108, 108],
};

/**
 * Links a visual plane to the scroll progress of its own element or a parent
 * section. Desktop pointer movement adds a small, spring-smoothed optical shift.
 */
export function ParallaxContainer({
  children,
  className,
  planeClassName,
  contentClassName,
  depth = "foreground",
  target,
  yRange,
  scaleRange = [1, 1],
  interactive = false,
  interactiveDistance = 12,
}: ParallaxContainerProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const [isCompactViewport, setIsCompactViewport] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const scrollTarget = target ?? localRef;
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"],
  });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { damping: 22, stiffness: 220, mass: 0.4 });
  const springY = useSpring(pointerY, { damping: 22, stiffness: 220, mass: 0.4 });
  const isMotionDisabled = Boolean(shouldReduceMotion) || isCompactViewport;
  const planeRange = yRange ?? depthRanges[depth];
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMotionDisabled ? [0, 0] : planeRange
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMotionDisabled ? [1, 1] : scaleRange
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsCompactViewport(media.matches);

    updateViewport();
    media.addEventListener("change", updateViewport);
    return () => media.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!interactive || !isMotionDisabled) return;
    pointerX.set(0);
    pointerY.set(0);
  }, [interactive, isMotionDisabled, pointerX, pointerY]);

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!interactive || isMotionDisabled) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(relativeX * interactiveDistance * 2);
    pointerY.set(relativeY * interactiveDistance * 2);
  }

  return (
    <div
      ref={localRef}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerUp={resetPointer}
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      <motion.div
        className={planeClassName}
        style={{ y, scale, willChange: "transform" }}
      >
        <motion.div
          className={contentClassName}
          style={{ x: springX, y: springY, willChange: "transform" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
