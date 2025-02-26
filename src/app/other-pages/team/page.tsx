import React from 'react'
import Hero from './components/Hero'
import TeamMembers from './components/TeamMembers'
import Achievements from './components/Achievements'
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
        <TeamMembers />
        <Achievements />
      </main>
      <Footer1 />
    </>
  )
}

export default page
