import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { checkRateLimit, recordSubmission } from '@/lib/rate-limit'
import { sendContactEmail, isMailConfigured } from '@/lib/mailer'

// Run on the Node.js runtime (nodemailer needs Node APIs); never cache.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Best-effort client IP from common proxy headers (Coolify/Traefik, Cloudflare). */
function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0].trim()
  return (
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

type Field = { label: string; value: string }

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  // 1) Honeypot: a hidden field real users never fill. If present, silently
  //    accept (so bots think they succeeded) but do nothing.
  const honeypot = String(body.company ?? '').trim()
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  // 2) Per-IP rate limit (default 2 / 24h).
  const ip = getClientIp(req)
  const limit = checkRateLimit(ip)
  if (!limit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'You have reached the submission limit. Please call our 24/7 helpline at (419) 555-0142 and we will help you right away.',
      },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfterSeconds) } },
    )
  }

  // 3) Build the submission depending on which form was used.
  const formType = String(body.formType ?? 'contact')
  const email = String(body.email ?? '').trim()
  const required: string[] =
    formType === 'insurance'
      ? ['firstName', 'lastName', 'phone', 'email']
      : ['name', 'phone', 'email', 'message']

  for (const key of required) {
    if (!String(body[key] ?? '').trim()) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }
  }

  let subjectLabel: string
  let fields: Field[]
  if (formType === 'insurance') {
    subjectLabel = 'Insurance Verification Request'
    fields = [
      { label: 'First name', value: str(body.firstName) },
      { label: 'Last name', value: str(body.lastName) },
      { label: 'Phone', value: str(body.phone) },
      { label: 'Email', value: email },
      { label: 'Insurance provider', value: str(body.provider) },
      { label: 'Member ID', value: str(body.memberId) },
      { label: 'Seeking treatment for', value: str(body.relationship) },
      { label: 'Message', value: str(body.message) },
    ]
  } else {
    subjectLabel = 'New Contact Message'
    fields = [
      { label: 'Full name', value: str(body.name) },
      { label: 'Phone', value: str(body.phone) },
      { label: 'Email', value: email },
      { label: 'Topic', value: str(body.topic) },
      { label: 'Message', value: str(body.message) },
    ]
  }

  if (!isMailConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'Email is not configured on the server yet.' },
      { status: 503 },
    )
  }

  try {
    await sendContactEmail({ subjectLabel, fields, replyTo: email })
  } catch (err) {
    console.error('[contact] send failed:', err)
    return NextResponse.json(
      { ok: false, error: 'We could not send your message. Please call our helpline.' },
      { status: 502 },
    )
  }

  // Only count successful sends against the quota.
  recordSubmission(ip)
  return NextResponse.json({ ok: true })
}

function str(v: unknown): string {
  return String(v ?? '').trim()
}
