"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type PerspectiveCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function PerspectiveCard({
  children,
  className = "",
}: PerspectiveCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { damping: 20, stiffness: 200 });
  const springY = useSpring(rotateY, { damping: 20, stiffness: 200 });

  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue = ((x - centerX) / centerX) * 8;
    const rotateXValue = -((y - centerY) / centerY) * 8;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    setPointer({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setPointer({ x: 50, y: 50 });
  }

  const radialGradientAroundPointer = `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%)`;

  return (
    <motion.div
      className={`relative [transform-style:preserve-3d] will-change-transform ${className}`}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: radialGradientAroundPointer,
          opacity: pointer.x === 50 && pointer.y === 50 ? 0 : 0.35,
        }}
      />
    </motion.div>
  );
}
