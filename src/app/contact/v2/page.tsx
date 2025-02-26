import React from 'react'
import Hero from './components/Hero'
import Work from './components/Work'
import OfficeLocation from './components/OfficeLocation'
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
        <Work />
        <OfficeLocation />
      </main>
      <Footer1 />
    </>
  )
}

export default page
