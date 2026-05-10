import ContentPage from "@/components/ContentPage";

const QuelSac = () => (
  <ContentPage
    slug="quel-sac-pour-le-mont-blanc"
    title="Quel sac pour le Mont Blanc ?"
    metaTitle="Quel sac à dos pour l'ascension du Mont Blanc ?"
    metaDescription="Choisir son sac d'alpinisme pour le Mont Blanc : volume, portage, fixations crampons et piolet, poids, confort sur glacier et en altitude."
    intro={
      <p>
        Le sac à dos est un élément clé du confort et de la sécurité sur le Mont Blanc. Il doit
        rester léger, structuré, capable d'accueillir crampons, piolet, casque et couches
        techniques sans entraver la progression.
      </p>
    }
    table={{
      headers: ["Critère", "Recommandation", "Pourquoi"],
      rows: [
        ["Volume", "30 à 40 L", "Suffisant pour matériel technique et couches sans surcharger"],
        ["Poids", "Le plus léger possible à structure équivalente", "Économie d'énergie en altitude"],
        ["Portage", "Bretelles structurées + ceinture ventrale", "Stabilité sur terrain technique"],
        ["Fixations", "Porte-piolet, sangles crampons, attache casque", "Accès rapide au matériel"],
        ["Tissu", "Résistant à l'abrasion", "Durabilité face à la roche et la glace"],
      ],
    }}
    sections={[
      { title: "Volume idéal", body: <p>Un volume de 30 à 40 litres couvre la plupart des configurations Mont Blanc, avec une réserve pour les couches au sommet.</p> },
      { title: "Confort de portage", body: <p>Un dos structuré et une ceinture ventrale efficace soulagent les épaules, ce qui devient critique en altitude.</p> },
      { title: "Accès au matériel", body: <p>Pouvoir sortir crampons, piolet, casque ou veste sans tout vider est indispensable lors des transitions.</p> },
    ]}
    faqs={[
      { q: "Un sac de randonnée suffit-il ?", a: "Non, il faut un sac d'alpinisme avec fixations adaptées au matériel technique." },
      { q: "Quel volume pour la voie du Goûter ?", a: "30 à 40 L suffisent généralement, refuge gardé inclus." },
    ]}
    internalLinks={[
      { to: "/equipement", label: "Équipement complet" },
      { to: "/quel-pantalon-pour-le-mont-blanc", label: "Quel pantalon ?" },
      { to: "/quelle-veste-pour-le-mont-blanc", label: "Quelle veste ?" },
    ]}
  />
);

export default QuelSac;
