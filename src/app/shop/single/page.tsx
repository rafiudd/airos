import React from 'react'
import Hero from './components/Hero'
import Specification from './components/Specification'
import RatingAndReview from './components/RatingAndReview'
import SimilarProducts from './components/SimilarProducts'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer8 from '@/components/footer/Footer8'

const page = () => {
  return (
    <>
      <TopNavigationBar showSearchInput showShoppingCart menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }} />

      <main>
        <Hero />

        <Specification />

        <RatingAndReview />

        <SimilarProducts />
      </main>

      <Footer8 />
    </>
  )
}

export default page
