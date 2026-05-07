import RoutePage from "@/components/RoutePage";

const VoieMajor = () => (
  <RoutePage
    title="Voie Major — Itinéraire historique de la Brenva"
    description="La voie Major, itinéraire historique associé à la face de la Brenva sur le Mont Blanc, réservée aux cordées très expérimentées."
    canonical="https://www.ascensionmontblanc.fr/voies/voie-major"
    h1="Voie Major : itinéraire historique de la Brenva"
    breadcrumbLabel="Voie Major"
    intro="La voie Major est l'un des itinéraires historiques associés à la face de la Brenva."
    summary="Son caractère dépend fortement des conditions et elle reste réservée aux cordées très expérimentées."
    keyPoints={[
      "Versant : italien",
      "Secteur : Brenva",
      "Caractère : historique, exposé, technique",
      "Public : experts",
    ]}
    techSheet={[
      { label: "Versant", value: "Italien" },
      { label: "Secteur", value: "Brenva" },
      { label: "Caractère", value: "Historique, exposé, technique" },
      { label: "Public", value: "Experts" },
    ]}
    risks={["Séracs", "Conditions", "Engagement"]}
    relatedRoutes={[{ label: "Brenva", to: "/voies/brenva" }]}
  />
);

export default VoieMajor;
