// Cloudflare Turnstile site key. Public by design: it ships in the HTML.
// The matching secret lives as a Worker secret (TURNSTILE_SECRET_KEY) and is
// never in this repo. Widget "Avela Travel", account elsurfbudda@gmail.com.
export const TURNSTILE_SITE_KEY =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAAFRsrh0ubaIj3Oql';

export const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
