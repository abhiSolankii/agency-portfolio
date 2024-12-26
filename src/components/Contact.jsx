"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section className="bg-black text-white min-h-screen w-full py-16 flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg max-w-xl mx-auto text-gray-400">
            Whether you have a question, want to start a project, or just want
            to say hi, I{"'"}ll try my best to get back to you!
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid gap-8 lg:grid-cols-2 items-start w-[90%] md:w-[80%] mx-auto">
          {/* Form Section */}
          <Card className="bg-[#1f1f25] rounded-xl">
            <CardContent className="p-4 md:p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="mt-2 bg-gray-800 text-white rounded-xl"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 bg-gray-800 text-white rounded-xl"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="mt-2 bg-gray-800 text-white rounded-xl"
                    rows="6"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full rounded-xl">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Section */}
          <div className="flex flex-col space-y-8">
            {/* Info Cards */}
            <div className="bg-[#1f1f25] p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400">websol@example.com</p>
            </div>
            <div className="bg-[#1f1f25] p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-400">+91 2345677890</p>
            </div>
            <div className="bg-[#1f1f25] p-6 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Location
              </h3>
              <p className="text-gray-400">12//49, Pune, IN</p>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl" />
              </a>
              <a
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:text-purple-500 transition-colors duration-300 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
