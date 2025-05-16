"use client";
import React, { useRef } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import Head from "next/head";
import Projects from "@/components/Projects";

const Page = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  //scroll to section but a little bit above
  // so the navbar doesn't cover it
  const scrollToSection = (sectionRef) => {
    if (!sectionRef || !sectionRef.current) {
      console.warn("Invalid section reference");
      return;
    }

    const offset = 100;
    const y =
      sectionRef.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>
          ByteNoBS - Delivering innovative, cost-effective tech solutions with
          precision.
        </title>
        <meta
          name="description"
          content="ByteNoBS delivers no-nonsense tech solutions with power and precision. Unleash your vision today!"
        />
      </Head>

      <div className="relative h-screen">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{
            homeRef,
            aboutRef,
            servicesRef,
            projectsRef,
            testimonialsRef,
            faqRef,
            contactRef,
          }}
        />
        <div className="z-10 flex flex-col min-h-screen">
          <section ref={homeRef}>
            <Home
              scrollToSection={scrollToSection}
              refs={{
                contactRef,
              }}
            />
          </section>
          <section ref={aboutRef}>
            <About
              scrollToSection={scrollToSection}
              refs={{
                contactRef,
              }}
            />
          </section>
          <section ref={servicesRef}>
            <Services
              scrollToSection={scrollToSection}
              refs={{
                contactRef,
              }}
            />
          </section>
          <section ref={projectsRef}>
            <Projects
              scrollToSection={scrollToSection}
              refs={{
                contactRef,
              }}
            />
          </section>
          <section ref={testimonialsRef}>
            <Testimonials
              scrollToSection={scrollToSection}
              refs={{
                contactRef,
              }}
            />
          </section>
          <section ref={faqRef}>
            <Faqs
              scrollToSection={scrollToSection}
              refs={{
                contactRef,
              }}
            />
          </section>
          <section ref={contactRef}>
            <Contact />
          </section>
        </div>
        <Footer
          scrollToSection={scrollToSection}
          refs={{
            homeRef,
            aboutRef,
            servicesRef,
            projectsRef,
            testimonialsRef,
            faqRef,
            contactRef,
          }}
        />
      </div>
    </>
  );
};

export default Page;
