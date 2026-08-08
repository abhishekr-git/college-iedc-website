import { EventItem, EventTheme } from "@/types/event";

export const DEFAULT_EVENT_THEME: EventTheme = {
  themeName: "IEDC Midnight",
  primary: "#2563EB",
  secondary: "#1746A2",
  background: "#07111F",
  surface: "#0B1830",
  surfaceDark: "#050816",
  glow: "rgba(37, 99, 235, 0.25)",
  accentText: "#38BDF8",
  border: "rgba(255, 255, 255, 0.1)",
};

/**
 * Returns the theme object for an event, falling back to default IEDC Midnight theme if unconfigured.
 */
export function getEventTheme(event?: Partial<EventItem> | null): EventTheme {
  if (!event || !event.theme) {
    return {
      ...DEFAULT_EVENT_THEME,
      websiteUrl: event?.websiteUrl,
    };
  }
  return {
    ...DEFAULT_EVENT_THEME,
    ...event.theme,
    websiteUrl: event.websiteUrl || event.theme.websiteUrl,
  };
}
