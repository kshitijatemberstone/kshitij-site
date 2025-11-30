// components/timeline.tsx
import { timeline } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function Timeline() {
  return (
    <section className="space-y-8" id="timeline">
      <SectionHeader
        eyebrow="Journey"
        title="From Pune to Dubai and back."
        description="A quick map of where I’ve been focusing my energy so far."
      />

      <div className="relative border-l border-slate-800 pl-4 md:pl-6">
        <div className="absolute left-0 top-0 h-3 w-3 -translate-x-[7px] rounded-full bg-sky-500 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
        <div className="absolute bottom-0 left-0 h-3 w-3 -translate-x-[7px] translate-y-[10px] rounded-full bg-emerald-500" />

        <div className="space-y-6">
          {timeline.map((entry) => (
            <article key={entry.period} className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {entry.period}
              </p>
              <h3 className="text-sm font-semibold text-slate-50">
                {entry.role}
              </h3>
              <p className="text-xs font-medium text-slate-300">
                {entry.company}
              </p>
              <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300">
                {entry.details.map((d) => (
                  <li key={d} className="flex gap-1.5">
                    <span className="mt-[6px] h-1 w-3 rounded-full bg-slate-500/60" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}