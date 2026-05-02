import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  ShieldCheck,
  Phone,
  ArrowLeft,
  Mail,
  Mountain,
} from "lucide-react";
import { guideEntities } from "@/data/guidesDatabase";

const GuideProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const entity = guideEntities.find((g) => g.slug === slug);

  if (!entity) {
    return (
      <section className="container-prose py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-primary">
          Guide introuvable
        </h1>
        <p className="mt-4 text-muted-foreground">
          Cette compagnie n'existe pas dans notre annuaire.
        </p>
        <Link
          to="/guides"
          className="mt-6 inline-flex items-center gap-2 text-primary font-semibold"
        >
          <ArrowLeft className="h-4 w-4" /> Retour à l'annuaire
        </Link>
      </section>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: entity.name,
    description: entity.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: entity.address.streetAddress,
      addressLocality: entity.address.addressLocality,
      postalCode: entity.address.postalCode,
      addressCountry: entity.address.addressCountry,
    },
    telephone: entity.phone,
    url: "https://www.ascensionmontblanc.fr/guides/" + entity.slug,
    priceRange: "$$$",
  };

  return (
    <>
      <Helmet>
        <title>{`${entity.name} — Guide UIAGM Mont-Blanc`}</title>
        <meta
          name="description"
          content={entity.description.substring(0, 155)}
        />
        <link
          rel="canonical"
          href={`https://www.ascensionmontblanc.fr/guides/${entity.slug}`}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article>
        <section className="bg-gradient-summit text-primary-foreground">
          <div className="container-prose py-16 md:py-24">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Annuaire des guides
            </Link>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
              <Mountain className="h-3.5 w-3.5" /> Compagnie de guides certifiée
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              {entity.name}
            </h1>
            <div className="mt-6 inline-flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ShieldCheck className="h-4 w-4 text-green-300" />
              {entity.certification}
            </div>
          </div>
        </section>

        <section className="container-prose py-16 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
                À propos
              </h2>
              <p className="text-lg leading-relaxed text-foreground/85">
                {entity.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-4">
                Spécialités
              </h2>
              <div className="flex flex-wrap gap-2">
                {entity.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-slate-100 text-slate-800 text-sm font-semibold px-3 py-1.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-2xl border border-border bg-card shadow-card p-6 sticky top-24">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                Coordonnées
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <div className="leading-relaxed text-foreground/80">
                    <div>{entity.address.streetAddress}</div>
                    <div>
                      {entity.address.postalCode}{" "}
                      {entity.address.addressLocality}
                    </div>
                    <div className="text-muted-foreground">
                      {entity.address.addressCountry}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={`tel:${entity.phone.replace(/\s/g, "")}`}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {entity.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-foreground/80">
                    Certifié UIAGM / SNGM
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-8 flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" /> Demander les disponibilités
              </button>
            </div>
          </aside>
        </section>
      </article>
    </>
  );
};

export default GuideProfile;
