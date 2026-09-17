export type VideoItem = {
  id: string;
  title: string;
};

export type PricedVideoItem = VideoItem & {
  price: number;
  originalPrice: number;
};

export type Subcategory = {
  id: string;
  slug: string;
  title: string;
  description: string;
  videos: PricedVideoItem[];
};

export type InvitationCategory = {
  id: string;
  slug: string;
  emoji: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  videos?: PricedVideoItem[];
  subcategories?: Subcategory[];
};

export const invitationVideos = {
  wedding: [
    { id: "MErRHbJ6qqk", title: "Sample 1", price: 999, originalPrice: 1332 },
    { id: "i-gCaiwOdOA", title: "Sample 2", price: 999, originalPrice: 1332 },
    { id: "jAuJtC9y5KY", title: "Sample 3", price: 999, originalPrice: 1332 },
    { id: "F4Jn243qJTM", title: "Sample 4", price: 999, originalPrice: 1332 },
    { id: "GZURTaBRtv4", title: "Sample 5", price: 999, originalPrice: 1332 },
    { id: "n2_t9OGh3zI", title: "Sample 6", price: 1499, originalPrice: 1999 },
    { id: "Sp8iSlS9gLY", title: "Sample 7", price: 1499, originalPrice: 1999 },
    { id: "1H1neLoUBhc", title: "Sample 8", price: 1499, originalPrice: 1999 },
    { id: "0uoR__qE0R0", title: "Sample 9", price: 1499, originalPrice: 1999 },
    { id: "ZaMcTGUsWgk", title: "Sample 10", price: 1499, originalPrice: 1999 },
  ] as PricedVideoItem[],
  engagement: [
    { id: "pRk06RiQ0Z4", title: "Sample 1", price: 499, originalPrice: 665 },
    { id: "S0rKdIAhLUg", title: "Sample 2", price: 499, originalPrice: 665 },
    { id: "DtYHVMl2G8g", title: "Sample 3", price: 499, originalPrice: 665 },
    { id: "-TN6h54QFkk", title: "Sample 4", price: 499, originalPrice: 665 },
    { id: "kn5i-jXXDP8", title: "Sample 5", price: 499, originalPrice: 665 },
    { id: "IHfyGyLPcXw", title: "Sample 6", price: 499, originalPrice: 665 },
    { id: "FKtDk_KQBjo", title: "Sample 7", price: 499, originalPrice: 665 },
  ] as PricedVideoItem[],
  saveTheDateWedding: [
    { id: "oNF0q5J6lu0", title: "Sample 1", price: 399, originalPrice: 532 },
    { id: "egMJ2xIWOYI", title: "Sample 2", price: 399, originalPrice: 532 },
    { id: "-ZoyL0ss4xI", title: "Sample 3", price: 399, originalPrice: 532 },
    { id: "yBpSVL-dNW0", title: "Sample 4", price: 399, originalPrice: 532 },
  ] as PricedVideoItem[],
  saveTheDateEngagement: [
    { id: "tPZMUhiklV0", title: "Sample 1", price: 399, originalPrice: 532 },
    { id: "G3XfQKlsIAU", title: "Sample 2", price: 399, originalPrice: 532 },
  ] as PricedVideoItem[],
  boyBirthday: [] as PricedVideoItem[],
  girlBirthday: [] as PricedVideoItem[],
  houseWarming: [] as PricedVideoItem[],
  engagementAnnouncement: [] as PricedVideoItem[],
  babyShower: [] as PricedVideoItem[],
};

