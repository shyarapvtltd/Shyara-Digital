import { COMPARISON_PAGES, FORMAT_PAGES } from "./pages-format.ts";
import { EVENT_PAGES } from "./pages-events.ts";
import { GUIDE_PAGES } from "./pages-guides.ts";
import type { LandingCluster, LandingPage } from "./types.ts";

export type { LandingCluster, LandingFaq, LandingPage, LandingSection, LandingTable } from "./types.ts";

export const LANDING_PAGES: LandingPage[] = [
  ...EVENT_PAGES,
  ...FORMAT_PAGES,
  ...COMPARISON_PAGES,
  ...GUIDE_PAGES,
];

const BY_SLUG = new Map<string, LandingPage>();
for (const page of LANDING_PAGES) {
  if (BY_SLUG.has(page.slug)) {
    throw new Error(`landing: duplicate slug "${page.slug}"`);
  }
  BY_SLUG.set(page.slug, page);
}

export function getLandingPage(slug: string): LandingPage | undefined {
  return BY_SLUG.get(slug.toLowerCase());
}

export function landingSlugs(): string[] {
  return [...BY_SLUG.keys()];
}

export function isLandingSlug(slug: string): boolean {
  return BY_SLUG.has(slug.toLowerCase());
}

export function isLandingPath(pathname: string): boolean {
  if (!pathname.startsWith("/")) return false;
  const slug = pathname.slice(1);
  return !slug.includes("/") && isLandingSlug(slug);
}

export function landingPagesInCluster(cluster: LandingCluster): LandingPage[] {
  return LANDING_PAGES.filter((page) => page.cluster === cluster);
}

export function relatedPages(page: LandingPage): LandingPage[] {
  return (page.related ?? [])
    .map((slug) => BY_SLUG.get(slug))
    .filter((p): p is LandingPage => !!p && p.slug !== page.slug);
}

export const EXPLORE_LANDING_SLUGS = [
  "custom-wedding-invitation-video",
  "birthday-invitation-video",
  "house-warming-invitation",
  "baby-shower-invitation",
  "whatsapp-invitation-video",
  "invitation-video-vs-invitation-website",
  "shyara-digital-and-digital-invite",
  "digital-invitation-video-price-india",
] as const;

export function assertDistinct(): string[] {
  const problems: string[] = [];
  const seenAnswers = new Map<string, string>();
  const seenTitles = new Map<string, string>();

  for (const page of LANDING_PAGES) {
    const words = page.answer.trim().split(/\s+/).length;
    if (words > 45) {
      problems.push(`${page.slug}: opening answer is ${words} words, should be 40 or fewer`);
    }
    if (page.sections.length < 3) {
      problems.push(`${page.slug}: only ${page.sections.length} sections, needs at least 3`);
    }
    if (page.faqs.length < 3) {
      problems.push(`${page.slug}: only ${page.faqs.length} FAQs, needs at least 3`);
    }
    if (page.metaDescription.length > 165) {
      problems.push(`${page.slug}: meta description is ${page.metaDescription.length} characters`);
    }

    const answerKey = page.answer.toLowerCase().replace(/\s+/g, " ").trim();
    const dupAnswer = seenAnswers.get(answerKey);
    if (dupAnswer) problems.push(`${page.slug}: opening answer is identical to ${dupAnswer}`);
    else seenAnswers.set(answerKey, page.slug);

    const titleKey = page.title.toLowerCase().trim();
    const dupTitle = seenTitles.get(titleKey);
    if (dupTitle) problems.push(`${page.slug}: title is identical to ${dupTitle}`);
    else seenTitles.set(titleKey, page.slug);

    for (const related of page.related ?? []) {
      if (!BY_SLUG.has(related)) {
        problems.push(`${page.slug}: related slug "${related}" does not exist`);
      }
    }

    const copy = [
      page.title,
      page.h1,
      page.metaDescription,
      page.answer,
      ...page.sections.flatMap((s) => [s.heading, ...s.body, ...(s.bullets ?? [])]),
      ...page.faqs.flatMap((f) => [f.question, f.answer]),
    ].join(" ");
    if (copy.includes("—") || copy.includes("–")) {
      problems.push(`${page.slug}: contains an em dash or en dash`);
    }
  }

  return problems;
}
