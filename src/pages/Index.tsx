import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Route, Users, BookOpen, Backpack, ShieldCheck, Home, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import { routes } from "@/data/routesDatabase";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonLd";

const keyPoints = [
  "Altitude : 4 805,59 m",
  "Nature de l'itinéraire : course d'alpinisme en haute montagne",
  "Durée habituelle : 2 à 3 jours selon voie, météo et acclimatation",
  "Prérequis : excellente condition physique, acclimatation et expérience alpine",
  "Encadrement conseillé : guide de haute montagne pour les non-autonomes",
  "Risques : altitude, météo, froid, glaciers, crevasses, séracs, chutes de pierres",
];

const cards = [
  { to: "/voies", icon: Route, title: "Toutes les voies", desc: "Goûter, Trois Monts, Gonella, Grands Mulets et grandes voies italiennes." },
  { to: "/guides", icon: Users, title: "Annuaire des guides", desc: "Compagnies et bureaux de guides UIAGM." },
  { to: "/refuges", icon: Home, title: "Refuges", desc: "Goûter, Tête Rousse, Cosmiques, Gonella et autres." },
  { to: "/preparation", icon: Mountain, title: "Préparation", desc: "Plan d'entraînement et acclimatation." },
  { to: "/equipement", icon: Backpack, title: "Équipement", desc: "Checklist haute montagne." },
  { to: "/histoire", icon: BookOpen, title: "Histoire", desc: "De Saussure à aujourd'hui." },
  { to: "/securite", icon: ShieldCheck, title: "Sécurité", desc: "Risques objectifs et bonnes pratiques." },
  { to: "/sources", icon: FileText, title: "Sources", desc: "Méthodologie et sources." },
];

const homeFaqs = [
  { q: "Quelle est la difficulté du Mont Blanc ?", a: "L'ascension du Mont Blanc est une course d'alpinisme en haute montagne, exigeante physiquement et techniquement, exposée à plusieurs risques objectifs." },
  { q: "Combien de temps pour gravir le Mont Blanc ?", a: "Habituellement 2 à 3 jours, selon la voie, la météo et l'acclimatation." },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Ascension Mont Blanc : voies, guides, préparation et histoire"
        description="Guide indépendant pour préparer l'ascension du Mont Blanc : voies du Goûter, Trois Monts, Gonella, refuges, guides de haute montagne, sécurité, équipement et histoire."
        canonical="https://www.ascensionmontblanc.fr/"
        jsonLd={[
          websiteJsonLd(),
          organizationJsonLd(),
          articleJsonLd({ headline: "Ascension du Mont Blanc : voies, guides, préparation, sécurité et histoire", url: "https://www.ascensionmontblanc.fr/" }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }]),
          faqJsonLd(homeFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-summit text-primary-foreground">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,hsl(0_0%_100%/0.4),transparent_60%)]" />
        <div className="container-wide relative py-24 md:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">
            4 805,59 m — Toit des Alpes
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-5xl">
            Ascension du Mont Blanc : voies, guides, préparation, sécurité et histoire
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-primary-foreground/85 max-w-3xl font-light">
            L'ascension du Mont Blanc n'est pas une simple randonnée d'altitude.
            C'est une course d'alpinisme en haute montagne, exposée à l'altitude,
            au froid, aux glaciers, aux chutes de pierres, aux séracs et aux
            changements rapides de météo. AscensionMontBlanc.fr rassemble les
            informations essentielles pour comprendre les voies, comparer les
            itinéraires, choisir un guide, préparer son équipement et replacer
            le Mont Blanc dans son histoire alpine.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/voies" className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-background text-primary font-medium shadow-summit hover:translate-y-[-2px] transition-all">
              Voir toutes les voies <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/guides" className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Annuaire des guides
            </Link>
          </div>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-glow mb-4">À retenir</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">L'essentiel sur l'ascension du Mont Blanc</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-base md:text-lg leading-relaxed text-foreground/85 list-disc pl-5">
            {keyPoints.map((k) => <li key={k}>{k}</li>)}
          </ul>
        </div>
      </section>

      <section className="container-wide pb-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">
          Comparer les principales voies du Mont Blanc
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-accent text-accent-foreground">
              <tr>
                <th className="text-left p-3 font-semibold">Voie</th>
                <th className="text-left p-3 font-semibold">Versant</th>
                <th className="text-left p-3 font-semibold">Caractère</th>
                <th className="text-left p-3 font-semibold">Niveau</th>
                <th className="text-left p-3 font-semibold">Public concerné</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r, i) => (
                <tr key={r.slug} className={i % 2 ? "bg-muted/30" : "bg-card"}>
                  <td className="p-3 font-medium text-primary">
                    <Link to={r.url} className="hover:underline">{r.name}</Link>
                  </td>
                  <td className="p-3 text-foreground/80">{r.versant}</td>
                  <td className="p-3 text-foreground/80">{r.caractere}</td>
                  <td className="p-3 text-foreground/80">{r.niveau}</td>
                  <td className="p-3 text-foreground/80">{r.public}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-gradient-glacier border-y border-border">
        <div className="container-wide py-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8">Explorer le site</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <Link key={c.to} to={c.to} className="group rounded-xl bg-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-1">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
