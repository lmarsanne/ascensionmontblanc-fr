import RoutePage from "@/components/RoutePage";

const Innominata = () => (
  <RoutePage
    title="Innominata — Grande voie italienne du Mont Blanc"
    description="L'Innominata, grande voie sauvage et engagée du versant italien du Mont Blanc, secteur Brouillard / Frêney."
    canonical="https://www.ascensionmontblanc.fr/voies/innominata"
    h1="Innominata : grande voie italienne du Mont Blanc"
    breadcrumbLabel="Innominata"
    intro="L'Innominata fait partie des grands itinéraires sauvages du versant italien du Mont Blanc."
    summary="Grand alpinisme italien : isolement, engagement, lecture du terrain et autonomie indispensables."
    keyPoints={[
      "Versant : italien",
      "Secteur : Brouillard / Frêney",
      "Caractère : sauvage, engagé, historique",
      "Public : alpinistes experts",
    ]}
    techSheet={[
      { label: "Versant", value: "Italien" },
      { label: "Secteur", value: "Brouillard / Frêney" },
      { label: "Caractère", value: "Sauvage, engagé, historique" },
      { label: "Public", value: "Alpinistes experts" },
    ]}
    risks={["Isolement", "Complexité", "Météo", "Engagement"]}
    relatedRoutes={[
      { label: "Brouillard", to: "/voies/brouillard" },
      { label: "Peuterey", to: "/voies/peuterey" },
    ]}
  />
);

export default Innominata;
