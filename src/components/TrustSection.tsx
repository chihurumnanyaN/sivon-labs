"use client";

import { motion } from "motion/react";
import { FiClock, FiCpu, FiAward, FiUsers } from "react-icons/fi";

interface TrustPoint {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const trustPoints: TrustPoint[] = [
  {
    title: "Fast Results",
    icon: <FiClock size={32} />,
    desc: "Get your test results quickly and reliably, no unnecessary delays.",
  },
  {
    title: "Modern Equipment",
    icon: <FiCpu size={32} />,
    desc: "State-of-the-art laboratory instruments for accurate diagnostics.",
  },
  {
    title: "Experienced Staff",
    icon: <FiAward size={32} />,
    desc: "Professional lab technicians with years of expertise in Aba, Abia.",
  },
  {
    title: "Trusted by Patients",
    icon: <FiUsers size={32} />,
    desc: "Thousands of satisfied patients trust us for their health needs.",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="w-full py-24 px-6 relative bg-gray-50"
      style={{
        backgroundImage: "url('/medlabwoman.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto text-center mb-16 text-white">
        <h2 className="text-4xl font-bold">Why Choose Sivon Laboratory</h2>
        <p className="mt-3 text-gray-100">
          Reliable diagnostics in Aba, Abia, that you can trust.
        </p>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {trustPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-white/90 text-gray-900 rounded-2xl border border-gray-200 
              shadow-sm hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer"
          >
            <div className="text-blue-600 mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold">{point.title}</h3>
            <p className="mt-2">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
