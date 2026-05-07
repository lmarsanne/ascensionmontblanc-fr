import RoutePage from "@/components/RoutePage";

const GrandsMulets = () => (
  <RoutePage
    title="Voie des Grands Mulets — Ascension Mont Blanc"
    description="Voie historique des Grands Mulets : itinéraire glaciaire du versant nord du Mont Blanc, souvent emprunté en ski de randonnée au printemps."
    canonical="https://www.ascensionmontblanc.fr/voies/grands-mulets"
    h1="Ascension du Mont Blanc par les Grands Mulets"
    breadcrumbLabel="Grands Mulets"
    intro="La voie des Grands Mulets est un itinéraire historique du Mont Blanc, souvent associé au ski de randonnée au printemps. Elle remonte le versant nord par le secteur du glacier des Bossons et le refuge des Grands Mulets."
    summary="Voie historique et glaciaire du versant nord du Mont Blanc, souvent associée au ski-alpinisme de printemps. C'est une voie qui demande une excellente lecture du terrain."
    keyPoints={[
      "Versant : nord / Chamonix",
      "Refuge : Grands Mulets",
      "Caractère : historique, glaciaire, ski-alpinisme",
      "Public : alpinistes ou skieurs-alpinistes expérimentés",
    ]}
    techSheet={[
      { label: "Versant", value: "Nord / Chamonix" },
      { label: "Refuge", value: "Grands Mulets" },
      { label: "Caractère", value: "Historique, glaciaire, ski-alpinisme" },
      { label: "Public", value: "Alpinistes ou skieurs-alpinistes expérimentés" },
    ]}
    risks={["Crevasses", "Séracs", "Itinéraire variable selon conditions"]}
    refuges={["Refuge des Grands Mulets"]}
    relatedRoutes={[
      { label: "Voie normale du Goûter", to: "/voies/gouter" },
      { label: "Trois Monts", to: "/voies/3-monts" },
    ]}
  />
);

export default GrandsMulets;
