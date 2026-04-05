import { PrimaryCta } from "./PrimaryCta";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.08] bg-background/92 px-4 py-3 backdrop-blur-md md:hidden">
      <PrimaryCta compact fullWidth />
    </div>
  );
}
