import React from 'react'
import Hero from './components/Hero'
import FeaturedCategory from './components/FeaturedCategory'
import TrendingProducts from './components/TrendingProducts'
import ShopFeatures from './components/ShopFeatures'
import LatestCollections from './components/LatestCollections'
import ProductBox from './components/ProductBox'
import BrandCollection from './components/BrandCollection'
import Footer6 from '@/components/footer/Footer6'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const page = () => {
  return (
    <>
      <TopNavigationBar showSearchInput showShoppingCart menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }} />

      <main>
        <Hero />
        <FeaturedCategory />
        <TrendingProducts />
        <ShopFeatures />
        <LatestCollections />
        <ProductBox />
        <BrandCollection />
      </main>
      <Footer6 />
    </>
  )
}

export default page
