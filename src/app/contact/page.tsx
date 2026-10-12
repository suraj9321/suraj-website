"use client";

import { motion } from "motion/react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { profile } from "@/content";

const hello = "Say Hello";

export default function ContactPage() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0vh" }} transition={{ duration: 1 }}>
      <div className="h-full overflow-y-auto lg:overflow-hidden scroll-area flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:gap-8">
        {/* Text */}
        <div className="min-h-[30dvh] lg:min-h-0 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl md:text-6xl lg:text-7xl">
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
        <div className="flex-1 min-h-0 lg:h-full lg:w-1/2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-base md:text-xl flex flex-col gap-5 md:gap-8 justify-center p-6 md:p-12 xl:p-16 mb-4 lg:mb-0 overflow-auto scroll-area">
          <span>Dear Suraj,</span>
          <p className="text-base text-white/75">
            The fastest way to reach me is email. I usually reply within a day. LinkedIn and GitHub work too.
          </p>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 border-b-2 border-b-white/60 pb-2 hover:border-b-white text-base md:text-lg break-all">
            <MailIcon /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b-2 border-b-white/60 pb-2 hover:border-b-white text-base md:text-lg break-all">
            <LinkedInIcon /> linkedin.com/in/surajsahiitkgp
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-b-2 border-b-white/60 pb-2 hover:border-b-white text-base md:text-lg break-all">
            <GitHubIcon /> github.com/suraj9321
          </a>
          <span>Regards</span>
        </div>
      </div>
    </motion.div>
  );
}
