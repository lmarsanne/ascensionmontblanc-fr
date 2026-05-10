import ContentPage from "@/components/ContentPage";

const ErreursFrequentes = () => (
  <ContentPage
    slug="erreurs-frequentes-mont-blanc"
    title="Les erreurs les plus fréquentes lors de l'ascension du Mont Blanc"
    metaTitle="Erreurs fréquentes au Mont Blanc : altitude, météo, équipement, guide"
    metaDescription="Les erreurs à éviter avant l'ascension du Mont Blanc : sous-estimer l'altitude, mal s'équiper, ignorer la météo, négliger l'acclimatation ou la descente."
    intro={
      <p>
        La plupart des échecs ou situations dangereuses au Mont Blanc ne viennent pas d'un seul
        facteur, mais d'une accumulation : départ trop rapide, mauvais équipement, altitude mal
        tolérée, météo mal lue, fatigue, pression du sommet ou manque d'expérience.
      </p>
    }
    table={{
      headers: ["Erreur", "Pourquoi c'est dangereux", "Comment limiter le risque"],
      rows: [
        ["Croire que c'est une randonnée", "Sous-estimation totale du terrain et de l'altitude", "Aborder le Mont Blanc comme une course d'alpinisme"],
        ["Partir sans acclimatation", "Mal aigu des montagnes, baisse de performance", "Faire des nuits et courses préparatoires en altitude"],
        ["Sous-estimer la descente", "Fatigue, perte de vigilance, accidents", "Garder de la marge énergétique et mentale"],
        ["Marcher trop vite au départ", "Épuisement précoce, hypoxie", "Adopter un rythme régulier et respirable"],
        ["Tester du matériel neuf", "Ampoules, inconfort, défaillance", "Tout valider sur des sorties préparatoires"],
        ["Négliger les gants", "Engelures aux extrémités", "Deux paires : fine et chaude"],
        ["Confondre météo vallée et sommet", "Surprise du vent et du froid", "Lire bulletins montagne et vent altitude"],
        ["Ignorer séracs et crevasses", "Chutes, ensevelissement", "Encordement, horaires adaptés, lecture du glacier"],
        ["Traverser le Grand Couloir au mauvais horaire", "Chutes de pierres", "Passer tôt, écouter les gardiens"],
        ["Suivre une cordée sans comprendre", "Erreur d'itinéraire collective", "Connaître la voie soi-même ou être avec un guide"],
        ["Continuer par pression du sommet", "Décisions biaisées", "Accepter le demi-tour comme une réussite"],
        ["Mal réserver les refuges", "Logistique cassée, ascension annulée", "Réserver très en amont via les canaux officiels"],
        ["Confondre guide et accompagnateur", "Encadrement inadapté à la haute montagne", "Vérifier le diplôme UIAGM"],
        ["Compter sur le secours", "Fausse sécurité", "La prévention reste la première sécurité"],
        ["Mal gérer hydratation et nutrition", "Hypoglycémie, fatigue, MAM", "Boire et manger régulièrement, dès le départ"],
      ],
    }}
    internalLinks={[
      { to: "/suis-je-pret-pour-le-mont-blanc", label: "Suis-je prêt ?" },
      { to: "/securite", label: "Sécurité" },
      { to: "/altitude-mont-blanc", label: "Altitude et MAM" },
    ]}
  />
);

export default ErreursFrequentes;
