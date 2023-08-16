export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/subpage-comps/competition-hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/subpage-comps/competition-zigzag'
import Testimonials from '@/components/testimonials'

export default function Competition() {
  return (
    <>
      <Hero />
      <Zigzag />
    </>
  )
}
