import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Details from './components/Details'
import CTA from './components/CTA'

const TermsNConditions = () => {
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
      <main>
        <Details />

        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default TermsNConditions
