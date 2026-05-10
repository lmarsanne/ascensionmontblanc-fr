import ContentPage from "@/components/ContentPage";

const RefugeGouterVsTeteRousse = () => (
  <ContentPage
    slug="refuge-gouter-vs-tete-rousse"
    title="Refuge du Goûter ou Tête Rousse ?"
    metaTitle="Refuge du Goûter ou Tête Rousse : quel choix sur la voie normale ?"
    metaDescription="Comparaison entre le refuge de Tête Rousse et le refuge du Goûter sur la voie normale du Mont Blanc : altitude, fréquentation, stratégie d'ascension."
    intro={
      <p>
        Sur la voie normale, le choix du refuge — Tête Rousse ou Goûter — influence directement
        l'horaire de départ, la traversée du Grand Couloir et la gestion de la fatigue. La FFCAM
        centralise les réservations.
      </p>
    }
    table={{
      headers: ["Critère", "Tête Rousse", "Goûter"],
      rows: [
        ["Altitude", "≈ 3 167 m", "≈ 3 835 m"],
        ["Position", "Avant le Grand Couloir", "Au-dessus du Grand Couloir"],
        ["Acclimatation", "Plus douce", "Plus brutale"],
        ["Traversée du Grand Couloir", "À l'aller et au retour", "Avant le refuge, dans la nuit"],
        ["Sommeil", "Meilleur (altitude moindre)", "Plus difficile"],
        ["Stratégie", "Départ très matinal vers le sommet", "Plus court depuis le refuge"],
      ],
    }}
    sections={[
      { title: "Choisir Tête Rousse", body: <p>Privilégié pour mieux dormir et mieux récupérer, au prix d'une journée sommet plus longue et d'une double traversée du Grand Couloir.</p> },
      { title: "Choisir le Goûter", body: <p>Position plus haute donc journée sommet plus courte, mais sommeil plus difficile et acclimatation plus exigeante.</p> },
      { title: "Disponibilité", body: <p>La réservation est très tendue en saison. Toujours vérifier directement auprès de la FFCAM.</p> },
    ]}
    internalLinks={[
      { to: "/refuges", label: "Refuges du Mont Blanc" },
      { to: "/voies/gouter", label: "Voie du Goûter" },
    ]}
  />
);

export default RefugeGouterVsTeteRousse;
