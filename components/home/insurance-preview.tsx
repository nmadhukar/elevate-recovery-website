import Link from 'next/link'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { insurers } from '@/lib/site-data'

export function InsurancePreview() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Insurance &amp; Payment
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
                Most major insurance accepted
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                Worried about cost? Many clients pay little to nothing out of
                pocket. Verify your benefits in minutes — confidentially and
                with no obligation.
              </p>
              <Link
                href="/admissions"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Verify Your Insurance
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {insurers.map((insurer) => (
                <div
                  key={insurer}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3.5"
                >
                  <BadgeCheck className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {insurer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
