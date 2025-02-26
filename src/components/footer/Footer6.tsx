import LinksAround from './components/LinksAround'
import CreditWithTerms from './components/CreditWithTerms'
import { BsCursor } from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const Footer6 = () => {
  return (
    <footer className="bg-dark pt-6" data-bs-theme="dark">
      <Container className="position-relative mt-sm-5">
        <div className="bg-light border rounded p-4 p-sm-5 mb-7">
          <div className="d-md-flex align-items-center">
            <div className="icon-lg bg-dark text-white rounded flex-shrink-0">
              <BsCursor size={29} />
            </div>
            <div className="ms-md-4 my-4 my-md-0">
              <h5>Join our awesome community!</h5>
              <p className="mb-0">Share work, seek support, vote on components, stay updated and network with others.</p>
            </div>
            <Link href="" className="btn btn-white mb-0 ms-auto flex-shrink-0">
              Join now
            </Link>
          </div>
        </div>

        <LinksAround />

        <hr className="mt-4 mb-0" />

        <CreditWithTerms />
      </Container>
    </footer>
  )
}

export default Footer6
