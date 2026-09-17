import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "@/features/marketing/pages/Index";
import Invitations from "@/features/marketing/pages/Invitations";
import FAQ from "@/features/marketing/pages/FAQ";
import Contact from "@/features/marketing/pages/Contact";
import PrivacyPolicy from "@/features/marketing/pages/PrivacyPolicy";
import TermsOfService from "@/features/marketing/pages/TermsOfService";
import About from "@/features/marketing/pages/About";
import InvitationCategory from "@/features/marketing/pages/InvitationCategory";
import Landing from "@/features/marketing/pages/Landing";
import NotFound from "@/features/marketing/pages/NotFound";
import { DIGITAL_INVITE_CARDS_URL, DIGITAL_INVITE_TEMPLATES_URL } from "@/lib/site";

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

/** Preserve hash when redirecting legacy sample/category URLs. */
function LegacyRedirect({ to }: { to: string }) {
  const location = useLocation();
  return <Navigate to={`${to}${location.hash}`} replace />;
}

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

function DemoNoIndex() {
  const location = useLocation();
  if (!location.pathname.startsWith("/invitation-website/demo")) return null;
  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
}

export function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <DemoNoIndex />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="/invitations/:category" element={<InvitationCategory />} />
          {/* Legacy aliases */}
          <Route path="/invitation" element={<LegacyRedirect to="/invitations" />} />
          <Route path="/samples" element={<LegacyRedirect to="/invitations" />} />
          <Route path="/categories" element={<LegacyRedirect to="/invitations" />} />
          <Route path="/invitation-website" element={<ExternalRedirect to={DIGITAL_INVITE_TEMPLATES_URL} />} />
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
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<ExternalRedirect to={DIGITAL_INVITE_CARDS_URL} />} />
          <Route path="/digital-cards" element={<ExternalRedirect to={DIGITAL_INVITE_CARDS_URL} />} />
          <Route path="/diy-wedding-website" element={<ExternalRedirect to={DIGITAL_INVITE_TEMPLATES_URL} />} />
          <Route path="/templates" element={<ExternalRedirect to={DIGITAL_INVITE_TEMPLATES_URL} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/:slug" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
