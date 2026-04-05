import { MockupFrame } from "./MockupFrame";

const competitors = [
  {
    angle: "Social proof + urgency: 'Join 2,400 teams shipping faster'",
    stage: "ToFu",
    stageColor: "text-sky-300 bg-sky-400/10 border-sky-400/20",
  },
  {
    angle: "Pain agitation: 'Still debugging your deploy pipeline?'",
    stage: "MoFu",
    stageColor: "text-violet-300 bg-violet-400/10 border-violet-400/20",
  },
  {
    angle: "Direct comparison: 'Unlike [Competitor], we don't charge per seat'",
    stage: "BoFu",
    stageColor: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  },
] as const;

export function CompetitorIntelMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <MockupFrame
      url="app.predict-ad-ble.com/competitors"
      className={className}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-500">
              Competitor analysis
            </p>
            <p className="mt-1 text-[15px] font-semibold text-zinc-100">
              3 Competitor Angles Detected
            </p>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
            <svg
              className="h-4 w-4 text-zinc-500"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {competitors.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.1]"
            >
              {/* Blurred avatar */}
              <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800 blur-[2px]" />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] leading-snug text-zinc-300">
                  {c.angle}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full border px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-medium uppercase tracking-wider ${c.stageColor}`}
                >
                  {c.stage}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-white/[0.06] pt-4">
          <span className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium text-meta">
            View full breakdown →
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}
