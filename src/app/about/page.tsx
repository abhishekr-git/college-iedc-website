import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ABOUT_DATA } from "@/data/aboutData";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About IEDC CEKNPY",
  description: "Learn about Innovation and Entrepreneurship Development Centre (IEDC) of College of Engineering Karunagappally, our mission, vision, history, and achievements.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)]">
      <PageHeader
        title="About IEDC CEKNPY"
        description="Fostering an ecosystem where engineering students transform technical curiosity into scalable technology ventures."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-14">
        {/* History */}
        <Card className="p-7 sm:p-10">
          <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">History & Founding</h2>
          <p className="text-[var(--text-secondary)] text-base leading-[1.75]">
            {ABOUT_DATA.history}
          </p>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-7 sm:p-10">
            <h3 className="font-[var(--font-outfit)] text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">Mission</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              {ABOUT_DATA.mission}
            </p>
          </Card>

          <Card className="p-7 sm:p-10">
            <h3 className="font-[var(--font-outfit)] text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">Vision</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base">
              {ABOUT_DATA.vision}
            </p>
          </Card>
        </div>

        {/* Culture Pillars */}
        <div>
          <SectionHeading
            title="Our Innovation Culture"
            subtitle="The fundamental principles guiding student builders at CEKNPY."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_DATA.culturePillars.map((pillar) => (
              <Card key={pillar.number} className="p-6">
                <span className="text-xl font-bold text-[var(--accent)] mb-2 block">{pillar.number}</span>
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <Card className="p-7 sm:p-10">
          <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">Key Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ABOUT_DATA.achievements.map((ach, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-sm text-[var(--text-primary)]">{ach}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <Button href="/contact" variant="primary" size="lg">
            Connect with IEDC CEKNPY
          </Button>
        </div>
      </div>
    </div>
  );
}
