import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import FAQs from './components/FAQs'

const Pricing = () => {
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
        data-bs-theme="dark"
      />

      <main className="price-wrap">
        <Hero />
        <Features />
        <CTA />
        <FAQs />
      </main>
      <Footer1 />
    </>
  )
}

export default Pricing
