import { Check } from 'lucide-react'
import { conditions } from '@/lib/site-data'

export function Conditions() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Treat
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
            Specialized care for a range of conditions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Whatever you&apos;re facing, you are not beyond help. Our team has
            deep experience treating substance use and co-occurring mental
            health conditions.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3.5" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {condition}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
