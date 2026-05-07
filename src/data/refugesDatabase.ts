export interface Refuge {
  name: string;
  role: string;
  voie: string;
  location: string;
  voieSlug?: string;
}

export const refuges: Refuge[] = [
  {
    name: "Refuge du Goûter",
    role: "Refuge d'altitude clé pour la voie normale du Goûter, point de bivouac avant la nuit du sommet.",
    voie: "Voie normale du Goûter",
    voieSlug: "gouter",
    location: "Versant France, 3 835 m environ",
  },
  {
    name: "Refuge de Tête Rousse",
    role: "Étape intermédiaire sur la voie normale, avant la traversée du Grand Couloir.",
    voie: "Voie normale du Goûter",
    voieSlug: "gouter",
    location: "Versant France, 3 167 m environ",
  },
  {
    name: "Refuge des Cosmiques",
    role: "Refuge stratégique pour la traversée des Trois Monts, accessible depuis l'aiguille du Midi.",
    voie: "Trois Monts",
    voieSlug: "3-monts",
    location: "Massif du Mont Blanc, 3 613 m environ",
  },
  {
    name: "Refuge des Grands Mulets",
    role: "Refuge historique pour la voie des Grands Mulets, fréquenté en ski de printemps.",
    voie: "Grands Mulets",
    voieSlug: "grands-mulets",
    location: "Versant nord du Mont Blanc",
  },
  {
    name: "Refuge Gonella",
    role: "Refuge italien clé pour la voie Gonella et les Aiguilles Grises.",
    voie: "Gonella",
    voieSlug: "gonella",
    location: "Versant italien, 3 071 m environ",
  },
  {
    name: "Refuge Durier",
    role: "Refuge utile pour la traversée Miage-Bionnassay.",
    voie: "Miage-Bionnassay",
    voieSlug: "miage-bionnassay",
    location: "Col de Miage",
  },
  {
    name: "Refuge Monzino",
    role: "Refuge italien d'approche pour les itinéraires du versant Brouillard / Innominata.",
    voie: "Brouillard / Innominata",
    voieSlug: "brouillard",
    location: "Val Veny, versant italien",
  },
  {
    name: "Abri Vallot",
    role: "Abri de secours uniquement, situé à très haute altitude sur la voie normale.",
    voie: "Voie normale du Goûter",
    voieSlug: "gouter",
    location: "Environ 4 362 m",
  },
  {
    name: "Nid d'Aigle",
    role: "Terminus du Tramway du Mont-Blanc, point de départ habituel de la voie normale du Goûter.",
    voie: "Voie normale du Goûter",
    voieSlug: "gouter",
    location: "Versant France, 2 372 m environ",
  },
];
