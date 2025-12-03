"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

interface ScrollContextType {
  scrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  scrolled: false,
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
