import Link from "next/link";

type CollectionTemplateProps = {
  name: string;
  subtitle: string;
  description: string;
  narrative: string[];
  highlights: string[];
  innovations: string[];
  cta?: { href: string; label: string };
  gradient: string;
};

export function CollectionTemplate({
  name,
  subtitle,
  description,
  narrative,
  highlights,
  innovations,
  cta,
  gradient,
}: CollectionTemplateProps) {
  return (
    <div className="px-6 py-20">
      <section className="glass-panel relative overflow-hidden rounded-3xl p-12 text-center">
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-75`} />
        <header className="relative z-10 space-y-5">
          <p className="text-xs uppercase tracking-[0.5em] text-white/65">{subtitle}</p>
          <h1 className="font-heading text-5xl uppercase tracking-[0.4em]">{name}</h1>
          <p className="font-body mx-auto max-w-3xl text-lg text-white/75">{description}</p>
        </header>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
        <article className="glass-panel space-y-6 rounded-3xl p-10">
          <h2 className="font-heading text-xl uppercase tracking-[0.4em]">Esprit</h2>
          <div className="font-body space-y-4 text-base text-white/70">
            {narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className="glass-panel rounded-3xl p-10">
          <h2 className="font-heading text-xl uppercase tracking-[0.4em]">Signatures</h2>
          <ul className="font-body space-y-4 text-base text-white/75">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-16 glass-panel rounded-3xl p-10">
        <h2 className="font-heading text-xl uppercase tracking-[0.4em]">Innovations</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {innovations.map((innovation) => (
            <div
              key={innovation}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm uppercase tracking-[0.25em] text-white/70"
            >
              {innovation}
            </div>
          ))}
        </div>
      </section>

      {cta && (
        <div className="mt-16 text-center">
          <Link
            href={cta.href}
            className="rounded-full border border-white/30 px-10 py-3 text-xs uppercase tracking-[0.4em] text-white/80 transition hover:border-white/60 hover:text-white"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}
