import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LandingSections } from "@/components/landing/LandingSections";
import { MobileStickyCta } from "@/components/landing/MobileStickyCta";

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-full flex-col pb-[5.5rem] md:pb-0">
      <Navbar />
      <Hero />
      <LandingSections />
      <MobileStickyCta />
    </div>
  );
}
