"use client";

import { useEffect } from 'react';

interface ParallaxVideoScrollProps {
  navbarHeight: number;
}

export default function ParallaxVideoScroll({ navbarHeight }: ParallaxVideoScrollProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY * 0.5}px`); // Adjust 0.5 for desired parallax speed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }, [navbarHeight]);

  return null; // This component doesn't render anything visible
}
