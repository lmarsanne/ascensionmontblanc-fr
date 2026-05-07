import RoutePage from "@/components/RoutePage";

const TroisMonts = () => (
  <RoutePage
    title="Traversée des Trois Monts — Ascension Mont Blanc"
    description="Traversée des Trois Monts : itinéraire glaciaire depuis l'aiguille du Midi vers le sommet du Mont Blanc via le Tacul, le Maudit et le col de la Brenva."
    canonical="https://www.ascensionmontblanc.fr/voies/3-monts"
    h1="Ascension du Mont Blanc par la traversée des Trois Monts"
    breadcrumbLabel="Traversée des Trois Monts"
    intro="La traversée des Trois Monts est une voie glaciaire d'altitude qui combine esthétique alpine et engagement technique."
    summary="La traversée des Trois Monts relie généralement l'aiguille du Midi au sommet du Mont Blanc en passant par le Mont Blanc du Tacul, le Mont Maudit et le col de la Brenva. C'est une voie glaciaire, esthétique et plus technique que la voie normale du Goûter."
    keyPoints={[
      "Versant : France / Chamonix",
      "Refuge : Cosmiques",
      "Passages clés : Mont Blanc du Tacul, Mont Maudit, col de la Brenva, mur de la Côte",
      "Caractère : glaciaire, esthétique, technique",
      "Public : alpinistes initiés, cordées encadrées",
    ]}
    techSheet={[
      { label: "Point de départ", value: "Aiguille du Midi (3 842 m)" },
      { label: "Refuge", value: "Cosmiques (3 613 m)" },
      { label: "Passages clés", value: "Mont Blanc du Tacul, Mont Maudit, col de la Brenva, mur de la Côte" },
      { label: "Caractère", value: "Glaciaire, esthétique, technique" },
      { label: "Public", value: "Alpinistes initiés, cordées encadrées" },
      { label: "Cotation indicative", value: "PD+ à AD- selon conditions" },
    ]}
    risks={[
      "Séracs sous le Tacul et le Maudit",
      "Crevasses",
      "Pentes raides selon conditions",
      "Exposition aux changements météo",
      "Difficulté accrue en cas de neige dure ou instable",
    ]}
    refuges={["Refuge des Cosmiques (3 613 m)"]}
    bestFor="Alpinistes initiés, à l'aise sur glacier et en pente raide, encadrés par un guide."
    avoidIf="Instabilité des séracs signalée, neige insuffisante ou trop dure, conditions météo dégradées."
    alternatives={[
      { label: "Voie normale du Goûter", to: "/voies/gouter" },
      { label: "Voie italienne Gonella", to: "/voies/gonella" },
    ]}
    faq={[
      { q: "Les Trois Monts sont-ils plus difficiles que le Goûter ?", a: "Oui, généralement. L'itinéraire est plus glaciaire, plus technique et plus exposé aux séracs." },
      { q: "Pourquoi choisir cette voie ?", a: "Pour son ambiance haute montagne, son départ depuis l'aiguille du Midi et sa beauté glaciaire." },
    ]}
    relatedPages={[
      { label: "Refuges", to: "/refuges" },
      { label: "Sécurité", to: "/securite" },
      { label: "Équipement", to: "/equipement" },
    ]}
  />
);

export default TroisMonts;
