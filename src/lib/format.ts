import { wedding } from '../data/wedding';

const { lang, timeZone } = wedding.meta;

const dateFormat = new Intl.DateTimeFormat(lang, {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone,
});

const shortDateFormat = new Intl.DateTimeFormat(lang, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone,
});

const timeFormat = new Intl.DateTimeFormat(lang, {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
  timeZone,
});

/** "Saturday 17 April 2027" */
export function formatDate(iso: string): string {
  return dateFormat.format(new Date(iso));
}

/** "17 April 2027" */
export function formatShortDate(iso: string): string {
  return shortDateFormat.format(new Date(iso));
}

/** "10:00 am" */
export function formatTime(iso: string): string {
  return timeFormat.format(new Date(iso));
}

/** "10:00 am to 2:00 pm" */
export function formatTimeRange(start: string, end: string): string {
  return `${formatTime(start)} to ${formatTime(end)}`;
}
