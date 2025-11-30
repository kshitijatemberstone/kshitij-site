// components/principles.tsx
import { principles } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function Principles() {
  return (
    <section className="space-y-8" id="principles">
      <SectionHeader
        eyebrow="Approach"
        title="How I think about engineering."
        description="The principles that guide how I design systems, ship features, and work with teams."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((p) => (
          <article
            key={p.title}
            className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4"
          >
            <h3 className="mb-3 text-sm font-semibold text-slate-50">
              {p.title}
            </h3>
            <p className="text-xs text-slate-300">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}