"use client";
"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar = ({ scrollToSection, refs }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const changeNavBg = () => {
      setNavBg(window.scrollY >= 100);
    };

    const handleScroll = () => {
      const sections = {
        home: refs.homeRef.current,
        services: refs.servicesRef.current,
        testimonials: refs.testimonialsRef.current,
        contact: refs.contactRef.current,
      };

      let currentSection = "";
      for (const section in sections) {
        if (
          sections[section] &&
          window.scrollY >= sections[section].offsetTop - 1 &&
          window.scrollY <
            sections[section].offsetTop + sections[section].offsetHeight
        ) {
          currentSection = section;
          break;
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
    <header
      className={`fixed w-full top-0 left-0 z-50 p-6 shadow-md transition-all duration-300 ease-in-out ${
        navBg ? "bg-black" : "bg-inherit"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 cursor-pointer">
          CodeRipple.
        </div>

        {/* Navbar for large screens */}
        <nav className="hidden md:flex">
          <ul className="flex gap-12 text-lg tracking-wide font-medium text-white items-center">
            {["home", "services", "testimonials", "contact"].map((section) => (
              <li
                key={section}
                className={`relative group cursor-pointer ${
                  activeSection === section ? "text-indigo-400" : ""
                }`}
                onClick={() => scrollToSection(refs[`${section}Ref`])}
              >
                <span
                  className={`transition-all duration-300 ease-in-out group-hover:text-indigo-400`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
            <button
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
              onClick={() => scrollToSection(refs.contactRef)}
            >
              <FaPhoneAlt className="text-white" />
              Contact
            </button>
          </ul>
        </nav>

        {/* Navbar for small screens */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <p className="p-2 bg-purple-500 text-white rounded-lg">Menu</p>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 text-white p-10">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  WebSol.
                </div>
              </SheetTitle>
              <SheetDescription className="mb-24">
                Crafting Digital Experience.
              </SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col gap-6 text-lg mt-8">
              {["home", "services", "testimonials", "contact"].map(
                (section) => (
                  <li
                    key={section}
                    className={`cursor-pointer hover:text-indigo-400 transition-all ${
                      activeSection === section ? "text-indigo-400" : ""
                    }`}
                    onClick={() => scrollToSection(refs[`${section}Ref`])}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </li>
                )
              )}
              <Separator />
              <button
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
                onClick={() => scrollToSection(refs.contactRef)}
              >
                <FaPhoneAlt className="text-white" />
                Contact
              </button>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
