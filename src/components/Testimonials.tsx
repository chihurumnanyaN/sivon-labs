"use client";

import { motion } from "motion/react";

interface Testimonial {
  name: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Chinedu O.",
    rating: 5,
    review:
      "Sivon Laboratory delivered my test results super fast! Truly professional staff.",
  },
  {
    name: "Amaka I.",
    rating: 4,
    review:
      "The staff were kind and knowledgeable. I felt very confident in the testing process.",
  },
  {
    name: "Emeka N.",
    rating: 5,
    review:
      "Modern equipment and accurate results. Highly recommend for anyone in Aba.",
  },
  {
    name: "Ngozi A.",
    rating: 5,
    review:
      "Quick, professional, and reliable. The whole experience was great!",
  },
];

export default function TestimonialsSection() {
  // Duplicate testimonials for infinite scroll
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-gray-50 px-5 pt-15 py-8 md:p-25">
      <div className="py-24 px-6 rounded-2xl bg-blue-400 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real stories from patients who trust Sivon Laboratory.
          </p>
        </div>

        {/* Scrolling container */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{ x: [-0, -window.innerWidth] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {scrollingTestimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex items-center mb-2 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700">{t.review}</p>
                <p className="mt-4 font-semibold text-gray-900">- {t.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
