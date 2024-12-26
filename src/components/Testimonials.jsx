"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const testimonialsList = [
  {
    id: 1,
    name: "Rajesh Sharma",
    title: "CEO, Spice Bazaar Online",
    testimonial:
      "WebSol's e-commerce expertise boosted our orders by 200%. Their blend of local market insight and global tech is unmatched!",
  },
  {
    id: 2,
    name: "Priya Patel",
    title: "Founder, EduTech Innovations Pvt. Ltd.",
    testimonial:
      "Our learning platform now serves 500+ schools thanks to WebSol's scalable, user-friendly design. They truly get the Indian ed-tech scene.",
  },
  {
    id: 3,
    name: "Amit Desai",
    title: "CEO, Ayur Wellness",
    testimonial:
      "WebSol's SEO strategies increased our sales by 180%. They excel at promoting Ayurvedic products both locally and globally.",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    title: "Founder, PayEase Solutions",
    testimonial:
      "WebSol delivered a secure, RBI-compliant payment gateway that's boosted our fintech credibility significantly.",
  },
  {
    id: 5,
    name: "Ananya Reddy",
    title: "Owner, Desi Delights Restaurants",
    testimonial:
      "Our online orders shot up 150% with WebSol's sleek website and efficient ordering system. They've revolutionized our digital presence!",
  },
  {
    id: 6,
    name: "Sanjay Gupta",
    title: "CEO, TechSol Industries",
    testimonial:
      "WebSol's IoT-integrated platform has transformed our production monitoring. They're the perfect partner for our Industry 4.0 journey.",
  },
  {
    id: 7,
    name: "Meera Krishnan",
    title: "Owner, Indic Arts Emporium",
    testimonial:
      "WebSol beautifully showcased our traditional art globally, increasing online sales by 250%. They truly bridged culture and technology.",
  },
  {
    id: 8,
    name: "Dr. Arjun Singh",
    title: "Founder, HealthCare Connect",
    testimonial:
      "Patient engagement up 300% with WebSol's telemedicine platform. Their grasp of healthcare compliance and security is impressive.",
  },
];

const Testimonials = () => {
  const [isFlipped, setIsFlipped] = useState({});

  const handleFlip = (id) => {
    setIsFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const [visibleCards, setVisibleCards] = useState(6);
  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <section className="bg-black text-white min-h-screen w-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
        <p className="mb-16 text-lg max-w-2xl mx-auto">
          Hear what our clients have to say about working with us.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto">
        {testimonialsList.slice(0, visibleCards).map((testimonial) => (
          <ReactCardFlip
            key={testimonial.id}
            isFlipped={isFlipped[testimonial.id]}
            flipDirection="vertical"
          >
            {/* Front side */}
            <div className="bg-[#232329] p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {testimonial.name}
                </span>
              </h3>
              <p className="text-indigo-400">{testimonial.title}</p>
              <button
                onClick={() => handleFlip(testimonial.id)}
                className="mt-4 text-blue-400 hover:underline"
              >
                Read
              </button>
            </div>

            {/* Back side */}
            <div className="bg-[#1f1f25] p-8 rounded-xl shadow-lg">
              <blockquote className="italic mb-4">
                <p className="mb-4">&quot;{testimonial.testimonial}&quot;</p>
              </blockquote>
              <button
                onClick={() => handleFlip(testimonial.id)}
                className="mt-4 text-blue-400 hover:underline"
              >
                Go Back
              </button>
            </div>
          </ReactCardFlip>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {visibleCards < testimonialsList.length && (
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

export default Testimonials;
