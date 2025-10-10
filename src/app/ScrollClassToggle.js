"use client";

import { useEffect } from "react";

export default function ScrollClassToggle() {
  useEffect(() => {
    let timeout = null;
    const onScroll = () => {
      const root = document.documentElement;
      if (!root.classList.contains("scrolling")) root.classList.add("scrolling");
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        root.classList.remove("scrolling");
      }, 180);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return null;
}

