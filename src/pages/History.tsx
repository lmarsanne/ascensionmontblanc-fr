import { Helmet } from "react-helmet-async";
import { Sparkles, Clock } from "lucide-react";
import TimelineItem from "@/components/TimelineItem";

const timelineEvents = [
  {
    date: "1760",
    title: "La Promesse de De Saussure",
    text: "Le scientifique genevois Horace-Bénédict de Saussure observe le Mont-Blanc depuis le Brévent. Fasciné, il promet une forte récompense à celui qui trouvera le chemin menant au sommet, déclenchant ainsi la course à la conquête.",
  },
  {
    date: "8 Août 1786",
    title: "La Première Ascension Historique",
    text: "À 18h23, le cristallier Jacques Balmat et le médecin Michel Paccard foulent le sommet vierge du Mont-Blanc. Cette ascension incroyable, réalisée sans matériel technique moderne, marque la naissance officielle de l'alpinisme.",
  },
  {
    date: "1808 & 1838",
    title: "Les Pionnières : Marie Paradis et Henriette d'Angeville",
    text: "La Chamoniarde Marie Paradis devient la première femme à atteindre le sommet en 1808, bien qu'elle ait été portée sur la fin du trajet. En 1838, la Franco-Suisse Henriette d'Angeville réalise la première ascension féminine véritablement sportive et autonome, marquant un tournant dans l'alpinisme féminin.",
  },
  {
    date: "24 Juillet 1821",
    title: "Création de la Compagnie des Guides de Chamonix",
    text: "Suite à l'accident tragique de l'expédition du Dr Hamel en 1820 (première catastrophe mortelle recensée sur le massif), le conseil municipal de Chamonix crée officiellement la Compagnie des Guides afin d'organiser et sécuriser la profession, instaurant le principe du \"tour de rôle\".",
  },
  {
    date: "11 Juillet 2013",
    title: "Le Record Stratosphérique de Kilian Jornet",
    text: "L'ultra-traileur espagnol Kilian Jornet pulvérise le record d'ascension et de descente du Mont-Blanc depuis l'église de Chamonix. Il réalise l'aller-retour en seulement 4 heures, 57 minutes et 40 secondes, équipé d'un simple matériel de trail running.",
  },
];

const History = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Histoire et Conquête du Mont-Blanc : Les Premières Ascensions",
    author: {
      "@type": "Organization",
      name: "Ascension Mont Blanc",
    },
    publisher: {
      "@type": "Organization",
      name: "Ascension Mont Blanc",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ascensionmontblanc.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.ascensionmontblanc.fr/histoire",
    },
  };

  return (
    <>
      <Helmet>
        <title>Histoire du Mont-Blanc : Première Ascension 1786 & Records</title>
        <meta
          name="description"
          content="Histoire complète de la conquête du Mont-Blanc : Balmat & Paccard en 1786, Marie Paradis, Compagnie des Guides de Chamonix, record de Kilian Jornet."
        />
        <link rel="canonical" href="https://www.ascensionmontblanc.fr/histoire" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article>
        {/* Header */}
        <section className="bg-gradient-glacier border-b border-border">
          <div className="container-prose py-16 md:py-24">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <Clock className="h-3.5 w-3.5" /> Hub de connaissances
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">
              Histoire et Conquête du Mont-Blanc : Les Premières Ascensions
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
              Depuis sa première ascension en 1786, le "Toit de l'Europe"
              fascine. De l'exploration scientifique de De Saussure aux records
              de vitesse de Kilian Jornet, découvrez les dates clés et les
              alpinistes de légende qui ont forgé l'histoire du massif du
              Mont-Blanc.
            </p>
          </div>
        </section>

        {/* TL;DR — GEO Answer Box */}
        <section className="container-prose py-12">
          <aside className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8 md:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
              <Sparkles className="h-3.5 w-3.5" /> TL;DR — Faits clés
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-5">
              L'essentiel à retenir
            </h2>
            <ul className="space-y-3 text-base md:text-lg leading-relaxed text-slate-800 list-disc pl-5">
              <li>
                <strong>Date de la première ascension absolue :</strong> 8 août
                1786.
              </li>
              <li>
                <strong>Premiers vainqueurs :</strong> Jacques Balmat (chasseur
                de chamois et cristallier) et le Docteur Michel Paccard.
              </li>
              <li>
                <strong>Première femme au sommet :</strong> Marie Paradis en
                1808.
              </li>
              <li>
                <strong>
                  Record de vitesse (Aller-retour Chamonix-Sommet) :
                </strong>{" "}
                4h 57min 40s par Kilian Jornet en 2013 (à pied).
              </li>
              <li>
                <strong>Record de vitesse à ski :</strong> 4h 20min par Mathéo
                Jacquemoud en 2023.
              </li>
            </ul>
          </aside>
        </section>

        {/* Timeline */}
        <section className="container-prose pb-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
            Frise Chronologique de la Conquête
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <span
              aria-hidden
              className="absolute left-4 top-2 bottom-2 w-1 bg-slate-200 rounded-full"
            />

            <div className="relative">
              {timelineEvents.map((e) => (
                <TimelineItem
                  key={e.date}
                  date={e.date}
                  title={e.title}
                  text={e.text}
                />
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default History;
