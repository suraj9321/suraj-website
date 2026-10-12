"use client";

import { motion } from "motion/react";

export default function ScrollArrow() {
  return (
    <motion.svg
      initial={{ opacity: 0.2, y: 0 }}
      animate={{ opacity: 1, y: "10px" }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      viewBox="0 0 24 24"
      fill="none"
      width={50}
      height={50}
      aria-hidden="true"
    >
      <path d="M5 15a7 7 0 0 0 14 0V9A7 7 0 0 0 5 9v6Z" stroke="#000" strokeWidth={1} />
      <path d="M12 6v8" stroke="#000" strokeWidth={1} />
      <path d="m15 11-3 3-3-3" stroke="#000" strokeWidth={1} />
    </motion.svg>
  );
}
