import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import TimelineItem from "@/components/TimelineItem";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";

const events = [
  { date: "1760", title: "La promesse de Saussure", text: "Horace-Bénédict de Saussure promet une récompense à ceux qui trouveront une voie vers le sommet.", to: "/histoire/horace-benedict-de-saussure" },
  { date: "8 août 1786", title: "Première ascension", text: "Jacques Balmat et Michel-Gabriel Paccard atteignent le sommet du Mont Blanc.", to: "/histoire/jacques-balmat" },
  { date: "1787", title: "L'ascension scientifique", text: "Horace-Bénédict de Saussure atteint le sommet avec une caravane scientifique.", to: "/histoire/horace-benedict-de-saussure" },
  { date: "1808", title: "Marie Paradis", text: "Marie Paradis devient la première femme à atteindre le sommet.", to: "/histoire/marie-paradis" },
  { date: "1838", title: "Henriette d'Angeville", text: "Henriette d'Angeville réalise une ascension devenue célèbre par sa préparation et son récit.", to: "/histoire/henriette-dangeville" },
  { date: "XIXe siècle", title: "Structuration des guides", text: "Naissance et structuration du métier de guide ; développement de Chamonix.", to: "/guides" },
  { date: "XXe siècle", title: "Refuges et fréquentation", text: "Développement des refuges, des techniques et de la fréquentation du massif.", to: "/refuges" },
  { date: "XXIe siècle", title: "Climat et régulation", text: "Enjeux climatiques, sécurité, régulation et fréquentation.", to: "/securite" },
];

const History = () => {
  const url = "https://www.ascensionmontblanc.fr/histoire";
  return (
    <>
      <SEO
        title="Histoire de l'ascension du Mont Blanc"
        description="Histoire complète de l'ascension du Mont Blanc : Saussure, Balmat et Paccard en 1786, Marie Paradis, Henriette d'Angeville, structuration des guides."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Histoire de l'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Histoire", url: "/histoire" }]),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Histoire de l'ascension du Mont Blanc
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            L'histoire du Mont Blanc est indissociable de la naissance de
            l'alpinisme. Avant d'être un sommet sportif, il fut un objet
            scientifique, géographique et philosophique. Son ascension en 1786
            par Jacques Balmat et Michel-Gabriel Paccard marque un tournant
            majeur dans l'histoire alpine.
          </p>
        </div>
      </section>

      <section className="container-prose py-16">
        <div className="relative">
          <span aria-hidden className="absolute left-4 top-2 bottom-2 w-1 bg-slate-200 rounded-full" />
          <div className="relative">
            {events.map((e) => (
              <div key={e.date}>
                <TimelineItem date={e.date} title={e.title} text={e.text} />
                <div className="pl-12 md:pl-16 -mt-8 mb-8">
                  <Link to={e.to} className="text-sm text-primary-glow hover:underline">En savoir plus →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">Figures historiques</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            { to: "/histoire/jacques-balmat", label: "Jacques Balmat" },
            { to: "/histoire/michel-gabriel-paccard", label: "Michel-Gabriel Paccard" },
            { to: "/histoire/horace-benedict-de-saussure", label: "Horace-Bénédict de Saussure" },
            { to: "/histoire/marie-paradis", label: "Marie Paradis" },
            { to: "/histoire/henriette-dangeville", label: "Henriette d'Angeville" },
            { to: "/histoire/joseph-vallot", label: "Joseph Vallot" },
          ].map((b) => (
            <li key={b.to}>
              <Link to={b.to} className="block rounded-lg border border-border bg-card p-4 hover:shadow-card font-medium text-primary">
                {b.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default History;
