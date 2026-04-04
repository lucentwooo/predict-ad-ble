"use client";

import { useState, useEffect } from "react";

function bookingHref(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return raw && raw.length > 0 ? raw : "#";
}

const links = [
  { label: "Process", href: "#process" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const href = bookingHref();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-white/[0.05] bg-background/85 py-3 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
        <a
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground"
        >
          Predict-
          <span className="font-[family-name:var(--font-instrument-serif)] italic text-meta">
            ad
          </span>
          -ble
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="section-eyebrow text-[10px] text-zinc-500 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-meta px-4 py-2 text-[13px] font-semibold text-white transition-[background-color,box-shadow] hover:bg-meta-hover hover:shadow-[0_0_24px_rgba(8,102,255,0.22)]"
        >
          Book a Call
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M3 8h10m0 0L9 4m4 4L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
