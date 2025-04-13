import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiInstagram, SiFacebook, SiX } from "react-icons/si";
import Image from "next/image";
import Head from "next/head";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <title>ByteNoBS - Footer</title>
        <meta
          name="description"
          content="ByteNoBS delivers no-nonsense tech solutions with power and precision. Unleash your vision today!"
        />
      </Head>
      <footer className="bg-[#000000] text-[#F5E6CC] py-12 px-4 relative">
        {/* Background gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"></div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/assets/logo.png" // Replace with your stylized "B" logo path
              alt="ByteNoBS Logo"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-sm text-[#F5E6CC]/80">
              Innovative Tech Solutions, No Fluff.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h4 className="text-lg font-bold mb-4 text-[#D4A017]">Explore</h4>
            <ul className="space-y-2 text-center">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h4 className="text-lg font-bold mb-4 text-[#D4A017]">Connect</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/bytenobs/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
              >
                <SiLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/bytenobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
              >
                <SiInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574937133272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
              >
                <SiFacebook className="text-2xl" />
              </a>
              <a
                href="https://x.com/bytenobs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
              >
                <SiX className="text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-8 text-[#F5E6CC]/60 text-sm"
        >
          &copy; 2025 ByteNoBS. All rights reserved.
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
