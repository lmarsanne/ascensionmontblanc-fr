import ContentPage from "@/components/ContentPage";

const Secours = () => (
  <ContentPage
    slug="secours-assurance-mont-blanc"
    title="Secours, assurance et responsabilité au Mont Blanc"
    metaTitle="Secours et assurance au Mont Blanc : ce qu'il faut vérifier"
    metaDescription="Secours en montagne, assurance alpinisme, responsabilité individuelle et préparation avant une ascension du Mont Blanc."
    intro={
      <p>
        Avant une ascension du Mont Blanc, il faut vérifier sa couverture d'assurance, comprendre
        les limites de sa responsabilité et ne jamais considérer le secours comme une solution de
        confort. La haute montagne impose de prévenir les situations plutôt que de compter sur une
        intervention.
      </p>
    }
    sections={[
      { title: "Secours en montagne", body: <p>Les secours en montagne sont coordonnés par des unités spécialisées. Leur intervention dépend de la météo, de l'altitude, de la visibilité et des moyens disponibles.</p> },
      { title: "PGHM", body: <p>Le Peloton de Gendarmerie de Haute Montagne est l'une des références institutionnelles pour le secours en montagne en France.</p> },
      { title: "Assurance alpinisme", body: <p>Une assurance adaptée doit explicitement couvrir l'alpinisme, le secours en haute montagne et le rapatriement.</p> },
      { title: "Frais potentiels", body: <p>Selon les juridictions et les situations, certains frais peuvent rester à la charge des personnes secourues. Vérifier sa couverture avant le départ.</p> },
      { title: "Responsabilité individuelle", body: <p>Chaque personne en cordée engage sa propre responsabilité. La décision de partir ou de renoncer revient toujours à la cordée.</p> },
      { title: "Prévention", body: <p>La meilleure sécurité reste une préparation rigoureuse, des conditions favorables et une cordée lucide.</p> },
      { title: "Informations à laisser à un proche", body: <p>Itinéraire prévu, refuge, horaires approximatifs, identité des participants, consigne en cas d'absence prolongée de nouvelles.</p> },
      { title: "Pourquoi le guide ne supprime pas le risque", body: <p>Le guide réduit le risque par son expertise mais ne le supprime pas. La haute montagne reste un terrain engagé.</p> },
    ]}
    keyPoints={[
      "Vérifier l'assurance alpinisme avant chaque ascension.",
      "Le secours n'est pas une solution de confort.",
      "La prévention reste la première sécurité.",
      "Renoncer est parfois la seule décision juste.",
    ]}
    internalLinks={[
      { to: "/securite", label: "Sécurité haute montagne" },
      { to: "/preparer-le-mont-blanc", label: "Préparer l'ascension" },
    ]}
  >
    <section className="container-prose pb-12">
      <p className="text-base md:text-lg leading-relaxed text-foreground/85 italic">
        Les secours en montagne interviennent dans des situations parfois complexes et dangereuses.
        Leur existence ne doit jamais justifier une prise de risque excessive. La décision la plus
        sûre reste souvent de reporter, renoncer ou changer d'objectif.
      </p>
    </section>
  </ContentPage>
);

export default Secours;
