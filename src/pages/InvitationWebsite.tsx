import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Users,
  CalendarHeart,
  ClipboardCheck,
  LayoutDashboard,
  Image,
  Share2,
  Clock,
  Smartphone,
  Globe,
  Palette,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";

const DEMO_URL = "/invitation-website/demo";
const WHATSAPP_URL =
  "https://wa.me/919584661610?text=" +
  encodeURIComponent(
    "Hi! I saw the Invitation Website showcase on your site. I'd love to get a custom invitation website built for my event!"
  );

const features = [
  {
    icon: Users,
    title: "Personalized Guest Links",
    description:
      "Every guest gets a unique invitation link with their name and personalized greetings — no two invitations are alike.",
  },
  {
    icon: CalendarHeart,
    title: "Beautiful Event Pages",
    description:
      "Themed pages for each ceremony — Mehndi, Wedding, Reception — with custom colors, illustrations, and animations.",
  },
  {
    icon: ClipboardCheck,
    title: "Smart RSVP System",
    description:
      "Guests can RSVP per event, specify attendee counts, and choose menu preferences — all tracked in real time.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Manage guests, view RSVP statistics, import/export Excel lists, and send bulk email invitations from one place.",
  },
  {
    icon: Image,
    title: "Gallery & Venue Info",
    description:
      "Photo gallery with lightbox viewer, venue details with Google Maps embed, and travel/shuttle information.",
  },
  {
    icon: Share2,
    title: "WhatsApp & Email Sharing",
    description:
      "Share invitations instantly via WhatsApp with pre-filled messages, or send beautiful email invitations in bulk.",
  },
  {
    icon: Clock,
    title: "Save the Date Timeline",
    description:
      "An elegant vertical timeline displaying all your events with dates, times, and venue icons at a glance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Fully responsive with touch-friendly navigation, smooth animations, and a native-app feel on every device.",
  },
];

const steps = [
  {
    number: "01",
    icon: Palette,
    title: "Tell Us Your Vision",
    description:
      "Share your event details, colors, photos, and any special preferences. We'll plan the perfect website for you.",
  },
  {
    number: "02",
    icon: Globe,
    title: "We Build It For You",
    description:
      "Our team crafts a fully custom invitation website with themed pages, animations, RSVP, and an admin dashboard.",
  },
  {
    number: "03",
    icon: Send,
    title: "Share With Your Guests",
    description:
      "Get your personalized links and share them via WhatsApp or email. Track RSVPs and manage everything from your dashboard.",
  },
];

