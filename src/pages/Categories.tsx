import { Link } from "react-router-dom";
import { Heart, Flower2, Gift, Star, Sparkles, ArrowRight, Church, PartyPopper, Calendar, Music, Cake, Users, Home as HomeIcon, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedCard from "@/components/AnimatedCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const weddingEvents = [
  { name: "All Events Combined", icon: Heart, description: "Complete wedding invitation package" },
  { name: "Engagement", icon: Sparkles, description: "The beautiful beginning" },
  { name: "Mehndi", icon: Flower2, description: "Colors of tradition" },
  { name: "Haldi", icon: Star, description: "Golden blessings" },
  { name: "Sangeet", icon: Music, description: "Dance and celebration" },
  { name: "Wedding", icon: Church, description: "The sacred union" },
  { name: "Reception", icon: PartyPopper, description: "Grand celebration" },
];

const poojaEvents = [
  { name: "Grih Pravesh", icon: HomeIcon, description: "New beginnings at home" },
  { name: "Jagran", icon: Star, description: "Night of devotion" },
  { name: "Mata Ki Chowki", icon: Flower2, description: "Divine blessings" },
  { name: "Ram Katha", icon: BookOpen, description: "Sacred storytelling" },
  { name: "Bhagwat Katha", icon: BookOpen, description: "Spiritual discourse" },
];

const birthdayEvents = [
  { name: "18th Birthday", icon: Gift, description: "Stepping into adulthood" },
  { name: "21st Birthday", icon: PartyPopper, description: "Legal everywhere!" },
  { name: "25th Birthday", icon: Cake, description: "Quarter century" },
  { name: "30th Birthday", icon: Star, description: "Thirty and thriving" },
  { name: "40th Birthday", icon: Sparkles, description: "Fabulous at forty" },
  { name: "50th Birthday", icon: Heart, description: "Golden jubilee" },
  { name: "60+ Birthday", icon: Users, description: "Wisdom celebrations" },
  { name: "Anniversaries", icon: Heart, description: "Years of love" },
];

const romanticEvents = [
  { name: "Proposal Cards", icon: Heart, description: "Pop the question beautifully" },
  { name: "Valentine's Day", icon: Sparkles, description: "Celebrate your love" },
  { name: "Long-distance Surprises", icon: Gift, description: "Bridge the miles with love" },
];

const specialDays = [
  { name: "Father's Day", icon: Star, description: "Celebrate the hero" },
  { name: "Mother's Day", icon: Heart, description: "Honor her love" },
  { name: "Children's Day", icon: PartyPopper, description: "For the little ones" },
  { name: "Friendship Day", icon: Users, description: "Celebrate your squad" },
];

interface CategorySectionProps {
  id: string;
  emoji: string;
  title: string;
  description: string;
  events: { name: string; icon: React.ElementType; description: string }[];
  bgColor: string;
  delay?: number;
}

