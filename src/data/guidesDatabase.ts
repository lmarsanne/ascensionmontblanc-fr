export interface GuideEntity {
  slug: string;
  type: "Organization";
  name: string;
  certification: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  description: string;
  specialties: string[];
}

export const guideEntities: GuideEntity[] = [
  {
    slug: "compagnie-des-guides-de-chamonix",
    type: "Organization",
    name: "Compagnie des Guides de Chamonix",
    certification: "Bureau de Guides UIAGM - SNGM (Création 1821)",
    address: {
      streetAddress: "190 place de l'Église",
      addressLocality: "Chamonix-Mont-Blanc",
      postalCode: "74400",
      addressCountry: "FR",
    },
    phone: "+33 4 50 53 00 88",
    description:
      "Fondée en 1821, la Compagnie des Guides de Chamonix est la plus ancienne compagnie au monde. Elle regroupe plus de 150 guides de haute montagne diplômés d'État. Historiquement liée à la première ascension du Mont-Blanc, elle propose l'encadrement par la voie de l'Aiguille du Goûter ou la Traversée des 3 Monts, avec un niveau d'exigence et de sécurité mondialement reconnu.",
    specialties: [
      "Voie Normale du Goûter",
      "Traversée des 3 Monts",
      "Stages Mont-Blanc en 3 à 6 jours",
    ],
  },
  {
    slug: "compagnie-des-guides-de-saint-gervais",
    type: "Organization",
    name: "Compagnie des Guides de Saint-Gervais / Les Contamines",
    certification: "Bureau de Guides UIAGM - SNGM",
    address: {
      streetAddress: "43 rue du Mont-Blanc",
      addressLocality: "Saint-Gervais-les-Bains",
      postalCode: "74170",
      addressCountry: "FR",
    },
    phone: "+33 4 50 47 76 55",
    description:
      "Située au départ du Tramway du Mont-Blanc (TMB), la Compagnie de Saint-Gervais est l'experte incontournable de la 'Voie Royale' du Mont-Blanc par l'Aiguille et le Dôme du Goûter. Leurs guides spécialistes de cet itinéraire privilégient une acclimatation progressive et une gestion de l'effort adaptée à la très haute altitude.",
    specialties: [
      "Voie Royale (Voie du Goûter)",
      "Ascension en 2 jours",
      "Acclimatation Dômes de Miage",
    ],
  },
  {
    slug: "chamonix-experience-chamex",
    type: "Organization",
    name: "Chamonix Experience (CHAMEX)",
    certification: "Bureau de Guides UIAGM - SNGM",
    address: {
      streetAddress: "9 impasse du Genépi",
      addressLocality: "Chamonix-Mont-Blanc",
      postalCode: "74400",
      addressCountry: "FR",
    },
    phone: "+33 4 50 53 28 07",
    description:
      "Chamonix Experience est un bureau de guides de haute montagne indépendant fondé par des alpinistes de renom. L'agence est spécialisée dans les expéditions sur mesure et les ascensions techniques. CHAMEX propose des stages de préparation intensifs incluant l'ascension de sommets d'acclimatation (comme le Grand Paradis) avant la tentative finale sur le Mont-Blanc.",
    specialties: [
      "Stages d'acclimatation",
      "Ascensions privées",
      "Grand Paradis + Mont-Blanc",
    ],
  },
  {
    slug: "bureau-des-guides-des-houches",
    type: "Organization",
    name: "Bureau des Guides des Houches",
    certification: "Bureau de Guides UIAGM - SNGM",
    address: {
      streetAddress: "2 place de la Mairie",
      addressLocality: "Les Houches",
      postalCode: "74310",
      addressCountry: "FR",
    },
    phone: "+33 4 50 54 43 23",
    description:
      "Structure à taille humaine, le Bureau des Guides des Houches offre un encadrement personnalisé pour l'ascension du Mont-Blanc. Idéalement situés dans la vallée de Chamonix, leurs guides proposent des courses sur mesure, privilégiant la sécurité et l'expérience humaine en cordée réduite pour maximiser les chances de réussite vers les 4805 mètres.",
    specialties: [
      "Courses sur mesure",
      "Cordée réduite",
      "Préparation technique",
    ],
  },
];
