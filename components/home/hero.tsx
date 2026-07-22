import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site-data'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-primary">
            <ShieldCheck className="size-4" />
            Joint Commission Certified · Toledo &amp; Northwood, Ohio
          </div>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground md:text-6xl">
            Rise above addiction. Reclaim your life.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Elevate Recovery provides compassionate, evidence-based addiction
            treatment across Ohio. From medical detox to lifelong aftercare, our
            team walks beside you at every step of the journey.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="size-4" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Verify Your Insurance
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div>
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Rated 4.9/5 by alumni &amp; families
              </p>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden />
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">
                2,500+
              </p>
              <p className="text-sm text-muted-foreground">
                Ohioans supported in recovery
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/elevate-hero.png"
              alt="Elevate Recovery — Rise. Recover. Elevate. A person standing on a mountain summit at sunrise."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Purple brand tint */}
            <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
              aria-hidden
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden max-w-[15rem] rounded-xl border border-border bg-card p-4 shadow-md sm:block">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Confidential helpline</p>
                <p className="text-sm font-semibold text-foreground">
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
