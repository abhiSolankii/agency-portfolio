"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";
import Head from "next/head";

const Navbar = ({ scrollToSection, refs }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const changeNavBg = () => setNavBg(window.scrollY >= 100);
    const handleScroll = () => {
      const sections = {
        home: refs.homeRef.current,
        about: refs.aboutRef.current,
        services: refs.servicesRef.current,
        testimonials: refs.testimonialsRef.current,
        faq: refs.faqRef.current,
        contact: refs.contactRef.current,
      };
      let currentSection = "";
      for (const section in sections) {
        if (
          sections[section] &&
          window.scrollY >= sections[section].offsetTop - 1
        ) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", changeNavBg);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return (
    <>
      <Head>
        <title>ByteNoBS - Unleash Your Tech Vision</title>
        <meta
          name="description"
          content="ByteNoBS delivers no-nonsense tech solutions with power and precision. Unleash your vision today!"
        />
      </Head>
      <header
        className={`fixed w-full top-0 left-0 z-50 p-4 md:p-6 shadow-md transition-all duration-300 ease-in-out ${
          navBg ? "bg-[#000000]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer">
            <Image
              src="/assets/logo.png"
              alt="ByteNoBS Logo"
              width={60}
              height={60}
            />
          </div>

          {/* Navbar for large screens */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-lg font-bold tracking-wide text-[#F5E6CC] items-center">
              {[
                "Home",
                "About",
                "Services",
                "Testimonials",
                "FAQ",
                "Contact",
              ].map((section) => (
                <li
                  key={section}
                  className={`relative group cursor-pointer ${
                    activeSection === section.toLowerCase().replace(" & ", "-")
                      ? "text-[#D4A017]"
                      : ""
                  }`}
                  onClick={() =>
                    scrollToSection(
                      refs[`${section.toLowerCase().replace(" & ", "-")}Ref`]
                    )
                  }
                >
                  <span className="transition-all duration-300 ease-in-out group-hover:text-[#b6b1b0]">
                    {section}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4A017] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
              ))}
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] text-[#F5E6CC] rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
                onClick={() => scrollToSection(refs.contactRef)}
              >
                <FaPhoneAlt className="text-[#F5E6CC]" />
                Get in Touch
              </button>
            </ul>
          </nav>

          {/* Navbar for small screens */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <p className="p-2 bg-[#D4A017] text-[#F5E6CC] rounded-lg">
                <Menu />
              </p>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#000000] text-[#F5E6CC] p-6"
            >
              <div className="mb-8">
                <Image
                  src="/assets/logo.png"
                  alt="ByteNoBS Logo"
                  width={60}
                  height={60}
                />
              </div>
              <ul className="flex flex-col gap-6 text-lg font-bold">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Work & Testimonials",
                  "FAQ",
                  "Contact",
                ].map((section) => (
                  <li
                    key={section}
                    className={`cursor-pointer hover:text-[#4A2C2A] transition-all ${
                      activeSection ===
                      section.toLowerCase().replace(" & ", "-")
                        ? "text-[#D4A017]"
                        : ""
                    }`}
                    onClick={() =>
                      scrollToSection(
                        refs[`${section.toLowerCase().replace(" & ", "-")}Ref`]
                      )
                    }
                  >
                    {section}
                  </li>
                ))}
                <button
                  className="flex items-center gap-2 px-4 py-2 mt-6 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] text-[#F5E6CC] rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
                  onClick={() => scrollToSection(refs.contactRef)}
                >
                  <FaPhoneAlt className="text-[#F5E6CC]" />
                  Get in Touch
                </button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Navbar;
