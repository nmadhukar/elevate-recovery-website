import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalShell, LegalCallout } from '@/components/legal-shell'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, locations } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices',
  description:
    'How Elevate Recovery may use and disclose your protected health information, your rights under HIPAA and 42 CFR Part 2, and how to file a complaint.',
  alternates: { canonical: '/hipaa' },
}

const lima = locations[0]

export default function HipaaPage() {
  return (
    <LegalShell
      title="HIPAA Notice of Privacy Practices"
      description="This notice describes how medical information about you may be used and disclosed and how you can get access to this information."
      updated="June 16, 2026"
      path="/hipaa"
      crumbLabel="HIPAA Notice"
    >
      <LegalCallout>
        <p className="!mt-0">
          <strong>
            THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED
            AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE
            REVIEW IT CAREFULLY.
          </strong>
        </p>
      </LegalCallout>

      <h2>Our Commitment</h2>
      <p>
        Elevate Recovery is committed to protecting the privacy of your protected
        health information (&ldquo;PHI&rdquo;). We are required by law to maintain
        the privacy of PHI, to provide you with this notice of our legal duties
        and privacy practices, and to follow the terms of the notice currently in
        effect.
      </p>

      <h2>Special Protection for Substance Use Records</h2>
      <p>
        Because we provide substance use disorder treatment, much of your
        information is also protected by federal regulations at{' '}
        <strong>42 CFR Part 2</strong>, which generally provide stronger
        confidentiality protections than HIPAA alone. In most cases, we may not
        acknowledge to a person outside the program that you attend the program,
        or disclose information identifying you as having a substance use
        disorder, unless you consent in writing, the disclosure is allowed by a
        court order, or the disclosure is made to medical personnel in a bona fide
        medical emergency or otherwise permitted by law.
      </p>

      <h2>How We May Use and Disclose Your Health Information</h2>
      <p>
        Subject to the protections above, we may use and disclose your PHI for the
        following purposes:
      </p>
      <ul>
        <li>
          <strong>Treatment.</strong> To provide, coordinate, and manage your
          care among the clinicians and providers involved in your treatment.
        </li>
        <li>
          <strong>Payment.</strong> To verify benefits, obtain authorizations,
          and bill and collect payment for the services you receive.
        </li>
        <li>
          <strong>Health care operations.</strong> For quality assessment,
          accreditation, training, care coordination, and general administrative
          activities.
        </li>
      </ul>

      <h2>Uses and Disclosures That Require Your Authorization</h2>
      <p>
        Most uses and disclosures of substance use disorder records, psychotherapy
        notes, PHI for marketing, and any sale of PHI require your written
        authorization. You may revoke an authorization in writing at any time,
        except to the extent we have already relied on it.
      </p>

      <h2>Other Permitted or Required Disclosures</h2>
      <p>
        Where permitted or required by law, we may use or disclose PHI as required
        by law; for public health and safety activities; to report abuse, neglect,
        or domestic violence; for health oversight activities; for judicial and
        administrative proceedings; for law enforcement under specific conditions;
        to avert a serious threat to health or safety; and for workers&apos;
        compensation. Disclosures of substance use records remain subject to 42
        CFR Part 2.
      </p>

      <h2>Your Rights</h2>
      <p>You have the following rights regarding your PHI:</p>
      <ul>
        <li>
          <strong>Access.</strong> Inspect and obtain a copy of your health
          information, in a paper or electronic format.
        </li>
        <li>
          <strong>Amendment.</strong> Request a correction to information you
          believe is incorrect or incomplete.
        </li>
        <li>
          <strong>Accounting of disclosures.</strong> Request a list of certain
          disclosures we have made.
        </li>
        <li>
          <strong>Restrictions.</strong> Request limits on how we use or disclose
          your information; we will say yes where required by law.
        </li>
        <li>
          <strong>Confidential communications.</strong> Ask us to contact you in a
          specific way or at a specific location.
        </li>
        <li>
          <strong>Paper copy.</strong> Obtain a paper copy of this notice at any
          time.
        </li>
        <li>
          <strong>Breach notification.</strong> Be notified if a breach of your
          unsecured PHI occurs.
        </li>
      </ul>

      <h2>Our Responsibilities</h2>
      <ul>
        <li>We are required by law to maintain the privacy and security of your PHI.</li>
        <li>
          We will let you know promptly if a breach occurs that may have
          compromised the privacy or security of your information.
        </li>
        <li>
          We will not use or share your information other than as described here
          unless you tell us we can in writing.
        </li>
      </ul>

      <h2>Changes to This Notice</h2>
      <p>
        We may change this notice and make the new notice effective for all PHI we
        maintain. The current notice will be posted with its effective date.
      </p>

      <h2>Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a
        complaint with us using the contact information below, or with the U.S.
        Department of Health and Human Services, Office for Civil Rights. We will
        not retaliate against you for filing a complaint.
      </p>

      <h2>Contact Us</h2>
      <p>
        To exercise your rights, ask questions, or file a complaint, contact our
        Privacy Officer:
      </p>
      <p>
        Elevate Recovery — Privacy Officer
        <br />
        {lima.address}, {lima.cityStateZip}
        <br />
        Phone: <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        <br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p>
        See also our <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
        <Link href="/termsandconditions">Terms &amp; Conditions</Link>.
      </p>
    </LegalShell>
  )
}
