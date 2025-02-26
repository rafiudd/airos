import React from 'react'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Features from './components/Features'
import Features2 from './components/Features2'
import Features3 from './components/Features3'
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
        <Tools />
        <Features />
        <Features2 />
        <Features3 />
      </main>
      <Footer1 />
    </>
  )
}

export default page
