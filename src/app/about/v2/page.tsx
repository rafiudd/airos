import Footer2 from '@/components/footer/Footer2'
import React from 'react'
import FAQs from './component/FAQs'
import Testimonials from './component/Testimonials'
import About from './component/About'
import Hero from './component/Hero'
import Location from './component/Location'
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
        <About />
        <Testimonials />
        <Location />
        <FAQs />
      </main>
      <Footer2 data-bs-theme="dark" theme="dark" />
    </>
  )
}

export default page
