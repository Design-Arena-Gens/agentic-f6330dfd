import { CollectionTemplate } from "@/components/CollectionTemplate";

export const metadata = {
  title: "Collection Nocturne | Aeternum Haute Horlogerie",
};

export default function NocturnePage() {
  return (
    <CollectionTemplate
      name="Nocturne"
      subtitle="Sertissage stellaire"
      description="Les pièces les plus exclusives de la maison, façonnées pour illuminer les soirées cosmiques. Sertissage manuel de diamants noirs et complications musicales célestes."
      narrative={[
        "Nocturne capture la lueur des nébuleuses grâce à un pavage de diamants noirs calibrés. Les aiguilles en or rose satiné contrastent avec un cadran velours d'améthyste.",
        "La répétition minutes cosmique diffuse une sonorité à double timbre inspirée des vibrations stellaires, accordée par notre maître sonoriste.",
      ]}
      highlights={[
        "Mécanisme répétition minutes à timbres creusés dans un alliage lunaire",
        "Boîtier platine 40 mm avec lunette sertie constellation",
        "Indicateur de réserve de marche par arc de lumière",
      ]}
      innovations={[
        "Système de diffusion acoustique HelioSound™",
        "Sertissage gravitationnel invisible",
        "Bracelet satin galactique à mémoire de forme",
      ]}
      gradient="from-[#7b61ff]/25 via-[#000000]/60 to-[#05010d]"
      cta={{ href: "/contact", label: "Commander une pièce Nocturne" }}
    />
  );
}
