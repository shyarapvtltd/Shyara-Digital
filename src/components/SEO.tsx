import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FAQItem[];
  reviews?: Review[];
  pageType?: "home" | "category" | "service" | "contact" | "gallery";
}

// Generate BreadcrumbList schema
const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Generate FAQPage schema
const generateFAQSchema = (faqItems: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Generate AggregateRating schema
const generateAggregateRatingSchema = (reviews: Review[]) => {
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": avgRating.toFixed(1),
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": reviews.length,
    "reviewCount": reviews.length
  };
};

// Generate Review schema
const generateReviewsSchema = (reviews: Review[]) => 
  reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.reviewBody
  }));

// Base organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shyara Digital",
  "url": "https://digital.shyara.co.in",
  "logo": "https://digital.shyara.co.in/logo.png",
  "description": "Create beautiful, emotional digital invitation cards and videos for weddings, celebrations, and moments that matter.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-95846-61610",
    "contactType": "customer service",
    "email": "shyaradigital@gmail.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.instagram.com/shyaradigital",
    "https://www.facebook.com/shyaradigital",
    "https://www.youtube.com/@Shyaradigital"
  ]
};

// WebSite schema for homepage
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Shyara Digital",
  "url": "https://digital.shyara.co.in",
  "description": "Beautiful digital invitation cards and videos for weddings, celebrations, and moments that matter.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://digital.shyara.co.in/categories?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const SEO = ({
  title = "Shyara Digital | Beautiful Digital Invitations",
  description = "Create beautiful, emotional digital invitation cards and videos for weddings, celebrations, and moments that matter. Share joy with Shyara Digital.",
  keywords = "digital invitations, wedding invitations, digital cards, celebration invitations, video invitations, shaadi cards, online wedding cards, e-invitations India",
  canonicalUrl = "https://digital.shyara.co.in",
  ogImage = "https://digital.shyara.co.in/shyara.png",
  ogType = "website",
  structuredData,
  breadcrumbs,
  faqItems,
  reviews,
  pageType = "home",
}: SEOProps) => {
  
  // Build array of structured data schemas
  const schemas: object[] = [];
  
  // Add custom structured data if provided
  if (structuredData) {
    schemas.push(structuredData);
  }
  
  // Add organization schema for all pages
  schemas.push(organizationSchema);
  
  // Add website schema for homepage
  if (pageType === "home") {
    schemas.push(websiteSchema);
  }
  
  // Add breadcrumb schema if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }
  
  // Add FAQ schema if provided
  if (faqItems && faqItems.length > 0) {
    schemas.push(generateFAQSchema(faqItems));
  }
  
  // Add review/rating schema if provided
  if (reviews && reviews.length > 0) {
    const aggregateRating = generateAggregateRatingSchema(reviews);
    const reviewsList = generateReviewsSchema(reviews);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Shyara Digital",
      "image": "https://digital.shyara.co.in/logo.png",
      "url": "https://digital.shyara.co.in",
      "telephone": "+91-95846-61610",
      "email": "shyaradigital@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "aggregateRating": aggregateRating,
      "review": reviewsList
    });
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shyara Digital" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Patna" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shyara Digital" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ShyaraDigital" />
      <meta name="twitter:creator" content="@ShyaraDigital" />
      
      {/* Structured Data - Output all schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
