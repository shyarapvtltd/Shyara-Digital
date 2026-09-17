import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/marketing/SEO";
import { Button } from "@/components/ui/button";
import { formatInr, getCategoryBySlug, categoryVideos, videoWhatsAppUrl } from "@/lib/invitations";
import { CONTACT, SITE_URL } from "@/lib/site";
import { faqLd, videoObjectLd } from "@/lib/structuredData";

const InvitationCategory = () => {
  const { category: slug } = useParams<{ category: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  if (!category) return <Navigate to="/invitations" replace />;

  const videos = categoryVideos(category);
  const extras = [
    faqLd([
      { question: `Do you make custom ${category.title.toLowerCase()} invitation videos?`, answer: category.answer },
      { question: "How long does delivery take?", answer: "Most videos are ready in 24 to 48 hours after you send the details." },
      { question: "How do I order?", answer: `WhatsApp ${CONTACT.phoneDisplay} with names, dates and photos.` },
    ]),
    ...videos.map((video) =>
      videoObjectLd({
        name: `${category.title} ${video.title}`,
        description: category.answer,
        youtubeId: video.id,
      }),
    ),
  ];

  return (
    <Layout>
      <SEO
        title={category.h1}
        description={category.answer}
        path={`/invitations/${category.slug}`}
        breadcrumbs={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Invitations", url: `${SITE_URL}/invitations` },
          { name: category.title, url: `${SITE_URL}/invitations/${category.slug}` },
        ]}
        structuredData={extras}
      />
      <article className="container mx-auto px-4 pt-32 pb-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/invitations" className="hover:text-primary">Invitations</Link>
          <span className="mx-2">/</span>
          <span>{category.title}</span>
        </nav>
        <p className="font-script text-2xl text-primary mb-3">{category.emoji} {category.title}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{category.h1}</h1>
        <p className="max-w-2xl border-l-4 border-primary bg-white/70 px-4 py-3 text-lg font-medium mb-10">
          {category.answer}
        </p>

        {videos.length === 0 ? (
          <div className="rounded-2xl border border-rose-light/30 bg-white/50 p-8 max-w-xl">
            <p className="text-muted-foreground mb-4">
              Samples for this category are still being added. Ask on WhatsApp and we will send recent work.
            </p>
            <Button asChild className="rounded-full">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id + video.title} className="rounded-2xl border border-rose-light/20 bg-white/50 p-3">
                <div className="aspect-[9/16] overflow-hidden rounded-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={`${category.title} ${video.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-medium">
                  {video.title} · {formatInr(video.price)}
                </p>
                <a
                  href={videoWhatsAppUrl(category.title, video)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-3 py-2 text-sm font-medium text-white"
                >
                  I want this
                </a>
              </div>
            ))}
          </div>
        )}

        <p className="mt-10">
          <Link to="/invitations" className="text-primary hover:underline">See the full gallery</Link>
        </p>
      </article>
    </Layout>
  );
};

export default InvitationCategory;
