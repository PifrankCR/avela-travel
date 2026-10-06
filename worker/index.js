// Same-origin API in front of the static site.
// Handles contact + newsletter form posts and sends email via Resend,
// so submissions can't be blocked by ad/privacy blockers (no third-party origin).
// Everything else falls through to the static assets.

const TO = 'pablo@avelatravel.com';
const FROM = 'Avela Travel <hello@avelatravel.com>';

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json' },
  });

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendEmail(env, { subject, html, replyTo }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  return res.ok;
}

// A real arrival date comes from the form's date picker: a valid calendar day,
// today or later. Every spam submission we have received instead carries an
// invented date (1983-00-03, 1985-00-07): month or day zero, year in the 80s.
// Departure is deliberately NOT checked against arrival. A real client booked
// in December 2026 and typed a September departure, and we are not throwing
// away a client over a fumbled date picker.
function arrivalLooksReal(value) {
  const v = String(value ?? '').trim();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  if (!m) return false;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const date = new Date(Date.UTC(y, mo - 1, d));
  // Rejects month 00, day 00, and rollovers like 2026-02-31.
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== mo - 1 || date.getUTCDate() !== d) {
    return false;
  }
  const today = new Date();
  const floor = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1);
  return date.getTime() >= floor;
}

// Spam pitches (SEO, backlinks, prize scams) always carry a link. None of the
// real inquiries ever has.
function hasLink(value) {
  return /https?:\/\/|www\.|tinyurl|telegra\.ph|\[url[=\]]/i.test(String(value ?? ''));
}

async function handleContact(request, env) {
  const data = await request.formData();

  // Honeypot: real users leave _gotcha empty. Bots fill it.
  if (data.get('_gotcha')) return json({ ok: true });

  const email = String(data.get('email') ?? '').trim();
  if (!email || !email.includes('@')) {
    return json({ ok: false, error: 'A valid email is required.' }, 400);
  }

  // Silent drops. Answering "ok" keeps the bot from learning what tripped it;
  // a visible error just tells it which field to fix.
  // Nobody legitimate fills in our own address as their contact email.
  if (/@avelatravel\.com$/i.test(email)) return json({ ok: true });
  if (hasLink(data.get('message')) || hasLink(data.get('first_name')) || hasLink(data.get('last_name'))) {
    return json({ ok: true });
  }
  if (!arrivalLooksReal(data.get('arrival'))) return json({ ok: true });

  const first = data.get('first_name');
  const last = data.get('last_name');
  const name = [first, last].filter(Boolean).join(' ');
  const interests = data.getAll('interests[]').join(', ');

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', data.get('phone')],
    ['Arrival', data.get('arrival')],
    ['Departure', data.get('departure')],
    ['Group size', data.get('group_size')],
    ['Villa interest', data.get('villa_interest')],
    ['Interests', interests],
    ['Message', data.get('message')],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top"><strong>${k}</strong></td><td style="padding:4px 0">${esc(v)}</td></tr>`)
    .join('');

  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#131210">
    <p>New inquiry from the Avela contact form:</p>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;

  const sent = await sendEmail(env, {
    subject: `New inquiry${name ? ` from ${name}` : ''}`,
    html,
    replyTo: email,
  });

  return sent
    ? json({ ok: true })
    : json({ ok: false, error: 'Could not send. Please email or WhatsApp us.' }, 502);
}

async function handleNewsletter(request, env) {
  const data = await request.formData();
  if (data.get('_gotcha')) return json({ ok: true });

  const email = String(data.get('email') ?? '').trim();
  if (!email || !email.includes('@')) {
    return json({ ok: false, error: 'A valid email is required.' }, 400);
  }
  if (hasLink(email) || /@avelatravel\.com$/i.test(email)) return json({ ok: true });

  const sent = await sendEmail(env, {
    subject: 'New newsletter signup',
    html: `<p style="font-family:system-ui,sans-serif">New newsletter signup: <strong>${esc(email)}</strong></p>`,
    replyTo: email,
  });

  return sent ? json({ ok: true }) : json({ ok: false, error: 'Could not subscribe right now.' }, 502);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Canonicalize host: redirect www -> non-www (301), preserving path + query.
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    if (request.method === 'POST') {
      try {
        if (url.pathname === '/api/contact') return await handleContact(request, env);
        if (url.pathname === '/api/newsletter') return await handleNewsletter(request, env);
      } catch {
        // Malformed body (e.g. a bot posting non-form data) must not crash the Worker.
        return json({ ok: false, error: 'Bad request.' }, 400);
      }
    }

    // Everything else: serve the static site.
    return env.ASSETS.fetch(request);
  },
};

// Exported for the filter test in test/spam-filter.test.mjs. Cloudflare only
// ever calls the default export.
export { arrivalLooksReal, hasLink };
