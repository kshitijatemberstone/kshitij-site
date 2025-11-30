// src/components/section-principles.tsx
import { principles } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function SectionPrinciples() {
  return (
    <section className="space-y-6" id="principles">
      <SectionHeader
        eyebrow="Approach"
        title="How I like to build things."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {principles.map((p) => (
          <article
            key={p.title}
            className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4"
          >
            <h3 className="mb-2 text-sm font-semibold text-slate-50">
              {p.title}
            </h3>
            <p className="text-xs text-slate-300">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}