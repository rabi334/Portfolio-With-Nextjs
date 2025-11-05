"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold md:inline">Rabira</div>
        <div className="hidden space-x-6 md:inline ">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About ME
          </Link>

          <Link href="/servic" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu}>
            {/* {isMobileMenuOpen ? <FaTimes /> : <FaBars />} */}
            {isMobileMenuOpen ? (
              
              <div className=" ml-3 space-x-6 flex ">
                
                <Link href="/" className="hover:text-gray-400 ">
                  Home
                </Link>
                <Link href="/about" className="hover:text-gray-400">
                  About ME
                </Link>

                <Link href="/servic" className="hover:text-gray-400">
                  Services
                </Link>
                <Link href="/projects" className="hover:text-gray-400">
                  Projects
                </Link>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
                <FaTimes />
              </div>
            ) : (
              <FaBars className="ml-40 text-right"/>
            )}
          </button>
        </div>
        <button className="bg-green-600 text-white hidden md:inline px-4 py-2 rounded-full hover:scale-105">
          Contact me
        </button>
      </div>
    </nav>
  );
};

export default Navbars;
