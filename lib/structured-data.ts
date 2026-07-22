import {
  siteConfig,
  locations,
  programs,
  insurers,
  serviceAreas,
  admissionsFaqs,
  type Faq,
} from '@/lib/site-data'

/**
 * Schema.org JSON-LD builders. Centralizing them keeps every page's structured
 * data consistent and makes the site legible to search engines and LLMs that
 * read schema graphs to understand entities, services, and locations.
 *
 * Reference: https://schema.org/MedicalBusiness
 */

const SITE_URL = siteConfig.url
const orgId = `${SITE_URL}/#organization`

function absolute(path: string) {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}

/** Primary MedicalOrganization node describing the whole brand. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalOrganization', 'MedicalBusiness'],
    '@id': orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: SITE_URL,
    logo: absolute('/icon.svg'),
    image: absolute('/hero.png'),
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    telephone: `+1-419-770-3487`,
    email: siteConfig.email,
    medicalSpecialty: 'Addiction',
    priceRange: '$$',
    sameAs: Object.values(siteConfig.social),
    areaServed: [
      { '@type': 'State', name: 'Ohio' },
      ...serviceAreas.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
    ],
    availableService: programs.map((p) => ({
      '@type': 'MedicalProcedure',
      name: p.name,
      description: p.short,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-419-770-3487',
      contactType: 'admissions',
      areaServed: 'US',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
    location: locations.map((loc) => ({ '@id': `${SITE_URL}/locations#${loc.slug}` })),
  }
}

/** Per-location MedicalClinic nodes with postal address + geo. */
export function locationsSchema() {
  return locations.map((loc) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/locations#${loc.slug}`,
    name: loc.name,
    parentOrganization: { '@id': orgId },
    url: `${SITE_URL}/locations`,
    image: absolute(loc.image),
    telephone: loc.phoneHref.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: loc.locality,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    medicalSpecialty: 'Addiction',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
  }))
}

/** WebSite node — helps engines name the site and enables sitelinks. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { '@id': orgId },
    inLanguage: 'en-US',
  }
}

/** BreadcrumbList for a page. Pass ordered [label, path] pairs. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  }
}

/** FAQPage node built from shared FAQ data. */
export function faqSchema(faqs: Faq[] = admissionsFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

/** ItemList of programs for the programs page. */
export function programsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Levels of Care at Elevate Recovery',
    itemListElement: programs.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'MedicalProcedure',
        name: p.name,
        description: p.description,
        url: `${SITE_URL}/programs#${p.slug}`,
      },
    })),
  }
}

export { insurers }
