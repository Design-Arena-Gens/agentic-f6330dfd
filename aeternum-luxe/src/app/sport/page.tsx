import { CollectionTemplate } from "@/components/CollectionTemplate";

export const metadata = {
  title: "Collection Sport | Aeternum Haute Horlogerie",
};

export default function SportPage() {
  return (
    <CollectionTemplate
      name="Sport"
      subtitle="Chronométrie extrême"
      description="Pensée pour les explorateurs qui défient les éléments, la collection Sport conjugue résistance absolue et complications de haute précision."
      narrative={[
        "Usinés dans un titane grade 5 microbillé, les boîtiers Sport résistent à des accélérations supérieures à 5G. Le cadran multi-couches offre une lisibilité optimale même en vol suborbital.",
        "Le calibre AE-2020 intègre un rotor en tungstène creusé laser, permettant un remontage ultra-rapide et silencieux.",
      ]}
      highlights={[
        "Chronographe flyback avec colonne en céramique irisée",
        "Certification COSC renforcée par un contrôle thermique cryogénique",
        "Étanchéité 200 m grâce au système de couronne télescopique magnétique",
      ]}
      innovations={[
        "Composite luminescent Aeternum LumaSkin™",
        "Barillet flottant anti-magnétique 2.0",
        "Bracelet MorphFlex pour adaptation biométrique",
      ]}
      gradient="from-[#6bffce]/35 via-transparent to-black/60"
      cta={{ href: "/personnalisation", label: "Configurer votre instrument" }}
    />
  );
}
