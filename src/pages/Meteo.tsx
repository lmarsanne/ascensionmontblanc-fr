import ContentPage from "@/components/ContentPage";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";

const Meteo = () => (
  <>
    <ContentPage
      slug="meteo-mont-blanc"
      title="Comprendre la météo du Mont Blanc"
      metaTitle="Météo Mont Blanc : vent, froid, orages, isotherme et conditions"
      metaDescription="Comprendre la météo du Mont Blanc : vent en altitude, froid ressenti, isotherme 0 °C, regel, visibilité, orages, neige récente et bulletins montagne."
      intro={
        <p>
          La météo est l'un des facteurs les plus décisifs de l'ascension du Mont Blanc. Une belle
          journée en vallée ne garantit pas de bonnes conditions au sommet. Le vent, le froid
          ressenti, l'isotherme 0 °C, le regel nocturne, la neige récente et la visibilité doivent
          être analysés avant toute décision.
        </p>
      }
      sections={[
        {
          title: "1. Vent en altitude",
          body: <p>Au-dessus de 4 000 m, le vent peut ralentir fortement la progression, déséquilibrer une cordée et augmenter brutalement le froid ressenti. Un vent fort peut transformer une voie techniquement accessible en situation très exposée.</p>,
        },
        {
          title: "2. Isotherme 0 °C",
          body: <p>L'isotherme 0 °C indique l'altitude à laquelle la température passe sous zéro. Un isotherme élevé favorise le dégel, les chutes de pierres et la dégradation des ponts de neige.</p>,
        },
        {
          title: "3. Regel nocturne",
          body: <p>Un bon regel peut stabiliser temporairement la neige et certains passages. Un mauvais regel augmente les risques de neige molle, de ponts fragilisés et de chutes de pierres.</p>,
        },
        {
          title: "4. Orages",
          body: <p>Les orages sont particulièrement dangereux en altitude. La visibilité chute, le froid augmente, la foudre devient un risque et la progression peut devenir confuse.</p>,
        },
        {
          title: "5. Météo vallée vs météo sommet",
          body: <p>Chamonix, Saint-Gervais ou Courmayeur ne donnent pas l'état réel au sommet. Il faut consulter des bulletins montagne et croiser les sources.</p>,
        },
      ]}
      internalLinks={[
        { to: "/saisons-ascension-mont-blanc", label: "Saisons d'ascension" },
        { to: "/altitude-mont-blanc", label: "Altitude et MAM" },
        { to: "/securite", label: "Sécurité" },
      ]}
    />
    <ExternalResources
      resources={externalResources}
      title="Ressources météo et conditions"
      categoryFilter={["Météo & conditions", "Sécurité & prévention"]}
    />
  </>
);

export default Meteo;
