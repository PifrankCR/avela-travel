// The whole collection, assembled in one place.
//
// Four files hold the villas: one per partnership, plus the two Avela
// represents directly. Everything that needs the full list reads it from here
// instead of spreading the arrays again: the collection grid on /villas, the
// detail pages at /villas/[slug], and the villa dropdown on /contact. Add a
// villa to any of the four and it appears in all three on the next build.

import type { Villa } from './alba-villas';
import { villas as albaVillas } from './alba-villas';
import { bmVillas } from './bm-villas';
import { wanderlustVillas } from './wanderlust-villas';
import { avelaVillas } from './avela-villas';

export type { Villa };

// Avela's own first: they are the two the site has always led with.
export const allVillas: Villa[] = [
  ...avelaVillas,
  ...albaVillas,
  ...bmVillas,
  ...wanderlustVillas,
];

// Alphabetical, for the places that show every villa as one flat list of
// choices and have no editorial order to follow.
export const villasByName: Villa[] = [...allVillas].sort((a, b) =>
  a.name.localeCompare(b.name)
);
