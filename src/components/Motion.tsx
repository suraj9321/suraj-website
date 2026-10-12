"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

// One place for motion policy: honour the OS reduced-motion setting everywhere.
export default function Motion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
