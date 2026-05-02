import RoutePage from "@/components/RoutePage";

const Gouter = () => (
  <RoutePage
    title="La Voie du Goûter - Ascension Mont Blanc : Itinéraire et Difficultés"
    description="Découvrez la voie normale du Goûter pour l'ascension du Mont-Blanc : itinéraire détaillé, fiche technique, dénivelé, refuges et difficultés du couloir du Goûter."
    canonical="https://www.ascensionmontblanc.fr/voies/gouter"
    h1="La Voie Normale du Goûter : L'Itinéraire Classique du Mont-Blanc"
    intro="La voie du Goûter est l'itinéraire le plus fréquenté pour atteindre le sommet du Mont-Blanc. Bien qu'elle soit considérée comme la voie « normale », elle n'est pas exempte de dangers objectifs, notamment la traversée du fameux couloir du Goûter. Une préparation minutieuse est vitale."
    techSheet={[
      { label: "Point de départ", value: "Le Nid d'Aigle (2 372 m), accessible par le Tramway du Mont-Blanc." },
      { label: "Dénivelé positif", value: "2 435 mètres." },
      { label: "Cotation de difficulté", value: "PD- (Peu Difficile inférieur)." },
      { label: "Refuges", value: "Refuge de Tête Rousse (3 167 m), Refuge du Goûter (3 835 m)." },
      { label: "Risque majeur", value: "Chutes de pierres dans le couloir du Goûter." },
    ]}
    itineraryTitle="L'Itinéraire pas à pas"
    itinerary={
      <>
        <p>
          <strong>Jour 1 : L'approche.</strong> Depuis le Nid d'Aigle, la
          montée s'effectue sur un sentier rocailleux jusqu'au refuge de Tête
          Rousse. Ensuite, commence la partie technique : l'ascension de
          l'arête du Goûter. Le passage clé est la traversée du grand couloir,
          très exposé aux chutes de pierres. La montée jusqu'au refuge du
          Goûter (3 835 m) nécessite souvent d'utiliser les mains et des câbles
          en place.
        </p>
        <p>
          <strong>Jour 2 : Le Sommet.</strong> Le départ se fait souvent vers
          2h ou 3h du matin. La progression sur le glacier mène au Dôme du
          Goûter (4 304 m). S'ensuit une redescente vers le col des Dômes avant
          d'attaquer la longue pente vers le refuge Vallot (4 362 m), un abri
          de secours uniquement. L'ascension finale se déroule sur l'arête des
          Bosses, une crête de neige très effilée et vertigineuse nécessitant
          une concentration totale jusqu'au sommet à 4 805 m.
        </p>
      </>
    }
  />
);

export default Gouter;
