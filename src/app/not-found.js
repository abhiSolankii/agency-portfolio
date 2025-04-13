"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#000000] min-h-screen text-[#F5E6CC] flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A017]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4A2C2A]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-8xl font-bold mb-4 text-[#D4A017]">404</h1>
          <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl mb-8 text-[#F5E6CC]/80">
            Looks like you've ventured into uncharted territory.
            <br />
            Let's get you back on track.
          </p>

          <Link href="/" className="inline-block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4A017] to-[#4A2C2A] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative px-6 py-3 bg-[#000000] rounded-full border border-[#D4A017]/20">
              <span className="text-[#F5E6CC] group-hover:text-[#F5E6CC] transition duration-200">
                Back to Home
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
