"use client";

import { motion } from "motion/react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiExternalLink,
} from "react-icons/fi";

export default function ContactLocationSection() {
  return (
    <section id="contact" className="w-full py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT — CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" p-3 rounded-2xl "
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contact & Location
          </h2>

          <p className="text-gray-600 mb-8">
            Reach out to us or visit our laboratory in Aba. {"We're"} always
            ready to assist you.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-3 bg-white p-3 rounded-2xl  border border-gray-400">
              <FiMapPin className="text-2xl text-blue-600" />
              <p className="text-gray-700">
                128 Aba/Owerri Road, Aba,
                <br />
                Abia State, Nigeria
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 bg-white p-3 rounded-2xl  border border-gray-400">
              <FiPhone className="text-2xl text-blue-600" />
              <a
                href="tel:08033210296"
                className="text-gray-700 hover:underline"
              >
                0803 321 0296
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 bg-white p-3 rounded-2xl  border border-gray-400">
              <FiMail className="text-2xl text-blue-600" />
              <a
                href="mailto:sivonlab@gmail.com"
                className="text-gray-700 hover:underline"
              >
                sivonlab@gmail.com
              </a>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-3 bg-white p-3 rounded-2xl  border border-gray-400">
              <FiClock className="text-2xl text-blue-600" />
              <p className="text-gray-700">
                <strong>Opening Hours:</strong>
                <br />
                Mon – Sat: 8:00 AM – 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://www.google.com/maps?q=128+Aba/Owerri+Road+Aba"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
          >
            Get Directions <FiExternalLink />
          </a>
        </motion.div>

        {/* RIGHT — GOOGLE MAP EMBED */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.5568129833227!2d7.350!3d5.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f3e1f7b8a2f3%3A0x3e99cf917cfbc6b8!2sAba%20Owerri%20Rd%2C%20Aba!5e0!3m2!1sen!2sng!4v1700000000000"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
