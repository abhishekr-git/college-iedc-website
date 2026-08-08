import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { PAST_EXECOM } from "@/data/teamData";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { Card } from "@/components/ui/Card";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Past Execom Alumni Batches",
  description: "Hall of Fame & Alumni Leadership batches of IEDC CEKNPY.",
};

export default function PastTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hall of Fame"
        title="Past Execom Leadership"
        description="Honoring former student leads and alumni officers who laid the foundation for the startup culture at CEKNPY."
        breadcrumbs={[
          { label: "Team", href: "/team/current" },
          { label: "Past Execom", href: "/team/past" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Navigation Sub-Tabs */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <Link
            href="/team/current"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          >
            Current Execom
          </Link>
          <Link
            href="/team/past"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-blue-600 text-white shadow-md shadow-blue-500/20"
          >
            Past Execom Batches
          </Link>
        </div>

        {/* Grouped Batches */}
        <div className="space-y-16">
          {PAST_EXECOM.map((batch) => (
            <div key={batch.year} className="space-y-6">
              <Card className="bg-gradient-to-r from-slate-900 to-slate-950 text-white p-6 border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Academic Batch</span>
                  <h2 className="text-2xl font-black text-white">{batch.year} Execom</h2>
                  {batch.theme && <p className="text-xs text-slate-300 mt-1">{batch.theme}</p>}
                </div>
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
                  <Trophy className="w-4 h-4" /> Alumni Honor
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
