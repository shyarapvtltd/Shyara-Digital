import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Invitations", path: "/categories" },
  { name: "Formats", path: "/formats" },
  { name: "Samples", path: "/samples" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-background/90 backdrop-blur-lg shadow-lg py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <Heart className="w-7 h-7 text-primary fill-primary/20 group-hover:fill-primary/40 transition-all group-hover:scale-110 group-hover:animate-heart-pulse" />
            <span className="font-serif text-2xl font-semibold text-foreground">
              Shyara <span className="text-primary">Digital</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-medium transition-colors hover:text-primary",
                  location.pathname === link.path 
                    ? "text-primary" 
                    : "text-foreground/80"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild className="rounded-full px-6 shadow-romantic hover:shadow-lg transition-all hover:-translate-y-0.5">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
          {/* Decorative Hearts */}
          <Heart className="absolute top-20 left-10 w-8 h-8 text-rose-light/30 animate-float fill-rose-light/10" />
          <Heart className="absolute bottom-32 right-12 w-6 h-6 text-peach/30 animate-float-slow fill-peach/10" />
          
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-3xl font-serif font-medium transition-all hover:text-primary hover:scale-105",
                location.pathname === link.path ? "text-primary" : "text-foreground/80"
              )}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isOpen ? "fade-in-up 0.5s ease-out forwards" : "none"
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <Button 
            asChild 
            size="lg" 
            className="mt-4 rounded-full px-8 shadow-romantic text-lg"
            style={{ 
              animationDelay: "0.5s",
              animation: isOpen ? "fade-in-up 0.5s ease-out forwards" : "none"
            }}
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
