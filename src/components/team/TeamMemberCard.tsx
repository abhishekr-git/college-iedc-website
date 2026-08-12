"use client";

import React from "react";
import Image from "next/image";
import { GithubIcon as Github, InstagramIcon as Instagram } from "@/components/ui/SocialIcons";
import { TeamMember } from "@/types/team";
import { Card } from "@/components/ui/Card";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const hasSocials = Boolean(member.socials.github || member.socials.instagram);

  return (
    <Card className="flex flex-col h-full p-6 group">
      <div>
        {/* Avatar */}
        <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-[var(--bg-elevated)] border-2 border-[var(--border)] group-hover:border-[var(--border-hover)] transition-colors">
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-base font-semibold text-[var(--text-primary)] mb-0.5">{member.name}</h3>
          <p className="text-sm font-medium text-[var(--accent)] mb-1">{member.position}</p>
        </div>
      </div>

      {/* Social Links (Only GitHub and Instagram if present) */}
      {hasSocials && (
        <div className="pt-4 mt-auto border-t border-[var(--border)] flex items-center justify-center gap-2">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} GitHub`}
              className="w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-hover)] transition-all min-h-[44px] min-w-[44px]"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} Instagram`}
              className="w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-hover)] transition-all min-h-[44px] min-w-[44px]"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
