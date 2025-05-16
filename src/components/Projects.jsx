"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import Head from "next/head";
import { projectsData } from "@/lib/data";

const Projects = ({ forwardedRef, scrollToSection, refs }) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [expandedId, setExpandedId] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Head>
        <title>ByteNoBS - Our Projects</title>
        <meta
          name="description"
          content="Explore our portfolio of successful projects. From AI-powered tools to custom business solutions."
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
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 inline-block relative">
              Our <span className="text-[#D4A017]">Projects</span>
              <div className="h-1 w-28 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] mx-auto mt-4"></div>
            </h2>
            <p className="text-xl max-w-3xl mx-auto mt-6">
              Real solutions for real businesses. Check out how we've helped our
              clients succeed.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-8 max-w-6xl mx-auto"
          >
            {projectsData.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gradient-to-b from-[#D4A017]/20 to-[#4A2C2A]/20 p-[1px] rounded-xl"
              >
                <div className="bg-[#000000] rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Project Details */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-[#D4A017]">
                          {project.title}
                        </h3>
                        <p className="text-[#F5E6CC]/80 mb-4">
                          {expandedId === project.id
                            ? project.fullDescription
                            : project.shortDescription}
                        </p>
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="text-[#D4A017] hover:text-[#D4A017]/80 transition-colors duration-300 mb-4"
                        >
                          {expandedId === project.id
                            ? "Show Less"
                            : "Read More"}
                        </button>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              className="bg-[#D4A017]/10 text-[#D4A017] border border-[#D4A017]/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="space-y-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center text-sm text-[#F5E6CC]/60"
                          >
                            <span className="w-3 h-3 rounded-full bg-[#D4A017]/20 mr-2"></span>
                            <span className="capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="ml-2 text-[#D4A017]">{value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4 mt-4">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#F5E6CC]/80 hover:text-[#D4A017] transition-colors duration-300"
                          >
                            <FaExternalLinkAlt /> Demo
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#F5E6CC]/80 hover:text-[#D4A017] transition-colors duration-300"
                          >
                            <FaLink /> Live Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleProjects < projectsData.length && (
            <div className="w-full flex justify-center mt-12">
              <button onClick={loadMore} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative px-6 py-3 bg-[#000000] rounded-full">
                  <span className="text-[#F5E6CC] group-hover:text-[#F5E6CC] transition duration-200">
                    Load More Projects
                  </span>
                </div>
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Let’s turn your vision into reality.
            </h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Partner with us to craft innovative solutions that drive success.
              Your goals, our expertise.
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

export default Projects;
