"use client";

import { ComponentType } from "react";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaMobileAlt,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

interface ServiceItem {
  id: string;
  code: string;
  title: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  description: string;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: "full-stack",
    code: "SVC_01",
    title: "FULL_STACK WEB APPLICATIONS",
    icon: FaLayerGroup,
    description:
      "End-to-end web system architecture from database schemas to responsive client-side interfaces using Next.js, React, Node.js, and MongoDB.",
    deliverables: ["Complete web app architecture", "State & auth management", "High-conversion UX"],
  },
  {
    id: "backend-api",
    code: "SVC_02",
    title: "BACKEND APIS & MICROSERVICES",
    icon: FaServer,
    description:
      "Engineered server-side logic, secure RESTful APIs, relational/document database schemas, caching, and resilient error recovery.",
    deliverables: ["High-throughput endpoints", "JWT / RBAC security", "Clean database schemas"],
  },
  {
    id: "frontend-ui",
    code: "SVC_03",
    title: "FRONTEND UI/UX SYSTEMS",
    icon: FaLaptopCode,
    description:
      "Pixel-perfect, high-performance interfaces built with modern React, Tailwind CSS, smooth interaction physics, and cross-browser consistency.",
    deliverables: ["Fluid responsive layouts", "Accessible components", "Snappy micro-interactions"],
  },
  {
    id: "mobile-responsive",
    code: "SVC_04",
    title: "RESPONSIVE MOBILE & TABLET ADAPTATION",
    icon: FaMobileAlt,
    description:
      "Seamless responsiveness engineered from the ground up to ensure touch-friendly interfaces across smartphones, tablets, and high-DPI displays.",
    deliverables: ["Adaptive fluid viewports", "Touch gesture support", "0% horizontal overflow"],
  },
  {
    id: "perf-seo",
    code: "SVC_05",
    title: "PERFORMANCE & CORE WEB VITALS",
    icon: FaBolt,
    description:
      "Speed profiling, asset compression, server-side rendering (SSR), and SEO tuning to hit green 90+ Lighthouse scores.",
    deliverables: ["Sub-second page loads", "SEO metadata schemas", "Optimized Core Web Vitals"],
  },
  {
    id: "code-audit",
    code: "SVC_06",
    title: "CODE REFACTORING & ARCHITECTURE AUDITS",
    icon: FaShieldAlt,
    description:
      "Transition legacy codebases to modern TypeScript & Next.js architectures with modular folder structures and maintainable design patterns.",
    deliverables: ["TypeScript migration", "Component modularization", "Cleaner build bundles"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-20 border-b-2 border-[#1e2634] bg-[#090c10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-6 border-b-2 border-[#1e2634] space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00ff66]">
            <span>[ SECTION: 04 ]</span>
            <span>{"//"} CORE_CAPABILITIES &amp; SERVICES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans tracking-tight text-white uppercase">
              ENGINEERING SERVICES FOR HIRE
            </h2>
            <div className="text-xs font-mono text-gray-400">
              AVAILABLE FOR FREELANCE &amp; FULL-TIME CONTRACTS
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="brutalist-card flex flex-col justify-between p-5 space-y-4"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#1e2634]">
                    <div className="w-10 h-10 bg-[#161b22] border-2 border-[#1e2634] flex items-center justify-center text-[#00ff66]">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#ff6a00] px-2 py-0.5 bg-[#090c10] border border-[#1e2634]">
                      {svc.code}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-mono font-bold text-base text-white mt-4 uppercase tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-300 mt-2 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-3 border-t border-[#1e2634] space-y-1.5 font-mono text-[11px] text-gray-400">
                  <div className="text-[10px] text-[#00ff66] font-bold uppercase">
                    {"//"} KEY DELIVERABLES:
                  </div>
                  {svc.deliverables.map((item) => (
                    <div key={item} className="flex items-center space-x-1.5">
                      <span className="text-[#00ff66]">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

