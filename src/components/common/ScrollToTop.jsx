"use client"; // Required for client-side components in Next.js App Router

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Runs every time the pathname changes

  return null; // This component does not render anything
};

export default ScrollToTop;
