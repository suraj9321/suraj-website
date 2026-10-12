"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

// A node graph that turns as the About page scrolls: three rings of nodes
// rotating at different rates around a core, for a distributed-systems engineer.
export default function Network({ progress }: { progress: MotionValue<number> }) {
  const outer = useTransform(progress, [0, 1], [0, 180]);
  const middle = useTransform(progress, [0, 1], [0, -270]);
  const inner = useTransform(progress, [0, 1], [0, 360]);

  const ring = (r: number, n: number, key: string) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      return <circle key={`${key}${i}`} cx={250 + r * Math.cos(a)} cy={250 + r * Math.sin(a)} r={key === "o" ? 7 : 9} fill="#000" />;
    });

  const spokes = (r: number, n: number, key: string) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      return <line key={`${key}l${i}`} x1={250} y1={250} x2={250 + r * Math.cos(a)} y2={250 + r * Math.sin(a)} stroke="#000" strokeWidth={1} opacity={0.35} />;
    });

  return (
    <svg viewBox="0 0 500 500" className="w-full h-full" aria-hidden="true">
      <motion.g style={{ rotate: outer, originX: 0.5, originY: 0.5 }}>
        <circle cx={250} cy={250} r={210} fill="none" stroke="#000" strokeWidth={1} strokeDasharray="6 10" />
        {spokes(210, 12, "o")}
        {ring(210, 12, "o")}
      </motion.g>
      <motion.g style={{ rotate: middle, originX: 0.5, originY: 0.5 }}>
        <circle cx={250} cy={250} r={140} fill="none" stroke="#000" strokeWidth={1.5} />
        {ring(140, 8, "m")}
      </motion.g>
      <motion.g style={{ rotate: inner, originX: 0.5, originY: 0.5 }}>
        <circle cx={250} cy={250} r={70} fill="none" stroke="#000" strokeWidth={2} />
        {ring(70, 5, "i")}
      </motion.g>
      <circle cx={250} cy={250} r={18} fill="#000" />
      <circle cx={250} cy={250} r={28} fill="none" stroke="#000" strokeWidth={2} />
    </svg>
  );
}
