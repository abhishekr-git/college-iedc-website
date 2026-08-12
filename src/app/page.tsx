import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { GalleryPreview } from "@/components/home/GalleryPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <FeaturedEvents />
      <GalleryPreview />
    </>
  );
}
