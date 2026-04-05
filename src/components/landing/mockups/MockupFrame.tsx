import type { ReactNode } from "react";

type MockupFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

export function MockupFrame({
  children,
  url = "app.predict-ad-ble.com",
  className = "",
}: MockupFrameProps) {
  return (
    <div
      className={`mockup-frame overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c0e] shadow-[0_0_60px_-20px_rgba(8,102,255,0.12)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#111113] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/20" />
        </span>
        <span className="ml-2 flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-center font-[family-name:var(--font-geist-mono)] text-[10px] text-zinc-600">
          {url}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
