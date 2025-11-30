// src/components/section-contact.tsx
import { SectionHeader } from "./section-header";

export function SectionContact() {
  return (
    <section className="space-y-6" id="contact">
      <SectionHeader
        eyebrow="Next"
        title="Building something serious?"
        description="I’m interested in roles and collaborations where frontend quality, performance and reliability are non-negotiable."
      />
      <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-6">
        <div className="flex-1 space-y-2 text-sm text-slate-200">
          <p className="font-medium">
            Let’s talk about what you’re building and where frontend can give
            you leverage.
          </p>
          <p className="text-xs text-slate-400">
            Email is best, but I’m active on LinkedIn as well.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs">
          <a
            href="mailto:kshitij.kapure@gmail.com"
            className="rounded-full bg-sky-500 px-4 py-2 font-semibold text-slate-950 hover:bg-sky-400"
          >
            Email me
          </a>
          <a
            href="https://wa.me/+918668692247"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-500 px-4 py-2 font-semibold text-slate-950 hover:bg-green-400"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/kshitij-kapure"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 font-semibold text-slate-100 hover:border-slate-400"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <footer className="pt-3 text-[11px] text-slate-500">
        © {new Date().getFullYear()} Kshitij Kapure · kshitij.site
      </footer>
    </section>
  );
}