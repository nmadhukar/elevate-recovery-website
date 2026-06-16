import Image from 'next/image'
import { Check } from 'lucide-react'

const points = [
  {
    title: 'Personalized treatment plans',
    text: 'Every plan is built around your history, your goals, and the people you love — never a one-size-fits-all script.',
  },
  {
    title: 'Dual-diagnosis expertise',
    text: 'We treat addiction alongside anxiety, depression, trauma, and other co-occurring conditions at the same time.',
  },
  {
    title: 'Evidence-based therapies',
    text: 'CBT, DBT, motivational interviewing, and medication-assisted treatment, delivered by licensed clinicians.',
  },
  {
    title: 'Family healing & education',
    text: 'Addiction affects the whole family. We help loved ones understand, set boundaries, and heal together.',
  },
]

export function Approach() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/group-therapy.png"
              alt="A supportive group therapy session in a bright counseling room"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Approach
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
            Care that treats the whole person
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Lasting recovery is about more than stopping substance use. We help
            you rebuild health, relationships, and purpose — so you leave
            treatment ready to thrive.
          </p>

          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
