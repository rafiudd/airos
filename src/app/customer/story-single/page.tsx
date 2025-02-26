import React from 'react'
import Hero from './components/Hero'
import Content from './components/Content'
import Stories from './components/Stories'
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
        showBuyNow
      />
      <main>
        <Hero />
        <Content />
        <Stories />
      </main>
      <Footer1 />
    </>
  )
}

export default page
