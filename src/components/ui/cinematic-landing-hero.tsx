"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function getBookingUrl(): string {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return raw && raw.length > 0 ? raw : "#";
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }
  .transform-style-3d { transform-style: preserve-3d; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image:
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow:
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent))
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter:
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #0c1a4a 0%, #080d1a 100%);
      box-shadow:
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.15),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .dashboard-frame {
      background-color: #0a0f1a;
      box-shadow:
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7),
          inset 0 1px 0 rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.06);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow:
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      box-shadow:
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-light {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tagline1?: React.ReactNode;
  tagline2?: React.ReactNode;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({
  tagline1 = "Turn Meta Ads from a guessing game",
  tagline2 = (
    <>
      into a predict-<em>ad</em>-ble channel you can trust.
    </>
  ),
  cardHeading = "Creative strategy that compounds.",
  cardDescription = (
    <>
      <span className="text-white font-semibold">Predict-ad-ble</span>{" "}
      analyzes your company, competitors, and market messaging to diagnose
      creative gaps and recommend the highest-probability tests to launch.
    </>
  ),
  ctaHeading = "Stop guessing what to test next.",
  ctaDescription = "Book a free Meta diagnosis call. No hard pitch. If it's not a fit, we'll tell you directly.",
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  const bookingUrl = getBookingUrl();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          mainCardRef.current.style.setProperty(
            "--mouse-x",
            `${e.clientX - rect.left}px`,
          );
          mainCardRef.current.style.setProperty(
            "--mouse-y",
            `${e.clientY - rect.top}px`,
          );
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 10,
            rotationX: -yVal * 10,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.set(".text-track", {
        autoAlpha: 0,
        y: 60,
        scale: 0.85,
        filter: "blur(20px)",
        rotationX: -20,
      });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set(
        [
          ".card-left-text",
          ".card-right-text",
          ".mockup-scroll-wrapper",
          ".floating-badge",
          ".phone-widget",
        ],
        { autoAlpha: 0 },
      );
      gsap.set(".cta-wrapper", {
        autoAlpha: 0,
        scale: 0.8,
        filter: "blur(30px)",
      });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", {
          duration: 1.8,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          ease: "expo.out",
        })
        .to(
          ".text-days",
          { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" },
          "-=1.0",
        );

      if (containerRef.current) {
        containerRef.current.style.zIndex = "40";
        containerRef.current.style.visibility = "visible";
      }

      // Reset scroll to top on fresh load so hero always shows
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to(
          [".hero-text-wrapper", ".bg-grid-theme"],
          {
            scale: 1.15,
            filter: "blur(20px)",
            opacity: 0.2,
            ease: "power2.inOut",
            duration: 2,
          },
          0,
        )
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
        })
        .fromTo(
          ".mockup-scroll-wrapper",
          {
            y: 300,
            z: -500,
            rotationX: 50,
            rotationY: -30,
            autoAlpha: 0,
            scale: 0.6,
          },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            duration: 2.5,
          },
          "-=0.8",
        )
        .fromTo(
          ".phone-widget",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            duration: 1.5,
          },
          "-=1.5",
        )
        .to(
          ".progress-ring",
          { strokeDashoffset: 72, duration: 2, ease: "power3.inOut" },
          "-=1.2",
        )
        .to(
          ".counter-val",
          {
            innerHTML: 82,
            snap: { innerHTML: 1 },
            duration: 2,
            ease: "expo.out",
          },
          "-=2.0",
        )
        .fromTo(
          ".floating-badge",
          { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(1.5)",
            duration: 1.5,
            stagger: 0.2,
          },
          "-=2.0",
        )
        .fromTo(
          ".card-left-text",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 },
          "-=1.5",
        )
        .fromTo(
          ".card-right-text",
          { x: 50, autoAlpha: 0, scale: 0.8 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 },
          "<",
        )
        .to({}, { duration: 2.5 })
        .to(
          [
            ".mockup-scroll-wrapper",
            ".floating-badge",
            ".card-left-text",
            ".card-right-text",
          ],
          {
            autoAlpha: 0,
            y: -20,
            ease: "power2.inOut",
            duration: 1.8,
            stagger: 0.1,
          },
        )
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .to(
          ".main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 2,
          },
          "pullback",
        )
        .to(
          ".cta-wrapper",
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "expo.inOut",
            duration: 2,
          },
          "pullback",
        )
        .to({}, { duration: 3.5 })
        .to(".cta-wrapper", {
          autoAlpha: 0,
          y: -30,
          ease: "power2.inOut",
          duration: 1.5,
        })
        .to(
          ".main-card",
          { autoAlpha: 0, scale: 0.97, ease: "power2.inOut", duration: 1.5 },
          "-=1.2",
        )
        .to(".bg-grid-theme", { opacity: 0, duration: 0.8 }, "-=1")
        .set(containerRef.current, { pointerEvents: "none" });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-screen h-screen overflow-hidden flex items-center justify-center text-foreground font-sans antialiased",
        className,
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div
        className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50"
        aria-hidden="true"
      />

      {/* ---- Background: Taglines ---- */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track gsap-reveal text-3d-matte text-2xl md:text-4xl lg:text-[3.5rem] font-bold tracking-tight mb-2 leading-tight">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-2xl md:text-4xl lg:text-[3.5rem] font-extrabold tracking-tight leading-tight">
          {tagline2}
        </h1>
      </div>

      {/* ---- Background: CTA (appears late in scroll) ---- */}
      <div className="cta-wrapper absolute z-30 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
          {ctaHeading}
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <a
          href={bookingUrl}
          className="btn-modern-light flex items-center justify-center gap-3 px-10 py-5 rounded-2xl group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span className="text-lg font-bold tracking-tight">
            Book My Meta Diagnosis Call
          </span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
        <p className="mt-6 text-sm text-muted-foreground/60">
          Takes less than 2 minutes to book.
        </p>
      </div>

      {/* ---- Foreground: Deep blue card ---- */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            {/* Brand name — top (mobile) / right (desktop) */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-card-silver-matte leading-none lg:text-right whitespace-nowrap">
                Predict-<em>ad</em>-ble
              </h2>
            </div>

            {/* Dashboard mockup — center */}
            <div
              className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[360px] lg:h-[520px] flex items-center justify-center z-10"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full flex items-center justify-center scale-[0.6] md:scale-[0.8] lg:scale-100">
                <div
                  ref={mockupRef}
                  className="relative w-[500px] dashboard-frame rounded-2xl overflow-hidden will-change-transform transform-style-3d"
                >
                  {/* Chrome bar */}
                  <div className="flex items-center gap-4 border-b border-white/[0.06] px-4 py-2.5 bg-[#0d1220]">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 tracking-wide">
                      predict-ad-ble
                    </span>
                  </div>

                  {/* Tab bar */}
                  <div className="flex gap-1 px-4 py-2 border-b border-white/[0.04] bg-[#0b1020]">
                    <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold text-blue-400">
                      Diagnosis
                    </span>
                    <span className="rounded-md px-3 py-1 text-[10px] text-zinc-500">
                      Concepts
                    </span>
                    <span className="rounded-md px-3 py-1 text-[10px] text-zinc-500">
                      Briefs
                    </span>
                  </div>

                  {/* Dashboard body */}
                  <div className="flex">
                    {/* Left column: bottlenecks + concept */}
                    <div className="flex-1 p-5">
                      <p className="phone-widget text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
                        Likely Bottlenecks
                      </p>

                      {[
                        { label: "Weak hook clarity", pct: 82, level: "High" },
                        {
                          label: "Awareness-stage mismatch",
                          pct: 64,
                          level: "Med",
                        },
                        {
                          label: "Undifferentiated proof",
                          pct: 45,
                          level: "Med",
                        },
                      ].map((b) => (
                        <div key={b.label} className="phone-widget mb-3">
                          <div className="flex items-baseline justify-between gap-2 mb-1">
                            <span className="text-[12px] text-zinc-300">
                              {b.label}
                            </span>
                            <span
                              className={`text-[10px] font-bold ${b.level === "High" ? "text-blue-400" : "text-zinc-500"}`}
                            >
                              {b.level}
                            </span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500/70 to-blue-400"
                              style={{ width: `${b.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}

                      <p className="phone-widget text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-5 mb-3">
                        Top Concept
                      </p>
                      <div className="phone-widget widget-depth rounded-xl p-3">
                        <p className="text-[13px] font-semibold text-white mb-1.5">
                          Social proof overhaul
                        </p>
                        <div className="flex gap-1.5 mb-2">
                          <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-[9px] font-bold text-blue-400">
                            TOF
                          </span>
                          <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-zinc-400">
                            Video ad
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">
                          Competitors lean on founder authority. Your ads lack
                          third-party proof that converts cold traffic.
                        </p>
                      </div>
                    </div>

                    {/* Right column: confidence ring */}
                    <div className="w-[160px] p-5 flex flex-col items-center justify-start border-l border-white/[0.04]">
                      <p className="phone-widget text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 text-center">
                        Confidence
                      </p>
                      <div className="phone-widget relative w-[110px] h-[110px] flex items-center justify-center">
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 120 120"
                          aria-hidden="true"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="48"
                            fill="none"
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="8"
                          />
                          <circle
                            className="progress-ring"
                            cx="60"
                            cy="60"
                            r="48"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="8"
                            style={{
                              strokeDasharray: 302,
                              strokeDashoffset: 302,
                            }}
                          />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="flex items-baseline">
                            <span className="counter-val text-2xl font-extrabold tracking-tighter text-white">
                              0
                            </span>
                            <span className="text-sm font-bold text-blue-400/60">
                              %
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="phone-widget mt-4 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]" />
                        <span className="text-[10px] text-zinc-400">
                          Evidence-backed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="floating-badge absolute flex top-2 lg:top-4 left-[-10px] lg:left-[-70px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/10 flex items-center justify-center border border-blue-400/30 shadow-inner text-base lg:text-xl">
                    🎯
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">
                      3 Concepts Ready
                    </p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">
                      High-probability tests
                    </p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-8 lg:bottom-16 right-[-10px] lg:right-[-70px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-emerald-500/20 to-emerald-900/10 flex items-center justify-center border border-emerald-400/30 shadow-inner text-base lg:text-lg">
                    📊
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">
                      Diagnosis Complete
                    </p>
                    <p className="text-blue-200/50 text-[10px] lg:text-xs font-medium">
                      5 bottlenecks found
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading — bottom (mobile) / left (desktop) */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
