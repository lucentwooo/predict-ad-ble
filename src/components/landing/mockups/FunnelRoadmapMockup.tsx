import { MockupFrame } from "./MockupFrame";

const stages = [
  {
    label: "Top of Funnel",
    tag: "Problem-aware",
    tagColor: "text-sky-300 border-sky-400/25 bg-sky-400/8",
    angles: [
      "Still wasting hours on ad creative that doesn't convert?",
      "Your Meta ads cost too much because your angles are wrong",
    ],
    recommended: false,
  },
  {
    label: "Middle of Funnel",
    tag: "Solution-aware",
    tagColor: "text-violet-300 border-violet-400/25 bg-violet-400/8",
    angles: [
      "The diagnosis-first approach to Meta creative strategy",
      "How structured testing beats random creative swaps",
    ],
    recommended: true,
  },
  {
    label: "Bottom of Funnel",
    tag: "Product-aware",
    tagColor: "text-amber-300 border-amber-400/25 bg-amber-400/8",
    angles: [
      "See exactly why your last 5 ad tests failed. Free diagnosis",
      "Book a 20-min call, get a prioritized test plan",
    ],
    recommended: false,
  },
] as const;

export function FunnelRoadmapMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <MockupFrame url="app.predict-ad-ble.com/roadmap" className={className}>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-500">
              Testing roadmap
            </p>
            <p className="mt-1 text-[15px] font-semibold text-zinc-100">
              Angles by funnel stage
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-[family-name:var(--font-geist-mono)] text-[9px] text-zinc-500">
              6 angles ready
            </span>
          </div>
        </div>

        {/* Awareness scale */}
        <div className="mt-5 flex items-center gap-1 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-1">
          {["Unaware", "Problem", "Solution", "Product", "Most"].map(
            (s, i) => (
              <span
                key={s}
                className={`flex-1 rounded-md py-1 text-center font-[family-name:var(--font-geist-mono)] text-[8px] uppercase tracking-wider ${
                  i >= 1 && i <= 3
                    ? "bg-meta/10 font-semibold text-meta"
                    : "text-zinc-600"
                }`}
              >
                {s}
              </span>
            ),
          )}
        </div>

        <div className="mt-5 space-y-4">
          {stages.map((stage) => (
            <div key={stage.label}>
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-semibold text-zinc-200">
                  {stage.label}
                </p>
                <span
                  className={`rounded-full border px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[8px] font-medium uppercase tracking-wider ${stage.tagColor}`}
                >
                  {stage.tag}
                </span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {stage.angles.map((angle, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2 rounded-lg border p-2.5 text-[12px] leading-snug ${
                      stage.recommended && j === 0
                        ? "border-meta/30 bg-meta/[0.06] text-zinc-200"
                        : "border-white/[0.05] bg-white/[0.015] text-zinc-400"
                    }`}
                  >
                    {stage.recommended && j === 0 && (
                      <span className="mt-px shrink-0 rounded bg-meta/20 px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[8px] font-bold uppercase text-meta">
                        Next
                      </span>
                    )}
                    <span>{angle}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}
