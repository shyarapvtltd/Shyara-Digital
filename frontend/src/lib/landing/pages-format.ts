import type { LandingPage } from "./types.ts";
import { DIGITAL_INVITE_CARDS_URL, DIGITAL_INVITE_FROM_PRICE, DIGITAL_INVITE_TEMPLATES_URL } from "../site.ts";

export const FORMAT_PAGES: LandingPage[] = [
  {
    slug: "whatsapp-invitation-video",
    cluster: "format",
    clusterLabel: "By format",
    title: "WhatsApp Invitation Video for Any Celebration",
    h1: "WhatsApp invitation video, sized for the chat",
    metaDescription:
      "Custom 9:16 invitation videos for WhatsApp. Weddings, birthdays, house warming and baby showers. Shyara Digital delivers MP4 files in 24 to 48 hours.",
    answer:
      "A WhatsApp invitation video is a vertical 9:16 MP4 we design for your event. You forward the file in the chat. No app, no login, and it plays on any phone.",
    sections: [
      {
        heading: "Why 9:16",
        body: [
          "WhatsApp chats and Status are vertical. A landscape wedding film looks small or gets cropped. We design in the shape people actually watch.",
        ],
      },
      {
        heading: "What we make videos for",
        body: [
          "Weddings, engagements, save the dates, birthdays, house warming, griha pravesh, baby showers and proposal announcements. If it is a gathering with a date, we can invite it.",
        ],
      },
      {
        heading: "Video versus a live website",
        body: [
          "A video is a file. It cannot collect RSVPs or update a venue after you sent it. If you need guests to reply and see maps, use a custom invitation website from us, or a self-serve wedding site on Digital Invite.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will it play inside WhatsApp?",
        answer: "Yes. We deliver an MP4. WhatsApp plays it in the chat like any other video you forward.",
      },
      {
        question: "How large is the file?",
        answer:
          "We keep it short so it sends. Exact size depends on length and music. If a relative is on a slow network, a 20 to 40 second clip is kinder than a two-minute film.",
      },
      {
        question: "Can I post it on Instagram too?",
        answer: "Yes. The same 9:16 file works for Stories and Reels.",
      },
    ],
    related: [
      "how-to-share-invitation-on-whatsapp",
      "invitation-video-vs-invitation-website",
      "custom-wedding-invitation-video",
    ],
    ctaHref: "/invitations",
    ctaLabel: "Browse invitation videos",
  },
  {
    slug: "custom-wedding-invitation-video",
    cluster: "format",
    clusterLabel: "By format",
    title: "Custom Wedding Invitation Video, Hand-Designed Studio Clip",
    h1: "Custom wedding invitation video from a studio, not a template",
    metaDescription:
      "Handcrafted wedding invitation videos with every ceremony in date order. WhatsApp-ready 9:16 MP4 from ₹999. Shyara Digital delivers in 24 to 48 hours.",
    answer:
      "We design a custom wedding invitation video with every ceremony in date order. Share names, dates and photos. You receive a WhatsApp-ready 9:16 MP4 in 24 to 48 hours. Gallery prices start at ₹999.",
    sections: [
      {
        heading: "What goes in the video",
        body: [
          "Host names, couple names, and each event with date, time and venue, in the order they happen. Mehndi, haldi, sangeet, wedding and reception can all sit in one clip.",
        ],
      },
      {
        heading: "Studio, not a builder",
        body: [
          "You do not log into an editor. You WhatsApp the brief. Designers make the motion, type and music. That is the difference between Shyara Digital and a self-serve template site.",
        ],
      },
      {
        heading: "When you also need a website",
        body: [
          "A video cannot take RSVPs. For a live wedding page with replies and maps, Digital Invite is our sister product. You can send the video in the group and the website link in the same message.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much is a custom wedding invitation video?",
        answer:
          "Wedding videos in the gallery are listed from ₹999. Dearer samples are ₹1,499. Your quote follows the brief if it is longer or more complex.",
      },
      {
        question: "Is this Digital Invite?",
        answer: `No. Digital Invite is the self-serve wedding invitation website, from ${DIGITAL_INVITE_FROM_PRICE} plus GST. This page is the custom video studio.`,
      },
      {
        question: "Can you include all functions?",
        answer: "Yes. That is the usual brief. We arrange slides by event date.",
      },
    ],
    related: [
      "wedding-invitation-video-whatsapp",
      "invitation-video-vs-invitation-website",
      "custom-vs-template-wedding-invitation",
    ],
    ctaHref: "/invitations/wedding",
    ctaLabel: "See wedding videos",
  },
  {
    slug: "wedding-invitation-video-whatsapp",
    cluster: "format",
    clusterLabel: "By format",
    title: "Wedding Invitation Video for WhatsApp, Custom Studio MP4",
    h1: "Wedding invitation video for WhatsApp, made by designers",
    metaDescription:
      "Custom wedding invitation videos for WhatsApp. 9:16 MP4, ceremonies in date order, from ₹999. Hand-designed by Shyara Digital in 24 to 48 hours.",
    answer:
      "A WhatsApp wedding invitation video from Shyara Digital is a hand-designed 9:16 MP4. We put every ceremony on screen in date order and deliver the file in 24 to 48 hours. Gallery prices start at ₹999.",
    sections: [
      {
        heading: "How families actually send it",
        body: [
          "They drop the MP4 in the family group. Relatives forward it. No one creates an account. That is why a file still wins for many Indian weddings even when a website would collect better replies.",
        ],
      },
      {
        heading: "What a file cannot do",
        body: [
          "If the muhurat moves after you sent the video, people still have the old file. If you need edits after sending, and RSVPs, send a live Digital Invite website link alongside the video.",
        ],
      },
      {
        heading: "Honest split",
        body: [
          "Want us to design the motion for you? This page. Want to type the wedding yourself into a live page tonight? Digital Invite templates.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will older relatives be able to play it?",
        answer: "If they can open a WhatsApp video today, they can open this. There is no extra app.",
      },
      {
        question: "Do you also make a website?",
        answer:
          "Invitation websites are on Digital Invite. This studio makes the video. The video and the website solve different jobs.",
      },
      {
        question: "How fast is delivery?",
        answer: "24 to 48 hours for a normal wedding video brief. Say if you need it sooner.",
      },
    ],
    related: [
      "custom-wedding-invitation-video",
      "whatsapp-invitation-video",
      "invitation-video-vs-invitation-website",
    ],
    ctaHref: "/invitations/wedding",
    ctaLabel: "See wedding videos",
  },
  {
    slug: "custom-invitation-cards",
    cluster: "format",
    clusterLabel: "By format",
    title: "Digital Invitation Cards, Download on Digital Invite",
    h1: "Digital invitation cards you edit yourself",
    metaDescription:
      "DIY invitation cards live on Digital Invite. Edit and download the file. It is not a website. Shyara Digital remains the studio for custom videos.",
    answer:
      "A digital invitation card on Digital Invite is a file you edit and download. It is not a live webpage. Open digitalinvite.in/cards. Custom videos stay on Shyara Digital.",
    sections: [
      {
        heading: "What you get",
        body: [
          "A still card you type yourself on Digital Invite, then save as a file. If the cards gallery is empty today, browse invitation websites there instead.",
        ],
      },
      {
        heading: "What this studio does",
        body: [
          "Shyara Digital designs custom invitation videos. We do not sell a card editor on this site. The card product is Digital Invite, same company.",
        ],
      },
      {
        heading: "Video plus card",
        body: [
          "Many families send a WhatsApp video from this studio and a still card from Digital Invite, so the group gets motion and a file they can keep.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a card the same as a website?",
        answer: "No. A card is a downloadable file. A website is a live page with RSVP. Both of those live on Digital Invite.",
      },
      {
        question: "Do you sell editable wedding card templates here?",
        answer: "Not on this site. Editable cards are Digital Invite, the sister product.",
      },
      {
        question: "Where do I open the cards?",
        answer: "digitalinvite.in/cards. The Cards link in the menu opens that page.",
      },
    ],
    related: ["shyara-digital-and-digital-invite", "custom-vs-template-wedding-invitation", "whatsapp-invitation-video"],
    ctaHref: DIGITAL_INVITE_CARDS_URL,
    ctaLabel: "Open digital cards",
  },
];

export const COMPARISON_PAGES: LandingPage[] = [
  {
    slug: "invitation-video-vs-invitation-website",
    cluster: "comparison",
    clusterLabel: "Compare",
    title: "Invitation Video vs Invitation Website, Which Do You Need",
    h1: "Invitation video or invitation website?",
    metaDescription:
      "A video is a file you forward on WhatsApp. A website collects RSVPs and maps. Shyara Digital makes both. Digital Invite is the DIY wedding website.",
    answer:
      "A video invitation is a short file you forward. An invitation website is a live page with events, maps and RSVP. Choose the video to announce. Choose the website if you need replies.",
    sections: [
      {
        heading: "What a video is good at",
        body: [
          "It plays in WhatsApp. Older relatives do not have to tap a link. It looks like a film. It is the right tool when the job is to make people feel the date.",
        ],
      },
      {
        heading: "What a website is good at",
        body: [
          "Guests open one link. Each ceremony has its own time and map. They can reply. You can change a venue without sending a second video to two hundred people.",
        ],
      },
      {
        heading: "You can use both",
        body: [
          "Plenty of families send our studio video in the group and a website link in the same chat. The video is the emotion. The site is the logistics.",
        ],
      },
    ],
    table: {
      caption: "Video file versus live website",
      columns: ["Need", "Studio video", "Invitation website"],
      rows: [
        ["Plays inside WhatsApp", "Yes", "Opens as a link"],
        ["Collects RSVP", "No", "Yes"],
        ["Edit after sending", "New file", "Edit the live page"],
        ["Map for each venue", "Address on screen", "Tap to Maps"],
        ["Who makes it", "Our designers", "You, on Digital Invite"],
      ],
    },
    faqs: [
      {
        question: "Which should I buy first?",
        answer:
          "If the date is soon and you only need people to know, start with the video. If you are drowning in \"how many plates\" messages, start with a website.",
      },
      {
        question: "Is the website Digital Invite?",
        answer:
          "Digital Invite is the self-serve wedding website. Open digitalinvite.in/templates. Shyara Digital makes the custom video.",
      },
      {
        question: "Can one video cover mehndi, wedding and reception?",
        answer: "Yes. We put the events in date order in a single clip.",
      },
    ],
    related: [
      "custom-vs-template-wedding-invitation",
      "custom-wedding-invitation-video",
      "shyara-digital-and-digital-invite",
    ],
    ctaHref: DIGITAL_INVITE_TEMPLATES_URL,
    ctaLabel: "Open invitation websites",
  },
  {
    slug: "custom-vs-template-wedding-invitation",
    cluster: "comparison",
    clusterLabel: "Compare",
    title: "Custom vs Template Wedding Invitation, Studio or Digital Invite",
    h1: "Custom wedding invitation or a template you type yourself?",
    metaDescription:
      "Shyara Digital designs custom videos. Digital Invite is the template wedding invitation website you can edit yourself from ₹1,699 plus GST.",
    answer:
      "Choose a custom studio video if you want designers to make the clip for you. Choose Digital Invite if you want to pick a wedding website template and type it yourself tonight.",
    sections: [
      {
        heading: "Custom studio (this site)",
        body: [
          "You send a brief on WhatsApp. We design a unique video. You wait 24 to 48 hours. Invitation websites are not built on this site. They live on Digital Invite.",
        ],
      },
      {
        heading: "Template website (Digital Invite)",
        body: [
          `Digital Invite is our sister product. You pick a design, edit the words and photos, and pay once. Invitation websites start from ${DIGITAL_INVITE_FROM_PRICE} plus GST and stay live for two months. Guests reply on the page.`,
        ],
      },
      {
        heading: "Same company",
        body: [
          "Both are operated by Shyara Tech Solution (OPC) Private Limited. The split is the product, not the family behind it.",
        ],
      },
    ],
    table: {
      caption: "Studio custom versus Digital Invite template",
      columns: ["", "Shyara Digital studio", "Digital Invite"],
      rows: [
        ["What you buy", "Custom video", "Self-serve wedding website or card"],
        ["Who designs", "Our team", "You, on a ready layout"],
        ["Wedding website price", "Not sold here", `${DIGITAL_INVITE_FROM_PRICE} plus GST once`],
        ["Video invitations", "Yes, this is the main product", "Studio slice on /videos, then this site for other events"],
        ["Best when", "You want a film designed for you", "You want a live RSVP page tonight"],
      ],
      source: `Digital Invite price from ${DIGITAL_INVITE_TEMPLATES_URL}`,
    },
    faqs: [
      {
        question: "Can I use both?",
        answer:
          "Yes. A common pair is a Shyara Digital wedding video plus a Digital Invite website for RSVP.",
      },
      {
        question: "Which one ranks as \"the wedding invitation\"?",
        answer:
          "If you need guests to reply, the live website is the invitation. The video is the trailer you send with it.",
      },
      {
        question: "Do you copy Digital Invite templates here?",
        answer: "No. This studio does not sell those layouts. The layouts live on digitalinvite.in.",
      },
    ],
    related: [
      "shyara-digital-and-digital-invite",
      "invitation-video-vs-invitation-website",
      "custom-wedding-invitation-video",
    ],
    ctaHref: DIGITAL_INVITE_TEMPLATES_URL,
    ctaLabel: "See the DIY option",
  },
  {
    slug: "shyara-digital-and-digital-invite",
    cluster: "comparison",
    clusterLabel: "Compare",
    title: "Shyara Digital and Digital Invite, Same Company, Two Products",
    h1: "Shyara Digital and Digital Invite are sister products",
    metaDescription:
      "Shyara Digital is the custom invitation studio. Digital Invite is the self-serve wedding website and card product. Same legal company in Patna.",
    answer:
      "Shyara Digital is the custom studio for invitation videos. Digital Invite is the self-serve wedding invitation website. Both are Shyara Tech Solution (OPC) Private Limited.",
    sections: [
      {
        heading: "Who should open which site",
        body: [
          "Come here for a designer-made video, including birthdays and house warming. Go to Digital Invite to build a wedding invitation webpage yourself and collect RSVPs.",
        ],
      },
      {
        heading: "Legal entity",
        body: [
          "The legal name on both products is Shyara Tech Solution (OPC) Private Limited, registered in Patna, Bihar. Support WhatsApp is the same number.",
        ],
      },
      {
        heading: "What we will not do",
        body: [
          "We will not pretend a video is a website, or that a template site is a hand-painted film. If you ask for the wrong product, we will send you to the right one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Digital Invite a different company?",
        answer: "No. Same company, different product and domain.",
      },
      {
        question: "Where do birthday videos live?",
        answer: "On Shyara Digital. Digital Invite is focused on wedding invitation websites and cards.",
      },
      {
        question: "Where do I pay?",
        answer:
          "Studio orders are quoted and paid via the WhatsApp flow we send you. Digital Invite checkout is on digitalinvite.in.",
      },
    ],
    related: [
      "custom-vs-template-wedding-invitation",
      "invitation-video-vs-invitation-website",
      "custom-invitation-cards",
    ],
    ctaHref: "/about",
    ctaLabel: "About Shyara Digital",
  },
];
