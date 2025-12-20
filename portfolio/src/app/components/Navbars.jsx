"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center w-full left-0 z-20 bg-black">
        <div className="text-2xl font-bold z-20 ">Rabira</div>

        {!isMobileMenuOpen && (
          <div onClick={toggleMobileMenu} className="cursor-pointer md:hidden">
            <FaBars size={30} />
          </div>
        )}

        {isMobileMenuOpen && (
          <div
            onClick={toggleMobileMenu}
            className="cursor-pointer md:hidden z-20"
          >
            <FaTimes size={30} />
          </div>
        )}

        {isMobileMenuOpen ? (
          <div className="bg-gray-800 fixed z-10 top-0 left-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in">
            <Link
              onClick={toggleMobileMenu}
              href="/"
              className="hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href="/about"
              className="hover:text-gray-400"
            >
              About ME
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href="/servic"
              className="hover:text-gray-400"
            >
              Services
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href="/projects"
              className="hover:text-gray-400"
            >
              Projects
            </Link>
            <Link
              onClick={toggleMobileMenu}
              href="/contact"
              className="hover:text-gray-400"
            >
              Contact
            </Link>
          </div>
        ) : (
          <div className="fixed top-0 left-[-150%] w-screen min-h-screen" />
        )}

        <div className="hidden space-x-6 md:flex">
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

        <button className="bg-green-600 text-white hidden md:flex px-4 py-2 rounded-full hover:scale-105">
          Contact me
        </button>
      </div>
    </nav>
  );
};

export default Navbars;
