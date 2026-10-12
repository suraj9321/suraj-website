"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { profile, sections } from "@/content";

// Sticky nav: section links light up as you pass each section; a thin
// progress line beneath shows how far down the page you are.
export default function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
        else if (window.scrollY < 200) setActive(null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-name" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <motion.div className="nav-progress" style={{ scaleX }} />
    </header>
  );
}
