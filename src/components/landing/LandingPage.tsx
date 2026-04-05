import type { ReactNode } from "react";
import { PrimaryCta } from "./PrimaryCta";
import { ScrollReveal } from "./ScrollReveal";
import { AdDiagnosisMockup } from "./mockups/AdDiagnosisMockup";
import { CompetitorIntelMockup } from "./mockups/CompetitorIntelMockup";
import { FunnelRoadmapMockup } from "./mockups/FunnelRoadmapMockup";
import { ResultsDashMockup } from "./mockups/ResultsDashMockup";

const shell = "mx-auto w-full max-w-5xl px-5 sm:px-8";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const marketQuotes = [
  {
    text: "Results that are wildly inconsistent week to week.",
  },
  {
    text: "Your ad promises one thing, but your landing page delivers something else.",
  },
  {
    text: "I spent more time learning Meta Ads than building my SaaS and I still don\u2019t know what I\u2019m doing.",
  },
  {
    text: "Ad creative and landing pages are really important. That was the big unlock for me.",
  },
] as const;

const faq = [
  {
    q: "Is this for companies that are not spending on Meta yet?",
    a: "No. Predict-ad-ble is for teams already spending on Meta and trying to make the channel more reliable.",
  },
  {
    q: "Who is the best fit?",
    a: "Founder-led or very small software teams with a relatively simple offer, a short enough sales cycle to get signal from creative changes, and a strong feeling that Meta should be performing better than it is now.",
  },
  {
    q: "Is this just another AI ad writer?",
    a: "No. Generic AI can produce copy. Predict-ad-ble is built to diagnose what is wrong, choose what matters, and turn that into a smarter testing plan.",
  },
  {
    q: "Is this an agency?",
    a: "No. Agencies mostly rent you execution. Predict-ad-ble is designed to give you a repeatable creative decision system you can actually understand and use.",
  },
  {
    q: "Will this work for enterprise SaaS or long sales cycles?",
    a: "Usually not. It is a better fit for simpler software offers with a shorter path from click to meaningful signal.",
  },
  {
    q: "Why focus so much on creative and message alignment?",
    a: "Because both public operator conversations and platform-level tool positioning keep pointing to the same thing: creative decisions, landing-page alignment, and understanding what is actually driving performance are major sources of wasted spend and confusion.",
  },
] as const;

const solutionCapabilities = [
  {
    title: "Diagnose what is actually broken",
    description:
      "See where performance is being dragged down by the wrong angle, the wrong awareness stage, weak proof, weak offer framing, message-to-page mismatch, creative fatigue, or poor concept diversity.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    accent: "from-red-500/20 to-red-500/5 text-red-400 border-red-500/20",
  },
  {
    title: "Prioritize the best next tests",
    description:
      "Turn competitor research, public market language, funnel-stage logic, and your own account context into a ranked testing plan.",
    icon: "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12",
    accent: "from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/20",
  },
  {
    title: "Turn strategy into launch-ready assets",
    description:
      "Get clear briefs, hooks, concepts, copy directions, and landing-page angle recommendations your team can actually use.",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    accent: "from-meta/20 to-meta/5 text-meta border-meta/20",
  },
  {
    title: "Compound learning over time",
    description:
      "Stop resetting every week. Keep track of what was tested, what worked, what failed, and what the account should do next.",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
    accent: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/20",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Shared components                                                  */
/* ------------------------------------------------------------------ */

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.22em] text-meta">
      {children}
    </p>
  );
}

