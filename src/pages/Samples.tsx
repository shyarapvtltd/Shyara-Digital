import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, Sparkles, ArrowRight, Play, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import type { VideoItem } from "@/components/YouTubeCarousel";

// Sample YouTube videos for demonstration - Replace with actual vertical invitation videos (9:16 format)
const sampleVideos = {
  wedding: [
    { id: "MErRHbJ6qqk", title: "Wedding Sample 1" },
    { id: "i-gCaiwOdOA", title: "Wedding Sample 2" },
    { id: "i3GvQEV3ifs", title: "Wedding Sample 3" },
    { id: "F4Jn243qJTM", title: "Wedding Sample 4" },
    { id: "QpiB8MYm2hA", title: "Wedding Sample 5" },
    { id: "HkGKHzATaxw", title: "Wedding Sample 6" },
    { id: "MuxUm6ccuEw", title: "Wedding Sample 7" },
    { id: "1H1neLoUBhc", title: "Wedding Sample 8" },
    { id: "0uoR__qE0R0", title: "Wedding Sample 9" },
  ],
  engagement: [
    { id: "8YQ7vYSeSWU", title: "Engagement Sample 1" },
    { id: "xxewEgsOBoI", title: "Engagement Sample 2" },
    { id: "RspeXB05CZM", title: "Engagement Sample 3" },
  ],
  saveTheDate: [
    { id: "oNF0q5J6lu0", title: "Save the Date Sample 1" },
    { id: "egMJ2xIWOYI", title: "Save the Date Sample 2" },
  ],
  // Commented out - no videos available yet
  // birthday: [
  //   { id: "3JZ_D3ELwOQ", title: "Birthday Bash Video" },
  //   { id: "kJQP7kiw5Fk", title: "Kids Birthday Fun" },
  // ],
  // anniversary: [
  //   { id: "RgKAFK5djSk", title: "25th Anniversary" },
  //   { id: "09R8_2nJtjg", title: "Golden Jubilee" },
  // ],
  // pooja: [
  //   { id: "JGwWNGJdvx8", title: "Grih Pravesh Invitation" },
  //   { id: "3JZ_D3ELwOQ", title: "Mata Ki Chowki" },
  // ],
  // romantic: [
  //   { id: "kJQP7kiw5Fk", title: "Proposal Card" },
  //   { id: "RgKAFK5djSk", title: "Valentine Special" },
  // ],
  // special: [
  //   { id: "09R8_2nJtjg", title: "Mother's Day" },
  //   { id: "JGwWNGJdvx8", title: "Father's Day" },
  // ],
  birthday: [],
  anniversary: [],
  pooja: [],
  romantic: [],
  special: [],
};

// Configurable video samples for each category
const sampleCategories = [
  {
    id: "wedding",
    emoji: "💍",
    title: "Wedding Invitations",
    description: "Complete wedding invitation videos including Engagement, Mehndi, Haldi, Sangeet, Wedding, and Reception",
    videos: sampleVideos.wedding,
  },
  {
    id: "engagement",
    emoji: "💎",
    title: "Engagement Invitations",
    description: "Beautiful engagement ceremony invitation videos",
    videos: sampleVideos.engagement,
  },
  {
    id: "saveTheDate",
    emoji: "📅",
    title: "Save the Date",
    description: "Elegant save the date announcement videos for your special day",
    videos: sampleVideos.saveTheDate,
  },
  {
    id: "birthday",
    emoji: "🎂",
    title: "Birthday Invitations",
    description: "Fun and creative birthday invitation videos for all ages",
    videos: sampleVideos.birthday,
  },
  {
    id: "anniversary",
    emoji: "💕",
    title: "Anniversary Invitations",
    description: "Celebrate years of love with beautiful anniversary invitations",
    videos: sampleVideos.anniversary,
  },
  {
    id: "pooja",
    emoji: "🪔",
    title: "Pooja & Religious Invitations",
    description: "Grih Pravesh, Jagran, Mata Ki Chowki, Ram Katha, Bhagwat Katha",
    videos: sampleVideos.pooja,
  },
  {
    id: "romantic",
    emoji: "❤️",
    title: "Romantic Moments",
    description: "Proposal Cards, Valentine's Day, Long-distance Surprises",
    videos: sampleVideos.romantic,
  },
  {
    id: "special",
    emoji: "🌼",
    title: "Special Days",
    description: "Father's Day, Mother's Day, Children's Day, Friendship Day",
    videos: sampleVideos.special,
  },
];

