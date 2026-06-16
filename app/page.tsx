import { Hero } from '@/components/home/hero'
import { TrustStrip } from '@/components/home/trust-strip'
import { ProgramsOverview } from '@/components/home/programs-overview'
import { Approach } from '@/components/home/approach'
import { Conditions } from '@/components/home/conditions'
import { LocationsPreview } from '@/components/home/locations-preview'
import { Testimonials } from '@/components/home/testimonials'
import { InsurancePreview } from '@/components/home/insurance-preview'
import { CtaSection } from '@/components/cta-section'

export default function Page() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProgramsOverview />
      <Approach />
      <Conditions />
      <LocationsPreview />
      <Testimonials />
      <InsurancePreview />
      <CtaSection />
    </>
  )
}
