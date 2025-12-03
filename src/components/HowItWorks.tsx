"use client";

import { motion } from "motion/react";
import {
  FiFileText,
  FiClipboard,
  FiActivity,
  FiUserCheck,
} from "react-icons/fi";

interface ProcessStep {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Book Your Test",
    icon: <FiFileText size={32} />,
    desc: "Schedule your appointment easily online or via call.",
  },
  {
    title: "Sample Collection",
    icon: <FiClipboard size={32} />,
    desc: "Our trained staff collects your samples safely and professionally.",
  },
  {
    title: "Lab Analysis",
    icon: <FiActivity size={32} />,
    desc: "State-of-the-art equipment ensures accurate results.",
  },
  {
    title: "Receive Results",
    icon: <FiUserCheck size={32} />,
    desc: "Get your results quickly via email, WhatsApp, or in-person.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-3 text-gray-600">
          Simple steps to get accurate diagnostics at Sivon Laboratory.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200 text-center cursor-pointer"
          >
            <div className="flex justify-center text-blue-600 mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
