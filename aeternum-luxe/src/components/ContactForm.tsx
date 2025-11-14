"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-panel space-y-6 rounded-3xl p-10"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="font-heading text-xl uppercase tracking-[0.4em]">Rendez-vous</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="text-sm uppercase tracking-[0.3em] text-white/70">
          Nom complet
          <input
            required
            type="text"
            className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-base text-white/80 outline-none focus:border-cyan-200"
          />
        </label>
        <label className="text-sm uppercase tracking-[0.3em] text-white/70">
          Email
          <input
            required
            type="email"
            className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-base text-white/80 outline-none focus:border-cyan-200"
          />
        </label>
      </div>
      <label className="text-sm uppercase tracking-[0.3em] text-white/70">
        Téléphone
        <input
          type="tel"
          className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-base text-white/80 outline-none focus:border-cyan-200"
        />
      </label>
      <label className="text-sm uppercase tracking-[0.3em] text-white/70">
        Intérêt principal
        <select className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-base text-white/80 outline-none focus:border-cyan-200">
          <option>Collection Heritage</option>
          <option>Collection Sport</option>
          <option>Collection Astrale</option>
          <option>Pièce Nocturne</option>
          <option>Personnalisation complète</option>
        </select>
      </label>
      <label className="text-sm uppercase tracking-[0.3em] text-white/70">
        Message
        <textarea
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-base text-white/80 outline-none focus:border-cyan-200"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full border border-white/30 px-8 py-3 text-xs uppercase tracking-[0.4em] text-white/80 transition hover:border-white/60 hover:text-white"
      >
        Valider la demande
      </button>
      {submitted && (
        <p className="text-center text-sm uppercase tracking-[0.25em] text-cyan-200">
          Merci. Notre concierge vous contacte sous 24 heures.
        </p>
      )}
    </form>
  );
}
