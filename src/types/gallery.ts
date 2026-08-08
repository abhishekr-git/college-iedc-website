export type GalleryCategory =
  | "all"
  | "workshops"
  | "hackathons"
  | "aarambh"
  | "execom"
  | "achievements";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  date: string;
  eventSlug?: string;
  aspectRatio?: "square" | "wide" | "tall";
  caption?: string;
}
