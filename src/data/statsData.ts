import { StatItem } from "@/types/stats";

export const STATS_DATA: StatItem[] = [
  {
    id: "ideas",
    label: "Incubated Ideas",
    value: 50,
    suffix: "+",
    description: "",
    iconName: "Lightbulb",
  },
  {
    id: "members",
    label: "Active Members",
    value: 100,
    suffix: "+",
    description: "",
    iconName: "Users",
  },
  {
    id: "grants",
    label: "Grants Disbursed",
    value: 10,
    prefix: "₹",
    suffix: "L+",
    description: "",
    iconName: "Rocket",
  },
  {
    id: "events",
    label: "Events Hosted",
    value: 45,
    suffix: "+",
    description: "",
    iconName: "Calendar",
  },
];
