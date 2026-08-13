"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const nodes = [
  { label: "Discover", className: "orbit-node orbit-node--one" },
  { label: "Design", className: "orbit-node orbit-node--two" },
  { label: "Build", className: "orbit-node orbit-node--three" },
  { label: "Operate", className: "orbit-node orbit-node--four" },
];

export function SystemOrbit() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const counterRotate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div className="system-orbit" aria-label="StackOrcs delivery system">
      <div className="orbit-grid" aria-hidden="true" />
      <motion.div
        className="orbit-ring orbit-ring--outer"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        <span />
        <span />
        <span />
      </motion.div>
      <motion.div className="orbit-ring orbit-ring--middle" style={{ rotate }}>
        <span />
      </motion.div>
      <motion.div
        className="orbit-ring orbit-ring--inner"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div className="orbit-core" style={{ rotate: counterRotate }}>
        <Image
          src="/stackorcs-logo.png"
          alt="StackOrcs bear mark"
          fill
          preload
          sizes="180px"
        />
      </motion.div>
      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={node.className}
          initial={{ scale: 0.92, rotate: -3 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.55 + index * 0.1,
            type: "spring",
            stiffness: 140,
            damping: 16,
          }}
        >
          <span>0{index + 1}</span>
          {node.label}
        </motion.div>
      ))}
      <div className="orbit-status">
        <i />
        System ready
      </div>
    </div>
  );
}
