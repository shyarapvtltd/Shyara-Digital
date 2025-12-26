import { Heart, Sparkles, Star } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Hearts */}
      <Heart 
        className="absolute top-[10%] left-[5%] w-6 h-6 text-rose-light/40 animate-float fill-rose-light/20" 
        style={{ animationDelay: "0s" }}
      />
      <Heart 
        className="absolute top-[30%] right-[10%] w-8 h-8 text-rose/30 animate-float-slow fill-rose/10" 
        style={{ animationDelay: "1s" }}
      />
      <Heart 
        className="absolute bottom-[25%] left-[8%] w-5 h-5 text-peach/50 animate-float fill-peach/20" 
        style={{ animationDelay: "2s" }}
      />
      <Heart 
        className="absolute top-[60%] right-[5%] w-7 h-7 text-rose-light/30 animate-float-reverse fill-rose-light/15" 
        style={{ animationDelay: "0.5s" }}
      />

      {/* Floating Sparkles */}
      <Sparkles 
        className="absolute top-[15%] right-[20%] w-5 h-5 text-gold/40 animate-sparkle" 
        style={{ animationDelay: "0.3s" }}
      />
      <Sparkles 
        className="absolute top-[45%] left-[15%] w-6 h-6 text-gold-light/50 animate-sparkle" 
        style={{ animationDelay: "1.2s" }}
      />
      <Sparkles 
        className="absolute bottom-[35%] right-[25%] w-4 h-4 text-gold/30 animate-sparkle" 
        style={{ animationDelay: "0.8s" }}
      />

      {/* Floating Stars */}
      <Star 
        className="absolute top-[25%] left-[25%] w-4 h-4 text-lavender/40 animate-float-slow fill-lavender/20" 
        style={{ animationDelay: "1.5s" }}
      />
      <Star 
        className="absolute bottom-[20%] right-[15%] w-5 h-5 text-peach/30 animate-float fill-peach/15" 
        style={{ animationDelay: "2.5s" }}
      />
      <Star 
        className="absolute top-[70%] left-[20%] w-3 h-3 text-gold/40 animate-sparkle fill-gold/20" 
        style={{ animationDelay: "0.7s" }}
      />

      {/* Gradient Orbs */}
      <div 
        className="absolute top-[10%] right-[30%] w-32 h-32 rounded-full bg-rose/5 blur-3xl animate-float-slow"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="absolute bottom-[30%] left-[10%] w-40 h-40 rounded-full bg-peach/5 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute top-[50%] right-[5%] w-24 h-24 rounded-full bg-lavender/5 blur-3xl animate-float-reverse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default FloatingElements;
