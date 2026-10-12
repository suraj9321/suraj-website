"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { profile, experience } from "@/content";

export default function Homepage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      {/* Scrolls on phones, where the photo and text stack; fills the viewport side by side on large screens. */}
      <div className="h-full overflow-y-auto lg:overflow-hidden scroll-area">
        <div className="min-h-full flex flex-col lg:flex-row lg:gap-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-8 lg:pb-0">
          {/* Image */}
          <div className="shrink-0 lg:h-full lg:w-1/2 relative flex items-center justify-center py-4">
            <div className="relative aspect-square w-[min(100%,36dvh)] lg:w-[min(100%,64dvh)] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/assets/suraj.jpg"
                alt="Suraj Sah in front of the Lower Manhattan skyline"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 40vh, 64vh"
              />
            </div>
          </div>
          {/* Text */}
          <div className="lg:h-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-center justify-center pt-4 lg:pt-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              {profile.headline}
            </h1>
            <p className="md:text-xl text-white/85">{profile.lede}</p>
            <div className="w-full flex gap-4">
              <Link
                href="/portfolio"
                className="p-4 rounded-lg ring-1 ring-white bg-white text-black"
              >
                View my work
              </Link>
              <Link
                href="/contact"
                className="p-4 rounded-lg ring-1 ring-white"
              >
                Contact me
              </Link>
            </div>
            {/* Where I've worked */}
            <div className="w-full flex flex-wrap items-center gap-3 pt-2">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="bg-white/90 rounded-lg px-3 py-2"
                >
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={96}
                    height={28}
                    unoptimized
                    className="h-7 w-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
