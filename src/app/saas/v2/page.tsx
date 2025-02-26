import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import React from 'react'
import Hero from './component/Hero'
import Features from './component/Features'
import Steps from './component/Steps'
import Integration from './component/Integration'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
import CTA from './component/CTA'
import Footer1 from '@/components/footer/Footer1'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'mx-auto',
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <Hero />
        <Features />
        <Steps />
        <Integration />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default page
