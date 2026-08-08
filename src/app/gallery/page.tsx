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
        eyebrow="Media Archives"
        title="IEDC Photo Gallery"
        description="Capturing energy, collaboration, and innovation at College of Engineering Karunagappally."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GalleryClient />
    </>
  );
}
