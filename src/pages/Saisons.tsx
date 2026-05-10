import ContentPage from "@/components/ContentPage";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";

const Saisons = () => (
  <>
    <ContentPage
      slug="saisons-ascension-mont-blanc"
      title="Quelle saison choisir pour l'ascension du Mont Blanc ?"
      metaTitle="Quelle saison choisir pour l'ascension du Mont Blanc ?"
      metaDescription="Saisons du Mont Blanc : printemps, été, fin d'été, automne, hiver. Conditions, fréquentation, neige, météo, voies et risques."
      intro={
        <p>
          La saison influence fortement les conditions du Mont Blanc. Neige, regel, chaleur,
          crevasses, chutes de pierres, fréquentation, refuges et accès changent selon la période.
        </p>
      }
      table={{
        headers: ["Saison", "Ambiance", "Voies concernées", "Risques dominants", "Remarque"],
        rows: [
          ["Printemps", "Neige, ski-alpinisme", "Grands Mulets, parfois voies glaciaires", "Avalanches, crevasses, froid, vent", "Période souvent associée au ski de randonnée."],
          ["Début été", "Conditions mixtes", "Goûter, Trois Monts, Gonella", "Neige, météo instable, ponts de neige", "Souvent recherché pour un meilleur enneigement."],
          ["Plein été", "Forte fréquentation", "Goûter, Trois Monts, Gonella", "Chaleur, chutes de pierres, orages", "Réservations et horaires deviennent critiques."],
          ["Fin été", "Conditions plus sèches", "Variable selon année", "Crevasses ouvertes, chutes de pierres", "Certaines voies peuvent devenir délicates."],
          ["Automne", "Moins fréquenté", "Rare, selon conditions", "Froid, journées courtes, refuges fermés", "Réservé aux cordées autonomes."],
          ["Hiver", "Haute montagne hivernale", "Très spécifique", "Froid intense, vent, avalanche, isolement", "Domaine d'alpinistes expérimentés."],
        ],
      }}
      internalLinks={[
        { to: "/meteo-mont-blanc", label: "Météo Mont Blanc" },
        { to: "/voies", label: "Toutes les voies" },
        { to: "/preparer-le-mont-blanc", label: "Préparer l'ascension" },
      ]}
    />
    <ExternalResources
      resources={externalResources}
      title="Ressources saisons et conditions"
      categoryFilter={["Sécurité & prévention", "Refuges", "Météo & conditions"]}
    />
  </>
);

export default Saisons;
