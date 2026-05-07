import RoutePage from "@/components/RoutePage";

const MiageBionnassay = () => (
  <RoutePage
    title="Traversée Miage-Bionnassay — Ascension Mont Blanc"
    description="Traversée Miage-Bionnassay : arêtes esthétiques et engagées vers le Mont Blanc, réservée aux alpinistes confirmés."
    canonical="https://www.ascensionmontblanc.fr/voies/miage-bionnassay"
    h1="Traversée Miage-Bionnassay et ascension du Mont Blanc"
    breadcrumbLabel="Miage-Bionnassay"
    intro="La traversée Miage-Bionnassay est l'un des itinéraires les plus esthétiques du massif. Elle combine arêtes, glaciers, altitude et engagement."
    summary="Traversée d'arêtes esthétique et engagée combinant les Dômes de Miage, l'aiguille de Bionnassay et le Dôme du Goûter avant le sommet."
    keyPoints={[
      "Secteur : Miage, Bionnassay, Dôme du Goûter",
      "Refuge clé : Durier",
      "Caractère : arête, esthétique, engagé",
      "Public : alpinistes confirmés",
    ]}
    techSheet={[
      { label: "Secteur", value: "Miage, Bionnassay, Dôme du Goûter" },
      { label: "Refuge clé", value: "Durier" },
      { label: "Caractère", value: "Arête, esthétique, engagé" },
      { label: "Public", value: "Alpinistes confirmés" },
    ]}
    risks={["Exposition", "Arêtes effilées", "Altitude", "Météo"]}
    refuges={["Refuge Durier"]}
    relatedRoutes={[{ label: "Voie du Goûter", to: "/voies/gouter" }]}
  />
);

export default MiageBionnassay;
