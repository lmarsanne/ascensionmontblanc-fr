import RoutePage from "@/components/RoutePage";

const Gouter = () => (
  <RoutePage
    title="Voie normale du Goûter — Ascension Mont Blanc"
    description="Voie normale du Goûter (Mont Blanc) : itinéraire détaillé Nid d'Aigle, Tête Rousse, Grand Couloir, refuge du Goûter, Dôme, abri Vallot, arête des Bosses."
    canonical="https://www.ascensionmontblanc.fr/voies/gouter"
    h1="Ascension du Mont Blanc par la voie normale du Goûter"
    breadcrumbLabel="Voie du Goûter"
    intro="La voie normale du Goûter est l'itinéraire le plus fréquenté pour gravir le Mont Blanc depuis le versant français. Elle reste néanmoins une véritable course d'alpinisme en haute montagne, exposée à plusieurs dangers objectifs."
    summary="La voie normale du Goûter est l'itinéraire le plus fréquenté pour gravir le Mont Blanc depuis le versant français. Elle passe généralement par le Nid d'Aigle, le refuge de Tête Rousse, le Grand Couloir, l'aiguille du Goûter, le refuge du Goûter, le Dôme du Goûter, l'abri Vallot et l'arête des Bosses jusqu'au sommet."
    keyPoints={[
      "Versant : France / Saint-Gervais",
      "Refuges : Tête Rousse, Goûter",
      "Passages clés : Grand Couloir, arête du Goûter, Dôme du Goûter, abri Vallot, arête des Bosses",
      "Caractère : voie classique mais exposée",
      "Public : première ascension encadrée, alpinistes préparés",
    ]}
    techSheet={[
      { label: "Point de départ", value: "Saint-Gervais / Le Fayet, puis Tramway du Mont-Blanc jusqu'au Nid d'Aigle selon ouverture et conditions" },
      { label: "Refuges", value: "Tête Rousse (3 167 m), Goûter (3 835 m)" },
      { label: "Passages clés", value: "Grand Couloir, arête du Goûter, Dôme du Goûter, abri Vallot, arête des Bosses" },
      { label: "Caractère", value: "Voie classique mais exposée" },
      { label: "Public", value: "Première ascension encadrée, alpinistes préparés" },
      { label: "Cotation indicative", value: "PD- (Peu Difficile)" },
    ]}
    itineraryTitle="Itinéraire pas à pas"
    itinerary={
      <>
        <p>
          <strong>Jour 1 : approche.</strong> Depuis le Nid d'Aigle, montée
          jusqu'au refuge de Tête Rousse, puis traversée du Grand Couloir et
          ascension de l'arête du Goûter jusqu'au refuge du Goûter (3 835 m).
        </p>
        <p>
          <strong>Jour 2 : sommet.</strong> Départ de nuit, progression sur le
          Dôme du Goûter, passage à l'abri Vallot puis arête des Bosses jusqu'au
          sommet à 4 805,59 m. La descente est longue et souvent sous-estimée.
        </p>
      </>
    }
    risks={[
      "Grand Couloir : passage exposé aux chutes de pierres",
      "Altitude : le sommet dépasse 4 800 m",
      "Météo : vent, froid et visibilité peuvent changer rapidement",
      "Fatigue : la descente est longue et souvent sous-estimée",
      "Fréquentation : la voie peut être très chargée en saison",
    ]}
    refuges={[
      "Refuge de Tête Rousse (3 167 m)",
      "Refuge du Goûter (3 835 m)",
      "Abri Vallot (4 362 m) — abri de secours uniquement",
    ]}
    bestFor="Alpinistes en bonne condition physique, acclimatés, encadrés par un guide pour une première ascension."
    avoidIf="Conditions météo instables, fortes chaleurs accélérant le risque de chutes de pierres, fréquentation excessive."
    alternatives={[
      { label: "Traversée des Trois Monts", to: "/voies/3-monts" },
      { label: "Voie italienne Gonella", to: "/voies/gonella" },
    ]}
    faq={[
      { q: "La voie du Goûter est-elle facile ?", a: "Non. Elle est classique, mais elle reste une course d'alpinisme en haute montagne." },
      { q: "Quel est le passage le plus connu de la voie du Goûter ?", a: "Le Grand Couloir est le passage le plus connu, notamment à cause du risque de chutes de pierres." },
      { q: "Faut-il un guide ?", a: "Pour une personne sans autonomie alpine réelle, l'encadrement par un guide de haute montagne est fortement recommandé." },
    ]}
    relatedPages={[
      { label: "Refuges", to: "/refuges" },
      { label: "Préparation", to: "/preparation" },
      { label: "Équipement", to: "/equipement" },
      { label: "Sécurité", to: "/securite" },
    ]}
  />
);

export default Gouter;
