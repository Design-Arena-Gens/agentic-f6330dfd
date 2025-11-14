import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Aeternum Haute Horlogerie",
};

export default function ContactPage() {
  return (
    <div className="px-6 py-20">
      <section className="glass-panel mx-auto max-w-5xl rounded-3xl p-12 text-center">
        <h1 className="font-heading text-4xl uppercase tracking-[0.4em]">
          Salon Privé Aeternum
        </h1>
        <p className="font-body mx-auto mt-6 max-w-3xl text-lg text-white/75">
          Prenez rendez-vous avec nos conseillers et découvrez l&apos;atelier secret d&apos;Aeternum
          au cœur de Genève. Nous concevons chaque rencontre comme une navigation stellaire
          privée.
        </p>
      </section>

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <aside className="glass-panel space-y-8 rounded-3xl p-10">
          <div>
            <h2 className="font-heading text-lg uppercase tracking-[0.4em]">Coordonnées</h2>
            <p className="font-body mt-4 text-base text-white/75">
              Rue des Galaxies 88
              <br />
              1207 Genève, Suisse
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
              concierge@aeternum.watch
              <br />
              +41 22 555 71 00
            </p>
          </div>

          <div>
            <h2 className="font-heading text-lg uppercase tracking-[0.4em]">Horaires</h2>
            <ul className="font-body mt-4 space-y-2 text-base text-white/70">
              <li>Lundi-Vendredi : 10h - 19h</li>
              <li>Samedi : 11h - 17h</li>
              <li>Dimanche : sur invitation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg uppercase tracking-[0.4em]">Salons</h2>
            <p className="font-body mt-4 text-base text-white/70">
              Genève • Zurich • Paris • Dubaï • Singapour
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
