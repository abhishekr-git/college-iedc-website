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
        eyebrow="Calendar & Initiatives"
        title="Events & Innovation Bootcamps"
        description="From 24-hour hackathons and founder pitching sessions to technical masterclasses, discover what's happening at College of Engineering Karunagappally."
        breadcrumbs={[{ label: "Events", href: "/events" }]}
      />
      <EventsClient />
    </>
  );
}
