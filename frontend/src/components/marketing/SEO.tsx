import { Helmet } from "react-helmet-async";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import {
  breadcrumbLd,
  faqLd,
  jsonLdGraph,
  organizationLd,
  webSiteLd,
} from "@/lib/structuredData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  additionalStructuredData?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: FAQItem[];
  noIndex?: boolean;
  /** Kept so existing pages compile; not emitted into JSON-LD. */
  pageType?: string;
  reviews?: unknown;
}

function asArray(value: object | object[] | undefined): object[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function stripFakeCounts(block: object): object {
  const copy = JSON.parse(JSON.stringify(block)) as Record<string, unknown>;
  const walk = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    const rec = node as Record<string, unknown>;
    delete rec.interactionStatistic;
    delete rec.potentialAction;
    delete rec.aggregateRating;
    Object.values(rec).forEach(walk);
  };
  walk(copy);
  return copy;
}

const SEO = ({
  title = `${SITE_NAME} | Custom digital invitations`,
  description = "Handcrafted digital invitation videos and cards for weddings, birthdays, house warming and baby showers.",
  keywords,
  canonicalUrl,
  path,
  ogImage = `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  ogType = "website",
  structuredData,
  additionalStructuredData,
  breadcrumbs,
  faqItems,
  noIndex = false,
}: SEOProps) => {
  const url = canonicalUrl || absoluteUrl(path || "/");
  const extras = [...asArray(structuredData), ...asArray(additionalStructuredData)].map(stripFakeCounts);

  const graph = jsonLdGraph(
    organizationLd(),
    webSiteLd(),
    breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbLd(
          breadcrumbs.map((crumb) => ({
            name: crumb.name,
            path: crumb.url.replace(SITE_URL, "") || "/",
          })),
        )
      : null,
    faqItems && faqItems.length > 0 ? faqLd(faqItems) : null,
    ...extras,
  );

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{graph}</script>
    </Helmet>
  );
};

export default SEO;
