"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiMail, FiSend } from "react-icons/fi";
import { SiLinkedin, SiInstagram, SiFacebook, SiX } from "react-icons/si";
import Head from "next/head";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit function sending JSON to Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xqapndbd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    // Reset status after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <title>ByteNoBS - Contact Us</title>
        <meta
          name="description"
          content="Have a project in mind? Let’s connect! ByteNoBS is here to provide no-nonsense tech solutions tailored to your needs."
        />
      </Head>
      <section className="bg-[#000000] text-[#F5E6CC] py-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A017]/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4A2C2A]/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 inline-block relative">
              Let’s <span className="text-[#D4A017]">Talk</span>
              <div className="h-1 w-20 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mt-6">
              Got an idea? A problem? Or just want to chat tech? Drop us a
              line—no fluff, just action.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="bg-gradient-to-b from-[#D4A017]/20 to-[#4A2C2A]/20 p-[1px] rounded-xl"
            >
              <div className="bg-[#000000] rounded-xl p-8">
                <form className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#4A2C2A]/20 border-[#D4A017]/30 text-[#F5E6CC] placeholder-[#F5E6CC]/50 focus:border-[#D4A017]"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#4A2C2A]/20 border-[#D4A017]/30 text-[#F5E6CC] placeholder-[#F5E6CC]/50 focus:border-[#D4A017]"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#4A2C2A]/20 border-[#D4A017]/30 text-[#F5E6CC] placeholder-[#F5E6CC]/50 focus:border-[#D4A017] h-32"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Button
                      onClick={handleSubmit}
                      disabled={status === "sending"}
                      className={`w-full bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] text-[#000000] font-bold hover:bg-[#D4A017] transition-all duration-300 ${
                        status === "sending"
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <FiSend className="mr-2" />
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                  {/* Status Feedback */}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[#D4A017] text-center"
                    >
                      Message sent! We’ll get back to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-center"
                    >
                      Oops, something went wrong. Try again later.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Socials */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <a
                  href="mailto:bytenobs@gmail.com"
                  className="flex items-center text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
                >
                  <FiMail className="mr-3 text-2xl" />
                  bytenobs@gmail.com
                </a>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://www.linkedin.com/company/bytenobs/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
                  >
                    <SiLinkedin className="text-3xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/bytenobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
                  >
                    <SiInstagram className="text-3xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61574937133272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
                  >
                    <SiFacebook className="text-3xl" />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5E6CC]/80 hover:text-[#D4A017] transition-all duration-300"
                  >
                    <SiX className="text-3xl" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
