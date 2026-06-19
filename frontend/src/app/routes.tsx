import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "@/features/marketing/pages/Index";
import Categories from "@/features/marketing/pages/Categories";
import Samples from "@/features/marketing/pages/Samples";
import FAQ from "@/features/marketing/pages/FAQ";
import Contact from "@/features/marketing/pages/Contact";
import InvitationWebsite from "@/features/marketing/pages/InvitationWebsite";
import PrivacyPolicy from "@/features/marketing/pages/PrivacyPolicy";
import TermsOfService from "@/features/marketing/pages/TermsOfService";
import NotFound from "@/features/marketing/pages/NotFound";

const DemoHome = lazy(() => import("@/features/invitation-portal/DemoHome"));
const DemoEvent = lazy(() => import("@/features/invitation-portal/DemoEvent"));
const DemoSaveTheDate = lazy(() => import("@/features/invitation-portal/DemoSaveTheDate"));
const DemoVenueTravel = lazy(() => import("@/features/invitation-portal/DemoVenueTravel"));
const DemoGallery = lazy(() => import("@/features/invitation-portal/DemoGallery"));
const DemoRSVP = lazy(() => import("@/features/invitation-portal/DemoRSVP"));
const DemoDashboard = lazy(() => import("@/features/invitation-portal/DemoDashboard"));

const DemoLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4" />
      <p className="text-[#1A1A2E]">Loading demo...</p>
    </div>
  </div>
);

export function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/invitations" element={<Categories />} />
          {/* Legacy SEO alias — same page as /invitations */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/invitation-website" element={<InvitationWebsite />} />
          <Route
            path="/invitation-website/demo"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoHome />
              </Suspense>
            }
          />
          <Route
            path="/invitation-website/demo/events/:slug"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoEvent />
              </Suspense>
            }
          />
          <Route
            path="/invitation-website/demo/save-the-date"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoSaveTheDate />
              </Suspense>
            }
          />
          <Route
            path="/invitation-website/demo/venue-travel"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoVenueTravel />
              </Suspense>
            }
          />
          <Route
            path="/invitation-website/demo/gallery"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoGallery />
              </Suspense>
            }
          />
          <Route
            path="/invitation-website/demo/rsvp"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoRSVP />
              </Suspense>
            }
          />
          <Route
            path="/invitation-website/demo/dashboard"
            element={
              <Suspense fallback={<DemoLoader />}>
                <DemoDashboard />
              </Suspense>
            }
          />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
