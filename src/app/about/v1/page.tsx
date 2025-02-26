import React from 'react'
import Hero from './component/Hero'
import Video from './component/Video'
import Counter from './component/Counter'
import About from './component/About'
import CTA from './component/CTA'
import Team from './component/Team'
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
        <Video />
        <Counter />
        <About />
        <CTA />
        <Team />
      </main>
      <Footer1 />
    </>
  )
}

export default page
