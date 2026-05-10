import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, ArrowRight, Search } from "lucide-react";
import SEO from "@/components/SEO";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";
import { guideEntities } from "@/data/guidesDatabase";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, itemListJsonLd } from "@/lib/jsonLd";
import { Input } from "@/components/ui/input";

const faqs = [
  { q: "Comment est constitué cet annuaire ?", a: "Il est construit à partir de sources publiques. Les informations doivent être vérifiées auprès des structures." },
  { q: "Tous les guides sont-ils certifiés UIAGM ?", a: "Les structures listées sont des bureaux et compagnies dont les guides sont diplômés d'État UIAGM/SNGM." },
];

const GuidesDirectory = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [type, setType] = useState("all");
  const [route, setRoute] = useState("all");
  const [status, setStatus] = useState("all");

  const cities = useMemo(() => Array.from(new Set(guideEntities.map((g) => g.city))), []);
  const routesList = useMemo(() => Array.from(new Set(guideEntities.flatMap((g) => g.routes))), []);

  const filtered = guideEntities.filter((g) => {
    if (city !== "all" && g.city !== city) return false;
    if (type !== "all" && g.guideType !== type) return false;
    if (route !== "all" && !g.routes.includes(route)) return false;
    if (status !== "all" && g.status !== status) return false;
    if (search && !g.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const url = "https://www.ascensionmontblanc.fr/guides";

  return (
    <>
      <SEO
        title="Annuaire des guides de haute montagne — Mont Blanc"
        description="Annuaire indépendant des bureaux et compagnies de guides de haute montagne UIAGM pour l'ascension du Mont Blanc."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Annuaire des guides de haute montagne — Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Guides", url: "/guides" }]),
          itemListJsonLd(guideEntities.map((g) => ({ name: g.name, url: `/guides/${g.slug}` }))),
          faqJsonLd(faqs),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-wide py-16 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Annuaire des guides de haute montagne du Mont Blanc
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80">
            Annuaire indépendant des bureaux et compagnies de guides susceptibles
            d'encadrer une ascension du Mont Blanc. Les informations doivent
            être confirmées directement auprès des structures.
            <Link to="/guides/methodologie" className="ml-2 text-primary-glow hover:underline">Méthodologie</Link>
          </p>
        </div>
      </section>

      <section className="container-wide py-10">
        <div className="grid gap-3 md:grid-cols-5 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Rechercher…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <select className="rounded-md border border-border bg-card p-2 text-sm" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="all">Toutes les villes</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select className="rounded-md border border-border bg-card p-2 text-sm" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">Tous types</option>
            <option value="compagnie">Compagnie</option>
            <option value="bureau">Bureau</option>
            <option value="agence">Agence</option>
            <option value="guide_independant">Guide indépendant</option>
          </select>
          <select className="rounded-md border border-border bg-card p-2 text-sm" value={route} onChange={(e) => setRoute(e.target.value)}>
            <option value="all">Toutes voies</option>
            {routesList.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="mb-6 flex gap-2 flex-wrap">
          {(["all", "verified", "to_verify", "incomplete"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`text-xs px-3 py-1 rounded-full border ${status === s ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border"}`}
            >
              {s === "all" ? "Tous" : s}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((guide) => (
            <article key={guide.slug} className="border border-border shadow-card rounded-xl p-6 bg-card flex flex-col">
              <h2 className="font-display text-xl font-semibold text-primary leading-tight">{guide.name}</h2>
              <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
                <ShieldCheck className="h-4 w-4 shrink-0 text-green-600 mt-0.5" />
                <span className="leading-relaxed">{guide.certification}</span>
              </div>
              <div className="mt-2 flex items-start gap-2 text-sm text-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{guide.city}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75 line-clamp-4">{guide.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.specialties.slice(0, 3).map((s) => (
                  <span key={s} className="bg-accent text-accent-foreground text-xs font-medium px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
              <Link to={`/guides/${guide.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Voir le profil <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-12 text-muted-foreground">Aucun guide ne correspond aux filtres.</p>
        )}
      </section>

      <section className="container-prose pb-16">
        <div className="rounded-xl border border-border bg-accent/30 p-6">
          <h2 className="font-display text-xl font-semibold text-primary mb-2">Méthodologie de l'annuaire</h2>
          <p className="text-sm leading-relaxed text-foreground/85">
            Les fiches sont construites à partir de sources publiques. Pour
            comprendre nos critères, statuts et limites, consultez la{" "}
            <Link to="/guides/methodologie" className="text-primary-glow hover:underline">page méthodologie</Link>.
          </p>
        </div>
      </section>

      <ExternalResources
        resources={externalResources}
        title="Institutions et compagnies de référence"
        categoryFilter={["Institutions", "Guides & compagnies"]}
      />
    </>
  );
};

export default GuidesDirectory;
