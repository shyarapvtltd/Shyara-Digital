import { useState } from "react";
import { Heart, Send, MessageCircle, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import AnimatedCard from "@/components/AnimatedCard";
import ScrollReveal from "@/components/ScrollReveal";

const eventTypes = [
  { value: "wedding", label: "Wedding" },
  { value: "engagement", label: "Engagement" },
  { value: "pooja", label: "Pooja & Religious" },
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "romantic", label: "Romantic Moment" },
  { value: "special", label: "Special Day" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - show success toast
    toast({
      title: "Message Received! 💕",
      description: "We'll get back to you within 24 hours with beautiful ideas for your celebration.",
    });
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-rose/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-peach/10 blur-3xl animate-float" />
          <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-lavender/10 blur-3xl animate-float-reverse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-script text-2xl md:text-3xl text-primary mb-4 block opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Let's Connect
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Let's Create Something <span className="text-gradient">Beautiful</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Tell us about your celebration and let us craft the perfect invitation 
              that captures the essence of your special moment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <ScrollReveal direction="left">
              <AnimatedCard className="p-8 md:p-10" hoverEffect="glow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="rounded-xl border-rose-light/40 focus:border-primary bg-white/50"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="rounded-xl border-rose-light/40 focus:border-primary bg-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="rounded-xl border-rose-light/40 focus:border-primary bg-white/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="text-foreground font-medium">
                      Event Type
                    </Label>
                    <Select value={formData.eventType} onValueChange={(value) => handleChange("eventType", value)}>
                      <SelectTrigger className="rounded-xl border-rose-light/40 focus:border-primary bg-white/50">
                        <SelectValue placeholder="Select your event type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-rose-light/40">
                        {eventTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Tell Us About Your Celebration
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share the details of your event — date, theme, special requests, or anything you'd like us to know..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={5}
                      className="rounded-xl border-rose-light/40 focus:border-primary bg-white/50 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 rounded-full py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group"
                    >
                      Create My Invitation
                      <Heart className="ml-2 w-5 h-5 group-hover:animate-heart-pulse fill-primary-foreground/30" />
                    </Button>
                  </div>
                </form>
              </AnimatedCard>
            </ScrollReveal>

            {/* Contact Info & Decorative */}
            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                {/* Decorative Message */}
                <div className="relative bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-lavender-light/30 rounded-3xl p-8 overflow-hidden">
                  <Heart className="absolute top-4 right-4 w-6 h-6 text-rose-light/50 fill-rose-light/25 animate-float" />
                  <Sparkles className="absolute bottom-4 left-4 w-5 h-5 text-gold/50 animate-sparkle" />
                  
                  <span className="font-script text-2xl text-primary block mb-3">
                    We're here for you
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Every Celebration Matters
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether it's a grand wedding or an intimate birthday, we pour the same 
                    love and attention into every invitation we create. Your joy is our inspiration.
                  </p>
                </div>

                {/* Contact Options */}
                <div className="space-y-4">
                  <AnimatedCard className="flex items-center gap-4" hoverEffect="lift">
                    <div className="w-12 h-12 rounded-xl bg-rose-light/30 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Chat with Us</h4>
                      <p className="text-sm text-muted-foreground">WhatsApp: +91 95846 61610</p>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard className="flex items-center gap-4" hoverEffect="lift">
                    <div className="w-12 h-12 rounded-xl bg-peach-light/30 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Email Us</h4>
                      <p className="text-sm text-muted-foreground">hello@shyaradigital.com</p>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard className="flex items-center gap-4" hoverEffect="lift">
                    <div className="w-12 h-12 rounded-xl bg-lavender-light/30 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Call Us</h4>
                      <p className="text-sm text-muted-foreground">+91 95846 61610</p>
                    </div>
                  </AnimatedCard>
                </div>

                {/* Response Time */}
                <div className="text-center p-6 bg-white/50 rounded-2xl border border-rose-light/20">
                  <Send className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium">
                    We typically respond within 24 hours
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Usually much faster! 💕
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-transparent via-rose-light/10 to-transparent">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-script text-xl text-primary mb-4 block">
                Why families trust us
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Creating Beautiful Memories Since Day One
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "500+", label: "Happy Families" },
                  { number: "1000+", label: "Invitations Created" },
                  { number: "50+", label: "Event Types" },
                  { number: "4.9", label: "Average Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4">
                    <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
