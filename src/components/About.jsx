"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaCode, FaBolt, FaHandshake } from "react-icons/fa";
import Head from "next/head";

const About = ({ forwardedRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const valueCards = [
    {
      icon: <FaCode className="text-[#D4A017] text-4xl" />,
      title: "About ByteNobs innovative Solutions",
      description:
        "We cut through the technical jargon to deliver exactly what you need—no fluff, no unnecessary features, just pure functionality that works.",
    },
    {
      icon: <FaBolt className="text-[#D4A017] text-4xl" />,
      title: "Speed & Quality",
      description:
        "We build fast, scalable solutions without compromising on performance or design. Your project delivered on time, every time.",
    },
    {
      icon: <FaHandshake className="text-[#D4A017] text-4xl" />,
      title: "Client-First Approach",
      description:
        "Your vision drives our development. Whether it's a simple website or complex application, we're here to bring your ideas to life.",
    },
  ];

  return (
    <>
      <Head>
        <title>ByteNoBS - About Us</title>
        <meta
          name="description"
          content="ByteNoBS is a tech solutions agency focused on delivering innovative, no-nonsense tech solutions tailored to your needs."
        />
      </Head>
      <section
        ref={forwardedRef}
        className="bg-[#000000] text-[#F5E6CC] py-20 px-4 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 z-0">
          <div className="absolute h-96 w-96 rounded-full bg-[#D4A017] blur-3xl -top-20 -right-20" />
          <div className="absolute h-96 w-96 rounded-full bg-[#4A2C2A] blur-3xl -bottom-20 -left-20" />
        </div>

        <article className="container mx-auto relative z-10">
          {/* Section heading */}
          <div className="text-center mb-16">
            <header className="text-5xl font-bold mb-4 inline-block relative">
              About <span className="text-[#D4A017]">ByteNoBS</span>
              <div className="h-1 w-24 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] mx-auto mt-4"></div>
            </header>
            <p className="text-xl max-w-3xl mx-auto mt-6">
              We{"'"}re a tech solutions agency with a simple mission: deliver
              innovative tech solutions without the fluff. From custom websites
              to sophisticated applications, we build what you need.
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and tagline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-2 border-[#D4A017]/20">
                <Image
                  src="/assets/about.jpeg"
                  alt="ByteNoBS Team at Work"
                  layout="fill"
                  sizes="100vw"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] bg-clip-text text-transparent">
                    &quot;Delivering innovative, cost-effective tech solutions
                    with precision.&quot;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Text content */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold mb-6"
              >
                Why Choose Us?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg mb-6"
              >
                ByteNoBS isnt just another web dev shop. We&apos;re
                problem-solvers who&apos;ll build whatever you throw at
                us—website, app, or AI tool—with zero hassle.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg mb-10"
              >
                Starting with custom web development, we&apos;re built to tackle
                any tech challenge. From expense managers for shop owners to
                portfolio sites, PDF bookmarkers, or AI-powered apps, we create
                what clients need.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="px-6 py-4 bg-gradient-to-r from-[#D4A017]/10 to-[#4A2C2A]/10 rounded-lg border border-[#D4A017]/20"
              >
                <p className="font-bold text-xl mb-2">Our Promise:</p>
                <p className="italic">
                  &quot;ByteNoBS is your tech partner, not a vendor. Let&apos;s
                  make innovation turn into reality, together...&quot;
                </p>
              </motion.div>
            </div>
          </div>

          {/* Our values section */}
          <div ref={ref} className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {valueCards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                  className="bg-[#000000] p-8 rounded-lg border border-[#D4A017]/20 shadow-lg hover:shadow-[#D4A017]/10 transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="mb-6">{card.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                  <p>{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
