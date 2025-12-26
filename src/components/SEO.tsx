import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Shyara Digital | Beautiful Digital Invitations",
  description = "Create beautiful, emotional digital invitation cards and videos for weddings, celebrations, and moments that matter. Share joy with Shyara Digital.",
  keywords = "digital invitations, wedding invitations, digital cards, celebration invitations, video invitations, shaadi cards, online wedding cards, e-invitations India",
  canonicalUrl = "https://shyaradigital.com",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shyara Digital",
    "url": "https://shyaradigital.com",
    "logo": "https://shyaradigital.com/logo.png",
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95846-61610",
      "contactType": "customer service",
      "email": "shyaradigital@gmail.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.instagram.com/shyaradigital",
      "https://www.facebook.com/shyaradigital"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shyara Digital" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Shyara Digital" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ShyaraDigital" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
