import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Clock, ArrowLeft, ExternalLink, CheckCircle2, Images } from "lucide-react";
import { ALL_EVENTS } from "@/data/eventsData";
import { getEventTheme } from "@/lib/eventTheme";
import { EventStatusBadge, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/events/EventCard";
import { Card } from "@/components/ui/Card";

export function generateStaticParams() {
  return ALL_EVENTS.filter((e) => !e.isFlagship).map((event) => ({
    slug: event.slug,
  }));
}

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = ALL_EVENTS.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | IEDC CEKNPY`,
    description: event.shortDescription,
  };
}

export default async function EventDetailsPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = ALL_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const eventTheme = getEventTheme(event);
  const relatedEvents = ALL_EVENTS.filter(
    (e) => e.id !== event.id && !e.isFlagship
  ).slice(0, 2);

  const isCompleted = event.status === "completed";

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen pb-28 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[var(--accent)]/[0.06] blur-[140px] rounded-full" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <EventStatusBadge status={event.status} />
                <Badge variant="category">{event.category.toUpperCase()}</Badge>
              </div>

              <h1 className="font-[var(--font-outfit)] text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
                {event.title}
              </h1>

              {event.tagline && (
                <p className="text-lg sm:text-xl text-[var(--accent)] font-medium mb-5">
                  {event.tagline}
                </p>
              )}

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
                {event.shortDescription}
              </p>

              {/* Action Buttons: Rendered ONLY if NOT completed */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {!isCompleted && event.registrationLink && (
                  <Button
                    href={event.registrationLink}
                    variant="primary"
                    size="lg"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Register Now
                  </Button>
                )}

                {eventTheme.websiteUrl && (
                  <a
                    href={eventTheme.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all border border-[var(--border-hover)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                  >
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Event Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] text-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <div>
                    <div className="text-xs text-[var(--text-tertiary)] font-medium">Date</div>
                    <div className="font-semibold text-[var(--text-primary)] mt-0.5">{event.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <div>
                    <div className="text-xs text-[var(--text-tertiary)] font-medium">Time</div>
                    <div className="font-semibold text-[var(--text-primary)] mt-0.5">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <div>
                    <div className="text-xs text-[var(--text-tertiary)] font-medium">Venue</div>
                    <div className="font-semibold text-[var(--text-primary)] mt-0.5">{event.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Poster Thumbnail */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-surface)]">
                <Image
                  src={event.posterUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Full Description */}
            <Card className="p-7 sm:p-9">
              <h2 className="font-[var(--font-outfit)] text-2xl font-bold text-[var(--text-primary)] mb-4">About this Event</h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed whitespace-pre-line">
                {event.fullDescription}
              </p>

              {/* Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <h3 className="font-[var(--font-outfit)] text-lg font-semibold text-[var(--text-primary)] mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Timeline */}
            {event.timeline && event.timeline.length > 0 && (
              <Card className="p-7 sm:p-9">
                <h2 className="font-[var(--font-outfit)] text-2xl font-bold text-[var(--text-primary)] mb-6">Schedule Timeline</h2>
                <div className="space-y-5 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[var(--border-strong)]">
                  {event.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[var(--text-primary)]">{item.title}</h4>
                        <p className="text-xs text-[var(--text-tertiary)]">{item.description}</p>
                      </div>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--border)] text-[var(--text-secondary)] self-start sm:self-auto">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <Card className="p-7 sm:p-9">
                <h2 className="font-[var(--font-outfit)] text-2xl font-bold text-[var(--text-primary)] mb-6">Featured Speakers & Mentors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.speakers.map((spk, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)]">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-hover)] shrink-0">
                        <Image src={spk.avatarUrl} alt={spk.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-[var(--text-primary)]">{spk.name}</h4>
                        <p className="text-xs text-[var(--text-tertiary)]">{spk.role}</p>
                        {spk.company && (
                          <p className="text-xs text-[var(--accent)] font-medium mt-0.5">{spk.company}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Photo Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <Card className="p-7 sm:p-9">
                <div className="flex items-center gap-2 mb-6">
                  <Images className="w-5 h-5 text-[var(--accent)]" />
                  <h2 className="font-[var(--font-outfit)] text-2xl font-bold text-[var(--text-primary)]">Event Photographs</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)]">
                      <Image src={img} alt={`${event.title} photo ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Registration CTA Card: ONLY if NOT completed */}
            {!isCompleted ? (
              <Card className="p-6">
                <h3 className="font-[var(--font-outfit)] text-lg font-semibold text-[var(--text-primary)] mb-2">Join Event</h3>
                <p className="text-xs text-[var(--text-secondary)] mb-5">
                  Registration is open for students of CEKNPY and partner institutions.
                </p>
                {event.registrationLink ? (
                  <Button
                    href={event.registrationLink}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Register Now
                  </Button>
                ) : (
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Inquire at IEDC Desk
                  </Button>
                )}
              </Card>
            ) : (
              <Card className="p-6">
                <h3 className="font-[var(--font-outfit)] text-lg font-semibold text-[var(--text-primary)] mb-2">Event Concluded</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  This event took place on <strong className="text-[var(--text-primary)]">{event.date}</strong> at <strong className="text-[var(--text-primary)]">{event.location}</strong>. Browse the event photographs and highlights on this page!
                </p>
              </Card>
            )}

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div>
                <h3 className="font-[var(--font-outfit)] text-lg font-semibold text-[var(--text-primary)] mb-4">Other Events</h3>
                <div className="space-y-4">
                  {relatedEvents.map((rel) => (
                    <EventCard key={rel.id} event={rel} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
