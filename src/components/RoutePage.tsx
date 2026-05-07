import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MapPin, AlertTriangle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/jsonLd";

export interface RouteFAQ {
  q: string;
  a: string;
}

interface RoutePageProps {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  techSheet: { label: string; value: ReactNode }[];
  itineraryTitle?: string;
  itinerary?: ReactNode;
  summary?: string;
  keyPoints?: string[];
  difficultyDetails?: string;
  physicalLevel?: string;
  technicalLevel?: string;
  risks?: string[];
  refuges?: string[];
  equipment?: string[];
  bestFor?: string;
  avoidIf?: string;
  alternatives?: { label: string; to: string }[];
  faq?: RouteFAQ[];
  sources?: string[];
  relatedRoutes?: { label: string; to: string }[];
  relatedPages?: { label: string; to: string }[];
  breadcrumbLabel?: string;
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="container-prose pb-12">
    <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">
      {title}
    </h2>
    <div className="prose-mb space-y-4">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-base md:text-lg leading-relaxed text-foreground/85 list-disc pl-6">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

const RoutePage = ({
  title,
  description,
  canonical,
  h1,
  intro,
  techSheet,
  itineraryTitle = "Itinéraire",
  itinerary,
  summary,
  keyPoints,
  difficultyDetails,
  physicalLevel,
  technicalLevel,
  risks,
  refuges,
  equipment,
  bestFor,
  avoidIf,
  alternatives,
  faq,
  sources,
  relatedRoutes,
  relatedPages,
  breadcrumbLabel,
}: RoutePageProps) => {
  const jsonLd: object[] = [
    articleJsonLd({ headline: h1, url: canonical, description }),
    breadcrumbJsonLd([
      { name: "Accueil", url: "/" },
      { name: "Voies", url: "/voies" },
      { name: breadcrumbLabel || h1, url: canonical },
    ]),
  ];
  if (faq && faq.length) jsonLd.push(faqJsonLd(faq));

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {jsonLd.map((b, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
        ))}
      </Helmet>

      <article>
        {/* Hero */}
        <section className="bg-gradient-summit text-primary-foreground">
          <div className="container-prose py-20 md:py-28">
            <nav className="flex items-center gap-1 text-xs text-primary-foreground/70 mb-6" aria-label="Fil d'Ariane">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/voies" className="hover:text-white">Voies</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/90">{breadcrumbLabel || "Voie"}</span>
            </nav>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
              <MapPin className="h-3.5 w-3.5" /> Itinéraire d'ascension
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              {h1}
            </h1>
          </div>
        </section>

        <section className="container-prose py-16 md:py-20">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/85 font-light">
            {intro}
          </p>
        </section>

        {summary && (
          <section className="container-prose pb-12">
            <div className="rounded-2xl bg-accent/40 border border-accent p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-glow mb-3">
                Résumé rapide
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/85">
                {summary}
              </p>
            </div>
          </section>
        )}

        {keyPoints && keyPoints.length > 0 && (
          <Section title="À retenir">
            <List items={keyPoints} />
          </Section>
        )}

        <section className="container-prose pb-12">
          <div className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">
              Fiche technique
            </h2>
            <ul className="divide-y divide-border">
              {techSheet.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-4 text-base md:text-lg"
                >
                  <strong className="text-primary font-semibold">{item.label}</strong>
                  <span className="sm:col-span-2 text-foreground/85 leading-relaxed">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {itinerary && (
          <Section title={itineraryTitle}>{itinerary}</Section>
        )}

        {physicalLevel && (
          <Section title="Niveau physique">
            <p>{physicalLevel}</p>
          </Section>
        )}

        {technicalLevel && (
          <Section title="Niveau technique">
            <p>{technicalLevel}</p>
          </Section>
        )}

        {difficultyDetails && (
          <Section title="Détails de difficulté">
            <p>{difficultyDetails}</p>
          </Section>
        )}

        {risks && risks.length > 0 && (
          <Section title="Risques spécifiques">
            <List items={risks} />
          </Section>
        )}

        {refuges && refuges.length > 0 && (
          <Section title="Refuges et points clés">
            <List items={refuges} />
          </Section>
        )}

        {equipment && equipment.length > 0 && (
          <Section title="Équipement recommandé">
            <List items={equipment} />
          </Section>
        )}

        {bestFor && (
          <Section title="Pour quel profil ?">
            <p>{bestFor}</p>
          </Section>
        )}

        {avoidIf && (
          <Section title="Quand éviter cette voie ?">
            <p>{avoidIf}</p>
          </Section>
        )}

        {alternatives && alternatives.length > 0 && (
          <Section title="Alternatives">
            <ul className="space-y-2 text-base md:text-lg list-disc pl-6">
              {alternatives.map((a) => (
                <li key={a.to}>
                  <Link to={a.to} className="text-primary-glow hover:underline">{a.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {faq && faq.length > 0 && (
          <section className="container-prose pb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
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
        )}

        {sources && sources.length > 0 && (
          <Section title="Sources">
            <List items={sources} />
          </Section>
        )}

        {((relatedRoutes && relatedRoutes.length > 0) ||
          (relatedPages && relatedPages.length > 0)) && (
          <section className="container-prose pb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">
              Pages liées
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {[...(relatedRoutes || []), ...(relatedPages || [])].map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-lg border border-border bg-card p-4 hover:shadow-card hover:-translate-y-0.5 transition-all flex items-center justify-between"
                >
                  <span className="font-medium text-primary">{r.label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="container-prose pb-24">
          <div className="flex gap-4 rounded-xl border border-warning/40 bg-warning/10 p-6">
            <AlertTriangle className="h-6 w-6 shrink-0 text-warning" />
            <p className="text-sm leading-relaxed text-foreground/85">
              <strong className="text-primary">Sécurité :</strong> Les conditions
              en haute montagne évoluent rapidement. Les informations de cette
              page ne remplacent ni l'avis d'un guide de haute montagne, ni les
              bulletins météo, ni les informations officielles des refuges et
              organismes de sécurité.
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default RoutePage;
