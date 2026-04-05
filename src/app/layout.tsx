import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Predict-ad-ble | Turn Meta into a growth channel you can trust",
  description:
    "Diagnose what is hurting performance, prioritize creative and messaging tests, and launch stronger ads without the usual guesswork.",
  openGraph: {
    title: "Predict-ad-ble | Turn Meta into a growth channel you can trust",
    description:
      "For founder-led teams already spending on Meta. Diagnose, prioritize, launch, learn.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-overlay"
          aria-hidden
        >
          <svg className="h-full w-full">
            <filter id="lp-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#lp-noise)" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
