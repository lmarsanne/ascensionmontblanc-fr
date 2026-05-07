import BlogRedirect from "@/components/BlogRedirect";
const About = () => (
  <BlogRedirect
    slug="about"
    title="À propos d'AscensionMontBlanc.fr"
    description="AscensionMontBlanc.fr est un site indépendant dédié à l'ascension du Mont Blanc."
    canonical="https://www.ascensionmontblanc.fr/sources"
    targetLabel="Sources et méthodologie"
    targetTo="/sources"
    body="AscensionMontBlanc.fr est un site indépendant. Notre méthodologie et nos sources sont détaillées sur la page Sources."
  />
);
export default About;
