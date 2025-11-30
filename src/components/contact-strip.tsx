// components/contact-strip.tsx
import { SectionHeader } from "./section-header";

export function ContactStrip() {
  return (
    <section className="space-y-6" id="contact">
      <SectionHeader
        eyebrow="Next"
        title="Building something serious?"
        description="I’m interested in roles and collaborations where frontend quality, performance, and reliability are actually non-negotiable."
      />

      <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-6">
        <div className="flex-1 space-y-2 text-sm text-slate-200">
          <p className="font-medium">
            Let’s talk about what you’re building and where frontend can give
            you unfair advantage.
          </p>
          <p className="text-xs text-slate-400">
            I usually respond fastest on email or LinkedIn.
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
            href="https://www.linkedin.com/in/kshitij"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 font-semibold text-slate-100 hover:border-slate-400"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <footer className="pt-4 text-[11px] text-slate-500">
        © {new Date().getFullYear()} Kshitij Kapure · kshitij.site
      </footer>
    </section>
  );
}