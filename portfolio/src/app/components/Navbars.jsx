"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTerminal, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ScrollSpy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "tech-stack", "services", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "PROJECTS", href: "#projects", id: "projects" },
    { name: "TECH_STACK", href: "#tech-stack", id: "tech-stack" },
    { name: "SERVICES", href: "#services", id: "services" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "CONTACT.EXE", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090c10]/95 backdrop-blur border-b-2 border-[#1e2634]">
      {/* Top micro line / system bar */}
      <div className="hidden sm:flex justify-between items-center px-4 py-1 text-[11px] font-mono text-gray-400 border-b border-[#1e2634]/60 bg-[#06080b]">
        <div className="flex items-center space-x-3">
          <span className="text-[#00ff66]">● PORT: 3000 [ESTABLISHED]</span>
          <span>// PROTOCOL: HTTPS</span>
          <span>// LATENCY: 24ms</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>HOST: RABIRA_ENGINEERING</span>
          <span className="text-[#ff6a00]">BUILD: v2.4.0</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          className="flex items-center space-x-2 text-white font-mono font-bold tracking-wider hover:text-[#00ff66] transition-colors"
        >
          <div className="w-8 h-8 bg-[#1e2634] border border-[#2d3748] flex items-center justify-center text-[#00ff66]">
            <FaTerminal size={14} />
          </div>
          <span className="text-sm sm:text-base">
            SYSTEM:<span className="text-[#00ff66]">PORTFOLIO</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1 font-mono text-xs font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`px-3 py-1.5 transition-all uppercase tracking-wider ${
                activeSection === link.id
                  ? "bg-[#1e2634] text-[#00ff66] border border-[#00ff66]/40"
                  : "text-gray-300 hover:text-white hover:bg-[#161c28]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Status & Action */}
        <div className="hidden md:flex items-center space-x-4 font-mono text-xs">
          {/* Active Status Badge */}
          <div className="flex items-center space-x-2 px-2.5 py-1 bg-[#0e141f] border border-[#1e2634] text-[#00ff66]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
            </span>
            <span className="font-bold tracking-wider text-[11px]">
              STATUS:ACTIVE_FOR_HIRE
            </span>
          </div>

          {/* Resume Button */}
          <a
            href="mailto:rabiraasefa541@gmail.com?subject=Job%20Opportunity%20/%20Resume%20Request"
            className="neo-btn-orange px-3.5 py-1.5 text-xs flex items-center space-x-1.5"
          >
            <FaFileAlt size={11} />
            <span>GET_RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-2 lg:hidden">
          <div className="flex md:hidden items-center space-x-1.5 px-2 py-0.5 bg-[#0e141f] border border-[#1e2634] text-[#00ff66] text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66]"></span>
            <span>ACTIVE</span>
          </div>

          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            suppressHydrationWarning
            className="p-2 border border-[#1e2634] bg-[#0e141f] text-white hover:text-[#00ff66] hover:border-[#00ff66]"
          >
            {isMobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Terminal Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#090c10]/98 border-t-2 border-[#1e2634] p-6 flex flex-col justify-between overflow-y-auto z-50">
          <div className="space-y-3 font-mono">
            <div className="text-xs text-gray-400 pb-2 border-b border-[#1e2634]">
              $ // NAVIGATION_DIRECTORY
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={toggleMobileMenu}
                className={`block px-4 py-3 border text-sm font-bold tracking-wider ${
                  activeSection === link.id
                    ? "border-[#00ff66] text-[#00ff66] bg-[#0e141f]"
                    : "border-[#1e2634] text-gray-200 hover:border-gray-500 bg-[#0b0e14]"
                }`}
              >
                &gt; {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-[#1e2634] space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>● STATUS:</span>
              <span className="text-[#00ff66] font-bold">ACTIVE_FOR_HIRE</span>
            </div>
            <a
              href="mailto:rabiraasefa541@gmail.com?subject=Job%20Opportunity%20/%20Resume%20Request"
              onClick={toggleMobileMenu}
              className="w-full neo-btn-orange text-center py-2.5 text-xs block"
            >
              [ GET_RESUME ]
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbars;
