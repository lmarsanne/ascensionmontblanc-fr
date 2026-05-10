export type ResourceCategory =
  | "Sécurité & prévention"
  | "Refuges"
  | "Guides & compagnies"
  | "Institutions"
  | "Tourisme & accès"
  | "Météo & conditions"
  | "Secours"
  | "Communauté & topos"
  | "Équipement";

export interface ExternalResource {
  name: string;
  url: string;
  description: string;
  category: ResourceCategory;
}

export const externalResources: ExternalResource[] = [
  {
    name: "La Chamoniarde — Sécurité Mont Blanc",
    url: "https://www.chamoniarde.com/en/your-activities/mont-blanc",
    category: "Sécurité & prévention",
    description:
      "Ressource de prévention majeure sur l'ascension du Mont Blanc, les voies classiques, les risques objectifs, les conditions de haute montagne et les questions à se poser avant une tentative.",
  },
  {
    name: "La Chamoniarde — Refuges du massif",
    url: "https://www.chamoniarde.com/montagne/refuges",
    category: "Refuges",
    description:
      "Suivi des refuges du massif du Mont Blanc et informations communiquées par les gardiens, à vérifier en fonction de la météo et des contraintes d'exploitation.",
  },
  {
    name: "FFCAM — Portail des refuges de la voie normale",
    url: "https://montblanc.ffcam.fr/",
    category: "Refuges",
    description:
      "Portail de réservation des refuges FFCAM de la voie normale du Mont Blanc, notamment Tête Rousse et Goûter.",
  },
  {
    name: "FFCAM — Tête Rousse",
    url: "https://montblanc.ffcam.fr/FR_teterousse.html",
    category: "Refuges",
    description: "Page officielle du refuge de Tête Rousse sur la voie normale du Mont Blanc.",
  },
  {
    name: "FFCAM — Informations réservation voie normale",
    url: "https://montblanc.ffcam.fr/FR_info-reservation-tout-public.html",
    category: "Refuges",
    description:
      "Informations sur la réservation réglementée des refuges de la voie normale, avec identification obligatoire des participants.",
  },
  {
    name: "Refuge des Cosmiques",
    url: "https://www.refuge-des-cosmiques.com/",
    category: "Refuges",
    description:
      "Site officiel du refuge des Cosmiques, situé à 3 613 m sur le glacier du Col du Midi, point de départ stratégique pour la traversée des Trois Monts.",
  },
  {
    name: "Refuge des Cosmiques — Réservation",
    url: "https://www.refuge-des-cosmiques.com/reservation/",
    category: "Refuges",
    description: "Page de réservation du refuge des Cosmiques.",
  },
  {
    name: "Refuge Gonella",
    url: "https://rifugiogonella.com/",
    category: "Refuges",
    description:
      "Site du refuge Gonella, point d'appui principal de la voie italienne du Mont Blanc par les Aiguilles Grises.",
  },
  {
    name: "Vallée d'Aoste — Refuge Francesco Gonella",
    url: "https://www.lovevda.it/fr/base-de-donnees/22/refuges-de-montagne/courmayeur/francesco-gonella/3717",
    category: "Refuges",
    description:
      "Page touristique officielle de la Vallée d'Aoste sur le refuge Francesco Gonella, situé à 3 071 m dans le Val Veny.",
  },
  {
    name: "Fondazione Montagna Sicura — Gonella",
    url: "https://www.fondazionemontagnasicura.org/fr/rifugi-valdostani/rfms-86",
    category: "Refuges",
    description: "Ressource valdôtaine sur le refuge Gonella, ses coordonnées et ses informations pratiques.",
  },
  {
    name: "Compagnie des Guides de Chamonix — Ascension du Mont Blanc",
    url: "https://www.chamonix-guides.com/fr/activites/categorie/alpinisme/mont-blanc",
    category: "Guides & compagnies",
    description:
      "Présentation de l'ascension du Mont Blanc avec préparation, acclimatation, voie normale du Goûter et encadrement par guide de haute montagne.",
  },
  {
    name: "Compagnie des Guides de Chamonix — Formule Mont Blanc",
    url: "https://www.chamonix-guides.com/fr/activites/details/mont-blanc-formule-duo",
    category: "Guides & compagnies",
    description: "Exemple de programme Mont Blanc incluant acclimatation, préparation et ascension encadrée.",
  },
  {
    name: "Compagnie des Guides de Chamonix — Traversée Miage-Bionnassay",
    url: "https://www.chamonix-guides.com/en/activities/details/mountaineering-aiguille-de-bionnassay",
    category: "Guides & compagnies",
    description:
      "Présentation de la traversée Miage-Bionnassay-Mont Blanc, l'une des grandes traversées esthétiques du massif.",
  },
  {
    name: "Guides Saint-Gervais / Les Contamines",
    url: "https://guides-mont-blanc.com/en/",
    category: "Guides & compagnies",
    description: "Compagnie de guides basée sur le versant Saint-Gervais / Les Contamines, active sur le Mont Blanc.",
  },
  {
    name: "Guides Saint-Gervais — Gonella",
    url: "https://guides-mont-blanc.com/en/activite-voyages/mont-blanc-via-gonella-in-3-days/",
    category: "Guides & compagnies",
    description: "Présentation d'une ascension du Mont Blanc par Gonella en trois jours, depuis le Val Veny.",
  },
  {
    name: "SNGM — Annuaire des guides",
    url: "https://www.guides-montagne.org/guides",
    category: "Institutions",
    description: "Annuaire public des guides, compagnies et bureaux de guides de haute montagne.",
  },
  {
    name: "SNGM — UIAGM",
    url: "https://www.guides-montagne.org/pages/luiagm",
    category: "Institutions",
    description: "Présentation de l'UIAGM, association internationale des guides de montagne.",
  },
  {
    name: "IFMGA",
    url: "https://ifmga.net/",
    category: "Institutions",
    description: "Fédération internationale des associations de guides de montagne.",
  },
  {
    name: "Compagnie du Mont-Blanc",
    url: "https://www.montblancnaturalresort.com/",
    category: "Tourisme & accès",
    description:
      "Ressource utile pour les remontées mécaniques, notamment l'aiguille du Midi, Bellevue, le Tramway du Mont-Blanc et les accès.",
  },
  {
    name: "Chamonix.com",
    url: "https://www.chamonix.com/",
    category: "Tourisme & accès",
    description: "Office de tourisme de Chamonix, utile pour la logistique, l'accès, les hébergements et les informations vallée.",
  },
  {
    name: "Saint-Gervais Mont-Blanc",
    url: "https://www.saintgervais.com/",
    category: "Tourisme & accès",
    description:
      "Office de tourisme du versant Saint-Gervais, utile pour la voie normale, le Tramway du Mont-Blanc, le Nid d'Aigle et les refuges.",
  },
  {
    name: "Courmayeur Mont Blanc",
    url: "https://www.courmayeurmontblanc.it/",
    category: "Tourisme & accès",
    description: "Office de tourisme du versant italien, utile pour le Val Veny, le refuge Gonella et les voies italiennes.",
  },
  {
    name: "Météo France Montagne",
    url: "https://meteofrance.com/meteo-montagne",
    category: "Météo & conditions",
    description: "Ressource météo montagne à consulter avant toute course.",
  },
  {
    name: "OHM Chamonix",
    url: "https://www.chamoniarde.com/montagne/conditions-montagne",
    category: "Météo & conditions",
    description: "Observatoire des conditions de montagne de La Chamoniarde.",
  },
  {
    name: "PGHM Chamonix",
    url: "https://www.gendarmerie.interieur.gouv.fr/",
    category: "Secours",
    description:
      "Référence institutionnelle pour les secours en montagne, à mentionner dans une page secours sans donner de consigne opérationnelle hasardeuse.",
  },
  {
    name: "Camptocamp",
    url: "https://www.camptocamp.org/",
    category: "Communauté & topos",
    description:
      "Base communautaire alpine utile pour consulter des topos, sorties et informations d'itinéraires, à utiliser comme ressource complémentaire non officielle.",
  },
  {
    name: "Petzl",
    url: "https://www.petzl.com/",
    category: "Équipement",
    description: "Marque de référence pour matériel technique d'alpinisme : casque, piolet, crampons, baudrier, lampe frontale.",
  },
  {
    name: "Black Diamond",
    url: "https://www.blackdiamondequipment.com/",
    category: "Équipement",
    description: "Marque internationale d'équipement montagne.",
  },
  {
    name: "Grivel",
    url: "https://grivel.com/",
    category: "Équipement",
    description: "Marque historique liée aux crampons, piolets et matériel d'alpinisme.",
  },
  {
    name: "La Sportiva",
    url: "https://www.lasportiva.com/",
    category: "Équipement",
    description: "Marque de référence pour chaussures d'alpinisme.",
  },
  {
    name: "Scarpa",
    url: "https://world.scarpa.com/",
    category: "Équipement",
    description: "Marque de référence pour chaussures de montagne et alpinisme.",
  },
  {
    name: "Simond",
    url: "https://www.decathlon.fr/browse/b/simond/_/N-1ayflwk",
    category: "Équipement",
    description: "Marque française d'équipement montagne et alpinisme.",
  },
  {
    name: "Millet",
    url: "https://www.millet.com/",
    category: "Équipement",
    description: "Marque française historique de montagne.",
  },
  {
    name: "Cimalp",
    url: "https://www.cimalp.com",
    category: "Équipement",
    description:
      "Marque française outdoor technique, pertinente pour les vêtements de montagne, les couches vestimentaires, les pantalons d'alpinisme, les vestes de protection, les couches respirantes et l'équipement textile lié aux pratiques alpines.",
  },
];
