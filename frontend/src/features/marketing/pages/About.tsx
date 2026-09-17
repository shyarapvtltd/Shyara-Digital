import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/marketing/SEO";
import {
  CONTACT,
  DIGITAL_INVITE_URL,
  LEGAL_CIN,
  LEGAL_GSTIN,
  LEGAL_NAME,
  LEGAL_REGISTERED_OFFICE,
  SITE_NAME,
} from "@/lib/site";
import { localBusinessLd, sisterProductLd } from "@/lib/structuredData";

const About = () => {
  return (
    <Layout>
      <SEO
        title={`About ${SITE_NAME}`}
        description={`${SITE_NAME} is the custom invitation studio of ${LEGAL_NAME} in Patna. Digital Invite is the sister product for self-serve wedding websites.`}
        path="/about"
        breadcrumbs={[
          { name: "Home", url: "https://digital.shyara.co.in/" },
          { name: "About", url: "https://digital.shyara.co.in/about" },
        ]}
        structuredData={[localBusinessLd(), sisterProductLd()]}
      />
      <article className="container mx-auto px-4 pt-32 pb-24 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About {SITE_NAME}</h1>
        <p className="border-l-4 border-primary bg-white/70 px-4 py-3 text-lg font-medium mb-8">
          {SITE_NAME} is a custom studio for digital invitation videos. Digital Invite is our sister product for self-serve wedding invitation websites and downloadable cards.
        </p>
        <section className="space-y-4 text-muted-foreground leading-relaxed mb-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Who we are</h2>
          <p>
            The legal entity behind both products is {LEGAL_NAME}. The registered office is {LEGAL_REGISTERED_OFFICE}.
            CIN {LEGAL_CIN}. GSTIN {LEGAL_GSTIN}.
          </p>
          <p>
            This website is the studio. You send a brief on WhatsApp. Designers make the video.
            Invitation websites and DIY cards live on Digital Invite. We do not sell a template editor here.
          </p>
        </section>
        <section className="space-y-4 text-muted-foreground leading-relaxed mb-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Digital Invite</h2>
          <p>
            Couples who want to type a wedding invitation website or download a card themselves should use{" "}
            <a href={DIGITAL_INVITE_URL} className="text-primary hover:underline">Digital Invite</a>.
            Same company, different product.
          </p>
        </section>
        <section className="space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Contact</h2>
          <p>
            Email <a className="text-primary hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            WhatsApp {CONTACT.phoneDisplay}.
          </p>
          <p>
            <Link to="/contact" className="text-primary hover:underline">Contact page</Link>
            {" · "}
            <Link to="/shyara-digital-and-digital-invite" className="text-primary hover:underline">
              How the two products differ
            </Link>
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default About;
