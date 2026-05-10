import ContentPage from "@/components/ContentPage";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";

const PreparerLeMontBlanc = () => (
  <>
    <ContentPage
      slug="preparer-le-mont-blanc"
      title="Préparer l'ascension du Mont Blanc"
      metaTitle="Préparer le Mont Blanc : guide complet avant l'ascension"
      metaDescription="Préparation complète pour l'ascension du Mont Blanc : forme physique, acclimatation, équipement, refuges, guide, météo, accès, sécurité et erreurs à éviter."
      intro={
        <p>
          Préparer l'ascension du Mont Blanc demande bien plus qu'une bonne condition physique. Une
          ascension réussie repose sur un ensemble de facteurs : acclimatation, expérience alpine,
          gestion du froid, lecture des conditions, équipement adapté, choix de la voie, préparation
          mentale, nutrition, sommeil et capacité à prendre les bonnes décisions en altitude.
        </p>
      }
      keyPoints={[
        "Le Mont Blanc est une course d'alpinisme, pas une randonnée.",
        "L'altitude dépasse 4 800 m.",
        "La plupart des itinéraires imposent une progression sur glacier.",
        "Les refuges doivent être réservés très en amont.",
        "Les conditions peuvent rendre une voie impraticable.",
        "Le sommet n'est jamais garanti.",
        "Savoir renoncer fait partie de la sécurité.",
      ]}
      sections={[
        {
          title: "1. Choisir sa voie",
          body: (
            <p>
              La première décision consiste à choisir un itinéraire adapté à son niveau. La voie
              normale du Goûter est la plus fréquentée, mais elle expose au Grand Couloir et à une
              forte fréquentation. La traversée des Trois Monts est plus glaciaire et plus
              technique. Gonella offre une ambiance italienne plus sauvage mais demande de
              l'endurance. Grands Mulets est souvent associé au ski de randonnée de printemps.
              Miage-Bionnassay, Brenva, Peuterey, Innominata et Brouillard relèvent de l'alpinisme
              confirmé ou expert. Voir <a href="/voies" className="text-primary-glow hover:underline">toutes les voies</a>.
            </p>
          ),
        },
        {
          title: "2. Préparer son corps",
          body: (
            <p>
              L'objectif n'est pas seulement d'être sportif. Il faut être capable de marcher
              longtemps, de porter un sac, d'avancer lentement en altitude, de rester lucide malgré
              le froid, la fatigue et le manque d'oxygène. La préparation doit inclure endurance,
              dénivelé, renforcement musculaire, gainage, sorties longues et randonnées avec
              portage. Voir <a href="/preparation" className="text-primary-glow hover:underline">la préparation détaillée</a>.
            </p>
          ),
        },
        {
          title: "3. Acclimatation",
          body: (
            <p>
              L'acclimatation conditionne fortement la réussite. Monter trop vite augmente le risque
              de mal aigu des montagnes. Les stages proposés par les compagnies de guides incluent
              souvent une phase d'acclimatation avant la tentative sommet. Une nuit ou une course
              préalable en altitude permet de mieux évaluer la réaction du corps. Voir{" "}
              <a href="/altitude-mont-blanc" className="text-primary-glow hover:underline">altitude et MAM</a>.
            </p>
          ),
        },
        {
          title: "4. Réserver les refuges",
          body: (
            <p>
              La voie normale impose une logistique rigoureuse autour des refuges de Tête Rousse et
              du Goûter. La FFCAM centralise les réservations de la voie normale. Le refuge des
              Cosmiques est stratégique pour les Trois Monts. Gonella sert de point d'appui majeur
              pour la voie italienne. Les informations d'ouverture, de réservation et de
              gardiennage doivent toujours être vérifiées auprès des refuges.
            </p>
          ),
        },
        {
          title: "5. Choisir un guide",
          body: (
            <p>
              Un guide de haute montagne apporte une expertise technique, une lecture des
              conditions, une gestion de la cordée et une capacité de décision. Les personnes qui
              ne sont pas autonomes en terrain glaciaire doivent considérer sérieusement
              l'encadrement par un guide. Le SNGM propose un annuaire public des guides,
              compagnies et bureaux. Voir <a href="/guides" className="text-primary-glow hover:underline">l'annuaire</a>.
            </p>
          ),
        },
        {
          title: "6. Surveiller météo et conditions",
          body: (
            <p>
              La météo vallée ne suffit pas. Pour le Mont Blanc, il faut regarder le vent en
              altitude, l'isotherme 0 °C, le regel nocturne, les orages, la visibilité, la neige
              récente et l'évolution des conditions glaciaires. La Chamoniarde, l'OHM Chamonix, les
              refuges et les compagnies de guides sont des ressources essentielles. Voir{" "}
              <a href="/meteo-mont-blanc" className="text-primary-glow hover:underline">la météo Mont Blanc</a>.
            </p>
          ),
        },
        {
          title: "7. Équipement",
          body: (
            <p>
              Le matériel doit être testé avant l'ascension. Il doit protéger du froid, du vent, de
              l'humidité, du rayonnement et permettre une progression efficace. Les vêtements
              techniques, les chaussures cramponnables, les crampons, le piolet, le casque, le
              baudrier, les lunettes catégorie 4, la lampe frontale et les gants adaptés font
              partie des éléments clés. Voir <a href="/equipement" className="text-primary-glow hover:underline">l'équipement</a>.
            </p>
          ),
        },
        {
          title: "8. Assurance et secours",
          body: (
            <p>
              Avant une ascension, il faut vérifier sa couverture d'assurance pour les activités
              d'alpinisme, les secours en montagne et les éventuels frais liés aux opérations en
              haute montagne. Le secours ne doit jamais être considéré comme une solution de
              confort : la meilleure sécurité reste la prévention. Voir{" "}
              <a href="/secours-assurance-mont-blanc" className="text-primary-glow hover:underline">secours et assurance</a>.
            </p>
          ),
        },
      ]}
      internalLinks={[
        { to: "/suis-je-pret-pour-le-mont-blanc", label: "Suis-je prêt pour le Mont Blanc ?" },
        { to: "/erreurs-frequentes-mont-blanc", label: "Erreurs fréquentes" },
        { to: "/saisons-ascension-mont-blanc", label: "Quelle saison choisir ?" },
        { to: "/avec-ou-sans-guide", label: "Avec ou sans guide ?" },
      ]}
      faqs={[
        {
          q: "Combien de temps faut-il pour préparer le Mont Blanc ?",
          a: "Une préparation sérieuse se construit souvent sur plusieurs mois, surtout si l'on manque d'expérience alpine.",
        },
        {
          q: "Peut-on faire le Mont Blanc sans guide ?",
          a: "Oui pour des alpinistes réellement autonomes en terrain glaciaire, mais ce n'est pas recommandé pour les personnes sans expérience d'alpinisme.",
        },
        {
          q: "Quelle est l'erreur la plus fréquente ?",
          a: "Sous-estimer le Mont Blanc en le percevant comme une randonnée longue plutôt que comme une course de haute montagne.",
        },
      ]}
    />
    <ExternalResources
      resources={externalResources}
      title="Ressources pour préparer l'ascension"
      intro="Une sélection de ressources officielles et reconnues pour structurer votre préparation."
    />
  </>
);

export default PreparerLeMontBlanc;
