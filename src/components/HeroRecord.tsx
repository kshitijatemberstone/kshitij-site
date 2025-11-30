
function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full px-4 py-1.5 text-xs bg-slate-900 border border-slate-800 text-slate-200">
      {children}
    </span>
  );
}


export function HeroRecord() {
  return (
    <section className="relative min-h-[80vh] flex flex-col md:flex-row md:items-center gap-10">

      {/* LEFT: Text */}
      <div className="flex-1 space-y-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.15)_0,transparent_60%)]" />

        <div className="space-y-8 max-w-4xl">
          <p className="uppercase text-xs tracking-[0.4em] text-slate-400">
            Engineer Profile · Active
          </p>

          <h1 className="font-space text-5xl leading-[1.05] tracking-tight text-slate-50">
            Kshitij Kapure
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl">
            Senior Frontend Engineer designing
            <span className="text-sky-400 font-medium"> financial-grade systems</span>,
            micro-frontend architectures and high-performance user interfaces for products
            that move money, data and decisions.
          </p>

          <div className="flex flex-wrap gap-4 text-sm mt-6">
            <Chip>7+ years</Chip>
            <Chip>Fintech</Chip>
            <Chip>Banking</Chip>
            <Chip>Energy</Chip>
            <Chip>React</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Micro frontends</Chip>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#work"
              className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-black"
            >
              Access work
            </a>
            <a
              href="/kshitij_cv.pdf"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-300 hover:border-slate-400"
            >
              Download profile
            </a>
          </div>

          <p className="text-sm text-slate-400 pt-4">
            Based in India · Available for EU/UK & remote roles
          </p>
        </div>

        {/* chips and buttons as-is */}
      </div>

      {/* RIGHT: PHOTO */}
      <div className="flex-shrink-0">
        <div
          className="
    relative
    w-72 sm:w-80 md:w-96
    aspect-[3/4]
    overflow-hidden
    rounded-3xl
    border border-slate-800
    shadow-xl
    bg-slate-900
  "
        >
          <img
            src="/me/profile.jpg"
            alt="Kshitij Kapure"
            className="h-full w-full object-cover object-[50%_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <p className="mt-3 text-center text-xs text-slate-400">
          Senior Frontend Engineer · Fintech & Energy
        </p>
      </div>
    </section>
  );
}