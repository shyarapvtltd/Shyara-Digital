export type LandingCluster = "event" | "format" | "comparison" | "guide";

export type LandingSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type LandingFaq = { question: string; answer: string };

export type LandingTable = {
  caption: string;
  columns: string[];
  rows: string[][];
  source?: string;
};

export type LandingPage = {
  slug: string;
  cluster: LandingCluster;
  title: string;
  h1: string;
  metaDescription: string;
  answer: string;
  sections: LandingSection[];
  faqs: LandingFaq[];
  table?: LandingTable;
  related?: string[];
  clusterLabel: string;
  ctaHref?: string;
  ctaLabel?: string;
};
