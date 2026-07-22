export const PHONE_DISPLAY = '(419) 770-3487'
export const PHONE_HREF = 'tel:+14197703487'
export const EMAIL = 'admissions@elevaterecoveryoh.com'

/**
 * Canonical site configuration. Single source of truth for organization-level
 * metadata used across pages, SEO tags, and JSON-LD structured data.
 */
export const siteConfig = {
  name: 'Elevate Recovery',
  legalName: 'Elevate Recovery, LLC',
  // Public production URL. Override at build time with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.elevaterecoveryoh.com',
  description:
    'Joint Commission Certified addiction treatment in Toledo and Northwood, Ohio. A full continuum of compassionate, evidence-based care — medical detox, residential, PHP, IOP, outpatient, and medication-assisted treatment.',
  tagline: 'Rise above addiction. Reclaim your life.',
  phone: PHONE_DISPLAY,
  // Bare tel: target without scheme — pages prefix `tel:` themselves.
  phoneHref: '+14197703487',
  email: EMAIL,
  founded: '2016',
  social: {
    facebook: 'https://www.facebook.com/elevaterecovery',
    instagram: 'https://www.instagram.com/elevaterecovery',
    linkedin: 'https://www.linkedin.com/company/elevaterecovery',
  },
} as const

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Locations', href: '/locations' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
] as const

export type Program = {
  slug: string
  name: string
  short: string
  description: string
  level: string
  features: string[]
}

export const programs: Program[] = [
  {
    slug: 'medical-detox',
    name: 'Medical Detox',
    level: 'Highest level of care',
    short:
      'Around-the-clock medical supervision to safely manage withdrawal and stabilize the body.',
    description:
      'Withdrawal can be dangerous when attempted alone. Our medically supervised detox provides 24/7 nursing care, physician oversight, and comfort medications to ease symptoms and keep you safe as substances leave your system.',
    features: [
      '24/7 nursing and physician oversight',
      'Comfort-focused withdrawal management',
      'Continuous vitals monitoring',
      'Seamless transition into ongoing treatment',
    ],
  },
  {
    slug: 'residential',
    name: 'Residential Treatment',
    level: 'Live-in care',
    short:
      'Immersive, structured care in a safe, home-like environment away from daily triggers.',
    description:
      'Residential treatment surrounds you with structure, community, and clinical support 24 hours a day. You step away from the stressors of daily life to focus fully on healing through individual therapy, group work, and holistic programming.',
    features: [
      'Comfortable, home-like living spaces',
      'Daily individual and group therapy',
      'Structured routine and peer community',
      'Nutritious meals and wellness activities',
    ],
  },
  {
    slug: 'php',
    name: 'Partial Hospitalization (PHP)',
    level: 'Day treatment',
    short:
      'Full days of structured clinical care while returning home or to sober living in the evening.',
    description:
      'Our PHP delivers a high level of clinical care during the day—typically five to six hours, five days a week—while allowing clients to return home or to supportive housing at night. It is an ideal step down from residential care.',
    features: [
      '5–6 hours of programming, 5 days a week',
      'Psychiatric and medical support',
      'Evidence-based group and individual therapy',
      'Family involvement and education',
    ],
  },
  {
    slug: 'iop',
    name: 'Intensive Outpatient (IOP)',
    level: 'Flexible structure',
    short:
      'Several sessions a week designed to fit around work, school, and family commitments.',
    description:
      'Intensive Outpatient Programming offers robust support—usually three sessions per week—while you maintain work, school, and family responsibilities. IOP helps build lasting recovery skills and accountability in the real world.',
    features: [
      'Day and evening tracks available',
      'Relapse-prevention and coping skills',
      'Process and educational groups',
      'Ongoing individual counseling',
    ],
  },
  {
    slug: 'outpatient',
    name: 'Outpatient & Aftercare',
    level: 'Continuing care',
    short:
      'Ongoing counseling and alumni support to protect and strengthen long-term recovery.',
    description:
      'Recovery is a lifelong journey. Our outpatient and aftercare services provide continued counseling, alumni community, and relapse-prevention planning so progress made in treatment becomes a foundation for lasting change.',
    features: [
      'Weekly individual and group therapy',
      'Alumni program and community events',
      'Relapse-prevention planning',
      'Connection to community resources',
    ],
  },
  {
    slug: 'mat',
    name: 'Medication-Assisted Treatment (MAT)',
    level: 'Integrated medical care',
    short:
      'FDA-approved medications combined with therapy to reduce cravings and support recovery.',
    description:
      'For opioid and alcohol use disorders, MAT pairs FDA-approved medications with counseling and behavioral therapies. This whole-person approach reduces cravings, eases withdrawal, and significantly improves treatment outcomes.',
    features: [
      'Physician-managed medication plans',
      'Combined with counseling and therapy',
      'Reduces cravings and withdrawal',
      'Individualized, regularly reviewed care',
    ],
  },
]

