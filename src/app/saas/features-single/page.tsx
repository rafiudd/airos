import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Solution from './components/Solution'
import CTA from './components/CTA'
import Faqs from './components/Faqs'
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
        <Features />
        <Solution />
        <CTA />
        <Faqs />
      </main>
      <Footer1 />
    </>
  )
}

export default page
