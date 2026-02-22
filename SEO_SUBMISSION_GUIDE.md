# Shyara Digital — Complete SEO Submission & Setup Guide

**Website:** https://digital.shyara.co.in
**Date:** February 2026

This document covers every action you need to take outside the codebase to ensure your website is fully indexed, tracked, and discoverable by search engines, AI models, and social platforms.

---

## Table of Contents

1. [Google Search Console](#1-google-search-console)
2. [Google Analytics 4](#2-google-analytics-4)
3. [Bing Webmaster Tools](#3-bing-webmaster-tools)
4. [Yandex Webmaster](#4-yandex-webmaster)
5. [Google Business Profile](#5-google-business-profile)
6. [YouTube Channel SEO](#6-youtube-channel-seo)
7. [Social Media Profiles](#7-social-media-profiles)
8. [Rich Results Testing](#8-rich-results-testing)
9. [Page Speed & Core Web Vitals](#9-page-speed--core-web-vitals)
10. [IndexNow (Instant Indexing)](#10-indexnow-instant-indexing)
11. [AI Discoverability Verification](#11-ai-discoverability-verification)
12. [Ongoing SEO Maintenance Checklist](#12-ongoing-seo-maintenance-checklist)

---

## 1. Google Search Console

Google Search Console (GSC) is the most important tool. It tells Google your site exists, lets you submit your sitemap, monitor indexing, and see what queries bring traffic.

### Step 1: Add Your Property

1. Go to **https://search.google.com/search-console**
2. Sign in with the Google account you want to manage the site with
3. Click **"Add Property"**
4. Choose **"URL prefix"** and enter: `https://digital.shyara.co.in`
5. Click **Continue**

### Step 2: Verify Ownership

Choose **"HTML tag"** verification method:

1. Google will give you a code like: `<meta name="google-site-verification" content="abc123xyz" />`
2. Copy **only the content value** (e.g., `abc123xyz`)
3. Open `index.html` in your project
4. Find this line:
   ```html
   <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_CODE" />
   ```
5. Replace `YOUR_GOOGLE_SEARCH_CONSOLE_CODE` with your actual code
6. Deploy the updated site
7. Go back to Google Search Console and click **"Verify"**

### Step 3: Submit Your Sitemap

1. In the left sidebar, click **"Sitemaps"**
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **"Submit"**
4. Status should change to **"Success"** (may take a few minutes)

### Step 4: Request Indexing for Key Pages

1. Go to **"URL Inspection"** (top search bar)
2. Enter each of these URLs one by one and click **"Request Indexing"** for each:
   - `https://digital.shyara.co.in/`
   - `https://digital.shyara.co.in/invitations`
   - `https://digital.shyara.co.in/samples`
   - `https://digital.shyara.co.in/invitation-website`
   - `https://digital.shyara.co.in/invitation-website/demo`
   - `https://digital.shyara.co.in/faqs`
   - `https://digital.shyara.co.in/contact`
3. Google allows ~10 indexing requests per day — do the most important pages first

### Step 5: Check Coverage

1. After 2-3 days, go to **"Pages"** (left sidebar, under "Indexing")
2. Check the "Why pages aren't indexed" section
3. Fix any issues flagged (common: "Discovered - currently not indexed", "Crawled - currently not indexed")

### Step 6: Monitor Performance

1. Go to **"Performance"** tab
2. Click **"Search results"**
3. Enable **Clicks**, **Impressions**, **CTR**, and **Position** checkboxes
4. This is where you see which keywords bring traffic — check weekly

---

## 2. Google Analytics 4

GA4 tracks who visits your site, where they come from, what pages they view, and how they behave.

### Setup

1. Go to **https://analytics.google.com**
2. Click **"Start measuring"** (or "Admin" > "Create" > "Property")
3. Enter:
   - Property name: `Shyara Digital`
   - Timezone: `India Standard Time (GMT+5:30)`
   - Currency: `Indian Rupee (INR)`
4. Click **Next**, select **"Business"**, then your business objectives
5. Click **"Create"**
6. Choose **"Web"** as your platform
7. Enter:
   - Website URL: `digital.shyara.co.in`
   - Stream name: `Shyara Digital Website`
8. Click **"Create stream"**

### Install the Tracking Code

1. You'll get a **Measurement ID** that looks like: `G-XXXXXXXXXX`
2. You'll also get a `gtag.js` script snippet. It looks like:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
3. Add this snippet to the `<head>` section of your `index.html`, just before the closing `</head>` tag
4. Deploy the updated site

### Verify It's Working

1. Go to your website in a browser
2. In GA4, go to **"Reports"** > **"Real-time"**
3. You should see yourself as an active user

### Link GA4 to Search Console

1. In GA4, go to **Admin** > **Product links** > **Search Console links**
2. Click **"Link"**
3. Select your Search Console property
4. Click **"Submit"**
5. This connects keyword data from Search Console directly into GA4

---

## 3. Bing Webmaster Tools

Bing powers searches on Bing, Yahoo, DuckDuckGo, and many AI assistants (including Copilot). Don't skip this.

### Setup

1. Go to **https://www.bing.com/webmasters**
2. Sign in with a Microsoft account
3. Click **"Add your site manually"**
4. Enter: `https://digital.shyara.co.in`

### Verify Ownership

1. Choose **"HTML Meta Tag"** verification
2. Copy the content value from the meta tag they provide
3. In `index.html`, replace `YOUR_BING_WEBMASTER_CODE` with your actual code:
   ```html
   <meta name="msvalidate.01" content="YOUR_ACTUAL_BING_CODE" />
   ```
4. Deploy and click **"Verify"** in Bing Webmaster Tools

### Submit Sitemap

1. Go to **"Sitemaps"** in the left sidebar
2. Enter: `https://digital.shyara.co.in/sitemap.xml`
3. Click **"Submit"**

### Import from Google (Alternative)

If you've already set up Google Search Console, Bing offers a one-click import:
1. On the Bing Webmaster Tools home page, click **"Import from GSC"**
2. Sign in with the same Google account
3. Select your property and import — this brings over your sitemap and verification automatically

---

## 4. Yandex Webmaster

Yandex is the dominant search engine in Russia and is used across Eastern Europe and Central Asia. Setting it up is free and takes 5 minutes.

### Setup

1. Go to **https://webmaster.yandex.com**
2. Sign in or create a Yandex account
3. Click **"Add site"**
4. Enter: `https://digital.shyara.co.in`

### Verify Ownership

1. Choose **"HTML meta tag"** verification
2. Copy the content value
3. In `index.html`, replace `YOUR_YANDEX_CODE`:
   ```html
   <meta name="yandex-verification" content="YOUR_ACTUAL_YANDEX_CODE" />
   ```
4. Deploy and click **"Check"**

### Submit Sitemap

1. Go to **"Indexing"** > **"Sitemap files"**
2. Add: `https://digital.shyara.co.in/sitemap.xml`
3. Click **"Add"**

---

## 5. Google Business Profile

A Google Business Profile (GBP) is critical for local SEO and appearing in Google Maps. Even though you serve clients worldwide, having a verified local profile signals trust.

### Setup

1. Go to **https://business.google.com**
2. Sign in with the same Google account as Search Console
3. Click **"Add your business to Google"**
4. Enter:
   - Business name: `Shyara Digital`
   - Business category: `Graphic Designer` or `Wedding Service` (primary), add `Video Production Service` and `Invitation Service` as secondary
   - Service area: Select **"I deliver goods and services to my customers"** and add regions you serve (India, United States, United Kingdom, etc. — or select "Serves customers worldwide")
5. Add your contact info:
   - Phone: +91 95846 61610
   - Website: `https://digital.shyara.co.in`
6. Verify your business (Google will send a postcard to your address, or may offer phone/email verification)

### Optimize Your Profile

After verification:

1. **Add description**: "Shyara Digital creates beautiful, custom digital invitation cards and videos for weddings, celebrations, and special moments. Custom designs, not templates. 24-48 hour delivery. Serving clients worldwide."
2. **Add photos**: Upload your best invitation samples (screenshots of videos, invitation website demo)
3. **Add services**: List each service — Wedding Invitation Video, Engagement Invitation, Save the Date Video, PDF Invitation Card, Custom Invitation Website
4. **Set hours**: Monday-Sunday, 9:00 AM - 9:00 PM
5. **Enable messaging**: Let potential clients message you directly
6. **Post updates**: Share new samples, offers, or testimonials as Google Posts (aim for 1 post per week)
7. **Collect reviews**: Ask happy clients to leave Google reviews — this is the single most impactful thing for local SEO

---

## 6. YouTube Channel SEO

Your sample videos live on YouTube. Optimizing the channel and videos helps them appear in both YouTube and Google search results.

### Channel Optimization

1. Go to **https://studio.youtube.com**
2. Click **"Customization"** > **"Basic info"**
3. Update:
   - **Channel name**: `Shyara Digital`
   - **Handle**: `@Shyaradigital`
   - **Description**: Include keywords naturally:
     > Shyara Digital creates beautiful, custom digital invitation videos for weddings, engagements, birthdays, and celebrations. Every invitation is handcrafted — not generated from templates. Serving clients worldwide.
     >
     > Services: Wedding Invitation Videos, Engagement Invitations, Save the Date Videos, PDF Invitation Cards, Custom Invitation Websites with RSVP
     >
     > Order via WhatsApp: +91 95846 61610
     > Website: https://digital.shyara.co.in
   - **Links**: Add your website link, Instagram, Facebook
   - **Contact email**: shyaradigital@gmail.com
4. Upload a **banner image** (2560 x 1440 px) with your brand name and tagline
5. Upload a **profile picture** (use your logo)

### Video Optimization (for each sample video)

For every video on your channel, update:

1. **Title**: Include keywords. Example:
   - "Wedding Invitation Video | Custom Digital Shaadi Card | Shyara Digital"
   - "Engagement Invitation Video | Sagai Card | Shyara Digital"
   - "Save the Date Video | Wedding Announcement | Shyara Digital"

2. **Description** (first 2 lines are critical — they show in search results):
   ```
   Beautiful custom wedding invitation video by Shyara Digital. Order your personalized digital invitation today!

   WhatsApp: +91 95846 61610
   Website: https://digital.shyara.co.in
   Samples: https://digital.shyara.co.in/samples
   Instagram: https://www.instagram.com/shyaradigital

   Custom digital invitation videos for weddings, engagements, birthdays, and celebrations. Every invitation is handcrafted by our designers — not auto-generated from templates. Ready in 24-48 hours. Serving clients worldwide.

   #WeddingInvitation #DigitalInvitation #ShaadiCard #WeddingVideo #ShyaraDigital
   ```

3. **Tags** (add to each video):
   - wedding invitation video, digital invitation, shaadi card, wedding card video, custom wedding invitation, WhatsApp wedding invitation, video invitation maker, engagement invitation, save the date, Shyara Digital, nimantran patra, sagai card, shubh vivah

4. **Thumbnail**: Create custom thumbnails (1280 x 720 px) — bright colors, readable text, faces if possible

5. **End screens**: Add end screens linking to your other videos and a subscribe button

6. **Cards**: Add cards linking to your website

7. **Playlists**: Create playlists:
   - "Wedding Invitation Samples"
   - "Engagement Invitation Samples"
   - "Save the Date Samples"

---

## 7. Social Media Profiles

Every social media profile is a backlink and a trust signal. Make sure all profiles link back to your website.

### Instagram (@shyaradigital)

1. **Bio**: Include keywords and your website link
   ```
   Shyara Digital ✨
   Custom Digital Invitations
   Wedding | Engagement | Birthday | Pooja
   📹 Video Invitations | 🌐 Invitation Websites
   ⏰ 24-48hr Delivery | 🌍 Worldwide
   ```
2. **Link in bio**: Use `https://digital.shyara.co.in` (or a Linktree with all links)
3. **Highlights**: Create highlights for — Samples, Reviews, Process, Website Demo

### Facebook (facebook.com/shyaradigital)

1. **About section**: Full description with keywords and website link
2. **Category**: "Digital Creator" or "Graphic Design" or "Wedding Planning Service"
3. **Call to action button**: Set to "Send WhatsApp Message" or "Visit Website"
4. **Services tab**: Add all your services with descriptions

### Other Platforms to Create Profiles On

These create backlinks and improve your domain authority:

| Platform | URL | What to Do |
|---|---|---|
| **Pinterest** | pinterest.com | Create a business account, pin invitation samples with keyword-rich descriptions, link each pin to your samples page |
| **LinkedIn** | linkedin.com | Create a company page for "Shyara Digital" with full description and website link |
| **Google Maps** | (via Google Business Profile) | Already covered above |
| **Justdial** | justdial.com | List your business (free) — strong backlink for Indian businesses |
| **IndiaMART** | indiamart.com | List your services (free tier available) |
| **Sulekha** | sulekha.com | List under "Invitation Card Designers" |

---

## 8. Rich Results Testing

After deploying, validate that your structured data (JSON-LD schemas) are correctly recognized by Google.

### Test Each Page

Go to **https://search.google.com/test/rich-results** and test these URLs:

| URL | Expected Rich Results |
|---|---|
| `https://digital.shyara.co.in/` | Organization, LocalBusiness, WebSite, AggregateRating, Reviews |
| `https://digital.shyara.co.in/invitations` | BreadcrumbList |
| `https://digital.shyara.co.in/samples` | VideoObject (17 videos), CollectionPage, BreadcrumbList |
| `https://digital.shyara.co.in/invitation-website` | Service, Product, BreadcrumbList |
| `https://digital.shyara.co.in/faqs` | FAQPage (15 questions), BreadcrumbList |
| `https://digital.shyara.co.in/contact` | BreadcrumbList |

### Also Test With

- **Schema Markup Validator**: https://validator.schema.org — paste your URL and check for errors/warnings
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/ — enter your URL to verify Open Graph tags and preview how links appear on Facebook/WhatsApp
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator — verify Twitter card appearance
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/ — verify LinkedIn preview

---

## 9. Page Speed & Core Web Vitals

Google uses page speed and Core Web Vitals (LCP, FID, CLS) as ranking factors.

### Run These Tests

1. **Google PageSpeed Insights**: https://pagespeed.web.dev
   - Test: `https://digital.shyara.co.in`
   - Aim for: **90+ on both Mobile and Desktop**
   - Fix any red/orange flagged items

2. **GTmetrix**: https://gtmetrix.com
   - More detailed waterfall analysis
   - Check for large images, render-blocking resources, slow server response

3. **Web.dev Measure**: https://web.dev/measure
   - Comprehensive audit including accessibility, best practices, SEO score

### Common Fixes

- Ensure images are optimized (WebP format, proper dimensions)
- Lazy-load YouTube video embeds (load on interaction, not on page load)
- Ensure fonts have `font-display: swap`
- Check that no JavaScript blocks rendering

---

## 10. IndexNow (Instant Indexing)

IndexNow is a protocol that instantly notifies Bing, Yandex, DuckDuckGo, and other search engines when your content changes. Instead of waiting for them to crawl, you tell them immediately.

### Setup

1. **Generate an API key**: Go to https://www.indexnow.org/documentation
2. Create a text file with your key. For example, if your key is `abc123def456`:
   - Create file: `public/abc123def456.txt`
   - Contents of the file: `abc123def456` (just the key itself)
3. Deploy the file

### Submit URLs

After deploying any content update, send a POST request:

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "digital.shyara.co.in",
    "key": "abc123def456",
    "urlList": [
      "https://digital.shyara.co.in/",
      "https://digital.shyara.co.in/invitations",
      "https://digital.shyara.co.in/samples",
      "https://digital.shyara.co.in/invitation-website",
      "https://digital.shyara.co.in/faqs",
      "https://digital.shyara.co.in/contact"
    ]
  }'
```

Or use Bing Webmaster Tools — they have a built-in IndexNow submission UI under **"Submit URLs"**.

---

## 11. AI Discoverability Verification

Your site now has `llms.txt` and `llms-full.txt` for AI models. Here's how to verify and improve AI discoverability.

### Verify Files Are Accessible

After deploying, open these URLs in a browser and confirm they load:

- https://digital.shyara.co.in/llms.txt
- https://digital.shyara.co.in/llms-full.txt
- https://digital.shyara.co.in/robots.txt (confirm llms.txt references are present)

### Test With AI Models

After your site has been live for a few weeks, test by asking these questions on each platform:

| AI Platform | How to Test |
|---|---|
| **ChatGPT** (chat.openai.com) | Ask: "Recommend a digital wedding invitation video service" and "What is Shyara Digital?" |
| **Google Gemini** (gemini.google.com) | Ask: "Best digital wedding invitation maker" and "Shyara Digital reviews" |
| **Perplexity** (perplexity.ai) | Ask: "Custom wedding invitation video service India" — Perplexity cites sources, so you can verify it finds your site |
| **Bing Copilot** (copilot.microsoft.com) | Ask: "Digital wedding invitation with RSVP website" |
| **Claude** (claude.ai) | Ask: "Tell me about Shyara Digital invitation services" |

### Boost AI Recommendations

AI models recommend businesses that have:

- **Consistent NAP** (Name, Address, Phone) across all platforms
- **Real customer reviews** on Google, Facebook, and other platforms
- **Active social media** with regular posts
- **Backlinks from real websites** (directories, blogs, news mentions)
- **Structured data** on the website (already implemented)
- **Content that answers questions** (your 15 FAQs help massively here)

### Submit to AI Directories (Optional)

- **ChatGPT Plugins/GPTs**: If you build a GPT for your service, it becomes searchable in the GPT Store
- **Bing Places**: https://www.bingplaces.com — ensures Copilot can find your business info
- **Apple Business Connect**: https://businessconnect.apple.com — for Siri and Apple Maps discoverability

---

## 12. Ongoing SEO Maintenance Checklist

SEO is not a one-time task. Here's what to do on a regular schedule.

### Weekly (15 minutes)

- [ ] Check **Google Search Console** > Performance — note any rising/falling queries
- [ ] Post 1-2 new reels/posts on **Instagram** showcasing recent work
- [ ] Share any new samples on **YouTube** with optimized titles/descriptions
- [ ] Post a **Google Business Profile** update (new sample, client testimonial, or offer)

### Monthly (30 minutes)

- [ ] Check **Google Search Console** > Pages — fix any new crawl errors
- [ ] Check **PageSpeed Insights** — ensure scores haven't dropped
- [ ] Ask 1-2 happy clients to leave a **Google review**
- [ ] Review **GA4 analytics** — which pages get the most traffic? Which have high bounce rates?
- [ ] Update the `lastmod` dates in `sitemap.xml` if any pages were changed
- [ ] Re-submit sitemap in GSC if pages were added/changed

### Quarterly (1 hour)

- [ ] Run **Rich Results Test** on all key pages — fix any new warnings
- [ ] Search for your brand name and key queries on Google — are you showing up? Where do you rank?
- [ ] Check competitor websites — are they doing anything new?
- [ ] Add new FAQ items based on actual customer questions
- [ ] Update `llms.txt` and `llms-full.txt` if services or details changed
- [ ] Add new video samples to the site, sitemap, and YouTube with SEO-optimized metadata
- [ ] Test AI discoverability — ask ChatGPT/Gemini/Perplexity about your services

### When You Add New Content

Every time you add a new video sample, page, or service:

1. Add it to the website
2. Add it to `sitemap.xml` with proper metadata
3. Update `llms.txt` and `llms-full.txt` if relevant
4. Request indexing in Google Search Console (URL Inspection > Request Indexing)
5. Submit via IndexNow for instant Bing/Yandex indexing
6. Share on social media

---

## Summary: Priority Order

Do these in order of importance:

| Priority | Task | Time Needed |
|---|---|---|
| 1 | Google Search Console setup + sitemap submission | 15 min |
| 2 | Google Analytics 4 setup + install tracking code | 15 min |
| 3 | Request indexing for all 7 key pages | 10 min |
| 4 | Google Business Profile setup | 20 min |
| 5 | Bing Webmaster Tools setup + sitemap | 10 min |
| 6 | YouTube channel + video SEO optimization | 30 min |
| 7 | Rich Results testing + fix any issues | 15 min |
| 8 | Facebook/Instagram profile optimization | 15 min |
| 9 | Yandex Webmaster setup | 10 min |
| 10 | PageSpeed Insights check | 10 min |
| 11 | IndexNow setup | 10 min |
| 12 | AI discoverability testing | 15 min |

**Total estimated time: ~3 hours** (one-time setup)

---

## Files Already Set Up in Your Codebase

These files are already configured and will work once you deploy and add the verification codes:

| File | Status | Action Needed |
|---|---|---|
| `public/sitemap.xml` | Done | Auto-submitted via robots.txt |
| `public/robots.txt` | Done | No action needed |
| `public/llms.txt` | Done | Verify accessible after deploy |
| `public/llms-full.txt` | Done | Verify accessible after deploy |
| `index.html` meta tags | Placeholders | Replace `YOUR_GOOGLE_SEARCH_CONSOLE_CODE`, `YOUR_BING_WEBMASTER_CODE`, `YOUR_YANDEX_CODE` with real codes |
| `index.html` GA4 script | Not added | Add GA4 gtag.js snippet after creating GA4 property |
| Structured data (JSON-LD) | Done | Test with Rich Results Test after deploy |
| Open Graph tags | Done | Test with Facebook Debugger after deploy |
| Twitter Card tags | Done | Test with Twitter Card Validator after deploy |

---

*This guide was prepared for Shyara Digital (https://digital.shyara.co.in) — February 2026*
