import { siteConfig } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Inline brand SVGs. We don't use lucide brand icons because they were
 * deprecated/removed from the icon set, so inline paths keep this stable
 * across icon-library versions.
 */
const links = [
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0 3.838a5.999 5.999 0 100 11.998 5.999 5.999 0 000-11.998zm0 9.897a3.898 3.898 0 110-7.796 3.898 3.898 0 010 7.796zm6.406-10.131a1.401 1.401 0 11-2.803 0 1.401 1.401 0 012.803 0z',
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    path: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.339 9.5H5.667V18h2.672V9.5zM7.003 5.667a1.55 1.55 0 100 3.1 1.55 1.55 0 000-3.1zM18.333 18v-4.665c0-2.498-1.333-3.66-3.111-3.66-1.435 0-2.078.79-2.435 1.345V9.5H10.12V18h2.667v-4.5c0-1.18.222-2.323 1.685-2.323 1.441 0 1.46 1.349 1.46 2.4V18h2.401z',
  },
]

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ label, href, path }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Elevate Recovery on ${label}`}
          className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="size-4"
          >
            <path d={path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
