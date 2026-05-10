import { ReactNode } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";

export interface ContentSection {
  title: string;
  body: ReactNode;
}

interface Props {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: ReactNode;
  keyPoints?: string[];
  sections?: ContentSection[];
  table?: { headers: string[]; rows: string[][] };
  faqs?: { q: string; a: string }[];
  breadcrumb?: { name: string; url: string }[];
  internalLinks?: { to: string; label: string }[];
  children?: ReactNode;
}

const ContentPage = ({
  slug,
  title,
  metaTitle,
  metaDescription,
  intro,
  keyPoints,
  sections,
  table,
  faqs,
  breadcrumb,
  internalLinks,
  children,
}: Props) => {
  const url = `https://www.ascensionmontblanc.fr/${slug}`;
  const crumbs = breadcrumb || [
    { name: "Accueil", url: "/" },
    { name: title, url: `/${slug}` },
  ];
  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: title, url, description: metaDescription }),
          breadcrumbJsonLd(crumbs),
          ...(faqs && faqs.length ? [faqJsonLd(faqs)] : []),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16 md:py-20">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            {title}
          </h1>
          <div className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">{intro}</div>
        </div>
      </section>

      {keyPoints && keyPoints.length > 0 && (
        <section className="container-prose py-12">
          <div className="rounded-2xl bg-accent/40 border border-accent p-6 md:p-8">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">À retenir</h2>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-foreground/85">
              {keyPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {sections && sections.length > 0 && (
        <section className="container-prose pb-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-3">
                {s.title}
              </h2>
              <div className="text-base md:text-lg leading-relaxed text-foreground/85 space-y-3">
                {s.body}
              </div>
            </div>
          ))}
        </section>
      )}

      {table && (
        <section className="container-wide pb-12">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-accent text-accent-foreground">
                <tr>
                  {table.headers.map((h) => (
                    <th key={h} className="text-left p-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-muted/30" : "bg-card"}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 text-foreground/85 align-top">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {children}

      {internalLinks && internalLinks.length > 0 && (
        <section className="container-prose pb-12">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">
            À lire ensuite
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {internalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-glow hover:underline">
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="container-prose pb-20">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">FAQ</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i}>
                <p className="font-semibold text-primary text-base md:text-lg">{f.q}</p>
                <p className="text-base leading-relaxed text-foreground/85 mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ContentPage;
