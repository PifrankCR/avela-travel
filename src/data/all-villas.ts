// The whole collection, assembled in one place.
//
// Three files hold the villas, one per partnership. Everything that needs the
// full list reads it from here instead of spreading the three arrays again:
// the collection grid on /villas, the detail pages at /villas/[slug], and the
// villa dropdown on /contact. Add a villa to any partner file and it appears
// in all three on the next build.

import type { Villa } from './alba-villas';
import { villas as albaVillas } from './alba-villas';
import { bmVillas } from './bm-villas';
import { wanderlustVillas } from './wanderlust-villas';

export type { Villa };

export const allVillas: Villa[] = [...albaVillas, ...bmVillas, ...wanderlustVillas];

// Alphabetical, for the places that show every villa as one flat list of
// choices and have no editorial order to follow.
export const villasByName: Villa[] = [...allVillas].sort((a, b) =>
  a.name.localeCompare(b.name)
);
