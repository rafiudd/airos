import React from 'react'
import Hero from './component/Hero'
import MarketingVideo from './component/MarketingVideo'
import Benefits from './component/Benefits'
import Steps from './component/Steps'
import CTA from './component/CTA'
import Footer1 from '@/components/footer/Footer6'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const page = () => {
  return (
    <>
      <TopNavigationBar
        data-bs-theme="dark"
        menuProps={{
          ulClassName: 'ms-auto',
          showContactUs: true,
          showDocs: true,
        }}
        darkButton={{ text: 'Buy Now!', size: 'sm' }}
      />
      <main>
        <Hero />
        <MarketingVideo />
        <Benefits />
        <Steps />
        {/* <Pricing /> */}
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default page
