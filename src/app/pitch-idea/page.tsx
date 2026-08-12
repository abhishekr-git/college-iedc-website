import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PitchIdeaClient } from "./PitchIdeaClient";

export const metadata: Metadata = {
  title: "Pitch Your Startup Idea",
  description: "Share your innovative startup idea with IEDC CEKNPY for incubation, seed grants, and mentorship.",
};

export default function PitchIdeaPage() {
  return (
    <>
      <PageHeader
        title="Pitch Your Idea"
        description="Share your startup concept with IEDC CEKNPY for incubation support and mentorship."
        breadcrumbs={[{ label: "Pitch Idea", href: "/pitch-idea" }]}
      />
      <PitchIdeaClient />
    </>
  );
}
