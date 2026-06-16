import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SocialIcons } from '@/components/social-icons'
import {
  navLinks,
  programs,
  locations,
  siteConfig,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
} from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A Joint Commission Certified addiction treatment organization
              helping people across Ohio reclaim their lives through
              compassionate, evidence-based care.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/joint-commission-seal.png"
                alt="The Joint Commission Gold Seal of Approval"
                width={56}
                height={56}
                className="size-14 shrink-0"
              />
              <p className="max-w-[12rem] text-xs leading-relaxed text-muted-foreground">
                Accredited by The Joint Commission — the Gold Seal of Approval®
                for quality and safety.
              </p>
            </div>
            <SocialIcons className="pt-1" />
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs#${p.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Mail className="size-4 text-primary" />
                  {EMAIL}
                </a>
              </li>
              {locations.map((loc) => (
                <li key={loc.slug} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {loc.addressLines.join(', ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Elevate Recovery. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy Notice
            </Link>
            <Link href="/termsandconditions" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
            <Link href="/hipaa" className="hover:text-primary">
              HIPAA Notice
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
          If you or someone you know is experiencing a medical emergency, call
          911 immediately. The 988 Suicide &amp; Crisis Lifeline is available 24
          hours a day by calling or texting 988.
        </p>
      </div>
    </footer>
  )
}
