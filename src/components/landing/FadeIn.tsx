"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} motion-safe:transition-[opacity,transform] motion-safe:duration-[650ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
