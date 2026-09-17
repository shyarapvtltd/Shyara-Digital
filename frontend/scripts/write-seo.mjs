import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { faqs } from "../src/lib/faqs.ts";
import { invitationCategories } from "../src/lib/invitations.ts";
import { LANDING_PAGES } from "../src/lib/landing/index.ts";
import { buildLlmsText } from "../src/lib/llms.ts";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  DIGITAL_INVITE_CARDS_URL,
  DIGITAL_INVITE_TEMPLATES_URL,
  SITE_URL,
  absoluteUrl,
} from "../src/lib/site.ts";
import {
  breadcrumbLd,
  faqLd,
  jsonLdGraph,
  organizationLd,
  webSiteLd,
} from "../src/lib/structuredData.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const INDEXNOW_KEY = "9a3a6e5a95f842c18d5f6802c5e25cab";
const TODAY = new Date().toISOString().slice(0, 10);

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function graph(...blocks) {
  return jsonLdGraph(organizationLd(), webSiteLd(), ...blocks);
}

function crumbs(...trail) {
  return breadcrumbLd(trail);
}

const CORE_PAGES = [
  {
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    priority: "1.0",
    jsonLd: graph(crumbs({ name: "Home", path: "/" })),
  },
  {
    path: "/invitations",
    title: "Invitations Gallery | Video Invitation Examples | Shyara Digital",
    description:
      "Browse our invitations gallery of beautiful digital invitations. See examples of wedding videos, engagement announcements, birthdays, baby showers, house warming invitations, and more.",
    priority: "0.9",
    jsonLd: graph(
      crumbs({ name: "Home", path: "/" }, { name: "Invitations", path: "/invitations" }),
    ),
  },
  {
    path: "/about",
    title: "About Shyara Digital",
    description:
      "Shyara Digital is the custom invitation studio of Shyara Tech Solution (OPC) Private Limited in Patna. Digital Invite is the sister product for self-serve wedding websites.",
    priority: "0.7",
    jsonLd: graph(crumbs({ name: "Home", path: "/" }, { name: "About", path: "/about" })),
  },
  {
    path: "/faqs",
    title: "Frequently Asked Questions | Shyara Digital",
    description:
      "Find answers to common questions about our digital invitation services. Learn about delivery times, customization options, pricing, and how to get started with your celebration invitations.",
    priority: "0.7",
    jsonLd: graph(
      crumbs({ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }),
      faqLd(faqs),
    ),
  },
  {
    path: "/contact",
    title: "Contact Us | Shyara Digital - Create Your Perfect Invitation",
    description:
      "Get in touch with Shyara Digital to create beautiful digital invitations for your wedding, engagement, birthday, baby shower, house warming, or any celebration. Serving clients worldwide via WhatsApp, email, or phone.",
    priority: "0.7",
    jsonLd: graph(crumbs({ name: "Home", path: "/" }, { name: "Contact", path: "/contact" })),
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Shyara Digital",
    description: "How Shyara Digital collects, uses and protects personal information.",
    priority: "0.3",
    jsonLd: graph(
      crumbs({ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }),
    ),
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Shyara Digital",
    description: "Terms for using Shyara Digital invitation videos, cards and websites.",
    priority: "0.3",
    jsonLd: graph(
      crumbs(
        { name: "Home", path: "/" },
        { name: "Terms of Service", path: "/terms-of-service" },
      ),
    ),
  },
];

const CATEGORY_PAGES = invitationCategories.map((category) => ({
  path: `/invitations/${category.slug}`,
  title: category.h1,
  description: category.answer,
  priority: "0.8",
  jsonLd: graph(
    crumbs(
      { name: "Home", path: "/" },
      { name: "Invitations", path: "/invitations" },
      { name: category.title, path: `/invitations/${category.slug}` },
    ),
    faqLd([
      {
        question: `Do you make custom ${category.title.toLowerCase()} invitation videos?`,
        answer: category.answer,
      },
      {
        question: "How long does delivery take?",
        answer: "Most videos are ready in 24 to 48 hours after you send the details.",
      },
    ]),
  ),
}));

const LANDING_HTML_PAGES = LANDING_PAGES.map((page) => ({
  path: `/${page.slug}`,
  title: page.title,
  description: page.metaDescription,
  priority: "0.6",
  jsonLd: graph(
    crumbs(
      { name: "Home", path: "/" },
      { name: page.clusterLabel, path: "/" },
      { name: page.h1, path: `/${page.slug}` },
    ),
    faqLd(page.faqs),
  ),
}));

