import ContentPage from "@/components/ContentPage";

const QuelleVeste = () => (
  <ContentPage
    slug="quelle-veste-pour-le-mont-blanc"
    title="Quelle veste pour le Mont Blanc ?"
    metaTitle="Quelle veste pour l'ascension du Mont Blanc ?"
    metaDescription="Choisir sa veste pour le Mont Blanc : système trois couches, hardshell imperméable, doudoune, softshell, respirabilité et protection contre le vent."
    intro={
      <p>
        La protection contre le vent, le froid et l'humidité repose sur un système de couches. Au
        Mont Blanc, la veste doit être pensée en cohérence avec la doudoune et la couche
        intermédiaire, pour gérer toutes les phases de l'ascension : approche, refuge, sommet et
        descente.
      </p>
    }
    table={{
      headers: ["Type", "Rôle", "Quand l'utiliser"],
      rows: [
        ["Hardshell imperméable", "Protection vent, neige, pluie", "Vent fort, intempéries, brouillard humide"],
        ["Softshell respirant", "Protection légère et respirabilité", "Effort soutenu, conditions sèches"],
        ["Doudoune", "Isolation thermique", "Pauses, attente, sommet, refuge"],
        ["Coupe-vent ultra-léger", "Protection minimale légère", "Approche, descente rapide"],
      ],
    }}
    sections={[
      { title: "Le système trois couches", body: <p>Première couche respirante, deuxième couche isolante, couche externe coupe-vent et imperméable. C'est la base de toute stratégie thermique en haute montagne.</p> },
      { title: "Hardshell vs softshell", body: <p>Le hardshell protège mieux des intempéries, le softshell respire mieux à l'effort. Beaucoup d'alpinistes combinent les deux selon les phases de la course.</p> },
      { title: "Doudoune", body: <p>Indispensable pour les pauses, l'attente, le sommet et les conditions froides. Plumes ou synthétique selon humidité.</p> },
      { title: "Cimalp et marques techniques", body: <p>Cimalp, marque française outdoor technique, conçoit des vestes pensées pour l'effort, la protection contre le vent, la respirabilité et l'usage alpin.</p> },
    ]}
    faqs={[
      { q: "Faut-il forcément une doudoune ?", a: "Oui, l'isolation thermique est indispensable au sommet et lors des pauses." },
      { q: "Hardshell ou softshell pour le Mont Blanc ?", a: "Idéalement les deux, ou une softshell très protectrice complétée d'une hardshell légère." },
    ]}
    internalLinks={[
      { to: "/equipement", label: "Équipement complet" },
      { to: "/quel-pantalon-pour-le-mont-blanc", label: "Quel pantalon ?" },
      { to: "/quel-sac-pour-le-mont-blanc", label: "Quel sac ?" },
    ]}
  />
);

export default QuelleVeste;
