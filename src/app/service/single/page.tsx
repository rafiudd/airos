import React from 'react'
import Hero from './component/Hero'
import MarketingVideo from './component/MarketingVideo'
import Benefits from './component/Benefits'
import Steps from './component/Steps'
import Pricing from './component/Pricing'
import CTA from './component/CTA'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

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
        data-bs-theme="dark"
      />
      <main>
        <Hero />
        <MarketingVideo />
        <Benefits />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default page
