import { Link } from "react-router-dom";
import { Play, FileText, Smartphone, Share2, Music, Sparkles, Download, ArrowRight, Check, Monitor, Tablet, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedCard from "@/components/AnimatedCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";

const videoFeatures = [
  { icon: Play, title: "Motion Graphics", description: "Beautiful animated elements that bring your invitation to life" },
  { icon: Music, title: "Emotional Music", description: "Carefully selected background music that sets the perfect mood" },
  { icon: Sparkles, title: "Story-Driven", description: "Your love story or celebration journey told beautifully" },
  { icon: Share2, title: "Easy Sharing", description: "Perfect for WhatsApp, Instagram, YouTube, and more" },
];

const cardFeatures = [
  { icon: FileText, title: "Elegant Designs", description: "Timeless aesthetics that never go out of style" },
  { icon: Smartphone, title: "Mobile-Friendly", description: "Looks perfect on every device and screen size" },
  { icon: Download, title: "Printable Quality", description: "High resolution for beautiful physical prints" },
  { icon: Share2, title: "Share Anywhere", description: "PDF format works universally across all platforms" },
];

const Formats = () => {
  return (
    <Layout>
      <SEO
        title="Invitation Formats | Video Invitations & PDF Cards | Shyara Digital"
        description="Choose between stunning video invitations with motion graphics and music, or elegant PDF invitation cards. Both formats designed for easy sharing on WhatsApp, Instagram, and more."
        keywords="video invitations, PDF invitation cards, digital invitation formats, WhatsApp invitation, Instagram invitation, animated wedding card, motion graphics invitation"
        canonicalUrl="https://shyaradigital.com/formats"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-peach/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-lavender/10 blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-script text-2xl md:text-3xl text-primary mb-4 block opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Choose Your Format
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              How We <span className="text-gradient">Deliver</span> Your Joy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Choose between stunning video invitations or elegant digital cards — 
              both crafted to make your celebration unforgettable
            </p>
          </div>
        </div>
      </section>

      {/* Video Format Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Preview */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-video rounded-3xl bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-gold-light/30 border border-rose-light/30 shadow-romantic overflow-hidden group">
                  {/* Mock Video Player */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <div className="w-3 h-3 rounded-full bg-lavender" />
                  </div>
                  
                  {/* Mock Timeline */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-primary rounded-full" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-white/70">
                      <span>0:00</span>
                      <span>1:30</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float">
                  🎥 Video Format
                </div>
              </div>
            </ScrollReveal>

            {/* Video Content */}
            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-light/30 rounded-full text-primary text-sm font-medium mb-4">
                    <Play className="w-4 h-4" />
                    Invitation Videos
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    Motion That Moves Hearts
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our video invitations are more than just announcements — they're mini cinematic 
                    experiences that capture the essence of your celebration and make your guests feel special.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {videoFeatures.map((feature, index) => (
                    <div key={feature.title} className="flex items-start gap-3 p-4 rounded-xl bg-rose-light/10 hover:bg-rose-light/20 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Perfect for sharing on:</p>
                  <div className="flex flex-wrap gap-2">
                    {["WhatsApp", "Instagram", "Facebook", "YouTube", "Email"].map((platform) => (
                      <span key={platform} className="px-3 py-1.5 bg-white/70 border border-rose-light/30 rounded-full text-sm text-foreground">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Card Format Section */}
      <section className="py-16 md:py-24 relative bg-gradient-to-b from-transparent via-lavender-light/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Card Content */}
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/30 rounded-full text-primary text-sm font-medium mb-4">
                    <FileText className="w-4 h-4" />
                    Invitation Cards (PDF)
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    Elegance in Every Pixel
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our digital invitation cards combine traditional charm with modern convenience. 
                    Beautiful designs that look stunning on any screen and print beautifully too.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {cardFeatures.map((feature, index) => (
                    <div key={feature.title} className="flex items-start gap-3 p-4 rounded-xl bg-gold-light/10 hover:bg-gold-light/20 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Device Compatibility */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Beautiful on every device:</p>
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Monitor, label: "Desktop" },
                      { icon: Tablet, label: "Tablet" },
                      { icon: Phone, label: "Mobile" },
                    ].map((device) => (
                      <div key={device.label} className="flex items-center gap-2 text-foreground">
                        <device.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm">{device.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card Preview */}
            <ScrollReveal direction="right" delay={200} className="order-1 lg:order-2">
              <div className="relative">
                {/* Stack of Cards Effect */}
                <div className="absolute top-4 left-4 right-4 bottom-4 rounded-3xl bg-lavender-light/30 border border-lavender/20 transform rotate-3" />
                <div className="absolute top-2 left-2 right-2 bottom-2 rounded-3xl bg-peach-light/30 border border-peach/20 transform -rotate-2" />
                
                {/* Main Card */}
                <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-gold-light/40 via-white to-rose-light/40 border border-gold/20 shadow-romantic overflow-hidden p-8">
                  {/* Card Content */}
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-rose-light/50 flex items-center justify-center mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-script text-xl text-primary mb-2">You're Invited</span>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Wedding Celebration</h3>
                    <p className="text-muted-foreground text-sm mb-4">Sample Preview</p>
                    <div className="w-12 h-px bg-primary/30 mb-4" />
                    <p className="text-xs text-muted-foreground">PDF Format • High Quality</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -left-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float-slow">
                  📄 PDF Format
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            script="Compare Formats"
            title="Choose What Works for You"
            subtitle="Both formats are designed to make your invitations memorable"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <ScrollReveal>
              <AnimatedCard className="bg-rose-light/10 border-rose-light/30 h-full" hoverEffect="glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-light/30 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">Video Invitation</h3>
                    <p className="text-sm text-muted-foreground">Motion & Music</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Animated motion graphics",
                    "Background music included",
                    "Story-driven presentation",
                    "60-90 seconds duration",
                    "Perfect for social media",
                    "Maximum emotional impact",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <AnimatedCard className="bg-gold-light/10 border-gold-light/30 h-full" hoverEffect="glow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-light/30 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">PDF Card</h3>
                    <p className="text-sm text-muted-foreground">Elegant & Classic</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Beautifully designed static card",
                    "High-resolution quality",
                    "Printable for physical use",
                    "Quick loading & sharing",
                    "Works on any device",
                    "Timeless elegance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-script text-2xl text-primary mb-4 block">
                Can't decide?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                We'll Help You Choose!
              </h2>
              <p className="text-muted-foreground mb-8">
                Talk to us about your event and we'll recommend the perfect format for maximum impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg border-2 border-rose-light hover:bg-rose-light/20"
                >
                  <Link to="/samples">
                    View Samples
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

export default Formats;
