import { Link } from "react-router-dom";
import { Heart, Sparkles, ArrowRight, Gift, Calendar, PartyPopper, Flower2, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedCard from "@/components/AnimatedCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import YouTubeCarousel from "@/components/YouTubeCarousel";

const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding",
    rating: 5,
    quote: "Our wedding invitation video was beyond beautiful! Every guest called to say how touched they were. Shyara Digital made our special day even more memorable.",
    location: "Mumbai"
  },
  {
    name: "Sunita Sharma",
    event: "Son's Birthday",
    rating: 5,
    quote: "The birthday invitation for my son was so creative and fun! He loved showing it to all his friends. Quick delivery and amazing quality!",
    location: "Delhi"
  },
  {
    name: "Amit & Family",
    event: "Grih Pravesh",
    rating: 5,
    quote: "We wanted something traditional yet modern for our housewarming. They understood exactly what we needed. The invitation was elegant and heartfelt.",
    location: "Jaipur"
  },
  {
    name: "Neha Gupta",
    event: "Engagement",
    rating: 5,
    quote: "From the first message to final delivery, the experience was wonderful. Our engagement video had everyone emotional. Truly talented team!",
    location: "Bangalore"
  },
];

const invitationTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Every vow, every ritual, beautifully invited",
    color: "from-rose to-rose-light",
    bgColor: "bg-rose-light/20",
  },
  {
    icon: Flower2,
    title: "Pooja & Religious",
    description: "Sacred moments with graceful invitations",
    color: "from-gold to-gold-light",
    bgColor: "bg-gold-light/20",
  },
  {
    icon: Gift,
    title: "Birthdays",
    description: "Celebrate life's milestones in style",
    color: "from-peach to-peach-light",
    bgColor: "bg-peach-light/20",
  },
  {
    icon: Heart,
    title: "Romantic Moments",
    description: "Express love in the most beautiful way",
    color: "from-primary to-rose-light",
    bgColor: "bg-rose-light/20",
  },
  {
    icon: Star,
    title: "Special Days",
    description: "Small gestures, big emotions",
    color: "from-lavender to-lavender-light",
    bgColor: "bg-lavender-light/20",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Designed for Modern Celebrations",
    description: "Beautiful designs that work perfectly on every device",
  },
  {
    icon: PartyPopper,
    title: "Easy to Share with Everyone",
    description: "Share via WhatsApp, Instagram, or any platform instantly",
  },
  {
    icon: Calendar,
    title: "Beautiful on Every Screen",
    description: "From phones to tablets to desktops, always stunning",
  },
  {
    icon: Heart,
    title: "Personalized for Every Story",
    description: "Your invitation, your story, your unique celebration",
  },
];

