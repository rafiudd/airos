import React from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import Features from './component/Features'
import Clients from './component/Clients'
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
        data-bs-theme="dark"
      />

      <main>
        <Hero />
        <Services />
        <Features />
        <Clients />
      </main>
      <Footer1 />
    </>
  )
}

export default page
