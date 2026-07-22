import type { Metadata } from 'next'
import { Phone, BadgeCheck, PhoneCall, ClipboardList, CalendarCheck, Car } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { InsuranceForm } from '@/components/insurance-form'
import { FaqAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import {
  insurers,
  admissionsFaqs,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Admissions & Insurance',
  description:
    'Starting treatment at Elevate Recovery is simple and confidential. Verify your insurance, learn our admissions steps, and take the first step toward recovery today.',
  alternates: { canonical: '/admissions' },
}

const steps = [
  {
    icon: PhoneCall,
    title: 'Reach out',
    text: 'Call our 24/7 helpline or submit the form. We listen, answer questions, and explain your options — no pressure, no judgment.',
  },
  {
    icon: ClipboardList,
    title: 'Verify benefits',
    text: 'We confirm your insurance coverage and walk you through any costs, so there are no surprises.',
  },
  {
    icon: CalendarCheck,
    title: 'Clinical assessment',
    text: 'A brief, confidential assessment helps us recommend the right level of care for your situation.',
  },
  {
    icon: Car,
    title: 'Begin treatment',
    text: 'We coordinate your start date and, when needed, help arrange transportation to our Toledo or Northwood center.',
  },
]

export default function AdmissionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Admissions', path: '/admissions' },
          ]),
          faqSchema(admissionsFaqs),
        ]}
      />
      <PageHero
        eyebrow="Admissions & Insurance"
        title="Getting started is easier than you think"
        description="Taking the first step is the hardest part — and we make the rest simple. Our admissions specialists handle the details so you can focus on getting well."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Admissions' }]}
      />

      {/* Steps */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              The Admissions Process
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              Four simple steps to care
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="absolute right-5 top-5 font-heading text-3xl font-semibold text-border">
                  {i + 1}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + insurance */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              Verify your insurance in minutes
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We work with most major insurance providers, and many clients are
              surprised by how much of their treatment is covered. Submit your
              details and our team will confirm your benefits confidentially.
            </p>

            <h3 className="mt-8 font-heading text-lg font-semibold text-foreground">
              Insurance we accept
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {insurers.map((insurer) => (
                <div
                  key={insurer}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {insurer}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">
                Prefer to talk it through? Call our confidential helpline.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div>
            <InsuranceForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Common Questions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              Admissions, answered
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion faqs={admissionsFaqs} />
          </div>
        </div>
      </section>
    </>
  )
}
