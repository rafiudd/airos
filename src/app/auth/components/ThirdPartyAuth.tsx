import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const ThirdPartyAuth = () => {
  return (
    <Row className="mt-5">
      <Col xxl={6} className="d-grid">
        <Link href="" className="btn border flex-centered bg-light mb-2 mb-xxl-0">
          <FcGoogle size={18} className="me-2" />
          Signup with Google
        </Link>
      </Col>
      <Col xxl={6} className="d-grid">
        <Link href="" className="btn border flex-centered bg-light mb-0">
          <FaFacebookF className="text-facebook me-2" />
          Signup with Facebook
        </Link>
      </Col>

      <div className="position-relative my-5">
        <hr />
        <p className="small position-absolute top-50 start-50 translate-middle bg-body px-4">Or</p>
      </div>
    </Row>
  )
}

export default ThirdPartyAuth
