import RoutePage from "@/components/RoutePage";

const Brenva = () => (
  <RoutePage
    title="Face de la Brenva — Grandes voies du Mont Blanc"
    description="Face de la Brenva : grandes voies historiques et engagées du versant italien du Mont Blanc, réservées aux alpinistes très expérimentés."
    canonical="https://www.ascensionmontblanc.fr/voies/brenva"
    h1="Face de la Brenva et grandes voies du Mont Blanc"
    breadcrumbLabel="Brenva"
    intro="La Brenva est l'un des grands versants historiques et engagés du Mont Blanc."
    summary="La Brenva, côté italien, regroupe des itinéraires majeurs de l'histoire de l'alpinisme. Ces voies ne sont pas des itinéraires de découverte mais des courses alpines sérieuses."
    keyPoints={[
      "Versant : italien",
      "Secteur : Brenva",
      "Caractère : historique, engagé, exposé",
      "Public : alpinistes très expérimentés",
    ]}
    techSheet={[
      { label: "Versant", value: "Italien" },
      { label: "Secteur", value: "Brenva" },
      { label: "Caractère", value: "Historique, engagé, exposé" },
      { label: "Public", value: "Alpinistes très expérimentés" },
    ]}
    risks={["Séracs", "Engagement", "Isolement", "Complexité"]}
    relatedRoutes={[
      { label: "Voie Major", to: "/voies/voie-major" },
      { label: "Peuterey", to: "/voies/peuterey" },
    ]}
  />
);

export default Brenva;
