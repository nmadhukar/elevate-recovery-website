import { cn } from '@/lib/utils'

/**
 * Original hero artwork: a figure standing triumphantly on a summit with arms
 * raised, backlit by a rising sun over layered purple peaks. Echoes the mountain
 * logo and the "rise above / reclaim your life" message. Pure SVG — no raster
 * asset, scales crisply, and carries no stock-photo licensing.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A person standing on a mountain summit with arms raised in triumph at sunrise"
      className={cn('h-full w-full', className)}
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c1147" />
          <stop offset="0.38" stopColor="#46219b" />
          <stop offset="0.6" stopColor="#7a37ad" />
          <stop offset="0.73" stopColor="#bd6489" />
          <stop offset="0.83" stopColor="#e8a259" />
          <stop offset="0.92" stopColor="#f8d99c" />
        </linearGradient>
        <radialGradient id="hero-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff4d2" />
          <stop offset="0.5" stopColor="#fcd183" />
          <stop offset="1" stopColor="#f4b24c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1000" height="1000" fill="url(#hero-sky)" />

      {/* Stars */}
      <g fill="#ffffff">
        <circle cx="150" cy="150" r="2.6" opacity="0.8" />
        <circle cx="300" cy="95" r="2" opacity="0.6" />
        <circle cx="470" cy="140" r="1.7" opacity="0.7" />
        <circle cx="700" cy="110" r="2.4" opacity="0.7" />
        <circle cx="840" cy="210" r="2" opacity="0.6" />
        <circle cx="110" cy="300" r="1.6" opacity="0.5" />
        <circle cx="900" cy="330" r="1.8" opacity="0.6" />
        <circle cx="600" cy="80" r="1.5" opacity="0.5" />
      </g>

      {/* Rising sun */}
      <circle cx="545" cy="540" r="250" fill="url(#hero-sun)" />
      <circle cx="545" cy="540" r="118" fill="#ffe9ad" />

      {/* Mountain ranges, back to front */}
      <path
        fill="#7b53c4"
        opacity="0.5"
        d="M0 650 L160 545 L320 615 L470 505 L620 590 L800 520 L1000 600 L1000 1000 L0 1000 Z"
      />
      <path
        fill="#5a2aa6"
        opacity="0.85"
        d="M0 735 L180 630 L360 710 L520 565 L700 685 L860 605 L1000 675 L1000 1000 L0 1000 Z"
      />
      <path
        fill="#2a1158"
        d="M0 1000 L0 805 L150 695 L300 775 L430 645 L500 540 L590 665 L760 745 L1000 705 L1000 1000 Z"
      />

      {/* Triumphant figure on the summit */}
      <g fill="#160833" stroke="#160833" strokeLinecap="round">
        <circle cx="500" cy="452" r="16" stroke="none" />
        <path d="M500 470 L500 516" strokeWidth="21" />
        <path d="M500 514 L482 548" strokeWidth="11" />
        <path d="M500 514 L518 548" strokeWidth="11" />
        <path d="M500 482 L466 430" strokeWidth="11" />
        <path d="M500 482 L534 430" strokeWidth="11" />
      </g>
    </svg>
  )
}
