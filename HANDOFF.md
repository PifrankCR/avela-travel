# Avela Travel — Session Handoff

**Last updated:** 2026-06-14 · **Status: LAUNCHED ✅** (went live 2026-06-14)

Drop this in the next chat with: *"Read avela-travel/HANDOFF.md and MEMORY.md, then we'll continue."*

---

## 1. Where things stand

- **Repo:** `PifrankCR/avela-travel` (private), branch `main`, clean working tree
- **Last commit:** `93da435` — security headers + robots.txt sitemap domain (plus the domain-switch and image-optimization work before it)
- **LIVE production domain:** https://avelatravel.com (and `www`), Cloudflare Workers Static Assets, auto-deploys on push to `main`
  - NOTE: the domain is **avelatravel.com**, NOT `avela.travel`. The old `avela.travel` references were all migrated 2026-06-14. Do not reintroduce them.
- **Fallback URL:** https://avela-travel.elsurfbudda.workers.dev (the workers.dev deploy, still live)
- **DNS:** on Cloudflare (zone `avelatravel.com`, Active). Registrar is GoDaddy (Stacie's account); nameservers point to Cloudflare (`frida`/`west.ns.cloudflare.com`).
- **Dev server config:** `.claude/launch.json` in project root (`avela-dev`)

### Launch hardening done 2026-06-14
- TLS valid (Google Trust, auto-renew). HTTP→HTTPS 301. HSTS on (6mo, includeSubDomains, preload).
- Security headers via `public/_headers`: nosniff, X-Frame-Options SAMEORIGIN, Referrer-Policy, Permissions-Policy, COOP. Immutable cache on `/_astro/*`.
- No cookies set; only Cloudflare cookieless analytics → no consent banner needed.
- Cloudflare Bot Fight Mode OFF, "Block AI bots" = Do not block, managed robots.txt DISABLED → site's own AI-welcome robots.txt is authoritative.
- All images migrated to `astro:assets` (responsive webp). Source images live in `src/assets/images/` now, NOT `public/images/` (only logo + textures remain in public).

## 2. How Pablo works + writes (read first)

Pablo runs Avela Travel, Weddings Nosara, and Monkey Head Adventures out of Nosara. He works in fast decisive bursts, reads diffs and screenshots directly, and is building Avela as an anti-luxury-cliché brand. Match that pace and that voice.

**Editorial rules (every page, post, email):**
- No em dashes. Use periods, commas, parens, colons. Strip them on existing copy too.
- No AI talk. Banned: delve, tapestry, elevate, seamlessly, embark, journey (figurative), curated experience, immerse, discover, unveil, leverage, holistic, ensure, empower, in today's world. If a phrase reads like generic marketing, kill it.
- No made-up facts, prices, quotes, sources. Verify URLs and citations before publishing. Reference research (e.g. competitor prices) is for positioning only, never displayed.
- Anti-resort, anti-template voice. Direct, specific, slightly contrarian. Examples that landed: "We will say no.", "Real numbers, no padding.", "We do not put guests on a newsletter.", "We do not have account managers or a routing system."
- Specificity beats polish. A place, price, person, or number always beats an adjective.
- SEO + AI-crawl on every page: JSON-LD schema, semantic HTML, long descriptive image filenames, real alt text.

**Working preferences:**
- Auto mode is on. Bias toward action. Pause only when genuinely blocked or facing an irreversible decision.
- Terse end-of-turn summaries. One or two sentences. He reads the diff himself.
- Show, don't narrate. Capture a screenshot or DOM snapshot rather than asking him to check.
- Ship-oriented, not perfection-oriented. Bundled PRs over churn. Don't refactor preemptively.
- When he selects an element in-browser, he means fix that specific thing. Don't expand scope.
- He'll redirect quickly if you're off. Save the correction, don't over-apologize, move on.

Full version with reasoning lives in auto-memory at `feedback_working_style.md`.

## 3. Brand voice cues (lifted from shipped copy)

- "We do not have account managers or a routing system."
- "We will say no."
- "Real numbers, no padding."
- Anti-resort, anti-newsletter, anti-template. Specificity over polish.

## 4. Architecture you'll touch most

- **Layouts:** `src/layouts/BaseLayout.astro` (shell + SEO + analytics), `src/layouts/JournalArticleLayout.astro` (all journal posts, uses `<style is:global>` for slot body content)
- **Shared components:** `src/components/Nav.astro`, `Footer.astro`, `AvelaSeal.astro` (wax-seal SVG, currentColor-driven, auto-compact under 80px)
- **Brand tokens:** `src/styles/global.css` — `--green-deep`, `--amber`, `--amber-deep`, `--cream`, `--warm-cream`, `--sand`, `--dark`
- **Villa data:** `src/data/alba-villas.ts` (6 Alba Nosara villas, rendered via `src/pages/villas/[slug].astro`)
- **Pricing reference:** `Monkey Head Adventures Tours Prices.pdf` in working dir. Verified Monkey Head rates; Avela markup not confirmed, so boat/fishing prices are commented but not displayed.
- **Blog backlog:** `BLOG_IDEAS.md` (10 fully sourced post ideas, 3 published so far)

## 5. Nav order (current)

`VILLAS · EXPERIENCES · ITINERARIES · NOSARA · JOURNAL · CONTACT` — set in `src/components/Nav.astro:2-9`. Mobile uses the same array.

## 6. Journal posts shipped

1. `/journal/a-week-with-the-marx-family` — wedding case study, dark theme (refactored)
2. `/journal/reading-playa-guiones` — surf read
3. `/journal/ostional-arribada-nosara` — Jordanny, ~1000 words, ethics rules
4. `/journal/a-week-in-nosara-without-a-resort` — Stacie, ~1500 words, 7-day itinerary

All 4 use `JournalArticleLayout`. Hero pattern: full-bleed image, dark gradient overlay, oversized italic Playfair H1.

## 7. Pages shipped this session

- `/process` — 8 numbered steps, 4 constants cards, AvelaSeal in CTA, HowTo JSON-LD
- Process linked from Footer "Company" column

## 8. Signature seal (`AvelaSeal.astro`)

- **Full mode (≥80px):** outer ring + dotted perforation + curved rim "EST · NOSARA, COSTA RICA · BLUE ZONE ·" + stacked AVELA/TRAVEL/est.2025 wordmark
- **Compact mode (<80px or `compact` prop):** outer ring + perforation + italic Playfair "A"
- **Where it lives:** `/about` (180px), `/process` CTA (120px), `Footer.astro` between divider lines (52px compact)
- **Tone:** driven by parent `color` via `currentColor`

## 9. Pending for Friday launch (in rough priority order)

| Priority | Item | Blocker |
|---|---|---|
| ✅ Done 06-14 | DNS migration to Cloudflare | Done. Zone `avelatravel.com` Active. |
| ✅ Done 06-14 | Domain switch avela.travel → avelatravel.com across whole codebase | site config, canonical/OG/sitemap, JSON-LD, emails |
| ✅ Done 06-14 | Astro `<Image />` migration | All photos in `src/assets/images/`, responsive webp |
| ✅ Done 06-14 | Security hardening (HSTS, headers, HTTPS redirect, bot/robots config) | See section 1 |
| 🔴 NEXT | **`hello@avelatravel.com` email — NOT set up yet (no MX records).** Address is published on Privacy + 404 so it currently BOUNCES. Decide forwarding (Cloudflare Email Routing, free) vs Google Workspace mailbox. | User decision in progress |
| 🟡 Med | Submit sitemap to Google Search Console (`https://avelatravel.com/sitemap-index.xml`) | Post-launch SEO |
| 🟡 Med | GitHub/registrar account-to-account domain transfer from Stacie's GoDaddy to Pablo | Ownership move, non-urgent, won't affect live site |
| 🟡 Med | Stacie + Jordanny bios on `/about` | Awaiting user-supplied copy |
| 🟢 Low | Footer "Nosara" column with verified local resource links | Need URLs that resolve |
| 🟢 Low | "Where to next?" inspiration hub on `/itineraries` (moodboard, Martha-King borrow) | Code + content |
| ⚪ Post-launch | Restore boat/fishing pricing once Avela markup over Monkey Head rates is confirmed | Awaiting Stacie |

## 10. Things NOT to do without checking

- **Don't display competitor prices.** Research used for positioning only.
- **Don't publish the internal cost structure** in the fishing brief.
- **Don't change Marx post visual style** — already migrated to dark theme, user accepted.
- **Don't push to GitHub** without explicit ask — but `git commit` is fine after a feature lands.
- **Don't switch model output to summary mode** at the end of every response — user reads diffs directly.

## 11. Useful one-liners

```bash
# Dev server
cd "/Users/pabloisunza/Documents/Avela Website Claude/avela-travel" && npm run dev

# Build check
npm run build

# Git status
git log --oneline -10
```

## 12. Related memory files

- `MEMORY.md` index lives at `~/.claude/projects/-Users-pabloisunza-Documents-Avela-Website-Claude/memory/`
- `project_avela_astro.md` — deployment + curated villa details (some sections dated 2026-05-13, verify before citing)
- `casa_kaiman_proposal.md` — unrelated Nosara project, different repo
- `retreat_planner_tool.md` — unrelated tool

---

**Quick start for the next chat:**
> Read `avela-travel/HANDOFF.md`. We're targeting Friday launch. Pick up the press strip upgrade on `/about`, or tell me what's next.
