import RoutePage from "@/components/RoutePage";

const TroisMonts = () => (
  <RoutePage
    title="Voie des 3 Monts - Traversée Mont Blanc Tacul Maudit"
    description="La voie des 3 Monts pour l'ascension du Mont-Blanc : traversée glaciaire d'altitude par le Tacul, le Maudit et le Mont-Blanc. Itinéraire, cotation et risques."
    canonical="https://www.ascensionmontblanc.fr/voies/3-monts"
    h1="La Voie des 3 Monts : La Traversée d'Altitude"
    intro="Aussi appelée la « Traversée du Mont-Blanc », la voie des 3 Monts est un itinéraire glaciaire d'une beauté exceptionnelle, mais exigeant techniquement et physiquement. Elle se déroule presque intégralement au-dessus de 4 000 mètres d'altitude."
    techSheet={[
      { label: "Point de départ", value: "Téléphérique de l'Aiguille du Midi (3 842 m)." },
      { label: "Dénivelé positif cumulé", value: "Environ 1 700 mètres." },
      { label: "Cotation de difficulté", value: "PD+ à AD- selon les conditions (notamment la rimaye du Maudit)." },
      { label: "Refuge", value: "Refuge des Cosmiques (3 613 m)." },
      { label: "Risques majeurs", value: "Chutes de séracs (Mont Blanc du Tacul) et risque d'avalanches." },
    ]}
    itineraryTitle="L'Itinéraire pas à pas"
    itinerary={
      <>
        <p>
          <strong>Jour 1 : L'acclimatation.</strong> Depuis l'Aiguille du Midi,
          la descente de l'arête effilée mène au glacier du Géant pour rejoindre
          rapidement le refuge des Cosmiques.
        </p>
        <p>
          <strong>Jour 2 : La grande traversée.</strong> Départ vers 1h du
          matin. L'ascension débute par la face nord du Mont Blanc du Tacul
          (4 248 m), un secteur exposé aux chutes de blocs de glace (séracs).
          Après l'épaule du Tacul, la cordée descend vers le col Maudit avant
          d'attaquer les pentes raides (jusqu'à 50 degrés) du Mont Maudit. Le
          franchissement de la rimaye du col du Mont Maudit est souvent le
          passage clé, nécessitant un relais sur piolet ou broche à glace.
          Enfin, depuis le col de la Brenva, l'itinéraire rejoint le Mur de la
          Côte pour terminer par des pentes soutenues jusqu'au sommet du
          Mont-Blanc.
        </p>
      </>
    }
  />
);

export default TroisMonts;
