"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Photo eases in with the hero and drifts slightly slower than the page on scroll.
export default function Portrait({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <motion.figure
      className="portrait"
      style={{ y }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.figure>
  );
}
