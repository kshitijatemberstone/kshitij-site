
// src/app/page.tsx
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { Principles } from "@/components/principles";
import { ContactStrip } from "@/components/contact-strip";

export default function HomePage() {
  return (
    <main className="space-y-24 md:space-y-32">
      <Hero />
      <SelectedWork />
      <Skills />
      <Timeline />
      <Principles />
      <ContactStrip />
    </main>
  );
}