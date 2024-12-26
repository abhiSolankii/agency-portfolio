"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            WebSol.
          </h1>
          <p className="text-gray-400 text-center text-lg mt-2">
            Crafting digital experiences with passion and precision. Let{"'"}s
            connect!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row text-center gap-8 justify-center">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Services
          </a>
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Work
          </a> */}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl md:text-3xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="text-xl md:text-3xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl md:text-3xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl md:text-3xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl md:text-3xl" />
          </a>
        </div>
        <div className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} WebSol. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
