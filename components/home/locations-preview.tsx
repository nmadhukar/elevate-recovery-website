import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { locations } from '@/lib/site-data'

export function LocationsPreview() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Locations
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
            Compassionate care, close to home
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            With centers in Toledo and Northwood, quality addiction treatment is
            accessible across Northwest Ohio.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={loc.image}
                  alt={`Exterior of ${loc.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {loc.city}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {loc.blurb}
                </p>
                <div className="mt-5 space-y-2.5 text-sm text-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {loc.addressLines.join(', ')}
                  </p>
                  <a
                    href={loc.phoneHref}
                    className="flex items-center gap-2 font-medium hover:text-primary"
                  >
                    <Phone className="size-4 shrink-0 text-primary" />
                    {loc.phoneDisplay}
                  </a>
                </div>
                <Link
                  href="/locations"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  View location details
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
