"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";

export function SubpageHero({
  eyebrow,
  title,
  accent,
  description,
  index,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  index: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="subpage-hero">
      <div className="subpage-hero__grid" aria-hidden="true" />
      <motion.div
        className="subpage-hero__orb"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <i />
        <i />
      </motion.div>
      <div className="shell subpage-hero__inner">
        <motion.div
          className="subpage-hero__index"
          initial={{ x: -24 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {index}
        </motion.div>
        <div>
          <motion.p
            className="kicker kicker--light"
            initial={{ clipPath: "inset(0 4% 0 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.65 }}
          >
            {eyebrow}
          </motion.p>
          <h1>
            <span>
              <motion.span
                initial={{ y: "6%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {title}
              </motion.span>
            </span>
            {accent && (
              <span className="subpage-hero__accent">
                <motion.span
                  initial={{ y: "6%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {accent}
                </motion.span>
              </span>
            )}
          </h1>
          <motion.div
            className="subpage-hero__bottom"
            initial={{ clipPath: "inset(0 0 4% 0)", y: 10 }}
            animate={{ clipPath: "inset(0 0 0 0)", y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <p>{description}</p>
            <span>
              Explore <ArrowDown aria-hidden="true" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
