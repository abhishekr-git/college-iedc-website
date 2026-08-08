export interface StatItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  iconName: "Rocket" | "Calendar" | "Users" | "Wrench" | "Trophy" | "Lightbulb";
}
