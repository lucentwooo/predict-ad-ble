function bookingHref(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return raw && raw.length > 0 ? raw : "#";
}

type PrimaryCtaProps = {
  className?: string;
  compact?: boolean;
  /** Stretch button to container width (e.g. sticky mobile bar). */
  fullWidth?: boolean;
};

export function PrimaryCta({
  className = "",
  compact = false,
  fullWidth = false,
}: PrimaryCtaProps) {
  const href = bookingHref();
  const unset = href === "#";

  return (
    <span
      className={`relative group ${fullWidth ? "flex w-full" : "inline-flex"} ${className}`}
    >
      <span
        className="absolute -inset-1 rounded-2xl bg-meta/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
          "relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-meta font-semibold text-white transition-[transform,background-color,box-shadow]",
          "hover:bg-meta-hover hover:shadow-[0_12px_40px_-12px_rgba(8,102,255,0.45)]",
          "active:scale-[0.99]",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta",
          fullWidth ? "w-full" : "",
          compact ? "px-5 py-3 text-sm" : "px-7 py-3.5 text-[15px]",
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
