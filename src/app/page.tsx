import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { PitchIdeaSection } from "@/components/home/PitchIdeaSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <FeaturedEvents />
      <PitchIdeaSection />
      <GalleryPreview />
      <CtaSection />
    </>
  );
}
