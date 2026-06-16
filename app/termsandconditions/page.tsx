import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalShell } from '@/components/legal-shell'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms governing your use of the Elevate Recovery website and our SMS/text messaging program, including opt-in, opt-out, and disclaimers.',
  alternates: { canonical: '/termsandconditions' },
}

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      description="Please read these terms carefully. They govern your use of our website and messaging program."
      updated="June 16, 2026"
      path="/termsandconditions"
      crumbLabel="Terms & Conditions"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to
        and use of the Elevate Recovery website and related services. By using the
        website or opting in to our messaging program, you agree to these Terms.
        If you do not agree, please do not use the website.
      </p>

      <h2>2. Not Medical Advice or an Emergency Service</h2>
      <p>
        The content on this website is provided for general informational
        purposes and does not constitute medical advice, diagnosis, or treatment,
        and does not create a provider–patient relationship. This website is{' '}
        <strong>not</strong> for emergencies. If you or someone else is
        experiencing a medical emergency, call 911 immediately. The 988 Suicide
        &amp; Crisis Lifeline is available 24/7 by calling or texting 988.
      </p>

      <h2>3. SMS / Text Messaging Terms</h2>
      <p>
        Elevate Recovery offers an SMS (text message) program so we can support
        your care and respond to your inquiries. By providing your mobile number
        and opting in, you agree to the following:
      </p>
      <ul>
        <li>
          <strong>Program description.</strong> You may receive messages about
          admissions and intake follow-up, appointment reminders and scheduling,
          insurance and benefit verification, care coordination, and customer
          care.
        </li>
        <li>
          <strong>Opt-in.</strong> You consent to receive text messages at the
          number you provide. Consent is not a condition of receiving treatment
          or any purchase.
        </li>
        <li>
          <strong>Message frequency</strong> varies based on your interactions
          with us.
        </li>
        <li>
          <strong>Message and data rates may apply</strong> per your mobile
          carrier and plan.
        </li>
        <li>
          <strong>Opt-out.</strong> Reply <strong>STOP</strong> at any time to
          stop receiving messages. You will receive a single confirmation
          message.
        </li>
        <li>
          <strong>Help.</strong> Reply <strong>HELP</strong>, or contact us at{' '}
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> or{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </li>
        <li>
          <strong>Eligibility.</strong> You must be the account holder or have
          authorization to enroll the mobile number, and be of legal age to
          consent.
        </li>
        <li>
          Carriers are not liable for delayed or undelivered messages.
        </li>
        <li>
          Your privacy is important to us. Mobile information and SMS opt-in
          consent are not shared with third parties or affiliates for marketing
          purposes. See our <Link href="/privacy-policy">Privacy Policy</Link>.
        </li>
      </ul>

      <h2>4. Use of the Website</h2>
      <p>
        You agree to use the website only for lawful purposes and not to disrupt
        or misuse it, attempt unauthorized access, or infringe the rights of
        others.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The website and its content — including text, graphics, logos, and the
        Elevate Recovery name and marks — are owned by or licensed to Elevate
        Recovery and are protected by applicable laws. You may not reproduce or
        distribute them without permission.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The website is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, express or implied. We do
        not warrant that the website will be uninterrupted, error-free, or free of
        harmful components.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Elevate Recovery will not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of the website or messaging program.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        The website may contain links to third-party websites. We are not
        responsible for their content or practices, and providing a link does not
        imply endorsement.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Elevate Recovery from claims
        arising out of your use of the website or violation of these Terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Ohio, without regard
        to its conflict-of-laws principles.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Changes are effective when
        posted, and the &ldquo;Last updated&rdquo; date above will reflect the
        most recent revision.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Questions about these Terms? Call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>{' '}
        or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalShell>
  )
}
