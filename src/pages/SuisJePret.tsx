import ContentPage from "@/components/ContentPage";

const SuisJePret = () => (
  <ContentPage
    slug="suis-je-pret-pour-le-mont-blanc"
    title="Comment savoir si l'on est prêt pour l'ascension du Mont Blanc ?"
    metaTitle="Suis-je prêt pour le Mont Blanc ? Test et critères de préparation"
    metaDescription="Évaluez votre niveau avant l'ascension du Mont Blanc : endurance, altitude, crampons, piolet, glacier, froid, mental, guide et capacité à renoncer."
    intro={
      <p>
        Être prêt pour le Mont Blanc ne signifie pas seulement être capable de marcher longtemps.
        Il faut réunir condition physique, expérience alpine, tolérance à l'altitude, capacité à
        gérer le froid, maîtrise du matériel, lucidité et humilité face aux conditions.
      </p>
    }
    table={{
      headers: ["Critère", "Question à se poser", "Niveau attendu"],
      rows: [
        ["Endurance", "Puis-je marcher 8 à 12 heures avec un sac ?", "Oui, sans finir épuisé."],
        ["Dénivelé", "Ai-je déjà réalisé de longues sorties avec plus de 1 000 m de dénivelé ?", "Oui, plusieurs fois."],
        ["Altitude", "Ai-je déjà dormi ou marché au-dessus de 3 000 m ?", "Fortement recommandé."],
        ["Crampons", "Ai-je déjà marché avec crampons sur neige dure ?", "Oui, ou apprentissage encadré."],
        ["Piolet", "Sais-je l'utiliser pour l'équilibre et la sécurité de base ?", "Minimum encadré."],
        ["Glacier", "Ai-je déjà progressé encordé sur glacier ?", "Recommandé."],
        ["Froid", "Suis-je capable de gérer mains, pieds, vent et pauses ?", "Indispensable."],
        ["Mental", "Puis-je accepter de faire demi-tour ?", "Obligatoire."],
        ["Autonomie", "Suis-je capable de lire une situation en haute montagne ?", "Oui si sans guide, non si encadré."],
      ],
    }}
    sections={[
      { title: "Le Mont Blanc n'est pas une randonnée", body: <p>C'est une course d'alpinisme avec progression sur glacier, exposition à l'altitude et exigences techniques.</p> },
      { title: "La condition physique ne suffit pas", body: <p>Un excellent niveau cardio ne compense pas le manque d'expérience alpine, l'absence d'acclimatation ou la mauvaise gestion du froid.</p> },
      { title: "Le test de l'altitude", body: <p>Une nuit en refuge à plus de 3 000 m ou une course autour de 4 000 m permet d'évaluer sa tolérance avant le Mont Blanc.</p> },
      { title: "La descente est souvent le vrai piège", body: <p>Fatigue, baisse de vigilance, conditions dégradées : la majorité des accidents interviennent à la descente.</p> },
      { title: "Le rôle du guide si l'on n'est pas autonome", body: <p>Un guide ne supprime pas le risque mais apporte expertise, lecture du terrain et capacité de décision.</p> },
      { title: "Savoir renoncer", body: <p>Renoncer est une compétence d'alpiniste. Le sommet attendra, vous non.</p> },
    ]}
    faqs={[
      { q: "Un bon coureur peut-il réussir le Mont Blanc ?", a: "Un bon niveau cardio aide, mais ne remplace pas l'expérience alpine, l'acclimatation, la gestion du froid et la progression sur glacier." },
      { q: "Faut-il avoir déjà fait de l'alpinisme ?", a: "Oui, ou être encadré dans une progression qui inclut préparation technique et acclimatation." },
      { q: "Comment savoir si je dois prendre un guide ?", a: "Si vous n'êtes pas autonome en terrain glaciaire, en encordement, en cramponnage et en décision météo, prenez un guide." },
    ]}
    internalLinks={[
      { to: "/preparer-le-mont-blanc", label: "Préparer l'ascension" },
      { to: "/avec-ou-sans-guide", label: "Avec ou sans guide ?" },
      { to: "/erreurs-frequentes-mont-blanc", label: "Erreurs fréquentes" },
    ]}
  />
);

export default SuisJePret;
