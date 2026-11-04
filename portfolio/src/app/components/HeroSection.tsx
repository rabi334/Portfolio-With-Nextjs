"use client";

import { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../hero-image.png";
import {
  FaCheck,
  FaTerminal,
  FaArrowRight,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

interface TechTelemetry {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  iconColor: string;
  badge: string;
  level: number;
  secondaryColor?: string;
  status: string;
}

const techItems: TechTelemetry[] = [
  {
    id: "ts",
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-[#3178c6]",
    badge: "TS",
    level: 90,
    secondaryColor: "bg-[#3178c6]",
    status: "OPTIMAL",
  },
  {
    id: "react",
    name: "React / Next.js",
    icon: SiNextdotjs,
    iconColor: "text-white",
    badge: "NEXT",
    level: 95,
    secondaryColor: "bg-[#00ff66]",
    status: "CORE",
  },
  {
    id: "node",
    name: "Node.js / Express",
    icon: SiNodedotjs,
    iconColor: "text-[#539e43]",
    badge: "NODE",
    level: 88,
    secondaryColor: "bg-[#539e43]",
    status: "ACTIVE",
  },
  {
    id: "db",
    name: "PostgreSQL / Mongo",
    icon: SiPostgresql,
    iconColor: "text-[#336791]",
    badge: "SQL",
    level: 84,
    secondaryColor: "bg-[#00e5ff]",
    status: "READY",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    iconColor: "text-[#38bdf8]",
    badge: "CSS",
    level: 94,
    secondaryColor: "bg-[#38bdf8]",
    status: "POLISHED",
  },
  {
    id: "docker",
    name: "Docker / Git",
    icon: SiDocker,
    iconColor: "text-[#2496ed]",
    badge: "OPS",
    level: 80,
    secondaryColor: "bg-[#ff6a00]",
    status: "SYNCED",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full pt-8 pb-16 md:pt-14 md:pb-20 border-b-2 border-[#1e2634] bg-grid-pattern overflow-hidden"
    >
      {/* Decorative Crosshair Grid Markers */}
      <div className="absolute top-4 left-4 text-[#00ff66] font-mono text-xs flex items-center space-x-1 select-none">
        <span>+</span>
        <span className="text-[10px] text-gray-400">LOC: [09°N, 38°E]</span>
      </div>
      <div className="absolute top-4 right-4 text-[#ff6a00] font-mono text-xs flex items-center space-x-1 select-none">
        <span className="text-[10px] text-gray-400">SYS:ONLINE</span>
        <span>+</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Hero Headline & Action Terminal */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Command Line Path */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0e141f] border border-[#1e2634] text-xs font-mono">
              <span className="text-[#00ff66] font-bold">~</span>
              <span className="text-gray-400">/portfolio/rabira-asefa</span>
              <span className="text-gray-500">{"//"}</span>
              <span className="text-[#00e5ff] font-semibold">init.sh</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-[#00ff66] bg-black p-0.5 shadow-[3px_3px_0px_#000]">
                  <Image
                    src={HeroImage}
                    alt="Rabira Asefa"
                    fill
                    sizes="80px"
                    priority
                    className="object-cover"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-[#00ff66] text-black text-[9px] font-mono font-bold px-1 border border-black">
                    DEV
                  </span>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-[#00ff66] font-bold">
                    SYSTEM IDENTIFIER:
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans tracking-tight text-white uppercase leading-none">
                    RABIRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">ASEFA</span>
                  </h1>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono text-gray-200 tracking-tight pt-2">
                {"//"} FULL-STACK ENGINEER
              </h2>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-mono leading-relaxed max-w-2xl border-l-2 border-[#00ff66] pl-4 py-1 bg-[#0e141f]/60">
              BUILDING HIGH-PERFORMANCE WEB APPLICATIONS, ROBUST BACKEND APIS &amp;
              SEAMLESS DIGITAL ARCHITECTURES WITH MODERN TECHNOLOGIES.
            </p>

            {/* High-Impact Brutalist Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="neo-btn-green px-6 py-3.5 text-center text-sm tracking-wider flex items-center justify-center space-x-2"
              >
                <span>VIEW_PROJECTS</span>
                <FaArrowRight size={12} />
              </a>
              <a
                href="#contact"
                className="neo-btn-white px-6 py-3.5 text-center text-sm tracking-wider flex items-center justify-center space-x-2"
              >
                <FaEnvelope size={12} />
                <span>GET_IN_TOUCH</span>
              </a>
            </div>

            {/* Social / Direct Proof Strip */}
            <div className="pt-4 border-t border-[#1e2634] flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
              <span className="text-gray-400">{"//"} CONNECT:</span>
              <a
                href="https://github.com/rabi334"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-2.5 py-1 border border-[#1e2634] bg-[#0e121a] hover:border-[#00ff66] hover:text-[#00ff66] transition-colors"
              >
                <FaGithub />
                <span>GITHUB</span>
              </a>
              <a
                href="mailto:rabiraasefa541@gmail.com"
                className="flex items-center space-x-1.5 px-2.5 py-1 border border-[#1e2634] bg-[#0e121a] hover:border-[#ff6a00] hover:text-[#ff6a00] transition-colors"
              >
                <FaEnvelope />
                <span>EMAIL</span>
              </a>
              <span className="text-[#00ff66] hidden sm:inline">
                ● 100% COMMITTED TO CODE QUALITY
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: system_diagnostics.sh Terminal Window */}
          <div className="lg:col-span-5">
            <div className="w-full bg-[#0d1117] border-2 border-[#1e2634] shadow-[6px_6px_0px_#000000] relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b-2 border-[#1e2634]">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs font-mono text-gray-300">
                  <FaTerminal size={11} className="text-[#00ff66]" />
                  <span className="font-bold">system_diagnostics.sh</span>
                </div>
                <button
                  aria-label="window close"
                  suppressHydrationWarning
                  className="text-gray-400 hover:text-white text-xs font-mono px-1"
                >
                  ✕
                </button>
              </div>

              {/* Sub-header diagnostics info */}
              <div className="px-3.5 py-2 bg-[#090c10] border-b border-[#1e2634] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>STACK_TELEMETRY: [LOADED]</span>
                <span className="text-[#00ff66]">HEALTH: 100%</span>
              </div>

              {/* Terminal Content: Grid of Tech Telemetry */}
              <div className="p-3 sm:p-4 bg-[#0d1117] space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {techItems.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#121722] border border-[#1e2634] hover:border-[#00ff66] p-2.5 cursor-pointer transition-all duration-150 flex flex-col justify-between space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-7 h-7 bg-[#1a2130] border border-[#2d3748] flex items-center justify-center">
                              <IconComponent className={`text-base ${tech.iconColor}`} />
                            </div>
                            <div>
                              <div className="text-xs font-bold font-mono text-white leading-tight">
                                {tech.name}
                              </div>
                              <div className="text-[10px] text-gray-400 font-mono">
                                STATUS: {tech.status}
                              </div>
                            </div>
                          </div>
                          <span className="text-[#00ff66] text-xs">
                            <FaCheck size={11} />
                          </span>
                        </div>

                        {/* Dual Telemetry Level Bar */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                            <span>LEVEL</span>
                            <span className="text-gray-200">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-[#1b2230] h-2 border border-[#2b3547] overflow-hidden flex">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level * 0.7}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="h-full bg-[#00ff66]"
                            />
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level * 0.3}%` }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                              className="h-full bg-[#ff6a00]"
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Console Output Footer Bar */}
                <div className="mt-2 p-2 bg-[#080b0f] border border-[#1e2634] font-mono text-[11px] text-gray-400 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#00ff66] animate-pulse">❯</span>
                    <span>READY_FOR_DEPLOYMENT</span>
                  </div>
                  <span className="text-[#ff6a00] font-bold">[ONLINE]</span>
                </div>
              </div>

              {/* Bottom decorative coordinates */}
              <div className="px-3 py-1 bg-[#161b22] border-t border-[#1e2634] flex justify-between text-[10px] font-mono text-gray-400">
                <span>BUFFER: 4096KB</span>
                <span>ENC: UTF-8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

