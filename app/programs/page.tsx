import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Stethoscope,
  Home,
  Sun,
  CalendarClock,
  LifeBuoy,
  Pill,
  Check,
  ArrowDown,
  type LucideIcon,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, programsSchema } from '@/lib/structured-data'
import { programs, conditions } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Programs & Levels of Care',
  description:
    'Explore Elevate Recovery’s full continuum of addiction treatment: medical detox, residential, PHP, IOP, outpatient, aftercare, and medication-assisted treatment in Toledo and Northwood, Ohio.',
  alternates: { canonical: '/programs' },
}

const iconMap: Record<string, LucideIcon> = {
  'medical-detox': Stethoscope,
  residential: Home,
  php: Sun,
  iop: CalendarClock,
  outpatient: LifeBuoy,
  mat: Pill,
}

export default function ProgramsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Programs', path: '/programs' },
          ]),
          programsSchema(),
        ]}
      />
      <PageHero
        eyebrow="Programs & Levels of Care"
        title="Personalized treatment for every step of recovery"
        description="Healing is not linear. Our integrated continuum of care lets you move seamlessly between levels of support as your needs change — all guided by one dedicated team."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs' }]}
      />

      {/* Quick nav of levels */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => {
              const Icon = iconMap[program.slug] ?? LifeBuoy
              return (
                <a
                  key={program.slug}
                  href={`#${program.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Step {i + 1}
                    </p>
                    <p className="font-heading font-semibold text-foreground">
                      {program.name}
                    </p>
                  </div>
                  <ArrowDown className="size-4 text-muted-foreground transition-transform group-hover:translate-y-0.5" />
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed program sections */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <div className="flex flex-col gap-20">
            {programs.map((program, i) => {
              const Icon = iconMap[program.slug] ?? LifeBuoy
              const reversed = i % 2 === 1
              return (
                <div
                  key={program.slug}
                  id={program.slug}
                  className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2"
                >
                  <div className={reversed ? 'lg:order-last' : ''}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      <Icon className="size-4" />
                      {program.level}
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {program.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="size-3" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`rounded-2xl border border-border bg-secondary/50 p-10 ${
                      reversed ? 'lg:order-first' : ''
                    }`}
                  >
                    <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-xl bg-card text-center">
                      <span className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Icon className="size-8" />
                      </span>
                      <p className="max-w-xs px-6 font-heading text-lg font-medium text-foreground">
                        {program.short}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What we treat */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src="/support.png"
                alt="Two people sitting together offering support outdoors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                What We Treat
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
                Comprehensive, dual-diagnosis care
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We treat substance use disorders alongside the mental health
                conditions that so often accompany them, addressing the whole
                person for lasting results.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {conditions.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
