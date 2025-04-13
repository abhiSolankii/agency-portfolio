"use client"; // Required for client-side components in Next.js App Router

import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent =
      windowHeight > 0 ? (scrollPosition / windowHeight) * 100 : 0;
    setScrollPercentage(Math.min(100, Math.max(0, scrollPercent)));
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the progress on mount

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] bg-black z-[100]"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#D4A017] transition-all duration-200 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