function StoryScene({
  kicker,
  heading,
  body,
  mockup,
  flip,
}: {
  kicker: string;
  heading: string;
  body: string;
  mockup: ReactNode;
  flip?: boolean;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div
        className={`${shell} grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 ${
          flip ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Text */}
        <ScrollReveal direction="up" className={flip ? "lg:[direction:ltr]" : ""}>
          <Kicker>{kicker}</Kicker>
          <h2 className="max-w-[22ch] font-[family-name:var(--font-instrument-serif)] text-2xl font-normal leading-tight tracking-tight text-foreground sm:text-[2rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-[38ch] text-[15px] leading-[1.7] text-zinc-400">
            {body}
          </p>
        </ScrollReveal>

        {/* Mockup */}
        <ScrollReveal
          direction={flip ? "left" : "right"}
          delay={0.15}
          duration={0.9}
          distance={48}
          className={flip ? "lg:[direction:ltr]" : ""}
        >
          {mockup}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function LandingPage() {
  return (
    <article className="relative text-[15px] leading-relaxed text-zinc-300 md:text-base md:leading-relaxed">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <header className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
        {/* Atmospheric layers */}
        <div
          className="pointer-events-none absolute -left-1/4 top-0 h-[min(70vh,520px)] w-[min(140vw,900px)] rounded-full bg-meta/[0.14] blur-[100px] lp-orb"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#1e3a5f]/30 blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
          aria-hidden
        />

        <div
          className={`${shell} relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16`}
        >
          {/* Left: copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-[11px] font-semibold tracking-wide text-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-meta/40 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-meta" />
              </span>
              Predict-
              <span className="font-[family-name:var(--font-instrument-serif)] italic text-meta">
                ad
              </span>
              -ble
            </p>

            <h1 className="mt-8 font-[family-name:var(--font-instrument-serif)] text-[clamp(1.85rem,5.5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.03em]">
              <span className="text-foreground">Turn Meta into a </span>
              <span className="headline-shine">growth channel</span>
              <span className="text-foreground"> you can trust</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-[1.7] text-zinc-400 sm:mt-8 sm:text-[17px]">
              Predict-ad-ble helps founder-led software teams diagnose what is
              hurting performance, prioritize the right creative and messaging
              tests, and launch stronger ads{" "}
              <span className="text-zinc-200">without the usual guesswork.</span>
            </p>

            <div className="mt-9 sm:mt-10">
              <PrimaryCta />
            </div>
            <p className="mt-5 text-sm text-zinc-500">
              Built for founder-led software teams already spending on Meta.
            </p>
          </div>

          {/* Right: hero mockup */}
          <ScrollReveal
            direction="up"
            delay={0.25}
            duration={1}
            distance={40}
            className="hidden lg:block"
          >
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-8 rounded-3xl bg-meta/[0.06] blur-[40px]"
                aria-hidden
              />
              <AdDiagnosisMockup className="relative rotate-1" />
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* ============================================================ */}
      {/*  SOCIAL PROOF BAR                                            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-y border-meta/20 bg-gradient-to-b from-[#0a1628]/80 via-[#0a0a0c] to-[#0a0a0c] py-16 sm:py-24">
        {/* Background glows */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-meta/[0.06] blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/4 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-[#E1306C]/[0.04] blur-[80px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-meta/[0.05] blur-[80px]"
          aria-hidden
        />
        <div className={`${shell} relative`}>
          <div className="text-center">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.25em] text-meta">
              Proven results
            </p>
            <p className="mt-5 font-[family-name:var(--font-instrument-serif)] text-[clamp(3rem,8vw,5.5rem)] font-normal leading-none tracking-tight headline-shine">
              $1M+
            </p>
            <p className="mt-4 text-base text-zinc-400 sm:text-lg">
              in revenue generated for clients across Meta platforms
            </p>
          </div>

          {/* Platform logos */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-8 sm:gap-12">
            {/* Meta logo */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 36 36" className="h-9 w-9 sm:h-11 sm:w-11" aria-label="Meta">
                <defs>
                  <linearGradient id="meta-g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0668E1" />
                    <stop offset="100%" stopColor="#0866FF" />
                  </linearGradient>
                </defs>
                <path
                  d="M7.5 18c0-3.7 1.2-6.8 2.8-8.7C11.8 7.5 13.7 6.5 15.5 6.5c1.3 0 2.7.7 4 2.2l1.5 1.9 1.5-1.9c1.3-1.5 2.7-2.2 4-2.2 1.8 0 3.7 1 5.2 2.8 1.6 1.9 2.8 5 2.8 8.7 0 3.7-1.2 6.8-2.8 8.7-1.5 1.8-3.4 2.8-5.2 2.8-1.3 0-2.7-.7-4-2.2L21 25.4l-1.5 1.9c-1.3 1.5-2.7 2.2-4 2.2-1.8 0-3.7-1-5.2-2.8C8.7 24.8 7.5 21.7 7.5 18z"
                  fill="url(#meta-g)"
                />
                <path
                  d="M15.5 9.5c-1 0-2.2.7-3.2 2-1.2 1.5-2.1 3.8-2.1 6.5s.9 5 2.1 6.5c1 1.3 2.2 2 3.2 2 .7 0 1.5-.4 2.5-1.5l2-2.5c.7-.9 1.1-1.4 1.5-2.2.3-.7.5-1.4.5-2.3s-.2-1.6-.5-2.3c-.4-.8-.8-1.3-1.5-2.2l-2-2.5c-1-1.1-1.8-1.5-2.5-1.5zm11 0c-.7 0-1.5.4-2.5 1.5l-2 2.5c-.7.9-1.1 1.4-1.5 2.2-.3.7-.5 1.4-.5 2.3s.2 1.6.5 2.3c.4.8.8 1.3 1.5 2.2l2 2.5c1 1.1 1.8 1.5 2.5 1.5 1 0 2.2-.7 3.2-2 1.2-1.5 2.1-3.8 2.1-6.5s-.9-5-2.1-6.5c-1-1.3-2.2-2-3.2-2z"
                  fill="#0a0a0c"
                />
                <path
                  d="M15.5 9.5c-1 0-2.2.7-3.2 2-1.2 1.5-2.1 3.8-2.1 6.5s.9 5 2.1 6.5c1 1.3 2.2 2 3.2 2 .7 0 1.5-.4 2.5-1.5l2-2.5c.7-.9 1.1-1.4 1.5-2.2.3-.7.5-1.4.5-2.3s-.2-1.6-.5-2.3c-.4-.8-.8-1.3-1.5-2.2l-2-2.5c-1-1.1-1.8-1.5-2.5-1.5zm11 0c-.7 0-1.5.4-2.5 1.5l-2 2.5c-.7.9-1.1 1.4-1.5 2.2-.3.7-.5 1.4-.5 2.3s.2 1.6.5 2.3c.4.8.8 1.3 1.5 2.2l2 2.5c1 1.1 1.8 1.5 2.5 1.5 1 0 2.2-.7 3.2-2 1.2-1.5 2.1-3.8 2.1-6.5s-.9-5-2.1-6.5c-1-1.3-2.2-2-3.2-2z"
                  fill="url(#meta-g)"
                  opacity="0.5"
                />
              </svg>
              <span className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-wider text-zinc-500">
                Meta
              </span>
            </div>

            <span className="h-8 w-px bg-white/[0.08]" aria-hidden />

            {/* Facebook logo */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 36 36" className="h-9 w-9 sm:h-11 sm:w-11" aria-label="Facebook">
                <circle cx="18" cy="18" r="18" fill="#1877F2" />
                <path
                  d="M25.3 23.5l.8-5.3h-5.1v-3.4c0-1.5.7-2.9 3-2.9h2.3V7.4s-2.1-.4-4.2-.4c-4.3 0-7.1 2.6-7.1 7.3v4h-4.8v5.3H15v12.8a18.5 18.5 0 005.8 0v-12.8h4.5z"
                  fill="#fff"
                />
              </svg>
              <span className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-wider text-zinc-500">
                Facebook
              </span>
            </div>

            <span className="h-8 w-px bg-white/[0.08]" aria-hidden />

            {/* Instagram logo */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 36 36" className="h-9 w-9 sm:h-11 sm:w-11" aria-label="Instagram">
                <defs>
                  <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect width="36" height="36" rx="8" fill="url(#ig-g)" />
                <circle cx="18" cy="18" r="6" fill="none" stroke="#fff" strokeWidth="2.2" />
                <circle cx="25.5" cy="10.5" r="1.6" fill="#fff" />
                <rect
                  x="6" y="6" width="24" height="24" rx="6"
                  fill="none" stroke="#fff" strokeWidth="2.2"
                />
              </svg>
              <span className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-wider text-zinc-500">
                Instagram
              </span>
            </div>
          </div>

          <div className="mx-auto mt-8 flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SaaS &amp; software teams
            </span>
            <span className="hidden h-3 w-px bg-white/[0.1] sm:block" aria-hidden />
            <span className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Meta Ads only
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROBLEM                                                     */}
      {/* ============================================================ */}
      <section className={`${shell} py-20 sm:py-28`}>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          {/* Left: copy */}
          <div>
            <ScrollReveal direction="up">
              <Kicker>The problem</Kicker>
              <h2 className="max-w-[24ch] font-[family-name:var(--font-instrument-serif)] text-2xl font-normal leading-tight tracking-tight text-foreground sm:text-[2rem]">
                You are already spending on Meta.
              </h2>
              <div className="mt-8 space-y-4 text-[15px] leading-[1.7] text-zinc-400">
                <p>
                  You have data. You have ads. You probably even have a swipe
                  file full of competitor screenshots.
                </p>
                <p>
                  But you still do not know, with confidence, what to test next.
                </p>
                <p>So the same cycle keeps repeating.</p>
                <p>
                  You try a new hook. A new angle. A new offer. A new landing
                  page tweak.
                </p>
                <p>
                  Some things work for a minute. Some do not. Most of the
                  learning gets lost. And Meta stays inconsistent.
                </p>
                <p className="font-semibold text-foreground">
                  The real problem is not a lack of ideas.
                </p>
                <p className="font-semibold text-foreground">
                  The real problem is that you do not have a reliable system for
                  turning market evidence and account data into the next
                  high-probability test.
                </p>
                <p>
                  That is why Meta feels noisy, fragile, and harder to trust
                  than it should.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: visual - the broken cycle */}
          <ScrollReveal direction="right" delay={0.15} duration={0.9} distance={48}>
            <div className="relative mt-4 lg:mt-8">
              <div
                className="pointer-events-none absolute -inset-6 rounded-3xl bg-meta/[0.04] blur-[40px]"
                aria-hidden
              />
              <div className="relative space-y-3">
                {[
                  {
                    step: "01",
                    label: "New hook idea",
                    sub: "Saw a competitor ad, let us try it",
                    status: "Launched",
                    statusColor: "text-emerald-300 bg-emerald-400/10",
                  },
                  {
                    step: "02",
                    label: "Tweak landing page copy",
                    sub: "Not sure why CTR dropped",
                    status: "Unclear signal",
                    statusColor: "text-amber-300 bg-amber-400/10",
                  },
                  {
                    step: "03",
                    label: "Try new angle",
                    sub: "Pain-based? Benefit? Social proof?",
                    status: "No framework",
                    statusColor: "text-red-300 bg-red-400/10",
                  },
                  {
                    step: "04",
                    label: "Check results",
                    sub: "Which test drove the change?",
                    status: "Lost in Slack",
                    statusColor: "text-red-300 bg-red-400/10",
                  },
                  {
                    step: "05",
                    label: "Repeat from step 1",
                    sub: "The same cycle, no compounding",
                    status: "Loop",
                    statusColor: "text-zinc-400 bg-zinc-400/10",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.1]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] font-[family-name:var(--font-geist-mono)] text-[11px] font-bold text-zinc-500">
                      {item.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium text-zinc-200">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-zinc-500">
                        {item.sub}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-medium uppercase ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-center pt-1">
                  <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5">
                    <svg
                      className="h-4 w-4 text-zinc-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M17 1l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 13v2a4 4 0 01-4 4H3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-500">
                      Endless loop · No compounding
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTION                                                    */}
      {/* ============================================================ */}
      <section className={`${shell} py-20 sm:py-28`}>
        <ScrollReveal direction="up">
          <Kicker>The solution</Kicker>
          <h2 className="max-w-[28ch] font-[family-name:var(--font-instrument-serif)] text-2xl font-normal leading-tight tracking-tight text-foreground sm:text-[2rem]">
            Predict-ad-ble is built to solve that exact gap.
          </h2>
          <div className="mt-6 max-w-2xl space-y-3 text-[15px] leading-[1.7] text-zinc-400">
            <p>Not by dumping more ad ideas on you.</p>
            <p>Not by giving you another dashboard.</p>
            <p>
              And not by generating generic copy with no strategic judgment
              behind it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} className="mt-12">
          <p className="mb-6 text-[15px] font-semibold text-foreground">
            Predict-ad-ble helps you:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionCapabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.03]"
              >
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-70 ${cap.accent.split(" ")[0]} ${cap.accent.split(" ")[1]}`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-gradient-to-br ${cap.accent}`}
                    >
                      <svg
                        className="h-4.5 w-4.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d={cap.icon}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-[family-name:var(--font-geist-mono)] text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                      Step {i + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] font-semibold text-foreground">
                    {cap.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES / STORY SCENES                                     */}
      {/* ============================================================ */}

      <div className={`${shell}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <StoryScene
        kicker="Diagnose"
        heading="See what is actually hurting performance"
        body="Instead of changing random variables, you get a structured diagnosis across angle, awareness stage, proof, offer framing, landing-page match, fatigue, and concept spread."
        mockup={<AdDiagnosisMockup />}
      />

      <div className={`${shell}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <StoryScene
        kicker="Prioritize"
        heading="Know what to test first"
        body="Instead of debating ten possible ideas, you get a prioritized list of the highest-probability tests. Instead of blending every ad into one generic pitch, you get stronger awareness-stage alignment."
        mockup={<FunnelRoadmapMockup />}
        flip
      />

      <div className={`${shell}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <StoryScene
        kicker="Research to action"
        heading="Turn research into action fast"
        body="Instead of letting screenshots rot in a folder, you turn market evidence into briefs, hooks, scripts, and launch-ready creative direction."
        mockup={<CompetitorIntelMockup />}
      />

      <div className={`${shell}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <StoryScene
        kicker="Compound learning"
        heading="Build memory into the account"
        body="Instead of losing learning in Slack threads and weekly calls, you keep a record of what worked, what failed, and what to do next."
        mockup={<ResultsDashMockup />}
        flip
      />

      {/* ============================================================ */}
      {/*  WHY THIS IS DIFFERENT                                       */}
      {/* ============================================================ */}
      <section className={`${shell} py-20 sm:py-28`}>
        <ScrollReveal direction="up">
          <Kicker>Why this is different</Kicker>
          <h2 className="max-w-[28ch] font-[family-name:var(--font-instrument-serif)] text-2xl font-normal leading-tight tracking-tight text-foreground sm:text-[2rem]">
            Most alternatives solve only one slice of the problem.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Left: the alternatives */}
          <ScrollReveal direction="up" delay={0.05}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { tool: "Agencies", does: "Sell execution" },
                { tool: "Spy tools", does: "Help you collect ads" },
                { tool: "Analytics tools", does: "Help you inspect performance" },
                { tool: "Generic AI tools", does: "Help you generate text" },
              ].map((alt) => (
                <div
                  key={alt.tool}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <p className="text-[13px] font-semibold text-zinc-300">
                    {alt.tool}
                  </p>
                  <p className="mt-1 text-[12px] text-zinc-500">{alt.does}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: the missing middle */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="h-full rounded-2xl border border-meta/25 bg-gradient-to-br from-meta/[0.06] via-meta/[0.02] to-transparent p-6 sm:p-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-meta">
                Predict-ad-ble fills the gap
              </p>
              <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-lg italic leading-snug text-zinc-100 sm:text-xl">
                What should we test next? Why that? What should the angle be?
                How should the landing page support it? What do we launch first?
                What do the results mean?
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                That is the layer small software teams usually do not have.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOUNDER STORY                                               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#09090b] py-16 sm:py-20">
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-meta/[0.04] blur-[80px]"
          aria-hidden
        />
        <div className={`${shell} relative`}>
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl">
              <Kicker>Why I built Predict-ad-ble</Kicker>

              <div className="mt-2 space-y-4 text-[15px] leading-[1.75] text-zinc-400">
                <p>
                  I got into marketing when I was 15 because I was obsessed with
                  one problem: how do you get a business more customers?
                </p>
                <p>
                  Since then, I have done a bit of everything. I worked at a
                  startup for about a year and a half, across paid, organic,
                  video, client work, and creative. Meta was the channel I kept
                  coming back to.
                </p>
                <p>
                  And even after helping generate over $1M in revenue,{" "}
                  <span className="font-semibold text-foreground">
                    I still felt like I was guessing.
                  </span>
                </p>
                <p>
                  I would analyze ads, look for patterns, and try to make smart
                  decisions, but most of that learning never really stuck. A lot
                  of the time, I would end up making more of what I{" "}
                  <em>thought</em> would work.
                </p>
                <p className="font-semibold text-foreground">
                  That is why I built Predict-ad-ble.
                </p>
                <p>
                  The goal is simple: make Meta ads feel less like guesswork and
                  more predictable.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-meta/30 to-meta/10 font-[family-name:var(--font-instrument-serif)] text-lg text-meta">
                  L
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">
                    Lucent Wu
                  </p>
                  <p className="text-[12px] text-zinc-500">
                    Founder, Predict-ad-ble
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MARKET QUOTES                                               */}
      {/* ============================================================ */}
      <section className="border-y border-white/[0.06] bg-[#09090b] py-16 sm:py-20">
        <div className={shell}>
          <ScrollReveal direction="up">
            <Kicker>What the market is already saying</Kicker>
            <p className="mb-8 max-w-2xl text-[15px] leading-[1.7] text-zinc-400">
              These are not your testimonials. They are public signs that the
              problem is real.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {marketQuotes.map((q, i) => (
                <blockquote
                  key={i}
                  className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8"
                >
                  <span
                    className="font-[family-name:var(--font-instrument-serif)] text-5xl leading-none text-meta/20"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="-mt-2 font-[family-name:var(--font-instrument-serif)] text-lg italic leading-snug text-zinc-200 sm:text-xl">
                    {q.text}
                  </p>
                  <footer className="mt-5 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-600">
                    Public discussion · r/FacebookAds · paraphrased
                  </footer>
                </blockquote>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-zinc-500">
              Those quotes matter because they map almost exactly to the problem
              Predict-ad-ble is built to solve: unclear diagnosis, weak
              message-to-page alignment, creative decision paralysis, and too
              much wasted time figuring Meta out manually.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                         */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28" id="faq">
        <div className="mx-auto w-full max-w-[42rem] px-5 sm:px-6">
          <ScrollReveal direction="up">
            <Kicker>FAQ</Kicker>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl font-normal tracking-tight text-foreground sm:text-[2rem]">
              Objections, answered
            </h2>
          </ScrollReveal>
          <div className="mt-10 space-y-2">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/[0.07] bg-zinc-950/40 transition-colors open:border-meta/20 open:bg-zinc-950/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left text-[15px] font-medium text-zinc-300 sm:px-5">
                  <span className="pr-2 group-open:text-foreground">
                    {item.q}
                  </span>
                  <span className="faq-plus shrink-0 rounded-md border border-white/[0.08] p-1 text-zinc-500 transition-transform">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="border-t border-white/[0.06] px-4 pb-4 pt-3 text-[14px] leading-relaxed text-zinc-400 sm:px-5">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA + RISK REVERSAL                                   */}
      {/* ============================================================ */}
      <section className="relative border-t border-white/[0.08] py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(8,102,255,0.12),transparent)]"
          aria-hidden
        />
        <div className={`${shell} relative`}>
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-xl rounded-2xl border border-meta/25 bg-gradient-to-b from-meta/[0.08] to-transparent p-[1px]">
              <div className="rounded-2xl bg-background/90 px-6 py-12 text-center backdrop-blur-sm sm:px-10 sm:py-14">
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-2xl font-normal leading-tight text-foreground sm:text-3xl">
                  Stop guessing what to test next on Meta
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                  Help you see whether Meta can become a more reliable growth
                  channel, and what the smartest next step is if it can.
                </p>
                <div className="mt-8 flex justify-center">
                  <PrimaryCta />
                </div>
                <p className="mt-4 text-sm text-zinc-500">
                  Takes less than 2 minutes. No hard pitch. If it is not a fit,
                  we will say so.
                </p>

                {/* Risk reversal */}
                <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-6">
                  {[
                    "No bloated retainer",
                    "No vague promises",
                    "No hard pitch if the fit is wrong",
                  ].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-[13px] text-zinc-500"
                    >
                      <svg
                        className="h-3.5 w-3.5 shrink-0 text-emerald-400/70"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3 8.5l3.5 3.5L13 4.5"
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <footer
        className={`mx-auto w-full max-w-5xl px-5 sm:px-8 border-t border-white/[0.06] py-10 text-center font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-600`}
      >
        Predict-ad-ble · Meta growth for founder-led software teams
      </footer>
    </article>
  );
}
