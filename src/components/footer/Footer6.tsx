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
              <h5>Bergabung dengan AiROS</h5>
              <p className="mb-0">Siap tumbuh bersama AIROS? Hubungi kami sekarang!</p>
            </div>
            <Link href="https://wa.me/628112998881?text=Saya%20tertarik%20dengan%20produk%20AiROS" className="btn btn-white mb-0 ms-auto flex-shrink-0">
              Hubungi Kami
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
