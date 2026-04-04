"use client";

import { PrimaryCta } from "./PrimaryCta";
import { FadeIn } from "./FadeIn";

const trustItems = [
  "Founder-led software teams",
  "Already spending on Meta",
  "Transparent recommendations",
  "Launch-ready next steps",
] as const;

export function Hero() {
  return (
    <section className="border-b border-white/[0.06] pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="lp-shell mx-auto px-5 md:px-8">
        <FadeIn>
          <p className="mb-4 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Meta growth system
          </p>
          <h1 className="max-w-[18ch] font-[family-name:var(--font-instrument-serif)] text-[clamp(2.25rem,6.5vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.02em] text-foreground">
            Turn Meta from a guessing game into a channel you can trust.
          </h1>
          <p className="lp-prose mt-6 text-[17px] leading-[1.65] text-muted md:text-lg">
            Predict-ad-ble helps founder-led teams already spending on Meta
            diagnose underperformance, pick the highest-probability creative
            tests, and ship launch-ready briefs — without a bloated agency
            retainer.
          </p>
          <div className="mt-10">
            <PrimaryCta />
          </div>
        </FadeIn>

        {/* Transformation strip — guesswork → plan */}
        <FadeIn className="mt-14 md:mt-16">
          <p className="mb-4 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            From chaos to clarity
          </p>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6">
            <div className="rounded-lg border border-white/[0.08] bg-[var(--surface)] p-5 md:p-6">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                Before
              </p>
              <p className="mt-2 text-[15px] font-medium text-foreground">
                Screenshots, opinions, endless &ldquo;what if we try…&rdquo;
              </p>
            </div>
            <div className="hidden items-center justify-center md:flex" aria-hidden>
              <svg
                className="h-8 w-8 text-meta"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M8 16h16m0 0l-5-5m5 5l-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="rounded-lg border border-meta/25 bg-meta/[0.06] p-5 md:p-6">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-wider text-meta">
                After
              </p>
              <p className="mt-2 text-[15px] font-medium text-foreground">
                Diagnosis, ranked tests, briefs your team can launch this week.
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-600 md:hidden" aria-hidden>
            →
          </p>
        </FadeIn>

        <FadeIn className="mt-12">
          <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            Built for
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-zinc-400">
            {trustItems.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-meta" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
