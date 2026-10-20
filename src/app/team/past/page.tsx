import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { PAST_EXECOM } from "@/data/teamData";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { Card } from "@/components/ui/Card";
import { TeamMember } from "@/types/team";

export const metadata: Metadata = {
  title: "Past Execom Alumni Batches",
  description: "Hall of Fame & Alumni Leadership batches of IEDC CEKNPY.",
};

function getBatchSections(members: TeamMember[]) {
  const nodalOfficers = members.filter(
    (m) => m.id.includes("nodal") || m.position.toLowerCase().includes("nodal")
  );

  const sections = [
    {
      title: "Student Leads",
      members: members.filter(
        (m) =>
          (m.id.includes("student-lead") || m.position.toLowerCase().includes("student lead")) &&
          !m.id.includes("nodal")
      ),
    },
    {
      title: "Quality & Operations",
      members: members.filter(
        (m) =>
          m.id.includes("quality-op") ||
          m.position.toLowerCase().includes("quality") ||
          m.position.toLowerCase().includes("operations")
      ),
    },
    {
      title: "Technology",
      members: members.filter(
        (m) =>
          (m.id.includes("tech-") ||
            m.position.toLowerCase().includes("technology") ||
            m.position.toLowerCase().includes("technical")) &&
          !m.position.toLowerCase().includes("biotech")
      ),
    },
    {
      title: "Design",
      members: members.filter(
        (m) => m.id.includes("design") || m.position.toLowerCase().includes("design")
      ),
    },
    {
      title: "Finance",
      members: members.filter(
        (m) => m.id.includes("finance") || m.position.toLowerCase().includes("finance")
      ),
    },
    {
      title: "Branding & Marketing",
      members: members.filter(
        (m) =>
          m.id.includes("branding-marketing") ||
          m.position.toLowerCase().includes("branding") ||
          m.position.toLowerCase().includes("marketing")
      ),
    },
    {
      title: "Women Innovation",
      members: members.filter(
        (m) =>
          m.id.includes("women-innovation") ||
          m.position.toLowerCase().includes("women")
      ),
    },
    {
      title: "Creative & Innovation",
      members: members.filter(
        (m) =>
          m.id.includes("creative-innovation") ||
          m.position.toLowerCase().includes("creative")
      ),
    },
    {
      title: "Inter College",
      members: members.filter(
        (m) =>
          m.id.includes("inter-college") ||
          m.position.toLowerCase().includes("inter college") ||
          m.position.toLowerCase().includes("inter-college")
      ),
    },
    {
      title: "Community",
      members: members.filter(
        (m) => m.id.includes("community") || m.position.toLowerCase().includes("community")
      ),
    },
    {
      title: "Content & Reporting",
      members: members.filter(
        (m) =>
          m.id.includes("content") ||
          m.id.includes("reporting") ||
          m.position.toLowerCase().includes("content") ||
          m.position.toLowerCase().includes("reporting")
      ),
    },
    {
      title: "Year Representatives",
      members: members.filter(
        (m) =>
          (m.id.includes("year-rep") || m.position.toLowerCase().includes("year representative")) &&
          !m.id.includes("inter-college") &&
          !m.position.toLowerCase().includes("inter college")
      ),
    },
  ];

  const categorizedIds = new Set<string>([
    ...nodalOfficers.map((m) => m.id),
    ...sections.flatMap((s) => s.members.map((m) => m.id)),
  ]);

  const uncategorized = members.filter((m) => !categorizedIds.has(m.id));
  if (uncategorized.length > 0) {
    sections.push({
      title: "Execom Members",
      members: uncategorized,
    });
  }

  return { nodalOfficers, sections };
}

export default function PastTeamPage() {
  return (
    <>
      <PageHeader
        title="Past Execom"
        description="Former student leads and alumni officers who built the foundation."
        breadcrumbs={[
          { label: "Team", href: "/team/current" },
          { label: "Past", href: "/team/past" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* Sub-Tabs */}
        <div className="flex items-center justify-center gap-1.5 mb-8 p-1 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] max-w-fit mx-auto">
          <Link
            href="/team/current"
            className="px-5 py-2 rounded-full text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
          >
            Current
          </Link>
          <Link
            href="/team/past"
            className="px-5 py-2 rounded-full text-sm font-medium bg-[var(--border-hover)] text-[var(--text-primary)]"
          >
            Past Batches
          </Link>
        </div>

        {/* Batches */}
        <div className="space-y-20">
          {PAST_EXECOM.map((batch) => {
            const { nodalOfficers, sections } = getBatchSections(batch.members);

            return (
              <div key={batch.year} className="space-y-16">
                {/* Batch Header Card */}
                <Card className="p-6 sm:p-8 text-center max-w-3xl mx-auto border-[var(--border)] bg-[var(--bg-surface)]">
                  <span className="inline-block text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
                    Execom Batch
                  </span>
                  <h2 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {batch.year}
                  </h2>
                  {batch.theme && (
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 max-w-xl mx-auto">
                      {batch.theme}
                    </p>
                  )}
                </Card>

                {/* Nodal Officers — Horizontal Side-by-Side */}
                {nodalOfficers.length > 0 && (
                  <div>
                    <h3 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)] text-center mb-8">
                      Nodal Officers
                    </h3>
                    <div
                      className={`grid gap-6 ${
                        nodalOfficers.length === 1
                          ? "max-w-sm mx-auto grid-cols-1"
                          : nodalOfficers.length === 2
                          ? "max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2"
                          : "max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {nodalOfficers.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Portfolio Domains — Horizontal Lead & Co-Lead side-by-side */}
                {sections.map((section) => {
                  if (section.members.length === 0) return null;
                  const gridCols =
                    section.members.length === 1
                      ? "max-w-sm mx-auto grid-cols-1"
                      : section.members.length === 2
                      ? "max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2"
                      : "max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

                  return (
                    <div key={section.title} className="pt-8 border-t border-[var(--border)]/40">
                      <h3 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)] text-center mb-8">
                        {section.title}
                      </h3>
                      <div className={`grid gap-6 ${gridCols}`}>
                        {section.members.map((member) => (
                          <TeamMemberCard key={member.id} member={member} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
