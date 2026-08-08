import { StatItem } from "@/types/stats";

export const STATS_DATA: StatItem[] = [
  {
    id: "ideas",
    label: "Incubated Ideas",
    value: 50,
    suffix: "+",
    description: "Proof-of-concepts funded & mentored through IEDC ecosystem.",
    iconName: "Lightbulb",
  },
  {
    id: "members",
    label: "Active Members",
    value: 100,
    suffix: "+",
    description: "Passionate student innovators across all engineering branches.",
    iconName: "Users",
  },
  {
    id: "grants",
    label: "Grants Disbursed",
    value: 10,
    prefix: "₹",
    suffix: "L+",
    description: "Innovation grants & seed funding support provided to projects.",
    iconName: "Rocket",
  },
  {
    id: "events",
    label: "Annual Events",
    value: 45,
    suffix: "+",
    description: "Workshops, hackathons, bootcamps and speaker sessions.",
    iconName: "Calendar",
  },
  {
    id: "workshops",
    label: "Hands-on Bootcamps",
    value: 30,
    suffix: "+",
    description: "Technical & business domain mastery programs.",
    iconName: "Wrench",
  },
  {
    id: "hackathons",
    label: "Hackathons Hosted",
    value: 12,
    suffix: "+",
    description: "High-intensity 24h & 36h building marathons.",
    iconName: "Trophy",
  },
];
