// components/hero.tsx
"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="mt-4 flex flex-col gap-12 md:mt-10 md:flex-row md:items-center">
      {/* Left: text */}
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1 text-[11px] font-medium text-slate-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Senior Frontend Engineer · React · TypeScript · Micro Frontends
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-space text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        >
          I build&nbsp;
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            bank-grade frontends
          </span>
          <br />
          that don’t flinch at scale.
        </motion.h1>

        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          7+ years building production systems for fintech and energy – from
          micro frontends for Mashreq Bank in Dubai to full-stack platforms
          for logistics and fuel delivery. I care about performance,
          developer experience, and quietly reliable systems.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            View selected work
          </a>
          <a
            href="/Kshitij_Kapure_Resume.pdf"
            className="rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-xs font-semibold text-slate-100 transition hover:border-slate-400"
          >
            Download resume
          </a>
        </div>

        <p className="text-[11px] text-slate-400">
          Based in India · Open to remote, EU &amp; UK opportunities
        </p>
      </div>

      {/* Right: “system” card */}
      <motion.aside
        className="flex-1"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-soft-xl backdrop-blur">
          {/* Top row */}
          <div className="mb-4 flex items-center justify-between text-[11px] text-slate-400">
            <span>Mashreq Bank · Dubai</span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
              Production-grade micro frontends
            </span>
          </div>

          <h2 className="mb-2 text-lg font-semibold text-slate-50">
            Retail &amp; Corporate Banking Portal
          </h2>
          <p className="mb-6 text-xs text-slate-300">
            React, TypeScript, Nx, and Azure powering modular micro frontends
            for high-traffic enterprise banking workloads across regions.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <StatCard label="Response time" value="↓ 90%" tone="emerald" />
            <StatCard label="User engagement" value="↑ 80%" tone="sky" />
            <StatCard
              label="Team"
              value="Led 6 devs · FE lead"
              tone="slate"
            />
            <StatCard
              label="Stack"
              value="React · TS · Nx · Azure"
              tone="slate"
            />
          </div>

          <motion.div
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-sky-500/30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          />
        </div>
      </motion.aside>
    </section>
  );
}

type StatCardProps = {
  label: string;
  value: string;
  tone?: "emerald" | "sky" | "slate";
};

function StatCard({ label, value, tone = "slate" }: StatCardProps) {
  const color =
    tone === "emerald"
      ? "text-emerald-400"
      : tone === "sky"
      ? "text-sky-400"
      : "text-slate-100";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
      <p className="mb-1 text-[11px] text-slate-400">{label}</p>
      <p className={`text-sm font-semibold ${color}`}>{value}</p>
    </div>
  );
}