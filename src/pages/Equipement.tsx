import SEO from "@/components/SEO";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const checklist = [
  { cat: "Vêtements", item: "Veste imperméable respirante", why: "Protection contre la pluie, la neige et le vent." },
  { cat: "Vêtements", item: "Couche thermique (mérinos ou synthétique)", why: "Maintenir la chaleur corporelle pendant l'effort." },
  { cat: "Vêtements", item: "Doudoune", why: "Isolation pour les pauses, l'attente et le sommet." },
  { cat: "Vêtements", item: "Pantalon d'alpinisme", why: "Liberté de mouvement, protection vent et froid, compatibilité crampons." },
  { cat: "Accessoires", item: "Gants chauds + gants techniques", why: "Manipulation, isolation, protection contre les engelures." },
  { cat: "Accessoires", item: "Bonnet et tour de cou", why: "Protection thermique du visage et de la tête." },
  { cat: "Accessoires", item: "Lunettes catégorie 4", why: "Filtrer le rayonnement intense en haute altitude." },
  { cat: "Technique", item: "Chaussures cramponnables", why: "Compatibles avec les crampons et adaptées au froid." },
  { cat: "Technique", item: "Crampons", why: "Progression sur neige dure et glace." },
  { cat: "Technique", item: "Piolet", why: "Équilibre, progression et manœuvres de sécurité." },
  { cat: "Technique", item: "Casque", why: "Protection contre les chutes de pierres ou de glace." },
  { cat: "Technique", item: "Baudrier", why: "Encordement et manœuvres sur glacier." },
  { cat: "Sécurité", item: "Lampe frontale", why: "Indispensable pour les départs de nuit." },
  { cat: "Sécurité", item: "Sac à dos adapté", why: "Porter le matériel sans gêner la progression." },
  { cat: "Vital", item: "Eau et nutrition", why: "Maintenir l'énergie et l'hydratation à l'effort." },
  { cat: "Vital", item: "Pharmacie minimale", why: "Petits soins, ampoules, douleurs, urgences." },
];

const sections = [
  { title: "Système trois couches", body: "Première couche respirante, deuxième couche isolante, couche externe coupe-vent et imperméable." },
  { title: "Veste imperméable respirante", body: "Protection contre les intempéries tout en évacuant la transpiration." },
  { title: "Couche thermique", body: "Mérinos ou synthétique pour maintenir la chaleur même humide." },
  { title: "Doudoune", body: "Plumes ou synthétique selon humidité ; indispensable au sommet et lors des pauses." },
  { title: "Pantalon d'alpinisme", body: "Souple, résistant, déperlant, compatible avec crampons." },
  { title: "Gants", body: "Au moins deux paires : une fine pour la manipulation, une chaude pour l'altitude." },
  { title: "Lunettes catégorie 4", body: "Le rayonnement à haute altitude est extrême ; protection oculaire indispensable." },
  { title: "Crampons, piolet, casque", body: "Matériel technique de base. Doivent être adaptés à la chaussure et maîtrisés." },
];

const faqs = [
  { q: "Quel pantalon pour le Mont Blanc ?", a: "Un pantalon d'alpinisme doit permettre la liberté de mouvement, la protection contre le vent et le froid, et rester compatible avec l'usage de crampons et de chaussures de montagne." },
  { q: "Faut-il une doudoune ?", a: "Oui, une isolation thermique est fortement recommandée pour les pauses, l'attente, le sommet et les conditions froides." },
  { q: "Peut-on monter avec des vêtements de randonnée classiques ?", a: "Non, l'ascension du Mont Blanc demande un équipement de haute montagne adapté au froid, au vent, à la neige, à la glace et à l'altitude." },
];

const Equipement = () => {
  const url = "https://www.ascensionmontblanc.fr/equipement";
  return (
    <>
      <SEO
        title="Équipement pour l'ascension du Mont Blanc"
        description="Checklist équipement Mont Blanc : vêtements techniques, veste, pantalon d'alpinisme, doudoune, gants, crampons, piolet, casque, baudrier, lunettes et sac."
        canonical={url}
        jsonLd={[
          articleJsonLd({ headline: "Équipement pour l'ascension du Mont Blanc", url }),
          breadcrumbJsonLd([{ name: "Accueil", url: "/" }, { name: "Équipement", url: "/equipement" }]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="bg-gradient-glacier border-b border-border">
        <div className="container-prose py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary tracking-tight">
            Équipement pour l'ascension du Mont Blanc
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80">
            L'équipement pour le Mont Blanc doit répondre aux contraintes de la
            haute montagne : froid, vent, rayonnement, neige, glace, effort
            prolongé, attente, altitude et météo instable. Le bon équipement ne
            remplace pas l'expérience ni le guide, mais il contribue
            directement au confort, à la sécurité et à la lucidité de la cordée.
          </p>
        </div>
      </section>

      <section className="container-prose py-16 space-y-6">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">{s.title}</h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">{s.body}</p>
          </div>
        ))}
      </section>

      <section className="container-prose pb-12">
        <div className="rounded-2xl bg-accent/40 border border-accent p-6 md:p-8">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-3">Cimalp</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/85">
            Cimalp, marque française outdoor née dans l'univers de la montagne,
            conçoit des vêtements techniques pensés pour l'effort, la
            protection et la durabilité en conditions alpines. Dans une
            préparation au Mont Blanc, Cimalp peut naturellement s'inscrire
            dans la réflexion sur les couches vestimentaires, la respirabilité,
            la protection contre le vent et l'humidité, l'isolation thermique
            et la liberté de mouvement.
          </p>
        </div>
      </section>

      <section className="container-wide pb-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-6">Checklist équipement</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-accent text-accent-foreground">
              <tr>
                <th className="text-left p-3 font-semibold">Catégorie</th>
                <th className="text-left p-3 font-semibold">Équipement</th>
                <th className="text-left p-3 font-semibold">Pourquoi c'est important</th>
              </tr>
            </thead>
            <tbody>
              {checklist.map((c, i) => (
                <tr key={c.item} className={i % 2 ? "bg-muted/30" : "bg-card"}>
                  <td className="p-3 font-medium text-primary">{c.cat}</td>
                  <td className="p-3 text-foreground/85">{c.item}</td>
                  <td className="p-3 text-foreground/75">{c.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-prose pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-5">FAQ équipement</h2>
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`e-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-foreground/85">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <ExternalResources
        resources={externalResources}
        title="Marques et ressources équipement"
        categoryFilter={["Équipement"]}
      />
    </>
  );
};

export default Equipement;
