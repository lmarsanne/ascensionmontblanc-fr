import SEO from "@/components/SEO";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";
import { AlertTriangle } from "lucide-react";

const sections = [
  { title: "Altitude", body: "Le sommet du Mont Blanc dépasse 4 800 m. L'altitude provoque hypoxie, baisse de performance, mal aigu des montagnes et erreurs de jugement." },
  { title: "Météo", body: "Le vent, le froid et la visibilité changent rapidement. Une fenêtre météo trop courte expose la cordée." },
  { title: "Grand Couloir", body: "Passage emblématique de la voie du Goûter, exposé aux chutes de pierres notamment l'après-midi." },
  { title: "Crevasses", body: "Présentes sur tous les itinéraires glaciaires. Encordement et techniques de secours en crevasse indispensables." },
  { title: "Séracs", body: "Blocs de glace instables, présents notamment sous le Tacul et le Maudit." },
  { title: "Froid", body: "Températures ressenties très basses au sommet, même en plein été. Risque d'engelures et d'hypothermie." },
  { title: "Fatigue", body: "Sommeil court en refuge, dénivelé important et altitude affectent la lucidité." },
  { title: "Erreurs d'itinéraire", body: "Brouillard, traces multiples, mauvaise visibilité : la navigation peut devenir critique." },
  { title: "Descente", body: "La descente intervient lorsque la vigilance baisse. Beaucoup d'accidents s'y produisent." },
  { title: "Demi-tour", body: "Savoir renoncer fait partie intégrante de la sécurité en haute montagne." },
  { title: "Rôle du guide", body: "Le guide de haute montagne apporte expertise, lecture du terrain et capacité de décision." },
  { title: "Vérification des conditions", body: "Bulletins météo, état des refuges, conditions glaciaires, consignes officielles : à vérifier avant chaque ascension." },
];

const faqs = [
  { q: "Quel est le principal risque du Mont Blanc ?", a: "Il n'existe pas un seul risque. Selon la voie, les dangers peuvent venir de l'altitude, de la météo, des crevasses, des séracs, des chutes de pierres ou de la fatigue." },
  { q: "Pourquoi la descente est-elle dangereuse ?", a: "La descente intervient souvent lorsque la fatigue, l'altitude et la baisse de vigilance sont déjà présentes." },
];

const Securite = () => {
  const url = "https://www.ascensionmontblanc.fr/securite";
  return (
    <>
      <SEO
        title="Sécurité sur l'ascension du Mont Blanc"
        description="Risques de l'ascension du Mont Blanc : altitude, météo, Grand Couloir, crevasses, séracs, froid, fatigue, descente et rôle du guide de haute montagne."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Sécurité sur l'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Sécurité", url: "/securite" }]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="bg-gradient-to-br from-destructive/95 to-primary text-primary-foreground">
        <div className="container-prose py-16 md:py-24">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80 mb-6">
            <AlertTriangle className="h-3.5 w-3.5" /> Sécurité haute montagne
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Sécurité sur l'ascension du Mont Blanc
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-primary-foreground/90">
            Le Mont Blanc concentre plusieurs risques typiques de la haute
            montagne : altitude, météo, crevasses, séracs, chutes de pierres,
            froid, fatigue et erreurs de décision. La sécurité dépend moins
            d'une seule compétence que d'un ensemble : préparation, expérience,
            guide, équipement, horaire, conditions et capacité à renoncer.
          </p>
        </div>
      </section>

      <section className="container-prose py-16 grid gap-6 md:grid-cols-2">
        {sections.map((s) => (
          <article key={s.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl font-semibold text-primary mb-2">{s.title}</h2>
            <p className="text-base leading-relaxed text-foreground/85">{s.body}</p>
          </article>
        ))}
      </section>

      <section className="container-prose pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">FAQ sécurité</h2>
        {faqs.map((f, i) => (
          <div key={i} className="mb-5">
            <p className="font-semibold text-primary text-base md:text-lg">{f.q}</p>
            <p className="text-base leading-relaxed text-foreground/85">{f.a}</p>
          </div>
        ))}
      </section>
      <ExternalResources
        resources={externalResources}
        title="Ressources sécurité et secours"
        categoryFilter={["Sécurité & prévention", "Secours", "Météo & conditions"]}
      />
    </>
  );
};

export default Securite;
