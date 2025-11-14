"use client";

import Link from "next/link";
import { useMemo } from "react";

const collections = [
  {
    slug: "heritage",
    title: "Heritage",
    description:
      "Classiques intemporels, guillochage manuel et complications historiques revisitées.",
    highlights: ["Boîtier or blanc 41mm", "Émail grand feu", "Calendrier perpétuel"],
  },
  {
    slug: "sport",
    title: "Sport",
    description:
      "Chronographes de haute précision, résistance extrême et architecture contemporaine.",
    highlights: ["Titane grade 5", "Chronographe flyback", "Étanche 200m"],
  },
  {
    slug: "astrale",
    title: "Astrale",
    description:
      "Exploration lumineuse, affichage orbital et matériaux futuristes inspirés du cosmos.",
    highlights: ["Saphir teinté", "Double tourbillon", "Luminova spectrale"],
  },
  {
    slug: "nocturne",
    title: "Nocturne",
    description:
      "Pièces de haute complication pour soirées galactiques, sertissage stellaire exclusif.",
    highlights: ["Diamants noirs", "Répétition minutes", "Constellation personnalisée"],
  },
];

export default function CollectionsPage() {
  const expanded = useMemo(
    () =>
      collections.map((collection, index) => ({
        ...collection,
        gradient:
          index % 2 === 0
            ? "from-[#7b61ff]/40 via-black/40 to-transparent"
            : "from-[#6bffce]/30 via-black/40 to-transparent",
      })),
    []
  );

  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-heading text-4xl uppercase tracking-[0.4em]">
          Collections Aeternum
        </h1>
        <p className="font-body mx-auto mt-6 max-w-3xl text-lg text-white/75">
          Faites défiler horizontalement les univers de la maison. Chaque
          collection incarne une vision du temps, du patrimoine classique aux
          explorations astrales.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto pb-8">
        <div className="flex min-w-fit gap-8">
          {expanded.map((collection) => (
            <article
              key={collection.slug}
              className="glass-panel relative flex h-[32rem] w-[26rem] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-10 transition-transform duration-500 hover:-translate-y-2 hover:border-white/30"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-80`}
              />
              <div className="relative z-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Collection
                </p>
                <h2 className="font-heading text-3xl uppercase tracking-[0.3em]">
                  {collection.title}
                </h2>
                <p className="font-body text-base text-white/75">
                  {collection.description}
                </p>
                <ul className="font-body space-y-3 text-sm text-white/65">
                  {collection.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-white/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/${collection.slug}`}
                className="relative z-10 mt-6 text-sm uppercase tracking-[0.3em] text-cyan-200 transition-colors hover:text-white"
              >
                Découvrir →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
