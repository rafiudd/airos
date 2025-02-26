import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqData } from '../data'

const FAQs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={7} className="mx-auto">
            <h2 className="mb-5 text-center">You have questions we have answers</h2>

            <Accordion className="accordion-icon accordion-bg-light" defaultActiveKey="0">
              {faqData.map((item, idx) => (
                <AccordionItem key={idx} eventKey={idx.toString()}>
                  <AccordionHeader as={'p'} className="font-base mb-3">
                    <span className="fw-semibold">{item.question}</span>
                  </AccordionHeader>

                  <AccordionBody className="mb-2">{item.answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQs
