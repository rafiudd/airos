import React from 'react'
import Hero from './component/Hero'
import TourVideo from './component/TourVideo'
import Steps from './component/Steps'
import Features from './component/Features'
import Integrations from './component/Integrations'
import Testimonials from './component/Testimonials'
import Blogs from './component/Blogs'
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
        hideThemeToggler
      />

      <main>
        <Hero />
        <TourVideo />
        <Steps />
        <Features />
        <Integrations />
        <Testimonials />
        <Blogs />
      </main>

      <Footer6 />
    </>
  )
}

export default page
