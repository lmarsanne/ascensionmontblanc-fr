import { ExternalLink } from "lucide-react";
import type { ExternalResource, ResourceCategory } from "@/data/externalResources";

interface Props {
  resources: ExternalResource[];
  title: string;
  intro?: string;
  categoryFilter?: ResourceCategory | ResourceCategory[];
}

const ExternalResources = ({ resources, title, intro, categoryFilter }: Props) => {
  const filters = categoryFilter
    ? Array.isArray(categoryFilter)
      ? categoryFilter
      : [categoryFilter]
    : null;
  const list = filters ? resources.filter((r) => filters.includes(r.category)) : resources;

  return (
    <section className="container-wide py-16">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-3">{title}</h2>
      {intro && (
        <p className="max-w-3xl text-base md:text-lg leading-relaxed text-foreground/80 mb-8">{intro}</p>
      )}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((r) => (
          <article
            key={r.url}
            className="rounded-xl border border-border bg-card p-6 shadow-card flex flex-col"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-2">
              {r.category}
            </p>
            <h3 className="font-display text-lg font-semibold text-primary leading-tight mb-3">
              {r.name}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80 flex-1">{r.description}</p>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Consulter la ressource <ExternalLink className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExternalResources;
