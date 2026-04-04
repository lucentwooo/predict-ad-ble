"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CinematicSection } from "./CinematicSection";
import { RevealGroup } from "./RevealGroup";
import { PrimaryCta } from "./PrimaryCta";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    label: "Bottleneck Diagnosis",
    title:
      "Bottleneck diagnosis across awareness, angle, proof, offer, landing page match, and fatigue",
    benefit:
      "You stop wasting money fixing the wrong problem and see what is most likely suppressing performance.",
  },
  {
    label: "Market Intelligence",
    title:
      "Competitor ad and landing page research combined with market language analysis",
    benefit:
      "You stop guessing from random screenshots and start testing ideas rooted in real market evidence.",
  },
  {
    label: "Test Prioritization",
    title: "Prioritized testing recommendations",
    benefit:
      "You know what to launch first, what can wait, and what to avoid, so momentum stops dying in planning.",
  },
  {
    label: "Launch-Ready Briefs",
    title:
      "Launch-ready creative briefs, hooks, scripts, and copy directions",
    benefit:
      "Your team can move from strategy to execution fast instead of getting stuck translating insights into assets.",
  },
  {
    label: "Account Memory",
    title: "Persistent account memory",
    benefit:
      "The account gets smarter over time because you keep learning from what worked, what failed, and what to test next.",
  },
] as const;

const processSteps = [
  { n: "01", title: "Diagnose", desc: "what is actually holding Meta back" },
  { n: "02", title: "Prioritize", desc: "which tests to launch first" },
  { n: "03", title: "Generate", desc: "launch-ready briefs and assets" },
  { n: "04", title: "Learn", desc: "from results to get smarter over time" },
] as const;

const comparisons = [
  {
    name: "Agencies",
    desc: "Rent execution but keep the reasoning black-box",
  },
  {
    name: "Spy tools",
    desc: "Help collect ads but do not tell you what to test first",
  },
  {
    name: "Analytics tools",
    desc: "Show patterns but do not fully own the next move",
  },
  {
    name: "Generic AI",
    desc: "Write copy fast but cannot reliably prioritize strategy",
  },
] as const;

const outcomes = [
  "A clear view of what is likely hurting Meta performance",
  "A sharper message for each stage of the funnel",
  "A prioritized list of high-probability tests",
  "Stronger alignment between ads and landing pages",
  "Launch-ready direction your team can act on right away",
] as const;

const faqItems = [
  {
    q: "Is this for me if I am not spending on Meta yet?",
    a: "Probably not. Predict-ad-ble is built for teams already spending on Meta and looking to make the channel more reliable, not for teams starting from zero.",
  },
  {
    q: "Who is this best for?",
    a: "Founder-led or very small software teams with a relatively simple product, a short enough sales cycle to get signal from creative changes, and a strong feeling that Meta should be performing better.",
  },
  {
    q: "Is this an agency?",
    a: "No. Agencies mainly sell execution capacity. Predict-ad-ble is built to give you a repeatable creative decision system, with clear reasoning behind every recommendation.",
  },
  {
    q: "What do I actually get?",
    a: "You get a diagnosis of likely bottlenecks, a prioritized testing strategy, direction for the right awareness-stage messaging, and launch-ready assets or briefs your team can use.",
  },
  {
    q: "What makes this different from ad spy tools or generic AI?",
    a: "Spy tools help you collect research. Generic AI helps you generate text. Predict-ad-ble is built to decide what matters, what to test next, and how to turn that into action.",
  },
  {
    q: "Will this work for enterprise SaaS, devtools, or long sales cycles?",
    a: "Usually no. The best fit is founder-led software with a shorter path to conversion and enough Meta activity to generate usable signal.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-meta">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 font-[family-name:var(--font-instrument-serif)] text-3xl tracking-tight text-foreground md:text-4xl">
      {children}
    </h2>
  );
}

function ProofPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="reveal-item flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-zinc-700/50 bg-zinc-900/30 px-4 text-center text-xs text-zinc-500"
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span>{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function LandingSections() {
  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-30 bg-background">
      {/* Grain overlay */}
      <svg
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.028]"
        aria-hidden
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <main className="flex-1">
        {/* ---- Problem ---- */}
        <CinematicSection className="pt-10 md:pt-14">
          <div className="parallax-orb pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-meta/[0.03] blur-3xl" />
          <div className="parallax-orb pointer-events-none absolute -left-24 bottom-20 h-48 w-48 rounded-full bg-indigo-500/[0.03] blur-3xl" />

          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>The problem</SectionLabel>
            <SectionHeading>
              Every week starts with the same question
            </SectionHeading>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-400">
              <p>You are already spending on Meta.</p>
              <p>But every week still starts with the same question:</p>
              <p className="font-[family-name:var(--font-instrument-serif)] text-2xl italic text-foreground md:text-3xl">
                What should we test next?
              </p>
              <div className="space-y-1.5 text-zinc-400">
                <p>So you save competitor ads.</p>
                <p>You collect screenshots.</p>
                <p>
                  You talk about hooks, UGC, proof, offers, and landing pages.
                </p>
                <p>
                  Then the research gets messy, execution slows down, and results
                  stay inconsistent.
                </p>
              </div>
              <p>
                The problem is usually{" "}
                <strong className="text-foreground">not</strong> that you need
                more ideas.
              </p>
              <p>
                The problem is that you do not have a reliable system for turning
                market evidence and account data into the next high-probability
                test.
              </p>
              <p className="text-foreground">
                That is why Meta feels expensive, noisy, and harder to trust
                than it should.
              </p>
            </div>
          </div>
        </CinematicSection>

        {/* ---- Solution ---- */}
        <CinematicSection>
          <div className="parallax-orb pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meta/[0.04] blur-[100px]" />

          <div className="relative mx-auto w-full max-w-5xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>The system</SectionLabel>
            <SectionHeading>Predict-ad-ble closes the gap</SectionHeading>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              Move from scattered inspiration and reactive testing to a
              clear, evidence-backed plan for what to launch next.
            </p>

            {/* Process flow */}
            <RevealGroup className="mt-12 md:mt-14">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, i) => (
                  <div
                    key={step.n}
                    className="reveal-item premium-depth-card group relative rounded-2xl p-5"
                  >
                    <div className="card-sheen" />
                    <span className="text-xs font-bold tracking-wider text-meta/60">
                      {step.n}
                    </span>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {step.desc}
                    </p>
                    {i < processSteps.length - 1 && (
                      <div className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-surface text-meta lg:flex">
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6h8m0 0L7 3m3 3L7 9"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </RevealGroup>

            {/* "This is not..." callout */}
            <div className="mx-auto mt-12 md:mt-14 max-w-3xl rounded-2xl border-l-2 border-meta/40 premium-depth-card px-6 py-6 md:px-8">
              <div className="card-sheen" />
              <div className="space-y-2 text-[15px] font-medium text-zinc-300">
                <p>This is not another agency retainer.</p>
                <p>It is not another swipe file tool.</p>
                <p>It is not generic AI copy.</p>
              </div>
              <p className="mt-4 text-base text-foreground">
                It is a repeatable Meta growth system built for teams that know
                the channel should be working better.
              </p>
            </div>
          </div>
        </CinematicSection>

        {/* ---- Differentiation ---- */}
        <CinematicSection>
          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>Why this is different</SectionLabel>
            <SectionHeading>
              The missing middle no one else owns
            </SectionHeading>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              Most teams today are stuck choosing between:
            </p>

            <RevealGroup className="mt-8 md:mt-10">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {comparisons.map((c) => (
                  <div
                    key={c.name}
                    className="reveal-item premium-depth-card rounded-2xl p-5"
                  >
                    <div className="card-sheen" />
                    <p className="text-sm font-semibold text-foreground">
                      {c.name}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </RevealGroup>

            <p className="mt-10 text-base leading-relaxed text-zinc-400">
              Predict-ad-ble is built to solve the missing middle:
            </p>
            <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-xl italic text-foreground md:text-2xl">
              What should we test next? Why that? How does it map to funnel
              stage? What assets do we need?
            </p>

            <RevealGroup className="mt-10 md:mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Proof coming soon
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <ProofPlaceholder label="Founder testimonial screenshot" />
                <ProofPlaceholder label="Short case study: Meta improvement" />
                <ProofPlaceholder label="Process: Diagnose → Prioritize → Launch → Learn" />
              </div>
            </RevealGroup>
          </div>
        </CinematicSection>

        {/* ---- Features ---- */}
        <CinematicSection>
          <div className="parallax-orb pointer-events-none absolute inset-0 bg-grid opacity-40" />

          <div className="relative mx-auto w-full max-w-5xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>What you get</SectionLabel>
            <SectionHeading>
              From diagnosis to launch-ready assets
            </SectionHeading>

            <RevealGroup className="mt-10 md:mt-12">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((f, i) => (
                  <div
                    key={f.label}
                    className={`reveal-item premium-depth-card h-full rounded-2xl p-6 ${
                      i === features.length - 1
                        ? "md:col-span-2 md:mx-auto md:max-w-[calc(50%-0.5rem)]"
                        : ""
                    }`}
                  >
                    <div className="card-sheen" />
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-meta/10 text-xs font-bold text-meta ring-1 ring-meta/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-meta/70">
                        {f.label}
                      </span>
                    </div>
                    <p className="mt-4 text-[15px] font-medium leading-snug text-foreground">
                      {f.title}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                      {f.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </RevealGroup>
          </div>
        </CinematicSection>

        {/* ---- Outcomes ---- */}
        <CinematicSection>
          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>The outcome</SectionLabel>
            <SectionHeading>What your team walks away with</SectionHeading>
            <p className="mt-6 text-base text-zinc-400">
              After working through Predict-ad-ble, you should have:
            </p>

            <RevealGroup className="mt-8 md:mt-10">
              <ul className="space-y-4">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="reveal-item flex items-start gap-3.5 text-base text-zinc-300"
                  >
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-meta"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6 10l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealGroup>

            <RevealGroup className="mt-10 md:mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Proof coming soon
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <ProofPlaceholder label="Before / after messaging example" />
                <ProofPlaceholder label="Screenshot of test roadmap" />
                <ProofPlaceholder label="Founder or growth team testimonial" />
              </div>
            </RevealGroup>
          </div>
        </CinematicSection>

        {/* ---- FAQ ---- */}
        <CinematicSection>
          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading>Common questions</SectionHeading>

            <RevealGroup className="mt-8 md:mt-10">
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="reveal-item group premium-depth-card rounded-2xl px-5 py-1 open:ring-1 open:ring-meta/10 transition-all duration-300"
                  >
                    <div className="card-sheen" />
                    <summary className="cursor-pointer list-none py-4 text-[15px] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        <span>{item.q}</span>
                        <span className="shrink-0 text-zinc-600 transition-transform duration-300 group-open:rotate-45">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10 4v12m-6-6h12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </span>
                    </summary>
                    <p className="border-t border-white/[0.04] pb-5 pt-4 text-sm leading-relaxed text-zinc-400">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </RevealGroup>
          </div>
        </CinematicSection>

        {/* ---- Risk reversal ---- */}
        <CinematicSection noExit>
          <div className="parallax-orb pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-meta/[0.025] blur-3xl" />

          <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 lg:px-12 md:py-20">
            <SectionLabel>No strings attached</SectionLabel>
            <SectionHeading>No forced fit</SectionHeading>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-zinc-400">
              <p>We are not here to force a fit.</p>
              <p>
                If Predict-ad-ble is not right for your funnel, stage, or sales
                cycle, we will tell you directly.
              </p>
              <div className="flex flex-col gap-2 pt-2 text-[15px] font-medium text-zinc-300">
                <span>No bloated retainer.</span>
                <span>No vague promises.</span>
                <span>No hard pitch on the call.</span>
              </div>
              <p className="pt-2 text-foreground">
                Just a clear conversation about whether there is a real
                opportunity to improve Meta performance and what the smartest
                next step looks like.
              </p>
            </div>
          </div>
        </CinematicSection>

        {/* ---- Final CTA (no ScrollTrigger — always visible) ---- */}
        <section id="book" className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/4 rounded-full bg-meta/[0.06] blur-[100px]" />

          <div className="relative mx-auto w-full max-w-4xl px-5 py-20 md:px-6 md:py-24">
            <div className="premium-depth-card rounded-[32px] md:rounded-[40px] px-6 py-16 md:px-12 md:py-20 text-center">
              <div className="card-sheen" />
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Stop guessing what to test next
              </h2>
              <div className="mt-10 flex flex-col items-center gap-5">
                <PrimaryCta />
                <p className="max-w-md text-sm text-zinc-500">
                  Takes less than 2 minutes to book. No hard pitch. If it is not
                  a fit, we will say so.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="py-10 text-center">
        <p className="text-xs tracking-wide text-zinc-600">
          Predict-ad-ble — Meta creative strategy for founder-led software
          teams.
        </p>
      </footer>
    </div>
  );
}
