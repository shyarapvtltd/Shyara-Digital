import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Samples from "./pages/Samples";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import InvitationWebsite from "./pages/InvitationWebsite";
import NotFound from "./pages/NotFound";

const DemoHome = lazy(() => import("./pages/invitation-demo/DemoHome"));
const DemoEvent = lazy(() => import("./pages/invitation-demo/DemoEvent"));
const DemoSaveTheDate = lazy(() => import("./pages/invitation-demo/DemoSaveTheDate"));
const DemoVenueTravel = lazy(() => import("./pages/invitation-demo/DemoVenueTravel"));
const DemoGallery = lazy(() => import("./pages/invitation-demo/DemoGallery"));
const DemoRSVP = lazy(() => import("./pages/invitation-demo/DemoRSVP"));
const DemoDashboard = lazy(() => import("./pages/invitation-demo/DemoDashboard"));

const DemoLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4" />
      <p className="text-[#1A1A2E]">Loading demo...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/invitations" element={<Categories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/invitation-website" element={<InvitationWebsite />} />
          <Route path="/invitation-website/demo" element={<Suspense fallback={<DemoLoader />}><DemoHome /></Suspense>} />
          <Route path="/invitation-website/demo/events/:slug" element={<Suspense fallback={<DemoLoader />}><DemoEvent /></Suspense>} />
          <Route path="/invitation-website/demo/save-the-date" element={<Suspense fallback={<DemoLoader />}><DemoSaveTheDate /></Suspense>} />
          <Route path="/invitation-website/demo/venue-travel" element={<Suspense fallback={<DemoLoader />}><DemoVenueTravel /></Suspense>} />
          <Route path="/invitation-website/demo/gallery" element={<Suspense fallback={<DemoLoader />}><DemoGallery /></Suspense>} />
          <Route path="/invitation-website/demo/rsvp" element={<Suspense fallback={<DemoLoader />}><DemoRSVP /></Suspense>} />
          <Route path="/invitation-website/demo/dashboard" element={<Suspense fallback={<DemoLoader />}><DemoDashboard /></Suspense>} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
