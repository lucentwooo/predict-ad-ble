"use client";

import type { ReactNode } from "react";
import { PrimaryCta } from "./PrimaryCta";
import { FadeIn } from "./FadeIn";

const solutionSteps = [
  {
    n: "1",
    title: "Diagnose what is actually holding Meta back",
    body:
      "Find real bottlenecks across angle, awareness stage, proof, offer framing, landing page match, creative fatigue, and concept diversity.",
  },
  {
    n: "2",
    title: "Turn market noise into a test plan",
    body:
      "Use competitor ads, landing pages, market language, funnel logic, and your account context to decide what to test first, what to avoid, and why.",
  },
  {
    n: "3",
    title: "Turn strategy into launch-ready assets",
    body:
      "Creative briefs, hook banks, scripts, copy directions, and landing page angle recommendations your team can actually use.",
  },
  {
    n: "4",
    title: "Learn from results over time",
    body:
      "Stop resetting every week. Track what was tested, what worked, what failed, and what to do next.",
  },
] as const;

const alternatives = [
  {
    name: "Agencies",
    text: "Rent execution but keep the reasoning black-box.",
  },
  {
    name: "Spy tools",
    text: "Collect ads but do not tell you what to test first.",
  },
  {
    name: "Creative analytics",
    text: "Show patterns but do not fully own the next move.",
  },
  {
    name: "Generic AI",
    text: "Write copy fast but cannot reliably prioritize strategy.",
  },
] as const;

const features = [
  {
    title:
      "Bottleneck diagnosis across awareness, angle, proof, offer, landing page match, and fatigue",
    benefit:
      "You stop wasting money fixing the wrong problem and see what is most likely suppressing performance.",
  },
  {
    title:
      "Competitor ad and landing page research combined with market language analysis",
    benefit:
      "You stop guessing from random screenshots and start testing ideas rooted in real market evidence.",
  },
  {
    title: "Prioritized testing recommendations",
    benefit:
      "You know what to launch first, what can wait, and what to avoid, so momentum stops dying in planning.",
  },
  {
    title:
      "Launch-ready creative briefs, hooks, scripts, and copy directions",
    benefit:
      "Your team moves from strategy to execution fast instead of getting stuck translating insights into assets.",
  },
  {
    title: "Persistent account memory",
    benefit:
      "The account gets smarter over time because you keep learning from what worked, what failed, and what to test next.",
  },
] as const;

const outcomes = [
  "A clear view of what is likely hurting Meta performance",
  "A sharper message for each stage of the funnel",
  "A prioritized list of high-probability tests",
  "Stronger alignment between ads and landing pages",
  "Launch-ready direction your team can act on right away",
] as const;

