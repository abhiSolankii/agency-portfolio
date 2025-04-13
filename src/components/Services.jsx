"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Tech icons
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiGit,
  SiFirebase,
} from "react-icons/si";
import {
  FaCode,
  FaBrain,
  FaTools,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaShoppingCart,
  FaAws,
} from "react-icons/fa";

// Service data
const serviceCategories = [
  {
    id: 1,
    name: "Custom Web Development",
    icon: <FaCode className="text-4xl" />,
    description:
      "Sleek, fast, responsive websites that hit the mark. No fluff, just results.",
    services: [
      "Custom Business Websites",
      "Portfolio Sites",
      "Landing Pages",
      "Admin Dashboards",
      "Interactive Web Applications",
    ],
  },
  {
    id: 2,
    name: "Application Development",
    icon: <FaTools className="text-4xl" />,
    description:
      "Specialized applications tailored to solve your unique business challenges.",
    services: [
      "Expense Managers",
      "Inventory Systems",
      "PDF Tools & Utilities",
      "Task Management Solutions",
      "Custom Business Applications",
    ],
  },
  {
    id: 3,
    name: "AI-Powered Solutions",
    icon: <FaBrain className="text-4xl" />,
    description:
      "Cutting-edge AI integration to give your business the competitive edge.",
    services: [
      "AI-Powered Chatbots",
      "Data Analysis Tools",
      "Content Generation Systems",
      "Predictive Analytics",
      "Automation Solutions",
    ],
  },
  {
    id: 4,
    name: "E-Commerce Development",
    icon: <FaShoppingCart className="text-4xl" />,
    description: "Online store solutions that convert visitors into customers.",
    services: [
      "Custom E-Commerce Platforms",
      "Payment Gateway Integration",
      "Product Catalog Management",
      "User Experience Optimization",
      "Mobile Shopping Experiences",
    ],
  },
  {
    id: 5,
    name: "Server & Database Solutions",
    icon: <FaServer className="text-4xl" />,
    description:
      "Robust back-end infrastructure that powers your applications reliably.",
    services: [
      "Database Design & Optimization",
      "API Development",
      "Cloud Server Setup",
      "Data Migration Services",
      "Backup & Recovery Systems",
    ],
  },
];

// Tech stack data
const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Mobile Dev", icon: <FaMobileAlt /> },
  { name: "Databases", icon: <FaDatabase /> },
  { name: "Custom APIs", icon: <FaCode /> },
];

const Services = ({ forwardedRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={forwardedRef}
      className="bg-[#000000] text-[#F5E6CC] py-20 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A017]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4A2C2A]/5 blur-3xl"></div>
        <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#D4A017]/20 to-transparent top-0"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 inline-block relative">
            Our <span className="text-[#D4A017]">Services</span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] mx-auto mt-4"></div>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mt-6">
            We provide innovative tech solutions without the fluff. From custom
            websites to specialized applications, we build what you need.
          </p>
        </div>

        {/* Services carousel */}
        <div className="my-4 w-full flex justify-center mt-12">
          <Carousel className="w-full max-w-5xl">
            <CarouselContent>
              {serviceCategories.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-1"
                  >
                    <div className="bg-gradient-to-b from-[#D4A017]/20 to-[#4A2C2A]/20 p-[1px] rounded-xl h-full">
                      <div className="bg-[#000000] h-full rounded-xl p-6 flex flex-col shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                        <div className="text-[#D4A017] mb-4 flex justify-center">
                          {item.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-[#F5E6CC]">
                          {item.name}
                        </h3>

                        <p className="text-[#F5E6CC]/80 mb-6">
                          {item.description}
                        </p>

                        <div className="flex-1 flex flex-col">
                          <div className="space-y-2">
                            {item.services.map((service, index) => (
                              <div
                                key={index}
                                className="flex items-center py-2 px-3 text-sm bg-[#4A2C2A]/20 rounded-lg"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#D4A017] mr-3"></div>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-[#000000] border border-[#D4A017]/30 text-[#D4A017] hover:bg-[#D4A017] hover:text-[#000000]" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-[#000000] border border-[#D4A017]/30 text-[#D4A017] hover:bg-[#D4A017] hover:text-[#000000]" />
            </div>
          </Carousel>
        </div>

        {/* Separator */}
        <div className="w-full max-w-4xl mx-auto my-20 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"></div>

        {/* Tech Stack Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-14 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Tech <span className="text-[#D4A017]">Arsenal</span>
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="aspect-square"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-full bg-[#000000] border border-[#D4A017]/20 rounded-xl flex justify-center items-center group hover:bg-[#D4A017]/5 transition-all duration-300">
                      <div className="text-3xl md:text-4xl text-[#D4A017]/80 group-hover:text-[#D4A017] transition-all duration-300">
                        {tech.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#000000] border border-[#D4A017]/30 text-[#F5E6CC]">
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg max-w-2xl mx-auto">
              Don't see what you're looking for? No problem. We adapt to your
              tech needs, not the other way around.
            </p>
            <div className="mt-8 inline-block bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] p-[1px] rounded-full">
              <button
                className="bg-[#000000] rounded-full px-6 py-3 text-[#F5E6CC] font-bold hover:bg-transparent transition-all duration-300"
                // onClick={() =>
                //   document
                //     .getElementById("contact")
                //     .scrollIntoView({ behavior: "smooth" })
                // }
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
