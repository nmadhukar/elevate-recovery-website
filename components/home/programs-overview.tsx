import Link from 'next/link'
import {
  Stethoscope,
  Home,
  Sun,
  CalendarClock,
  LifeBuoy,
  Pill,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { programs } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  'medical-detox': Stethoscope,
  residential: Home,
  php: Sun,
  iop: CalendarClock,
  outpatient: LifeBuoy,
  mat: Pill,
}

export function ProgramsOverview() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Programs
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
              A full continuum of care, tailored to you
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              No two journeys are the same. We meet you wherever you are and
              guide you through each level of care as you grow stronger in
              recovery.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all programs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = iconMap[program.slug] ?? LifeBuoy
            return (
              <Link
                key={program.slug}
                href={`/programs#${program.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                  {program.level}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                  {program.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
