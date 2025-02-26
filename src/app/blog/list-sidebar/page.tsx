import Footer1 from '@/components/footer/Footer1'
import React from 'react'
import Hero from './components/Hero'
import BlogList from './components/BlogList'
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
      <Hero />
      <BlogList />
      <Footer1 />
    </>
  )
}

export default page
