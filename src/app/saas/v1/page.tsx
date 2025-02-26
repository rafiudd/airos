import TopNavigationBar from '@/components/topbar/TopNavigationBar'

import Footer2 from '@/components/footer/Footer2'
import Link from 'next/link'
import { Alert } from 'react-bootstrap'
import { FaCrown } from 'react-icons/fa6'
import Blogs from './component/Blogs'
import Features1 from './component/Features1'
import Features2 from './component/Features2'
import Hero from './component/Hero'
import Integration from './component/Integration'
import Pricing from './component/Pricing'
import Tools from './component/Tools'

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
        data-bs-theme="dark">
        <Alert
          variant="success"
          dismissible
          className="alert py-2 m-0 bg-primary border-0 rounded-0  fade show text-center overflow-hidden"
          role="alert">
          <p className="text-white small m-0">
            <FaCrown className="fa-solid me-2" /> New version is here! Discover what&apos;s fresh and improved.
            <Link href="" className="btn btn-xs btn-white ms-2 mb-0">
              Click here to upgrade!
            </Link>
          </p>
        </Alert>
      </TopNavigationBar>

      <main>
        <Hero />
        <Tools />
        <Features1 />
        <Features2 />
        <Integration />
        <Pricing />
        <Blogs />
      </main>

      <Footer2 theme="dark" />
    </>
  )
}

export default page
