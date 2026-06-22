interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`mb-4 flex items-center gap-3 text-gold ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gold" />
        <span className="text-[10px] font-bold uppercase tracking-[0.35em]">{eyebrow}</span>
        {center && <span className="h-px w-8 bg-gold" />}
      </div>
      <h2 className="font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-7 text-white/50">{description}</p>}
    </div>
  );
}
