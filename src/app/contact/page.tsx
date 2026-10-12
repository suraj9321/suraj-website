"use client";

import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { profile } from "@/content";

const hello = "Say Hello";

export default function ContactPage() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-8">
        {/* Text */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl md:text-6xl lg:text-7xl">
          <div>
            {hello.split("").map((letter, i) => (
              <motion.span key={i} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}>
                {letter}
              </motion.span>
            ))}
            👋
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 min-h-0 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-base md:text-xl flex flex-col gap-5 md:gap-8 justify-center p-6 md:p-16 xl:p-24 mb-4 lg:mb-0 overflow-auto scroll-area">
          <span>Dear Suraj,</span>
          <p className="text-base text-gray-600">
            The fastest way to reach me is email. I usually reply within a day. LinkedIn and GitHub work too.
          </p>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 border-b-2 border-b-black pb-2 hover:text-gray-600">
            <MailIcon /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b-2 border-b-black pb-2 hover:text-gray-600">
            <LinkedInIcon /> linkedin.com/in/surajsahiitkgp
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b-2 border-b-black pb-2 hover:text-gray-600">
            <GitHubIcon /> github.com/suraj9321
          </a>
          <span>Regards</span>
        </div>
      </div>
    </motion.div>
  );
}
