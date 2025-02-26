import { BsThreeDots } from 'react-icons/bs'
import PersonalInformationForm from './components/PersonalInformationForm'
import UpdateEmailForm from './components/UpdateEmailForm'
import UpdatePasswordForm from './components/UpdatePasswordForm'
import { FaSlidersH } from 'react-icons/fa'

const ProfilePage = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
          <h1 className="h3 mb-0">My profile</h1>
          <button
            className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar">
            <FaSlidersH className="fas" /> Menu
          </button>
        </div>
        <PersonalInformationForm />
        <div className="text-center my-5">
          <BsThreeDots />
        </div>

        <UpdateEmailForm />
        <div className="text-center my-5">
          <BsThreeDots />
        </div>

        <UpdatePasswordForm />
      </div>
    </>
  )
}

export default ProfilePage
