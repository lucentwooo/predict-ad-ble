import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LandingSections } from "@/components/landing/LandingSections";

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-full flex-col">
      <Navbar />
      <Hero />
      <LandingSections />
    </div>
  );
}
