import { Col, Container, Row } from 'react-bootstrap'
import { helpData } from '../data'
import HelpCard from './HelpCard'

const Help = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-xl-6">
          {helpData.map((help, idx) => (
            <Col md={6} lg={4} key={idx}>
              <HelpCard help={help} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Help
