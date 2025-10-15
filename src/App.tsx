import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignupConfirmation from "./pages/SignupConfirmation";
import Reports from "./pages/Reports";
import ProfilePhoto from "./pages/ProfilePhoto";
import PartnerRegister from "./pages/PartnerRegister";
import PartnerEdit from "./pages/PartnerEdit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup-confirmation" element={<SignupConfirmation />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile-photo" element={<ProfilePhoto />} />
          <Route path="/partner-register" element={<PartnerRegister />} />
          <Route path="/partner-edit" element={<PartnerEdit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
