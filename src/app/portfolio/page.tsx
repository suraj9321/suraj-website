"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { portfolio } from "@/content";

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  // Scrolling happens inside the page container, not the window.
  const { scrollYProgress } = useScroll({ target: ref, container: containerRef });
  // One intro panel plus one per item, each a full viewport wide; scroll pans across them.
  const panels = portfolio.length + 1;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((panels - 1) / panels) * 100}%`]);

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-scroll scroll-area" ref={containerRef}>
        <div className="relative" style={{ height: `${panels * 100}vh` }} ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center">
            My Works
          </div>
          <div className="sticky top-0 flex h-[calc(100vh-6rem)] gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="h-[calc(100vh-6rem)] w-screen flex items-center justify-center bg-linear-to-r from-purple-300 to-red-300" />
              {portfolio.map((item) => (
                <div className={`h-[calc(100vh-6rem)] w-screen flex items-center justify-center bg-linear-to-r ${item.color}`} key={item.title}>
                  <div className="flex flex-col gap-6 text-white px-6 w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
                    <span className="text-sm md:text-base font-semibold uppercase tracking-wide opacity-80">{item.kind}</span>
                    <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">{item.title}</h2>
                    <p className="text-base md:text-lg lg:text-xl">{item.desc}</p>
                    <p className="text-sm md:text-base opacity-80">{item.meta}</p>
                    {item.href && (
                      <a href={item.href} target="_blank" rel="noreferrer" className="flex justify-end">
                        <span className="p-2 text-sm md:p-4 md:text-base lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded">{item.cta}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-12 md:gap-16 items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg animate={{ rotate: 360 }} transition={{ duration: 10, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0" />
              </defs>
              <text fill="#000">
                <textPath href="#circlePath" className="text-lg">
                  Software Engineer · AI Agents ·
                </textPath>
              </text>
            </motion.svg>
            <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
