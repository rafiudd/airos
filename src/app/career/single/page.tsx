import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import React from 'react'
import CareerDetail from './components/CareerDetail'
import CTA from '../components/CTA'
import Footer1 from '@/components/footer/Footer1'

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
        <CareerDetail />

        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default page
