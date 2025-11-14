export const metadata = {
  title: "À Propos | Aeternum Haute Horlogerie",
};

export default function AproposPage() {
  return (
    <div className="px-6 py-20">
      <section className="glass-panel mx-auto max-w-5xl rounded-3xl p-12 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Vision</p>
        <h1 className="font-heading mt-4 text-4xl uppercase tracking-[0.4em]">
          Maison Aeternum
        </h1>
        <p className="font-body mx-auto mt-6 max-w-3xl text-lg text-white/75">
          Aeternum est née dans les montagnes enneigées du Val d&apos;Aoste, là où le silence
          développe l&apos;écoute des étoiles. Depuis 1821, nous façonnons des instruments célestes
          pour les esprits visionnaires.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-3">
        {[
          {
            title: "Atelier",
            content:
              "43 horlogers, 7 astrographes, 12 artisans guillocheurs. Chaque mouvement est assemblé au cœur de Genève, dans une manufacture alimentée par l&apos;énergie hydroélectrique alpine.",
          },
          {
            title: "Philosophie",
            content:
              "Le temps n'est pas linéaire. Nos complications sont pensées comme des orbites. Nous métamorphosons la mécanique pour refléter votre trajectoire personnelle.",
          },
          {
            title: "Engagement",
            content:
              "Matières traçables, titane recyclé, diamants cultivés grâce à des programmes solidaires. Les montres Aeternum sont garanties à vie et entretenues par notre cercle d'experts.",
          },
        ].map((item) => (
          <article key={item.title} className="glass-panel rounded-3xl p-8">
            <h2 className="font-heading text-xl uppercase tracking-[0.4em]">{item.title}</h2>
            <p className="font-body mt-4 text-base text-white/70">{item.content}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-16 glass-panel max-w-6xl rounded-3xl p-12">
        <h2 className="font-heading text-2xl uppercase tracking-[0.4em]">
          Manufacture dans la voie lactée
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="font-body space-y-4 text-base text-white/75">
            <p>
              Nous travaillons main dans la main avec des astrophysiciens pour transcrire les
              vibrations cosmiques en complications poétiques. Le programme HelioSound™ permet de
              transposer les ondes solaires en sonneries harmoniques.
            </p>
            <p>
              Chaque collection est accompagnée d&apos;une œuvre sonore exclusive composée par le
              studio Aeternum Frequencies. Nos clients reçoivent un certificat digital scellé sur la
              blockchain privée de la maison.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(107,255,206,0.2),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(123,97,255,0.25),transparent_60%),linear-gradient(160deg,rgba(4,4,12,0.9),rgba(7,0,16,0.9))]" />
            <div className="relative z-10 p-8 text-sm uppercase tracking-[0.3em] text-white/60">
              <p>Observatoire Aeternum</p>
              <p className="mt-4 text-white">
                Vitrines holographiques, studio acoustique, archives patrimoniales. Les visites sont
                strictement limitées à huit personnes par semaine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