const CategorySection = ({ id, emoji, title, description, events, bgColor, delay = 0 }: CategorySectionProps) => (
  <ScrollReveal delay={delay}>
    <AccordionItem 
      value={id} 
      id={id}
      className="border-none"
    >
      <AccordionTrigger className="py-8 px-6 md:px-10 rounded-2xl bg-gradient-to-r from-white/60 via-white/40 to-white/60 backdrop-blur-sm border border-white/50 shadow-soft hover:shadow-romantic transition-all duration-500 hover:no-underline group data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
        <div className="flex items-center gap-5 text-left">
          <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110 group-data-[state=open]:animate-bounce">
            {emoji}
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground italic font-normal hidden sm:block">
              {description}
            </p>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className={`${bgColor} rounded-b-2xl border border-t-0 border-white/50 p-6 md:p-10`}>
          <p className="text-base text-muted-foreground italic mb-8 sm:hidden">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {events.map((event, index) => (
              <div 
                key={event.name} 
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
              >
                <AnimatedCard className="bg-white/70 border-white/60 h-full group cursor-pointer shadow-soft hover:shadow-romantic" hoverEffect="lift">
                  <div className="flex items-start gap-4 p-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-light/50 to-peach-light/50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <event.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {event.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </ScrollReveal>
);

const Categories = () => {
  return (
    <Layout>
      <SEO
        title="Digital Invitation Categories | Wedding, Birthday, Pooja & More | Shyara Digital"
        description="Explore our collection of digital invitations for weddings, engagements, birthdays, pooja ceremonies, anniversaries, and special celebrations. Find the perfect invitation for every occasion."
        keywords="wedding invitations, birthday invitations, pooja invitations, engagement cards, sangeet invitation, mehndi invitation, haldi ceremony card, grih pravesh invitation, anniversary cards, digital shaadi card"
        canonicalUrl="https://shyaradigital.com/categories"
        pageType="category"
        breadcrumbs={[
          { name: "Home", url: "https://shyaradigital.com" },
          { name: "Categories", url: "https://shyaradigital.com/categories" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Digital Invitation Categories",
          "description": "Browse all categories of digital invitations for weddings, religious ceremonies, birthdays, and special occasions",
          "numberOfItems": 5,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Wedding Invitations", "url": "https://shyaradigital.com/categories#weddings" },
            { "@type": "ListItem", "position": 2, "name": "Pooja & Religious Invitations", "url": "https://shyaradigital.com/categories#pooja" },
            { "@type": "ListItem", "position": 3, "name": "Birthday Invitations", "url": "https://shyaradigital.com/categories#birthdays" },
            { "@type": "ListItem", "position": 4, "name": "Romantic Invitations", "url": "https://shyaradigital.com/categories#romantic" },
            { "@type": "ListItem", "position": 5, "name": "Special Day Invitations", "url": "https://shyaradigital.com/categories#special" }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-rose/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-peach/10 blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-script text-2xl md:text-3xl text-primary mb-4 block opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Invitations for Every <span className="text-gradient">Celebration</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              From weddings to birthdays, from religious ceremonies to romantic moments — 
              find the perfect invitation for your special occasion
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            {[
              { name: "Weddings", id: "weddings", icon: "💍" },
              { name: "Pooja", id: "pooja", icon: "🪔" },
              { name: "Birthdays", id: "birthdays", icon: "🎂" },
              { name: "Romantic", id: "romantic", icon: "❤️" },
              { name: "Special Days", id: "special", icon: "🌼" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-rose-light/40 text-foreground hover:bg-rose-light/30 hover:border-primary/30 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections - Accordion */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-6">
            <CategorySection
              id="weddings"
              emoji="💍"
              title="Wedding Invitations"
              description="From the first promise to the final celebration — invite your loved ones beautifully at every step."
              events={weddingEvents}
              bgColor="bg-rose-light/30"
              delay={0}
            />

            <CategorySection
              id="pooja"
              emoji="🪔"
              title="Pooja & Religious Invitations"
              description="Sacred moments deserve graceful invitations filled with devotion and warmth."
              events={poojaEvents}
              bgColor="bg-gold-light/30"
              delay={100}
            />

            <CategorySection
              id="birthdays"
              emoji="🎂"
              title="Birthdays & Personal Celebrations"
              description="Celebrate life's milestones with invitations as special as the moment itself."
              events={birthdayEvents}
              bgColor="bg-peach-light/30"
              delay={200}
            />

            <CategorySection
              id="romantic"
              emoji="❤️"
              title="Relationships & Romantic Moments"
              description="Because love deserves to be expressed beautifully."
              events={romanticEvents}
              bgColor="bg-rose-light/40"
              delay={300}
            />

      {/* Special Note about Proposal */}
      <ScrollReveal className="container mx-auto px-4 -mt-8 mb-16">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-rose-light/20 via-peach-light/20 to-rose-light/20 rounded-2xl p-6 border border-rose-light/30 text-center">
          <Heart className="w-8 h-8 text-primary mx-auto mb-3 animate-heart-pulse fill-rose-light/30" />
          <p className="text-foreground font-medium mb-2">Special Offer for Proposals!</p>
          <p className="text-muted-foreground text-sm">
            If your proposal is accepted and shared online, we'll create a beautiful couple card for free! 💕
          </p>
        </div>
      </ScrollReveal>

            <CategorySection
              id="special"
              emoji="🌼"
              title="Special Days"
              description="Small gestures, big emotions — made unforgettable."
              events={specialDays}
              bgColor="bg-lavender-light/30"
              delay={400}
            />
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-script text-2xl text-primary mb-4 block">
                Ready to create?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Let's Make Your Invitation Special
              </h2>
              <p className="text-muted-foreground mb-8">
                Choose your category and let us craft the perfect invitation for your celebration
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
