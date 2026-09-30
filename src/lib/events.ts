import { wedding } from '../data/wedding';
import type { Venue, WeddingEvent } from '../data/types';

/** Opens the Google Maps app on phones (or Google Maps in the browser) with directions to the venue. */
export function directionsHref(venue: Venue): string {
  const destination = venue.directionsQuery || venueLabel(venue);
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

/** "Venue name, address" (address left out when empty). */
export function venueLabel(venue: Venue): string {
  return [venue.name, venue.address].filter(Boolean).join(', ');
}

/** The venue, if every event is at the same place; the page then shows one map for all of them. */
export function sharedVenue(events: WeddingEvent[]): Venue | undefined {
  const [first, ...rest] = events;
  if (!first || rest.length === 0) return undefined;
  return rest.every((e) => e.venue.mapEmbedUrl === first.venue.mapEmbedUrl) ? first.venue : undefined;
}

/** Path of the pre-built calendar file for an event, e.g. /calendar/reception.ics */
export function calendarHref(event: WeddingEvent): string {
  return `/calendar/${event.slug}.ics`;
}

export function calendarFileName(event: WeddingEvent): string {
  const couple = `${wedding.couple.partner1}-${wedding.couple.partner2}`.toLowerCase().replace(/[^a-z0-9-]/g, '');
  return `${couple}-${event.slug}.ics`;
}
