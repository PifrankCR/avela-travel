// Curated villa collection sourced from the Wanderlust Realty partnership.
// Descriptions rewritten in Avela voice. Images from the Wanderlust listings.
// Alt text follows pattern: villa + feature + Nosara + Costa Rica for image SEO.
//
// Note on photo quality: Wanderlust publishes these at 1080px wide, so the
// hero renders softer than the Alba and Beach Management houses. Ask them for
// the originals if these pages start carrying real traffic.

import type { Villa } from './alba-villas';

export const wanderlustVillas: Villa[] = [
  {
    slug: 'casa-de-la-marea',
    name: 'Casa de la Marea',
    tagline: 'Concrete, teak and jungle, a ten-minute walk from Playa Guiones',
    eyebrow: 'Contemporary jungle house',
    bedrooms: 4,
    bathrooms: '3.5',
    guests: 10,
    area: 'Playa Guiones, Nosara',
    features: ['Pool', 'Walk to Playa Guiones', 'Air conditioning throughout', 'Outdoor showers'],
    shortDescription:
      'A new four-bedroom house in polished concrete and teak, ten minutes on foot from Playa Guiones and a few from the Bodhi Tree. Sleeps ten, including a bunk room built for kids.',
    longDescription: [
      'Casa de la Marea is a recent build on Guiones, ten minutes on foot from the beach and a few minutes from the Bodhi Tree. The material palette is the point: polished concrete walls, teak slats overhead, and openings wide enough that the jungle reads as part of the room.',
      'Four bedrooms sleep ten. One has a king and its own bathroom with a tub and a door straight into the garden. Two have queens. The fourth is a bunk room, two full beds below and twins above, which is the one that makes this house work for families rather than just groups of adults.',
      'The kitchen runs long against the glass with seating down one side, and opens to a dining table that sits half outside under the slatted roof. There is a mini bar off the living room. Air conditioning runs throughout, which is not a given in houses built this open.',
      'Outside, the pool stretches along a deck lined with loungers and planting. Two outdoor showers sit at the back by the board rack, which tells you how the house expects to be used: in from the surf, rinse, straight to the water.',
    ],
    amenities: [
      '4 bedrooms / 3.5 bathrooms, sleeps 10',
      'King bedroom with en-suite tub and direct garden access',
      'Two queen bedrooms',
      'Bunk room: two full beds below, twin bunks above',
      'Pool with lounger deck',
      'Air conditioning throughout',
      'Open kitchen with island seating and indoor-outdoor dining',
      'Mini bar',
      'Two outdoor showers and a board rack',
      'Wi-Fi and television',
      'Ten-minute walk to Playa Guiones',
    ],
    source: 'https://www.wanderlustrealty.com/vacation-rentals-nosara/casa-de-la-marea',
    cover: {
      src: '/images/villas/casa-de-la-marea/23.jpg',
      alt: 'Casa de la Marea pool and lounger deck surrounded by jungle, Playa Guiones, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/casa-de-la-marea/23.jpg', alt: 'Casa de la Marea pool running the length of a teak deck lined with loungers, Playa Guiones Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/22.jpg', alt: 'Casa de la Marea pool seen through tropical foliage with loungers along the deck, Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/07.jpg', alt: 'Casa de la Marea outdoor dining table under dappled light with the living room beyond, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/09.jpg', alt: 'Casa de la Marea dining table on the covered terrace facing the garden and pool, Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/03.jpg', alt: 'Casa de la Marea kitchen with a long island open to the jungle under a timber roof, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/05.jpg', alt: 'Casa de la Marea living and dining area under a vaulted slatted ceiling with woven pendants, Nosara' },
      { src: '/images/villas/casa-de-la-marea/02.jpg', alt: 'Casa de la Marea living room with low sofas in concrete and teak, Playa Guiones Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/08.jpg', alt: 'Casa de la Marea breakfast counter along the glass wall facing the deck, Nosara' },
      { src: '/images/villas/casa-de-la-marea/01.jpg', alt: 'Casa de la Marea sunken courtyard lounge beneath the open staircase, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/19.jpg', alt: 'Casa de la Marea bedroom in polished concrete with a sliding door onto the garden, Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/14.jpg', alt: 'Casa de la Marea bedroom with a teak headboard and a window onto the jungle, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/17.jpg', alt: 'Casa de la Marea bunk room with full beds below and twin bunks above, Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/18.jpg', alt: 'Casa de la Marea bunk room with a garden door and curtained window, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/21.jpg', alt: 'Casa de la Marea bathroom with a freestanding tub and walk-in shower in concrete, Nosara' },
      { src: '/images/villas/casa-de-la-marea/13.jpg', alt: 'Casa de la Marea bathroom with a backlit round mirror over a concrete vanity, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/11.jpg', alt: 'Casa de la Marea mini bar in teak with a wine fridge, Nosara, Costa Rica' },
      { src: '/images/villas/casa-de-la-marea/25.jpg', alt: 'Casa de la Marea twin outdoor showers beside the surfboard rack, Playa Guiones Nosara' },
      { src: '/images/villas/casa-de-la-marea/27.jpg', alt: 'Casa de la Marea covered entrance with bicycles parked under the timber roof, Nosara, Costa Rica' },
    ],
  },
];
