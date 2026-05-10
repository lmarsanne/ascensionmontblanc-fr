import ContentPage from "@/components/ContentPage";

const GouterVsGonella = () => (
  <ContentPage
    slug="gouter-vs-gonella"
    title="Goûter ou Gonella : voie française ou voie italienne ?"
    metaTitle="Goûter ou Gonella : quelle voie pour le Mont Blanc ?"
    metaDescription="Comparaison entre la voie normale du Goûter (France) et la voie italienne Gonella par les Aiguilles Grises : ambiance, fréquentation, difficulté, refuges."
    intro={
      <p>
        Le Goûter est la voie normale française, la plus parcourue du Mont Blanc. Gonella est la
        voie normale italienne, plus longue, plus sauvage et beaucoup moins fréquentée.
      </p>
    }
    table={{
      headers: ["Critère", "Goûter (France)", "Gonella (Italie)"],
      rows: [
        ["Point de départ", "Nid d'Aigle, Saint-Gervais", "Val Veny, Courmayeur"],
        ["Refuge clé", "Tête Rousse / Goûter", "Refuge Gonella (≈ 3 071 m)"],
        ["Fréquentation", "Très élevée", "Faible"],
        ["Caractère", "Classique, exposé pierres", "Long, glaciaire, sauvage"],
        ["Risque dominant", "Grand Couloir", "Crevasses, longueur, isolement"],
        ["Engagement", "Modéré pour la voie normale", "Plus engagé, ambiance solitaire"],
        ["Profil", "Première ascension encadrée", "Alpinistes endurants et autonomes"],
      ],
    }}
    sections={[
      { title: "Pourquoi choisir le Goûter ?", body: <p>Logistique éprouvée, présence de guides nombreux, accès rapide depuis la vallée de Chamonix.</p> },
      { title: "Pourquoi choisir Gonella ?", body: <p>Échapper à la foule, vivre une ambiance italienne plus sauvage, allonger l'aventure sur deux à trois jours.</p> },
    ]}
    internalLinks={[
      { to: "/voies/gouter", label: "Voie du Goûter" },
      { to: "/voies/gonella", label: "Voie Gonella" },
    ]}
  />
);

export default GouterVsGonella;
