import ContentPage from "@/components/ContentPage";

const Altitude = () => (
  <ContentPage
    slug="altitude-mont-blanc"
    title="Altitude et mal aigu des montagnes au Mont Blanc"
    metaTitle="Altitude au Mont Blanc : acclimatation et mal aigu des montagnes"
    metaDescription="Comprendre l'altitude au Mont Blanc : hypoxie, acclimatation, symptômes du mal aigu des montagnes, fatigue, sommeil, rythme et décision de redescendre."
    intro={
      <p>
        Le sommet du Mont Blanc dépasse 4 800 m. À cette altitude, l'organisme dispose de moins
        d'oxygène qu'en vallée. Même une personne sportive peut être ralentie, essoufflée ou touchée
        par le mal aigu des montagnes si l'acclimatation est insuffisante.
      </p>
    }
    sections={[
      { title: "Hypoxie", body: <p>La pression partielle en oxygène diminue avec l'altitude. Au sommet, l'organisme dispose d'environ la moitié de l'oxygène disponible au niveau de la mer.</p> },
      { title: "Acclimatation", body: <p>L'acclimatation se construit par une exposition progressive à l'altitude : nuits en refuge, courses à 3 500–4 000 m, montée par paliers.</p> },
      { title: "Maux de tête", body: <p>Premier signe possible du mal aigu des montagnes. Ne jamais le banaliser, surtout s'il s'aggrave.</p> },
      { title: "Nausées", body: <p>Signal d'une mauvaise tolérance à l'altitude. Doit conduire à ralentir, voire à interrompre la progression.</p> },
      { title: "Fatigue anormale", body: <p>Une fatigue disproportionnée à l'effort peut traduire une hypoxie mal compensée.</p> },
      { title: "Essoufflement", body: <p>Un essoufflement marqué au repos est un signal préoccupant.</p> },
      { title: "Troubles du sommeil", body: <p>Apnées, réveils, nuits hachées sont fréquents en altitude et fragilisent l'organisme.</p> },
      { title: "Perte d'appétit", body: <p>Réduit l'apport énergétique au moment où le corps en a le plus besoin.</p> },
      { title: "Quand redescendre", body: <p>Aggravation des symptômes, confusion, essoufflement au repos : la descente est la seule réponse fiable.</p> },
    ]}
    table={{
      headers: ["Symptôme", "Signification possible", "Réaction prudente"],
      rows: [
        ["Maux de tête", "Début possible de mal aigu des montagnes", "Ralentir, surveiller, ne pas banaliser."],
        ["Nausées", "Mauvaise tolérance à l'altitude", "Prévenir le guide, envisager la descente."],
        ["Fatigue inhabituelle", "Effort mal toléré ou hypoxie", "Réduire l'effort, évaluer lucidement."],
        ["Confusion", "Signal grave potentiel", "Descente et secours si nécessaire."],
        ["Essoufflement au repos", "Signal préoccupant", "Ne pas poursuivre sans avis compétent."],
      ],
    }}
    internalLinks={[
      { to: "/preparer-le-mont-blanc", label: "Préparer l'ascension" },
      { to: "/securite", label: "Sécurité" },
    ]}
  />
);

export default Altitude;
