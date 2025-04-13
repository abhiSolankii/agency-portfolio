"use client";
import React, { useRef } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Separator } from "@/components/ui/separator";
import About from "@/components/About";
import FAQ from "@/components/Faq";

const Page = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  //scroll to section but a little bit above
  // so the navbar doesn't cover it
  const scrollToSection = (sectionRef) => {
    const offset = 100; // Adjust this value based on your navbar height
    const y =
      sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="relative h-screen">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          aboutRef,
          servicesRef,
          testimonialsRef,
          faqRef,
          contactRef,
        }}
      />
      <div className="z-10 flex flex-col min-h-screen">
        <section ref={homeRef}>
          <Home />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={servicesRef}>
          <Services />
        </section>
        <section ref={testimonialsRef}>
          <Testimonials />
        </section>
        <section ref={faqRef}>
          <FAQ />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
