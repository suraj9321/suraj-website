"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "@/content";
import Reveal from "./Reveal";

// The rule draws itself down the page as you scroll through the roles;
// each dot fills in as its entry arrives.
export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <ol className="timeline" ref={ref}>
      <span className="timeline-rule-bg" aria-hidden="true" />
      <motion.span className="timeline-rule" aria-hidden="true" style={{ scaleY }} />
      {experience.map((job) => (
        <li key={job.company}>
          <motion.span
            className="dot"
            aria-hidden="true"
            initial={{ backgroundColor: "var(--sky)", scale: 0.8 }}
            whileInView={{ backgroundColor: "var(--harbor)", scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -30% 0px" }}
            transition={{ duration: 0.4 }}
          />
          <Reveal className="when">{job.when}</Reveal>
          <Reveal className="what" delay={0.08}>
            <h3>
              {job.company} <span className="role">{job.role}</span>
            </h3>
            <p className="stack">{job.stack}</p>
            <ul>
              {job.bullets.map((b) => (
                <li key={b.slice(0, 32)}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
