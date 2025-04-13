"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Head from "next/head";

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <title>ByteNoBS - Unleash Your Tech Vision</title>
        <meta
          name="description"
          content="ByteNoBS delivers no-nonsense tech solutions with power and precision. Unleash your vision today!"
        />
      </Head>
      <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#000000]">
        {/* Background with Gradient and Particle Effect */}
        <div className="absolute inset-0 z-0">
          {/* Uncomment if using background image */}
          {/* <Image
          src="/assets/bg2.png"
          alt="Tech Background"
          fill
          className="object-cover opacity-20"
          priority
        /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/90 to-[#000000] z-5" />
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="particle particle-1" />
            <div className="particle particle-2" />
            <div className="particle particle-3" />
          </div>
        </div>

        {/* Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-20 p-6 md:p-10 text-[#F5E6CC] max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] bg-clip-text text-transparent"
          >
            Unleash Your Tech Vision
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 font-medium"
          >
            ByteNoBS Delivers No-Nonsense Solutions with Power and Precision
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-10"
          >
            <Button
              asChild
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] text-[#F5E6CC] rounded-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg hover:text-[#000000]"
            >
              <a href="/contact">
                <FaPhoneAlt className="text-[#F5E6CC] group-hover:text-[#000000]" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 text-2xl"
          >
            <a
              href="https://www.linkedin.com/company/bytenobs/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5E6CC] hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/bytenobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5E6CC] hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574937133272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5E6CC] hover:text-[#D4A017] transition-colors duration-300"
            >
              <FaFacebook />
            </a>
          </motion.div>
        </motion.div>

        {/* Particle Effect Styles */}
        <style jsx>{`
          .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #d4a017;
            border-radius: 50%;
            animation: float 15s infinite;
          }
          .particle-1 {
            left: 20%;
            top: 30%;
            animation-delay: 0s;
          }
          .particle-2 {
            left: 70%;
            top: 60%;
            animation-delay: 2s;
          }
          .particle-3 {
            left: 40%;
            top: 80%;
            animation-delay: 4s;
          }
          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-50px) scale(1.5);
              opacity: 0.4;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Home;
