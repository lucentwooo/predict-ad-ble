"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  selector?: string;
}

export function RevealGroup({
  children,
  className = "",
  stagger = 0.1,
  selector = ".reveal-item",
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll(selector);
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { y: 24, opacity: 0 });

      ScrollTrigger.batch(items, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            stagger,
            duration: 0.7,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [stagger, selector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
