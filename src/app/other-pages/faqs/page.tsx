import Footer1 from '@/components/footer/Footer1'
import ActionBox from './components/ActionBox'
import FAQs from './components/FAQs'
import Hero from './components/Hero'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const FAQPage = () => {
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
        <Hero />
        <FAQs />
        <ActionBox />
      </main>

      <Footer1 />
    </>
  )
}

export default FAQPage
