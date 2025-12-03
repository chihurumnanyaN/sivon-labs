import React from "react";
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
import { ScrollProvider } from "../context/ScrollContext";

const page = () => {
  return (
    <main>
      <div className="w-full h-fit ">
        <TopContactBar />
        <ScrollProvider>
          <HeroSection />
        </ScrollProvider>
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

export default page;
