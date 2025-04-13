"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";

const faqs = [
  {
    question: "What exactly does ByteNoBS do?",
    answer:
      "We build tech solutions that work—custom websites, apps, AI tools, you name it. No fluff, just results tailored to your needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Depends on the scope. A sleek website might take 2-4 weeks; a custom app, 4-8 weeks. We’ll give you a clear timeline upfront.",
  },
  {
    question: "What’s the cost?",
    answer:
      "No cookie-cutter pricing here. We quote based on your project—fair, transparent, no hidden BS. Contact us for a custom estimate.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Hell yeah. From local shops to startups, we build what you need to grow—without breaking the bank.",
  },
  {
    question: "What if I need something niche?",
    answer:
      "That’s our jam. PDF bookmarkers, expense trackers, weird AI stuff—we’ll figure it out and make it happen.",
  },
  {
    question: "How do we get started?",
    answer:
      "Hit up our Contact page, tell us your idea, and we’ll take it from there. No endless meetings, just action.",
  },
];

const Faqs = ({ forwardedRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Head>
        <title>ByteNoBS - FAQ | No-Nonsense Tech Solutions</title>
        <meta
          name="description"
          content="Answers to common questions about ByteNoBS’s custom websites, apps, and AI tools. Transparent, straightforward, no fluff."
        />
      </Head>
      <section
        ref={forwardedRef}
        className="bg-[#000000] text-[#F5E6CC] py-20 px-4 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A017]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4A2C2A]/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 inline-block relative">
              FAQs <span className="text-[#D4A017]">No BS</span>
              <div className="h-1 w-20 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mt-6">
              Got questions? We{"’"}ve got answers—clear, straight-up, and to
              the point.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-b from-[#D4A017]/20 to-[#4A2C2A]/20 p-[1px] rounded-xl"
                >
                  <div className="bg-[#000000] rounded-xl">
                    <AccordionTrigger className="text-[#F5E6CC] px-6 py-4 text-lg font-semibold hover:text-[#D4A017]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#F5E6CC]/80 px-6 py-2">
                      {faq.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-16 text-center"
          >
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Still curious? Let’s talk—your project’s waiting.
            </p>
            <div className="inline-block bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] p-[1px] rounded-full">
              <a
                href="/contact"
                className="block bg-[#000000] rounded-full px-6 py-3 text-[#F5E6CC] font-bold hover:bg-transparent transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
