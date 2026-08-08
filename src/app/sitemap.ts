import { MetadataRoute } from "next";
import { ALL_EVENTS } from "@/data/eventsData";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    "",
    "/about",
    "/events",
    "/events/aarambh",
    "/team/current",
    "/team/past",
    "/gallery",
    "/contact",
    "/pitch-idea",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const eventRoutes = ALL_EVENTS.filter((e) => !e.isFlagship).map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...eventRoutes];
}
