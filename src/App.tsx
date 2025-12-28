import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhyChooseUs from "./pages/WhyChooseUs";
import LiveBetting from "./pages/LiveBetting";
import Esports from "./pages/Esports";
import Casino from "./pages/Casino";
import SlotMachines from "./pages/SlotMachines";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* English routes */}
          <Route path="/" element={<Index />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/live-betting" element={<LiveBetting />} />
          <Route path="/esports" element={<Esports />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/slot-machines" element={<SlotMachines />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Polish routes */}
          <Route path="/pl" element={<Index />} />
          <Route path="/pl/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/pl/live-betting" element={<LiveBetting />} />
          <Route path="/pl/esports" element={<Esports />} />
          <Route path="/pl/casino" element={<Casino />} />
          <Route path="/pl/slot-machines" element={<SlotMachines />} />
          <Route path="/pl/faq" element={<FAQ />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
