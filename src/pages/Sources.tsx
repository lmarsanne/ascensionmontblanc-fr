import SEO from "@/components/SEO";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";

const sections = [
  { title: "Sources institutionnelles", body: "Organismes officiels d'information sur la montagne, organismes publics et agences de prévention." },
  { title: "Guides et syndicats", body: "Compagnies, bureaux de guides, syndicats nationaux et internationaux des guides de haute montagne." },
  { title: "Refuges", body: "Sites officiels et plateformes de réservation des refuges du massif du Mont Blanc." },
  { title: "Sécurité montagne", body: "Bulletins météo, organismes de prévention, services de secours en montagne." },
  { title: "Histoire", body: "Ressources historiques publiques, ouvrages de référence sur l'histoire de l'alpinisme." },
  { title: "Topos et culture alpine", body: "Topos d'alpinisme, bases de connaissances alpines, ouvrages techniques." },
  { title: "Politique de mise à jour", body: "Le contenu est revu périodiquement. Toute information sensible (refuges, conditions, guides) doit être confirmée à la source." },
  { title: "Signaler une erreur", body: "Pour toute correction, contactez-nous via la page de contact." },
];

const Sources = () => {
  const url = "https://www.ascensionmontblanc.fr/sources";
  return (
    <>
      <SEO
        title="Sources et méthodologie — Ascension Mont Blanc"
        description="Sources, méthodologie et politique éditoriale d'AscensionMontBlanc.fr pour les informations sur les voies, refuges, guides, sécurité, histoire et équipement."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Sources et méthodologie", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Sources", url: "/sources" }]),
        ]}
      />
      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Sources et méthodologie
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            AscensionMontBlanc.fr est un site indépendant construit à partir de
            sources publiques, institutionnelles, historiques et techniques.
            Les informations liées aux refuges, conditions, horaires, guides et
            itinéraires doivent toujours être vérifiées auprès des organismes
            officiels, des refuges et des professionnels de la montagne avant
            toute ascension.
          </p>
        </div>
      </section>
      <section className="container-prose py-16 space-y-6">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">{s.title}</h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">{s.body}</p>
          </div>
        ))}
      </section>
      <ExternalResources
        resources={externalResources}
        title="Toutes les ressources externes référencées"
        intro="Liste complète des ressources institutionnelles, refuges, guides, équipement et météo utilisées et citées sur AscensionMontBlanc.fr."
      />
    </>
  );
};

export default Sources;
