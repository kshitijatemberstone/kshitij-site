// src/app/page.tsx
import { HeroRecord } from "@/components/HeroRecord";
import { WorkLogs } from "@/components/WorkLogs";
import { SectionExperience } from "@/components/section-experience";
import { SectionSkills } from "@/components/section-skills";
import { SectionPrinciples } from "@/components/section-principles";
import { SectionContact } from "@/components/section-contact";

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-28">
      <HeroRecord />

      {/* subtle divider between hero and content */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <WorkLogs />
      <SectionExperience />
      <SectionSkills />
      <SectionPrinciples />
      <SectionContact />
    </div>
  );
}