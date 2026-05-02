import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";
import { MapPin, AlertTriangle } from "lucide-react";

interface RoutePageProps {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  techSheet: { label: string; value: ReactNode }[];
  itineraryTitle: string;
  itinerary: ReactNode;
}

const RoutePage = ({
  title,
  description,
  canonical,
  h1,
  intro,
  techSheet,
  itineraryTitle,
  itinerary,
}: RoutePageProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <article>
        {/* Hero */}
        <section className="bg-gradient-summit text-primary-foreground">
          <div className="container-prose py-20 md:py-28">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">
              <MapPin className="h-3.5 w-3.5" /> Itinéraire d'ascension
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              {h1}
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="container-prose py-16 md:py-20">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/85 font-light">
            {intro}
          </p>
        </section>

        {/* Fiche technique */}
        <section className="container-prose pb-16">
          <div className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">
              Fiche Technique
            </h2>
            <ul className="divide-y divide-border">
              {techSheet.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-4 text-base md:text-lg"
                >
                  <strong className="text-primary font-semibold">
                    {item.label}
                  </strong>
                  <span className="sm:col-span-2 text-foreground/85 leading-relaxed">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Itinéraire */}
        <section className="container-prose pb-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-8">
            {itineraryTitle}
          </h2>
          <div className="prose-mb space-y-6">{itinerary}</div>
        </section>

        {/* Avertissement */}
        <section className="container-prose pb-24">
          <div className="flex gap-4 rounded-xl border border-warning/40 bg-warning/10 p-6">
            <AlertTriangle className="h-6 w-6 shrink-0 text-warning" />
            <p className="text-sm leading-relaxed text-foreground/85">
              <strong className="text-primary">Rappel sécurité :</strong> cet
              itinéraire ne doit être entrepris qu'avec une expérience solide
              en alpinisme ou accompagné d'un{" "}
              <strong>Guide de Haute Montagne diplômé d'État (UIAGM)</strong>.
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export default RoutePage;
