import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqs } from '../data'

const Faqs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={5}>
            <h2 className="mb-5">You have questions we have answers</h2>
          </Col>
          <Col md={7}>
            <Accordion defaultActiveKey={'0'} className="accordion-icon accordion-bg-light" id="accordionFaq">
              {faqs.map((faq, idx) => (
                <AccordionItem eventKey={`${idx}`} className="mb-3" key={idx}>
                  <AccordionHeader as="div" className="font-base" id="heading-1">
                    <div className="fw-semibold">{faq.question}</div>
                  </AccordionHeader>
                  <AccordionBody className="mt-3 pb-0">{faq.answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faqs
