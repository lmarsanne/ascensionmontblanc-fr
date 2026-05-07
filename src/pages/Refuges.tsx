import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { refuges } from "@/data/refugesDatabase";
import { articleJsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/jsonLd";

const Refuges = () => {
  const url = "https://www.ascensionmontblanc.fr/refuges";
  return (
    <>
      <SEO
        title="Refuges du Mont Blanc : Goûter, Tête Rousse, Cosmiques, Gonella"
        description="Guide des principaux refuges utiles pour l'ascension du Mont Blanc : Goûter, Tête Rousse, Cosmiques, Grands Mulets, Gonella, Durier, Monzino et abri Vallot."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Refuges pour l'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Refuges", url: "/refuges" }]),
          itemListJsonLd(refuges.map((r) => ({ name: r.name, url: r.voieSlug ? `/voies/${r.voieSlug}` : "/refuges" }))),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Refuges pour l'ascension du Mont Blanc
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            Les refuges structurent la plupart des itinéraires d'ascension du
            Mont Blanc. Leur disponibilité, leur ouverture et leurs conditions
            d'accès doivent toujours être vérifiées directement auprès des
            gestionnaires officiels avant toute course.
          </p>
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {refuges.map((r) => (
            <article key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-card flex flex-col">
              <h2 className="font-display text-xl font-semibold text-primary mb-3">{r.name}</h2>
              <p className="text-sm leading-relaxed text-foreground/80 mb-3 flex-1">{r.role}</p>
              <p className="text-sm text-foreground/75"><strong className="text-primary">Voie :</strong> {r.voie}</p>
              <p className="text-sm text-foreground/75"><strong className="text-primary">Localisation :</strong> {r.location}</p>
              <p className="mt-3 text-xs text-muted-foreground italic">
                Réservation et ouverture à vérifier directement auprès du gestionnaire.
              </p>
              {r.voieSlug && (
                <Link to={`/voies/${r.voieSlug}`} className="mt-4 text-sm font-semibold text-primary-glow hover:underline">
                  Voir la voie associée →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Refuges;
