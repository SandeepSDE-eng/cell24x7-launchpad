import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Channels from "./pages/Channels";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";
import Company from "./pages/Company";
import Partners from "./pages/Partners";
import Integrations from "./pages/Integrations";
import Resources from "./pages/Resources";
import BookDemo from "./pages/BookDemo";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Feature pages
import UnifiedInbox from "./pages/features/UnifiedInbox";
import AIAutomation from "./pages/features/AIAutomation";
import Campaigns from "./pages/features/Campaigns";
import Analytics from "./pages/features/Analytics";

// Channel pages
import SMS from "./pages/channels/SMS";
import RCS from "./pages/channels/RCS";
import WhatsApp from "./pages/channels/WhatsApp";
import Email from "./pages/channels/Email";
import VoiceBot from "./pages/channels/VoiceBot";
import CustomApplication from "./pages/channels/CustomApplication";
import DLT from "./pages/channels/DLT";

// Use case pages
import Ecommerce from "./pages/usecases/Ecommerce";
import Healthcare from "./pages/usecases/Healthcare";
import Education from "./pages/usecases/Education";
import RealEstate from "./pages/usecases/RealEstate";

// Company pages
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Blog from "./pages/company/Blog";
import useAutoTheme from "./hooks/useAutoTheme";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  useAutoTheme();
  useEffect(() => {
    // Change background and text color of body for full-site effect
    const root = document.documentElement;
    const body = document.body;
    body.style.backgroundColor = getComputedStyle(root).getPropertyValue('--color-primary');
    body.style.color = '#fff'; // or choose a contrasting color
    return () => {
      body.style.backgroundColor = '';
      body.style.color = '';
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/company" element={<Company />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/admin" element={/* Admin dashboard — demo-only */ <Admin />} />
            
            {/* Feature pages */}
            <Route path="/features/unified-inbox" element={<UnifiedInbox />} />
            <Route path="/features/ai-automation" element={<AIAutomation />} />
            <Route path="/features/campaigns" element={<Campaigns />} />
            <Route path="/features/analytics" element={<Analytics />} />
            
            {/* Channel pages */}
            <Route path="/channels/sms" element={<SMS />} />
            <Route path="/channels/rcs" element={<RCS />} />
            <Route path="/channels/whatsapp" element={<WhatsApp />} />
            <Route path="/channels/email" element={<Email />} />
            <Route path="/channels/voicebot" element={<VoiceBot />} />
            <Route path="/channels/custom" element={<CustomApplication />} />
            <Route path="/channels/dlt" element={<DLT />} />
            
            {/* Use case pages */}
            <Route path="/use-cases/ecommerce" element={<Ecommerce />} />
            <Route path="/use-cases/healthcare" element={<Healthcare />} />
            <Route path="/use-cases/education" element={<Education />} />
            <Route path="/use-cases/real-estate" element={<RealEstate />} />
            
            {/* Company pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Legal pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
