import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, FileText, X, Sparkles, ArrowRight, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Layout from "@/components/Layout";
import AnimatedCard from "@/components/AnimatedCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";

const videoSamples = [
  { id: 1, title: "Royal Wedding", category: "Wedding", gradient: "from-rose-light to-peach-light" },
  { id: 2, title: "Golden Engagement", category: "Engagement", gradient: "from-gold-light to-peach-light" },
  { id: 3, title: "Sangeet Night", category: "Sangeet", gradient: "from-lavender to-rose-light" },
  { id: 4, title: "Birthday Bash", category: "Birthday", gradient: "from-peach to-gold-light" },
  { id: 5, title: "Grih Pravesh", category: "Religious", gradient: "from-gold to-gold-light" },
  { id: 6, title: "Valentine Special", category: "Romantic", gradient: "from-rose to-rose-light" },
];

const cardSamples = [
  { id: 1, title: "Elegant Wedding", category: "Wedding", gradient: "from-rose-light to-lavender-light" },
  { id: 2, title: "Haldi Ceremony", category: "Haldi", gradient: "from-gold-light to-peach-light" },
  { id: 3, title: "Mehndi Celebration", category: "Mehndi", gradient: "from-peach to-rose-light" },
  { id: 4, title: "50th Birthday", category: "Birthday", gradient: "from-lavender to-rose-light" },
  { id: 5, title: "Mother's Day", category: "Special Day", gradient: "from-rose-light to-peach" },
  { id: 6, title: "Anniversary", category: "Anniversary", gradient: "from-gold to-rose-light" },
];

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "video" | "card";
  sample: { id: number; title: string; category: string } | null;
}

const SampleModal = ({ isOpen, onClose, type, sample }: SampleModalProps) => {
  if (!sample) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-background via-rose-light/10 to-peach-light/10 border-rose-light/30">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground flex items-center gap-2">
            {type === "video" ? <Play className="w-6 h-6 text-primary" /> : <FileText className="w-6 h-6 text-primary" />}
            {sample.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-8">
          {type === "video" ? (
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-gold-light/30 border border-rose-light/30 flex items-center justify-center relative overflow-hidden">
              {/* Mock Video Player */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Sample video preview will be displayed here
                </p>
                <span className="inline-block px-3 py-1 bg-rose-light/30 rounded-full text-sm text-primary">
                  {sample.category} • Video
                </span>
              </div>
              
              {/* Decorative Elements */}
              <Heart className="absolute top-4 right-4 w-5 h-5 text-rose-light/50 fill-rose-light/25 animate-float" />
              <Sparkles className="absolute bottom-4 left-4 w-5 h-5 text-gold/50 animate-sparkle" />
            </div>
          ) : (
            <div className="aspect-[3/4] max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-gold-light/30 via-white to-rose-light/30 border border-gold/20 flex items-center justify-center relative overflow-hidden p-6">
              {/* Mock PDF Preview */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Sample PDF preview will be displayed here
                </p>
                <span className="inline-block px-3 py-1 bg-gold-light/30 rounded-full text-xs text-primary">
                  {sample.category} • PDF
                </span>
              </div>
              
              {/* Decorative Elements */}
              <Heart className="absolute top-4 left-4 w-4 h-4 text-rose-light/50 fill-rose-light/25 animate-float-slow" />
            </div>
          )}
        </div>

        <div className="text-center space-y-4 pb-4">
          <p className="text-muted-foreground text-sm">
            This is a placeholder for the {type} sample. 
            Full previews will be available soon!
          </p>
          <Button asChild className="rounded-full">
            <Link to="/contact">
              Create Similar Invitation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Samples = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<{ id: number; title: string; category: string } | null>(null);
  const [sampleType, setSampleType] = useState<"video" | "card">("video");

  const openModal = (sample: { id: number; title: string; category: string }, type: "video" | "card") => {
    setSelectedSample(sample);
    setSampleType(type);
    setModalOpen(true);
  };

  return (
    <Layout>
      <SEO
        title="Sample Gallery | Video & PDF Invitation Examples | Shyara Digital"
        description="Browse our sample gallery of beautiful digital invitations. See examples of wedding videos, birthday cards, pooja invitations, and more. Get inspired for your celebration."
        keywords="invitation samples, wedding video samples, digital card examples, invitation gallery, wedding invitation preview, birthday card samples"
        canonicalUrl="https://shyaradigital.com/samples"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-lavender/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-rose/10 blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-script text-2xl md:text-3xl text-primary mb-4 block opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              See Our Work
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Sample <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Explore our collection of beautifully crafted invitations — 
              from motion-rich videos to elegant digital cards
            </p>
          </div>
        </div>
      </section>

      {/* Video Samples Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Video Invitations"
            subtitle="Motion-rich, music-enhanced invitation videos that capture hearts"
          >
            <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-rose-light/30 rounded-full text-primary text-sm font-medium">
              <Play className="w-4 h-4" />
              Click to preview
            </span>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {videoSamples.map((sample, index) => (
              <ScrollReveal key={sample.id} delay={index * 100}>
                <AnimatedCard 
                  className="p-0 overflow-hidden cursor-pointer group" 
                  hoverEffect="lift"
                >
                  <div 
                    onClick={() => openModal(sample, "video")}
                    className="relative"
                  >
                    {/* Thumbnail */}
                    <div className={`aspect-video bg-gradient-to-br ${sample.gradient} flex items-center justify-center relative`}>
                      <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary fill-primary ml-0.5" />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full text-foreground text-sm font-medium shadow-lg">
                          <Eye className="w-4 h-4" />
                          Preview
                        </span>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {sample.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{sample.category}</span>
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Card Samples Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-transparent via-lavender-light/10 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Invitation Cards (PDF)"
            subtitle="Elegant, printable designs that work beautifully everywhere"
          >
            <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gold-light/30 rounded-full text-primary text-sm font-medium">
              <FileText className="w-4 h-4" />
              Click to preview
            </span>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {cardSamples.map((sample, index) => (
              <ScrollReveal key={sample.id} delay={index * 100}>
                <AnimatedCard 
                  className="p-0 overflow-hidden cursor-pointer group" 
                  hoverEffect="lift"
                >
                  <div 
                    onClick={() => openModal(sample, "card")}
                    className="relative"
                  >
                    {/* Thumbnail */}
                    <div className={`aspect-[4/5] bg-gradient-to-br ${sample.gradient} flex items-center justify-center relative p-6`}>
                      <div className="w-full h-full bg-white/50 rounded-xl flex items-center justify-center">
                        <FileText className="w-12 h-12 text-primary/50" />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full text-foreground text-sm font-medium shadow-lg">
                          <Eye className="w-4 h-4" />
                          Preview
                        </span>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {sample.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{sample.category}</span>
                    </div>
                  </div>
                </AnimatedCard>
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
              {/* Decorative */}
              <Heart className="absolute top-6 right-8 w-6 h-6 text-rose-light/50 fill-rose-light/25 animate-float" />
              <Sparkles className="absolute bottom-8 left-10 w-5 h-5 text-gold/50 animate-sparkle" />

              <span className="font-script text-2xl text-primary mb-4 block">
                Love what you see?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Let's Create Yours!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Every invitation is custom-made for your celebration. 
                Tell us about your event and we'll create something beautiful together.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <Link to="/contact">
                  Get Started
                  <Heart className="ml-2 w-5 h-5 group-hover:animate-heart-pulse fill-primary-foreground/30" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      <SampleModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={sampleType} 
        sample={selectedSample} 
      />
    </Layout>
  );
};

export default Samples;
