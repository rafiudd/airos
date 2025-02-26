import React from 'react'
import Hero from './component/Hero'
import Features from './component/Features'
import Steps from './component/Steps'
import Team from './component/Team'
import Testimonials from './component/Testimonials'
import CTA from './component/CTA'
import Footer8 from '@/components/footer/Footer8'
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
        <Features />
        <Team />
        <Steps />
        <Testimonials />
        <CTA />
      </main>
      <Footer8 />
    </>
  )
}

export default page
