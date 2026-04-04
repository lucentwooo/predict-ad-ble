"use client";

import type { ReactNode } from "react";
import { ScrollSection } from "./ScrollSection";
import { RevealGroup } from "./RevealGroup";
import { PrimaryCta } from "./PrimaryCta";

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="section-eyebrow mb-4 text-meta">{children}</p>;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    label: "Diagnosis",
    title:
      "Bottleneck diagnosis across awareness, angle, proof, offer, landing page match, and fatigue",
    benefit:
      "You stop wasting money fixing the wrong problem and see what is most likely suppressing performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M21 21l-4.35-4.35"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Intelligence",
    title:
      "Competitor ad and landing page research with market language analysis",
    benefit:
      "You stop guessing from random screenshots and start testing ideas rooted in real market evidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Prioritization",
    title: "Ranked testing recommendations so you know what to launch first",
    benefit:
      "Momentum stops dying in planning — you know what to launch, what can wait, and what to avoid.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M3 6h18M3 12h12M3 18h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Creative briefs",
    title:
      "Launch-ready creative briefs, hooks, scripts, and copy directions",
    benefit:
      "Your team moves from strategy to execution fast instead of getting stuck translating insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 7h8M8 11h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Memory",
    title: "Persistent account memory that gets smarter over time",
    benefit:
      "The account keeps learning from what worked, what failed, and what to test next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

const processSteps = [
  {
    n: "01",
    title: "Diagnose",
    desc: "Find what is actually holding Meta back — root bottlenecks, not surface symptoms.",
  },
  {
    n: "02",
    title: "Prioritize",
    desc: "Rank which tests to launch first based on evidence, not gut feel.",
  },
  {
    n: "03",
    title: "Generate",
    desc: "Briefs, hooks, scripts, and copy your team can ship immediately.",
  },
  {
    n: "04",
    title: "Learn",
    desc: "Feed results back so every test makes the next one smarter.",
  },
] as const;

