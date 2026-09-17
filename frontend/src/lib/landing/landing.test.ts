import { test } from "node:test";
import assert from "node:assert/strict";

import { assertDistinct, getLandingPage, LANDING_PAGES, landingSlugs, isLandingPath } from "./index.ts";

test("every page clears the quality floor", () => {
  const problems = assertDistinct();
  assert.deepEqual(problems, [], `landing page problems:\n${problems.join("\n")}`);
});

test("slugs are unique and URL safe", () => {
  const slugs = landingSlugs();
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) {
    assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `bad slug: ${slug}`);
  }
});

test("the clusters the plan calls for all exist", () => {
  const clusters = new Set(LANDING_PAGES.map((p) => p.cluster));
  for (const wanted of ["event", "format", "comparison", "guide"]) {
    assert.ok(clusters.has(wanted as never), `missing cluster: ${wanted}`);
  }
});

test("the first-wave slugs from the SEO plan are covered", () => {
  for (const slug of [
    "birthday-invitation-video",
    "boy-birthday-invitation",
    "girl-birthday-invitation",
    "house-warming-invitation",
    "griha-pravesh-invitation",
    "baby-shower-invitation",
    "godh-bharai-invitation",
    "save-the-date-video",
    "engagement-announcement-video",
    "whatsapp-invitation-video",
    "custom-wedding-invitation-video",
    "wedding-invitation-video-whatsapp",
    "invitation-video-vs-invitation-website",
    "custom-vs-template-wedding-invitation",
    "shyara-digital-and-digital-invite",
    "how-to-share-invitation-on-whatsapp",
    "digital-invitation-video-price-india",
  ]) {
    assert.ok(getLandingPage(slug), `missing page: ${slug}`);
  }
});

test("lookup is case-insensitive and rejects nested paths", () => {
  assert.ok(getLandingPage("BIRTHDAY-INVITATION-VIDEO"));
  assert.equal(isLandingPath("/birthday-invitation-video"), true);
  assert.equal(isLandingPath("/invitations/wedding"), false);
  assert.equal(isLandingPath("/not-a-page"), false);
});

test("we did not clone Digital Invite wedding-website slugs", () => {
  for (const slug of [
    "wedding-invitation-video",
    "digital-wedding-invitation",
    "whatsapp-wedding-invitation",
    "hindu-wedding-invitation",
  ]) {
    assert.equal(getLandingPage(slug), undefined, `must not clone Digital Invite slug: ${slug}`);
  }
});
