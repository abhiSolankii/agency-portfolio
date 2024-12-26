"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 p-6 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Innovate. Create. Dominate.
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Transform Your Online Presence with Websol
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
            Get Started
          </Button>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl" />
          </a>
          <a
            href="https://x.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
