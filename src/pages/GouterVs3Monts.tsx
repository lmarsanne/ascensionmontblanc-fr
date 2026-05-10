import ContentPage from "@/components/ContentPage";

const GouterVs3Monts = () => (
  <ContentPage
    slug="gouter-vs-3-monts"
    title="Goûter ou Trois Monts : quelle voie choisir pour le Mont Blanc ?"
    metaTitle="Goûter ou Trois Monts : quelle voie choisir pour le Mont Blanc ?"
    metaDescription="Comparaison entre la voie normale du Goûter et la traversée des Trois Monts : difficulté, risques, refuges, ambiance, niveau et profil adapté."
    intro={
      <p>
        La voie du Goûter et la traversée des Trois Monts sont deux itinéraires majeurs du Mont
        Blanc, mais leur logique est très différente. Le Goûter est la voie normale la plus
        fréquentée. Les Trois Monts offrent une ambiance plus glaciaire et plus technique.
      </p>
    }
    table={{
      headers: ["Critère", "Goûter", "Trois Monts"],
      rows: [
        ["Point de départ", "Nid d'Aigle / Tête Rousse", "Aiguille du Midi / Cosmiques"],
        ["Refuge", "Tête Rousse / Goûter", "Cosmiques"],
        ["Caractère", "Classique, fréquenté", "Glaciaire, esthétique"],
        ["Difficulté", "Classique mais exposée", "Plus technique"],
        ["Risque dominant", "Chutes de pierres au Grand Couloir", "Séracs, crevasses, pentes raides"],
        ["Profil", "Première ascension encadrée", "Alpinistes plus expérimentés"],
        ["Logistique", "Réservation FFCAM rigoureuse", "Réservation Cosmiques + remontée Midi"],
        ["Acclimatation", "Conseillée", "Indispensable (arrivée brutale à 3 800 m)"],
      ],
    }}
    sections={[
      { title: "Pour qui le Goûter ?", body: <p>Souvent recommandée pour une première ascension encadrée, à condition d'accepter la fréquentation et l'exposition au Grand Couloir.</p> },
      { title: "Pour qui les Trois Monts ?", body: <p>Pour des alpinistes à l'aise sur glacier et en pente raide, recherchant une ambiance plus engagée et plus esthétique.</p> },
      { title: "Risques spécifiques", body: <p>Goûter : chutes de pierres au Grand Couloir, surtout à la descente. Trois Monts : séracs du Tacul et du Maudit, crevasses, pentes raides.</p> },
    ]}
    faqs={[
      { q: "Laquelle est la plus facile ?", a: "Le Goûter est techniquement plus accessible mais reste une course d'alpinisme exposée." },
      { q: "Laquelle est la plus belle ?", a: "Les Trois Monts offrent une ambiance plus glaciaire et un cadre souvent jugé plus esthétique." },
    ]}
    internalLinks={[
      { to: "/voies/gouter", label: "Voie du Goûter" },
      { to: "/voies/3-monts", label: "Traversée des Trois Monts" },
      { to: "/refuge-gouter-vs-tete-rousse", label: "Refuge du Goûter ou Tête Rousse ?" },
    ]}
  />
);

export default GouterVs3Monts;
