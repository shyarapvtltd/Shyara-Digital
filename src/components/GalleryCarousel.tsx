import { useEffect, useRef, useState } from "react";
import { Heart, Play, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const galleryItems = [
  {
    id: 1,
    title: "Royal Wedding",
    category: "Wedding",
    type: "video",
    gradient: "from-rose-light via-peach-light to-rose",
  },
  {
    id: 2,
    title: "Golden Engagement",
    category: "Engagement",
    type: "video",
    gradient: "from-gold-light via-peach to-gold",
  },
  {
    id: 3,
    title: "Elegant Mehndi",
    category: "Mehndi",
    type: "card",
    gradient: "from-peach via-rose-light to-lavender-light",
  },
  {
    id: 4,
    title: "Haldi Celebration",
    category: "Haldi",
    type: "card",
    gradient: "from-gold via-gold-light to-peach-light",
  },
  {
    id: 5,
    title: "Sangeet Night",
    category: "Sangeet",
    type: "video",
    gradient: "from-lavender via-rose-light to-peach",
  },
  {
    id: 6,
    title: "Birthday Bash",
    category: "Birthday",
    type: "video",
    gradient: "from-peach-light via-rose to-lavender-light",
  },
  {
    id: 7,
    title: "Grih Pravesh",
    category: "Religious",
    type: "card",
    gradient: "from-gold via-peach-light to-rose-light",
  },
  {
    id: 8,
    title: "Valentine Special",
    category: "Romantic",
    type: "video",
    gradient: "from-rose via-rose-light to-peach",
  },
];

const GalleryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);
  const [, setForceRender] = useState(0);

  const handlePause = (paused: boolean) => {
    isPausedRef.current = paused;
    setForceRender(prev => prev + 1);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPositionRef.current += scrollSpeed;
        
        // Reset scroll position when we've scrolled half the content (seamless loop)
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Double the items for seamless infinite scroll
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <ScrollReveal>
          <SectionHeading
            script="Our Creations"
            title="Beautiful Invitations Gallery"
            subtitle="A glimpse of the magic we create for celebrations"
          />
        </ScrollReveal>
      </div>

      {/* Carousel Container */}
      <ScrollReveal delay={200}>
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden px-4"
          onMouseEnter={() => handlePause(true)}
          onMouseLeave={() => handlePause(false)}
          onTouchStart={() => handlePause(true)}
          onTouchEnd={() => handlePause(false)}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] group cursor-pointer"
            >
              <div className={`relative aspect-[4/5] rounded-3xl bg-gradient-to-br ${item.gradient} overflow-hidden shadow-romantic transition-all duration-500 group-hover:shadow-lg group-hover:scale-[1.02]`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/30" />
                  <div className="absolute bottom-8 left-4 w-12 h-12 rounded-full border border-white/20" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  {/* Type Icon */}
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.type === "video" ? (
                      <Play className="w-8 h-8 text-white fill-white/50 ml-1" />
                    ) : (
                      <FileText className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-white mb-1 drop-shadow-md">
                    {item.title}
                  </h3>
                  <span className="text-white/80 text-sm">{item.category}</span>

                  {/* Decorative Heart */}
                  <Heart className="absolute top-4 left-4 w-5 h-5 text-white/40 fill-white/20 animate-float" />
                </div>

                {/* Type Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                  {item.type === "video" ? "🎥 Video" : "📄 PDF"}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default GalleryCarousel;
