// components/selected-work.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function SelectedWork() {
  return (
    <section className="space-y-8" id="work">
      <SectionHeader
        eyebrow="Selected work"
        title="Proof, not promises."
        description="A few projects that show how I think about scale, performance, and developer experience in real-world systems."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-slate-500 hover:shadow-soft-xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <div className="space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                {project.label}
              </p>
              <h3 className="text-sm font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="text-xs text-slate-300">{project.summary}</p>

              <ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex gap-1.5">
                    <span className="mt-[5px] h-1 w-3 rounded-full bg-sky-500/60" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}