const VideoCarouselContent = ({ videos }: { videos: VideoItem[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  // Track which video is active (tapped) to allow interaction
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919584661610?text=Hi! I would like to see some sample invitations.", "_blank");
  };

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-6 bg-gradient-to-br from-white/60 to-rose-light/10 rounded-2xl border border-rose-light/20">
        <div className="w-16 h-16 rounded-full bg-rose-light/30 flex items-center justify-center mb-4">
          <Play className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2 text-center">
          Samples Coming Soon!
        </h4>
        <p className="text-muted-foreground text-center text-sm max-w-sm mb-4">
          Ask on WhatsApp for samples and to have yours built!
        </p>
        <Button 
          onClick={handleWhatsAppClick}
          size="sm"
          className="rounded-full shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Ask on WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      {/* Embla Carousel */}
      <div className="overflow-hidden mx-6" ref={emblaRef}>
        <div className="flex gap-4 touch-pan-y">
          {videos.map((video) => (
            <div
              key={video.id + video.title}
              className="flex-shrink-0 w-[200px] md:w-[280px] select-none"
            >
              <div 
                className="aspect-[9/16] rounded-xl overflow-hidden shadow-romantic bg-gradient-to-br from-rose-light/30 to-peach-light/30 relative"
                onClick={() => setActiveVideoId(video.id)}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`w-full h-full ${activeVideoId === video.id ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  loading="lazy"
                />
                {activeVideoId !== video.id && (
                  <div className="absolute inset-0 bg-transparent cursor-pointer flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/30 flex items-center justify-center">
                      <Play className="w-7 h-7 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-2 text-center font-medium text-foreground text-sm">{video.title}</p>
              <a
                href={`https://wa.me/919584661610?text=${encodeURIComponent(`Hi! I loved this sample: "${video.title}" (https://youtube.com/shorts/${video.id}). I'd like to get one like this made for my event!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-medium transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                I Want This!
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe hint for mobile */}
      <p className="text-center text-xs text-muted-foreground mt-3 md:hidden">
        ← Swipe to see more →
      </p>
    </div>
  );
};

// Collect all videos for VideoObject schema
const allSampleVideos = Object.values(sampleVideos).flat().filter(v => v.id);
const sampleVideoSchemas = allSampleVideos.map((video) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.title,
  "description": `${video.title} - Beautiful digital invitation video by Shyara Digital. Order custom invitations for your special celebration.`,
  "thumbnailUrl": `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
  "uploadDate": "2026-01-01",
  "contentUrl": `https://www.youtube.com/shorts/${video.id}`,
  "embedUrl": `https://www.youtube.com/embed/${video.id}`,
  "publisher": {
    "@type": "Organization",
    "name": "Shyara Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digital.shyara.co.in/shyara.png"
    }
  }
}));

const Samples = () => {
  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(sampleVideoSchemas)}
        </script>
      </Helmet>
      <SEO
        title="Sample Gallery | Video Invitation Examples | Shyara Digital"
        description="Browse our sample gallery of beautiful digital invitations. See examples of wedding videos, birthday cards, pooja invitations, and more. Get inspired for your celebration."
        keywords="invitation samples, wedding video samples, digital card examples, invitation gallery, wedding invitation preview, birthday card samples, invitation portfolio, shaadi card samples, engagement video invitation, save the date video sample, WhatsApp invitation examples, e-invitation demo India, nimantran video, sagai invitation sample, wedding card design preview"
        canonicalUrl="https://digital.shyara.co.in/samples"
        pageType="gallery"
        breadcrumbs={[
          { name: "Home", url: "https://digital.shyara.co.in" },
          { name: "Samples", url: "https://digital.shyara.co.in/samples" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Sample Gallery - Shyara Digital",
          "description": "Browse our collection of beautiful digital invitation samples including wedding videos and celebration invitations",
          "url": "https://digital.shyara.co.in/samples",
          "mainEntity": {
            "@type": "ImageGallery",
            "name": "Digital Invitation Samples",
            "description": "Examples of video invitations for weddings, birthdays, and celebrations"
          }
        }}
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
              Explore our collection of beautifully crafted video invitations for every celebration
            </p>
          </div>
        </div>
      </section>

      {/* Sample Categories - Accordion */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-6">
            {sampleCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 50}>
                <AccordionItem 
                  value={category.id}
                  className="border-none"
                >
                  <AccordionTrigger className="py-6 px-6 md:px-8 rounded-2xl bg-gradient-to-r from-white/60 via-white/40 to-white/60 backdrop-blur-sm border border-white/50 shadow-soft hover:shadow-romantic transition-all duration-500 hover:no-underline group data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110 group-data-[state=open]:animate-bounce">
                        {category.emoji}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h2>
                        <p className="text-sm text-muted-foreground font-normal hidden sm:block">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="bg-gradient-to-b from-rose-light/20 to-transparent rounded-b-2xl border border-t-0 border-white/50 p-6 md:p-8">
                      <p className="text-sm text-muted-foreground mb-6 sm:hidden">
                        {category.description}
                      </p>
                      <VideoCarouselContent videos={category.videos} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
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
    </Layout>
  );
};

export default Samples;
