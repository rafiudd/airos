import React from 'react'
import Hero from './components/Hero'
import IntegrationGrid from './components/IntegrationGrid'
import CTA from './components/CTA'
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
      />
      <main>
        <Hero />
        <IntegrationGrid />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default page
