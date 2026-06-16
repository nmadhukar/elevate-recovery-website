import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ShieldCheck,
  Heart,
  Eye,
  Users,
  Award,
  Compass,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Elevate Recovery — a Joint Commission Certified addiction treatment organization in Lima and Toledo, Ohio, built on compassion, clinical excellence, and dignity.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    text: 'We meet every person with empathy and respect, never judgment. Dignity is the foundation of healing.',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    text: 'Our care is grounded in proven, evidence-based practices delivered by credentialed professionals.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Recovery thrives in connection. We build supportive communities of peers, families, and alumni.',
  },
  {
    icon: Compass,
    title: 'Integrity',
    text: 'We do what is right for our clients — honest guidance, transparent care, and ethical practices.',
  },
]

const stats = [
  { value: '2,500+', label: 'Lives touched' },
  { value: '2', label: 'Ohio locations' },
  { value: '24/7', label: 'Admissions support' },
  { value: '4.9/5', label: 'Alumni rating' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <PageHero
        eyebrow="About Elevate Recovery"
        title="A place to rise, recover, and rebuild"
        description="Elevate Recovery was founded on a simple belief: that everyone deserves a compassionate, dignified path out of addiction — and the support to make recovery last."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Story */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src="/clinician.png"
                alt="A clinician speaking compassionately with a client"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              Rooted in Ohio, devoted to recovery
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Across our communities in Lima and Toledo, families have watched
                addiction take far too much. Elevate Recovery was created to
                change that story — to bring world-class, compassionate
                treatment closer to the people who need it most.
              </p>
              <p>
                We combine the structure of a medical model with the warmth of a
                community that genuinely cares. From the first phone call through
                years of aftercare, our clients are never just a case number —
                they are people with names, families, and futures worth fighting
                for.
              </p>
              <p>
                Today, Elevate Recovery is proud to be Joint Commission
                Certified, meeting the nation&apos;s highest standards for the
                quality and safety of behavioral health care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Compass className="size-6" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To provide accessible, evidence-based addiction treatment that
              honors the dignity of every individual — empowering people and
              families across Ohio to build healthy, meaningful lives in
              recovery.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Eye className="size-6" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground">
              Our Vision
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A future where every Ohioan affected by addiction has a clear,
              supported path to recovery — and where seeking help is met with
              hope and compassion, not stigma.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              The principles that guide our care
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation + stats */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-primary">
                <ShieldCheck className="size-4" />
                The Gold Seal of Approval
              </span>
              <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
                Joint Commission Certified
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Accreditation by The Joint Commission is the most widely
                recognized symbol of quality in health care. It means Elevate
                Recovery is independently evaluated against rigorous national
                standards for safety, ethics, and effective treatment — and that
                we hold ourselves accountable to them every single day.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <p className="font-heading text-3xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
