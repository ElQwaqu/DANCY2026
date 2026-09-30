# Daniel & Nancy: Wedding Invitation Website

A single-page wedding invitation site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It is designed for guests opening the link from WhatsApp on a phone.

> This README grows with each build phase. Sections marked "coming in phase N" are not written yet.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.12 or newer.

```sh
npm install      # first time only
npm run dev      # start a local preview at http://localhost:4321
npm run build    # build the final site into the dist/ folder
npm run preview  # preview the built site
```

## Update the wedding details

**All content lives in one file: [`src/data/wedding.ts`](src/data/wedding.ts).** You never need to edit the components.

- Search the file for `TODO` to find every placeholder that still needs real details.
- Dates use the format `2027-04-17T10:00:00+00:00` (year-month-day, 24-hour time, `+00:00` for Ghana time).
- Phone numbers for contacts use international format without `+`. For example, `024 123 4567` becomes `233241234567`.
- The MoMo number uses local format as guests type it, e.g. `0241234567`.
- To hide a whole section, set `enabled: false` under `sections`.

### Replace the photos

1. Put the new photo in `src/assets/photos/` (or `src/assets/photos/gallery/`). JPG is fine; Astro resizes and compresses it.
2. Either give it the same file name as the placeholder, or update the matching `import` line at the top of `wedding.ts`.
3. Update the photo's `alt` text in `wedding.ts` with a short description of the photo.

The WhatsApp link preview image is `public/og-image.jpg`. Replace it with a 1200 x 630 px photo.

### Venue maps

Each event in `wedding.ts` has a `mapEmbedUrl` (the interactive map on the card) and a `directionsQuery` (where the "Get directions" button navigates to).

To get an exact embed link: open Google Maps, search the venue, tap **Share**, choose **Embed a map**, and copy only the address inside `src="..."`. For `directionsQuery`, use the venue name with its town (e.g. `Holy Trinity Cathedral, Accra`) or its coordinates (e.g. `5.5502,-0.2174`).

### Calendar files

The "Add to calendar" files are created automatically from each event's name, times and venue when the site is built. There is nothing extra to edit.

### Background music (optional)

1. Put an MP3 in `public/audio/` (keep it small, ideally under 3 MB).
2. In `wedding.ts`, set `music.enabled` to `true` and `music.src` to the file path, e.g. `/audio/our-song.mp3`.

A small music button then appears in the bottom corner. Music never starts on its own, and the file is only downloaded when a guest taps play.

### Change the colours

Colours are design tokens at the top of [`src/styles/global.css`](src/styles/global.css). Change a hex value there and the whole site updates.

## Project structure

```
src/
  data/wedding.ts      All wedding content (edit this)
  data/types.ts        Describes the shape of wedding.ts
  assets/photos/       Photos (optimised automatically)
  styles/global.css    Colours, fonts and base styles
  lib/                 Helpers for phone links, dates and calendar files
  layouts/             Page shell and meta tags
  components/          One component per section
  pages/               The page and the calendar (.ics) files
public/                Files served as they are (preview image, favicon, music)
```

## Deploy to Netlify

Coming in phase 4.
