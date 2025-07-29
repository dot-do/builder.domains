"use client";
import BrowserMockup from "./BrowserMockup";
import DomainBadges from "./DomainBadges";
import HeroSection from "./HeroSection";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mx-auto max-w-7xl px-2 h-screen flex items-center justify-center"
    >
      <div className="w-full lg:w-[1100px] relative">
        <div className="container relative grid items-center gap-12">
          <div aria-hidden="true" className="relative">
            <BrowserMockup />
            <DomainBadges />

            <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center relative z-10">
              <div className="absolute inset-0 -z-10 mx-auto max-w-lg bg-background/60 blur-3xl dark:bg-background/20"></div>
              <HeroSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
