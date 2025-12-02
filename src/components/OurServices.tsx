"use client";

import { motion } from "motion/react";
import { FaMicroscope } from "react-icons/fa";
import {
  FiDroplet,
  FiActivity,
  FiHeart,
  FiThermometer,
  FiShield,
} from "react-icons/fi";

const services = [
  {
    title: "Blood Tests",
    icon: <FiDroplet size={32} />,
    desc: "Accurate blood analysis for complete health insights.",
  },
  {
    title: "Maleria Tests",
    icon: <FiShield size={32} />,
    desc: "Fast PCR & rapid antigen testing.",
  },
  {
    title: "Hormonal Profiles",
    icon: <FiActivity size={32} />,
    desc: "Check hormone levels for wellness and diagnostics.",
  },
  {
    title: "Cardiac Markers",
    icon: <FiHeart size={32} />,
    desc: "Early detection of heart-related issues.",
  },
  {
    title: "Microbiology Tests",
    icon: <FaMicroscope size={32} />,
    desc: "Identify infections quickly and accurately.",
  },
  {
    title: "Temperature & Flu Tests",
    icon: <FiThermometer size={32} />,
    desc: "Instant diagnosis for fever & related conditions.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Test Categories
        </h2>
        <p className="text-gray-600 mt-3">
          Reliable and comprehensive diagnostic services.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="p-8 rounded-2xl border border-gray-300 bg-transparent backdrop-blur-sm 
              hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100
              transition-all cursor-pointer"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