const DEMO_PAGES = [
  "/invitation-website/demo",
  "/invitation-website/demo/save-the-date",
  "/invitation-website/demo/venue-travel",
  "/invitation-website/demo/gallery",
  "/invitation-website/demo/rsvp",
  "/invitation-website/demo/dashboard",
  "/invitation-website/demo/events/mehndi",
  "/invitation-website/demo/events/wedding",
  "/invitation-website/demo/events/reception",
].map((path) => ({
  path,
  title: "Invitation website demo | Shyara Digital",
  description: "Sample invitation website. This is a demo, not a live wedding.",
  noIndex: true,
  jsonLd: graph(),
}));

const PUBLIC_PAGES = [...CORE_PAGES, ...CATEGORY_PAGES, ...LANDING_HTML_PAGES];

function upsert(html, pattern, tag) {
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function applyHead(html, page) {
  const title = esc(page.title);
  const description = esc(page.description);
  const canonical = esc(absoluteUrl(page.path));
  const robots = page.noIndex ? "noindex, nofollow" : "index, follow";
  let out = html;

  out = upsert(out, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  out = upsert(
    out,
    /<meta name="description" content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${description}" />`,
  );
  out = upsert(
    out,
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );
  out = upsert(
    out,
    /<meta property="og:title" content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  out = upsert(
    out,
    /<meta property="og:description" content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  out = upsert(
    out,
    /<meta property="og:url" content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`,
  );
  out = upsert(
    out,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );
  out = upsert(
    out,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );
  out = upsert(
    out,
    /<meta name="robots" content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="${robots}" />`,
  );

  out = out.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "");
  if (page.jsonLd) {
    out = out.replace(
      "</head>",
      `    <script type="application/ld+json">${page.jsonLd}</script>\n  </head>`,
    );
  }

  out = out.replace(
    /<noscript>[\s\S]*?<\/noscript>/i,
    `<noscript>\n      <h1>${title}</h1>\n      <p>${description}</p>\n    </noscript>`,
  );

  return out;
}

function destFile(path) {
  if (path === "/") return join(DIST, "index.html");
  return join(DIST, path.replace(/^\//, ""), "index.html");
}

async function writeHtml(template, page) {
  const file = destFile(page.path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, applyHead(template, page), "utf8");
}

const EXTERNAL_REDIRECTS = [
  ["/invitation-website", DIGITAL_INVITE_TEMPLATES_URL],
  ["/templates", DIGITAL_INVITE_TEMPLATES_URL],
  ["/diy-wedding-website", DIGITAL_INVITE_TEMPLATES_URL],
  ["/cards", DIGITAL_INVITE_CARDS_URL],
  ["/digital-cards", DIGITAL_INVITE_CARDS_URL],
];

async function writeExternalRedirects() {
  for (const [path, to] of EXTERNAL_REDIRECTS) {
    const file = destFile(path);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(
      file,
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=${to}" />
    <link rel="canonical" href="${to}" />
    <title>Redirecting</title>
    <script>location.replace(${JSON.stringify(to)})</script>
  </head>
  <body>
    <p><a href="${to}">Continue</a></p>
  </body>
</html>
`,
      "utf8",
    );
  }
}

function sitemapXml() {
  const urls = PUBLIC_PAGES.map(
    (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

function robotsTxt() {
  return `# Robots.txt for Shyara Digital
# ${SITE_URL}

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

User-agent: *
Allow: /
Disallow: /invitation-website/demo/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

async function main() {
  const template = await readFile(join(DIST, "index.html"), "utf8");

  for (const page of [...PUBLIC_PAGES, ...DEMO_PAGES]) {
    await writeHtml(template, page);
  }
  await writeExternalRedirects();

  await writeFile(join(DIST, "robots.txt"), robotsTxt(), "utf8");
  await writeFile(join(DIST, "sitemap.xml"), sitemapXml(), "utf8");
  await writeFile(join(DIST, "llms.txt"), buildLlmsText(false), "utf8");
  await writeFile(join(DIST, "llms-full.txt"), buildLlmsText(true), "utf8");
  await writeFile(join(DIST, "indexnow-key.txt"), `${INDEXNOW_KEY}\n`, "utf8");
  await writeFile(join(DIST, `${INDEXNOW_KEY}.txt`), `${INDEXNOW_KEY}\n`, "utf8");

  console.log(
    `SEO: wrote ${PUBLIC_PAGES.length} indexable HTML files, ${DEMO_PAGES.length} noindex demo files, sitemap, robots, llms.txt.`,
  );
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
