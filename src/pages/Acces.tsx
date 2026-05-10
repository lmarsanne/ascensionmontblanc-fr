import ContentPage from "@/components/ContentPage";
import ExternalResources from "@/components/ExternalResources";
import { externalResources } from "@/data/externalResources";

const Acces = () => (
  <>
    <ContentPage
      slug="acces-mont-blanc"
      title="Accès et logistique pour l'ascension du Mont Blanc"
      metaTitle="Accès Mont Blanc : Chamonix, Saint-Gervais, Courmayeur, Nid d'Aigle"
      metaDescription="Logistique d'accès pour l'ascension du Mont Blanc : Chamonix, Saint-Gervais, Les Houches, Courmayeur, aiguille du Midi, Nid d'Aigle et Tramway du Mont-Blanc."
      intro={
        <p>
          L'accès au Mont Blanc dépend fortement de la voie choisie. La voie du Goûter s'organise
          depuis Saint-Gervais, Les Houches ou le Nid d'Aigle. Les Trois Monts partent généralement
          de l'aiguille du Midi. Gonella se prépare depuis Courmayeur et le Val Veny.
        </p>
      }
      sections={[
        { title: "1. Chamonix", body: <p>Base historique de l'alpinisme, Chamonix est le point de départ logique pour l'aiguille du Midi, le refuge des Cosmiques, la traversée des Trois Monts et de nombreuses courses d'acclimatation.</p> },
        { title: "2. Saint-Gervais / Le Fayet", body: <p>Saint-Gervais et Le Fayet sont essentiels pour accéder au Tramway du Mont-Blanc, au Nid d'Aigle et à la voie normale du Goûter.</p> },
        { title: "3. Les Houches", body: <p>Les Houches permettent l'accès au secteur Bellevue, souvent utilisé dans l'approche de la voie normale.</p> },
        { title: "4. Courmayeur / Val Veny", body: <p>Courmayeur est la base du versant italien. Le Val Veny donne accès au refuge Gonella et aux itinéraires italiens.</p> },
        { title: "5. Aiguille du Midi", body: <p>L'aiguille du Midi est l'accès clé au refuge des Cosmiques et à la traversée des Trois Monts. Elle impose déjà une arrivée brutale en altitude.</p> },
      ]}
      internalLinks={[
        { to: "/refuges", label: "Refuges du Mont Blanc" },
        { to: "/voies", label: "Toutes les voies" },
      ]}
    />
    <ExternalResources
      resources={externalResources}
      title="Ressources accès et logistique"
      categoryFilter={["Tourisme & accès"]}
    />
  </>
);

export default Acces;
