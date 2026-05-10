import ContentPage from "@/components/ContentPage";

const AvecOuSansGuide = () => (
  <ContentPage
    slug="avec-ou-sans-guide"
    title="Mont Blanc avec ou sans guide ?"
    metaTitle="Mont Blanc avec ou sans guide : comment décider ?"
    metaDescription="Faut-il un guide de haute montagne pour gravir le Mont Blanc ? Critères d'autonomie, expérience alpine, encadrement UIAGM et niveau réel exigé."
    intro={
      <p>
        Le Mont Blanc peut se gravir sans guide à condition d'être un alpiniste réellement autonome.
        Pour la majorité des candidats, l'encadrement par un guide de haute montagne UIAGM reste
        l'option la plus sûre.
      </p>
    }
    table={{
      headers: ["Critère", "Avec guide", "Sans guide"],
      rows: [
        ["Sécurité", "Renforcée par expertise", "Repose entièrement sur la cordée"],
        ["Logistique", "Souvent prise en charge", "Entièrement à organiser"],
        ["Coût", "Plus élevé", "Réduit"],
        ["Décision", "Partagée avec un professionnel", "100 % à la charge de la cordée"],
        ["Profil", "Sans expérience alpine suffisante", "Alpinistes confirmés et autonomes"],
      ],
    }}
    sections={[
      { title: "Quand le guide est indispensable", body: <p>Si vous n'êtes pas autonome en encordement, en cramponnage, en lecture de glacier et en décision météo, l'encadrement par un guide UIAGM s'impose.</p> },
      { title: "Quand l'autonomie est possible", body: <p>Pour des alpinistes confirmés, expérimentés sur glacier, capables d'évaluer les conditions et d'assumer toutes les décisions.</p> },
      { title: "Le rôle du guide", body: <p>Il apporte expertise technique, lecture du terrain, gestion de la cordée et capacité de décision, sans pour autant supprimer le risque.</p> },
    ]}
    faqs={[
      { q: "Est-il obligatoire de prendre un guide ?", a: "Non, mais c'est fortement recommandé sans expérience d'alpinisme glaciaire." },
      { q: "Comment vérifier qu'un guide est qualifié ?", a: "Vérifier la certification UIAGM / SNGM ou consulter l'annuaire officiel." },
    ]}
    internalLinks={[
      { to: "/guides", label: "Annuaire des guides" },
      { to: "/suis-je-pret-pour-le-mont-blanc", label: "Suis-je prêt ?" },
    ]}
  />
);

export default AvecOuSansGuide;
