"use client";
import React, { useRef } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          servicesRef,
          testimonialsRef,
          contactRef,
        }}
      />
      <div className="z-10 flex flex-col min-h-screen">
        <section ref={homeRef}>
          <Home />
        </section>
        <Separator className="bg-slate-500 w-[80%] mx-auto my-20" />
        <section ref={servicesRef}>
          <Services />
        </section>
        <Separator className="bg-slate-500 w-[80%] mx-auto my-20" />
        <section ref={testimonialsRef}>
          <Testimonials />
        </section>
        <Separator className="bg-slate-500 w-[80%] mx-auto my-20" />
        <section ref={contactRef}>
          <Contact />
        </section>
        <Separator className="bg-slate-500 w-[80%] mx-auto my-20" />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
