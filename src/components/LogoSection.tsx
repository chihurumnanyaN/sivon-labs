"use client";

import Image from "next/image";

const ACCREDITATIONS = [
  { name: "NAFDAC", domain: "nafdac.gov.ng" },
  { name: "SON", domain: "son.gov.ng" },
  { name: "MLSCN", domain: "mlscn.gov.ng" },
  { name: "Federal Ministry of Health", domain: "health.gov.ng" },
  { name: "ISO 15189", domain: "iso.org" },
  { name: "CLSI", domain: "clsi.org" },
  { name: "WHO", domain: "who.int" },
  { name: "NHIS", domain: "nhis.gov.ng" },
];

export default function AccreditationsSection() {
  const desktopLogos = [...ACCREDITATIONS, ...ACCREDITATIONS]; // desktop infinite scroll

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-700">
          Our Accreditations & Partners
        </h2>

        {/* DESKTOP: Infinite Scroll with Duplicates */}
        <div className="hidden md:block w-full overflow-hidden h-[50px] relative">
          <div className="flex animate-scroll gap-12">
            {desktopLogos.map((item, index) => (
              <div
                key={item.name + index}
                className="flex-shrink-0 opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={`https://logo.clearbit.com/${item.domain}`}
                  alt={item.name}
                  width={120}
                  height={50}
                  className="object-contain w-[120px] h-[50px] min-w-[120px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE: Single Row, Auto Slide, No Duplicate */}
        <div className="md:hidden w-full overflow-hidden h-[50px] relative">
          <div className="flex gap-5 animate-mobile-scroll">
            {ACCREDITATIONS.map((item, index) => (
              <div
                key={item.name + index}
                className="shrink-0 opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={`https://logo.clearbit.com/${item.domain}`}
                  alt={item.name}
                  width={100}
                  height={40}
                  className="object-contain w-[100px] h-10 min-w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
