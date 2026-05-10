import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Voies from "./pages/Voies";
import Gouter from "./pages/voies/Gouter";
import TroisMonts from "./pages/voies/TroisMonts";
import Gonella from "./pages/voies/Gonella";
import GrandsMulets from "./pages/voies/GrandsMulets";
import MiageBionnassay from "./pages/voies/MiageBionnassay";
import Brenva from "./pages/voies/Brenva";
import Peuterey from "./pages/voies/Peuterey";
import Innominata from "./pages/voies/Innominata";
import Brouillard from "./pages/voies/Brouillard";
import VoieMajor from "./pages/voies/VoieMajor";
import Securite from "./pages/Securite";
import GuidesDirectory from "./pages/GuidesDirectory";
import GuideProfile from "./pages/GuideProfile";
import GuidesMethodology from "./pages/GuidesMethodology";
import History from "./pages/History";
import Faces from "./pages/Faces";
import Refuges from "./pages/Refuges";
import Preparation from "./pages/Preparation";
import Equipement from "./pages/Equipement";
import Sources from "./pages/Sources";
import Glossaire from "./pages/Glossaire";
import Contact from "./pages/Contact";
import About from "./pages/About";
import JacquesBalmat from "./pages/history/JacquesBalmat";
import MichelPaccard from "./pages/history/MichelPaccard";
import Saussure from "./pages/history/Saussure";
import MarieParadis from "./pages/history/MarieParadis";
import HenrietteDangeville from "./pages/history/HenrietteDangeville";
import JosephVallot from "./pages/history/JosephVallot";
import VoieNormaleBlog from "./pages/blog/VoieNormale";
import ChecklistBlog from "./pages/blog/ChecklistEquipement";
import SePreparerBlog from "./pages/blog/SePreparer";
import CramponsBlog from "./pages/blog/Crampons";
import PantalonsBlog from "./pages/blog/Pantalons";
import PreparerLeMontBlanc from "./pages/PreparerLeMontBlanc";
import SuisJePret from "./pages/SuisJePret";
import ErreursFrequentes from "./pages/ErreursFrequentes";
import Saisons from "./pages/Saisons";
import Meteo from "./pages/Meteo";
import Altitude from "./pages/Altitude";
import Acces from "./pages/Acces";
import Secours from "./pages/Secours";
import GouterVs3Monts from "./pages/GouterVs3Monts";
import GouterVsGonella from "./pages/GouterVsGonella";
import AvecOuSansGuide from "./pages/AvecOuSansGuide";
import RefugeGouterVsTeteRousse from "./pages/RefugeGouterVsTeteRousse";
import QuelSac from "./pages/QuelSac";
import QuelPantalon from "./pages/QuelPantalon";
import QuelleVeste from "./pages/QuelleVeste";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/voies" element={<Voies />} />
              <Route path="/voies/gouter" element={<Gouter />} />
              <Route path="/voies/3-monts" element={<TroisMonts />} />
              <Route path="/voies/gonella" element={<Gonella />} />
              <Route path="/voies/grands-mulets" element={<GrandsMulets />} />
              <Route path="/voies/miage-bionnassay" element={<MiageBionnassay />} />
              <Route path="/voies/brenva" element={<Brenva />} />
              <Route path="/voies/peuterey" element={<Peuterey />} />
              <Route path="/voies/innominata" element={<Innominata />} />
              <Route path="/voies/brouillard" element={<Brouillard />} />
              <Route path="/voies/voie-major" element={<VoieMajor />} />
              <Route path="/faces" element={<Faces />} />
              <Route path="/refuges" element={<Refuges />} />
              <Route path="/preparation" element={<Preparation />} />
              <Route path="/equipement" element={<Equipement />} />
              <Route path="/securite" element={<Securite />} />
              <Route path="/guides" element={<GuidesDirectory />} />
              <Route path="/guides/methodologie" element={<GuidesMethodology />} />
              <Route path="/guides/:slug" element={<GuideProfile />} />
              <Route path="/histoire" element={<History />} />
              <Route path="/histoire/jacques-balmat" element={<JacquesBalmat />} />
              <Route path="/histoire/michel-gabriel-paccard" element={<MichelPaccard />} />
              <Route path="/histoire/horace-benedict-de-saussure" element={<Saussure />} />
              <Route path="/histoire/marie-paradis" element={<MarieParadis />} />
              <Route path="/histoire/henriette-dangeville" element={<HenrietteDangeville />} />
              <Route path="/histoire/joseph-vallot" element={<JosephVallot />} />
              <Route path="/glossaire" element={<Glossaire />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog/la-voie-normale-du-mont-blanc" element={<VoieNormaleBlog />} />
              <Route path="/blog/checklist-equipement-lascension-mont-blanc" element={<ChecklistBlog />} />
              <Route path="/blog/se-preparer-a-lascension-du-mont-blanc" element={<SePreparerBlog />} />
              <Route path="/blog/crampons-piolets-et-cordes" element={<CramponsBlog />} />
              <Route path="/blog/les-meilleurs-pantalons-dalpinisme" element={<PantalonsBlog />} />
              <Route path="/preparer-le-mont-blanc" element={<PreparerLeMontBlanc />} />
              <Route path="/suis-je-pret-pour-le-mont-blanc" element={<SuisJePret />} />
              <Route path="/erreurs-frequentes-mont-blanc" element={<ErreursFrequentes />} />
              <Route path="/saisons-ascension-mont-blanc" element={<Saisons />} />
              <Route path="/meteo-mont-blanc" element={<Meteo />} />
              <Route path="/altitude-mont-blanc" element={<Altitude />} />
              <Route path="/acces-mont-blanc" element={<Acces />} />
              <Route path="/secours-assurance-mont-blanc" element={<Secours />} />
              <Route path="/gouter-vs-3-monts" element={<GouterVs3Monts />} />
              <Route path="/gouter-vs-gonella" element={<GouterVsGonella />} />
              <Route path="/avec-ou-sans-guide" element={<AvecOuSansGuide />} />
              <Route path="/refuge-gouter-vs-tete-rousse" element={<RefugeGouterVsTeteRousse />} />
              <Route path="/quel-sac-pour-le-mont-blanc" element={<QuelSac />} />
              <Route path="/quel-pantalon-pour-le-mont-blanc" element={<QuelPantalon />} />
              <Route path="/quelle-veste-pour-le-mont-blanc" element={<QuelleVeste />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
