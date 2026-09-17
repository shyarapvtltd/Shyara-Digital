import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import {
  CONTACT,
  DIGITAL_INVITE_CARDS_URL,
  DIGITAL_INVITE_TEMPLATES_URL,
  DIGITAL_INVITE_URL,
  LEGAL_CITY,
  LEGAL_NAME,
  LEGAL_REGION,
} from "@/lib/site";
import { EXPLORE_LANDING_SLUGS, getLandingPage } from "@/lib/landing";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-rose-light/20 pt-16 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-peach/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-lavender/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Heart className="w-6 h-6 text-primary fill-primary/30 group-hover:animate-heart-pulse" />
              <span className="font-serif text-xl font-semibold">
                Shyara <span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Custom digital invitation videos, cards and websites. Made with love in {LEGAL_CITY}, {LEGAL_REGION}.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/shyaradigital" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-rose-light/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/shyaradigital" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-rose-light/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@Shyaradigital" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-rose-light/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Invitations", path: "/invitations" },
                { name: "Invitation Website", href: DIGITAL_INVITE_TEMPLATES_URL },
                { name: "Cards", href: DIGITAL_INVITE_CARDS_URL },
                { name: "About", path: "/about" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path ?? "/"}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Invitation Types */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Invitation Types</h4>
            <ul className="space-y-3">
              {[
                { name: "Wedding", path: "/invitations/wedding" },
                { name: "Engagement", path: "/invitations/engagement" },
                { name: "Save The Date", path: "/invitations/save-the-date" },
                { name: "Baby Shower", path: "/invitations/baby-shower" },
                { name: "Birthday", path: "/invitations/birthday" },
                { name: "House Warming", path: "/invitations/house-warming" },
                { name: "Proposal", path: "/invitations/proposal" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href={`mailto:${CONTACT.email}`} className="text-muted-foreground hover:text-primary transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href={`tel:${CONTACT.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{CONTACT.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">{LEGAL_CITY}, {LEGAL_REGION}, India</span>
              </li>
            </ul>
            <div className="pt-2">
              <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Also from Shyara</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={DIGITAL_INVITE_URL} className="text-muted-foreground hover:text-primary transition-colors">Digital Invite</a>
                </li>
                <li>
                  <a href={DIGITAL_INVITE_TEMPLATES_URL} className="text-muted-foreground hover:text-primary transition-colors">Wedding invitation websites</a>
                </li>
                <li>
                  <a href={DIGITAL_INVITE_CARDS_URL} className="text-muted-foreground hover:text-primary transition-colors">DIY wedding cards</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav aria-label="Explore" className="border-t border-rose-light/30 pt-8 mb-8">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Explore</h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {EXPLORE_LANDING_SLUGS.map((slug) => {
              const page = getLandingPage(slug);
              if (!page) return null;
              return (
                <li key={slug}>
                  <Link to={`/${slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {page.h1}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Bar */}
        <div className="border-t border-rose-light/30 pt-8 pb-16 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-rose-light/50 hidden sm:inline" aria-hidden="true">|</span>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} {LEGAL_NAME}. Shyara Digital. Crafted with{" "}
              <Heart className="inline w-4 h-4 text-primary fill-primary animate-heart-pulse" />{" "}
              for your special moments.
            </p>
            <p className="text-muted-foreground text-sm md:pr-20 text-center md:text-right">
              A brand by{" "}
              <span className="text-primary font-medium">Shyara Tech Solutions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
