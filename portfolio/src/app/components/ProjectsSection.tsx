"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaFolder } from "react-icons/fa";
import eCommerceStore from "../E-Commerce-Store.png";
import multCity from "../multcity.png";
import propertyManagementApp from "../property-management-app.png";
import studyMindAI from "../studymind-ai.png";
import photoBookPlatform from "../photobook-platform.png";
import RESTAPIbackend from "../REST-API-backend.png";


interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: "FULL_STACK" | "FRONTEND" | "SYSTEMS";
  technologies: string[];
  description: string;
  highlights: string[];
  image: StaticImageData | string;
  github: string;
  demoUrl: string;
  stars: number;
  forks: number;
}

const projects: ProjectItem[] = [
    {
    id: "property-management-system",
    index: "01", 
    title: "PROPERTY_MANAGEMENT_SYSTEM",
    category: "FULL_STACK",
    technologies: [
      "REACT NATIVE",
      "EXPO",
      "TYPESCRIPT",
      "NODE.JS",
      "EXPRESS",
      "POSTGRESQL",
      "PRISMA",
      "TAILWIND",
    ],
    description:
      "Cross-platform property management application featuring multi-tenant data isolation, lease tracking, rent collection with grace period calculations, maintenance ticketing, and financial analytics.",
    highlights: [
      "Multi-Tenant RBAC",
      "Automated Rent & Grace Tracking",
      "Interactive Financial Dashboard",
      "Cross-Platform (Web & Mobile)",
    ],
    image: propertyManagementApp,
    github: "https://github.com/rabi334/Property-Managment", 
    demoUrl: "https://github.com/rabi334/Property-management", 
    stars: 2,
    forks: 0,
  },
  {
  id: "studymind-ai",
  index: "02",
  title: "STUDYMIND_AI",
  category: "FULL_STACK",
  technologies: ["REACT", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "TAILWIND"],
  description:
    "AI-powered study planning platform that turns course syllabi and exam dates into personalized day-by-day schedules, with PDF-aware study notes, progress tracking, and adaptive plan regeneration.",
  highlights: ["PDF Syllabus Parsing", "LLM-Generated Study Plans", "JWT Authentication"],
  image: studyMindAI,
  github: "https://github.com/rabi334/studymind-ai",
  demoUrl: "https://studymind-ai-nine.vercel.app/",
  stars: 0,
  forks: 0,
  },
  {
    id: "photobook-platform",
    index: "05",
    title: "PHOTOBOOK_PLATFORM",
    category: "SYSTEMS", 
    technologies: [
      "NEST.JS",
      "TYPESCRIPT",
      "POSTGRESQL",
      "PRISMA",
      "REDIS",
      "BULLMQ",
      "SHARP",
      "DOCKER",
    ],
    description:
      "Cloud backend and print-ready rendering engine for an automated photo book platform featuring high-throughput media ingestion, EXIF/GPS extraction, chrono-spatial layout clustering, DeepSeek AI storytelling, and asynchronous PDF generation.",
    highlights: [
      "Asynchronous BullMQ & pdf-lib Engine",
      "Chrono-Spatial Smart Layouts",
      "EXIF Parsing & SHA-256 Deduplication",
      "Redis Caching & Reverse Geocoding",
    ],
    image: photoBookPlatform,
    github: "https://github.com/jirtuu/Photo-Book-BE",
    demoUrl: "https://github.com/rabi334/photobook-backend",
    stars: 0,
    forks: 0,
  },
  {
    id: "ecommerce-store",
    index: "04",
    title: "E-COMMERCE_STORE",
    category: "FULL_STACK",
    technologies: ["NEXT.JS", "REACT", "NODE.JS", "MONGODB", "TAILWIND"],
    description:
      "Full-featured e-commerce platform with secure user authentication, shopping cart architecture, product catalog filtering, and order fulfillment workflows.",
    highlights: ["JWT Authentication", "RESTful API Layer", "Responsive Checkout"],
    image: eCommerceStore,
    github: "https://github.com/rabi334/E-Commerce-Store",
    demoUrl: "https://github.com/rabi334/E-Commerce-Store",
    stars: 12,
    forks: 4,
  },
  {
    id: "weather-app",
    index: "05",
    title: "MULTICITY_WEATHER_RADAR",
    category: "FRONTEND",
    technologies: ["NEXT.JS", "REACT", "OPENWEATHER_API", "TAILWIND"],
    description:
      "Real-time meteorological tracker providing accurate forecasts, multi-city dynamic search, animated climate diagnostics, and responsive telemetry cards.",
    highlights: ["Live Geolocation", "Cached Weather Data", "Dynamic Weather Graphics"],
    image: multCity,
    github: "https://github.com/rabi334/MultiCityWeather-with-Nextjs",
    demoUrl: "https://github.com/rabi334/MultiCityWeather-with-Nextjs",
    stars: 8,
    forks: 3,
  },
  {
    id: "taskflow-api",
    index: "06",
    title: "DISTRIBUTED_API_PORTAL",
    category: "SYSTEMS",
    technologies: ["NODE.JS", "EXPRESS", "POSTGRESQL", "DOCKER"],
    description:
      "High-throughput REST API backend featuring rate limiting, role-based access control (RBAC), relational database indexing, and containerized deployment pipelines.",
    highlights: ["Dockerized Services", "Clean Architecture", "PostgreSQL Migrations"],
    image: RESTAPIbackend,
    github: "https://github.com/rabi334",
    demoUrl: "https://github.com/rabi334",
    stars: 19,
    forks: 7,
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"ALL" | "FULL_STACK" | "FRONTEND" | "SYSTEMS">("ALL");

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-20 border-b-2 border-[#1e2634] bg-[#090c10]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#1e2634]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#00ff66]">
              <span>[ SECTION: 02 ]</span>
              <span>{"//"} RECENT_BUILDS</span>
              <span className="text-gray-400">~/portfolio/projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans tracking-tight text-white uppercase">
              FEATURED ENGINEERING BUILDS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            <span className="text-gray-400 pr-2 hidden sm:inline">FILTER:</span>
            {(["ALL", "FULL_STACK", "FRONTEND", "SYSTEMS"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                suppressHydrationWarning
                className={`px-3 py-1.5 border uppercase transition-all ${
                  filter === cat
                    ? "bg-[#00ff66] text-black font-bold border-black shadow-[2px_2px_0px_#000]"
                    : "border-[#1e2634] text-gray-400 hover:text-white bg-[#0e121a]"
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="brutalist-card flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Terminal Header */}
              <div className="px-3 py-2 bg-[#121722] border-b-2 border-[#1e2634] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-2 truncate">
                  <FaFolder className="text-[#ff6a00] shrink-0" />
                  <span className="font-bold text-gray-200 truncate">
                    PROJECT: {project.index} {"//"} {project.title}
                  </span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 bg-black border border-[#1e2634] text-[#00ff66] shrink-0">
                  [{project.category}]
                </span>
              </div>

              {/* Project Image Preview */}
              <div className="relative w-full h-48 bg-black border-b-2 border-[#1e2634] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Tech Badges */}
                <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 bg-black/90 border border-[#2d3748] text-[#00ff66] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 bg-black/90 border border-[#2d3748] text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-mono leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture highlights bullet list */}
                  <div className="mt-3 space-y-1">
                    {project.highlights.map((hl) => (
                      <div
                        key={hl}
                        className="text-[11px] font-mono text-gray-400 flex items-center space-x-1.5"
                      >
                        <span className="text-[#00ff66]">&gt;</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metadata & Actions */}
                <div className="pt-4 border-t border-[#1e2634] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1 hover:text-[#ffbd2e]">
                        <FaStar size={11} className="text-[#ffbd2e]" />
                        <span>{project.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <FaCodeBranch size={11} />
                        <span>{project.forks}</span>
                      </span>
                    </div>
                    <span className="text-[10px] text-[#00ff66]">TESTED_OK</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-mono">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#121722] border border-[#1e2634] hover:border-[#00ff66] hover:text-[#00ff66] text-xs font-bold text-center flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <FaGithub size={12} />
                      <span>CODE</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#00ff66] text-black border border-black hover:bg-[#1aff75] text-xs font-extrabold text-center flex items-center justify-center space-x-1.5 shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] transition-all"
                    >
                      <span>LAUNCH</span>
                      <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 bg-[#0e121a] border-2 border-[#1e2634] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[#00ff66]">●</span>
            <span>WANT TO INSPECT MORE REPOSITORIES &amp; ARCHITECTURES?</span>
          </div>
          <a
            href="https://github.com/rabi334"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-green px-4 py-2 text-xs flex items-center space-x-2 shrink-0"
          >
            <FaGithub size={14} />
            <span>VISIT_GITHUB_PROFILE ↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

