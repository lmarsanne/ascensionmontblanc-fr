import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

interface Props {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  targetLabel: string;
  targetTo: string;
  body: string;
}

const BlogRedirect = ({ slug, title, description, canonical, targetLabel, targetTo, body }: Props) => (
  <>
    <SEO title={title} description={description} canonical={canonical} />
    <section className="container-prose py-16">
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">{title}</h1>
      <p className="text-base md:text-lg leading-relaxed text-foreground/85 mb-6">{body}</p>
      <Link to={targetTo} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium">
        Voir : {targetLabel}
      </Link>
      <p className="sr-only">Slug: {slug}</p>
    </section>
  </>
);

export default BlogRedirect;
