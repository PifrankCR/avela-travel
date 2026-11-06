// Curated villa collection from Alba Nosara.
// Each photo's alt text is written for image SEO: villa name + feature + Nosara + Costa Rica.

export type Photo = { src: string; alt: string; caption?: string };

export type Villa = {
  slug: string;
  name: string;
  tagline: string;
  eyebrow: string;
  bedrooms: number;
  bathrooms: string;
  // Optional: some listings do not publish a maximum occupancy. Leave it out
  // rather than guessing, and the pages drop the "Sleeps" line for that villa.
  guests?: number;
  area: string; // neighborhood within Nosara
  features: string[]; // short bullets (pool, ocean view, etc.)
  shortDescription: string; // 1-2 sentence card blurb
  longDescription: string[]; // paragraph array for detail page
  amenities: string[];
  source: string;
  cover: Photo;
  gallery: Photo[];
};

export const villas: Villa[] = [
  {
    slug: 'calla-lily',
    name: 'Calla Lily',
    tagline: 'Calm haven above Playa Guiones',
    eyebrow: 'Ocean-view retreat',
    bedrooms: 5,
    bathrooms: '4.5',
    guests: 10,
    area: 'Las Huacas Hills, Nosara',
    features: ['Saltwater pool', 'Heated jacuzzi', 'Ocean view', 'National reserve setting'],
    shortDescription:
      'Open, minimal, earth-friendly retreat in the protected hills of Las Huacas, walking distance to Playa Guiones.',
    longDescription: [
      'Designed by Austrian architect Nico Weiss, Calla Lily is an open, minimal, earth-friendly home tucked into the peaceful hills of Las Huacas above Playa Guiones.',
      'A saltwater pool and heated outdoor jacuzzi sit at the edge of a protected national reserve, with daily visits from monkeys, tropical birds, and other wildlife.',
      'Easy walking access to the beach, restaurants, yoga studios, surf schools, and the shops of Guiones. The property is continuously monitored for security.',
    ],
    amenities: [
      '5 bedrooms / 4.5 bathrooms',
      'Sleeps up to 10 guests',
      'Saltwater pool + heated jacuzzi',
      'Ocean and reserve views',
      'Walking distance to Playa Guiones',
      '24/7 security monitoring',
    ],
    source: 'https://albanosara.com/vacation-rental/calla-lily/',
    cover: {
      src: '/images/villas/calla-lily/06-view-sunset-ocean-bougainvillea.jpg',
      alt: 'Calla Lily villa sunset ocean view with bougainvillea, Las Huacas hills, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/calla-lily/06-view-sunset-ocean-bougainvillea.jpg', alt: 'Calla Lily villa sunset ocean view with bougainvillea, Nosara, Costa Rica' },
      { src: '/images/villas/calla-lily/07-view-sunset-terrace.jpg', alt: 'Calla Lily villa sunset terrace view, Las Huacas hills, Nosara' },
      { src: '/images/villas/calla-lily/05-living-ocean-view.jpg', alt: 'Calla Lily villa open living room with ocean view, Nosara, Costa Rica' },
      { src: '/images/villas/calla-lily/04-kitchen.jpg', alt: 'Calla Lily villa modern kitchen, Nosara luxury vacation rental' },
      { src: '/images/villas/calla-lily/01-bedroom-master-hammock-view.jpg', alt: 'Calla Lily villa master bedroom with hammock and jungle view, Nosara' },
      { src: '/images/villas/calla-lily/02-bedroom-king-bougainvillea.jpg', alt: 'Calla Lily villa king bedroom with bougainvillea view, Nosara' },
      { src: '/images/villas/calla-lily/03-bedroom-king-canopy.jpg', alt: 'Calla Lily villa king canopy bedroom, Las Huacas Nosara' },
    ],
  },
  {
    slug: 'casa-vivo',
    name: 'Casa Vivo',
    tagline: 'Between Playa Guiones and Playa Pelada',
    eyebrow: 'Hilltop modern',
    bedrooms: 5,
    bathrooms: '4',
    guests: 10,
    area: 'Hill between Playa Guiones & Playa Pelada, Nosara',
    features: ['Pool', 'Gym & sauna', 'Cold plunge', 'Elevator', 'Ocean views'],
    shortDescription:
      'Newly renovated multi-level home with chef\'s kitchen, gym, sauna and cold plunge. Walking distance to two beaches.',
    longDescription: [
      'Casa Vivo sits on a hill between Playa Guiones and Playa Pelada, with sweeping ocean views and dense vegetation visited daily by monkeys and pizotes.',
      'The master suite occupies the first level with a king bed and sofa-bed office. The ground floor adds four king bedrooms, TV room, BBQ, deck, and pool. Below, a private gym, sauna, and cold plunge. The top level holds the chef\'s kitchen, living area, and panoramic terrace.',
      'An elevator connects every floor, equally great for multigenerational groups and guests who want the full wellness setup at home.',
    ],
    amenities: [
      '5 bedrooms / 4 bathrooms',
      'Sleeps up to 10 guests',
      'Private pool',
      'Gym, sauna, cold plunge',
      'Chef\'s kitchen with panoramic views',
      'Elevator throughout',
      'Walking distance to two beaches',
    ],
    source: 'https://albanosara.com/vacation-rental/casa-vivo-nosara-beach-vacation-rentals/',
    cover: {
      src: '/images/villas/casa-vivo/06-view-pool-palms.webp',
      alt: 'Casa Vivo villa pool and palm view between Playa Guiones and Playa Pelada, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/casa-vivo/06-view-pool-palms.webp', alt: 'Casa Vivo villa pool with palm trees, hilltop Nosara, Costa Rica' },
      { src: '/images/villas/casa-vivo/07-view-outdoor-dining.webp', alt: 'Casa Vivo villa outdoor dining terrace, Nosara luxury rental' },
      { src: '/images/villas/casa-vivo/05-living-sunset-dining.webp', alt: 'Casa Vivo villa sunset living and dining room, Nosara' },
      { src: '/images/villas/casa-vivo/04-kitchen-marble-island.webp', alt: 'Casa Vivo villa chef\'s kitchen with marble island, Nosara' },
      { src: '/images/villas/casa-vivo/01-bedroom-master-king.webp', alt: 'Casa Vivo villa master king bedroom, Nosara vacation rental' },
      { src: '/images/villas/casa-vivo/02-bedroom-terrace-tub.webp', alt: 'Casa Vivo villa bedroom with terrace and soaking tub, Nosara' },
      { src: '/images/villas/casa-vivo/03-bedroom-wood-headboard.webp', alt: 'Casa Vivo villa wood-headboard bedroom, Nosara' },
    ],
  },
  {
    slug: 'raintree',
    name: 'Raintree Casa',
    tagline: 'Architectural Digest-featured Blue Zone estate',
    eyebrow: 'Designer estate',
    bedrooms: 6,
    bathrooms: '7',
    guests: 14,
    area: 'Between Playa Guiones & Playa Pelada, Nosara',
    features: ['Saltwater infinity pool', 'Ocean view', 'Solar powered', 'Studio Saxe design'],
    shortDescription:
      'A one-acre Studio Saxe estate featured in Architectural Digest, with a second-story saltwater infinity pool and gourmet social kitchen.',
    longDescription: [
      'Raintree Casa is a private one-acre Blue Zone estate by award-winning architect Benjamin G. Saxe (Studio Saxe), completed in August 2022 and featured in Architectural Digest Mexico & Latin America.',
      'The home hosts up to 14 guests across a gourmet social kitchen, expansive terraces, and a second-story saltwater infinity pool overlooking the jungle with seasonal ocean views.',
      'Bedrooms include a primary suite with king bed, double-sink ensuite, soaker tub, rain shower, and terrace; a second bedroom with two queens and jungle terrace; a third king bedroom with jungle terrace; a bunk room with queen + two twin bunks; and a surf lounge bedroom configurable as king or two twins. A separate Raintree Studio is available for 2–3 additional guests.',
      'Built with solar panels, Bionest water treatment, composting, and biodegradable hygiene products. Walking distance to Playa Guiones and Playa Pelada, with a short drive to Ostional Wildlife Refuge for the arribada turtle nestings.',
    ],
    amenities: [
      '6 bedrooms / 7 bathrooms',
      'Sleeps up to 14 guests',
      'Second-story saltwater infinity pool',
      'Gourmet social kitchen',
      'Solar powered, Bionest water treatment',
      'Optional Raintree Studio for 2–3 more',
      'Walking distance to Playa Guiones & Playa Pelada',
    ],
    source: 'https://albanosara.com/vacation-rental/rain-tree-house/',
    cover: {
      src: '/images/villas/raintree/01-view-sunset-infinity-pool.jpg',
      alt: 'Raintree Casa sunset view from second-story saltwater infinity pool, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/raintree/01-view-sunset-infinity-pool.jpg', alt: 'Raintree Casa second-story infinity pool at sunset, Nosara, Costa Rica' },
      { src: '/images/villas/raintree/02-view-twilight-pool-terrace.jpg', alt: 'Raintree Casa twilight pool terrace, Studio Saxe architecture, Nosara' },
      { src: '/images/villas/raintree/04-living-outdoor-dining.jpg', alt: 'Raintree Casa outdoor living and dining terrace, Nosara villa' },
      { src: '/images/villas/raintree/03-kitchen.jpg', alt: 'Raintree Casa gourmet social kitchen, Nosara luxury rental' },
      { src: '/images/villas/raintree/05-bedroom-primary-king.jpg', alt: 'Raintree Casa primary king suite with soaker tub, Nosara' },
      { src: '/images/villas/raintree/06-bedroom-two-queens.jpg', alt: 'Raintree Casa two-queen bedroom with jungle terrace, Nosara' },
      { src: '/images/villas/raintree/07-bedroom-bunk.jpg', alt: 'Raintree Casa bunk bedroom for families, Nosara' },
    ],
  },
  {
    slug: 'rubio-azul',
    name: 'Rubio Azul',
    tagline: 'Modern living in Guiones Norte',
    eyebrow: 'Contemporary',
    bedrooms: 4,
    bathrooms: '4',
    guests: 10,
    area: 'Guiones Norte, Nosara',
    features: ['Pool & jacuzzi', 'Private gym', 'Movie theater', 'BBQ terrace'],
    shortDescription:
      'A new-build with sharp modern architecture, a movie theater, private gym, and pool. 5 minutes on foot to Playa Guiones.',
    longDescription: [
      'Rubio Azul is a newly built residence in Guiones Norte with sharp, modern architecture, high-end finishes, and clean lines.',
      'The home features a private movie theater, a fully equipped gym, and a sprawling terrace with pool, separate jacuzzi, and BBQ area. A private garage and full security camera system round out the property.',
      'Two king bedrooms, one two-queen bedroom, and a custom bunk room (queens on the bottom, singles on top) make it well suited to families and friend groups. Five minutes on foot to Playa Guiones, ten to Nosara center.',
    ],
    amenities: [
      '4 bedrooms / 4 bathrooms',
      'Sleeps up to 10 guests',
      'Pool with separate jacuzzi',
      'Private movie theater',
      'Fully equipped gym',
      'BBQ terrace + private garage',
      'Security cameras',
      '5 minutes on foot to Playa Guiones',
    ],
    source: 'https://albanosara.com/vacation-rental/rubio-azul-guiones-norte/',
    cover: {
      src: '/images/villas/rubio-azul/01-view-pool-courtyard.jpg',
      alt: 'Rubio Azul villa pool courtyard, modern architecture in Guiones Norte, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/rubio-azul/01-view-pool-courtyard.jpg', alt: 'Rubio Azul villa pool and courtyard, Guiones Norte, Nosara' },
      { src: '/images/villas/rubio-azul/07-outdoor-dining-bbq.jpg', alt: 'Rubio Azul villa outdoor dining and BBQ terrace, Nosara' },
      { src: '/images/villas/rubio-azul/03-living-room.jpg', alt: 'Rubio Azul villa modern living room, Guiones Norte Nosara' },
      { src: '/images/villas/rubio-azul/02-kitchen-island.jpg', alt: 'Rubio Azul villa contemporary kitchen with island, Nosara' },
      { src: '/images/villas/rubio-azul/04-bedroom-king-with-bath.jpg', alt: 'Rubio Azul villa king bedroom with ensuite bath, Nosara' },
      { src: '/images/villas/rubio-azul/05-bedroom-king.jpg', alt: 'Rubio Azul villa second king bedroom, Nosara vacation rental' },
      { src: '/images/villas/rubio-azul/06-bedroom-bunk.jpg', alt: 'Rubio Azul villa custom bunk room with queens and singles, Nosara' },
    ],
  },
  {
    slug: 'stella-maris',
    name: 'Stella Maris',
    tagline: 'Luxury in the hills of Huacas de Nosara',
    eyebrow: 'Hillside contemporary',
    bedrooms: 4,
    bathrooms: '6',
    guests: 8,
    area: 'Huacas de Nosara hills',
    features: ['Private pool', 'Ocean glimpses', 'Floor-to-ceiling glass', 'Multi-level'],
    shortDescription:
      'Multi-level contemporary home set high in the green hills of Huacas, with floor-to-ceiling glass opening to a private pool.',
    longDescription: [
      'Stella Maris is a contemporary home set high in the green hills of Huacas de Nosara, with sweeping jungle views and distant ocean glimpses.',
      'Four bedrooms and six bathrooms host up to eight guests. The multi-level design uses floor-to-ceiling glass throughout, opening to terraces and a private pool.',
      'The primary suite has a king bed, terrace access, and ensuite. Three additional queen bedrooms each have private ensuites, AC, and ceiling fans. High-speed internet, AC throughout, and private parking. A short drive reaches Playa Guiones and Playa Pelada.',
    ],
    amenities: [
      '4 bedrooms / 6 bathrooms',
      'Sleeps up to 8 guests',
      'Private pool',
      'Floor-to-ceiling glass throughout',
      'AC and ceiling fans in every room',
      'High-speed internet',
      'Short drive to Playa Guiones & Playa Pelada',
    ],
    source: 'https://albanosara.com/vacation-rental/stella-maris-rental-huacas-nosara/',
    cover: {
      src: '/images/villas/stella-maris/07-view-terrace-ocean.jpg',
      alt: 'Stella Maris villa terrace with ocean view, Huacas de Nosara hills, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/stella-maris/07-view-terrace-ocean.jpg', alt: 'Stella Maris villa terrace with ocean view, Huacas de Nosara' },
      { src: '/images/villas/stella-maris/01-view-aerial-drone.jpg', alt: 'Stella Maris villa aerial view in the green hills of Huacas, Nosara' },
      { src: '/images/villas/stella-maris/06-living-open-plan.jpg', alt: 'Stella Maris villa open-plan living with floor-to-ceiling glass, Nosara' },
      { src: '/images/villas/stella-maris/05-kitchen-dining.jpg', alt: 'Stella Maris villa kitchen and dining area, Huacas Nosara' },
      { src: '/images/villas/stella-maris/02-bedroom-ocean-view.jpg', alt: 'Stella Maris villa bedroom with ocean view, Nosara' },
      { src: '/images/villas/stella-maris/03-bedroom-pendant-view.jpg', alt: 'Stella Maris villa bedroom with pendant lighting and jungle view, Nosara' },
      { src: '/images/villas/stella-maris/04-bedroom-king-balcony.jpg', alt: 'Stella Maris villa king bedroom with private balcony, Nosara' },
    ],
  },
  {
    slug: 'villa-aravis',
    name: 'Villa Aravis',
    tagline: 'Brutalist architecture, wide ocean views',
    eyebrow: 'Architectural showpiece',
    bedrooms: 5,
    bathrooms: '5.5',
    guests: 10,
    area: 'Las Huacas hills, Nosara',
    features: ['Ocean view', 'Pool', '5 king suites', 'Private security'],
    shortDescription:
      'A newly built three-level villa with striking brutalist architecture and ocean views from every king ensuite.',
    longDescription: [
      'Villa Aravis is a newly built villa high in the hills of Las Huacas, with striking brutalist architecture, organic design moves, and wide ocean views.',
      'Five bedrooms each include a king bed, a full private ensuite, AC, ceiling fans, and ocean views. The three-floor layout adds a guest bathroom near the kitchen.',
      'Seven minutes by car from Guiones downtown, ten minutes from the beach, and two minutes from nearby restaurants. Residential-only area with private security.',
    ],
    amenities: [
      '5 bedrooms / 5.5 bathrooms',
      'Sleeps up to 10 guests',
      'Ocean view from every bedroom',
      'Private pool',
      'AC and ceiling fans throughout',
      'Three-floor layout',
      'Residential area with private security',
    ],
    source: 'https://albanosara.com/vacation-rental/villa-aravis-luxury-rental-in-las-huacas-nosara/',
    cover: {
      src: '/images/villas/villa-aravis/02-view-aerial-sunset.jpg',
      alt: 'Villa Aravis aerial sunset view, brutalist architecture in Las Huacas, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/villa-aravis/02-view-aerial-sunset.jpg', alt: 'Villa Aravis aerial sunset view in Las Huacas hills, Nosara, Costa Rica' },
      { src: '/images/villas/villa-aravis/01-view-sunset-ocean-deck.jpg', alt: 'Villa Aravis sunset ocean view from deck, Las Huacas Nosara' },
      { src: '/images/villas/villa-aravis/07-view-pool-house.jpg', alt: 'Villa Aravis pool and house exterior, Nosara luxury rental' },
      { src: '/images/villas/villa-aravis/03-dining-pool-view.jpg', alt: 'Villa Aravis dining area with pool view, Nosara' },
      { src: '/images/villas/villa-aravis/04-living-room.jpg', alt: 'Villa Aravis living room with ocean view, Nosara, Costa Rica' },
      { src: '/images/villas/villa-aravis/05-living-spiral-staircase.jpg', alt: 'Villa Aravis living room with sculptural spiral staircase, Nosara' },
      { src: '/images/villas/villa-aravis/06-rooms-twilight-exterior.jpg', alt: 'Villa Aravis twilight exterior of guest rooms, Las Huacas Nosara' },
    ],
  },
  {
    slug: 'pelada-collection',
    name: 'Pelada Collection Villas',
    tagline: 'Six bedrooms and a courtyard pool, a short walk from Playa Pelada',
    eyebrow: 'Hacienda-style villa',
    bedrooms: 6,
    bathrooms: '6.5',
    // Alba does not publish a maximum occupancy for this villa. Eight beds:
    // four king, four queen. Ask Alba before quoting a headcount.
    area: 'Playa Pelada, Nosara',
    features: ['Private pool', 'Walk to Playa Pelada', 'Daily cleaning', '24-hour security'],
    shortDescription:
      'A new six-bedroom villa built around its own courtyard pool, one of six houses in a gated complex a short walk from Playa Pelada. Every bedroom has its own bathroom.',
    longDescription: [
      'Pelada Collection Villas is one of six houses in a small gated complex in Playa Pelada. Each house keeps its own pool and its own outdoor areas, so the only thing shared is the gate and the security at it. The beach is a short walk, which makes early swims and sunset walks something you do on foot rather than plan around a car.',
      'The architecture is hacienda-inspired: white walls, clay tile roofs, an arcade of arches running the length of the courtyard, and a long pool at the center of it. Living areas open straight onto that courtyard through steel-framed glass doors, and the main room runs under a vaulted ceiling to a marble island and a full kitchen.',
      'Six bedrooms hold eight beds, four king and four queen. Each bedroom has air conditioning, a ceiling fan and its own full bathroom, with a half bathroom for the common areas. That layout is the reason groups book it: two families or three couples can share the house without anyone queueing for a shower or taking the sofa.',
      'Outside the bedrooms there is a covered dining terrace that seats the whole house, a second lounge under the arcade, a BBQ area, and an outdoor shower. Wi-Fi, laundry, a private garage, linens, towels and beach towels are part of the house, and cleaning comes daily.',
    ],
    amenities: [
      '6 bedrooms / 6 full bathrooms + 1 half bathroom',
      '8 beds: 4 king, 4 queen',
      'Private swimming pool',
      'Air conditioning and ceiling fans throughout',
      'Fully equipped kitchen with marble island',
      'Covered outdoor dining and lounge areas',
      'BBQ area and outdoor shower',
      'Daily cleaning',
      'Private garage',
      'Wi-Fi, full laundry, linens, towels and beach towels',
      '24-hour security at the complex',
    ],
    source: 'https://albanosara.com/vacation-rental/playa-pelada-collection-villas/',
    cover: {
      src: '/images/villas/pelada-collection/01.jpg',
      alt: 'Pelada Collection villa courtyard pool at dusk with arched arcade and clay tile roof, Playa Pelada, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/pelada-collection/01.jpg', alt: 'Pelada Collection villa courtyard pool lit at dusk with loungers and arched arcade, Playa Pelada Nosara, Costa Rica' },
      { src: '/images/villas/pelada-collection/04.jpg', alt: 'Pelada Collection villa courtyard pool in daylight framed by white arches and tropical planting, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/03.jpg', alt: 'Pelada Collection villa open living room and kitchen under a vaulted ceiling with steel-framed glass doors to the garden, Nosara' },
      { src: '/images/villas/pelada-collection/06.jpg', alt: 'Pelada Collection villa kitchen with marble island, bar stools and woven pendant lights, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/10.jpg', alt: 'Pelada Collection villa living room sectional under a vaulted ceiling with the kitchen behind, Nosara, Costa Rica' },
      { src: '/images/villas/pelada-collection/08.jpg', alt: 'Pelada Collection villa covered outdoor dining table set for the house, pool beyond, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/14.jpg', alt: 'Pelada Collection villa dining room opening to the pool terrace under a wood vaulted ceiling, Nosara, Costa Rica' },
      { src: '/images/villas/pelada-collection/15.jpg', alt: 'Pelada Collection villa covered outdoor lounge with sofas beside the pool, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/16.jpg', alt: 'Pelada Collection villa terrace lounge under a wood ceiling with ceiling fans and arches, Nosara' },
      { src: '/images/villas/pelada-collection/09.jpg', alt: 'Pelada Collection villa long dining table on the covered terrace beside the arcade, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/11.jpg', alt: 'Pelada Collection villa bedroom with wooden four-poster bed and patterned rug, Nosara, Costa Rica' },
      { src: '/images/villas/pelada-collection/05.jpg', alt: 'Pelada Collection villa bedroom with two beds, arched travertine headboards, air conditioning and ceiling fan, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/13.jpg', alt: 'Pelada Collection villa twin-bed room with arched headboards and bench seating, Nosara' },
      { src: '/images/villas/pelada-collection/07.jpg', alt: 'Pelada Collection villa sitting room with built-in wood shelving and terracotta armchair, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/02.jpg', alt: 'Pelada Collection villa living area sofa with the open kitchen behind, Nosara, Costa Rica' },
      { src: '/images/villas/pelada-collection/12.jpg', alt: 'Pelada Collection villa indoor dining table under a woven chandelier, Playa Pelada Nosara' },
      { src: '/images/villas/pelada-collection/19.jpg', alt: 'Pelada Collection villa bathroom with patterned terracotta tile, arched mirror and vessel sink, Nosara' },
      { src: '/images/villas/pelada-collection/18.jpg', alt: 'Pelada Collection villa exterior and garden lit at dusk, Playa Pelada Nosara, Costa Rica' },
      { src: '/images/villas/pelada-collection/17.jpg', alt: 'Pelada Collection villa entrance path and lit facade at dusk, Playa Pelada Nosara' },
    ],
  },
  {
    slug: 'casa-dominick',
    name: 'Casa Dominick',
    tagline: 'Five bedrooms over three floors, five minutes on foot from Playa Pelada',
    eyebrow: 'Jungle house',
    bedrooms: 5,
    bathrooms: '4',
    // Alba does not publish a maximum occupancy for this house.
    area: 'Playa Pelada, Nosara',
    features: ['Saltwater infinity pool', 'Walk to Playa Pelada', 'Separate studio apartment', 'Two-car garage'],
    shortDescription:
      'A five-bedroom house on three levels with a saltwater infinity pool, five minutes on foot from Playa Pelada. The separate studio means two families can share it without living on top of each other.',
    longDescription: [
      'Casa Dominick sits between Playa Pelada and Playa Guiones, five minutes on foot from the first and a longer walk to the surf at the second. The house is built across three floors into the jungle, with glass running the height of the stairwell so the trees stay in view from inside.',
      'The top floor is the primary suite on its own: a soaking tub, a rain shower, and a terrace that looks over the jungle to the ocean. The floor below holds three more bedrooms, a second master, a queen room and a twin room, each with its own bathroom.',
      'The ground floor opens. Living and dining run straight out to the garden and the pool deck, which is where most of the day ends up happening. The pool is saltwater, with a waterfall at one end and jungle on all sides.',
      'There is also a studio apartment with its own entrance, a king bed, a full kitchen, laundry and air conditioning. It can be connected to the main house or left separate, which is the detail that makes this house work for two families travelling together, or for grandparents who want their own door. A two-car garage comes with it.',
    ],
    amenities: [
      '5 bedrooms / 4 bathrooms across three levels',
      'Separate studio apartment with private entrance, king bed and full kitchen',
      'Primary suite with soaking tub, rain shower and private terrace',
      'En-suite bathrooms on the bedroom floor',
      'Saltwater infinity pool with waterfall',
      'Open living and dining opening to the garden and pool deck',
      'Air conditioning in the studio',
      'Two-car garage',
      'Five-minute walk to Playa Pelada',
    ],
    source: 'https://albanosara.com/vacation-rental/casa-dominick-playa-pelada/',
    cover: {
      src: '/images/villas/casa-dominick/05.webp',
      alt: 'Casa Dominick saltwater infinity pool with the jungle house behind it, Playa Pelada, Nosara, Costa Rica',
    },
    gallery: [
      { src: '/images/villas/casa-dominick/05.webp', alt: 'Casa Dominick saltwater infinity pool edged with jungle planting below the house, Playa Pelada Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/18.webp', alt: 'Casa Dominick pool lit at dusk seen from the covered terrace with a wood ceiling, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/16.webp', alt: 'Casa Dominick infinity pool and loungers framed by the concrete terrace columns, Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/03.webp', alt: 'Casa Dominick double-height living room with floor-to-ceiling glass onto the jungle, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/04.webp', alt: 'Casa Dominick dining area and kitchen opening to the covered terrace and pool, Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/02.webp', alt: 'Casa Dominick oval wood dining table beside the kitchen island, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/06.webp', alt: 'Casa Dominick kitchen with long island and bar stools opening to the garden, Nosara' },
      { src: '/images/villas/casa-dominick/15.webp', alt: 'Casa Dominick upper deck with loungers and sofa over the jungle canopy, Playa Pelada Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/12.webp', alt: 'Casa Dominick covered terrace seating beside a planted wall with jungle views, Nosara' },
      { src: '/images/villas/casa-dominick/17.webp', alt: 'Casa Dominick bedroom with sliding glass door onto a private terrace, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/10.webp', alt: 'Casa Dominick twin bedroom with two beds and a carved wood door, Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/01.webp', alt: 'Casa Dominick bedroom with twin beds, wood wardrobe and air conditioning, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/13.webp', alt: 'Casa Dominick bathroom with stone soaking tub and barn door opening to a pebbled courtyard, Nosara' },
      { src: '/images/villas/casa-dominick/14.webp', alt: 'Casa Dominick stone soaking tub set against the planted wall under a woven pendant, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/09.webp', alt: 'Casa Dominick stairwell with floating treads, glass balustrade and wood ceiling, Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/11.webp', alt: 'Casa Dominick studio apartment with its own entrance and work table, Playa Pelada Nosara' },
      { src: '/images/villas/casa-dominick/08.webp', alt: 'Casa Dominick exterior seen through the palms with its cantilevered upper terrace, Nosara, Costa Rica' },
      { src: '/images/villas/casa-dominick/19.webp', alt: 'Casa Dominick street facade lit at dusk with the garage below, Playa Pelada Nosara' },
    ],
  },
];
