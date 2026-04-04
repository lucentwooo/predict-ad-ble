const bottlenecks = [
  { label: "Weak hook clarity", pct: 82, level: "High" },
  { label: "Awareness-stage mismatch", pct: 64, level: "Med" },
  { label: "Undifferentiated proof", pct: 45, level: "Med" },
];

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-3xl animate-fade-up stagger-5"
      aria-hidden
    >
      <div className="absolute -inset-8 rounded-3xl bg-meta/[0.05] blur-3xl animate-glow-pulse" />

      <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface/80 shadow-2xl shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-6 border-b border-surface-border px-5 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <div className="flex gap-1 text-[11px] font-medium">
            <span className="rounded-md border border-meta/20 bg-meta/10 px-3 py-1 text-meta">
              Diagnosis
            </span>
            <span className="rounded-md px-3 py-1 text-zinc-500 transition-colors hover:text-zinc-400">
              Concepts
            </span>
            <span className="rounded-md px-3 py-1 text-zinc-500 transition-colors hover:text-zinc-400">
              Briefs
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-surface-border sm:grid-cols-[1fr_0.8fr] sm:divide-x sm:divide-y-0">
          {/* Left: Diagnosis panel */}
          <div className="p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Likely bottlenecks
            </p>

            <div className="mt-4 space-y-4">
              {bottlenecks.map((b) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px] text-zinc-200">
                      {b.label}
                    </span>
                    <span
                      className={`shrink-0 text-[11px] font-semibold ${
                        b.level === "High" ? "text-meta" : "text-zinc-400"
                      }`}
                    >
                      {b.level}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-meta/80 to-meta"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Top concept */}
          <div className="p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Top concept recommendation
            </p>

            <div className="mt-4 rounded-xl border border-meta/15 bg-meta/[0.04] p-4">
              <p className="text-sm font-semibold text-foreground">
                Social proof overhaul
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-meta/15 px-2 py-0.5 text-[10px] font-semibold text-meta">
                  TOF
                </span>
                <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                  Video ad
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Competitors lean heavily on founder authority. Your ads lack
                third-party proof signals that convert cold traffic.
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
              <span>Based on 3 competitor signals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
