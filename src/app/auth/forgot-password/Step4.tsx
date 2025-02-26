import Link from 'next/link'
import { BsCheckCircle } from 'react-icons/bs'

const Step4 = () => {
  return (
    <div id="step-4" role="tabpanel" className="content fade text-center" aria-labelledby="steppertrigger4">
      <span className="display-2 text-success">
        <BsCheckCircle />
      </span>
      <h2 className="mb-1 mt-4">Password changed!</h2>
      <p className="mb-4">Your password has been changed successfully.</p>

      <div className="d-grid text-center">
        <Link href="/auth/sign-in" className="btn btn-dark mb-0">
          Back to main page
        </Link>
      </div>
    </div>
  )
}

export default Step4
