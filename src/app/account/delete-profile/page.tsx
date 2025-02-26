import Link from 'next/link'
import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { FaSlidersH } from 'react-icons/fa'

const DeleteProfile = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 mb-sm-6">
        <h1 className="h3 mb-0">Delete profile</h1>
        <button
          className="btn btn-primary d-lg-none flex-shrink-0 ms-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar">
          <FaSlidersH className="fas" /> Menu
        </button>
      </div>

      <Card className="bg-transparent rounded-3 mb-0">
        <CardHeader className="bg-transparent border-bottom p-0 pb-3">
          <h6 className="card-header-title mb-0">Deactivate Account</h6>
        </CardHeader>
        <CardBody className="px-0">
          <span className="heading-color fw-bold">Before you go...</span>
          <ul className="mt-2">
            <li>
              Take a backup of your data <Link href="">Here</Link>
            </li>
            <li>If you delete your account, you will lose your all data.</li>
          </ul>
          <div className="form-check form-check-md my-4">
            <input className="form-check-input" type="checkbox" id="deleteaccountCheck" />
            <label className="form-check-label" htmlFor="deleteaccountCheck">
              Yes, I&apos;d like to delete my account
            </label>
          </div>
          <button className="btn btn-success-soft mb-2 mb-sm-0 me-1">Keep my account</button>
          <button className="btn btn-danger mb-0">Delete my account</button>
        </CardBody>
      </Card>
    </>
  )
}

export default DeleteProfile
