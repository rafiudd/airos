import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import IntegrationDetail from './components/IntegrationDetail'

const page = () => {
  return (
    <div>
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
        <IntegrationDetail />
      </main>

      <Footer1 />
    </div>
  )
}

export default page
