"use client";

import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* BRANDING */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Sivon Medical Laboratory
          </h2>
          <p className="mt-3 text-gray-400">
            Accurate diagnostics with modern technology and trusted expertise in
            Aba, Abia State.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#why-us">Why Choose Us</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-white transition font-semibold text-blue-400">
              <a href="#book">Book a Test</a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <div className="flex items-start gap-3 mb-3">
            <FiMapPin className="text-xl text-blue-400" />
            <p>128 Aba/Owerri Road, Aba, Abia State, Nigeria</p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <FiPhone className="text-xl text-blue-400" />
            <a href="tel:08033210296" className="hover:text-white transition">
              0803 321 0296
            </a>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <FiMail className="text-xl text-blue-400" />
            <a
              href="mailto:sivonlab@gmail.com"
              className="hover:text-white transition"
            >
              sivonlab@gmail.com
            </a>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="text-xl hover:text-blue-400 transition">
              <FiFacebook />
            </a>
            <a href="#" className="text-xl hover:text-blue-400 transition">
              <FiInstagram />
            </a>
            <a href="#" className="text-xl hover:text-blue-400 transition">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Sivon Medical Laboratory — All Rights
        Reserved.
      </div>
    </footer>
  );
}
