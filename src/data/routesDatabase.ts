export interface RouteSummary {
  slug: string;
  name: string;
  url: string;
  versant: string;
  caractere: string;
  niveau: string;
  engagement: string;
  public: string;
  resume: string;
  tags: string[];
}

export const routes: RouteSummary[] = [
  {
    slug: "gouter",
    name: "Voie normale du Goûter",
    url: "/voies/gouter",
    versant: "France / Saint-Gervais",
    caractere: "Classique, fréquentée, exposée au Grand Couloir",
    niveau: "Alpinisme classique",
    engagement: "Modéré à soutenu",
    public: "Première ascension encadrée",
    resume:
      "La voie la plus fréquentée depuis le versant français. Elle passe par Tête Rousse, le Grand Couloir, le refuge du Goûter, le Dôme du Goûter, l'abri Vallot et l'arête des Bosses.",
    tags: ["Classique", "Fréquentée", "Grand Couloir", "Première ascension encadrée"],
  },
  {
    slug: "3-monts",
    name: "Traversée des Trois Monts",
    url: "/voies/3-monts",
    versant: "France / Chamonix",
    caractere: "Glaciaire, esthétique, plus technique",
    niveau: "Intermédiaire à confirmé",
    engagement: "Soutenu",
    public: "Alpinistes initiés",
    resume:
      "Itinéraire glaciaire depuis l'aiguille du Midi et le refuge des Cosmiques, passant par le Mont Blanc du Tacul et le Mont Maudit avant de rejoindre le sommet.",
    tags: ["Glaciaire", "Esthétique", "Séracs", "Technique"],
  },
  {
    slug: "gonella",
    name: "Gonella / Aiguilles Grises",
    url: "/voies/gonella",
    versant: "Italie / Val Veny",
    caractere: "Longue, sauvage, moins fréquentée",
    niveau: "Confirmé",
    engagement: "Soutenu",
    public: "Alpinistes endurants",
    resume:
      "Voie italienne longue et sauvage depuis le Val Veny, passant par le refuge Gonella, le glacier du Dôme et les Aiguilles Grises.",
    tags: ["Italie", "Sauvage", "Long", "Endurance"],
  },
  {
    slug: "grands-mulets",
    name: "Grands Mulets",
    url: "/voies/grands-mulets",
    versant: "France / Chamonix",
    caractere: "Historique, glaciaire, souvent ski de printemps",
    niveau: "Confirmé",
    engagement: "Soutenu",
    public: "Alpinistes ou skieurs-alpinistes",
    resume:
      "Itinéraire historique du versant nord, souvent associé au ski de randonnée de printemps, avec progression glaciaire depuis le secteur des Bossons.",
    tags: ["Historique", "Ski-alpinisme", "Glacier", "Printemps"],
  },
  {
    slug: "miage-bionnassay",
    name: "Miage-Bionnassay",
    url: "/voies/miage-bionnassay",
    versant: "France / Italie",
    caractere: "Arêtes, esthétique, engagée",
    niveau: "Très confirmé",
    engagement: "Élevé",
    public: "Alpinistes expérimentés",
    resume:
      "Itinéraire esthétique et engagé par les arêtes de Miage et de Bionnassay, destiné aux alpinistes confirmés.",
    tags: ["Arête", "Esthétique", "Engagé", "Confirmé"],
  },
  {
    slug: "brenva",
    name: "Brenva",
    url: "/voies/brenva",
    versant: "Italie",
    caractere: "Grandes voies historiques, exposées",
    niveau: "Expert",
    engagement: "Très élevé",
    public: "Très bons alpinistes",
    resume:
      "Grand versant italien du Mont Blanc, connu pour ses itinéraires historiques, engagés et exposés.",
    tags: ["Italie", "Historique", "Engagé", "Expert"],
  },
  {
    slug: "peuterey",
    name: "Peuterey",
    url: "/voies/peuterey",
    versant: "Italie",
    caractere: "Grande course majeure d'arête",
    niveau: "Expert",
    engagement: "Très élevé",
    public: "Alpinistes experts",
    resume:
      "L'une des grandes courses d'arête les plus majeures du massif, longue, complexe et réservée aux alpinistes experts.",
    tags: ["Grande course", "Arête", "Expert", "Engagement"],
  },
  {
    slug: "innominata",
    name: "Innominata",
    url: "/voies/innominata",
    versant: "Italie",
    caractere: "Sauvage, engagé",
    niveau: "Expert",
    engagement: "Très élevé",
    public: "Alpinistes experts",
    resume:
      "Grande voie italienne sauvage et engagée, associée au versant Brouillard / Frêney.",
    tags: ["Italie", "Sauvage", "Expert", "Grande course"],
  },
  {
    slug: "brouillard",
    name: "Brouillard",
    url: "/voies/brouillard",
    versant: "Italie",
    caractere: "Sauvage, historique",
    niveau: "Expert",
    engagement: "Très élevé",
    public: "Experts",
    resume:
      "Secteur majeur du versant italien, avec des itinéraires de grand alpinisme sur l'un des versants les plus impressionnants du Mont Blanc.",
    tags: ["Brouillard", "Italie", "Engagé", "Historique"],
  },
  {
    slug: "voie-major",
    name: "Voie Major",
    url: "/voies/voie-major",
    versant: "Italie",
    caractere: "Historique de la Brenva",
    niveau: "Expert",
    engagement: "Très élevé",
    public: "Experts",
    resume:
      "Itinéraire historique de la face de la Brenva, réservé à des cordées très expérimentées selon les conditions.",
    tags: ["Brenva", "Historique", "Expert", "Exposition"],
  },
];
