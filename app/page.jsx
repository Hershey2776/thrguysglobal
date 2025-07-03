"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroSection from "./components/hero-section";
import CapabilitiesSection from "./components/capabilities-section";
import CaseStudiesSection from "./components/case-studies-section";
import ProcessSection from "./components/process-section";
import TestimonialsSection from "./components/testimonials-section";
import CTASection from "./components/cta-section";
import Navigation from "./components/navigation";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div id="services">
        <CapabilitiesSection />
      </div>
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <div id="about">
        <ProcessSection />
      </div>
      <TestimonialsSection />
      <div id="contact">
        <CTASection />
      </div>
    </div>
  );
}
