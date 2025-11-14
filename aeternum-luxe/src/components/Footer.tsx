export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12 text-sm text-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg uppercase tracking-[0.5em] text-white">
            Aeternum
          </p>
          <p className="mt-2 max-w-md leading-relaxed">
            Haute horlogerie suisse façonnée par les étoiles. Chaque pièce est
            assemblée à la main au cœur du Val d&apos;Aoste.
          </p>
        </div>
        <div className="space-y-2 text-right uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Aeternum SA</p>
          <p>Rue des Galaxies 88, Genève</p>
          <p>contact@aeternum.watch</p>
        </div>
      </div>
    </footer>
  );
}
