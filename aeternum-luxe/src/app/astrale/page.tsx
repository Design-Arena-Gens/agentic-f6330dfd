import { CollectionTemplate } from "@/components/CollectionTemplate";

export const metadata = {
  title: "Collection Astrale | Aeternum Haute Horlogerie",
};

export default function AstralePage() {
  return (
    <CollectionTemplate
      name="Astrale"
      subtitle="Exploration immortelle"
      description="Une vision avant-gardiste qui transcende la lecture du temps. Les montres Astrale se parent de saphir fumé et de complications orbitales inédites."
      narrative={[
        "La cage tourbillon orbite autour du cadran à la manière d'un satellite, guidée par un champ magnétique sculpté. Les index flottants en météorite muonionalusta se révèlent grâce à un rétro-éclairage quantique.",
        "Chaque pièce Astrale est livrée avec un coffret lumineux qui projette la cartographie des constellations correspondant à votre date de passation.",
      ]}
      highlights={[
        "Affichage tridimensionnel des heures via prismes lumineux",
        "Dôme saphir fumé traité anti-reflets cosmiques",
        "Double fuseau temporel inspiration navigation intersidérale",
      ]}
      innovations={[
        "Tourbillon Orbital Aeternum 360°",
        "Système de résonance stellaire harmonique",
        "Bracelet en fibre d'astrolite biodynamique",
      ]}
      gradient="from-[#ff6b6b]/30 via-transparent to-[#7b61ff]/35"
      cta={{ href: "/contact", label: "Planifier une immersion Astrale" }}
    />
  );
}
