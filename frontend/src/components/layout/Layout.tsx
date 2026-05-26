import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingElements from "./FloatingElements";
import PageTransition from "./PageTransition";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <FloatingElements />
      <Navbar />
      <main className="flex-1 relative z-10">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
