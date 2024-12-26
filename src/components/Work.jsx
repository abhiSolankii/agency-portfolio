"use client";
import React, { useState } from "react";

const workList = [
  {
    id: 1,
    title: "Real Estate Platform",
    description:
      "A full-stack application for property listings, user profiles, and real-time chat between buyers and sellers.",
    imageUrl: "/assets/projects/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#",
  },
  {
    id: 2,
    title: "Music Streaming App",
    description:
      "A music player app with playlist creation, audio streaming, and next/prev functionality.",
    imageUrl: "/assets/projects/ecommerce.png",
    technologies: ["React", "Node.js", "Tailwind CSS", "Express.js"],
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "An online store featuring product search, shopping cart, and payment gateway integration.",
    imageUrl: "/assets/projects/images.jpeg",
    technologies: ["React", "Firebase", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/images.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/images.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    id: 8,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/images.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    id: 9,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/images.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
  {
    id: 10,
    title: "Portfolio Website",
    description:
      "A sleek and interactive portfolio to showcase projects and technical skills.",
    imageUrl: "/assets/projects/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "#",
  },
];

const Work = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };
  return (
    <section className=" bg-black text-white min-h-screen w-full">
      <div className="container mx-auto text-center w-full  items-center flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8">Work</h1>
        <p className="mb-16 text-lg max-w-2xl mx-auto">
          We deliver cutting-edge solutions across various domains. Here are
          some of our most recent projects.
        </p>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] ">
          {workList.slice(0, visibleCards).map((project) => (
            <div
              key={project.id}
              className="bg-[#232329] rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleCards < workList.length && (
          <button
            onClick={loadMoreCards}
            className="mx-auto mt-14 p-3 px-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Work;
