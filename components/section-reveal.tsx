"use client";

import { motion, useReducedMotion } from "motion/react";

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { clipPath: "inset(0 0 3% 0)", y: 14, rotateX: 1.5 }
      }
      whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
