import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer6 from '@/components/footer/Footer6'
import Hero from './components/Hero'
import TechnicalDetails from './components/TechnicalDetails'
import Features1 from './components/Features1'
import ProductsList from './components/ProductsList'
import ProductVideo from './components/ProductVideo'

import React from 'react'

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
      <main>
        <Hero />
        <TechnicalDetails />
        <Features1 />
        {/* <ProductImage /> */}
        {/* <Features2 /> */}
        <ProductsList />
        <ProductVideo />
        {/* <Testimonials /> */}
      </main>
      <Footer6 />
    </>
  )
}

export default page
