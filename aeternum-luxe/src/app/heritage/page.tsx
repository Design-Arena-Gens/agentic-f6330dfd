import { CollectionTemplate } from "@/components/CollectionTemplate";

export const metadata = {
  title: "Collection Heritage | Aeternum Haute Horlogerie",
};

export default function HeritagePage() {
  return (
    <CollectionTemplate
      name="Heritage"
      subtitle="Patrimoine vivant"
      description="Des complications classiques magnifiées par le savoir-faire ancestral d'Aeternum. Chaque pièce rend hommage aux ateliers fondateurs de la maison."
      narrative={[
        "La collection Heritage marie la tradition des cadrans émaillés grand feu à la précision contemporaine. Les ponts sculptés à la main révèlent un mouvement à double barillet assurant une réserve stable.",
        "Chaque montre est livrée avec un carnet manuscrit retraçant les étapes de fabrication par nos maîtres horlogers, scellé par un médaillon en rhodium poli.",
      ]}
      highlights={[
        "Boîtier 41 mm or blanc satiné, lunette à cannelures astrales",
        "Calendrier perpétuel avec phase lunaire tridimensionnelle en météorite",
        "Mouvement manufacture calibre AE-1776, certification Poinçon de Genève",
      ]}
      innovations={[
        "Système d'absorption de choc gravitationnel",
        "Échappement en silicium polychromatique",
        "Ponts ajourés guillochés main par astrographe",
      ]}
      gradient="from-[#7b61ff]/40 via-transparent to-black/60"
      cta={{ href: "/contact", label: "Réserver une présentation privée" }}
    />
  );
}
