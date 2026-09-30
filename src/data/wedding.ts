/**
 * ALL wedding content lives in this file.
 *
 * Edit the values below and the site updates. You never need to touch the
 * components. Every placeholder is marked with "TODO"; search for TODO to
 * find what still needs real details.
 *
 * Photos: put image files in src/assets/photos/ and import them at the top,
 * as shown below. Astro resizes and compresses them automatically.
 */
import type { Venue, WeddingData } from './types';

import heroPhoto from '../assets/photos/hero.jpg'; // TODO: replace with the real hero photo (landscape, at least 2000px wide)
import story1 from '../assets/photos/story-1.jpg'; // TODO: real photo
import story2 from '../assets/photos/story-2.jpg'; // TODO: real photo
import story3 from '../assets/photos/story-3.jpg'; // TODO: real photo
import gallery1 from '../assets/photos/gallery/gallery-1.jpg'; // TODO: real gallery photos
import gallery2 from '../assets/photos/gallery/gallery-2.jpg';
import gallery3 from '../assets/photos/gallery/gallery-3.jpg';
import gallery4 from '../assets/photos/gallery/gallery-4.jpg';
import gallery5 from '../assets/photos/gallery/gallery-5.jpg';
import gallery6 from '../assets/photos/gallery/gallery-6.jpg';
import gallery7 from '../assets/photos/gallery/gallery-7.jpg';
import gallery8 from '../assets/photos/gallery/gallery-8.jpg';
import gallery9 from '../assets/photos/gallery/gallery-9.jpg';

// All three events are at the same venue. If an event moves elsewhere, give it
// its own venue object and the site will show a map on each event card instead.
const venue: Venue = {
  name: "SALO'S PRESTIGIOUS EVENTS CENTER",
  // TODO: add the town or area, e.g. address: 'Kasoa, Central Region, Ghana'
  mapEmbedUrl: 'https://www.google.com/maps?q=5.5408214,-0.4301979&z=16&output=embed',
  directionsQuery: '5.5408214,-0.4301979',
};

