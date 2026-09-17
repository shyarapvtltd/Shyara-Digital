import {
  absoluteUrl,
  CONTACT,
  DIGITAL_INVITE_URL,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  LEGAL_CITY,
  LEGAL_COUNTRY,
  LEGAL_NAME,
  LEGAL_REGION,
  LEGAL_REGISTERED_OFFICE,
  LOGO_URL,
  SAME_AS,
  SITE_NAME,
  SITE_URL,
  VIDEO_PRICE_FROM_RUPEES,
} from "./site.ts";

type Json = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export function organizationLd(): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(LOGO_URL),
    email: CONTACT.email,
    telephone: CONTACT.phone,
    areaServed: ["IN", "Worldwide"],
    description:
      "Shyara Digital is a custom studio for digital invitation videos. Digital Invite is the sister product for self-serve wedding invitation websites and downloadable cards.",
    sameAs: [...SAME_AS],
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL_REGISTERED_OFFICE,
      addressLocality: LEGAL_CITY,
      addressRegion: LEGAL_REGION,
      addressCountry: LEGAL_COUNTRY,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT.email,
        telephone: CONTACT.phone,
        availableLanguage: ["en", "hi"],
        areaServed: "IN",
      },
    ],
  };
}

export function webSiteLd(): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function localBusinessLd(): Json {
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: SITE_NAME,
    image: absoluteUrl(LOGO_URL),
    url: `${SITE_URL}/`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Bank Transfer, Cash",
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL_REGISTERED_OFFICE,
      addressLocality: LEGAL_CITY,
      addressRegion: LEGAL_REGION,
      addressCountry: LEGAL_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    parentOrganization: { "@id": ORG_ID },
  };
}

export function faqLd(items: ReadonlyArray<{ question: string; answer: string }>): Json {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbLd(trail: ReadonlyArray<{ name: string; path: string }>): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function howToLd(name: string, steps: ReadonlyArray<{ name: string; text: string }>): Json {
  return {
    "@type": "HowTo",
    name,
    totalTime: "P2D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: String(VIDEO_PRICE_FROM_RUPEES),
    },
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function itemListLd(items: ReadonlyArray<{ name: string; path: string }>): Json {
  return {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function contactPageLd(): Json {
  return {
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact"),
    url: absoluteUrl("/contact"),
    name: `Contact ${SITE_NAME}`,
    description: `Write to ${SITE_NAME} on WhatsApp or email about a custom invitation video, card or website.`,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function serviceLd(input: {
  name: string;
  path: string;
  description: string;
}): Json {
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
    serviceType: "Digital invitation design",
  };
}

export function videoObjectLd(input: {
  name: string;
  description: string;
  youtubeId: string;
  duration?: string;
  uploadDate?: string;
}): Json {
  return {
    "@type": "VideoObject",
    name: input.name,
    description: input.description,
    thumbnailUrl: `https://img.youtube.com/vi/${input.youtubeId}/maxresdefault.jpg`,
    uploadDate: input.uploadDate ?? "2026-01-15",
    duration: input.duration ?? "PT45S",
    contentUrl: `https://www.youtube.com/shorts/${input.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${input.youtubeId}`,
    publisher: { "@id": ORG_ID },
  };
}

export function sisterProductLd(): Json {
  return {
    "@type": "Organization",
    "@id": `${DIGITAL_INVITE_URL}/#organization`,
    name: "Digital Invite",
    url: `${DIGITAL_INVITE_URL}/`,
    legalName: LEGAL_NAME,
    description:
      "Self-serve Indian wedding invitation websites and downloadable cards from the same company as Shyara Digital.",
  };
}

export function jsonLdGraph(...blocks: Array<Json | null | undefined>): string {
  const graph = blocks.filter((b): b is Json => !!b);
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
