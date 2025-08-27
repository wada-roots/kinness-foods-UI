import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAutoScrollTop from "./hooks/useAutoScrollTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Divisions from "./pages/Divisions";
import BakeryDivision from "./pages/divisions/BakeryDivision";
import RestaurantDivision from "./pages/divisions/RestaurantDivision";
import FactoryDivision from "./pages/divisions/FactoryDivision";
import ConsultingDivision from "./pages/divisions/ConsultingDivision";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useAutoScrollTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/divisions" element={<Divisions />} />
      <Route path="/divisions/bakery" element={<BakeryDivision />} />
      <Route path="/divisions/restaurant" element={<RestaurantDivision />} />
      <Route path="/divisions/factory" element={<FactoryDivision />} />
      <Route path="/divisions/consulting" element={<ConsultingDivision />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
