import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden px-6 py-24">
        <div className="orb violet -left-40 top-20 h-72 w-72" />
        <div className="orb cyan right-[-10rem] top-40 h-64 w-64" />
        <div className="orb rose bottom-[-8rem] left-1/3 h-72 w-72" />
        <div className="glass-panel relative mx-auto w-full max-w-5xl rounded-3xl border border-white/10 p-12 text-center shadow-[0_0_80px_rgba(123,97,255,0.25)]">
          <p className="font-heading text-sm uppercase tracking-[0.6em] text-white/70">
            Haute Horlogerie Cosmique
          </p>
          <h1 className="mt-6 font-heading text-5xl uppercase tracking-[0.3em] md:text-6xl">
            Aeternum
          </h1>
          <p className="font-body mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Une maison horlogère d&apos;exception inspirée des constellations.
            Nos garde-temps révèlent la poésie du cosmos grâce à une précision
            suisse absolue et des complications rares.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.3em]">
            <Link
              href="/collections"
              className="rounded-full border border-white/30 px-8 py-3 transition-transform hover:scale-105 hover:border-cyan-300"
            >
              Explorer les collections
            </Link>
            <Link
              href="/personnalisation"
              className="rounded-full bg-white/10 px-8 py-3 transition-transform hover:scale-105 hover:bg-cyan-400/20"
            >
              Créer votre pièce
            </Link>
          </div>
        </div>
      </section>

      <section className="relative grid gap-10 px-6 pb-24 md:grid-cols-2 md:gap-16">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl uppercase tracking-[0.4em]">
              Signature
            </h2>
            <p className="font-body text-lg leading-relaxed text-white/75">
              Chaque montre Aeternum est assemblée à la main dans nos ateliers
              de Genève. La complication double tourbillon orbital incarne notre
              vision de la mesure du temps : une danse gravitationnelle fidèle à
              la dynamique cosmique.
            </p>
            <div className="flex gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Double Tourbillon Orbital</span>
              <span>Réserve 72h</span>
              <span>Luminova Astrale</span>
            </div>
          </div>
        </div>
        <div className="glass-panel relative grid gap-6 overflow-hidden rounded-3xl p-10">
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm uppercase tracking-[0.5em] text-white/70">
              Complications
            </h3>
            <ul className="font-body grid gap-4 text-base text-white/75">
              <li>Calendrier sidéral avec phases lunaires tridimensionnelles</li>
              <li>Indicateur de marées cosmique pour navigateurs stellaires</li>
              <li>Résonance harmonique inspirée du chant des étoiles</li>
            </ul>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(123,97,255,0.25),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(107,255,206,0.2),transparent_50%),linear-gradient(160deg,rgba(10,3,25,0.9),rgba(5,1,13,0.95))]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/30 bg-gradient-to-br from-white/20 via-transparent to-white/5 shadow-[0_0_60px_rgba(107,255,206,0.35)]" />
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40" />
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_15px_rgba(107,255,206,0.8)]" />
            <div className="absolute left-1/2 top-1/2 h-20 w-[1px] -translate-x-1/2 -translate-y-full origin-bottom bg-white/80" />
            <div className="absolute left-1/2 top-1/2 h-[1px] w-14 -translate-y-1/2 bg-white/50" />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-3xl uppercase tracking-[0.4em]">
            Constellations
          </h2>
          <p className="font-body mx-auto mt-4 max-w-3xl text-center text-lg text-white/75">
            Trois univers horlogers pour exprimer la singularité de votre
            trajectoire : Héritage, Sport et Astrale. Chaque collection est
            modulable, dotée de squelettages exclusifs et de boitiers en
            titane-saphir breveté.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Heritage",
                description:
                  "La tradition suisse magnifiée par des cadrans émaillés et des complications classiques.",
                href: "/heritage",
              },
              {
                title: "Sport",
                description:
                  "Performance absolue, chronométrie certifiée COSC, résistance aux champs magnétiques.",
                href: "/sport",
              },
              {
                title: "Astrale",
                description:
                  "Exploration avant-gardiste, matériaux luminescents et affichage orbital immersif.",
                href: "/astrale",
              },
            ].map((collection) => (
              <Link
                href={collection.href}
                key={collection.title}
                className="glass-panel group relative flex h-full flex-col justify-between rounded-3xl border border-white/10 p-8 transition-transform hover:-translate-y-2"
              >
                <div>
                  <h3 className="font-heading text-xl uppercase tracking-[0.4em] text-white">
                    {collection.title}
                  </h3>
                  <p className="font-body mt-6 text-base text-white/70">
                    {collection.description}
                  </p>
                </div>
                <span className="mt-8 text-sm uppercase tracking-[0.3em] text-cyan-200">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="glass-panel mx-auto max-w-5xl rounded-3xl p-12 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-[0.4em]">
            Programmes sur-mesure
          </h2>
          <p className="font-body mx-auto mt-6 max-w-3xl text-lg text-white/75">
            De la sélection des pierres à la gravure astrale personnalisée,
            notre atelier développe une montre unique pour votre galaxie
            personnelle. Rencontrez nos maîtres horlogers dans le salon privé
            d&apos;Aeternum Genève.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.3em]">
            <Link
              href="/personnalisation"
              className="rounded-full border border-white/30 px-8 py-3 hover:border-rose-300"
            >
              Configurer
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white/10 px-8 py-3 hover:bg-rose-400/20"
            >
              Réserver une visite privée
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
