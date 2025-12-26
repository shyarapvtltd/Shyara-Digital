import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

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
              Creating beautiful, emotional digital invitations for your most precious moments. Made with love.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-rose-light/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-rose-light/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-rose-light/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Invitations", "Formats", "Samples", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : item === "Invitations" ? "/categories" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Invitation Types */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-foreground">Invitation Types</h4>
            <ul className="space-y-3">
              {["Weddings", "Pooja & Religious", "Birthdays", "Romantic Moments", "Special Days"].map((item) => (
                <li key={item}>
                  <Link 
                    to="/categories"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                    {item}
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
                <a href="mailto:shyaradigital@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">shyaradigital@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href="tel:+919584661610" className="text-muted-foreground hover:text-primary transition-colors">+91 95846 61610</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rose-light/30 pt-8 pb-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shyara Digital. Crafted with{" "}
            <Heart className="inline w-4 h-4 text-primary fill-primary animate-heart-pulse" />{" "}
            for your special moments.
          </p>
          <p className="text-muted-foreground text-sm pr-20">
            A brand by{" "}
            <span className="text-primary font-medium">Shyara Tech Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
