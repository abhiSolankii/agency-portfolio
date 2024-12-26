"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiAdobe,
  SiScreencastify,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaAws,
  FaChartBar,
  FaCode,
  FaCreditCard,
  FaDocker,
  FaGit,
  FaSearch,
  FaServer,
  FaShareAlt,
} from "react-icons/fa";

// const serviceList = [
//   {
//     id: 1,
//     name: "Web Development",
//     description:
//       "Crafting responsive and dynamic websites that cater to your business needs. Our web development services include front-end and back-end solutions.",
//     technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
//     duration: "2-3 months",
//     priceRange: "$2000 - $5000",
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description:
//       "Creating user-friendly mobile applications for both iOS and Android platforms, ensuring seamless user experiences and high performance.",
//     technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
//     duration: "3-6 months",
//     priceRange: "$3000 - $8000",
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description:
//       "Designing intuitive and engaging user interfaces that enhance user experience. We focus on usability and aesthetic appeal.",
//     technologies: ["Figma", "Sketch", "Adobe XD"],
//     duration: "1-2 months",
//     priceRange: "$1500 - $4000",
//   },
//   {
//     id: 4,
//     name: "Digital Marketing",
//     description:
//       "Implementing effective digital marketing strategies, including SEO, social media marketing, and content marketing to boost your online presence.",
//     technologies: ["SEO", "PPC", "Social Media Marketing", "Content Creation"],
//     duration: "Ongoing",
//     priceRange: "$500 - $5000/month",
//   },
//   {
//     id: 5,
//     name: "E-commerce Solutions",
//     description:
//       "Providing comprehensive e-commerce solutions that include website development, payment gateway integration, and inventory management.",
//     technologies: ["Shopify", "WooCommerce", "Magento"],
//     duration: "2-4 months",
//     priceRange: "$2500 - $7000",
//   },
//   {
//     id: 6,
//     name: "Cloud Services",
//     description:
//       "Offering cloud solutions for storage, computing, and networking, ensuring scalable and secure access to your data.",
//     technologies: [
//       "Cloud Hosting",
//       "Data Backup",
//       "Infrastructure as a Service (IaaS)",
//     ],
//     duration: "1 month",
//     priceRange: "$1000 - $3000",
//   },
//   {
//     id: 7,
//     name: "Consulting Services",
//     description:
//       "Providing expert consulting services to help you strategize and implement the right technology solutions for your business.",
//     technologies: [
//       "Business Strategy",
//       "Technology Adoption",
//       "Process Optimization",
//     ],
//     duration: "Varies",
//     priceRange: "$100 - $500/hour",
//   },
//   {
//     id: 8,
//     name: "Content Creation",
//     description:
//       "Developing high-quality content for websites, blogs, and social media that engages your audience and enhances your brand.",
//     technologies: [
//       "Business Strategy",
//       "Technology Adoption",
//       "Process Optimization",
//     ],
//     types: ["Articles", "Videos", "Infographics"],
//     duration: "Ongoing",
//     priceRange: "$300 - $2000/month",
//   },
// ];
const serviceList = [
  {
    id: 1,
    name: "Core Services",
    description:
      "Comprehensive offerings to build and enhance your online presence.",
    services: [
      "Custom Website Development & Responsive Design",
      "E-Commerce Solutions",
      "Web Application Development",
      "Mobile-First Development (PWAs)",
      "UI/UX Design",
    ],
  },
  {
    id: 2,
    name: "Enhanced Functionality",
    description: "Adding features that elevate your website's capabilities.",
    services: [
      "Content Management Systems (CMS)",
      "API Development & Integration",
      "Third-Party Integrations (CRM, ERP, Analytics)",
      "Custom Plugin/Module Development",
    ],
  },
  {
    id: 3,
    name: "Performance & Security",
    description: "Ensuring your website runs smoothly and securely.",
    services: [
      "Website Speed Optimization",
      "Security Enhancements",
      "Cloud Services & Hosting",
      "DevOps & Automation",
    ],
  },
  {
    id: 4,
    name: "Digital Marketing Support",
    description: "Boosting your online visibility and engagement.",
    services: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media Integration",
      "Email Marketing Integration",
    ],
  },
  {
    id: 5,
    name: "Ongoing Support",
    description: "Providing continuous assistance for your digital needs.",
    services: [
      "Website Maintenance & Updates",
      "Technical Support",
      "Backup & Recovery Solutions",
    ],
  },
];

