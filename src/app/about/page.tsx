"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "motion/react";
import Network from "@/components/Network";
import ScrollArrow from "@/components/ScrollArrow";
import { profile, skillChips, experience, education } from "@/content";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillRef, { margin: "-100px" });
  const expRef = useRef<HTMLDivElement>(null);
  const expInView = useInView(expRef, { margin: "-100px" });
  const eduRef = useRef<HTMLDivElement>(null);
  const eduInView = useInView(eduRef, { margin: "-100px" });

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-scroll scroll-area lg:flex" ref={containerRef}>
        {/* Text */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-32 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)} className="text-lg">
                {p}
              </p>
            ))}
            <ScrollArrow />
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{ x: "-300px" }} animate={skillsInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">
              SKILLS
            </motion.h1>
            <motion.div initial={{ x: "-300px" }} animate={skillsInView ? { x: 0 } : {}} transition={{ delay: 0.4 }} className="flex gap-4 flex-wrap">
              {skillChips.map((s) => (
                <div key={s} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  {s}
                </div>
              ))}
            </motion.div>
            <ScrollArrow />
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-12 justify-center" ref={expRef}>
            <motion.h1 initial={{ x: "-300px" }} animate={expInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">
              EXPERIENCE
            </motion.h1>
            <motion.div initial={{ x: "-300px" }} animate={expInView ? { x: 0 } : {}} transition={{ delay: 0.4 }}>
              {experience.map((job, i) => {
                const card = (
                  <div className="w-5/12">
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">{job.company}</div>
                    <div className="p-3 text-sm italic">{job.summary}</div>
                    <div className="p-3 text-red-400 text-sm font-semibold">{job.when}</div>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">{job.role}</div>
                  </div>
                );
                return (
                  <div className="flex justify-between min-h-48 pb-6" key={job.company}>
                    {i % 2 === 0 ? card : <div className="w-5/12" />}
                    <div className="w-1/6 flex justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2" />
                      </div>
                    </div>
                    {i % 2 === 0 ? <div className="w-5/12" /> : card}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={eduRef}>
            <motion.h1 initial={{ x: "-300px" }} animate={eduInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">
              EDUCATION
            </motion.h1>
            <motion.div initial={{ x: "-300px" }} animate={eduInView ? { x: 0 } : {}} transition={{ delay: 0.4 }} className="flex flex-col gap-6">
              {education.map((e) => (
                <div key={e.school} className="bg-white/60 rounded-lg p-4 flex flex-col gap-1">
                  <div className="font-semibold">{e.school}</div>
                  <div className="text-sm">{e.degree}</div>
                  <div className="text-sm text-red-400 font-semibold">{e.when}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Graphic */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30 p-12">
          <Network progress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
