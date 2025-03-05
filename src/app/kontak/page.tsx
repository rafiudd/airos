import React from 'react'
import Hero from './components/Hero'
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
      <main>
        <Hero />
        {/* <Work />
        <OfficeLocation /> */}
      </main>
      <Footer1 />
    </>
  )
}

export default page
