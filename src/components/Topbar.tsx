"use client";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

export default function TopContactBar() {
  return (
    <div className="w-full bg-white text-black py-2 text-sm z-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        {/* Address */}
        <div className="flex items-center gap-2">
          <FiMapPin className="text-lg text-blue-600" />
          <span>128 Aba/Owerri Road, Aba, Abia State, Nigeria</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FiPhone className="text-lg text-blue-600" />
          <a href="tel:08033210296" className="hover:underline">
            0803 321 0296
          </a>
        </div>

        {/* Email (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-2">
          <FiMail className="text-lg text-blue-600" />
          <a href="mailto:sivonlab@gmail.com" className="hover:underline">
            sivonlab@gmail.com
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FiFacebook size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FiInstagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FiTwitter size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
