// components/skills.tsx
import { skills } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function Skills() {
  return (
    <section className="space-y-8" id="skills">
      <SectionHeader
        eyebrow="Capabilities"
        title="What I’m actually good at."
        description="Beyond frameworks and buzzwords, this is the work I’ve done repeatedly under production pressure."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <SkillGroup
          title="Frontend engineering"
          items={skills.frontend}
        />
        <SkillGroup title="Backend & cloud" items={skills.backend} />
        <SkillGroup title="Leadership & delivery" items={skills.leadership} />
      </div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-50">{title}</h3>
      <ul className="space-y-2 text-xs text-slate-300">
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