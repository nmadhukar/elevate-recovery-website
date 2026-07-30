import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema, locationsSchema } from '@/lib/structured-data'
import { locations, serviceAreas } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Our Locations',
  description:
    'Elevate Recovery treatment center in Toledo, Ohio. Find our address, phone number, and directions to begin compassionate addiction treatment near you.',
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
          ]),
          ...locationsSchema(),
        ]}
      />
      <PageHero
        eyebrow="Our Location"
        title="One Toledo center, wholly committed to your recovery"
        description="Whether you’re in Toledo or the surrounding communities, expert addiction care is close by. Our center offers a welcoming, judgment-free environment."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
      />

      <section className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 md:py-24">
          {locations.map((loc, i) => {
            const reversed = i % 2 === 1
            const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${loc.name} ${loc.addressLines.join(' ')}`,
            )}`
            return (
              <div
                key={loc.slug}
                id={loc.slug}
                className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-sm ${
                    reversed ? 'lg:order-last' : ''
                  }`}
                >
                  <Image
                    src={loc.image}
                    alt={`Exterior of ${loc.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {loc.city}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {loc.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {loc.blurb}
                  </p>

                  <dl className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <dt className="text-sm font-semibold text-foreground">
                          Address
                        </dt>
                        <dd className="text-sm text-muted-foreground">
                          {loc.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <dt className="text-sm font-semibold text-foreground">
                          Phone
                        </dt>
                        <dd>
                          <a
                            href={loc.phoneHref}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {loc.phoneDisplay}
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <dt className="text-sm font-semibold text-foreground">
                          Hours
                        </dt>
                        <dd className="text-sm text-muted-foreground">
                          Outpatient: Mon–Fri, 8am–8pm · Admissions helpline
                          available 24/7
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    <Navigation className="size-4 text-primary" />
                    Get Directions
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Service area */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Serving communities across Ohio
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Beyond Toledo, we proudly welcome clients from
            across Northwest Ohio. Not sure if we can help? Call
            our team — we&apos;ll point you in the right direction, even if that
            means another resource.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
