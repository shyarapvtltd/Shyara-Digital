/**
 * One place for the facts every marketing surface repeats.
 *
 * Price, delivery, company and contact details appear on the home page, category pages, the FAQ,
 * every programmatic landing page, the JSON-LD blocks, the sitemap and llms.txt. When they are
 * written out by hand in each of those places they drift. They are constants here instead.
 */

export const SITE_URL = (
  (typeof process !== "undefined" && (process.env.VITE_SITE_URL || process.env.SITE_URL)) ||
  "https://digital.shyara.co.in"
).replace(/\/+$/, "");

export const SITE_NAME = "Shyara Digital";
export const LEGAL_NAME = "Shyara Tech Solution (OPC) Private Limited";
export const LEGAL_CIN = "U62011BR2025OPC080949";
export const LEGAL_GSTIN = "10ABSCS1802N1Z8";
export const LEGAL_REGISTERED_OFFICE =
  "Lata Kunj, Jai Hanuman Colony, Bazar Samiti, Patna, 800006, Bihar";
export const LEGAL_CITY = "Patna";
export const LEGAL_REGION = "Bihar";
export const LEGAL_COUNTRY = "IN";
export const GEO_LATITUDE = "25.6093";
export const GEO_LONGITUDE = "85.1376";

export const TAGLINE = "Invite with Love, Share with Joy";
export const DEFAULT_TITLE =
  "Custom digital invitation videos for weddings and celebrations";
export const DEFAULT_DESCRIPTION =
  "Handcrafted digital invitation videos and cards for weddings, birthdays, house warming and baby showers. WhatsApp-ready in 24 to 48 hours. Studio in Patna, serving families worldwide.";

/** Lowest published video price currently shown on the gallery, in rupees. */
export const VIDEO_PRICE_FROM_RUPEES = 399;
export const VIDEO_PRICE_FROM_DISPLAY = "₹399";
export const WEDDING_VIDEO_PRICE_FROM_DISPLAY = "₹999";
export const DELIVERY_HOURS = "24 to 48 hours";

export const DIGITAL_INVITE_URL = "https://digitalinvite.in";
export const DIGITAL_INVITE_TEMPLATES_URL = `${DIGITAL_INVITE_URL}/templates`;
export const DIGITAL_INVITE_CARDS_URL = `${DIGITAL_INVITE_URL}/cards`;
export const DIGITAL_INVITE_VIDEOS_URL = `${DIGITAL_INVITE_URL}/videos`;
export const DIGITAL_INVITE_FROM_PRICE = "₹1,699";

export const INSTAGRAM_URL = "https://www.instagram.com/shyaradigital";
export const FACEBOOK_URL = "https://www.facebook.com/shyaradigital";
export const YOUTUBE_URL = "https://www.youtube.com/@Shyaradigital";

export const CONTACT = {
  whatsapp: "https://wa.me/919584661610",
  phone: "+919584661610",
  phoneDisplay: "+91 95846 61610",
  email: "shyaradigital@gmail.com",
  instagram: INSTAGRAM_URL,
} as const;

export const SAME_AS = [
  INSTAGRAM_URL,
  FACEBOOK_URL,
  YOUTUBE_URL,
  DIGITAL_INVITE_URL,
] as const;

export const DEFAULT_OG_IMAGE = "/shyara.png";
export const DEFAULT_OG_IMAGE_ALT = "Shyara Digital custom digital invitations";
export const LOGO_URL = "/android-chrome-s-20260408-512x512.png";

export function defaultShareImages(alt = DEFAULT_OG_IMAGE_ALT) {
  return [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt,
    },
  ];
}

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappUrl(text: string): string {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
