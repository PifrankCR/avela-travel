// Villas Avela represents directly, rather than through one of the three
// partner collections.
//
// Ocaso and Zenith were the original two. They were hardcoded into /villas,
// the homepage and the /contact aside as handwritten sections and never
// existed as data, so they had no detail pages and could not appear in the
// contact form's villa dropdown. Confirmed as current, bookable inventory by
// Pablo on 2026-11-06, and moved here so they behave like the other fifteen.
//
// Every fact below was already published on the live site. Nothing here is new
// except the photo alt text, which was rewritten against the actual images:
// four of the six Zenith descriptions in the old markup named the wrong room.
//
// Still open on Zenith, against decision C4: `area` reads "Hillside above
// Nosara", vaguer than the other fifteen which name a neighbourhood ("Las
// Huacas Hills, Nosara"), because the old copy never said more than that. Its
// capacity, 5 bed / 5.5 bath / sleeps 12, is carried forward from the old
// markup rather than confirmed by an owner or manager.

import type { Villa } from './alba-villas';

export const avelaVillas: Villa[] = [
  {
    slug: 'zenith',
    name: 'Villa Zenith',
    tagline: 'Five bedrooms on the hillside, the Pacific from every principal room',
    eyebrow: 'Ocean-view hilltop',
    bedrooms: 5,
    bathrooms: '5.5',
    guests: 12,
    area: 'Hillside above Nosara',
    features: [
      'Infinity pool',
      'Panoramic ocean views',
      'Outdoor BBQ terrace',
      'Chef kitchen',
    ],
    shortDescription:
      'Five bedrooms on the hillside above Nosara, with an infinity pool set against the Pacific and an unbroken ocean view from every principal room. Sleeps twelve.',
    longDescription: [
      'Villa Zenith sits high on the hillside above Nosara, and the ocean is in front of you from every principal room. Stone and wood carry through the architecture, and the glass walls fold back so the living room, the dining table and the terrace read as one space.',
      'Five bedrooms sleep up to twelve. An infinity pool runs to the edge of the view, with a covered terrace and an outdoor BBQ alongside it, and the kitchen is built around an island long enough to cook for the whole house at once.',
    ],
    amenities: [
      '5 bedrooms / 5.5 bathrooms',
      'Sleeps up to 12 guests',
      'Infinity pool overlooking the Pacific',
      'Panoramic ocean views from every principal room',
      'Fully equipped chef kitchen with island seating',
      'Outdoor BBQ terrace',
      'Air conditioning in all rooms',
      'High-speed WiFi',
      'Daily housekeeping',
    ],
    source: 'Avela direct.',
    cover: {
      src: '/images/villas/zenith/DSC05695-HDR-Edit.jpg',
      alt: 'Villa Zenith infinity pool at sunset above the Pacific, Nosara, Costa Rica',
    },
    gallery: [
      {
        src: '/images/villas/zenith/DSC05695-HDR-Edit.jpg',
        alt: 'Villa Zenith infinity pool reflecting the sunset above the Pacific, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/zenith/DSC04803-HDR.jpg',
        alt: 'Villa Zenith covered terrace with loungers looking down the coastline, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/zenith/DSC04746-HDR.jpg',
        alt: 'Villa Zenith open-plan living and dining with folding glass walls onto the ocean, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/zenith/DSC04785-HDR.jpg',
        alt: 'Villa Zenith kitchen island with woven pendants and the Pacific beyond, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/zenith/DSC04863-HDR.jpg',
        alt: 'Villa Zenith indoor dining table and kitchen bar under a timber slat ceiling, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/zenith/DSC04551.jpg',
        alt: 'The coastline and forested headland seen from Villa Zenith, Nosara, Costa Rica',
      },
    ],
  },
];

