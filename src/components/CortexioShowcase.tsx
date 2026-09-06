"use client";

import { useEffect, useRef } from "react";

export default function CortexioShowcase() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;
      let scrollAmount = 0;
      const step = 1;
      const speed = 50; // milliseconds per step

      const scrollMarquee = () => {
        scrollAmount -= step;
        if (scrollAmount < -marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      };

      const interval = setInterval(scrollMarquee, speed);
      return () => clearInterval(interval);
    }
  }, []);

  const offers = [
    "LIFETIME FREE CUSTOMIZED OFFER WITH FULL ACCESS",
    "ZERO MONTHLY CHARGES — FOREVER",
    "COMPLIMENTARY MOBILE ANDROID APK INCLUDED WITH EVERY WEBSITE",
    "ENTERPRISE-GRADE SPEED & HIGH-CONVERTING ARCHITECTURE",
  ];

  return (
    <section className="relative bg-[#070708] overflow-hidden">
      {/* Radial gold glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Animated Infinite Marquee Ticker */}
      <div className="relative overflow-hidden h-12 bg-[#070708]/50">
        <div
          ref={marqueeRef}
          className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a880] whitespace-nowrap"
        >
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center gap-6">
              <span>{offer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}