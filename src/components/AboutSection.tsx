"use client";

import React from "react";
import { FiActivity, FiUsers, FiShield } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Precision. Care. <br />
            <span className="text-blue-600">Trusted Diagnostics.</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Sivon Laboratory is a leading diagnostic center providing accurate,
            fast, and reliable medical testing for individuals, hospitals, and
            organizations.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            With over 15 years of service, we combine advanced technology with
            compassionate patient care to deliver exceptional results.
          </p>
        </div>

        {/* RIGHT – Modern Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-transperant p-4 md:p-8 rounded-2xl border border-blue-400 text-center">
            <FiActivity className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600 mt-1">Years Experience</p>
          </div>

          <div className="bg-transperant p-4 md:p-8 rounded-2xl border border-blue-400 text-center">
            <FiUsers className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600 mt-1">Patients Served</p>
          </div>

          <div className="col-span-2 bg-transperant p-4 md:p-8 rounded-2xl border border-blue-400 text-center">
            <FiShield className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="text-4xl font-bold text-gray-900">ISO Certified</h3>
            <p className="text-gray-600 mt-1">Quality & Compliance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
