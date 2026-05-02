import RoutePage from "@/components/RoutePage";

const Gonella = () => (
  <RoutePage
    title="La Voie Italienne (Gonella) - Ascension Mont Blanc côté Sud"
    description="La voie italienne du Mont-Blanc par le refuge Gonella : itinéraire normal côté sud, sauvage et engagé. Fiche technique, dénivelé et conditions glaciaires."
    canonical="https://www.ascensionmontblanc.fr/voies/gonella"
    h1="La Voie Italienne : L'Ascension Sauvage par le Refuge Gonella"
    intro="C'est l'itinéraire normal côté italien. Beaucoup plus long et sauvage que les voies françaises, il offre une expérience de haute solitude et des paysages grandioses sur le versant sud du massif. En raison du réchauffement climatique, cette voie doit être entreprise tôt dans la saison (juin/juillet)."
    techSheet={[
      { label: "Point de départ", value: "Val Veny, La Visaille (1 650 m)." },
      { label: "Dénivelé positif", value: "3 150 mètres au total (1 400 m J1, 1 750 m J2)." },
      { label: "Cotation de difficulté", value: "PD+." },
      { label: "Refuge", value: "Refuge Francesco Gonella (3 071 m)." },
      { label: "Caractéristique", value: "Retrait glaciaire important rendant le glacier du Dôme très crevassé en fin d'été." },
    ]}
    itineraryTitle="L'Itinéraire pas à pas"
    itinerary={
      <>
        <p>
          <strong>Jour 1 : L'interminable moraine.</strong> L'approche est
          longue. Depuis le Val Veny, le cheminement remonte le glacier de
          Miage, recouvert de cailloux (moraine). La montée finale vers le
          refuge Gonella, rénové et accroché à la paroi, s'effectue par un
          sentier escarpé équipé de chaînes et d'échelles.
        </p>
        <p>
          <strong>Jour 2 : Le versant sud.</strong> Le départ de nuit se fait
          sur le glacier du Dôme, souvent tortueux et complexe à naviguer à
          cause de ses énormes crevasses. L'objectif est d'atteindre le col des
          Aiguilles Grises, puis le col de Bionnassay (3 888 m). La cordée
          rejoint alors l'arête de Bionnassay jusqu'au Dôme du Goûter, où la
          voie italienne fusionne avec la voie normale française pour affronter
          l'arête des Bosses jusqu'au sommet.
        </p>
      </>
    }
  />
);

export default Gonella;