export type Location = {
  slug: string
  city: string
  name: string
  addressLines: string[]
  /** Street line only, e.g. "3900 Sunforest Ct" */
  address: string
  /** "City, ST ZIP" line, e.g. "Toledo, OH 43623" */
  cityStateZip: string
  locality: string
  region: string
  postalCode: string
  geo: { lat: number; lng: number }
  phoneDisplay: string
  phoneHref: string
  image: string
  blurb: string
}

export const locations: Location[] = [
  {
    slug: 'toledo',
    city: 'Toledo, Ohio',
    name: 'Elevate Recovery — Toledo',
    addressLines: ['3900 Sunforest Ct', 'Toledo, OH 43623'],
    address: '3900 Sunforest Ct',
    cityStateZip: 'Toledo, OH 43623',
    locality: 'Toledo',
    region: 'OH',
    postalCode: '43623',
    // Approximate coordinates for 43623 (west Toledo). Fine-tune if needed.
    geo: { lat: 41.6875, lng: -83.637 },
    phoneDisplay: '(419) 770-3487',
    phoneHref: 'tel:+14197703487',
    image: '/location-toledo.png',
    blurb:
      'Our Toledo center provides accessible outpatient, IOP, PHP, and medication-assisted treatment for the greater Toledo and Lucas County community.',
  },
  {
    slug: 'northwood',
    city: 'Northwood, Ohio',
    name: 'Elevate Recovery — Northwood',
    addressLines: ['3055 E Plaza Blvd', 'Northwood, OH 43619'],
    address: '3055 E Plaza Blvd',
    cityStateZip: 'Northwood, OH 43619',
    locality: 'Northwood',
    region: 'OH',
    postalCode: '43619',
    // Approximate coordinates for Northwood 43619 (east of Toledo). Fine-tune if needed.
    geo: { lat: 41.616, lng: -83.487 },
    phoneDisplay: '(419) 770-3487',
    phoneHref: 'tel:+14197703487',
    image: '/location-northwood.jpg',
    blurb:
      'Our Northwood center serves East Toledo, Wood County, and the surrounding communities with outpatient, IOP, PHP, and medication-assisted treatment.',
  },
]

export const conditions = [
  'Alcohol Use Disorder',
  'Opioid & Heroin Addiction',
  'Fentanyl Dependence',
  'Prescription Drug Misuse',
  'Cocaine & Stimulant Use',
  'Benzodiazepine Dependence',
  'Co-Occurring Mental Health',
  'Polysubstance Use',
]

export const insurers = [
  'Aetna',
  'Anthem Blue Cross Blue Shield',
  'Cigna',
  'UnitedHealthcare',
  'Medical Mutual of Ohio',
  'Humana',
  'Ohio Medicaid',
  'TRICARE',
]

/** Counties served, used on the locations page and in LocalBusiness areaServed. */
export const serviceAreas = [
  'Lucas County',
  'Wood County',
  'Fulton County',
  'Ottawa County',
  'Sandusky County',
  'Henry County',
]

export type Faq = { q: string; a: string }

/**
 * Canonical admissions FAQs. Rendered on the admissions page AND emitted as
 * FAQPage JSON-LD, so both stay in sync from one source.
 */
export const admissionsFaqs: Faq[] = [
  {
    q: 'How quickly can I start treatment?',
    a: 'In many cases, we can complete verification and an assessment the same day you call, with admission often possible within 24–48 hours.',
  },
  {
    q: 'Is my information confidential?',
    a: 'Yes. Every conversation and submission is fully confidential and protected under federal privacy laws, including HIPAA and 42 CFR Part 2.',
  },
  {
    q: 'What if I don’t have insurance?',
    a: 'We’ll discuss self-pay options and help you explore Ohio Medicaid and other resources. Cost should never be the reason you don’t get help.',
  },
  {
    q: 'Can I get help for a loved one?',
    a: 'Absolutely. Many people reach out on behalf of a family member or friend. We’ll guide you on how to support them and start the conversation.',
  },
  {
    q: 'Do you offer medication-assisted treatment (MAT)?',
    a: 'Yes. For opioid and alcohol use disorders we offer physician-managed MAT using FDA-approved medications, combined with counseling and behavioral therapy.',
  },
  {
    q: 'Which insurance plans do you accept?',
    a: 'We are in-network with most major insurers, including Aetna, Anthem Blue Cross Blue Shield, Cigna, UnitedHealthcare, Medical Mutual of Ohio, Humana, Ohio Medicaid, and TRICARE. We will verify your specific benefits at no cost.',
  },
]
