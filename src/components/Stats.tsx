"use client";

import React from "react";
import { FiActivity, FiAward, FiStar, FiUsers } from "react-icons/fi";
import { motion } from "motion/react";

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 w-full max-w-5xl px-4 z-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
        {/* Stat 1 */}
        <div className="text-center flex flex-col items-center gap-1">
          <FiStar className="text-3xl text-yellow-400" />
          <h3 className="text-xl md:text-2xl font-semibold">15+ Years</h3>
          <p className="text-gray-200 text-sm">Trusted Experience</p>
        </div>

        {/* Stat 2 */}
        <div className="text-center flex flex-col items-center gap-1">
          <FiActivity className="text-3xl text-green-400" />
          <h3 className="text-xl md:text-2xl font-semibold">10,000+</h3>
          <p className="text-gray-200 text-sm">Tests Processed</p>
        </div>

        {/* Stat 3 */}
        <div className="text-center flex flex-col items-center gap-1">
          <FiUsers className="text-3xl text-blue-400" />
          <h3 className="text-xl md:text-2xl font-semibold">98% Rating</h3>
          <p className="text-gray-200 text-sm">Customer Satisfaction</p>
        </div>

        {/* Stat 4 */}
        <div className="text-center flex flex-col items-center gap-1">
          <FiAward className="text-3xl text-orange-400" />
          <h3 className="text-xl md:text-2xl font-semibold">ISO</h3>
          <p className="text-gray-200 text-sm">Certified Lab</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
