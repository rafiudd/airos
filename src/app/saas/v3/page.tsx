import React from 'react'
import Hero from './component/Hero'
import Features from './component/Features'
import Statistics from './component/Statistics'
import FeaturesAndIntegrations from './component/FeaturesAndIntegrations'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
import CTA from './component/CTA'
import Footer6 from '@/components/footer/Footer6'
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
        <Features />
        <Statistics />
        <FeaturesAndIntegrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer6 />
    </>
  )
}

export default page