// Configure your YouTube videos here - Vertical invitation videos (9:16 format)
const homePageVideos = [
  { id: "MErRHbJ6qqk", title: "Wedding Invitation Video 1" },
  { id: "HkGKHzATaxw", title: "Wedding Invitation Video 2" },
  { id: "i3GvQEV3ifs", title: "Wedding Invitation Video 3" },
  { id: "QpiB8MYm2hA", title: "Wedding Invitation Video 4" },
  { id: "F4Jn243qJTM", title: "Wedding Invitation Video 5" },
];

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Shyara Digital | Beautiful Digital Invitations for Weddings & Celebrations"
        description="Create stunning digital invitation cards and videos for weddings, birthdays, pooja ceremonies, and special celebrations. Invite with love, share with joy. Made in India."
        keywords="digital invitations India, wedding invitation cards, video invitations, e-invitations, online wedding cards, shaadi cards, pooja invitation, birthday invitation, celebration cards, WhatsApp wedding invitation"
        canonicalUrl="https://shyaradigital.com"
        pageType="home"
        reviews={[
          { author: "Priya & Rahul", rating: 5, reviewBody: "Our wedding invitation video was beyond beautiful! Every guest called to say how touched they were." },
          { author: "Sunita Sharma", rating: 5, reviewBody: "The birthday invitation for my son was so creative and fun! Quick delivery and amazing quality!" },
          { author: "Amit & Family", rating: 5, reviewBody: "We wanted something traditional yet modern for our housewarming. The invitation was elegant and heartfelt." },
          { author: "Neha Gupta", rating: 5, reviewBody: "From the first message to final delivery, the experience was wonderful. Truly talented team!" },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Shyara Digital",
          "image": "https://shyaradigital.com/logo.png",
          "description": "Create beautiful, emotional digital invitation cards and videos for weddings, celebrations, and moments that matter.",
          "@id": "https://shyaradigital.com",
          "url": "https://shyaradigital.com",
          "telephone": "+91-95846-61610",
          "email": "shyaradigital@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
          },
          "priceRange": "$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
          },
          "sameAs": [
            "https://www.instagram.com/shyaradigital",
            "https://www.facebook.com/shyaradigital",
            "https://www.youtube.com/@Shyaradigital"
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-peach/10 blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-lavender/10 blur-3xl animate-float-reverse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Invite with <span className="text-gradient">Love</span>,
              <br />
              Share with <span className="text-gradient">Joy</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Digital invitation cards & videos for weddings, celebrations, 
              and moments that matter. Crafted with emotion, shared with ease.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <Link to="/categories">
                  Explore Invitations
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg border-2 border-rose-light hover:bg-rose-light/20 transition-all hover:-translate-y-1"
              >
                <Link to="/samples">
                  View Samples
                  <Sparkles className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Floating Hearts Animation */}
            <div className="absolute inset-0 pointer-events-none">
              <Heart 
                className="absolute top-1/4 left-1/6 w-8 h-8 text-rose/30 fill-rose/20 animate-float" 
                style={{ animationDelay: "0s" }}
              />
              <Heart 
                className="absolute top-1/3 right-1/4 w-6 h-6 text-peach/40 fill-peach/20 animate-float-slow" 
                style={{ animationDelay: "1s" }}
              />
              <Heart 
                className="absolute bottom-1/3 left-1/4 w-5 h-5 text-rose-light/50 fill-rose-light/25 animate-float-reverse" 
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Carousel Section */}
      <YouTubeCarousel 
        videos={homePageVideos}
        title="Our Creations"
        subtitle="Watch our beautiful invitation videos that capture hearts and create excitement"
        scriptText="Beautiful Invitations Gallery"
        showPDFSection={true}
      />

      {/* Why Shyara Digital Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <SectionHeading
            script="Why Choose Us?"
            title="What Makes Us Special"
            subtitle="We believe every celebration deserves an invitation as special as the moment itself"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <AnimatedCard className="text-center h-full" hoverEffect="glow">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-rose-light/50 to-peach-light/50 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation Types Preview Section */}
      <section className="py-20 md:py-28 relative bg-gradient-to-b from-transparent via-rose-light/10 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeading
            script="Explore Our Collection"
            title="Invitations for Every Celebration"
            subtitle="From traditional ceremonies to modern celebrations, we have the perfect invitation for you"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {invitationTypes.map((type, index) => (
              <ScrollReveal key={type.title} delay={index * 100}>
                <Link to="/categories">
                  <AnimatedCard 
                    className="text-center group cursor-pointer h-full" 
                    hoverEffect="lift"
                  >
                    <div className={`w-20 h-20 mx-auto mb-5 rounded-3xl ${type.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <type.icon className={`w-10 h-10 text-primary group-hover:animate-heart-pulse`} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {type.description}
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </AnimatedCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 relative bg-gradient-to-b from-transparent via-lavender-light/10 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeading
            script="Happy Families"
            title="What Our Clients Say"
            subtitle="Real stories from families who trusted us with their special moments"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 100}>
                <AnimatedCard className="h-full relative" hoverEffect="glow">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-rose-light/30" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-rose-light/20">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-light to-peach-light flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary fill-primary/30" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.event} - {testimonial.location}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Trust Badge */}
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-rose-light/20 max-w-3xl mx-auto">
              {[
                { number: "500+", label: "Happy Families" },
                { number: "4.9★", label: "Average Rating" },
                { number: "1000+", label: "Invitations Created" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto text-center bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-lavender-light/30 rounded-3xl p-10 md:p-16 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-rose/10 blur-2xl" />
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-peach/10 blur-2xl" />
              <Heart className="absolute top-6 right-8 w-6 h-6 text-rose-light/50 fill-rose-light/25 animate-float" />
              <Heart className="absolute bottom-8 left-10 w-5 h-5 text-peach/50 fill-peach/25 animate-float-slow" />

              <span className="font-script text-2xl md:text-3xl text-primary mb-4 block">
                Ready to celebrate?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Let's Create Something Beautiful
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Your special moments deserve invitations that capture hearts and create excitement
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <Link to="/contact">
                  Get Started Today
                  <Heart className="ml-2 w-5 h-5 group-hover:animate-heart-pulse fill-primary-foreground/30" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
