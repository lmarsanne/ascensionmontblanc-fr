import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";

interface FaceData {
  title: string;
  description: string;
  voies: { label: string; to: string }[];
  refuges: string[];
  risques: string;
  engagement: string;
}

const faces: FaceData[] = [
  {
    title: "Versant Goûter / Saint-Gervais",
    description:
      "Le versant historique de la voie normale, avec accès depuis Saint-Gervais et le Tramway du Mont-Blanc. Itinéraire le plus fréquenté du massif.",
    voies: [{ label: "Voie normale du Goûter", to: "/voies/gouter" }],
    refuges: ["Tête Rousse", "Goûter", "Nid d'Aigle"],
    risques: "Chutes de pierres dans le Grand Couloir, fréquentation, altitude.",
    engagement: "Modéré à soutenu",
  },
  {
    title: "Versant Chamonix / Trois Monts",
    description:
      "Versant d'altitude depuis l'aiguille du Midi, ambiance haute montagne et glaciers suspendus.",
    voies: [{ label: "Traversée des Trois Monts", to: "/voies/3-monts" }],
    refuges: ["Cosmiques"],
    risques: "Séracs, crevasses, pentes raides, exposition.",
    engagement: "Soutenu",
  },
  {
    title: "Versant nord / Grands Mulets / Bossons",
    description:
      "Versant nord historique, fréquenté en ski-alpinisme de printemps.",
    voies: [{ label: "Grands Mulets", to: "/voies/grands-mulets" }],
    refuges: ["Grands Mulets"],
    risques: "Crevasses, séracs, conditions glaciaires variables.",
    engagement: "Soutenu",
  },
  {
    title: "Versant italien / Val Veny / Gonella",
    description:
      "Versant sauvage et long, accès par le Val Veny côté italien.",
    voies: [{ label: "Voie Gonella", to: "/voies/gonella" }],
    refuges: ["Gonella"],
    risques: "Longueur, glacier complexe, isolement relatif.",
    engagement: "Soutenu",
  },
  {
    title: "Brenva",
    description:
      "Grand versant italien historique, théâtre d'itinéraires majeurs du grand alpinisme.",
    voies: [
      { label: "Brenva", to: "/voies/brenva" },
      { label: "Voie Major", to: "/voies/voie-major" },
    ],
    refuges: ["Refuges italiens d'approche"],
    risques: "Séracs, exposition, engagement très élevé.",
    engagement: "Très élevé",
  },
  {
    title: "Brouillard / Frêney",
    description:
      "Versant majeur italien, parmi les plus impressionnants du Mont Blanc.",
    voies: [
      { label: "Brouillard", to: "/voies/brouillard" },
      { label: "Innominata", to: "/voies/innominata" },
    ],
    refuges: ["Monzino"],
    risques: "Engagement, longueur, isolement.",
    engagement: "Très élevé",
  },
  {
    title: "Miage / Bionnassay",
    description:
      "Secteur d'arêtes esthétiques reliant les Dômes de Miage à l'aiguille de Bionnassay.",
    voies: [{ label: "Miage-Bionnassay", to: "/voies/miage-bionnassay" }],
    refuges: ["Durier"],
    risques: "Arêtes effilées, exposition.",
    engagement: "Élevé",
  },
  {
    title: "Peuterey",
    description:
      "Grande course d'arête majeure du massif, longue et complexe.",
    voies: [{ label: "Peuterey", to: "/voies/peuterey" }],
    refuges: ["Refuges italiens d'approche"],
    risques: "Longueur, retraite difficile, météo.",
    engagement: "Très élevé",
  },
];

const Faces = () => {
  const url = "https://www.ascensionmontblanc.fr/faces";
  return (
    <>
      <SEO
        title="Faces et versants du Mont Blanc"
        description="Comprendre les faces et versants du Mont Blanc : Goûter, Chamonix, Trois Monts, Grands Mulets, Gonella, Brenva, Brouillard, Frêney, Miage et Peuterey."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Faces et versants du Mont Blanc", url }),
          breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Faces", url: "/faces" },
          ]),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Faces et versants du Mont Blanc
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            Le Mont Blanc n'est pas un sommet uniforme. Ses voies d'ascension se
            répartissent sur plusieurs versants, chacun avec sa géographie, ses
            accès, ses refuges, ses risques et son histoire. Comprendre les
            faces du Mont Blanc permet de mieux lire les itinéraires et leur
            niveau d'engagement.
          </p>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {faces.map((f) => (
            <article key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold text-primary mb-3">{f.title}</h2>
              <p className="text-sm leading-relaxed text-foreground/80 mb-4">{f.description}</p>
              <p className="text-sm mb-2"><strong className="text-primary">Voies :</strong> {f.voies.map((v, i) => (
                <span key={v.to}>
                  {i > 0 && ", "}
                  <Link to={v.to} className="text-primary-glow hover:underline">{v.label}</Link>
                </span>
              ))}</p>
              <p className="text-sm mb-2"><strong className="text-primary">Refuges :</strong> {f.refuges.join(", ")}</p>
              <p className="text-sm mb-2"><strong className="text-primary">Risques :</strong> {f.risques}</p>
              <p className="text-sm"><strong className="text-primary">Engagement :</strong> {f.engagement}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faces;
