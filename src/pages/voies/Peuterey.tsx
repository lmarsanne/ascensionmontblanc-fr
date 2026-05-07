import RoutePage from "@/components/RoutePage";

const Peuterey = () => (
  <RoutePage
    title="Arête de Peuterey — Grande course du Mont Blanc"
    description="Arête de Peuterey : grande course d'arête majeure du massif du Mont Blanc, réservée aux alpinistes experts."
    canonical="https://www.ascensionmontblanc.fr/voies/peuterey"
    h1="Arête de Peuterey : grande course majeure vers le Mont Blanc"
    breadcrumbLabel="Peuterey"
    intro="L'arête de Peuterey est l'une des grandes courses d'alpinisme du massif du Mont Blanc."
    summary="Longue, engagée et complexe, elle appartient au domaine du grand alpinisme classique et ne concerne pas les candidats à une première ascension."
    keyPoints={[
      "Versant : italien",
      "Secteur : Peuterey",
      "Caractère : grande course d'arête",
      "Public : experts",
    ]}
    techSheet={[
      { label: "Versant", value: "Italien" },
      { label: "Secteur", value: "Peuterey" },
      { label: "Caractère", value: "Grande course d'arête" },
      { label: "Public", value: "Experts" },
    ]}
    risks={["Longueur", "Engagement", "Météo", "Retraite difficile"]}
    relatedRoutes={[{ label: "Innominata", to: "/voies/innominata" }]}
  />
);

export default Peuterey;
