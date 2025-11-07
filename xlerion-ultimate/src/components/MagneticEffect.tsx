"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface MagneticEffectProps {
  children: React.ReactNode;
}

const MagneticEffect: React.FC<MagneticEffectProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseX = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const x = useTransform(mouseX, (val) => val * 0.5); // Adjust sensitivity
  const y = useTransform(mouseY, (val) => val * 0.5); // Adjust sensitivity

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    mouseX.set(position.x);
    mouseY.set(position.y);
  }, [position, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ x, y, display: 'inline-block' }} // Ensure it doesn't take full width
    >
      {children}
    </motion.div>
  );
};

export default MagneticEffect;
