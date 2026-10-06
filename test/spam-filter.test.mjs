// Replays every contact-form submission received 2026-06-15 .. 2026-10-05
// (52 of them, 3 from real clients) through the Worker's filters.
// Fixtures were extracted from the inbox; nothing here hits the network.
import { arrivalLooksReal, hasLink } from '../worker/index.js';
import { readFileSync } from 'node:fs';

const cases = JSON.parse(readFileSync(new URL('./fixtures/form-submissions.json', import.meta.url)));

const blocked = (c) =>
  /@avelatravel\.com$/i.test(c.email || '') ||
  hasLink(c.message) ||
  hasLink(c.name) ||
  !arrivalLooksReal(c.arrival);

let pass = true;
for (const c of cases) {
  const got = blocked(c) ? 'spam' : 'passes';
  const want = c.real ? 'passes' : 'spam';
  if (got !== want) {
    pass = false;
    console.error(`FAIL ${c.date} ${c.email} -> ${got}, expected ${want}`);
  }
}
const real = cases.filter((c) => c.real).length;
console.log(`${cases.length} submissions, ${real} real, ${cases.length - real} spam`);
console.log(pass ? 'OK: every real inquiry passes, every spam is blocked' : 'FAILURES above');
process.exit(pass ? 0 : 1);
