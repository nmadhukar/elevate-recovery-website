import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Elevate gave me my life back. For the first time in a decade I feel like myself again — and I have the tools to stay this way.',
    name: 'James R.',
    detail: 'Alumnus, 2 years in recovery',
  },
  {
    quote:
      'The staff treated my son with so much dignity. They included our whole family in his care, and that made all the difference.',
    name: 'Maria T.',
    detail: 'Mother of a client',
  },
  {
    quote:
      'From the first phone call I felt heard, not judged. They verified my insurance and I started treatment within days.',
    name: 'Dana K.',
    detail: 'Alumna, Toledo',
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Stories of Hope
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Real people. Real recovery.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
            >
              <Quote className="size-8 text-accent" aria-hidden />
              <blockquote className="mt-4 flex-1 leading-relaxed text-primary-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-primary-foreground/15 pt-4">
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-sm text-primary-foreground/70">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-primary-foreground/60">
          Names and details have been changed to protect client privacy.
        </p>
      </div>
    </section>
  )
}
