import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { CtaSection } from "@/components/cta-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/structured-data"
import { siteConfig, locations } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Elevate Recovery in Toledo, Ohio. Call our 24/7 confidential helpline or send a message and our admissions team will respond promptly.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="We're here whenever you're ready"
        description="Whether you have questions about treatment, insurance, or simply want to talk through your options, our compassionate admissions team is available around the clock."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact details */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Get in touch</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Every conversation is private and judgment-free. Reach out using the form, or contact us directly with
                  the details below.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-muted-foreground">24/7 Confidential Helpline</span>
                    <span className="block text-lg font-semibold text-foreground">{siteConfig.phone}</span>
                  </span>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-muted-foreground">Email</span>
                    <span className="block text-lg font-semibold text-foreground">{siteConfig.email}</span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-muted-foreground">Hours</span>
                    <span className="block text-base font-semibold text-foreground">
                      Admissions available 24 hours a day, 7 days a week
                    </span>
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {locations.map((location) => (
                  <div key={location.city} className="rounded-xl border border-border bg-muted/40 p-5">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="h-4 w-4" />
                      <h3 className="font-heading text-lg font-semibold text-foreground">{location.city}</h3>
                    </div>
                    <address className="mt-2 not-italic leading-relaxed text-muted-foreground">
                      {location.address}
                      <br />
                      {location.cityStateZip}
                    </address>
                    <Link
                      href="/locations"
                      className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      View location details
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground">Send us a message</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill out the form below and a member of our team will reach out shortly. Fields marked with an asterisk
                are required.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map of Elevate Recovery service area in Ohio"
              src="https://www.google.com/maps?q=3900+Sunforest+Ct,+Toledo,+OH+43623&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
