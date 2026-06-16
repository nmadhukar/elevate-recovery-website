/**
 * Simple in-memory, per-IP rate limiter for form submissions.
 * Default policy: at most 2 submissions per IP per rolling 24 hours.
 *
 * Note: state lives in the process, so it resets on redeploy and is per-
 * instance. For the single-container Coolify deployment that is sufficient.
 * Swap for Redis/Upstash if you scale to multiple instances.
 */

const WINDOW_MS = 24 * 60 * 60 * 1000
const MAX_PER_WINDOW = Number(process.env.CONTACT_MAX_PER_DAY ?? 2)

const hits = new Map<string, number[]>()

function prune(ip: string, now: number): number[] {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length) hits.set(ip, recent)
  else hits.delete(ip)
  return recent
}

export function checkRateLimit(ip: string): {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
} {
  const now = Date.now()
  const recent = prune(ip, now)
  if (recent.length >= MAX_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((WINDOW_MS - (now - recent[0])) / 1000)
    return { allowed: false, remaining: 0, retryAfterSeconds }
  }
  return {
    allowed: true,
    remaining: MAX_PER_WINDOW - recent.length,
    retryAfterSeconds: 0,
  }
}

/** Record a successful submission against the IP's quota. */
export function recordSubmission(ip: string): void {
  const now = Date.now()
  const recent = prune(ip, now)
  recent.push(now)
  hits.set(ip, recent)
}
