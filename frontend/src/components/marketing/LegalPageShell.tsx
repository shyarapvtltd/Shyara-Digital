import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/marketing/SEO";
import ScrollReveal from "@/components/marketing/ScrollReveal";

interface LegalPageShellProps {
  title: string;
  description: string;
  canonicalPath: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageShell = ({
  title,
  description,
  canonicalPath,
  lastUpdated,
  children,
}: LegalPageShellProps) => {
  const canonicalUrl = `https://digital.shyara.co.in${canonicalPath}`;

  return (
    <Layout>
      <SEO
        title={`${title} | Shyara Digital`}
        description={description}
        keywords="Shyara Digital privacy policy, terms of service, legal, data protection, digital invitation terms"
        canonicalUrl={canonicalUrl}
        pageType="website"
        breadcrumbs={[
          { name: "Home", url: "https://digital.shyara.co.in" },
          { name: title, url: canonicalUrl },
        ]}
      />

      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-lavender/10 blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-rose/10 blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <article className="max-w-3xl mx-auto legal-prose">
              {children}
            </article>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-rose-light/30 text-center text-sm text-muted-foreground">
            <p>
              Questions?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              or email{" "}
              <a href="mailto:shyaradigital@gmail.com" className="text-primary hover:underline">
                shyaradigital@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPageShell;
