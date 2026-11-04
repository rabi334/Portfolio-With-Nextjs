"use client";

import Image from "next/image";
import HeroImage from "../hero-image.png";
import { FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function AboutSection() {
  const currentYear = new Date().getFullYear();
  const experienceYears = Math.max(1, currentYear - 2024);

  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-20 border-b-2 border-[#1e2634] bg-[#0d1117] bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 border-b-2 border-[#1e2634] space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00ff66]">
            <span>[ SECTION: 05 ]</span>
            <span>{"//"} ABOUT_ENGINEER &amp; IDENTITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans tracking-tight text-white uppercase">
            ENGINEERING BACKGROUND &amp; PHILOSOPHY
          </h2>
        </div>

        {/* Content Body: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8">
          
          {/* Left Column: Industrial Avatar & Spec Sheet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="brutalist-card p-3 bg-[#0e121a]">
              {/* Window Header */}
              <div className="px-2 py-1.5 bg-[#161b22] border-b border-[#1e2634] flex items-center justify-between text-[11px] font-mono text-gray-400 mb-3">
                <span className="text-[#00ff66]">● DEV_IMAGE.RAW</span>
                <span>RES: 1024x1024</span>
              </div>

              {/* Avatar Frame */}
              <div className="relative w-full h-80 bg-black border-2 border-[#1e2634] overflow-hidden">
                <Image
                  src={HeroImage}
                  alt="Rabira Asefa Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#00ff66]/10 mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/90 border border-[#00ff66] font-mono text-xs text-[#00ff66]">
                  RABIRA // ETHIOPIA
                </div>
              </div>

              {/* Quick Spec Sheet */}
              <div className="mt-4 p-3 bg-[#090c10] border border-[#1e2634] space-y-2 font-mono text-xs text-gray-300">
                <div className="flex justify-between border-b border-[#1e2634] pb-1">
                  <span className="text-gray-400">LOCATION:</span>
                  <span className="text-white flex items-center space-x-1">
                    <FaMapMarkerAlt className="text-[#ff6a00]" size={11} />
                    <span>Addis Ababa, Ethiopia</span>
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1e2634] pb-1">
                  <span className="text-gray-400">ROLE:</span>
                  <span className="text-[#00ff66] font-bold">Full-Stack Engineer</span>
                </div>
                <div className="flex justify-between border-b border-[#1e2634] pb-1">
                  <span className="text-gray-400">LANGUAGE:</span>
                  <span>English, Amharic, Afaan Oromo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">STATUS:</span>
                  <span className="text-[#00ff66] font-bold">AVAILABLE FOR WORK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Dossier & Metrics Counter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="brutalist-card p-6 bg-[#0e121a] space-y-4 font-mono">
              <div className="text-xs text-[#00ff66] font-bold tracking-wider">
                &gt; cat /var/bio/rabira_asefa.md
              </div>

              <h3 className="text-lg sm:text-xl font-sans font-black text-white uppercase tracking-tight">
                BUILDING SCALABLE SOLUTIONS WITH SPEED &amp; RIGOR
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                I am a full-stack software engineer passionate about transforming complex problem statements into elegant, high-throughput web applications. My development philosophy is rooted in clean system design, modular architecture, and uncompromising UX quality.
              </p>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Whether architecting end-to-end RESTful APIs with Node.js and MongoDB or crafting responsive, pixel-perfect user interfaces with Next.js 15 and Tailwind CSS, I approach every project with engineering discipline and attention to performance benchmarks.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href="https://github.com/rabi334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-[#161b22] border border-[#1e2634] hover:border-[#00ff66] text-[#00ff66] flex items-center space-x-2"
                >
                  <FaGithub size={14} />
                  <span>CHECK_GITHUB_COMMITS</span>
                </a>
              </div>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="brutalist-card p-4 bg-[#0e121a] text-center space-y-1 font-mono">
                <div className="text-2xl sm:text-3xl font-black text-[#00ff66]">
                  {experienceYears}+
                </div>
                <div className="text-xs text-gray-300 font-bold uppercase">
                  YEARS EXP
                </div>
                <div className="text-[10px] text-gray-400">
                  Full-stack building
                </div>
              </div>

              <div className="brutalist-card p-4 bg-[#0e121a] text-center space-y-1 font-mono">
                <div className="text-2xl sm:text-3xl font-black text-[#ff6a00]">
                  10+
                </div>
                <div className="text-xs text-gray-300 font-bold uppercase">
                  BUILDS COMPLETED
                </div>
                <div className="text-[10px] text-gray-400">
                  Web apps &amp; APIs
                </div>
              </div>

              <div className="brutalist-card p-4 bg-[#0e121a] text-center space-y-1 font-mono">
                <div className="text-2xl sm:text-3xl font-black text-[#00e5ff]">
                  100%
                </div>
                <div className="text-xs text-gray-300 font-bold uppercase">
                  DELIVERY RECORD
                </div>
                <div className="text-[10px] text-gray-400">
                  On-time fulfillment
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

