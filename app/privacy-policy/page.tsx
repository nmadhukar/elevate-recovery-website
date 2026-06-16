import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalShell, LegalCallout } from '@/components/legal-shell'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, locations } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Elevate Recovery collects, uses, and protects your information, including our SMS/text messaging practices and your privacy choices.',
  alternates: { canonical: '/privacy-policy' },
}

const lima = locations[0]

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have."
      updated="June 16, 2026"
      path="/privacy-policy"
      crumbLabel="Privacy Policy"
    >
      <p>
        This Privacy Policy describes how Elevate Recovery (&ldquo;Elevate
        Recovery,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        collects, uses, discloses, and safeguards information when you visit our
        website, contact us, verify insurance benefits, or otherwise interact
        with our services. By using our website or providing your information,
        you agree to the practices described in this policy.
      </p>
      <p>
        Health information you share with us as a patient is also protected under
        the Health Insurance Portability and Accountability Act (HIPAA) and, for
        substance use disorder records, under 42 CFR Part 2. Please see our{' '}
        <Link href="/hipaa">HIPAA Notice of Privacy Practices</Link> for details
        about how we handle protected health information.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> Your name, phone number,
          email address, mailing address, insurance details, and any information
          you include in a form, message, or phone call — including information
          about the person seeking treatment.
        </li>
        <li>
          <strong>Health-related information.</strong> If you contact us about
          treatment, you may share health information so we can assess care
          needs and verify benefits. This information is treated as confidential.
        </li>
        <li>
          <strong>Information collected automatically.</strong> Device and usage
          data such as IP address, browser type, pages viewed, and referring
          pages, collected through cookies and similar technologies.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Respond to inquiries and provide the care and services you request.</li>
        <li>Verify insurance benefits and coordinate admissions and treatment.</li>
        <li>Send appointment reminders and important service-related messages.</li>
        <li>Operate, maintain, secure, and improve our website and services.</li>
        <li>Comply with legal, regulatory, and accreditation obligations.</li>
      </ul>

      <h2>SMS / Text Messaging Program</h2>
      <p>
        If you provide your mobile phone number and opt in, you consent to
        receive text (SMS) messages from Elevate Recovery related to your care
        and inquiries, such as: admissions and intake follow-up, appointment
        reminders and scheduling, insurance and benefit verification updates,
        care coordination, and customer-care responses.
      </p>
      <ul>
        <li>
          <strong>Consent is not a condition of purchase or treatment.</strong>{' '}
          You can receive care without opting in to text messages.
        </li>
        <li>
          <strong>Message frequency varies</strong> based on your interactions
          with us.
        </li>
        <li>
          <strong>Message and data rates may apply,</strong> depending on your
          mobile carrier and plan.
        </li>
        <li>
          <strong>Opt out at any time</strong> by replying <strong>STOP</strong>{' '}
          to any message. You will receive a one-time confirmation and no further
          messages unless you opt in again.
        </li>
        <li>
          <strong>For help,</strong> reply <strong>HELP</strong>, or contact us
          at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> or{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </li>
        <li>
          Carriers are not liable for delayed or undelivered messages.
        </li>
      </ul>
      <LegalCallout>
        <p className="!mt-0">
          <strong>
            No mobile information will be shared with third parties or affiliates
            for marketing or promotional purposes.
          </strong>{' '}
          Text-messaging originator opt-in data and consent are not shared with,
          sold to, or rented to any third parties or affiliates. The categories
          of information described in this section are never used or shared for
          third-party marketing.
        </p>
      </LegalCallout>

      <h2>How We Share Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>
          <strong>Service providers and business associates</strong> who perform
          services on our behalf (such as hosting, communications, and benefit
          verification) under contracts that require they protect your
          information.
        </li>
        <li>
          <strong>Insurers and payers</strong>, with your authorization, to
          verify benefits and process claims.
        </li>
        <li>
          <strong>Legal and safety</strong> recipients when required by law or to
          protect the rights, safety, and well-being of our patients, staff, or
          the public.
        </li>
      </ul>
      <p>
        As stated above, mobile phone numbers and SMS opt-in data are never
        shared with third parties for marketing purposes.
      </p>

      <h2>Cookies &amp; Analytics</h2>
      <p>
        We use cookies and similar technologies to operate the site, remember
        preferences, and understand how the site is used. You can control cookies
        through your browser settings; disabling them may affect site
        functionality.
      </p>

      <h2>Data Security</h2>
      <p>
        We maintain administrative, technical, and physical safeguards designed
        to protect your information. No method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Rights &amp; Choices</h2>
      <ul>
        <li>Opt out of text messages by replying STOP.</li>
        <li>Unsubscribe from emails using the link in any marketing email.</li>
        <li>
          Request access to, correction of, or deletion of certain personal
          information, subject to legal and recordkeeping requirements.
        </li>
        <li>
          Patients have additional rights regarding protected health information
          described in our <Link href="/hipaa">HIPAA Notice</Link>.
        </li>
      </ul>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is not directed to children under 13, and we do not knowingly
        collect personal information from children under 13. Care for minors is
        arranged through a parent or legal guardian.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may link to third-party sites we do not control. Their
        privacy practices are governed by their own policies, and we encourage
        you to review them.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes are
        effective when posted, and the &ldquo;Last updated&rdquo; date above will
        reflect the most recent revision.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our privacy practices,
        contact us at:
      </p>
      <p>
        Elevate Recovery
        <br />
        {lima.address}, {lima.cityStateZip}
        <br />
        Phone: <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        <br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </LegalShell>
  )
}
