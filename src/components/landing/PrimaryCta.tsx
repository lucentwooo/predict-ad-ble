function bookingHref(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return raw && raw.length > 0 ? raw : "#";
}

type PrimaryCtaProps = {
  className?: string;
  compact?: boolean;
};

export function PrimaryCta({ className = "", compact = false }: PrimaryCtaProps) {
  const href = bookingHref();
  const unset = href === "#";

  return (
    <span className={`relative inline-flex group ${className}`}>
      <span
        className="absolute -inset-1.5 rounded-2xl bg-meta/25 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-90 animate-glow-pulse"
        aria-hidden
      />
      <a
        href={href}
        {...(unset
          ? {
              title:
                "Set NEXT_PUBLIC_BOOKING_URL in .env.local to your Calendly or booking URL",
            }
          : {})}
        className={[
          "relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-meta font-semibold text-white shadow-lg shadow-meta/20 transition-all duration-300",
          "hover:bg-meta-hover hover:shadow-meta/30 hover:scale-[1.02]",
          "active:scale-[0.98]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta",
          compact ? "px-5 py-3 text-sm" : "px-7 py-4 text-base",
        ].join(" ")}
      >
        Book My Meta Diagnosis Call
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 8h10m0 0L9 4m4 4L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </span>
  );
}
