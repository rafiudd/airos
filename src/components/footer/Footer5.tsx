import LinksAround from './components/LinksAround'
import CreditWithTerms from './components/CreditWithTerms'
import { Container } from 'react-bootstrap'

const Footer5 = () => {
  return (
    <footer className="bg-dark pt-6 position-relative" data-bs-theme="dark">
      <Container className="position-relative mt-5">
        <LinksAround />

        <hr className="mt-4 mb-0" />

        <CreditWithTerms />
      </Container>
    </footer>
  )
}

export default Footer5
