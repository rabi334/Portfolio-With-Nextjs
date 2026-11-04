"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaTerminal } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#06080c] border-t-2 border-[#1e2634] font-mono text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#1e2634]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-white font-bold text-sm">
              <div className="w-6 h-6 bg-[#1e2634] border border-[#2d3748] flex items-center justify-center text-[#00ff66]">
                <FaTerminal size={11} />
              </div>
              <span>RABIRA_ASEFA // ENGINEERING_SYSTEM</span>
            </div>
            <p className="text-[11px] text-gray-400">
              Building high-throughput web applications and scalable software architectures.
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            suppressHydrationWarning
            className="neo-btn-white px-3.5 py-2 text-xs flex items-center space-x-2 shrink-0 self-start md:self-auto"
          >
            <span>SCROLL_TO_TOP</span>
            <FaArrowUp size={11} />
          </button>
        </div>

        {/* Middle row: System Status & Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          {/* Col 1 */}
          <div className="space-y-2">
            <div className="text-white font-bold text-[11px] uppercase tracking-wider text-[#00ff66]">
              // TELEMETRY
            </div>
            <div className="text-[11px] text-gray-400 space-y-1">
              <div>STATUS: <span className="text-[#00ff66]">ONLINE (200 OK)</span></div>
              <div>DEPLOY: VERCEL_EDGE</div>
              <div>STACK: NEXT.JS 15 + REACT 19</div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <div className="text-white font-bold text-[11px] uppercase tracking-wider text-[#00ff66]">
              // NAVIGATION
            </div>
            <div className="flex flex-col space-y-1 text-[11px]">
              <Link href="#hero" className="hover:text-[#00ff66] transition-colors">&gt; HERO_INTRO</Link>
              <Link href="#projects" className="hover:text-[#00ff66] transition-colors">&gt; RECENT_BUILDS</Link>
              <Link href="#tech-stack" className="hover:text-[#00ff66] transition-colors">&gt; SKILL_MATRIX</Link>
              <Link href="#services" className="hover:text-[#00ff66] transition-colors">&gt; CAPABILITIES</Link>
              <Link href="#contact" className="hover:text-[#00ff66] transition-colors">&gt; CONTACT.EXE</Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <div className="text-white font-bold text-[11px] uppercase tracking-wider text-[#00ff66]">
              // BASE_LOCATION
            </div>
            <div className="text-[11px] text-gray-400 space-y-1">
              <div>CITY: Addis Ababa</div>
              <div>COUNTRY: Ethiopia</div>
              <div>TIMEZONE: UTC+3 (EAT)</div>
            </div>
          </div>

          {/* Col 4 */}
          <div className="space-y-2">
            <div className="text-white font-bold text-[11px] uppercase tracking-wider text-[#00ff66]">
              // SOCIAL_CHANNELS
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href="https://github.com/rabi334"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0e121a] border border-[#1e2634] hover:border-[#00ff66] hover:text-[#00ff66] flex items-center justify-center text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="mailto:rabiraasefa541@gmail.com"
                className="w-8 h-8 bg-[#0e121a] border border-[#1e2634] hover:border-[#ff6a00] hover:text-[#ff6a00] flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={13} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0e121a] border border-[#1e2634] hover:border-[#00e5ff] hover:text-[#00e5ff] flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={13} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0e121a] border border-[#1e2634] hover:border-[#3178c6] hover:text-[#3178c6] flex items-center justify-center text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#1e2634] flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2">
          <div>
            © {currentYear} RABIRA ASEFA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#00ff66]">● 0 LINTER WARNINGS</span>
            <span>LICENSED UNDER MIT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
