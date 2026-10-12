"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import NavLink from "./NavLink";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { profile } from "@/content";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: { rotate: 0 },
  opened: { rotate: 45 },
};
const centerVariants = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
};
const bottomVariants = {
  closed: { rotate: 0 },
  opened: { rotate: -45 },
};
const listVariants = {
  closed: { x: "100vw" },
  opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
};
const listItemVariants = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-sm bg-white rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-black mr-1">Suraj</span>
          <span className="w-12 h-8 rounded bg-black text-white flex items-center justify-center">Sah</span>
        </Link>
      </div>

      {/* Social */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <MailIcon />
        </a>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left" />
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded" />
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left" />
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black/90 backdrop-blur-sm text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
