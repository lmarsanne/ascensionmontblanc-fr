import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Mountain,
  TrendingUp,
  Clock,
  Activity,
  ShieldCheck,
  Route,
  Users,
  BookOpen,
  Backpack,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: Mountain,
    label: "Altitude",
    value: "4 805,59 m",
    description: "Mesure officielle du sommet du Mont-Blanc.",
  },
  {
    icon: TrendingUp,
    label: "Dénivelé moyen",
    value: "2 000 — 2 500 m",
    description: "Variable selon la voie d'ascension empruntée.",
  },
  {
    icon: Clock,
    label: "Durée",
    value: "2 à 3 jours",
    description: "Approche, refuge d'altitude, sommet et descente.",
  },
  {
    icon: Activity,
    label: "Prérequis",
    value: "Excellente forme",
    description:
      "Acclimatation à l'altitude et maîtrise des techniques de cramponnage.",
  },
  {
    icon: ShieldCheck,
    label: "Encadrement",
    value: "Guide UIAGM",
    description:
      "Guide de Haute Montagne diplômé obligatoire pour les novices.",
  },
];

const resources = [
  {
    icon: Route,
    title: "Les Voies d'Ascension",
    description:
      "Découvrez les itinéraires, du Goûter à la Traversée des 3 Monts.",
    to: "/voies/gouter",
  },
  {
    icon: Users,
    title: "L'Annuaire des Guides",
    description: "Réservez votre ascension avec un professionnel certifié.",
    to: "/securite",
  },
  {
    icon: BookOpen,
    title: "Histoire & Légendes",
    description: "De Balmat et Paccard aux records modernes.",
    to: "/securite",
  },
  {
    icon: Backpack,
    title: "Préparation & Matériel",
    description: "Ne laissez rien au hasard pour le jour J.",
    to: "/securite",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ascension Mont-Blanc : Le Guide Ultime et Annuaire des Guides</title>
        <meta
          name="description"
          content="Préparez votre ascension du Mont-Blanc (4807m). Voies, préparation, histoire et annuaire officiel des Guides de Haute Montagne Français (UIAGM)."
        />
        <link rel="canonical" href="https://www.ascensionmontblanc.fr/" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-summit text-primary-foreground">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,hsl(0_0%_100%/0.4),transparent_60%)]" />
        <div className="container-wide relative py-24 md:py-36">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">
            Toit de l'Europe occidentale
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl">
            L'Ascension du Mont-Blanc : Le Guide Ultime et Annuaire Officiel des Guides
          </h1>
          <h2 className="mt-8 text-xl md:text-2xl leading-relaxed text-primary-foreground/85 max-w-3xl font-light">
            Atteignez le toit de l'Europe (4 805,59 m) en toute sécurité. Trouvez
            votre guide de haute montagne diplômé et préparez votre expédition.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/voies/gouter"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-background text-primary font-medium shadow-summit hover:translate-y-[-2px] transition-all"
            >
              Découvrir les voies <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/securite"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Sécurité en haute montagne
            </Link>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="container-wide py-20 md:py-28">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-glow mb-3">
            TL;DR — Les chiffres clés
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary">
            Tout ce qu'il faut savoir sur le Mont-Blanc
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="group p-7 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {stat.label}
              </p>
              <p className="font-display text-2xl font-semibold text-primary mb-3">
                {stat.value}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Ressources */}
      <section className="bg-gradient-glacier border-y border-border">
        <div className="container-wide py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-glow mb-3">
              Nos ressources
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary">
              Préparez chaque étape de votre ascension
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((res) => (
              <Link
                key={res.title}
                to={res.to}
                className="group flex items-start gap-5 p-7 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <res.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {res.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
