// src/components/section-experience.tsx
import { experience } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function SectionExperience() {
  return (
    <section className="space-y-6" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I’ve been investing my time."
      />
      <div className="space-y-6 border-l border-slate-800 pl-4 md:pl-6">
        {experience.map((job) => (
          <article key={job.period} className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {job.period}
            </p>
            <h3 className="text-sm font-semibold text-slate-50">
              {job.role}
            </h3>
            <p className="text-xs text-slate-300">{job.company}</p>
            <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-1.5">
                  <span className="mt-[6px] h-1 w-3 rounded-full bg-slate-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}