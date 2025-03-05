import React from 'react'
import BlogDetails from './components/BlogDetails'
import Footer1 from '@/components/footer/Footer1'
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
      <BlogDetails />
      <Footer1 />
    </>
  )
}

export default page
