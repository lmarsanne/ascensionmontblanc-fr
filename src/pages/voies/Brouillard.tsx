import RoutePage from "@/components/RoutePage";

const Brouillard = () => (
  <RoutePage
    title="Versant du Brouillard — Grand alpinisme sur le Mont Blanc"
    description="Le secteur du Brouillard, versant italien du Mont Blanc, concentre des itinéraires sauvages, longs et engagés du grand alpinisme."
    canonical="https://www.ascensionmontblanc.fr/voies/brouillard"
    h1="Versant du Brouillard : grand alpinisme sur le Mont Blanc"
    breadcrumbLabel="Brouillard"
    intro="Le secteur du Brouillard appartient aux grands versants italiens du Mont Blanc."
    summary="Itinéraires sauvages, longs et engagés, liés à l'histoire du grand alpinisme."
    keyPoints={[
      "Versant : italien",
      "Secteur : Brouillard",
      "Caractère : sauvage, historique, exigeant",
      "Public : experts",
    ]}
    techSheet={[
      { label: "Versant", value: "Italien" },
      { label: "Secteur", value: "Brouillard" },
      { label: "Caractère", value: "Sauvage, historique, exigeant" },
      { label: "Public", value: "Experts" },
    ]}
    risks={["Engagement", "Orientation", "Météo", "Longueur"]}
    relatedRoutes={[{ label: "Innominata", to: "/voies/innominata" }]}
  />
);

export default Brouillard;
