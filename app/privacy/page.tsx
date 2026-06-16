import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalShell, LegalCallout } from '@/components/legal-shell'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'A short summary of how Elevate Recovery handles your information, including mobile/SMS data, with links to our full Privacy Policy and HIPAA Notice.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyNoticePage() {
  return (
    <LegalShell
      title="Privacy Notice"
      description="A quick summary of how we treat your information. For full details, see our complete Privacy Policy."
      updated="June 16, 2026"
      path="/privacy"
      crumbLabel="Privacy Notice"
    >
      <p>
        Elevate Recovery respects your privacy. This notice summarizes the key
        points of how we handle your information. For complete details, please
        read our <Link href="/privacy-policy">Privacy Policy</Link>. Patient
        health information is also governed by our{' '}
        <Link href="/hipaa">HIPAA Notice of Privacy Practices</Link>.
      </p>

      <h2>What we collect</h2>
      <p>
        Information you provide (such as your name, phone number, email,
        insurance details, and inquiry messages) and information collected
        automatically when you use our website (such as device and usage data via
        cookies).
      </p>

      <h2>How we use it</h2>
      <p>
        To respond to your inquiries, verify insurance benefits, coordinate
        admissions and care, send service-related and appointment messages, and
        operate and improve our website — and to meet our legal and accreditation
        obligations.
      </p>

      <h2>Text messages (SMS)</h2>
      <p>
        If you opt in, we may text you about admissions, appointments, benefit
        verification, and care coordination. Message frequency varies and message
        and data rates may apply. Reply <strong>STOP</strong> to opt out or{' '}
        <strong>HELP</strong> for help at any time. Opting in is never required to
        receive care.
      </p>

      <LegalCallout>
        <p className="!mt-0">
          <strong>
            We do not sell your personal information, and no mobile information is
            shared with third parties or affiliates for marketing or promotional
            purposes.
          </strong>{' '}
          SMS opt-in consent and phone numbers are never shared with third
          parties for marketing.
        </p>
      </LegalCallout>

      <h2>Your choices</h2>
      <p>
        You can opt out of texts (reply STOP), unsubscribe from marketing emails,
        and request access to or correction of your information, subject to legal
        and recordkeeping requirements. Patients have additional rights described
        in our <Link href="/hipaa">HIPAA Notice</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> or email{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. See our full{' '}
        <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
        <Link href="/termsandconditions">Terms &amp; Conditions</Link>.
      </p>
    </LegalShell>
  )
}
