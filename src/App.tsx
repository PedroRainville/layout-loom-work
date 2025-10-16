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
import MyConnections from "./pages/MyConnections";
import InvitesReceived from "./pages/InvitesReceived";
import Partners from "./pages/Partners";
import RegisteredPartners from "./pages/RegisteredPartners";
import PropertiesForSale from "./pages/PropertiesForSale";
import PropertyDetail from "./pages/PropertyDetail";
import MyProperties from "./pages/MyProperties";
import EditProperty from "./pages/EditProperty";
import SaleInformation from "./pages/SaleInformation";
import ChoosePartnerType from "./pages/ChoosePartnerType";
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
          <Route path="/my-connections" element={<MyConnections />} />
          <Route path="/invites-received" element={<InvitesReceived />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/registered-partners" element={<RegisteredPartners />} />
          <Route path="/properties" element={<PropertiesForSale />} />
          <Route path="/property-detail" element={<PropertyDetail />} />
          <Route path="/my-properties" element={<MyProperties />} />
          <Route path="/edit-property" element={<EditProperty />} />
          <Route path="/sale-information" element={<SaleInformation />} />
          <Route path="/choose-partner-type" element={<ChoosePartnerType />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
