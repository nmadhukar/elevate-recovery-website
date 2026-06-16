import type { Metadata } from 'next'
import { Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Not available in your region',
  description: 'Elevate Recovery is currently available only within the United States.',
  robots: { index: false, follow: false },
}

export default function UnavailablePage() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Globe className="size-8" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Available in the United States
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Elevate Recovery&apos;s services and this website are currently
          available only to visitors within the United States. If you believe
          you are seeing this message in error, please reach out and our team
          will be glad to help.
        </p>
        <a
          href="mailto:admissions@elevaterecoveryoh.com"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact our team
        </a>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80">
          If you or someone you know is experiencing a medical emergency, call
          911. The 988 Suicide &amp; Crisis Lifeline is available 24/7 by calling
          or texting 988.
        </p>
      </div>
    </section>
  )
}
