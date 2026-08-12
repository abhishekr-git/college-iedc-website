import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo & Event Gallery",
  description: "Explore photos and moments from hackathons, workshops, Aarambh summit, and student startup achievements at CEKNPY.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="Moments of innovation, collaboration, and celebration."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GalleryClient />
    </>
  );
}
