"use client";

import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/OurServices";
import TrustSection from "../components/TrustSection";
import TestimonialsSection from "../components/Testimonials";
import ProcessSection from "../components/HowItWorks";
import AccreditationsSection from "../components/LogoSection";
import Footer from "../components/Footer";
import ContactLocationSection from "../components/ContactLocationSection";
import TopContactBar from "../components/Topbar";

const Page = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main>
      <div className="w-full h-fit ">
        <TopContactBar />
        <HeroSection scrolled={scrolled} />
      </div>
      <AboutSection />
      <ServicesSection />
      <TrustSection />

      <TestimonialsSection />
      <ProcessSection />
      <AccreditationsSection />
      <ContactLocationSection />
      <Footer />
    </main>
  );
};

export default Page;
