"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactCardFlip from "react-card-flip";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import { testimonialsData } from "@/lib/data";

const Testimonials = ({ forwardedRef, scrollToSection, refs }) => {
  const [isFlipped, setIsFlipped] = useState({});
  const [visibleCards, setVisibleCards] = useState(3);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    // Reset animation state and trigger new animation when cards are added
    controls.start("hidden").then(() => {
      controls.start("visible");
    });
  }, [visibleCards, controls]);

  const handleFlip = (id) => {
    setIsFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <Head>
        <title>ByteNoBS - Client Testimonials</title>
        <meta
          name="description"
          content="Discover how ByteNoBS has transformed businesses with innovative and cost-effective tech solutions. Read our client testimonials and success stories."
        />
      </Head>
      <section
        ref={forwardedRef}
        className="bg-[#000000] text-[#F5E6CC] py-20 px-4 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-40 left-20 w-64 h-64 bg-[#D4A017]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-20 w-64 h-64 bg-[#4A2C2A]/5 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 inline-block relative">
              Client <span className="text-[#D4A017]">Testimonials</span>
              <div className="h-1 w-28 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mt-6">
              Don&apos;t take our word for it. Here&apos;s what our clients say
              about our innovative and cost-effective approach.
            </p>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            layout
          >
            {testimonialsData.slice(0, visibleCards).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                layout
              >
                <ReactCardFlip
                  isFlipped={isFlipped[testimonial.id]}
                  flipDirection="horizontal"
                  containerClassName="h-full"
                >
                  {/* Front side */}
                  <div className="h-full bg-[#000000] border border-[#D4A017]/20 p-6 rounded-xl shadow-lg flex flex-col hover:border-[#D4A017]/40 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 relative overflow-hidden rounded-full border-2 border-[#D4A017]">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/40 to-[#4A2C2A]/40"></div>
                          {testimonial.image && (
                            <Image
                              src={testimonial.image}
                              alt={testimonial?.name || "Client Image"}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full"
                            />
                          )}
                          {/* Placeholder for initials */}
                          {!testimonial.image && (
                            <div className="absolute inset-0 flex items-center justify-center text-[#F5E6CC] font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-[#F5E6CC]">
                            {testimonial.name}
                          </h3>
                          <p className="text-[#D4A017]">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-[#D4A017] mr-1" />
                        ))}
                      </div>
                      <p className="text-sm text-[#F5E6CC]/70">
                        {testimonial.project}
                      </p>
                    </div>

                    <div className="flex-grow flex items-center justify-center text-center px-4">
                      <FaQuoteLeft className="text-[#D4A017]/20 text-4xl absolute top-1/3 left-4 transform -translate-y-1/2" />
                      <p className="text-[#F5E6CC]/80 line-clamp-3">
                        &quot;{testimonial.testimonial.substring(0, 100)}
                        ...&quot;
                      </p>
                      <FaQuoteRight className="text-[#D4A017]/20 text-4xl absolute bottom-1/3 right-4 transform translate-y-1/2" />
                    </div>

                    <button
                      onClick={() => handleFlip(testimonial.id)}
                      className="mt-6 px-4 py-2 bg-[#000000] border border-[#D4A017]/40 text-[#D4A017] rounded-full hover:bg-[#D4A017]/10 transition-colors duration-300 mx-auto"
                    >
                      Read Full
                    </button>
                  </div>

                  {/* Back side */}
                  <div className="h-full bg-[#000000] border border-[#D4A017]/20 p-6 rounded-xl shadow-lg flex flex-col">
                    <div className="flex-grow flex flex-col justify-center">
                      <FaQuoteLeft className="text-[#D4A017] text-2xl mb-4" />
                      <blockquote className="mb-4 text-[#F5E6CC]/90 italic">
                        <p>{testimonial.testimonial}</p>
                      </blockquote>
                      <FaQuoteRight className="text-[#D4A017] text-2xl ml-auto mb-4" />
                    </div>

                    <div className="mt-auto border-t border-[#D4A017]/20 pt-4 flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-[#F5E6CC]">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#D4A017]">
                          {testimonial.company}
                        </p>
                      </div>
                      <button
                        onClick={() => handleFlip(testimonial.id)}
                        className="px-4 py-2 bg-[#000000] border border-[#D4A017]/40 text-[#D4A017] rounded-full hover:bg-[#D4A017]/10 transition-colors duration-300"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </ReactCardFlip>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleCards < testimonialsData.length && (
            <div className="w-full flex justify-center mt-12">
              <button onClick={loadMoreCards} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative px-6 py-3 bg-[#000000] rounded-full">
                  <span className="text-[#F5E6CC] group-hover:text-[#F5E6CC] transition duration-200">
                    Load More Testimonials
                  </span>
                </div>
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to join our success stories?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. No BS, just results.
            </p>
            <button
              onClick={() => scrollToSection(refs.contactRef)}
              className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] text-[#F5E6CC] rounded-full hover:shadow-lg hover:shadow-[#D4A017]/20 transition-all duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
