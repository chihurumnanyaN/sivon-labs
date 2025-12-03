"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "./NavBar";
import { useScroll } from "../context/ScrollContext";

export default function HeroSection() {
  const { scrolled } = useScroll();
  return (
    <section className="relative w-full h-[90vh] md:h-screen  flex flex-col gap-30 items-start justify-start text-white">
      <Navbar scrolled={scrolled} />
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/lab-bg.jpg"
          alt="Laboratory Background"
          fill
          className="object-cover brightness-75 animate-zoom"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-3 md:px-16 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-6xl font-bold leading-tight ${
            scrolled && "mt-45"
          }`}
        >
          Accurate Diagnostics.
          <br /> Trusted Laboratory Results.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl "
        >
          Providing fast, precise, and affordable medical testing for
          individuals, hospitals, and organizations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 flex items-center justify-start gap-4"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition">
            Book a Test
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition">
            View Services
          </button>
        </motion.div>
      </div>

      {/* Stats Floating */}
    </section>
  );
}
