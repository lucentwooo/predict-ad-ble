import { MockupFrame } from "./MockupFrame";

const tests = [
  {
    name: "Pain hook + free audit CTA",
    result: "Win",
    resultColor: "text-emerald-300 bg-emerald-400/10",
    learning: "Pain framing outperformed benefit framing by 2.4x CTR",
  },
  {
    name: "Social proof carousel",
    result: "Loss",
    resultColor: "text-red-300 bg-red-400/10",
    learning: "Audience too cold for case-study proof. Try problem-aware angle",
  },
  {
    name: "Founder story video",
    result: "Inconclusive",
    resultColor: "text-zinc-400 bg-zinc-400/10",
    learning: "Low spend. Needs 3 more days at $50/day for signal",
  },
  {
    name: "Comparison landing page",
    result: "Win",
    resultColor: "text-emerald-300 bg-emerald-400/10",
    learning: "BoFu visitors convert 3.1x better with direct comparison",
  },
] as const;

const bars = [28, 42, 18, 55, 38, 62, 45, 70] as const;

export function ResultsDashMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <MockupFrame url="app.predict-ad-ble.com/tests" className={className}>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-500">
              Test log
            </p>
            <p className="mt-1 text-[15px] font-semibold text-zinc-100">
              4 tests · 2 wins · 1 loss
            </p>
          </div>
          {/* Mini sparkline */}
          <div className="flex items-end gap-[3px]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="w-[5px] rounded-sm bg-meta/40"
                style={{ height: `${h * 0.35}px` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {tests.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.1]"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] font-medium text-zinc-200">
                  {t.name}
                </p>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase ${t.resultColor}`}
                >
                  {t.result}
                </span>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-zinc-500">
                {t.learning}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-white/[0.06] pt-4">
          <span className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium text-meta">
            Export test history →
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}
