"use client";

import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-[#090c10] text-[#e6edf3] selection:bg-[#00ff66] selection:text-black">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
