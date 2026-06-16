import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * USA-only geo gate.
 *
 * Reads the visitor country from a proxy-provided header. To actually ENFORCE
 * this in production, the site must sit behind a proxy that sets one of these
 * headers — most simply Cloudflare (orange-cloud), which sets `cf-ipcountry`.
 *
 * Behavior:
 *   - Country is allowed (US)           -> pass through.
 *   - Country is known and not allowed  -> show the /unavailable page (403).
 *   - Country is unknown (local dev, or no geo proxy yet) -> pass through,
 *     so we never lock out everyone before the proxy is configured.
 *
 * Toggle with env: GEO_RESTRICT_ENABLED=false to disable;
 * GEO_ALLOWED_COUNTRIES="US,CA" to allow more countries.
 */

const ENABLED = process.env.GEO_RESTRICT_ENABLED !== 'false'
const ALLOWED = (process.env.GEO_ALLOWED_COUNTRIES ?? 'US')
  .split(',')
  .map((c) => c.trim().toUpperCase())
  .filter(Boolean)

function getCountry(req: NextRequest): string | null {
  const c =
    req.headers.get('cf-ipcountry') ||
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('x-geo-country') ||
    ''
  const up = c.toUpperCase()
  // XX/T1 are Cloudflare placeholders for "unknown"/Tor.
  if (!up || up === 'XX' || up === 'T1') return null
  return up
}

export function middleware(req: NextRequest) {
  if (!ENABLED) return NextResponse.next()

  const country = getCountry(req)
  if (!country) return NextResponse.next() // unknown -> fail open
  if (ALLOWED.includes(country)) return NextResponse.next()

  // Blocked region: rewrite to the unavailable page with a 403 status.
  const url = req.nextUrl.clone()
  url.pathname = '/unavailable'
  return NextResponse.rewrite(url, { status: 403 })
}

export const config = {
  // Apply to everything except Next internals, the unavailable page itself,
  // and static asset file types.
  matcher: [
    '/((?!_next/static|_next/image|unavailable|.*\\.(?:png|jpe?g|svg|ico|webmanifest|txt|xml|webp|gif)).*)',
  ],
}
