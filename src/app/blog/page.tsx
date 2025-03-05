import React from 'react'
import Hero from './components/Hero'
import Blogs from './components/Blogs'
import Footer1 from '@/components/footer/Footer6'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          ulClassName: 'ms-auto',
          showContactUs: true,
          showDocs: true,
        }}
        darkButton={{ text: 'Buy Now!', size: 'sm' }}
      />
      <Hero />
      <Blogs />
      <Footer1 />
    </>
  )
}

export default page
