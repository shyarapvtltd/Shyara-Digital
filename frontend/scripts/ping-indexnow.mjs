/* Tell the search engines what changed, instead of waiting for them to notice.
 *
 *   INDEXNOW_KEY=<key> node scripts/ping-indexnow.mjs
 */

const SITE = (process.env.SITE_URL || "https://digital.shyara.co.in").replace(/\/+$/, "");
const KEY = (process.env.INDEXNOW_KEY || "9a3a6e5a95f842c18d5f6802c5e25cab").trim();
const KEY_LOCATION = `${SITE}/indexnow-key.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const MAX_URLS = 10_000;

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`, { headers: { accept: "application/xml" } });
  if (!res.ok) throw new Error(`sitemap.xml returned HTTP ${res.status}`);
  const xml = await res.text();
  const found = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (found.length === 0) throw new Error("sitemap.xml contained no <loc> entries");
  return found;
}

async function main() {
  const explicit = process.argv.slice(2).filter((arg) => arg.startsWith("http"));
  const urlList = (explicit.length > 0 ? explicit : await urlsFromSitemap()).slice(0, MAX_URLS);

  const keyRes = await fetch(KEY_LOCATION);
  if (!keyRes.ok) {
    throw new Error(`${KEY_LOCATION} returned HTTP ${keyRes.status}.`);
  }
  const served = (await keyRes.text()).trim();
  if (served !== KEY) {
    throw new Error(`${KEY_LOCATION} serves a different key than INDEXNOW_KEY.`);
  }

  const body = {
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`Submitted ${urlList.length} URLs to IndexNow (HTTP ${res.status}).`);
    return;
  }
  const detail = await res.text().catch(() => "");
  throw new Error(`IndexNow returned HTTP ${res.status}. ${detail}`.trim());
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
