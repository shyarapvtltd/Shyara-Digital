import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/marketing/SEO";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { Button } from "@/components/ui/button";
import { getLandingPage, relatedPages } from "@/lib/landing";
import { CONTACT, SITE_URL } from "@/lib/site";
import NotFound from "./NotFound";

const Landing = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getLandingPage(slug) : undefined;
  if (!page) return <NotFound />;
  const related = relatedPages(page);

  return (
    <Layout>
      <SEO
        title={page.title}
        description={page.metaDescription}
        path={`/${page.slug}`}
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: page.clusterLabel, url: `${SITE_URL}/` },
          { name: page.h1, url: `${SITE_URL}/${page.slug}` },
        ]}
        faqItems={page.faqs}
      />
      <article className="container mx-auto max-w-3xl px-4 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>{page.clusterLabel}</span>
        </nav>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl font-bold leading-tight">{page.h1}</h1>
        <p className="mt-5 border-l-4 border-primary bg-white px-4 py-3 text-lg font-medium shadow-sm">
          {page.answer}
        </p>

        {page.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {page.table && (
          <section className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">{page.table.caption}</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-rose-light/30 bg-white">
              <table className="w-full min-w-[34rem] text-left text-sm">
                <caption className="sr-only">{page.table.caption}</caption>
                <thead>
                  <tr>
                    {page.table.columns.map((column) => (
                      <th key={column} scope="col" className="border-b bg-rose-light/20 px-3 py-2 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell, i) => (
                        <td key={`${cell}-${i}`} className="border-b px-3 py-2 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {page.table.source && <p className="mt-2 text-xs text-muted-foreground">{page.table.source}</p>}
          </section>
        )}

        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold mb-3">Common questions</h2>
          <FaqAccordion items={[...page.faqs]} />
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-rose-light/30 via-peach-light/20 to-lavender-light/30 px-6 py-10 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold">Let us make yours</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            WhatsApp the brief. We design. You share the file.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="rounded-full">
              {(page.ctaHref ?? "/contact").startsWith("http") ? (
                <a href={page.ctaHref}>{page.ctaLabel ?? "Get in touch"}</a>
              ) : (
                <Link to={page.ctaHref ?? "/contact"}>{page.ctaLabel ?? "Get in touch"}</Link>
              )}
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </Button>
          </div>
        </section>

        {related.length > 0 && (
          <nav aria-label="Related pages" className="mt-12 border-t border-rose-light/30 pt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Read next</h2>
            <ul className="mt-3 space-y-2">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link to={`/${other.slug}`} className="font-semibold text-primary hover:underline">
                    {other.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </Layout>
  );
};

export default Landing;