export const wedding: WeddingData = {
  meta: {
    title: 'Daniel & Nancy | Our Wedding',
    description: 'You are warmly invited to celebrate the wedding of Daniel and Nancy on Saturday 21 November 2026.',
    siteUrl: 'https://daniel-and-nancy.netlify.app', // TODO: set to the real Netlify address once the site is live
    ogImage: '/og-image.jpg', // TODO: replace public/og-image.jpg with a 1200x630 photo of the couple
    ogImageAlt: 'Daniel and Nancy', // TODO: describe the real preview photo
    lang: 'en-GB',
    timeZone: 'Africa/Accra',
  },

  couple: {
    partner1: 'Daniel', // TODO: confirm how the names should appear
    partner2: 'Nancy',
    displayNames: 'Daniel & Nancy',
    hashtags: [
      { tag: '#TeamDANQ', meaning: 'Divinely Aligned, Never Quitting' },
      { tag: '#Dancy2026' },
    ],
  },

  // Start of the day (traditional ceremony). Used for the countdown.
  weddingDate: '2026-11-21T08:00:00+00:00',

  hero: {
    eyebrow: 'Together with their families',
    tagline: 'invite you to celebrate their wedding',
    photo: {
      src: heroPhoto,
      alt: 'Daniel and Nancy smiling together', // TODO: describe the real photo
    },
    photoPosition: 'center 35%',
    countdownDoneText: 'Today we say I do',
    note: 'Strictly by invitation',
  },

  sections: {
    story: { enabled: true, navLabel: 'Our Story', title: 'Our Story' },
    events: {
      enabled: true,
      navLabel: 'Events',
      title: 'Celebrations',
      intro: 'We would be honoured to have you with us. Our celebration is strictly by invitation.',
    },
    'dress-code': {
      enabled: true,
      navLabel: 'Dress Code',
      title: 'Dress Code',
    },
    gallery: { enabled: true, navLabel: 'Gallery', title: 'Moments' },
    gifts: {
      enabled: true,
      navLabel: 'Gifts',
      title: 'Gifts',
    },
    faq: { enabled: true, navLabel: 'FAQ', title: 'Questions' },
    rsvp: {
      enabled: true,
      navLabel: 'RSVP',
      title: 'RSVP',
      intro: 'For any questions about the wedding, please reach out to one of our family contacts below.',
    },
  },

  // TODO: replace with the couple's real story (2 to 3 moments work best).
  story: [
    {
      title: 'How we met',
      date: 'March 2019',
      text: 'We met at a friend\'s birthday dinner in Accra. Nancy laughed at one of Daniel\'s jokes, and he has been trying to make her laugh ever since.',
      photo: { src: story1, alt: 'Daniel and Nancy at a dinner with friends' },
    },
    {
      title: 'Our first date',
      date: 'May 2019',
      text: 'Coffee turned into lunch, lunch turned into a long walk, and by the end of the day we both knew this was the start of something special.',
      photo: { src: story2, alt: 'Daniel and Nancy on their first date' },
    },
    {
      title: 'The proposal',
      date: 'December 2025',
      text: 'On a quiet evening surrounded by family, Daniel asked the question. Nancy said yes before he had finished asking.',
      photo: { src: story3, alt: 'Nancy showing her engagement ring' },
    },
  ],

  // Saturday 21 November 2026. Times are Ghana time (+00:00).
  events: [
    {
      slug: 'traditional-ceremony',
      name: 'Traditional Ceremony',
      description: 'The joining of our two families in the customary rites.', // TODO: confirm wording
      start: '2026-11-21T08:00:00+00:00',
      end: '2026-11-21T10:00:00+00:00',
      venue,
    },
    {
      slug: 'church-wedding',
      name: 'Church Wedding',
      description: 'Our marriage blessing and exchange of vows.', // TODO: confirm wording
      start: '2026-11-21T12:00:00+00:00',
      end: '2026-11-21T14:00:00+00:00',
      venue,
    },
    {
      slug: 'reception',
      name: 'Reception',
      description: 'Dinner, dancing and celebration.', // TODO: confirm wording
      start: '2026-11-21T15:00:00+00:00',
      end: '2026-11-21T19:00:00+00:00',
      venue,
    },
  ],

  // TODO: confirm colours and attire notes with the couple.
  dressCode: {
    summary: 'Wear you finest clothes and biggest smile, with elegance and a touch of celebration.',
    swatches: [
      { name: 'Olive Green', hex: '#4B5A2A' },
      { name: 'Wine', hex: '#6B1d3A' },
      { name: 'Blush Pink', hex: '#E7B1B6' },
      { name: 'Ivory', hex: '#FBF7F0' },
    ],
    details: [
      //'Traditional ceremony: kente or African print in our colours is warmly welcome.',
      //'Church wedding and reception: formal attire. Suits for gentlemen, long or midi dresses for ladies.',
      'Please keep white for the bride.',
    ],
  },

  // TODO: replace with real photos and describe each one.
  gallery: [
    { src: gallery1, alt: 'Daniel and Nancy, photo 1' },
    { src: gallery2, alt: 'Daniel and Nancy, photo 2' },
    { src: gallery3, alt: 'Daniel and Nancy, photo 3' },
    { src: gallery4, alt: 'Daniel and Nancy, photo 4' },
    { src: gallery5, alt: 'Daniel and Nancy, photo 5' },
    { src: gallery6, alt: 'Daniel and Nancy, photo 6' },
    { src: gallery7, alt: 'Daniel and Nancy, photo 7' },
    { src: gallery8, alt: 'Daniel and Nancy, photo 8' },
    { src: gallery9, alt: 'Daniel and Nancy, photo 9' },
  ],

  gifts: {
    message: 'Your presence is the greatest gift of all. If you would like to bless us further, you may do so below.',
    // TODO: real MoMo details. Delete the whole "momo" block to hide it.
    momo: {
      network: 'MTN Mobile Money',
      accountName: 'Daniel Mensah', // TODO
      number: '0241234567', // TODO
    },
    // TODO: add registry links, or leave the list empty to hide them.
    registry: [],
  },

  // TODO: confirm answers with the couple.
  faq: [
    {
      question: 'Can I bring a plus-one?',
      answer: 'Our celebration is strictly by invitation. Due to limited space, we are unable to accommodate plus-ones.',
    },
    {
      question: 'Are children welcome?',
      answer: 'While we adore your children, we have chosen to keep our wedding an adults-only event.',
    },
    // {
    //   question: 'What time should I arrive?',
    //   answer: 'Please arrive about 30 minutes before each event starts so that everyone is seated in good time.',
    // },
    // {
    //   question: 'Is there parking at the venues?',
    //   answer: 'Yes, parking is available at all venues. Ushers will be on hand to guide you.',
    // },
  ],

  rsvp: {
    deadline: '', // TODO: add a date from the couple, e.g. 'Saturday 31 October 2026'. Empty hides the line.
    whatsappMessage: "Hello, I'm reaching out about Daniel and Nancy's wedding.",
    // TODO: real contacts. Numbers in international format without "+" (024 123 4567 becomes 233241234567).
    contacts: [
      { name: 'Kwame Mensah', label: "Groom's family", phone: '233546274349' },
      { name: 'Akosua Owusu', label: "Bride's family", phone: '233546274349' },
    ],
  },

  music: {
    enabled: false, // TODO: set to true once an audio file is added to public/audio/
    src: '/audio/our-song.mp3',
    title: 'Our song',
  },

  footer: {
    closingLine: 'With love and gratitude, we can\'t wait to celebrate with you.',
  },
};
