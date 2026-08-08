export type EventStatus = "upcoming" | "completed" | "ongoing";

export type EventCategory = "hackathon" | "workshop" | "talk" | "competition" | "flagship";

export interface EventTimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface GuestSpeaker {
  name: string;
  role: string;
  company?: string;
  avatarUrl: string;
  linkedin?: string;
}

export interface SubEvent {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  posterUrl: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  category: EventCategory;
  prizePool?: string;
  registrationLink?: string;
  highlights: string[];
  gallery: string[];
}

export interface EventTheme {
  themeName: string;
  primary: string; // e.g. "#B4D334"
  secondary: string; // e.g. "#008C45"
  background: string; // e.g. "#041A0D"
  surface: string; // e.g. "#062413"
  surfaceDark: string; // e.g. "#021008"
  glow: string; // e.g. "rgba(180, 211, 52, 0.25)"
  accentText: string; // e.g. "#B4D334"
  border: string; // e.g. "rgba(180, 211, 52, 0.25)"
  websiteUrl?: string; // e.g. "https://aarambh26.tech"
  logoUrl?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  fullDescription: string;
  posterUrl: string;
  bannerUrl?: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  category: EventCategory;
  isFeatured?: boolean;
  isFlagship?: boolean;
  registrationLink?: string;
  websiteUrl?: string;
  theme?: EventTheme;
  highlights: string[];
  timeline: EventTimelineItem[];
  speakers?: GuestSpeaker[];
  gallery: string[];
  subEvents?: SubEvent[];
}
