import { Link } from "react-router-dom";
import { Heart, Sparkles, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";

const faqs = [
  {
    question: "How long does it take to create an invitation?",
    answer: "Most invitations are ready within 24 to 48 hours after you share your details. For rush orders, we can deliver even faster. Just let us know when you reach out!"
  },
  {
    question: "What details do you need from me?",
    answer: "We'll need your event details (date, time, venue), names of the hosts/couple, any specific theme or color preferences, and photos if you'd like them included. Don't worry, we'll guide you through everything!"
  },
  {
    question: "Can I request changes after seeing the first design?",
    answer: "Absolutely! We offer revisions to make sure you're completely happy with your invitation. Your satisfaction is our priority."
  },
  {
    question: "How do I share the invitation with my guests?",
    answer: "Once ready, we'll send you the final files (video or PDF) that you can easily share via WhatsApp, Instagram, Facebook, Email, or any platform you prefer."
  },
  {
    question: "Do you create invitations for destination weddings and international clients?",
    answer: "Absolutely! We serve clients worldwide and have created invitations for families celebrating across the globe — from the US, UK, and Canada to the Middle East, Australia, and beyond. Distance is no barrier to beautiful memories."
  },
  {
    question: "What if I have a unique or custom request?",
    answer: "We love creative challenges! Whether it's a unique theme, special animation, or something you've never seen before, just share your vision and we'll make it happen."
  },
  {
    question: "How much does a digital wedding invitation cost?",
    answer: "Our pricing is affordable and varies based on the complexity of the design and the type of invitation (video, PDF card, or a full invitation website). Contact us via WhatsApp for a personalized quote — we have options for every budget."
  },
  {
    question: "Can I add music or songs to my invitation video?",
    answer: "Yes! You can choose from our curated music library or request a specific song to be used as the background music for your invitation video."
  },
  {
    question: "Do you create invitations in languages other than English?",
    answer: "Yes! We regularly create invitations in Hindi, English, or a mix of both. We can also accommodate other languages — just let us know your preference."
  },
  {
    question: "Can I get a sample before ordering?",
    answer: "Of course! Browse our sample gallery at digital.shyara.co.in/samples to see examples of our work across different event types. You can also view a live demo of our invitation website service."
  },
  {
    question: "What is the difference between a video invitation and an invitation website?",
    answer: "A video invitation is a short, beautifully animated video (typically 30-60 seconds) that you share via WhatsApp or social media. An invitation website is a complete, interactive website with multiple pages — event details, RSVP system, guest management dashboard, photo gallery, and more. Both are custom-designed for your celebration."
  },
  {
    question: "Can I use my own photos and videos in the invitation?",
    answer: "Absolutely! We encourage you to share your personal photos and video clips. We'll incorporate them into the design to make your invitation truly personal and unique."
  },
  {
    question: "How do I share the invitation on WhatsApp, iMessage, or email?",
    answer: "We deliver your invitation in formats optimized for sharing. Video invitations come as MP4 files in 9:16 vertical format — perfect for WhatsApp Status, Instagram Stories, and direct messages. Simply save the file and share it on any platform you prefer."
  },
  {
    question: "What file formats do you deliver the invitation in?",
    answer: "Video invitations are delivered as high-quality MP4 files in 9:16 vertical format. PDF invitation cards are delivered as print-ready PDFs. For invitation websites, you get a live URL that you can share with your guests."
  },
];

const FAQ = () => {
  return (
    <Layout>
      <SEO
        title="Frequently Asked Questions | Shyara Digital"
        description="Find answers to common questions about our digital invitation services. Learn about delivery times, customization options, pricing, and how to get started with your celebration invitations."
        keywords="digital invitation FAQ, wedding card questions, invitation delivery time, custom invitation help, Shyara Digital support, how to order digital invitation, WhatsApp invitation cost, wedding invitation cost, video invitation price, custom video invitation questions, wedding invitation languages, invitation file format, wedding video vs website"
        canonicalUrl="https://digital.shyara.co.in/faqs"
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "https://digital.shyara.co.in" },
          { name: "FAQs", url: "https://digital.shyara.co.in/faqs" }
        ]}
        faqItems={faqs.map(faq => ({ question: faq.question, answer: faq.answer }))}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-lavender/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-rose/10 blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-script text-2xl md:text-3xl text-primary mb-4 block opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Got Questions?
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              Everything you need to know about our digital invitation services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-rose-light/30 rounded-2xl px-6 bg-white/50 backdrop-blur-sm shadow-soft data-[state=open]:shadow-romantic transition-all"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg hover:text-primary transition-colors py-5 hover:no-underline">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="relative max-w-3xl mx-auto text-center bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-lavender-light/30 rounded-3xl p-10 md:p-14 overflow-hidden">
              {/* Decorative */}
              <Heart className="absolute top-6 right-8 w-6 h-6 text-rose-light/50 fill-rose-light/25 animate-float" />
              <Sparkles className="absolute bottom-8 left-10 w-5 h-5 text-gold/50 animate-sparkle" />

              <span className="font-script text-2xl text-primary mb-4 block">
                Still have questions?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                We're Here to Help!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Can't find what you're looking for? Reach out to us and we'll be happy to assist you.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 py-6 text-lg shadow-romantic hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <Link to="/contact">
                  Contact Us
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

export default FAQ;
