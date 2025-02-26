import React from 'react'
import Hero from './components/Hero'
import Map from './components/Map'
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
        <Map />
      </main>
      <Footer1 />
    </>
  )
}

export default page
