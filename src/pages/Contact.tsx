import SEO from "@/components/SEO";
import { breadcrumbJsonLd } from "@/lib/jsonLd";

const Contact = () => {
  const url = "https://www.ascensionmontblanc.fr/contact";
  return (
    <>
      <SEO
        title="Signaler une correction — Ascension Mont Blanc"
        description="Signaler une erreur, une mise à jour ou une correction sur AscensionMontBlanc.fr."
        canonical={url}
        jsonLd={breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Contact", url: "/contact" }])}
      />
      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Signaler une correction
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            AscensionMontBlanc.fr est un site indépendant. Si vous constatez une
            erreur, une donnée obsolète sur un guide, un refuge ou une voie,
            vous pouvez nous le signaler. Indiquez l'URL concernée et la
            correction proposée.
          </p>
        </div>
      </section>
      <section className="container-prose py-12">
        <p className="text-base md:text-lg leading-relaxed text-foreground/85">
          Adresse de contact : <a className="text-primary-glow hover:underline" href="mailto:contact@ascensionmontblanc.fr">contact@ascensionmontblanc.fr</a>
        </p>
      </section>
    </>
  );
};

export default Contact;
