"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={` w-full  z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md py-3 fixed top-0 text-black"
            : "bg-blue-950/50 py-3 sticky top-0 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className=" font-bold text-2xl">
            Sivon Medical Laboratory
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#home" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="#services" className="hover:text-blue-400 transition">
              Services / Tests
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
            <Link
              href="#book"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Book a Test
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        id="mobile-menu"
        className={`md:hidden bg-white text-black absolute w-full overflow-hidden shadow-lg z-20 ${
          menuOpen ? "fixed top-[92px]" : ""
        } `}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-lg font-medium">
          <Link
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Services / Tests
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 bg-blue-600 rounded-lg text-white text-center hover:bg-blue-700"
          >
            Book a Test
          </Link>
        </div>
      </motion.div>
    </>
  );
}
