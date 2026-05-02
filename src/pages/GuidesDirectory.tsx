import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import { guideEntities } from "@/data/guidesDatabase";

const GuidesDirectory = () => {
  return (
    <>
      <Helmet>
        <title>Annuaire des Guides de Haute Montagne UIAGM — Mont-Blanc</title>
        <meta
          name="description"
          content="Annuaire officiel des bureaux et compagnies de guides de haute montagne UIAGM pour l'ascension du Mont-Blanc (4 805,59 m). Chamonix, Saint-Gervais, Les Houches."
        />
        <link rel="canonical" href="https://www.ascensionmontblanc.fr/guides" />
      </Helmet>

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-wide py-16 md:py-24">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-green-600" /> Annuaire
            certifié UIAGM
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Annuaire Officiel des Guides et Compagnies du Mont-Blanc
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
            L'ascension du Mont-Blanc (4805,59 m) exige une maîtrise technique
            et une connaissance du terrain que seul un professionnel peut
            garantir. Retrouvez ci-dessous les bureaux et compagnies de guides
            de haute montagne officiels, tous certifiés UIAGM (Union
            Internationale des Associations de Guides de Montagne) et membres
            du SNGM.
          </p>
        </div>
      </section>

      <section className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {guideEntities.map((guide) => (
            <article
              key={guide.slug}
              className="border border-slate-200 shadow-sm hover:shadow-lg transition-shadow rounded-xl p-6 bg-card flex flex-col"
            >
              <h3 className="font-display text-2xl font-semibold text-primary leading-tight">
                {guide.name}
              </h3>

              <div className="mt-4 flex items-start gap-2 text-sm text-foreground/80">
                <ShieldCheck className="h-5 w-5 shrink-0 text-green-600 mt-0.5" />
                <span className="leading-relaxed">{guide.certification}</span>
              </div>

              <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span className="leading-relaxed">
                  {guide.address.streetAddress}, {guide.address.postalCode}{" "}
                  {guide.address.addressLocality}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-foreground/80">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`tel:${guide.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary"
                >
                  {guide.phone}
                </a>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/75 line-clamp-4">
                {guide.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {guide.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link
                to={`/guides/${guide.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Voir le profil complet <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default GuidesDirectory;