const InvitationWebsite = () => {
  return (
    <Layout>
      <SEO
        title="Invitation Websites | Custom Event Websites | Shyara Digital"
        description="Go beyond video invitations with a complete invitation website. Personalized guest links, themed event pages, RSVP system, admin dashboard, and more — all built custom for your celebration."
        keywords="invitation website, wedding website, event website, custom wedding site, RSVP website, digital invitation website, online wedding invitation, guest management, wedding dashboard, wedding website builder, custom wedding website, wedding RSVP website, online wedding invitation website with guest management, wedding website with event pages, wedding website with mehndi page, wedding website maker, mehndi invitation, reception invitation, wedding RSVP online"
        canonicalUrl="https://digital.shyara.co.in/invitation-website"
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "https://digital.shyara.co.in" },
          {
            name: "Invitation Website",
            url: "https://digital.shyara.co.in/invitation-website",
          },
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Invitation Website",
            "description": "Fully custom invitation websites with personalized guest links, themed event pages, RSVP system, admin dashboard, gallery, and more.",
            "provider": {
              "@type": "Organization",
              "name": "Shyara Digital",
              "url": "https://digital.shyara.co.in"
            },
            "serviceType": "Web Development",
            "areaServed": "Worldwide"
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Custom Wedding Invitation Website",
            "description": "Complete wedding invitation website with personalized guest links, themed event pages (Mehndi, Wedding, Reception), smart RSVP system, admin dashboard with guest management, photo gallery, venue info, and WhatsApp sharing.",
            "brand": {
              "@type": "Brand",
              "name": "Shyara Digital"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://digital.shyara.co.in/invitation-website",
              "seller": {
                "@type": "Organization",
                "name": "Shyara Digital"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50",
              "bestRating": "5"
            },
            "category": "Digital Invitation Services"
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-lavender/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-rose/10 blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full bg-gold/5 blur-3xl animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="font-script text-2xl md:text-3xl text-primary mb-4 block opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Beyond Video Invitations
            </span>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Invitation{" "}
              <span className="text-gradient">Websites</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up max-w-2xl mx-auto"
              style={{ animationDelay: "0.6s" }}
            >
              A complete, personalized website for your celebration — with
              beautiful event pages, smart RSVP tracking, guest management, and
              so much more.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Card Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative group rounded-3xl overflow-hidden shadow-romantic hover:shadow-lg transition-all duration-500 bg-gradient-to-br from-white/80 via-white/60 to-rose-light/20 border border-white/50 backdrop-blur-sm">
                {/* Browser Mockup Frame */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-200/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/80 rounded-full px-4 py-1 text-xs text-muted-foreground text-center font-mono truncate">
                      demo.weddingwebsite.com
                    </div>
                  </div>
                </div>

                {/* Website Preview Area */}
                <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFFEF7] via-[#FFF5F5] to-[#F5F0E8]">
                    {/* Decorative mockup content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37] fill-[#D4AF37]/30" />
                      </div>
                      <p className="font-script text-xl md:text-2xl text-[#D4AF37] mb-2">
                        Rahul & Priya
                      </p>
                      <h3 className="font-serif text-2xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
                        Wedding Invitation
                      </h3>
                      <p className="text-sm md:text-base text-[#1A1A2E]/60 max-w-md">
                        A fully interactive wedding invitation website with
                        personalized guest experience, themed event pages, and
                        smart RSVP system.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-6 justify-center">
                        {["Mehndi", "Wedding", "Reception", "RSVP", "Gallery"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium border border-[#D4AF37]/20"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                </div>

                {/* Card Footer */}
                <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                      Rahul & Priya Wedding
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Complete invitation website with dashboard, events, RSVP &
                      more
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0 flex-wrap justify-center sm:justify-end">
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full px-6 hover:bg-rose-light/20 transition-all hover:-translate-y-0.5"
                    >
                      <Link to={DEMO_URL}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Explore Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full px-6 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
                    >
                      <Link to={`${DEMO_URL}/dashboard`}>
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="rounded-full px-6 shadow-romantic hover:shadow-lg transition-all hover:-translate-y-0.5 bg-green-500 hover:bg-green-600"
                    >
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        I Want This!
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            script="What You Get"
            title="Everything Your Event Needs"
            subtitle="Each invitation website is packed with features to make your celebration unforgettable and guest management effortless."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/70 via-white/50 to-white/30 backdrop-blur-sm border border-white/50 shadow-soft hover:shadow-romantic transition-all duration-500 hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-rose-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            script="Simple Process"
            title="How It Works"
            subtitle="Getting your custom invitation website is easy — just three steps and you're ready to share."
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="relative text-center p-8 rounded-2xl bg-gradient-to-br from-white/60 via-white/40 to-rose-light/10 border border-white/50 shadow-soft">
                  {/* Step number */}
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-5xl font-bold text-primary/10">
                    {step.number}
                  </span>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-lavender-light/20 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector arrow (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 text-primary/20">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative max-w-3xl mx-auto text-center bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-lavender-light/30 rounded-3xl p-10 md:p-14 overflow-hidden">
              <Heart className="absolute top-6 right-8 w-6 h-6 text-rose-light/50 fill-rose-light/25 animate-float" />
              <Sparkles className="absolute bottom-8 left-10 w-5 h-5 text-gold/50 animate-sparkle" />
              <Heart className="absolute bottom-12 right-16 w-4 h-4 text-peach/40 fill-peach/20 animate-float-slow" />

              <span className="font-script text-2xl text-primary mb-4 block">
                Ready to impress your guests?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Get Your Invitation Website
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Every website is custom-built for your celebration with your
                colors, photos, and personal touches. Tell us about your event
                and we'll create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group bg-green-500 hover:bg-green-600"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 py-6 text-lg hover:bg-rose-light/20 transition-all hover:-translate-y-1 group"
                >
                  <Link to="/contact">
                    Get in Touch
                    <Heart className="ml-2 w-5 h-5 group-hover:animate-heart-pulse fill-primary/30" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default InvitationWebsite;
