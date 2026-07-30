'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Add a subtle shadow once the page is scrolled for depth and separation.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md transition-shadow duration-300',
        scrolled ? 'border-border shadow-sm' : 'border-border/70',
      )}
    >
      {/* Top utility bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <p className="text-primary-foreground/90">
            Joint Commission Certified · Confidential, compassionate care in Toledo, Ohio
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 font-medium hover:text-accent"
          >
            <Phone className="size-3.5" />
            24/7 Helpline: {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/" aria-label="Elevate Recovery home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  active && 'text-primary',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <Phone className="size-4" />
            <span className="hidden md:inline">{PHONE_DISPLAY}</span>
            <span className="md:hidden">Call Now</span>
          </a>
          <Link
            href="/admissions"
            className="hidden rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted xl:inline-flex"
          >
            Verify Insurance
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-border px-4 py-3 text-center text-sm font-semibold text-foreground"
            >
              Verify Insurance
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
