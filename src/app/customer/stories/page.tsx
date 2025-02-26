import Footer1 from '@/components/footer/Footer1'
import React from 'react'
import Hero from './components/Hero'
import Stories from './components/Stories'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import TopNavigationBar from "@/components/topbar/TopNavigationBar";

const page = () => {
  return (
    <div>
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
        <Stories />
        <Testimonial />
        <CTA />
      </main>
      <Footer1 />
    </div>
  )
}

export default page
