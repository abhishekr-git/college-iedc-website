import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ABOUT_DATA } from "@/data/aboutData";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Compass, Trophy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About IEDC CEKNPY",
  description: "Learn about Innovation and Entrepreneurship Development Centre (IEDC) of College of Engineering Karunagappally, our mission, vision, history, and achievements.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#FAFAFA]">
      <PageHeader
        eyebrow="Our Story & Vision"
        title="About IEDC CEKNPY"
        description="Fostering an ecosystem where engineering students transform technical curiosity into scalable technology ventures."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* History Section */}
        <Card className="bg-white/[0.04] p-8 sm:p-12 border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Institutional Origins</span>
          <h2 className="text-3xl font-extrabold text-[#FAFAFA] mt-1 mb-4">History & Founding</h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
            {ABOUT_DATA.history}
          </p>
        </Card>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/[0.04] p-8 sm:p-10 border-white/[0.08]">
            <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6] mb-6">
              <Target className="w-6 h-6" strokeWidth={1.8} />
            </div>
            <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">Mission Statement</h3>
            <p className="text-[#A1A1AA] leading-relaxed text-base font-normal">
              {ABOUT_DATA.mission}
            </p>
          </Card>

          <Card className="bg-white/[0.04] p-8 sm:p-10 border-white/[0.08]">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] mb-6">
              <Compass className="w-6 h-6" strokeWidth={1.8} />
            </div>
            <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">Vision Statement</h3>
            <p className="text-[#A1A1AA] leading-relaxed text-base font-normal">
              {ABOUT_DATA.vision}
            </p>
          </Card>
        </div>

        {/* Culture Pillars */}
        <div>
          <SectionHeading
            eyebrow="Core Values"
            title="Our Innovation Culture"
            subtitle="The fundamental principles guiding student builders at CEKNPY."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.culturePillars.map((pillar) => (
              <Card key={pillar.number} className="bg-white/[0.04] p-6 border-white/[0.08]">
                <span className="text-2xl font-black text-[#3B82F6] mb-2 block">{pillar.number}</span>
                <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed font-normal">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <Card className="bg-white/[0.04] text-[#FAFAFA] p-8 sm:p-12 border-white/[0.08] relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-4">
              <Trophy className="w-4 h-4" strokeWidth={1.8} /> Proven Track Record
            </div>
            <h2 className="text-3xl font-extrabold text-[#FAFAFA] mb-6">Key Achievements & Milestones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#09090B] border border-white/[0.08]">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" strokeWidth={1.8} />
                  <span className="text-sm font-semibold text-[#FAFAFA]">{ach}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Action Button */}
        <div className="flex justify-center pt-8">
          <Button href="/contact" variant="primary" size="lg">
            Connect with IEDC CEKNPY
          </Button>
        </div>
      </div>
    </div>
  );
}