export const invitationCategories: InvitationCategory[] = [
  {
    id: "engagement",
    slug: "engagement",
    emoji: "💍",
    title: "Engagement",
    h1: "Custom engagement invitation videos",
    answer:
      "An engagement invitation video from our studio is a short sagai clip you share on WhatsApp. Prices start at ₹499. Delivery is 24 to 48 hours after you send the details.",
    description: "Beautiful engagement ceremony invitation videos",
    videos: invitationVideos.engagement,
  },
  {
    id: "wedding",
    slug: "wedding",
    emoji: "💎",
    title: "Wedding",
    h1: "Custom wedding invitation videos",
    answer:
      "We design a custom wedding invitation video with every ceremony in date order. Share names, dates and photos. You receive a WhatsApp-ready 9:16 MP4 in 24 to 48 hours.",
    description:
      "We'll include all your events in the video, with the slides arranged chronologically according to each event date.",
    videos: invitationVideos.wedding,
  },
  {
    id: "saveTheDate",
    slug: "save-the-date",
    emoji: "📅",
    title: "Save The Date",
    h1: "Save the date invitation videos",
    answer:
      "A save the date video is a short announcement of the wedding or engagement date. Studio videos start at ₹399. We deliver a 9:16 MP4 you can post or forward.",
    description: "Elegant save the date announcement videos for your special day",
    subcategories: [
      {
        id: "saveTheDateWedding",
        slug: "wedding",
        title: "Wedding",
        description: "Save the date videos for wedding celebrations",
        videos: invitationVideos.saveTheDateWedding,
      },
      {
        id: "saveTheDateEngagement",
        slug: "engagement",
        title: "Engagement",
        description: "Save the date videos for engagement celebrations",
        videos: invitationVideos.saveTheDateEngagement,
      },
    ],
  },
  {
    id: "engagementAnnouncement",
    slug: "proposal",
    emoji: "❤️",
    title: "Engagement Announcement",
    h1: "Engagement announcement and proposal invitation videos",
    answer:
      "We make custom engagement announcement videos for the moment you share the news. Send photos and names on WhatsApp. We design the clip and return a share-ready file.",
    description: "Share your engagement news with a beautiful announcement video",
    videos: invitationVideos.engagementAnnouncement,
  },
  {
    id: "babyShower",
    slug: "baby-shower",
    emoji: "🍼",
    title: "Baby Shower",
    h1: "Custom baby shower invitation videos",
    answer:
      "A baby shower invitation video is designed from your photos, names and venue. We also make godh bharai clips. Ask on WhatsApp for current examples and a quote.",
    description: "Warm, joyful invitations for baby shower celebrations",
    videos: invitationVideos.babyShower,
  },
  {
    id: "birthday",
    slug: "birthday",
    emoji: "🎂",
    title: "Birthday Invitations",
    h1: "Custom birthday invitation videos for boys and girls",
    answer:
      "Birthday invitation videos are custom 9:16 clips for any age. Tell us the child's name, age and theme. We design a unique video, not a template with names swapped.",
    description: "Fun and creative birthday invitation videos for boys and girls",
    subcategories: [
      {
        id: "boyBirthday",
        slug: "boy",
        title: "Boy Birthday Invitations",
        description: "Playful, energetic designs for birthday boys of every age",
        videos: invitationVideos.boyBirthday,
      },
      {
        id: "girlBirthday",
        slug: "girl",
        title: "Girl Birthday Invitations",
        description: "Charming, stylish designs for birthday girls of every age",
        videos: invitationVideos.girlBirthday,
      },
    ],
  },
  {
    id: "houseWarming",
    slug: "house-warming",
    emoji: "🏠",
    title: "House Warming Invitations",
    h1: "House warming and griha pravesh invitation videos",
    answer:
      "A house warming invitation video welcomes guests to a new home or griha pravesh. Share the date, address and family names. We return a WhatsApp-ready clip in 24 to 48 hours.",
    description: "Warm, welcoming invitations for grih pravesh and new home celebrations",
    videos: invitationVideos.houseWarming,
  },
];

export function getCategoryBySlug(slug: string): InvitationCategory | undefined {
  return invitationCategories.find((c) => c.slug === slug);
}

export function categorySlugs(): string[] {
  return invitationCategories.map((c) => c.slug);
}

export function categoryVideos(category: InvitationCategory): PricedVideoItem[] {
  if (category.subcategories) {
    return category.subcategories.flatMap((sub) => sub.videos);
  }
  return category.videos ?? [];
}

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function videoWhatsAppUrl(label: string, video: PricedVideoItem): string {
  return `https://wa.me/919584661610?text=${encodeURIComponent(
    `Hi! I loved this invitation: "${label} - ${video.title}" (${formatInr(video.price)}) - https://youtube.com/shorts/${video.id}. I'd like to get one like this made for my event!`,
  )}`;
}
