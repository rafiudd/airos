import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqs } from '../data'

const FAQs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={7} className="mx-auto">
            <h2 className="text-center mb-5">You have questions we have answers</h2>
            <Accordion defaultActiveKey={'0'} className="accordion-icon accordion-bg-light" id="accordionFaq">
              {faqs.map((faq, idx) => (
                <AccordionItem eventKey={`${idx}`} key={idx} className="mb-3">
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

export default FAQs
