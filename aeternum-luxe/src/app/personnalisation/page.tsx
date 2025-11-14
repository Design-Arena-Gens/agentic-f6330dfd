"use client";

import { useMemo, useState } from "react";

const dialPalettes = [
  { id: "nebula", label: "Nébuleuse Violet", gradient: "linear-gradient(135deg,#2a014f,#7b61ff)" },
  { id: "aurora", label: "Aurore Cyan", gradient: "linear-gradient(135deg,#012f3b,#6bffce)" },
  { id: "nova", label: "Nova Rose", gradient: "linear-gradient(135deg,#3b021a,#ff6b6b)" },
];

const strapOptions = [
  { id: "cuir-noir", label: "Cuir Galuchat Nocturne", texture: "#06040f" },
  { id: "titane", label: "Bracelet Titane Sablé", texture: "linear-gradient(160deg,#3b3c45,#6c6e7a)" },
  { id: "saturne", label: "Textile Cosmos Saturne", texture: "linear-gradient(90deg,#1a0930,#301050)" },
];

const complications = [
  { id: "double-tourbillon", label: "Double Tourbillon Orbital" },
  { id: "phase-lunaire", label: "Phase Lunaire 3D" },
  { id: "minute-repeater", label: "Répétition Minutes Cosmique" },
];

const engraving = [
  { id: "orion", label: "Constellation Orion" },
  { id: "lyre", label: "Constellation Lyre" },
  { id: "custom", label: "Motif personnalisé" },
];

export default function PersonnalisationPage() {
  const [dial, setDial] = useState(dialPalettes[0]);
  const [strap, setStrap] = useState(strapOptions[0]);
  const [selectedComplications, setSelectedComplications] = useState<string[]>([
    "double-tourbillon",
  ]);
  const [engravingChoice, setEngravingChoice] = useState(engraving[0].id);

  const basePrice = 280000;
  const price = useMemo(() => {
    const complicationPrice =
      selectedComplications.length * 42000 +
      (selectedComplications.includes("minute-repeater") ? 48000 : 0);
    const dialPremium = dial.id === "nova" ? 12000 : dial.id === "aurora" ? 8000 : 6000;
    const strapPremium = strap.id === "titane" ? 9000 : 4500;
    const engravingPremium = engravingChoice === "custom" ? 7000 : 3800;
    return basePrice + complicationPrice + dialPremium + strapPremium + engravingPremium;
  }, [dial, strap, selectedComplications, engravingChoice]);

  const toggleComplication = (id: string) => {
    setSelectedComplications((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row">
        <div className="flex-1 space-y-14">
          <header>
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              Atelier Virtuel
            </p>
            <h1 className="mt-4 font-heading text-4xl uppercase tracking-[0.4em]">
              Configurateur Aeternum
            </h1>
            <p className="font-body mt-6 max-w-xl text-lg text-white/75">
              Personnalisez votre garde-temps cosmique et transmettez votre configuration à nos
              maîtres horlogers. Chaque choix influe sur la sonorité, la luminosité et
              l&apos;équilibre de votre future pièce.
            </p>
          </header>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="font-heading text-base uppercase tracking-[0.4em] text-white">
              Cadran
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {dialPalettes.map((option) => (
                <button
                  type="button"
                  key={option.id}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    dial.id === option.id
                      ? "border-white/60 bg-white/10 shadow-[0_0_30px_rgba(123,97,255,0.35)]"
                      : "border-white/10 bg-black/40 hover:border-white/40"
                  }`}
                  onClick={() => setDial(option)}
                >
                  <div
                    className="h-16 w-full rounded-xl border border-white/20"
                    style={{ background: option.gradient }}
                  />
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/70">
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          </section>

          <section className="glass-panel rounded-3xl p-8">
            <h2 className="font-heading text-base uppercase tracking-[0.4em] text-white">
              Bracelet
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {strapOptions.map((option) => (
                <label
                  key={option.id}
                  className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all ${
                    strap.id === option.id
                      ? "border-white/60 bg-white/10 shadow-[0_0_25px_rgba(107,255,206,0.35)]"
                      : "border-white/10 bg-black/30 hover:border-white/30"
                  }`}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="strap"
                    checked={strap.id === option.id}
                    onChange={() => setStrap(option)}
                  />
                  <div
                    className="h-16 w-16 rounded-xl border border-white/20"
                    style={{ background: option.texture }}
                  />
                  <span className="text-sm uppercase tracking-[0.3em] text-white/70">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section className="glass-panel grid gap-6 rounded-3xl p-8 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-base uppercase tracking-[0.4em] text-white">
                Complications
              </h2>
              <div className="mt-4 space-y-3">
                {complications.map((item) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm uppercase tracking-[0.3em] text-white/65 transition hover:border-white/30"
                  >
                    {item.label}
                    <input
                      type="checkbox"
                      checked={selectedComplications.includes(item.id)}
                      onChange={() => toggleComplication(item.id)}
                      className="h-4 w-4 accent-[#7b61ff]"
                    />
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-base uppercase tracking-[0.4em] text-white">
                Gravure cosmique
              </h2>
              <div className="mt-4 space-y-3">
                {engraving.map((item) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm uppercase tracking-[0.3em] text-white/65 transition hover:border-white/30"
                  >
                    <input
                      type="radio"
                      name="engraving"
                      checked={engravingChoice === item.id}
                      onChange={() => setEngravingChoice(item.id)}
                      className="accent-[#ff6b6b]"
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="glass-panel relative flex w-full max-w-xl flex-col items-center justify-between overflow-hidden rounded-3xl p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,97,255,0.2),transparent_60%),radial-gradient(circle_at_80%_40%,rgba(107,255,206,0.2),transparent_55%)] opacity-80" />
          <div className="relative z-10 space-y-8">
            <h2 className="font-heading text-xl uppercase tracking-[0.4em]">
              Aperçu
            </h2>
            <div className="relative mx-auto h-72 w-72">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 shadow-[0_0_40px_rgba(123,97,255,0.3)]" />
              <div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
                style={{ background: dial.gradient }}
              />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <div className="absolute left-1/2 top-1/2 h-24 w-[1.5px] -translate-x-1/2 -translate-y-full origin-bottom bg-white/80" />
              <div className="absolute left-1/2 top-1/2 h-[1.5px] w-16 -translate-y-1/2 bg-white/55" />
              <div
                className="absolute -bottom-8 left-1/2 h-28 w-52 -translate-x-1/2 rounded-full border border-white/20"
                style={{ background: strap.texture }}
              />
            </div>

            <div className="space-y-4 text-sm uppercase tracking-[0.3em] text-white/65">
              <p>Cadran: {dial.label}</p>
              <p>Bracelet: {strap.label}</p>
              <p>Complications: {selectedComplications.length}</p>
              <p>Gravure: {engraving.find((item) => item.id === engravingChoice)?.label}</p>
            </div>
          </div>

          <div className="relative z-10 mt-10 space-y-4">
            <p className="font-heading text-2xl uppercase tracking-[0.4em] text-white">
              {price.toLocaleString("fr-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 0,
              })}
            </p>
            <p className="font-body text-base text-white/70">
              Estimation hors taxes, confirmée après rendez-vous en salon privé.
            </p>
            <button className="rounded-full border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.4em] text-white/80 transition hover:border-cyan-200 hover:text-white">
              Recevoir mon dossier de création
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
