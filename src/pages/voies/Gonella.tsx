import RoutePage from "@/components/RoutePage";

const Gonella = () => (
  <RoutePage
    title="Voie italienne Gonella — Ascension Mont Blanc"
    description="Voie italienne du Mont Blanc par le refuge Gonella et les Aiguilles Grises : itinéraire long, sauvage et engagé depuis le Val Veny."
    canonical="https://www.ascensionmontblanc.fr/voies/gonella"
    h1="Ascension du Mont Blanc par Gonella et les Aiguilles Grises"
    breadcrumbLabel="Voie Gonella"
    intro="La voie italienne par Gonella et les Aiguilles Grises est l'itinéraire normal côté italien : long, sauvage et beaucoup moins fréquenté que les voies françaises."
    summary="La voie italienne par Gonella et les Aiguilles Grises est une ascension longue, sauvage et moins fréquentée du Mont Blanc. Elle part du Val Veny, rejoint le refuge Gonella, puis progresse vers le glacier du Dôme, le col des Aiguilles Grises, le col de Bionnassay et l'arête des Bosses."
    keyPoints={[
      "Versant : Italie / Val Veny / Courmayeur",
      "Refuge : Gonella",
      "Passages clés : glacier de Miage, glacier du Dôme, cols des Aiguilles Grises et de Bionnassay, arête des Bosses",
      "Caractère : long, sauvage, moins fréquenté",
      "Public : alpinistes endurants et acclimatés",
    ]}
    techSheet={[
      { label: "Versant", value: "Italien" },
      { label: "Point de départ", value: "Val Veny / Courmayeur" },
      { label: "Refuge", value: "Gonella (3 071 m)" },
      { label: "Passages clés", value: "Glacier de Miage, refuge Gonella, glacier du Dôme, col des Aiguilles Grises, col de Bionnassay, arête des Bosses" },
      { label: "Caractère", value: "Long, sauvage, moins fréquenté" },
      { label: "Public", value: "Alpinistes endurants et acclimatés" },
    ]}
    risks={[
      "Longueur de la course",
      "Glacier du Dôme très crevassé en fin de saison",
      "Orientation parfois délicate",
      "Météo et altitude",
    ]}
    refuges={["Refuge Francesco Gonella (3 071 m)"]}
    bestFor="Alpinistes endurants, autonomes, recherchant une ambiance sauvage sur le versant italien."
    avoidIf="Conditions glaciaires dégradées en fin d'été, manque d'expérience sur glacier complexe."
    alternatives={[
      { label: "Voie normale du Goûter", to: "/voies/gouter" },
      { label: "Traversée des Trois Monts", to: "/voies/3-monts" },
    ]}
    faq={[
      { q: "La voie Gonella est-elle plus sauvage que le Goûter ?", a: "Oui. Elle est généralement moins fréquentée et offre une ambiance plus sauvage côté italien." },
      { q: "Est-ce une voie pour débutant ?", a: "Non. Sa longueur, son isolement relatif et son caractère glaciaire demandent une vraie préparation." },
    ]}
    relatedPages={[
      { label: "Refuges", to: "/refuges" },
      { label: "Préparation", to: "/preparation" },
    ]}
  />
);

export default Gonella;
