"use client"

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  once = true 
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 30 };
      case "down": return { y: -30 };
      case "left": return { x: 30 };
      case "right": return { x: -30 };
      default: return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getDirectionOffset() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getDirectionOffset() }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
