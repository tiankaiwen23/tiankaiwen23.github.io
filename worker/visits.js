// Cloudflare Worker: privacy-friendly visitor counter for the dot-matrix map.
//
//   GET|POST /hit     → increment the caller's country (request.cf.country,
//                        no IP or fingerprint is ever read or stored)
//   GET /visits       → { "CN": 128, "US": 64, ... }
//
// Deploy:
//   1. npx wrangler kv namespace create VISITS
//   2. npx wrangler deploy worker/visits.js --name visitor-map \
//        --kv VISITS=<namespace-id> --compatibility-date 2026-10-09
//   3. put the worker URL into SITE.visitorApi in src/data/site.ts
//
// Optional: tighten ALLOWED_ORIGIN to your site origin once deployed.

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS });
    }

    if (url.pathname === "/hit") {
      const cc = request.cf?.country ?? "XX";
      const cur = parseInt((await env.VISITS.get(cc)) ?? "0", 10);
      await env.VISITS.put(cc, String(cur + 1));
      return new Response("ok", { headers: CORS });
    }

    if (url.pathname === "/visits") {
      const { keys } = await env.VISITS.list();
      const entries = await Promise.all(
        keys.map(async (k) => [
          k.name,
          parseInt((await env.VISITS.get(k.name)) ?? "0", 10),
        ]),
      );
      return Response.json(Object.fromEntries(entries), { headers: CORS });
    }

    return new Response("not found", { status: 404, headers: CORS });
  },
};