const comparisons = [
  {
    name: "Agencies",
    desc: "Rent execution but keep the reasoning black-box",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M4 21V8l8-4 8 4v13M9 21v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Spy tools",
    desc: "Collect ads but do not tell you what to test first",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 20l-3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Analytics",
    desc: "Show patterns but do not fully own the next move",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M4 19V5M4 19h16M8 15v-4m4 4V9m4 6v-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Generic AI",
    desc: "Write copy fast but cannot reliably prioritize strategy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <rect
          x="5"
          y="7"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 11h6M12 9v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 5l1 2M16 5l-1 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
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
/*  Bridges                                                            */
/* ------------------------------------------------------------------ */

function BridgeBand() {
  return (
    <div
      className="relative -my-5 h-[min(22vh,200px)] overflow-hidden md:h-[min(24vh,240px)]"
      aria-hidden
    >
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[130%] max-w-[1600px] -translate-x-1/2 -translate-y-1/2">
        <div className="bridge-blob-a absolute left-[8%] top-[20%] h-40 w-40 rounded-full bg-meta/[0.11] blur-[72px] md:h-52 md:w-52" />
        <div className="bridge-blob-b absolute bottom-[5%] right-[5%] h-44 w-44 rounded-full bg-[#2eb8ff]/[0.07] blur-[80px] md:h-56 md:w-56" />
      </div>
      <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </div>
  );
}

function DataFlowBridge() {
  const steps = ["Research", "Diagnosis", "Strategy", "Briefs", "Launch"] as const;
  return (
    <div className="relative py-8 md:py-10" aria-hidden>
      <div className="mx-auto max-w-6xl overflow-x-auto px-6 md:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max items-center justify-center gap-2 pb-1 md:gap-3">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:gap-3">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${
                    i === 2
                      ? "bg-meta shadow-[0_0_12px_rgba(8,102,255,0.35)]"
                      : "bg-white/12"
                  }`}
                />
                <span
                  className={`whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] md:text-[10px] ${
                    i === 2 ? "text-meta" : "text-zinc-600"
                  }`}
                >
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`mb-4 h-px w-8 md:mb-5 md:w-14 ${
                    i < 2
                      ? "bg-gradient-to-r from-white/10 to-meta/25"
                      : i === 2
                        ? "bg-gradient-to-r from-meta/25 to-white/10"
                        : "bg-white/[0.08]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GradientWaveBridge() {
  return (
    <div
      className="relative -my-3 h-[100px] overflow-hidden md:h-[120px]"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="float-slow h-[420px] w-[420px] rounded-full bg-meta/[0.035] blur-[88px]" />
      </div>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 Q360,20 720,60 Q1080,100 1440,60"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function LandingSections() {
  return (
    <div className="relative">
      <main>
        <ScrollSection id="process">
          <div className="mx-auto max-w-6xl px-6 pb-12 pt-12 md:px-10 md:pb-16 md:pt-16">
            <div className="mb-10 max-w-2xl md:mb-12">
              <SectionEyebrow>How it works</SectionEyebrow>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.12]">
                Four steps to predictable growth
              </h2>
            </div>

            <RevealGroup>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <div
                    key={step.n}
                    className="reveal-item glow-card group relative p-6"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-br from-meta/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <span className="number-badge mb-4">{step.n}</span>
                      <p className="mb-1.5 text-[17px] font-semibold text-foreground">
                        {step.title}
                      </p>
                      <p className="text-[13px] leading-relaxed text-zinc-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealGroup>
          </div>
        </ScrollSection>

        <BridgeBand />

        <ScrollSection>
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionEyebrow>The problem</SectionEyebrow>
                <h2 className="mb-6 font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-4xl md:leading-[1.15]">
                  Every week starts with the same question
                </h2>
                <div className="space-y-3 text-[15px] leading-relaxed text-zinc-400">
                  <p>
                    You are already spending on Meta. But every week still starts
                    the same way.
                  </p>
                  <p>
                    You save competitor ads. You collect screenshots. You talk
                    about hooks, UGC, proof, offers, and landing pages.
                  </p>
                  <p>
                    Then the research gets messy, execution slows down, and
                    results stay inconsistent.
                  </p>
                  <p>
                    The problem is usually{" "}
                    <strong className="font-medium text-foreground">not</strong>{" "}
                    that you need more ideas.
                  </p>
                  <p className="font-medium text-foreground">
                    It is that you do not have a system for turning market
                    evidence into the next high-probability test.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-meta/[0.05] to-transparent blur-2xl"
                  aria-hidden
                />
                <div className="relative glow-card p-8 md:p-9">
                  <svg
                    className="mb-4 h-7 w-7 text-meta/35"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="font-[family-name:var(--font-instrument-serif)] text-2xl italic leading-snug text-foreground md:text-[1.75rem]">
                    What should we test next?
                  </p>
                  <p className="mt-4 text-sm text-zinc-500">
                    — Founder-led teams running Meta, every Monday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>

        <DataFlowBridge />

        <ScrollSection>
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
              <SectionEyebrow>The system</SectionEyebrow>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-[2.65rem] md:leading-[1.12]">
                Predict-ad-ble closes the gap between data and decisions
              </h2>
            </div>

            <RevealGroup>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
                <div className="reveal-item glow-card flex flex-col justify-center p-7 md:col-span-2 md:p-9">
                  <p className="mb-3 text-[15px] font-medium leading-relaxed text-zinc-300">
                    Move from scattered inspiration and reactive testing to a
                    clear, evidence-backed plan for what to launch next.
                  </p>
                  <p className="text-[15px] font-semibold text-foreground">
                    A repeatable Meta growth system for teams that know the
                    channel should be working better.
                  </p>
                </div>

                <div className="reveal-item glow-card bg-[#0a0d14] p-7">
                  <p className="section-eyebrow mb-4 !text-zinc-500">
                    This is not
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Another agency retainer",
                      "Another swipe file tool",
                      "Generic AI copy",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[13px] text-zinc-300"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/12 text-red-400/90">
                          <svg
                            className="h-2.5 w-2.5"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M3 3l6 6M9 3l-6 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealGroup>
          </div>
        </ScrollSection>

        <GradientWaveBridge />

        <ScrollSection id="features">
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
            <div className="mb-10 max-w-2xl md:mb-12">
              <SectionEyebrow>What you get</SectionEyebrow>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.12]">
                From diagnosis to launch-ready assets
              </h2>
            </div>

            <RevealGroup>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
                {features.map((f, i) => (
                  <div
                    key={f.label}
                    className={`reveal-item glow-card p-6 md:p-7 ${
                      i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="number-badge text-meta [&>svg]:text-meta">
                        {f.icon}
                      </span>
                      <span className="section-eyebrow !mb-0 !text-[10px] !tracking-[0.2em] text-zinc-500">
                        {f.label}
                      </span>
                    </div>
                    <p className="mb-2 text-[15px] font-medium leading-snug text-foreground">
                      {f.title}
                    </p>
                    <p className="text-[13px] leading-relaxed text-zinc-400">
                      {f.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </RevealGroup>
          </div>
        </ScrollSection>

        <ScrollSection>
          <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-3">
                <SectionEyebrow>Why this is different</SectionEyebrow>
                <h2 className="mb-8 font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-4xl">
                  The missing middle no one else owns
                </h2>

                <RevealGroup>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {comparisons.map((c) => (
                      <div
                        key={c.name}
                        className="reveal-item surface-card flex gap-4 p-5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-zinc-500">
                          {c.icon}
                        </span>
                        <div>
                          <p className="mb-1 text-sm font-semibold text-foreground">
                            {c.name}
                          </p>
                          <p className="text-[13px] leading-relaxed text-zinc-400">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealGroup>
              </div>

              <div className="flex items-center lg:col-span-2">
                <div className="glow-card w-full bg-gradient-to-br from-meta/[0.03] to-transparent p-7 md:p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-meta/30 to-transparent" />
                    <span className="section-eyebrow !mb-0 text-[9px] !text-meta">
                      Predict-ad-ble
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-meta/30 to-transparent" />
                  </div>
                  <p className="text-center font-[family-name:var(--font-instrument-serif)] text-lg italic leading-snug text-foreground md:text-xl">
                    What should we test next? Why? How does it map to funnel
                    stage? What assets do we need?
                  </p>
                  <p className="mt-4 text-center text-[13px] leading-relaxed text-zinc-400">
                    The layer between research and execution — so every test is
                    intentional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection>
          <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionEyebrow>The outcome</SectionEyebrow>
                <h2 className="mb-3 font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-4xl">
                  What your team walks away with
                </h2>
                <p className="text-[15px] leading-relaxed text-zinc-400">
                  After working through Predict-ad-ble, you should have:
                </p>
              </div>

              <RevealGroup>
                <ul className="space-y-3">
                  {outcomes.map((item, i) => (
                    <li
                      key={item}
                      className="reveal-item group flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-meta/20 bg-meta/10 text-[11px] font-semibold text-meta transition-colors group-hover:border-meta/35 group-hover:bg-meta/[0.14]">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-[15px] leading-relaxed text-zinc-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </RevealGroup>
            </div>
          </div>
        </ScrollSection>

        <BridgeBand />

        <ScrollSection>
          <div className="accent-band relative overflow-hidden py-16 md:py-20">
            <div
              className="pointer-events-none absolute left-[8%] top-1/2 h-[min(50vw,420px)] w-[min(50vw,420px)] -translate-y-1/2 rounded-full bg-meta/[0.05] blur-[100px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[6%] top-1/2 h-[min(45vw,360px)] w-[min(45vw,360px)] -translate-y-1/2 rounded-full bg-[#2eb8ff]/[0.04] blur-[90px]"
              aria-hidden
            />

            <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.12] tracking-tight text-foreground">
                Stop guessing.
                <br />
                <span className="accent-line">Start compounding.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-400 md:text-base">
                Book a free Meta diagnosis call. No hard pitch. If it is not a
                fit, we will tell you directly.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryCta />
              </div>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="faq">
          <div className="mx-auto max-w-2xl px-6 py-14 md:px-10 md:py-16">
            <div className="mb-10 text-center md:mb-11">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-[2.65rem]">
                Questions we hear a lot
              </h2>
            </div>

            <RevealGroup>
              <div className="space-y-2">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="reveal-item surface-card open:bg-white/[0.015]"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 text-left text-[15px] font-medium text-foreground md:px-6">
                      <span className="flex items-start justify-between gap-4">
                        <span>{item.q}</span>
                        <span className="faq-icon mt-0.5 shrink-0 text-zinc-500">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden
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
                    <p className="border-t border-white/[0.04] px-5 pb-4 pt-3 text-[13px] leading-relaxed text-zinc-400 md:px-6">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </RevealGroup>
          </div>
        </ScrollSection>

        <ScrollSection>
          <div className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
            <div className="glow-card grid grid-cols-1 items-center gap-8 p-7 md:grid-cols-2 md:gap-10 md:p-10">
              <div>
                <SectionEyebrow>No strings attached</SectionEyebrow>
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-4xl">
                  No forced fit
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-[15px] leading-relaxed text-zinc-400">
                  If Predict-ad-ble is not right for your funnel, stage, or
                  sales cycle, we will tell you directly.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "No bloated retainer",
                    "No vague promises",
                    "No hard pitch",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[12px] text-zinc-300"
                    >
                      <svg
                        className="h-3 w-3 text-emerald-400/90"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3 7l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-[15px] text-foreground">
                  Just a clear conversation about whether Meta can move faster
                  for you.
                </p>
              </div>
            </div>
          </div>
        </ScrollSection>

        <section id="book" className="relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
            <div className="glow-card relative overflow-hidden rounded-[24px] px-8 py-12 text-center md:rounded-[32px] md:px-14 md:py-14">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-meta/[0.04] via-transparent to-[#2eb8ff]/[0.03]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal tracking-tight text-foreground md:text-4xl">
                  Stop guessing what to test next
                </h2>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <PrimaryCta />
                  <p className="max-w-sm text-[13px] text-zinc-500">
                    Takes less than two minutes to book. If it is not a fit, we
                    will say so.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.04] py-9">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
          <p className="text-sm font-semibold tracking-tight text-zinc-500">
            Predict-
            <span className="font-[family-name:var(--font-instrument-serif)] italic text-zinc-400">
              ad
            </span>
            -ble
          </p>
          <p className="section-eyebrow !mb-0 text-[10px] !text-zinc-600">
            Meta creative strategy for founder-led software teams
          </p>
        </div>
      </footer>
    </div>
  );
}
