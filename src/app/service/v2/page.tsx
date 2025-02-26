import React from 'react'
import Hero from './component/Hero'
import Features from './component/Features'
import CTA from './component/CTA'
import FAQs from './component/FAQs'
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
        <Features />
        <CTA />
        <FAQs />
      </main>
      <Footer1 />
    </>
  )
}

export default page