const faq = [
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

function SectionTitle({
  kicker,
  children,
}: {
  kicker: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-meta">
        {kicker}
      </p>
      <h2 className="mt-3 max-w-[20ch] font-[family-name:var(--font-instrument-serif)] text-3xl font-normal leading-[1.12] tracking-tight text-foreground md:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export function LandingSections() {
  return (
    <div className="flex-1">
      <section id="problem" className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="The problem">The same question, every week</SectionTitle>
            <div className="lp-prose space-y-4 text-[17px] leading-[1.65] text-muted">
              <p>You are already spending on Meta.</p>
              <p>But every week still starts with the same question:</p>
              <p className="font-[family-name:var(--font-instrument-serif)] text-xl italic text-foreground md:text-2xl">
                What should we test next?
              </p>
              <p>
                So you save competitor ads. You collect screenshots. You talk
                about hooks, UGC, proof, offers, and landing pages. Then the
                research gets messy, execution slows down, and results stay
                inconsistent.
              </p>
              <p>
                The problem is usually{" "}
                <strong className="font-medium text-foreground">not</strong>{" "}
                that you need more ideas.
              </p>
              <p>
                The problem is that you do not have a reliable system for
                turning market evidence and account data into the next
                high-probability test.
              </p>
              <p className="font-medium text-foreground">
                That is why Meta feels expensive, noisy, and harder to trust than
                it should.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="solution" className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="The system">
              Predict-ad-ble closes the gap
            </SectionTitle>
            <p className="lp-prose mb-10 text-[17px] leading-[1.65] text-muted">
              It helps you move from scattered inspiration and reactive testing
              to a clear, evidence-backed plan for what to launch next.
            </p>
            <ol className="space-y-8">
              {solutionSteps.map((s) => (
                <li
                  key={s.n}
                  className="grid gap-3 border-l-2 border-meta/30 pl-5 md:grid-cols-[2.5rem_1fr] md:gap-6 md:pl-6"
                >
                  <span className="font-[family-name:var(--font-geist-mono)] text-sm font-semibold text-meta md:pt-0.5">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 max-w-2xl space-y-2 rounded-lg border border-white/[0.08] bg-[var(--surface)] p-6">
              <p className="text-[15px] font-medium text-foreground">
                This is not another agency retainer.
              </p>
              <p className="text-[15px] font-medium text-foreground">
                It is not another swipe file tool.
              </p>
              <p className="text-[15px] font-medium text-foreground">
                It is not generic AI copy.
              </p>
              <p className="pt-2 text-[15px] leading-relaxed text-muted">
                It is a repeatable Meta growth system built for teams that know
                the channel should be working better.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="Positioning">Why this feels different</SectionTitle>
            <p className="lp-prose mb-8 text-[17px] leading-[1.65] text-muted">
              Most teams today are stuck choosing between:
            </p>
            <ul className="mb-10 max-w-2xl divide-y divide-white/[0.06] border border-white/[0.08] rounded-lg overflow-hidden">
              {alternatives.map((a) => (
                <li
                  key={a.name}
                  className="flex flex-col gap-1 bg-[var(--surface)] px-5 py-4 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    {a.name}
                  </span>
                  <span className="text-[15px] leading-relaxed text-muted">
                    {a.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="max-w-2xl rounded-lg border border-meta/20 bg-meta/[0.05] p-6 md:p-8">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-medium uppercase tracking-[0.2em] text-meta">
                The missing middle
              </p>
              <p className="mt-4 font-[family-name:var(--font-instrument-serif)] text-lg italic leading-snug text-foreground md:text-xl">
                What should we test next? Why that? How does it map to funnel
                stage? What assets do we need? What do the results mean?
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="features" className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="What you get">Features that map to outcomes</SectionTitle>
            <div className="space-y-0 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="grid gap-4 py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-12 md:items-start"
                >
                  <p className="text-[16px] font-medium leading-snug text-foreground">
                    {f.title}
                  </p>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {f.benefit}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="Outcomes">What your team walks away with</SectionTitle>
            <p className="lp-prose mb-8 text-[17px] text-muted">
              After working through Predict-ad-ble, you should have:
            </p>
            <ul className="max-w-2xl space-y-3">
              {outcomes.map((o) => (
                <li
                  key={o}
                  className="flex gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-meta" />
                  {o}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-meta/20 bg-meta/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 text-center md:px-8">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal leading-tight text-foreground md:text-4xl">
              Ready for a clear next test — not another brainstorm?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Book a free Meta diagnosis call. No hard pitch. If it is not a
              fit, we will say so.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="faq" className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto max-w-2xl px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="FAQ">Common questions</SectionTitle>
            <div className="space-y-2">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-lg border border-white/[0.08] bg-[var(--surface)] px-5 open:border-white/[0.12]"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-[15px] font-medium text-foreground">
                    <span>{item.q}</span>
                    <span className="faq-chev mt-0.5 shrink-0 text-zinc-500 transition-transform">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="border-t border-white/[0.06] pb-4 pt-3 text-[14px] leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="rule border-white/[0.06] py-16 md:py-20">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <SectionTitle kicker="No forced fit">We are not here to force a fit</SectionTitle>
            <div className="lp-prose space-y-4 text-[17px] leading-[1.65] text-muted">
              <p>
                If Predict-ad-ble is not right for your funnel, stage, or sales
                cycle, we will tell you directly.
              </p>
              <ul className="list-none space-y-2 pl-0 text-[15px]">
                <li>No bloated retainer.</li>
                <li>No vague promises.</li>
                <li>No hard pitch on the call.</li>
              </ul>
              <p className="text-foreground">
                Just a clear conversation about whether there is a real
                opportunity to improve Meta performance and what the smartest
                next step looks like.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="book" className="py-16 md:py-24">
        <div className="lp-shell mx-auto px-5 md:px-8">
          <FadeIn>
            <div className="mx-auto max-w-xl rounded-xl border border-white/[0.1] bg-[var(--surface)] px-8 py-12 text-center md:px-12 md:py-14">
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl font-normal leading-tight text-foreground md:text-4xl">
                Stop guessing what to test next
              </h2>
              <div className="mt-8 flex justify-center">
                <PrimaryCta />
              </div>
              <p className="mt-4 text-[13px] text-zinc-500">
                Takes less than 2 minutes to book. If it is not a fit, we will
                say so.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="rule border-white/[0.06] py-10">
        <div className="lp-shell mx-auto flex flex-col items-center justify-between gap-4 px-5 text-center md:flex-row md:px-8 md:text-left">
          <p className="text-sm font-medium text-zinc-500">
            Predict-
            <span className="font-[family-name:var(--font-instrument-serif)] italic text-zinc-400">
              ad
            </span>
            -ble
          </p>
          <p className="text-[12px] text-zinc-600">
            Meta creative strategy for founder-led software teams.
          </p>
        </div>
      </footer>
    </div>
  );
}
