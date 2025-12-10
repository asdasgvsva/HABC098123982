import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import HowItWorks from '@/components/HowItWorks'
import CaseStudies from '@/components/CaseStudies'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <CaseStudies />
      <About />
      <Contact />
    </main>
  )
}

