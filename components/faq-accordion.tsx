import { ChevronDown } from 'lucide-react'
import type { Faq } from '@/lib/site-data'

/**
 * Accessible FAQ list built on native <details>/<summary> — keyboard- and
 * screen-reader-friendly with no client JavaScript. The first item is open by
 * default to hint that the section is interactive.
 */
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={faq.q}
          open={i === 0}
          className="group rounded-2xl border border-border bg-card px-6 transition-colors open:border-primary/40 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-semibold text-foreground">
            {faq.q}
            <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 leading-relaxed text-muted-foreground">{faq.a}</p>
        </details>
      ))}
    </div>
  )
}
