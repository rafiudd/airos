import React from 'react'
import MainTitle from './components/MainTitle'
import CheckoutDetail from './components/CheckoutDetail'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer8 from '@/components/footer/Footer8'

const page = () => {
  return (
    <>
      <TopNavigationBar showSearchInput showShoppingCart menuProps={{ showContactUs: true, ulClassName: 'ms-xl-5' }} />
      
      <main>
        <MainTitle />
        <CheckoutDetail />
      </main>
      <Footer8 />
    </>
  )
}

export default page
