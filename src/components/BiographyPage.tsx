import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { articleJsonLd, breadcrumbJsonLd, personJsonLd } from "@/lib/jsonLd";

interface BiographyPageProps {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  paragraphs: string[];
}

const BiographyPage = ({ slug, name, title, description, intro, paragraphs }: BiographyPageProps) => {
  const url = `https://www.ascensionmontblanc.fr/histoire/${slug}`;
  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: name, url, description }),
          personJsonLd({ name, description: intro, url }),
          breadcrumbJsonLd([
            { name: "Accueil", url: "/" },
            { name: "Histoire", url: "/histoire" },
            { name, url: `/histoire/${slug}` },
          ]),
        ]}
      />
      <article>
        <section className="bg-gradient-glacier border-b border-border">
          <div className="container-prose py-16">
            <Link to="/histoire" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="h-4 w-4" /> Histoire
            </Link>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">{name}</h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">{intro}</p>
          </div>
        </section>
        <section className="container-prose py-12 space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85">{p}</p>
          ))}
        </section>
      </article>
    </>
  );
};

export default BiographyPage;
