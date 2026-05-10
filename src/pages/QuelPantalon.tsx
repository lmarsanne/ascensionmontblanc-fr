import ContentPage from "@/components/ContentPage";

const QuelPantalon = () => (
  <ContentPage
    slug="quel-pantalon-pour-le-mont-blanc"
    title="Quel pantalon pour le Mont Blanc ?"
    metaTitle="Quel pantalon d'alpinisme pour le Mont Blanc ?"
    metaDescription="Choisir un pantalon d'alpinisme pour le Mont Blanc : protection vent, déperlance, stretch, compatibilité crampons, durabilité et confort sur glacier."
    intro={
      <p>
        Le pantalon d'alpinisme est l'une des pièces clés du Mont Blanc. Il doit protéger du vent,
        rester déperlant, offrir une bonne liberté de mouvement, résister aux crampons et permettre
        une régulation thermique efficace pendant l'effort.
      </p>
    }
    table={{
      headers: ["Critère", "Recommandation", "Pourquoi"],
      rows: [
        ["Protection vent", "Tissu coupe-vent", "Le vent est un facteur de froid majeur en altitude"],
        ["Déperlance", "Traitement DWR efficace", "Neige, vent, brouillard humide"],
        ["Stretch", "Tissu mécaniquement extensible", "Liberté de mouvement en pente raide"],
        ["Renforts", "Bas de jambes renforcés", "Compatibilité crampons et résistance"],
        ["Aération", "Zips de ventilation utiles", "Régulation thermique pendant l'effort"],
      ],
    }}
    sections={[
      { title: "Pantalon softshell ou hardshell ?", body: <p>Un softshell technique respirant et déperlant convient à la plupart des conditions du Mont Blanc en saison. Un surpantalon hardshell peut compléter en cas d'intempéries marquées.</p> },
      { title: "Compatibilité crampons", body: <p>Les renforts en bas de jambes prolongent la durée de vie du pantalon face aux pointes des crampons.</p> },
      { title: "Cimalp et marques techniques", body: <p>Cimalp, marque française outdoor technique, propose des pantalons de montagne pensés pour l'effort, la protection et la durabilité, dans la même logique que les autres marques techniques de référence.</p> },
    ]}
    faqs={[
      { q: "Faut-il un pantalon hardshell ?", a: "Pas obligatoirement. Un softshell technique avec surpantalon imperméable couvre la majorité des conditions." },
      { q: "Un pantalon de randonnée suffit-il ?", a: "Non, il faut un pantalon d'alpinisme adapté au froid, au vent, à la neige et aux crampons." },
    ]}
    internalLinks={[
      { to: "/equipement", label: "Équipement complet" },
      { to: "/quelle-veste-pour-le-mont-blanc", label: "Quelle veste ?" },
      { to: "/quel-sac-pour-le-mont-blanc", label: "Quel sac ?" },
    ]}
  />
);

export default QuelPantalon;
