// src/components/PageTransitionWrapper.tsx
"use client";

import { motion, cubicBezier } from "framer-motion";

export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    rotateY: -90,
    x: "50%",
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: cubicBezier(0, 0, 0.2, 1), // Equivalent to easeOut
    },
  },
  exit: {
    scale: [1, 0.9, 0.9],
    rotateY: [0, 0, 90],
    x: [0, 0, "-50%"],
    transition: {
      duration: 1.5,
      times: [0, 0.33, 1],
      ease: cubicBezier(0.42, 0, 0.58, 1), // Equivalent to easeInOut
    },
  },
};

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width: '100%', position: 'absolute', top: 0, left: 0 }} // Position absolute for overlay
    >
      {children}
    </motion.div>
  );
}