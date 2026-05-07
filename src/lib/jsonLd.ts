const SITE = "https://www.ascensionmontblanc.fr";
const ORG_NAME = "Ascension Mont Blanc";

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ORG_NAME,
  url: SITE + "/",
});

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG_NAME,
  url: SITE,
  logo: SITE + "/logo.png",
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url.startsWith("http") ? it.url : SITE + it.url,
  })),
});

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleJsonLd = (p: { headline: string; url: string; description?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: p.headline,
  description: p.description,
  author: { "@type": "Organization", name: ORG_NAME },
  publisher: {
    "@type": "Organization",
    name: ORG_NAME,
    logo: { "@type": "ImageObject", url: SITE + "/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": p.url },
});

export const itemListJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    url: it.url.startsWith("http") ? it.url : SITE + it.url,
  })),
});

export const personJsonLd = (p: { name: string; description?: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: p.name,
  description: p.description,
  url: p.url,
});

export const localBusinessJsonLd = (b: {
  name: string;
  description?: string;
  telephone?: string;
  url: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: b.name,
  description: b.description,
  telephone: b.telephone,
  url: b.url,
  address: b.address && {
    "@type": "PostalAddress",
    ...b.address,
  },
});
