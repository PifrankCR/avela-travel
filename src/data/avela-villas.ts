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
// Two things still need Pablo, both recorded against decision C4:
//   1. `area` is vaguer than the other fifteen, which name a real neighborhood
//      ("Las Huacas Hills, Nosara"). The old copy only ever said "jungle
//      setting" and "the hillside above Nosara", so that is all that is
//      carried forward here. Not invented, but not precise either.
//   2. All five Ocaso photos carry a visible "Vacation Nosara" watermark and
//      are credited to Alejandro Jimenez in their metadata. They are already
//      live site-wide, ocaso-1.jpg included as the default OG image, but they
//      are another company's branded assets.

import type { Villa } from './alba-villas';

export const avelaVillas: Villa[] = [
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