// VILLA OCASO IS UNPUBLISHED. Pablo's call, 2026-11-08. The data is kept here
// rather than deleted, but nothing imports `unpublishedVillas`, so Ocaso
// generates no detail page, no card in the collection grid, no contact-form
// option and no llms.txt entry. Two reasons, in order of weight:
//
//   1. Every Ocaso photo we hold carries a "Vacation Nosara / Holiday Experts"
//      watermark, bottom right, white line art at low opacity over pale tile,
//      which is why it reads as nothing at normal size. The mark is burned
//      into the pixels; separately, the EXIF credits Alejandro Jimenez. There
//      is no clean copy to swap in: searched 2026-11-07, and the manager's own
//      Vrbo listing (4049679) serves the same mark on all 30 of its photos,
//      while Villaway only looks unmarked because its 974x558 banner crop cuts
//      the corner off. The 65-photo local delivery is marked throughout.
//      Tracked as decision F5, which is about asking Vacation Nosara for
//      unwatermarked originals and written permission, or commissioning a
//      new shoot.
//   2. The public listings contradict the facts below. They put the house at
//      Playa Pelada, four minutes' walk from the beach, with 5 bathrooms. We
//      published "Jungle setting, Nosara" and 4 bathrooms, and the
//      longDescription has howler monkeys in the canopy and macaws at dusk
//      while the photographs show a flat, newly planted lot. Tracked as C4b.
//
// To put it back: move the five photos from src/assets/images/unpublished-ocaso
// back to src/assets/images/villas/ocaso (they were moved out because the eager
// glob in src/lib/villa-images.ts emits every file it matches, which was
// publishing the watermarked originals under /_astro/ even with no page using
// them), move the object into `avelaVillas` above, restore the homepage feature
// block and the /contact aside card (both removed in the same commit that
// unpublished it, so the markup is in git history), and add its line back to
// public/llms.txt. Settle C4b before republishing the copy.
export const unpublishedVillas: Villa[] = [
  {
    slug: 'ocaso',
    name: 'Villa Ocaso',
    tagline: 'Four bedrooms behind full-height glass, open to the trees',
    eyebrow: 'Jungle retreat',
    bedrooms: 4,
    bathrooms: '4',
    guests: 10,
    area: 'Jungle setting, Nosara',
    features: [
      'Private pool',
      'Full-height glass walls',
      'Chef kitchen',
      'Air conditioning throughout',
    ],
    shortDescription:
      'A four-bedroom house that opens to the jungle on every side through full-height glass, with a private pool and a kitchen set up for a chef. Sleeps ten.',
    longDescription: [
      'Full-height glass opens Villa Ocaso to the canopy around it. Howler monkeys work through the treetops in the morning, the pool takes the afternoon, and scarlet macaws cross overhead at dusk.',
      'Natural wood finishes, a fully equipped chef kitchen, and four large bedrooms sleeping up to ten. The layout suits families and groups of friends who want to be in the trees without giving up air conditioning, fast internet or daily housekeeping.',
    ],
    amenities: [
      '4 bedrooms / 4 bathrooms',
      'Sleeps up to 10 guests',
      'Private pool with jungle views',
      'Full-height glass walls throughout',
      'Fully equipped chef kitchen',
      'Air conditioning in all rooms',
      'Outdoor dining terrace',
      'High-speed WiFi',
      'Daily housekeeping',
      'Avela Experience add-ons available',
    ],
    source: 'Avela direct. Photography supplied watermarked by Vacation Nosara.',
    cover: {
      src: '/images/villas/ocaso/ocaso-1.jpg',
      alt: 'Villa Ocaso living room opening to the garden through full-height glass, Nosara, Costa Rica',
    },
    gallery: [
      {
        src: '/images/villas/ocaso/ocaso-1.jpg',
        alt: 'Villa Ocaso living room with a corner sofa and full-height glass onto the planted garden, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/ocaso/ocaso-2.jpg',
        alt: 'Villa Ocaso open-plan living room and kitchen under a vaulted ceiling, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/ocaso/ocaso-5.jpg',
        alt: 'Villa Ocaso living room looking through full-height glass to palms and the garden, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/ocaso/ocaso-3.jpg',
        alt: 'Villa Ocaso bedroom with a slatted wood headboard and a window onto the garden, Nosara, Costa Rica',
      },
      {
        src: '/images/villas/ocaso/ocaso-4.jpg',
        alt: 'Villa Ocaso second bedroom with a rattan pendant and sliding doors to the garden, Nosara, Costa Rica',
      },
    ],
  },
];
