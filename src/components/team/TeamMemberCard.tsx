"use client";

import React from "react";
import Image from "next/image";
import { Mail, ShieldCheck, Sparkles } from "lucide-react";
import { LinkedinIcon as Linkedin, GithubIcon as Github, InstagramIcon as Instagram } from "@/components/ui/SocialIcons";
import { TeamMember } from "@/types/team";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const isFaculty = member.category === "faculty";

  return (
    <Card className="flex flex-col h-full bg-white p-6 border-slate-200/80 justify-between group">
      <div>
        {/* Avatar Image Header */}
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-900 border-4 border-blue-500/20 group-hover:border-blue-500 transition-colors shadow-md">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <div className="mb-2">
            <Badge variant={isFaculty ? "flagship" : "category"}>
              {isFaculty ? (
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Faculty
                </span>
              ) : (
                member.position
              )}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>

          <p className="text-xs font-semibold text-blue-600 mb-1">
            {member.position}
          </p>

          <p className="text-xs text-slate-500 font-medium">
            {member.department} {member.yearOfStudy ? `• ${member.yearOfStudy}` : ""}
          </p>

          {member.bio && (
            <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
              {member.bio}
            </p>
          )}
        </div>
      </div>

      {/* Social Handles */}
      <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-center gap-3">
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all min-h-[44px] min-w-[44px]"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.socials.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all min-h-[44px] min-w-[44px]"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {member.socials.email && (
          <a
            href={`mailto:${member.socials.email}`}
            aria-label={`${member.name} Email`}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all min-h-[44px] min-w-[44px]"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
        {member.socials.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} Instagram`}
            className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:bg-pink-50 transition-all min-h-[44px] min-w-[44px]"
          >
            <Instagram className="w-4 h-4" />
          </a>
        )}
      </div>
    </Card>
  );
}
