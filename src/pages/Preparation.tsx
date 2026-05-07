import SEO from "@/components/SEO";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";

const phases = [
  {
    title: "6 mois avant",
    items: [
      "Randonnée régulière",
      "Endurance fondamentale",
      "Renforcement jambes / gainage / dos",
      "Travail de dénivelé progressif",
    ],
  },
  {
    title: "3 mois avant",
    items: [
      "Sorties longues",
      "Portage",
      "Randonnées en altitude",
      "Initiation crampons / piolet si nécessaire",
    ],
  },
  {
    title: "1 mois avant",
    items: [
      "Course préparatoire",
      "Nuit en altitude si possible",
      "Test du matériel",
      "Vérification chaussures et sac",
    ],
  },
  {
    title: "Semaine de l'ascension",
    items: [
      "Repos",
      "Hydratation",
      "Météo",
      "Confirmation refuge / guide",
      "Préparation équipement",
    ],
  },
];

const sections = [
  {
    title: "Préparation physique",
    body: "Endurance longue, dénivelé positif et négatif, capacité à porter un sac, renforcement musculaire général et cardio régulier.",
  },
  {
    title: "Préparation technique",
    body: "Maîtrise du cramponnage, de l'usage du piolet, de l'encordement sur glacier et des manœuvres de base de sécurité.",
  },
  {
    title: "Acclimatation",
    body: "Nuits progressives en altitude, courses préparatoires entre 3 500 et 4 000 m, gestion individuelle des signes du mal aigu des montagnes.",
  },
  {
    title: "Courses préparatoires",
    body: "Sommets de 3 500 à 4 200 m sur les Alpes (par exemple : Grand Paradis, Dômes de Miage, Gran Paradiso) pour valider l'altitude et le matériel.",
  },
  {
    title: "Erreurs fréquentes",
    body: "Sous-estimer la descente, négliger l'acclimatation, partir avec du matériel non testé, ignorer la météo, refuser de renoncer.",
  },
  {
    title: "Checklist personnelle",
    body: "Forme physique, santé, matériel testé, conditions confirmées, météo, refuge et guide validés, plan B prêt.",
  },
];

const faqs = [
  { q: "Combien de temps pour préparer le Mont Blanc ?", a: "Une préparation sérieuse couvre généralement 4 à 6 mois pour un pratiquant déjà sportif." },
  { q: "Faut-il faire une course préparatoire ?", a: "Oui. Un sommet à 3 500 ou 4 000 m permet de tester l'altitude, le matériel et la cordée." },
];

const Preparation = () => {
  const url = "https://www.ascensionmontblanc.fr/preparation";
  return (
    <>
      <SEO
        title="Préparation physique et technique pour l'ascension du Mont Blanc"
        description="Plan de préparation pour l'ascension du Mont Blanc : endurance, dénivelé, acclimatation, courses préparatoires, matériel et erreurs à éviter."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Préparation physique et technique pour l'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Préparation", url: "/preparation" }]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Préparation physique et technique pour l'ascension du Mont Blanc
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            Réussir le Mont Blanc demande une préparation progressive. L'endurance
            seule ne suffit pas. Il faut être capable de marcher longtemps en
            altitude, de porter un sac, d'évoluer encordé, d'utiliser crampons
            et piolet, de gérer le froid, le manque d'oxygène et la fatigue
            mentale.
          </p>
        </div>
      </section>

      <section className="container-prose py-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">Calendrier</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {phases.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{p.title}</h3>
              <ul className="list-disc pl-5 space-y-1 text-base text-foreground/85">
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose pb-16 space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">{s.title}</h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">{s.body}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Preparation;
