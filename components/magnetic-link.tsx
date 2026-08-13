"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 18 });
  const y = useSpring(rawY, { stiffness: 220, damping: 18 });

  return (
    <motion.div
      style={{ x, y }}
      onPointerMove={(event) => {
        if (!ref.current || event.pointerType === "touch") return;
        const rect = ref.current.getBoundingClientRect();
        rawX.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        rawY.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <Link ref={ref} href={href} className={"magnetic-link " + className}>
        <span>{children}</span>
        <ArrowUpRight weight="bold" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
