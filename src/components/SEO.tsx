import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  jsonLd?: object | object[];
}

const SEO = ({ title, description, canonical, ogType = "website", jsonLd }: SEOProps) => {
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
