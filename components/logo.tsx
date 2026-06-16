import { cn } from '@/lib/utils'

/**
 * Angular mountain-range mark — three faceted peaks with snow-crevice cutouts.
 * Symbolizes the climb of recovery / "elevate". Fills with `currentColor` so it
 * adopts whatever text color it's given (brand purple by default).
 */
export function MountainMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Elevate Recovery"
      className={cn('h-6 w-auto text-primary', className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 58 L33 34 L43 45 L53 33 L69 8 L79 26 L87 18 L97 31 L109 19 L135 58 Z M63 33 L69 15 L66 34 Z M101 32 L109 23 L105 35 Z M40 47 L33 36 L26 46 Z"
      />
    </svg>
  )
}

// Backwards-compatible alias.
export const LogoMark = MountainMark

/**
 * Primary logo lockup: the mountain mark above the "ELEVATE RECOVERY" wordmark,
 * set in the mono typeface (uppercase, wide tracking) for a clean, technical
 * feel. Entirely brand-purple.
 */
export function Logo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <span
      className={cn('inline-flex flex-col items-center gap-1.5', className)}
    >
      <MountainMark className="h-6 w-auto text-primary" />
      <span
        className={cn(
          'font-mono text-[0.7rem] font-medium uppercase leading-none tracking-[0.22em] text-primary',
          textClassName,
        )}
      >
        Elevate Recovery
      </span>
    </span>
  )
}
