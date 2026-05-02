import { Helmet } from "react-helmet-async";
import { AlertTriangle, ShieldAlert, Backpack } from "lucide-react";

const sections = [
  {
    icon: AlertTriangle,
    title: "L'alpinisme comporte des risques mortels.",
    body: (
      <p>
        Le contenu publié sur <strong>ascensionmontblanc.fr</strong> est fourni
        à titre strictement informatif. La haute montagne est un environnement
        non sécurisé, en perpétuelle évolution (météo, conditions glaciaires,
        éboulements). Les descriptions d'itinéraires ne remplacent en aucun cas
        l'expérience, le jugement sur le terrain et la formation technique.
      </p>
    ),
  },
  {
    icon: ShieldAlert,
    title: "L'obligation de moyens et de sécurité.",
    body: (
      <p>
        Il est fortement déconseillé de s'engager sur les pentes du Mont-Blanc
        sans une solide expérience préalable en alpinisme (cramponnage,
        encordement sur glacier, secours en crevasse). Pour les alpinistes
        amateurs ou occasionnels, l'engagement d'un{" "}
        <strong>Guide de Haute Montagne diplômé d'État (UIAGM)</strong> n'est
        pas une option, c'est une <strong>nécessité vitale</strong>.
      </p>
    ),
  },
  {
    icon: Backpack,
    title: "Le matériel n'est pas une garantie.",
    body: (
      <p>
        Posséder l'équipement adéquat (piolet, crampons, casque, corde,
        baudrier, détecteur de victimes d'avalanches) est obligatoire, mais
        savoir s'en servir en condition de stress extrême est fondamental. Les
        conditions météo peuvent changer en quelques minutes, faisant chuter
        les températures ressenties bien en dessous de{" "}
        <strong>-20 °C au sommet</strong>, même en plein mois d'août.
      </p>
    ),
  },
];

const Securite = () => {
  return (
    <>
      <Helmet>
        <title>Sécurité et Danger au Mont Blanc - Mentions Importantes</title>
        <meta
          name="description"
          content="Avertissement sur la sécurité en haute montagne : risques du Mont-Blanc, nécessité d'un Guide de Haute Montagne UIAGM, matériel et préparation indispensables."
        />
        <link rel="canonical" href="https://www.ascensionmontblanc.fr/securite" />
      </Helmet>

      <article>
        <section className="bg-gradient-to-br from-destructive/95 to-primary text-primary-foreground">
          <div className="container-prose py-20 md:py-28">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/80 mb-6">
              <AlertTriangle className="h-3.5 w-3.5" /> Avertissement officiel
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Avertissement sur la Sécurité en Haute Montagne
            </h1>
          </div>
        </section>

        <section className="container-prose py-16 md:py-20 space-y-10">
          {sections.map((s) => (
            <section
              key={s.title}
              className="rounded-2xl border border-border bg-card shadow-card p-8 md:p-10"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary leading-tight">
                  {s.title}
                </h2>
              </div>
              <div className="prose-mb">{s.body}</div>
            </section>
          ))}
        </section>
      </article>
    </>
  );
};

export default Securite;
