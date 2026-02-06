import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

// Configurable video URLs - add YouTube video IDs here
export interface VideoItem {
  id: string; // YouTube video ID
  title: string;
}

interface YouTubeCarouselProps {
  videos?: VideoItem[];
  title?: string;
  subtitle?: string;
  scriptText?: string;
  showPDFSection?: boolean;
}

const YouTubeCarousel = ({ 
  videos = [], 
  title = "Our Creations",
  subtitle = "Watch our beautiful invitation videos",
  scriptText = "Beautiful Invitations Gallery",
  showPDFSection = true
}: YouTubeCarouselProps) => {
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

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            script={scriptText}
            title={title}
            subtitle={subtitle}
          />
        </ScrollReveal>

        {/* Video Carousel */}
        <div className="mt-12 relative">
          {videos.length > 0 ? (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Embla Carousel Container */}
              <div className="overflow-hidden mx-6 md:mx-8" ref={emblaRef}>
                <div className="flex gap-6 touch-pan-y">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex-shrink-0 w-[200px] md:w-[280px] select-none"
                    >
                      <div 
                        className="aspect-[9/16] rounded-2xl overflow-hidden shadow-romantic bg-gradient-to-br from-rose-light/30 to-peach-light/30 relative"
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
                            <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center">
                              <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="mt-3 text-center font-medium text-foreground">{video.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Swipe hint for mobile */}
              <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
                ← Swipe to see more →
              </p>
            </>
          ) : (
            /* Empty state - No videos configured yet */
            <div className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-br from-rose-light/20 via-peach-light/10 to-lavender-light/20 rounded-3xl border border-rose-light/30">
              <div className="w-20 h-20 rounded-full bg-rose-light/30 flex items-center justify-center mb-6">
                <Play className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 text-center">
                Video Samples Coming Soon!
              </h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                We're adding our best video invitations here. In the meantime, ask us on WhatsApp for samples!
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="rounded-full px-6 shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask for Samples on WhatsApp
              </Button>
            </div>
          )}
        </div>

        {/* PDF Section */}
        {showPDFSection && (
          <div className="mt-16">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  PDF Invitation Cards
                </h3>
                <p className="text-muted-foreground">Elegant, printable designs for every occasion</p>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-col items-center justify-center py-12 px-6 bg-gradient-to-br from-gold-light/20 via-peach-light/10 to-rose-light/20 rounded-3xl border border-gold-light/30">
              <div className="w-20 h-20 rounded-full bg-gold-light/30 flex items-center justify-center mb-6">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 text-center">
                PDF Samples Coming Soon!
              </h3>
              <p className="text-muted-foreground text-center max-w-md mb-6">
                Ask on WhatsApp for samples and to have yours built!
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="rounded-full px-6 shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask for Samples on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeCarousel;
