import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import HelpDetails from './components/HelpDetails'
import SupportLinks from './components/SupportLinks'

const HelpDetail = () => {
  return (
    <>
      
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'mx-auto'
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <Hero />
        <HelpDetails />
        <SupportLinks />
      </main>

      <Footer1 />
    </>
  )
}

export default HelpDetail
