import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { PAST_EXECOM } from "@/data/teamData";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Past Execom Alumni Batches",
  description: "Hall of Fame & Alumni Leadership batches of IEDC CEKNPY.",
};

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Sub-Tabs */}
        <div className="flex items-center justify-center gap-1.5 mb-12 p-1 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] max-w-fit mx-auto">
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
        <div className="space-y-12">
          {PAST_EXECOM.map((batch) => (
            <div key={batch.year} className="space-y-5">
              <Card className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h2 className="font-[var(--font-outfit)] text-xl font-bold text-[var(--text-primary)]">{batch.year}</h2>
                  {batch.theme && <p className="text-sm text-[var(--text-tertiary)] mt-0.5">{batch.theme}</p>}
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {batch.members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
