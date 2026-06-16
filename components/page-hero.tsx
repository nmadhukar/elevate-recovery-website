import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string
  title: string
  description?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3.5" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
