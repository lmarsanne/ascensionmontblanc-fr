import SEO from "@/components/SEO";
import { articleJsonLd, breadcrumbJsonLd, itemListJsonLd } from "@/lib/jsonLd";

const terms = [
  { term: "Alpinisme", def: "Pratique de la montagne qui combine progression sur neige, glace, rocher, altitude et terrain exposé." },
  { term: "Voie normale", def: "Itinéraire le plus couramment emprunté pour atteindre un sommet, sans signifier qu'il est facile ou sans danger." },
  { term: "Arête", def: "Ligne de crête souvent étroite reliant des sommets ou des points hauts." },
  { term: "Couloir", def: "Dépression raide dans une face ou un versant, pouvant canaliser neige, pierres ou glace." },
  { term: "Sérac", def: "Bloc ou structure de glace instable provenant d'un glacier, pouvant s'effondrer." },
  { term: "Crevasse", def: "Ouverture dans un glacier, parfois masquée par un pont de neige." },
  { term: "Rimaye", def: "Crevasse située entre un glacier et une paroi ou une pente raide." },
  { term: "Encordement", def: "Technique qui consiste à relier les membres d'une cordée par une corde." },
  { term: "Cramponnage", def: "Progression avec crampons sur neige dure ou glace." },
  { term: "Piolet", def: "Outil d'alpinisme utilisé pour l'équilibre, la progression et certaines manœuvres de sécurité." },
  { term: "Refuge", def: "Hébergement de montagne servant de point d'appui pour les ascensions." },
  { term: "Acclimatation", def: "Adaptation progressive du corps à l'altitude." },
  { term: "Cordée", def: "Groupe d'alpinistes reliés par une corde." },
  { term: "Grand Couloir", def: "Passage célèbre de la voie normale du Goûter, connu pour son exposition aux chutes de pierres." },
  { term: "Dôme du Goûter", def: "Sommet neigeux traversé sur la voie normale du Goûter." },
  { term: "Mont Blanc du Tacul", def: "Sommet traversé ou approché dans la traversée des Trois Monts." },
  { term: "Mont Maudit", def: "Sommet majeur de la traversée des Trois Monts." },
  { term: "Aiguille de Bionnassay", def: "Sommet et arête emblématiques du secteur Miage-Bionnassay." },
  { term: "Abri Vallot", def: "Abri de secours situé en altitude sur l'itinéraire de la voie normale." },
];

const Glossaire = () => {
  const url = "https://www.ascensionmontblanc.fr/glossaire";
  return (
    <>
      <SEO
        title="Glossaire de l'ascension du Mont Blanc"
        description="Glossaire des termes d'alpinisme et de l'ascension du Mont Blanc : sérac, crevasse, rimaye, voie normale, cordée, Grand Couloir, abri Vallot."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Glossaire de l'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Glossaire", url: "/glossaire" }]),
          itemListJsonLd(terms.map((t) => ({ name: t.term, url: "/glossaire" }))),
        ]}
      />
      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Glossaire de l'ascension du Mont Blanc
          </h1>
        </div>
      </section>
      <section className="container-prose py-16">
        <dl className="space-y-6">
          {terms.map((t) => (
            <div key={t.term} className="border-b border-border pb-4">
              <dt className="font-display text-lg md:text-xl font-semibold text-primary">{t.term}</dt>
              <dd className="text-base md:text-lg leading-relaxed text-foreground/85 mt-1">{t.def}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
};

export default Glossaire;
