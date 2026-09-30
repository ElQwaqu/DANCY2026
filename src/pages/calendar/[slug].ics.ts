/**
 * Builds one static .ics calendar file per event in wedding.ts, e.g. /calendar/reception.ics.
 * Generated at build time, so no JavaScript is needed on the guest's phone.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { wedding } from '../../data/wedding';
import type { WeddingEvent } from '../../data/types';
import { buildIcs } from '../../lib/ics';
import { venueLabel } from '../../lib/events';

export const getStaticPaths = (() =>
  wedding.events.map((event) => ({ params: { slug: event.slug }, props: { event } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const event = (props as { event: WeddingEvent }).event;
  const { venue } = event;
  const host = new URL(wedding.meta.siteUrl).host;

  const body = buildIcs({
    uid: `${event.slug}@${host}`,
    title: `${wedding.couple.displayNames}: ${event.name}`,
    description: [event.description, wedding.meta.siteUrl].filter(Boolean).join('\n\n'),
    location: venueLabel(venue),
    url: wedding.meta.siteUrl,
    start: event.start,
    end: event.end,
  });

  return new Response(body, {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
