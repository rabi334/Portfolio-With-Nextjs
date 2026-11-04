"use client";

import { ComponentType } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCheckCircle,
  FaTerminal,
} from "react-icons/fa";

interface SkillCategory {
  title: string;
  command: string;
  icon: ComponentType<{ className?: string; size?: number }>;
  skills: { name: string; level: number; tag: string }[];
}

const categories: SkillCategory[] = [
  {
    title: "FRONTEND_SYSTEMS",
    command: "$ grep -r 'ui_engineering'",
    icon: FaCode,
    skills: [
      { name: "React 19 / Next.js 15 (App Router)", level: 95, tag: "EXPERT" },
      { name: "TypeScript (Strict Mode)", level: 90, tag: "ADVANCED" },
      { name: "Tailwind CSS & Neo-Brutalist Systems", level: 94, tag: "EXPERT" },
      { name: "TanStack Query & Axios API State", level: 88, tag: "ADVANCED" },
      { name: "Responsive & Cross-Device Engineering", level: 96, tag: "CORE" },
    ],
  },
  {
    title: "BACKEND_INFRASTRUCTURE",
    command: "$ cat /etc/api/services.conf",
    icon: FaServer,
    skills: [
      { name: "Node.js & Express Architecture", level: 90, tag: "ADVANCED" },
      { name: "RESTful API Design & Routing", level: 92, tag: "EXPERT" },
      { name: "Authentication (JWT, Sessions, OAuth)", level: 86, tag: "ADVANCED" },
      { name: "Microservice & Modular Backend", level: 82, tag: "SOLID" },
      { name: "Server Error Handling & Logging", level: 89, tag: "ADVANCED" },
    ],
  },
  {
    title: "DATA_AND_DEVOPS",
    command: "$ docker ps --format 'table'",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB & Mongoose Schema Modeling", level: 90, tag: "EXPERT" },
      { name: "PostgreSQL & Relational Data Design", level: 84, tag: "ADVANCED" },
      { name: "Git Workflow & Branching Strategies", level: 92, tag: "CORE" },
      { name: "Docker Containerization", level: 80, tag: "SOLID" },
      { name: "Performance Profiling & Optimization", level: 87, tag: "ADVANCED" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative w-full py-16 md:py-20 border-b-2 border-[#1e2634] bg-[#0d1117] bg-mini-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 border-b-2 border-[#1e2634] space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00ff66]">
            <span>[ SECTION: 03 ]</span>
            <span>{"//"} ARCHITECTURE &amp; SKILL_MATRIX</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans tracking-tight text-white uppercase">
              TECHNICAL PROFICIENCY MATRIX
            </h2>
            <div className="text-xs font-mono text-gray-400 flex items-center space-x-2">
              <FaTerminal className="text-[#00ff66]" />
              <span>TESTED ON PRODUCTION DEPLOYMENTS</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="brutalist-card flex flex-col justify-between overflow-hidden"
              >
                {/* Header */}
                <div className="p-3 bg-[#161b22] border-b-2 border-[#1e2634] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-[#090c10] border border-[#2d3748] flex items-center justify-center text-[#00ff66]">
                      <Icon size={14} />
                    </div>
                    <span className="font-mono font-bold text-xs text-white tracking-wider">
                      {cat.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Sub-header command */}
                <div className="px-3.5 py-1.5 bg-[#090c10] border-b border-[#1e2634] text-[11px] font-mono text-gray-400">
                  {cat.command}
                </div>

                {/* Skills list */}
                <div className="p-4 space-y-4 flex-1">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5 font-mono">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1.5 text-gray-200">
                          <FaCheckCircle
                            size={10}
                            className="text-[#00ff66] shrink-0"
                          />
                          <span className="truncate">{skill.name}</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#090c10] border border-[#1e2634] text-[#ff6a00] font-bold shrink-0 ml-2">
                          {skill.tag}
                        </span>
                      </div>

                      {/* Brutalist Progress Bar */}
                      <div className="w-full bg-[#090c10] h-2 border border-[#1e2634] overflow-hidden flex">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full bg-gradient-to-r from-[#00ff66] to-[#00e5ff]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="px-3 py-2 bg-[#121722] border-t border-[#1e2634] flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>TELEMETRY: VERIFIED</span>
                  <span className="text-[#00ff66]">● STATUS_OK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

