import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with IEDC CEKNPY team, location map, email, and inquiry desk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Reach out for collaborations, sponsorships, or startup inquiries."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactClient />
    </>
  );
}
