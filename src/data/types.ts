import type { ImageMetadata } from 'astro';

/** Date-time with an explicit offset, e.g. "2027-04-17T10:00:00+00:00" (Ghana is UTC+0 all year). */
export type IsoDateTime = string;

export interface Photo {
  src: ImageMetadata;
  /** Describe the photo for guests using screen readers, e.g. "Daniel and Nancy laughing on the beach". */
  alt: string;
}

export type SectionId = 'story' | 'events' | 'dress-code' | 'gallery' | 'gifts' | 'faq' | 'rsvp';

export interface SectionConfig {
  /** Set to false to hide the section and its menu link. */
  enabled: boolean;
  /** Short label for the top menu. */
  navLabel: string;
  /** Large heading shown on the section. */
  title: string;
  /** Optional line of text under the heading. */
  intro?: string;
}

export interface StoryMoment {
  title: string;
  /** Free text, e.g. "5 May 2024". Leave empty to hide. */
  date?: string;
  text: string;
  /** Shown in the arch frame when the moment has no video. */
  photo?: Photo;
  /**
   * Optional video, as a path inside /public, e.g. "/videos/first-date.mp4".
   * Plays silently on its own in the arch frame; a tap opens it with sound.
   * Only used once the file exists, so it is safe to fill in before the file arrives.
   */
  video?: string;
}

export interface Venue {
  name: string;
  /** Optional; hidden when empty. */
  address?: string;
  /**
   * Google Maps embed URL (no API key needed). Two easy ways to get one:
   * 1. Google Maps > search the venue > Share > Embed a map > copy the src="..." value.
   * 2. Use https://www.google.com/maps?q=VENUE+NAME,+CITY&output=embed
   */
  mapEmbedUrl: string;
  /** What Google Maps should navigate to. A place name with city, or "lat,lng". */
  directionsQuery: string;
}

export interface WeddingEvent {
  /** Lower-case id used for the calendar file name, e.g. "church-wedding". */
  slug: string;
  name: string;
  description?: string;
  start: IsoDateTime;
  end: IsoDateTime;
  venue: Venue;
}

export interface Hashtag {
  tag: string;
  /** Optional explanation shown under the tag. */
  meaning?: string;
}

export interface Swatch {
  name: string;
  hex: string;
}

export interface RegistryLink {
  label: string;
  url: string;
}

export interface Contact {
  name: string;
  /** Optional, e.g. "Groom's family". */
  label?: string;
  /** International format, digits only, no "+", e.g. "233241234567" for 024 123 4567. */
  phone: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WeddingData {
  meta: {
    /** Browser tab and WhatsApp preview title. */
    title: string;
    /** WhatsApp preview description (keep under about 150 characters). */
    description: string;
    /** Full live address of the site, used for link previews. No trailing slash. */
    siteUrl: string;
    /** Path of the preview image inside /public (1200 x 630 px). */
    ogImage: string;
    ogImageAlt: string;
    /** Language of the page, e.g. "en-GB". */
    lang: string;
    /** IANA time zone the event times are shown in. */
    timeZone: string;
  };
  couple: {
    partner1: string;
    partner2: string;
    /** Shown in the hero and footer, e.g. "Daniel & Nancy". */
    displayNames: string;
    /** Shown in the footer. Leave the list empty to hide. */
    hashtags: Hashtag[];
  };
  /** Countdown target and the date shown in the hero. */
  weddingDate: IsoDateTime;
  hero: {
    eyebrow: string;
    tagline: string;
    photo: Photo;
    /** CSS object-position for cropping on narrow phones, e.g. "center 30%". */
    photoPosition: string;
    countdownDoneText: string;
    /** Optional short line under the countdown, e.g. "Strictly by invitation". */
    note?: string;
  };
  sections: Record<SectionId, SectionConfig>;
  story: StoryMoment[];
  events: WeddingEvent[];
  dressCode: {
    summary: string;
    swatches: Swatch[];
    details: string[];
  };
  gallery: Photo[];
  gifts: {
    message: string;
    momo?: {
      network: string;
      accountName: string;
      /** Local format as guests type it into their MoMo app, e.g. "0241234567". */
      number: string;
    };
    registry: RegistryLink[];
  };
  faq: FaqItem[];
  rsvp: {
    /** Free text, e.g. "Saturday 20 March 2027". Leave empty to hide. */
    deadline: string;
    /** Pre-filled WhatsApp message. Write it normally; the site encodes it. */
    whatsappMessage: string;
    contacts: Contact[];
  };
  music: {
    /** Shows the music button. Music never plays until a guest taps it. */
    enabled: boolean;
    /** Path inside /public, e.g. "/audio/our-song.mp3". */
    src: string;
    title: string;
  };
  footer: {
    closingLine: string;
  };
}