const techStack = [
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    description: "MongoDB - NoSQL Database",
  },
  {
    name: "Express",
    icon: <FaServer />,
    description: "Express - Node.js Web Framework",
  },
  {
    name: "React",
    icon: <SiReact />,
    description: "React - Front-end Library",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    description: "Node.js - Back-end JavaScript Runtime",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    description: "HTML5 - Markup Language",
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    description: "CSS3 - Styling Language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    description: "JavaScript - Programming Language",
  },
  {
    name: "TypeScript",
    icon: <FaCode />,
    description: "TypeScript - Superset of JavaScript",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    description: "Redux - State Management Library",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    description: "Next.js - React Framework",
  },
  {
    name: "Git",
    icon: <FaGit />,
    description: "Git - Version Control System",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    description: "AWS - Cloud Computing Platform",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    description: "Docker - Containerization Platform",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    description: "Figma - Design Tool",
  },
  {
    name: "Adobe",
    icon: <SiAdobe />,
    description: "Adobe - Design and Editing Software",
  },
  {
    name: "Analytics",
    icon: <FaChartBar />,
    description: "Analytics - Data Tracking and Analysis",
  },
  {
    name: "SEO",
    icon: <FaSearch />,
    description: "SEO - Search Engine Optimization",
  },
  {
    name: "Social Media",
    icon: <FaShareAlt />,
    description: "Social Media - Online Platforms for Networking",
  },
  {
    name: "Responsive",
    icon: <SiScreencastify />,
    description: "Responsive - Adaptable Web Design",
  },
  {
    name: "Payments",
    icon: <FaCreditCard />,
    description: "Payments - Online Payment Solutions",
  },
];

const Services = () => {
  return (
    <div className="bg-black inset-0 items-center text-center flex flex-col justify-center min-h-screen">
      <div className="font-bold text-4xl">Services We Provide</div>
      <p className="mt-16 text-lg max-w-2xl mx-auto">
        At Websol, we offer comprehensive web solutions to empower your digital
        presence:
      </p>
      {/* services carousel  */}
      <div className="my-4 w-full h-full flex justify-center mt-14">
        <Carousel className="w-[90%] md:w-[70%] ">
          <CarouselContent>
            {serviceList.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="bg-[#232329] shadow-lg transition-transform transform hover:scale-105 hover:border-4 hover:border-double border-purple-400 h-[32rem] rounded-xl opacity-90">
                    <CardHeader className="text-black">
                      <CardTitle className="text-2xl font-semibold bg-clip-text ">
                        <span class="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                          {item.name}
                        </span>
                      </CardTitle>
                      <CardDescription className="mt-2 text-gray-200">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mt-4">
                        {item.services && item.services.length > 0 ? (
                          item.services.map((service, index) => (
                            <p
                              key={index}
                              className="text-white bg-gray-600 px-4 py-2 shadow-md mb-2 rounded-xl w-[15rem]"
                            >
                              {service}
                            </p>
                          ))
                        ) : (
                          <p className="text-gray-300">
                            No technologies listed.
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-slate-600 text-white hidden md:flex" />
          <CarouselNext className="bg-slate-600 text-white  hidden md:flex" />
        </Carousel>
      </div>
      <p className="mt-10 text-lg max-w-2xl mx-auto">
        Our team of experts at Websol delivers tailored solutions for businesses
        of all sizes, from startups to enterprises. Let us bring your digital
        vision to life with cutting-edge technology and industry best practices.
      </p>

      {/* Tech Stack Section */}

      <div className="mt-14 w-[80%]">
        <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
        <div className="grid grid-cols-5 gap-x-6 gap-y-6 mt-14">
          {techStack.map((tech, index) => (
            <TooltipProvider delayDuration={100} key={index}>
              <Tooltip>
                <TooltipTrigger className="w-full bg-[#232329] h-[100px] md:h-[150px] rounded-xl flex justify-center items-center group">
                  <div className="text-3xl md:text-6xl group-hover:text-accent transition-all duration-300">
                    {tech.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <p className="mt-16 text-lg max-w-2xl mx-auto">
          Don{"'"}t see what you are looking for? Contact us to discuss you
          specific needs.
        </p>
      </div>
    </div>
  );
};

export default Services;
