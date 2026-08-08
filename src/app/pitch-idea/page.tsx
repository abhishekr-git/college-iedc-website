import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PitchIdeaClient } from "./PitchIdeaClient";

export const metadata: Metadata = {
  title: "Pitch Your Startup Idea",
  description: "Share your innovative startup idea with IEDC CEKNPY and take the first step toward incubation, seed grants, and mentorship.",
};

export default function PitchIdeaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Startup Portal"
        title="Pitch Your Startup Idea"
        description="Have an innovative startup idea? Share it with IEDC CEKNPY and take the first step toward building your startup."
        breadcrumbs={[{ label: "Pitch Idea", href: "/pitch-idea" }]}
      />
      <PitchIdeaClient />
    </>
  );
}
