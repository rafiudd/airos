import React from 'react'
import BlogDetails from './components/BlogDetails'
import RelatedBlogs from './components/RelatedBlogs'
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
      <BlogDetails />
      <RelatedBlogs />
      <Footer1 />
    </>
  )
}

export default page
