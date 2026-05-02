import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Gouter from "./pages/voies/Gouter";
import TroisMonts from "./pages/voies/TroisMonts";
import Gonella from "./pages/voies/Gonella";
import Securite from "./pages/Securite";
import GuidesDirectory from "./pages/GuidesDirectory";
import GuideProfile from "./pages/GuideProfile";
import History from "./pages/History";
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
              <Route path="/voies/gouter" element={<Gouter />} />
              <Route path="/voies/3-monts" element={<TroisMonts />} />
              <Route path="/voies/gonella" element={<Gonella />} />
              <Route path="/securite" element={<Securite />} />
              <Route path="/guides" element={<GuidesDirectory />} />
              <Route path="/guides/:slug" element={<GuideProfile />} />
              <Route path="/histoire" element={<History />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
