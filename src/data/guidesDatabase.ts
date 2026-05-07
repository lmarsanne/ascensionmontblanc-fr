export type GuideStatus = "verified" | "to_verify" | "incomplete";
export type GuideType = "compagnie" | "bureau" | "agence" | "guide_independant";

export interface GuideEntity {
  slug: string;
  type: "Organization";
  guideType: GuideType;
  name: string;
  certification: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  city: string;
  department: string;
  phone: string;
  email?: string;
  website?: string;
  sourceUrl?: string;
  description: string;
  specialties: string[];
  routes: string[];
  status: GuideStatus;
  lastChecked?: string;
  languages?: string[];
  bookingType?: string;
  sourceType?: string;
  notes?: string;
}

export const guideEntities: GuideEntity[] = [
  {
    slug: "compagnie-des-guides-de-chamonix",
    type: "Organization",
    guideType: "compagnie",
    name: "Compagnie des Guides de Chamonix",
    certification: "Bureau de Guides UIAGM - SNGM (Création 1821)",
    address: {
      streetAddress: "190 place de l'Église",
      addressLocality: "Chamonix-Mont-Blanc",
      postalCode: "74400",
      addressCountry: "FR",
    },
    city: "Chamonix-Mont-Blanc",
    department: "Haute-Savoie",
    phone: "+33 4 50 53 00 88",
    description:
      "Fondée en 1821, la Compagnie des Guides de Chamonix est l'une des plus anciennes compagnies au monde. Elle regroupe des guides de haute montagne diplômés d'État et propose l'encadrement par la voie du Goûter ou la Traversée des 3 Monts.",
    specialties: ["Voie Normale du Goûter", "Traversée des 3 Monts", "Stages Mont Blanc"],
    routes: ["gouter", "3-monts"],
    status: "verified",
    lastChecked: "2025-05",
    sourceType: "site officiel",
  },
  {
    slug: "compagnie-des-guides-de-saint-gervais",
    type: "Organization",
    guideType: "compagnie",
    name: "Compagnie des Guides de Saint-Gervais / Les Contamines",
    certification: "Bureau de Guides UIAGM - SNGM",
    address: {
      streetAddress: "43 rue du Mont-Blanc",
      addressLocality: "Saint-Gervais-les-Bains",
      postalCode: "74170",
      addressCountry: "FR",
    },
    city: "Saint-Gervais-les-Bains",
    department: "Haute-Savoie",
    phone: "+33 4 50 47 76 55",
    description:
      "Située au départ du Tramway du Mont-Blanc, la Compagnie de Saint-Gervais est experte de la voie normale du Goûter, avec une approche d'acclimatation progressive.",
    specialties: ["Voie du Goûter", "Ascension en 2 jours", "Acclimatation Dômes de Miage"],
    routes: ["gouter"],
    status: "verified",
    lastChecked: "2025-05",
    sourceType: "site officiel",
  },
  {
    slug: "chamonix-experience-chamex",
    type: "Organization",
    guideType: "bureau",
    name: "Chamonix Experience (CHAMEX)",
    certification: "Bureau de Guides UIAGM - SNGM",
    address: {
      streetAddress: "9 impasse du Genépi",
      addressLocality: "Chamonix-Mont-Blanc",
      postalCode: "74400",
      addressCountry: "FR",
    },
    city: "Chamonix-Mont-Blanc",
    department: "Haute-Savoie",
    phone: "+33 4 50 53 28 07",
    description:
      "Bureau de guides indépendant spécialisé dans les expéditions sur mesure et les ascensions techniques, avec stages de préparation et acclimatation.",
    specialties: ["Stages d'acclimatation", "Ascensions privées", "Grand Paradis + Mont Blanc"],
    routes: ["gouter", "3-monts"],
    status: "verified",
    lastChecked: "2025-05",
  },
  {
    slug: "bureau-des-guides-des-houches",
    type: "Organization",
    guideType: "bureau",
    name: "Bureau des Guides des Houches",
    certification: "Bureau de Guides UIAGM - SNGM",
    address: {
      streetAddress: "2 place de la Mairie",
      addressLocality: "Les Houches",
      postalCode: "74310",
      addressCountry: "FR",
    },
    city: "Les Houches",
    department: "Haute-Savoie",
    phone: "+33 4 50 54 43 23",
    description:
      "Structure à taille humaine offrant un encadrement personnalisé pour l'ascension du Mont Blanc en cordée réduite.",
    specialties: ["Courses sur mesure", "Cordée réduite", "Préparation technique"],
    routes: ["gouter", "3-monts"],
    status: "to_verify",
  },
];
