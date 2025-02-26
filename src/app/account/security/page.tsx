import { Row } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs'
import LinkedAccount from './components/LinkedAccount'
import LoggedInDevices from './components/LoggedInDevices'
import SecuritySettingCard from './components/SecuritySettingCard'
import SocialMediaProfile from './components/SocialMediaProfile'
import { FaSlidersH } from 'react-icons/fa'

const page = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
        <h1 className="h3 mb-0">Account security</h1>

        <button
          className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar">
          <FaSlidersH className="fas" /> Menu
        </button>
      </div>

      <form>
        <SecuritySettingCard title="Activity Logs" description="You can save your all activity logs including unusual activity detected." />

        <SecuritySettingCard
          title="Two factor authentication"
          description="Secure your account with 2 Step security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app."
        />

        <LinkedAccount />
      </form>
      <div className="text-center my-5">
        <BsThreeDots />
      </div>
      <Row className="g-lg-6">
        <SocialMediaProfile />

        <LoggedInDevices />
      </Row>
    </>
  )
}

export default page
