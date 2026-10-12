"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const pageNames: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/portfolio": "portfolio",
  "/contact": "contact",
};

// White curtains close over the old page and open on the new one, with the
// page name flashed in between.
export default function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="w-screen h-dvh bg-black/30">
        <motion.div
          className="h-dvh w-screen fixed bg-white rounded-b-[100px] z-40 pointer-events-none"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* pointer-events-none: this stays in the DOM at opacity 0 and must not swallow taps. */}
        <motion.div
          className="fixed m-auto top-0 left-0 right-0 bottom-0 text-black text-6xl md:text-8xl cursor-default w-fit h-fit z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pageNames[pathname] ?? pathname.slice(1)}
        </motion.div>
        <motion.div
          className="h-dvh w-screen fixed bg-white rounded-t-[100px] bottom-0 z-30 pointer-events-none"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100dvh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
