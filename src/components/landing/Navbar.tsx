function bookingHref(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return raw && raw.length > 0 ? raw : "#";
}

export function Navbar() {
  const href = bookingHref();

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-background/90 backdrop-blur-md">
      <div className="lp-shell mx-auto flex items-center justify-between px-5 py-4 md:px-8">
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
        <a
          href={href}
          className="rounded-lg bg-meta px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-meta-hover"
        >
          Book call
        </a>
      </div>
    </header>
  );
}
