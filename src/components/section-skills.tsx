// src/components/section-skills.tsx
import { skills } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function SectionSkills() {
  return (
    <section className="space-y-6" id="skills">
      <SectionHeader
        eyebrow="Capabilities"
        title="What I bring to a team."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <SkillCard title="Core frontend" items={skills.core} />
        <SkillCard title="Backend & cloud" items={skills.backendAndCloud} />
        <SkillCard title="Leadership" items={skills.leadership} />
      </div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-50">{title}</h3>
      <ul className="space-y-2 text-[11px] text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}