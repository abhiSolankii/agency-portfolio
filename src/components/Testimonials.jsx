"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { testimonialsList } from "../lib/data";

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
    <section className="bg-black text-white w-full">
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
