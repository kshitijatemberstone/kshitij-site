// import { projects } from "@/lib/data";

// export function WorkLogs() {
//   return (
//     <section id="work" className="space-y-8">
//       <Header label="Selected Work" title="Execution Log" />

//       <div className="space-y-6">
//         {projects.map((p, index) => (
//           <article
//             key={p.id}
//             className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-4"
//           >
//             <div className="flex justify-between items-start">
//               <p className="text-xs tracking-widest uppercase text-slate-500">
//                 Log #{index + 1} · {p.label}
//               </p>
//               <span className="text-xs text-emerald-400">
//                 Completed
//               </span>
//             </div>

//             <h3 className="text-xl font-semibold text-slate-50">
//               {p.title}
//             </h3>

//             <p className="text-slate-300 max-w-3xl">{p.summary}</p>

//             <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-300">
//               {p.outcomes.map((o) => (
//                 <li key={o}>→ {o}</li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-2">
//               {p.stack.map((s) => (
//                 <span
//                   key={s}
//                   className="rounded-full px-3 py-1 text-xs bg-slate-900 border border-slate-700"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Header({ label, title }: { label: string; title: string }) {
//   return (
//     <div className="space-y-2">
//       <p className="uppercase tracking-[0.3em] text-xs text-slate-400">{label}</p>
//       <h2 className="font-space text-3xl text-slate-50">{title}</h2>
//     </div>
//   );
// }

// src/components/WorkLogs.tsx
// src/components/WorkLogs.tsx
import { projects } from "@/lib/data";

type Project = {
  id: string;
  label: string;
  title: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  screenshots?: string[];
};

const typedProjects = projects as Project[];

export function WorkLogs() {
  return (
    <section id="work" className="space-y-8">
      <Header label="Selected work" title="Execution log" />

      <div className="space-y-6">
        {typedProjects.map((p, index) => (
          <article
            key={p.id}
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-md backdrop-blur"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Log #{index + 1} · {p.label}
              </p>
              <span className="text-xs text-emerald-400">Production</span>
            </div>

            {/* Title + summary */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-50">
                {p.title}
              </h3>
              <p className="max-w-3xl text-sm text-slate-300">{p.summary}</p>
            </div>

            {/* Outcomes */}
            <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
              {p.outcomes.map((o) => (
                <li key={o} className="flex gap-2">
                  <span className="mt-[7px] h-1 w-3 rounded-full bg-sky-500/80" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Screenshots */}
            {p.screenshots && p.screenshots.length > 0 && (
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {p.screenshots.map((img) => (
                  <div
                    key={img}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-black"
                  >
                    <img
                      src={img}
                      alt={`${p.title} screenshot`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Live links */}
            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                {p.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                  >
                    {link.label}
                  </a>
                ))}
                <span className="text-[10px] text-slate-500">
                  May require login / customer access.
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Header({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
        {label}
      </p>
      <h2 className="font-space text-3xl text-slate-50">{title}</h2>
    </div>
  );
}

