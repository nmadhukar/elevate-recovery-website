import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { JsonLd } from '@/components/json-ld'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'
import { siteConfig } from '@/lib/site-data'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
// Include the SOFT and WONK axes so we can pin WONK to 0 in CSS, which removes
// Fraunces's quirky terminals (the hooked f, j, single-story g) for a clean,
// conventional serif while keeping the same warm typeface.
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
})

export const metadata: Metadata = {
  title: {
    default: 'Elevate Recovery | Addiction Treatment in Lima & Toledo, Ohio',
    template: '%s | Elevate Recovery',
  },
  description:
    'Elevate Recovery is a Joint Commission Certified addiction treatment organization in Lima and Toledo, Ohio. Compassionate, evidence-based care including medical detox, residential, PHP, IOP, outpatient, and medication-assisted treatment.',
  keywords: [
    'addiction treatment Ohio',
    'rehab Lima Ohio',
    'rehab Toledo Ohio',
    'drug and alcohol treatment',
    'medication-assisted treatment',
    'detox Ohio',
    'Joint Commission accredited rehab',
  ],
  applicationName: 'Elevate Recovery',
  authors: [{ name: 'Elevate Recovery' }],
  creator: 'Elevate Recovery',
  publisher: 'Elevate Recovery',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  category: 'health',
  openGraph: {
    title: 'Elevate Recovery | Addiction Treatment in Lima & Toledo, Ohio',
    description:
      'Joint Commission Certified addiction treatment in Lima and Toledo, Ohio. A full continuum of compassionate, evidence-based care.',
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Elevate Recovery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate Recovery | Addiction Treatment in Lima & Toledo, Ohio',
    description:
      'Joint Commission Certified addiction treatment in Lima and Toledo, Ohio. Compassionate, evidence-based care.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    // ?v=3 busts aggressive browser favicon caching after the purple rebrand.
    icon: [
      {
        url: '/icon.svg?v=3',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-light-32x32.png?v=3',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: '/icon-light-32x32.png?v=3',
    apple: '/apple-icon.png?v=3',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5f23b8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {/* Vercel Web Analytics only works when hosted on Vercel; skip it on
            self-hosted/Docker so it doesn't 404 the insights script. */}
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  )
}
