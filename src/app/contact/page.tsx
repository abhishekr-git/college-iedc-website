import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with IEDC CEKNPY team, location map, email, phone, and inquiry desk.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Connect & Collaborate"
        title="Contact IEDC CEKNPY"
        description="We're here to assist student founders, industry partners, mentors, and event sponsors."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactClient />
    </>
  );
}
