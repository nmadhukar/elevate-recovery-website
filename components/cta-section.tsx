import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site-data'

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              You don&apos;t have to do this alone
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-balance md:text-4xl">
              Recovery starts with a single conversation.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
              Our admissions team is available around the clock to answer your
              questions, verify your insurance, and help you take the next step
              — confidentially and without judgment.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              Verify Your Insurance
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
