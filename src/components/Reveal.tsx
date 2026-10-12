"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";

const tags = { div: motion.div, li: motion.li, p: motion.p } as const;

type Props = {
  children: ReactNode;
  as?: keyof typeof tags;
  delay?: number;
  /** "view" (default) animates when scrolled into view; "mount" animates once on page load. */
  trigger?: "mount" | "view";
  className?: string;
  style?: CSSProperties;
};

// Slides content up and fades it in. One motion vocabulary for the whole page.
// Reduced-motion handling comes from <MotionConfig reducedMotion="user"> in the layout,
// which keeps server and client markup identical.
export default function Reveal({ children, as = "div", delay = 0, trigger = "view", className, style }: Props) {
  const M = tags[as];
  const target = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      {...(trigger === "mount"
        ? { animate: target, transition }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -10% 0px" }, transition })}
    >
      {children}
    </M>
  );
}
