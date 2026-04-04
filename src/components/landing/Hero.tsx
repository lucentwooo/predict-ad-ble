"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PrimaryCta } from "./PrimaryCta";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(".hero-reveal");
      gsap.set(items, { y: 28, opacity: 0 });
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.12,
      });

      const mockup = el.querySelector(".hero-mockup");
      if (mockup) {
        gsap.set(mockup, { y: 40, opacity: 0 });
        gsap.to(mockup, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.45,
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-[-30%] h-[min(90vh,720px)] w-[min(140vw,1000px)] -translate-x-1/2 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(8,102,255,0.14) 0%, transparent 58%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 px-6 md:gap-14 md:px-10 lg:grid-cols-12 lg:gap-6">
        {/* Copy column */}
        <div className="lg:col-span-5 lg:pb-4">
          <div className="hero-reveal mb-7">
            <span className="section-eyebrow text-meta">Meta creative strategy</span>
          </div>

          <h1 className="hero-reveal font-[family-name:var(--font-instrument-serif)] text-[clamp(2.1rem,4.2vw,3.35rem)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
            Turn Meta Ads from a{" "}
            <span className="hero-emphasis">guessing game</span> into a channel
            you can trust — finally{" "}
            <span className="whitespace-nowrap">
              predict-
              <span className="italic text-meta">ad</span>
              -ble.
            </span>
          </h1>

          <p className="hero-reveal mt-6 max-w-[var(--prose-width)] text-[15px] leading-[1.65] text-zinc-400 md:text-base">
            Diagnose bottlenecks, prioritize the highest-probability tests, and
            ship launch-ready briefs — without another bloated agency retainer.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryCta />
            <a
              href="#process"
              className="inline-flex items-center justify-center text-sm font-medium text-zinc-500 transition-colors hover:text-foreground"
            >
              See the system
              <svg
                className="ml-1.5 h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M8 3v10m0 0l-4-4m4 4l4-4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Product column */}
        <div className="hero-mockup perspective-mockup lg:col-span-7 lg:-mb-6">
          <div className="mockup-glow mx-auto w-full max-w-xl rounded-2xl border border-white/[0.07] bg-[#090c14] lg:max-w-none">
            <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#0c101c] px-4 py-2.5 md:px-5 md:py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex flex-1 justify-center">
                <span className="rounded-md bg-white/[0.04] px-10 py-1 text-[10px] text-zinc-500 md:text-[11px]">
                  predict-ad-ble.com
                </span>
              </div>
              <div className="w-10 md:w-[52px]" />
            </div>

            <div className="flex flex-wrap gap-1 border-b border-white/[0.04] bg-[#0a0e18] px-4 py-2 md:px-5 md:py-2.5">
              {["Diagnosis", "Concepts", "Briefs", "Memory"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-lg px-3 py-1 text-[10px] md:px-4 md:py-1.5 md:text-[11px] ${
                    i === 0
                      ? "border border-meta/25 bg-meta/10 font-semibold text-blue-300"
                      : "text-zinc-600"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex min-h-[240px] md:min-h-[300px]">
              <div className="flex-1 p-5 md:p-6">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Likely bottlenecks
                </p>
                {[
                  { label: "Weak hook clarity", pct: 82, level: "High" },
                  { label: "Awareness-stage mismatch", pct: 64, level: "Med" },
                  { label: "Undifferentiated proof", pct: 45, level: "Med" },
                  { label: "Offer–LP gap", pct: 33, level: "Low" },
                ].map((b) => (
                  <div key={b.label} className="mb-3">
                    <div className="mb-1 flex items-baseline justify-between gap-2">
                      <span className="text-[11px] text-zinc-300 md:text-[12px]">
                        {b.label}
                      </span>
                      <span
                        className={`text-[9px] font-semibold md:text-[10px] ${
                          b.level === "High"
                            ? "text-blue-400"
                            : b.level === "Med"
                              ? "text-zinc-400"
                              : "text-zinc-600"
                        }`}
                      >
                        {b.level}
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full rounded-full bg-meta/80"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-5 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-meta" />
                    <p className="text-[12px] font-semibold text-white md:text-[13px]">
                      Top recommendation
                    </p>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-400 md:text-[12px]">
                    Social proof overhaul — competitors lean on founder authority.
                    Your ads lack third-party proof for cold traffic.
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    <span className="rounded bg-blue-500/15 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-blue-400">
                      TOF
                    </span>
                    <span className="rounded bg-white/[0.06] px-2 py-0.5 text-[8px] text-zinc-500">
                      Video
                    </span>
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[8px] font-semibold text-emerald-400/90">
                      82% confidence
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden w-[min(200px,28%)] flex-col items-center border-l border-white/[0.04] p-5 md:flex">
                <p className="mb-5 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Priority
                </p>
                <div className="relative flex h-[100px] w-[100px] items-center justify-center">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 120 120"
                    aria-hidden
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="url(#hero-ring-grad)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: 302,
                        strokeDashoffset: 54,
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="hero-ring-grad"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#0866ff" />
                        <stop offset="100%" stopColor="#2eb8ff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="relative z-10 text-2xl font-bold tracking-tight text-white">
                    82
                    <span className="text-sm font-semibold text-blue-400/70">
                      %
                    </span>
                  </span>
                </div>
                <p className="mt-4 text-center text-[9px] text-zinc-500">
                  Evidence-backed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />
    </section>
  );
}
