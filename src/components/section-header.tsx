// components/section-header.tsx
type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div id={id} className="space-y-2">
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-space text-xl font-semibold text-slate-50 md:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-slate-300">{description}</p>
      )}
    </div>
  );
}