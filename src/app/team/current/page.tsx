import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { CURRENT_EXECOM } from "@/data/teamData";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

export const metadata: Metadata = {
  title: "Current Execom Leadership",
  description: "Meet the student leads and nodal officers driving IEDC CEKNPY innovation ecosystem.",
};

export default function CurrentTeamPage() {
  const nodalOfficers = CURRENT_EXECOM.filter((m) => m.id.startsWith("nodal-officer"));

  const sections = [
    {
      title: "Student Leads",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("student-lead")),
    },
    {
      title: "Quality & Operations",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("quality-op-")),
    },
    {
      title: "Technology",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("tech-")),
    },
    {
      title: "Design",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("design-")),
    },
    {
      title: "Finance",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("finance-")),
    },
    {
      title: "Branding & Marketing",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("branding-marketing-")),
    },
    {
      title: "Women Innovation",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("women-innovation-")),
    },
    {
      title: "Creative & Innovation",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("creative-innovation-")),
    },
    {
      title: "Inter College",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("inter-college-")),
    },
    {
      title: "Community",
      members: CURRENT_EXECOM.filter((m) => m.id.startsWith("community-")),
    },
    {
      title: "Content & Reporting",
      members: CURRENT_EXECOM.filter((m) => m.id === "content-lead" || m.id === "reporting-lead"),
    },
    {
      title: "Year Representatives",
      members: CURRENT_EXECOM.filter((m) => m.id.includes("-year-rep")),
    },
  ];

  return (
    <>
      <PageHeader
        title="Executive Committee"
        description="The team driving innovation, startups, and technical programs at CEKNPY."
        breadcrumbs={[{ label: "Team", href: "/team/current" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* Sub-Tabs */}
        <div className="flex items-center justify-center gap-1.5 mb-8 p-1 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] max-w-fit mx-auto">
          <Link
            href="/team/current"
            className="px-5 py-2 rounded-full text-sm font-medium bg-[var(--border-hover)] text-[var(--text-primary)]"
          >
            Current
          </Link>
          <Link
            href="/team/past"
            className="px-5 py-2 rounded-full text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
          >
            Past Batches
          </Link>
        </div>

        {/* Nodal Officers — Horizontal Side-by-Side */}
        <div>
          <h2 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)] text-center mb-8">
            Nodal Officers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {nodalOfficers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

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
              <h2 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)] text-center mb-8">
                {section.title}
              </h2>
              <div className={`grid gap-6 ${gridCols}`}>
                {section.members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
