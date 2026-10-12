"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }: { link: { url: string; title: string } }) {
  const pathname = usePathname();
  const active = pathname === link.url;

  return (
    <Link className={`rounded p-1 ${active ? "bg-black text-white" : ""}`} href={link.url}>
      {link.title}
    </Link>
  );
}
