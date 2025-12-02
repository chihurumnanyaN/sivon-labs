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
  const logos = [...ACCREDITATIONS, ...ACCREDITATIONS]; // duplicate for infinite scroll

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-700">
          Our Accreditations & Partners
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {logos.map((item, index) => (
              <div
                key={item.name + index}
                className="opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={`https://logo.clearbit.com/${item.domain}`}
                  alt={item.name}
                  width={140}
                  height={70}
                  className=" hover:grayscale-0 transition object-contain w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
