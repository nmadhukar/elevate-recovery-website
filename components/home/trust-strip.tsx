import Image from 'next/image'
import { HeartHandshake, Users, Clock, type LucideIcon } from 'lucide-react'

type TrustItem = {
  icon?: LucideIcon
  seal?: boolean
  title: string
  text: string
}

const items: TrustItem[] = [
  {
    seal: true,
    title: 'Joint Commission Accredited',
    text: 'Care that meets the nation’s highest standards for safety and quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Whole-Person Care',
    text: 'We treat the individual, not just the addiction — mind, body, and spirit.',
  },
  {
    icon: Users,
    title: 'Master’s-Level Clinicians',
    text: 'Licensed therapists, physicians, and nurses guiding every plan of care.',
  },
  {
    icon: Clock,
    title: 'Admissions 24/7',
    text: 'Reach a real person any time, day or night, ready to help you start.',
  },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            {item.seal ? (
              <Image
                src="/joint-commission-seal.png"
                alt="The Joint Commission Gold Seal of Approval"
                width={48}
                height={48}
                className="size-12 shrink-0"
              />
            ) : (
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {item.icon && <item.icon className="size-5" />}
              </span>
            )}
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
