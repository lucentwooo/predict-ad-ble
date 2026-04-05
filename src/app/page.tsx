import { LandingPage } from "@/components/landing/LandingPage";
import { MobileStickyCta } from "@/components/landing/MobileStickyCta";

export default function Home() {
  return (
    <div className="relative z-10 pb-[5.25rem] md:pb-0">
      <LandingPage />
      <MobileStickyCta />
    </div>
  );
}
