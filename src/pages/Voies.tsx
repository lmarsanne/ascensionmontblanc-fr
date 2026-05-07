import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import { routes } from "@/data/routesDatabase";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
} from "@/lib/jsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quelle est la voie la plus classique du Mont Blanc ?", a: "La voie normale du Goûter est la plus fréquentée, mais elle reste une course d'alpinisme en haute montagne." },
  { q: "Quelle voie choisir pour une première ascension ?", a: "Pour une première ascension, la voie normale du Goûter est généralement la plus choisie, à condition d'être bien préparé et souvent accompagné par un guide." },
  { q: "Quelle est la voie la plus sauvage ?", a: "La voie italienne par Gonella est souvent perçue comme plus sauvage et moins fréquentée que les itinéraires français classiques." },
  { q: "Quelles voies sont réservées aux experts ?", a: "Peuterey, Brenva, Innominata, Brouillard et certaines grandes voies italiennes relèvent du grand alpinisme et ne conviennent pas à une première ascension." },
];

const Voies = () => {
  const url = "https://www.ascensionmontblanc.fr/voies";
  return (
    <>
      <SEO
        title="Toutes les voies d'ascension du Mont Blanc"
        description="Comparatif des voies d'ascension du Mont Blanc : Goûter, Trois Monts, Gonella, Grands Mulets, Miage-Bionnassay, Brenva, Peuterey et itinéraires historiques."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Toutes les voies d'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Voies", url: "/voies" },
          ]),
          itemListJsonLd(routes.map((r) => ({ name: r.name, url: r.url }))),
          faqJsonLd(faqs),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-wide py-16 md:py-24">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">Voies</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Toutes les voies d'ascension du Mont Blanc
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
            Il n'existe pas une seule voie pour gravir le Mont Blanc. La voie
            normale du Goûter est la plus fréquentée, mais le massif compte
            plusieurs itinéraires majeurs, très différents par leur ambiance,
            leur difficulté, leur exposition et leur histoire. Certaines voies
            peuvent convenir à une première ascension encadrée par un guide.
            D'autres relèvent du grand alpinisme classique ou de courses très
            engagées.
          </p>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <Link
              key={r.slug}
              to={r.url}
              className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all flex flex-col"
            >
              <h2 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                {r.name}
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {r.versant}
              </p>
              <p className="text-sm leading-relaxed text-foreground/80 mb-4 flex-1">
                {r.resume}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {r.tags.map((t) => (
                  <span key={t} className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Lire la fiche <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wide pb-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">
          Comparatif des voies
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-accent text-accent-foreground">
              <tr>
                <th className="text-left p-3 font-semibold">Voie</th>
                <th className="text-left p-3 font-semibold">Versant</th>
                <th className="text-left p-3 font-semibold">Niveau</th>
                <th className="text-left p-3 font-semibold">Engagement</th>
                <th className="text-left p-3 font-semibold">Public</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r, i) => (
                <tr key={r.slug} className={i % 2 ? "bg-muted/30" : "bg-card"}>
                  <td className="p-3 font-medium text-primary">
                    <Link to={r.url} className="hover:underline">{r.name}</Link>
                  </td>
                  <td className="p-3 text-foreground/80">{r.versant}</td>
                  <td className="p-3 text-foreground/80">{r.niveau}</td>
                  <td className="p-3 text-foreground/80">{r.engagement}</td>
                  <td className="p-3 text-foreground/80">{r.public}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-prose pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">
          Questions fréquentes
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`v-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-foreground/85">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default Voies;
