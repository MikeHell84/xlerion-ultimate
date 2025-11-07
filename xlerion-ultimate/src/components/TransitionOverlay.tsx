import { motion } from "framer-motion";
import { useEffect, useRef } from "react"; // Import useRef

interface BarConfig {
  color: string;
  shadow: string;
  initial: any;
  animate: any;
  exit: any;
}

interface TransitionOverlayProps {
  onExitComplete: () => void;
  isTransitioning: boolean;
  barConfigs: BarConfig[];
}

export default function TransitionOverlay({ onExitComplete, isTransitioning, barConfigs = [] }: TransitionOverlayProps) {
  const completedAnimations = useRef(0);
  const totalBars = barConfigs.length;

  const handleIndividualAnimationComplete = (definition: any) => {
    completedAnimations.current += 1;
    if (completedAnimations.current === totalBars) {
      completedAnimations.current = 0; // Reset for next transition
      if (typeof definition === 'string' && definition === "exit") {
        onExitComplete();
      }
    }
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 9999,
        pointerEvents: isTransitioning ? "auto" : "none",
      }}
    >
      {barConfigs.map((barConfig, i) => (
        <motion.div
          key={i}
          initial={barConfig.initial}
          animate={isTransitioning ? barConfig.animate : barConfig.exit}
          exit={barConfig.exit}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={(definition) => handleIndividualAnimationComplete(definition)}
          style={{
            position: "absolute",
            backgroundColor: barConfig.color,
            boxShadow: barConfig.shadow,
            filter: `drop-shadow(0 0 15px ${barConfig.color})`,
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
          }}
        />
      ))}
    </motion.div>
  );
}