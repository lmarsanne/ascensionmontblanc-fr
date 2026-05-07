import SEO from "@/components/SEO";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";

const GuidesMethodology = () => {
  const url = "https://www.ascensionmontblanc.fr/guides/methodologie";
  return (
    <>
      <SEO
        title="Méthodologie de l'annuaire des guides — Mont Blanc"
        description="Méthodologie de l'annuaire indépendant des guides de haute montagne du Mont Blanc : sources, vérification, statut et limites des informations."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Méthodologie de l'annuaire des guides", url }),
          breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Guides", url: "/guides" },
            { name: "Méthodologie", url: "/guides/methodologie" },
          ]),
        ]}
      />
      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Méthodologie de l'annuaire des guides
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            L'annuaire d'AscensionMontBlanc.fr est un annuaire indépendant
            construit à partir de sources publiques. Il vise à recenser les
            guides, compagnies et bureaux de guides susceptibles d'accompagner
            des ascensions du Mont Blanc. Les informations doivent toujours
            être vérifiées directement auprès des professionnels concernés.
          </p>
        </div>
      </section>
      <section className="container-prose py-12 space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
        <p>Chaque fiche indique un statut : <strong>verified</strong> (vérifié récemment), <strong>to_verify</strong> (à vérifier) ou <strong>incomplete</strong> (information partielle).</p>
        <p>Les voies indiquées correspondent aux itinéraires généralement encadrés par la structure d'après ses sources publiques. La disponibilité réelle reste à confirmer auprès du guide.</p>
        <p>Pour signaler une erreur ou demander une mise à jour, utilisez la page contact.</p>
      </section>
    </>
  );
};

export default GuidesMethodology;
