import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import ParallaxShowcase from "./components/ParallaxShowcase";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.1,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-cyan-400/30 selection:text-white">
      <HeroSection />
      <FeatureGrid />
      <ParallaxShowcase />
      <Footer />
    </div>
  );
}
