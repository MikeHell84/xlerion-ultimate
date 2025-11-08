"use client";

import React, { useEffect, useRef } from 'react';

interface ParallaxImageSectionProps {
  imageUrl: string;
  title: string; // New prop for the main title
  subtitle?: string; // Optional new prop for a subtitle
  height?: string; // Optional: e.g., '50vh', '700px'
  mouseParallaxIntensity?: number; // New prop for intensity, default to 0.02
}

export default function ParallaxImageSection({ imageUrl, title, subtitle, height = '50vh', mouseParallaxIntensity = 0.02 }: ParallaxImageSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY * 0.5}px`); // Adjust 0.5 for desired parallax speed
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const transformX = mouseX * mouseParallaxIntensity;
        const transformY = mouseY * mouseParallaxIntensity;

        sectionRef.current.style.setProperty('--mouse-x', `${transformX}px`);
        sectionRef.current.style.setProperty('--mouse-y', `${transformY}px`);
      }
    };

    const handleMouseLeave = () => {
      if (sectionRef.current) {
        sectionRef.current.style.setProperty('--mouse-x', `0px`);
        sectionRef.current.style.setProperty('--mouse-y', `0px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
      sectionRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
        sectionRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseParallaxIntensity]);

  return (
    <div ref={sectionRef} className="parallax-image-section" style={{ height: height }}>
      <div className="parallax-image-background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="parallax-content-overlay">
        <h1 className="display-2 fw-bold mb-4">{title}</h1>
        {subtitle && <p className="lead fs-5 mb-5">{subtitle}</p>}
      </div>
    </div>
  );
}
