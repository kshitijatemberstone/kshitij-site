// components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Journey" },
  { href: "#principles", label: "Approach" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-2.5 text-sm shadow-soft-xl backdrop-blur md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-500/10 text-xs font-semibold text-sky-400">
            KK
          </span>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Kshitij Kapure</span>
            <span className="text-[10px] text-slate-400">
              Senior Frontend Engineer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs font-medium text-slate-300 transition hover:text-slate-50"
            >
              {link.label}
            </a>
          ))}
          <a
            // src="/me/profile.jpg"
            href="kshitij_cv.pdf"
            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-400"
          >
            Resume
          </a>
        </nav>

        <motion.div
          className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] md:ml-2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </header>
  );
}