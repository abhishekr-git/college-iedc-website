import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description: "Browse upcoming hackathons, innovation summits, UI/UX sprints, and technical bootcamps at IEDC CEKNPY.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events & Workshops"
        description="Hackathons, bootcamps, summits, and technical masterclasses at College of Engineering Karunagappally."
        breadcrumbs={[{ label: "Events", href: "/events" }]}
      />
      <EventsClient />
    </>
  );
}
