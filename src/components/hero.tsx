// src/components/hero.tsx
"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="mt-6 flex flex-col gap-10 md:mt-10 md:flex-row md:items-stretch">
      {/* LEFT: intro + CTAs */}
      <div className="flex-1 space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/80 px-4 py-1 text-[11px] font-medium text-sky-100 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
          Senior Frontend Engineer · React · TypeScript · Micro Frontends
        </div>

        <motion.h1
          className="font-space text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Banking-grade frontends
          <br />
          for products that{" "}
          <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-fuchsia-400 bg-clip-text text-transparent">
            can’t afford to fail.
          </span>
        </motion.h1>

        <p className="max-w-xl text-sm text-slate-300 sm:text-[0.95rem]">
          I design and ship frontends for fintech, banking and logistics –
          micro frontends, performant React apps, and systems that feel
          effortless no matter how much traffic or complexity you throw at them.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-sky-500 px-6 py-2.5 text-xs font-semibold text-slate-950 shadow-[0_18px_40px_rgba(8,47,73,0.7)] transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            View selected work
          </a>
          <a
            href="/Kshitij_Kapure_Resume.pdf"
            className="rounded-full border border-slate-700 bg-slate-950/80 px-6 py-2.5 text-xs font-semibold text-slate-100 backdrop-blur transition hover:border-slate-400 hover:bg-slate-900/80"
          >
            Download resume
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
          <span>Based in India</span>
          <span className="h-1 w-1 rounded-full bg-slate-500" />
          <span>Open to remote, EU &amp; UK roles</span>
          <span className="h-1 w-1 rounded-full bg-slate-500" />
          <span>7+ years · Fintech, Energy, Banking</span>
        </div>
      </div>

      {/* RIGHT: stacked cards / status panel */}
      <motion.aside
        className="flex-1 space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {/* Identity card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-2xl backdrop-blur">
          <div className="absolute inset-px rounded-[1.4rem] border border-slate-700/60" />
          <div className="relative flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Currently
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Senior Frontend Engineer
              </p>
              <p className="text-xs text-slate-400">Mashreq Bank · Dubai → India</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                Banking-grade experience
              </span>
              <span className="rounded-full bg-slate-900/90 px-2 py-1 text-[10px] text-slate-300">
                React · TS · Nx · Azure
              </span>
            </div>
          </div>

          <div className="relative mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-300">
            <Metric label="Production uptime" value="99.9%" accent="emerald" />
            <Metric label="Response time cut" value="−90%" accent="sky" />
            <Metric label="Teams led" value="6 devs" accent="slate" />
          </div>
        </div>

        {/* Project snapshot card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 shadow-xl backdrop-blur">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-sky-500/30" />
          <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full border border-fuchsia-500/25" />

          <div className="relative space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Featured system
            </p>
            <h2 className="text-sm font-semibold text-slate-50">
              Retail &amp; Corporate Banking Portal
            </h2>
            <p className="text-xs text-slate-300">
              Modular micro frontends for high-traffic banking flows, built with
              React, TypeScript, Nx &amp; Azure, serving customers across regions.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
              {["Micro frontends", "Performance-first", "Internationalised", "Secure by design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

type MetricProps = {
  label: string;
  value: string;
  accent?: "emerald" | "sky" | "slate";
};

function Metric({ label, value, accent = "slate" }: MetricProps) {
  const color =
    accent === "emerald"
      ? "text-emerald-400"
      : accent === "sky"
      ? "text-sky-400"
      : "text-slate-100";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 px-3 py-2">
      <p className="text-[10px] text-slate-400">{label}</p>
      <p className={`mt-1 text-sm font-semibold ${color}`}>{value}</p>
    </div>
  );
}