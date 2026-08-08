import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { CURRENT_EXECOM } from "@/data/teamData";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Current Execom Leadership",
  description: "Meet the student leads, nodal officers, and faculty coordinators driving IEDC CEKNPY innovation ecosystem.",
};

export default function CurrentTeamPage() {
  const facultyMembers = CURRENT_EXECOM.filter((m) => m.category === "faculty");
  const studentLeads = CURRENT_EXECOM.filter((m) => m.category !== "faculty");

  return (
    <>
      <PageHeader
        eyebrow="Leadership & Officers"
        title="Current Executive Committee"
        description="The passionate team of student innovators, leads, and faculty advisors directing the annual startup programs and technical bootcamps."
        breadcrumbs={[
          { label: "Team", href: "/team/current" },
          { label: "Current Execom", href: "/team/current" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Navigation Sub-Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Link
            href="/team/current"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-blue-600 text-white shadow-md shadow-blue-500/20"
          >
            Current Execom
          </Link>
          <Link
            href="/team/past"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          >
            Past Execom Batches
          </Link>
        </div>

        {/* Faculty Advisors Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Institutional Mentorship
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Faculty Coordinators & Officers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {facultyMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Student Leads Grid */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Student Founders & Leads
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Execom Domain Leads
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentLeads.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
