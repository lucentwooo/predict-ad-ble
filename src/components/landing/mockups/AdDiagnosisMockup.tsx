import { MockupFrame } from "./MockupFrame";

function Pill({
  color,
  label,
  x,
  y,
}: {
  color: "green" | "red" | "amber";
  label: string;
  x: string;
  y: string;
}) {
  const colors = {
    green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    red: "border-red-400/30 bg-red-400/10 text-red-300",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  };
  const dots = {
    green: "bg-emerald-400",
    red: "bg-red-400",
    amber: "bg-amber-400",
  };

  return (
    <span
      className={`absolute z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium shadow-lg backdrop-blur-sm ${colors[color]}`}
      style={{ left: x, top: y }}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[color]}`} />
      {label}
    </span>
  );
}

function InlinePill({
  color,
  label,
}: {
  color: "green" | "red" | "amber";
  label: string;
}) {
  const colors = {
    green: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    red: "border-red-400/30 bg-red-400/10 text-red-300",
    amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  };
  const dots = {
    green: "bg-emerald-400",
    red: "bg-red-400",
    amber: "bg-amber-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium ${colors[color]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[color]}`} />
      {label}
    </span>
  );
}

export function AdDiagnosisMockup({ className = "" }: { className?: string }) {
  return (
    <MockupFrame url="app.predict-ad-ble.com/diagnosis" className={className}>
      <div className="p-5 sm:p-6">
        {/* Ad preview area - pills are positioned relative to this */}
        <div className="relative">
          {/* Blurred Cluely-style SaaS ad */}
          <div className="relative mx-auto h-[220px] w-full max-w-[300px] overflow-hidden rounded-xl border border-white/[0.06] sm:h-[260px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0d0d10]">
              {/* Brand bar */}
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
                <div className="h-5 w-5 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div className="h-3 w-14 rounded bg-white/[0.1]" />
                <div className="ml-auto h-2.5 w-10 rounded bg-white/[0.06]" />
              </div>
              {/* Headline text block */}
              <div className="px-3 pt-3">
                <div className="h-4 w-[85%] rounded bg-white/[0.1]" />
                <div className="mt-1.5 h-4 w-[60%] rounded bg-white/[0.08]" />
                <div className="mt-3 h-2.5 w-[90%] rounded bg-white/[0.04]" />
                <div className="mt-1 h-2.5 w-[75%] rounded bg-white/[0.03]" />
              </div>
              {/* Product preview area */}
              <div className="mx-3 mt-3 rounded-lg border border-white/[0.04] bg-gradient-to-b from-violet-500/8 to-fuchsia-500/5 p-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded bg-violet-400/12" />
                  <div className="h-8 rounded bg-fuchsia-400/10" />
                  <div className="h-8 rounded bg-violet-400/8" />
                </div>
                <div className="mt-2 h-6 rounded bg-gradient-to-r from-violet-500/15 to-fuchsia-500/10" />
                <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                  <div className="h-5 rounded bg-white/[0.04]" />
                  <div className="h-5 rounded bg-white/[0.03]" />
                </div>
              </div>
              {/* CTA button */}
              <div className="mx-3 mt-2.5 flex items-center justify-between">
                <div className="h-7 w-24 rounded-lg bg-gradient-to-r from-violet-500/25 to-fuchsia-500/20" />
                <div className="h-2.5 w-16 rounded bg-white/[0.05]" />
              </div>
            </div>
            {/* Blur overlay */}
            <div className="absolute inset-0 backdrop-blur-[5px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/50 to-transparent" />
            <p className="absolute bottom-3 left-3 font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-wider text-zinc-500">
              SaaS ad creative
            </p>
          </div>

          {/* Annotation pills - contained within the ad preview area */}
          <Pill color="green" label="Strong emotional hook" x="2%" y="5%" />
          <Pill color="red" label="No clear offer in copy" x="46%" y="58%" />

          {/* Score badge */}
          <div className="absolute right-0 top-0 flex flex-col items-center rounded-xl border border-white/[0.08] bg-[#111113] px-3 py-2.5 shadow-lg">
            <span className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold leading-none text-amber-400">
              62
            </span>
            <span className="font-[family-name:var(--font-geist-mono)] text-[9px] text-zinc-500">
              / 100
            </span>
            <span className="mt-1 rounded bg-amber-400/10 px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[8px] font-medium text-amber-300">
              NEEDS WORK
            </span>
          </div>
        </div>

        {/* Bottom bar - fully separated from the ad preview */}
        <div className="mt-5 border-t border-white/[0.06] pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <InlinePill color="red" label="No clear offer in copy" />
            <InlinePill color="amber" label="Weak offer framing" />
            <InlinePill color="green" label="Strong emotional hook" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-wider text-zinc-500">
                Diagnosis
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-zinc-300">
                3 issues found · 1 strength
              </p>
            </div>
            <span className="rounded-lg bg-meta/15 px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold text-meta">
              View full report →
            </span>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
