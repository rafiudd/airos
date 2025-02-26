import React from 'react'
import Hero from './components/Hero'
import Help from './components/Help'
import FAQs from './components/FAQs'
import SupportLinks from './components/SupportLinks'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <Hero />
        <Help />
        <FAQs />
        <SupportLinks />
      </main>

      <Footer1 />
    </>
  )
}

export default page
