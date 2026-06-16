import nodemailer, { type Transporter } from 'nodemailer'

/**
 * SMTP mailer. All credentials come from environment variables — nothing is
 * hardcoded. Configure these in `.env.local` (local) and in Coolify (prod):
 *
 *   SMTP_HOST=smtp.ionos.com
 *   SMTP_PORT=465
 *   SMTP_SECURE=true
 *   SMTP_USER=...           # authenticated mailbox (also the default From)
 *   SMTP_PASS=...
 *   CONTACT_TO_EMAIL=...    # where form submissions are delivered
 *   CONTACT_FROM_EMAIL=...  # optional; defaults to SMTP_USER
 */

let cached: Transporter | null = null

function getTransport(): Transporter {
  if (cached) return cached
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured (missing SMTP_HOST/SMTP_USER/SMTP_PASS)')
  }
  const port = Number(process.env.SMTP_PORT ?? 465)
  cached = nodemailer.createTransport({
    host,
    port,
    // Port 465 uses implicit TLS; 587 uses STARTTLS (secure=false).
    secure: (process.env.SMTP_SECURE ?? (port === 465 ? 'true' : 'false')) === 'true',
    auth: { user, pass },
  })
  return cached
}

export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

export type ContactSubmission = {
  subjectLabel: string
  fields: { label: string; value: string }[]
  replyTo?: string
}

/** Sends a form submission to the configured destination mailbox. */
export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER!

  const rows = submission.fields
    .filter((f) => f.value)
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#2a1158;vertical-align:top">${escapeHtml(
          f.label,
        )}</td><td style="padding:6px 12px;color:#222">${escapeHtml(f.value).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('')

  const text = submission.fields
    .filter((f) => f.value)
    .map((f) => `${f.label}: ${f.value}`)
    .join('\n')

  await getTransport().sendMail({
    from: `"Elevate Recovery Website" <${from}>`,
    to,
    replyTo: submission.replyTo || undefined,
    subject: `[Elevate Recovery] ${submission.subjectLabel}`,
    text,
    html: `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px">
      <h2 style="color:#5f23b8">${escapeHtml(submission.subjectLabel)}</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <p style="margin-top:16px;color:#888;font-size:12px">Sent from the Elevate Recovery website contact form.</p>
    </div>`,
  })
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
