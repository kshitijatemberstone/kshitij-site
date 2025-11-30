// src/components/background-orbits.tsx
"use client";

import { motion } from "framer-motion";

export function BackgroundOrbits() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950"
    >
      {/* soft grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_0)] bg-[length:40px_40px] opacity-[0.18]" />

      {/* top-right glow */}
      <motion.div
        className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl"
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* bottom-left glow */}
      <motion.div
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        initial={{ opacity: 0.15, scale: 1 }}
        animate={{ opacity: 0.4, scale: 1.05 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* slight vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_40%,#020617_100%)]" />
    </div>
  );
}