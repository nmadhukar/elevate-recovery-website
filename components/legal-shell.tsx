import type { ReactNode } from 'react'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbSchema } from '@/lib/structured-data'

/**
 * Shared shell for legal/compliance pages. Provides the page hero, a readable
 * single-column article with consistent typography (applied via arbitrary
 * variants so we don't need a prose plugin), and the closing CTA.
 */
export function LegalShell({
  title,
  description,
  updated,
  path,
  crumbLabel,
  children,
}: {
  title: string
  description?: string
  updated: string
  path: string
  crumbLabel: string
  children: ReactNode
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: crumbLabel, path },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title={title}
        description={description}
        crumbs={[{ label: 'Home', href: '/' }, { label: crumbLabel }]}
      />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="text-sm text-muted-foreground">
            Last updated: {updated}
          </p>
          <article
            className="mt-8 leading-relaxed text-muted-foreground [&_a:hover]:underline [&_a]:font-medium [&_a]:text-primary [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:font-heading [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_li]:mt-1.5 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-6 [&_p]:mt-3 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6"
          >
            {children}
          </article>
        </div>
      </section>
      <CtaSection />
    </>
  )
}

/** A highlighted callout used for the 10DLC mobile-data clause. */
export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-primary/30 bg-secondary/50 p-6 text-foreground">
      {children}
    </div>
  )
}
