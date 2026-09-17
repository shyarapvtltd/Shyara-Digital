import type { LandingPage } from "./types.ts";
import { VIDEO_PRICE_FROM_DISPLAY, WEDDING_VIDEO_PRICE_FROM_DISPLAY, DELIVERY_HOURS } from "../site.ts";

export const GUIDE_PAGES: LandingPage[] = [
  {
    slug: "how-to-share-invitation-on-whatsapp",
    cluster: "guide",
    clusterLabel: "Guides",
    title: "How to Share an Invitation on WhatsApp",
    h1: "How to share an invitation video on WhatsApp",
    metaDescription:
      "Save the MP4 we send, open WhatsApp, attach the video to the family group. Status and Stories work with the same 9:16 file. No app to install.",
    answer:
      "Save the MP4 we send you, open WhatsApp, and attach that video to the family group or to a broadcast list. The same 9:16 file also works as a Status post.",
    sections: [
      {
        heading: "Send in the group",
        body: ["Three steps, and none of them need a website login."],
        bullets: [
          "Download the MP4 from the link we send, or from WhatsApp if we delivered it there",
          "Open the family group",
          "Tap attach, pick the video, add a short line with the date, send",
        ],
      },
      {
        heading: "Status and Stories",
        body: [
          "Because the file is vertical, it fills Status and Instagram Stories. Add the date in the caption so people who watch with sound off still see when to come.",
        ],
      },
      {
        heading: "If you also have a website link",
        body: [
          "Paste the link in the same message as the video, or in a follow-up. The video is watched. The link is where people RSVP. Do not hide the link inside a paragraph no one reads.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I compress the video first?",
        answer: "No. Send the file we gave you. Extra compression makes the type harder to read.",
      },
      {
        question: "Can I send it as a document so WhatsApp does not compress it?",
        answer:
          "You can, but then it will not autoplay. For invitations, a normal video send is what families expect.",
      },
      {
        question: "What if someone cannot download it?",
        answer:
          "Send the website link as well, or ask us for a shorter cut. A live page does not depend on a file download.",
      },
    ],
    related: ["whatsapp-invitation-video", "wedding-invitation-video-whatsapp", "invitation-video-vs-invitation-website"],
    ctaHref: "/contact",
    ctaLabel: "Order a WhatsApp video",
  },
  {
    slug: "digital-invitation-video-price-india",
    cluster: "guide",
    clusterLabel: "Guides",
    title: "Digital Invitation Video Price in India, What We Actually Charge",
    h1: "Digital invitation video price in India",
    metaDescription:
      "Shyara Digital gallery prices: save the date from ₹399, engagement from ₹499, wedding from ₹999. Custom briefs are quoted on WhatsApp. No fake ratings.",
    answer:
      "On our gallery, save the date videos start at ₹399, engagement videos at ₹499, and wedding videos at ₹999. A custom brief that is longer or more complex is quoted on WhatsApp before we start.",
    sections: [
      {
        heading: "Published starting prices",
        body: [
          `These are the prices printed on the sample cards today, not a guess. Save the date from ${VIDEO_PRICE_FROM_DISPLAY}. Wedding videos from ${WEDDING_VIDEO_PRICE_FROM_DISPLAY}. Engagement videos from ₹499.`,
        ],
      },
      {
        heading: "What changes a quote",
        body: [
          "More events in one clip, extra language versions, rush delivery, or a still PDF card alongside the video. We tell you the number before you pay.",
        ],
      },
      {
        heading: "What we do not publish as a price",
        body: [
          "Birthday, house warming and baby shower videos are quoted after we see the brief, because those galleries are still filling. We will not invent a rupee figure for them on this page.",
        ],
      },
    ],
    table: {
      caption: "Current gallery starting prices",
      columns: ["Format", "From (INR)", "Delivery"],
      rows: [
        ["Save the date video", VIDEO_PRICE_FROM_DISPLAY, DELIVERY_HOURS],
        ["Engagement invitation video", "₹499", DELIVERY_HOURS],
        ["Wedding invitation video", WEDDING_VIDEO_PRICE_FROM_DISPLAY, DELIVERY_HOURS],
        ["Birthday, house warming, baby shower", "Quoted on WhatsApp", DELIVERY_HOURS],
      ],
    },
    faqs: [
      {
        question: "Is GST extra?",
        answer: "Ask when we quote. Gallery cards show the design price. The invoice will state tax clearly.",
      },
      {
        question: "Are revisions included?",
        answer: "Yes, until you are happy with the video, within a reasonable number of rounds we agree up front.",
      },
      {
        question: "Do you have a subscription?",
        answer:
          "No. A studio video is a one-time file. Digital Invite websites are also a one-time payment, not a yearly plan.",
      },
    ],
    related: [
      "custom-wedding-invitation-video",
      "save-the-date-video",
      "shyara-digital-and-digital-invite",
    ],
    ctaHref: "/invitations",
    ctaLabel: "See priced samples",
  },
];
