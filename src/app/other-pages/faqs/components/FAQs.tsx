import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { faqData } from '../data'

const FAQs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={10} className="mx-auto">
            <Accordion className="accordion-icon accordion-border" defaultActiveKey="0">
              {faqData.map((item, idx) => (
                <AccordionItem className={`${idx == 0 ? 'mb-2' : 'mb-3'}`} key={idx} eventKey={idx.toString()}>
                  <AccordionHeader as={'p'} className="font-base mb-3">
                    <span className="fw-semibold">{item.question}</span>
                  </AccordionHeader>

                  <AccordionBody>{item.answer}</AccordionBody>
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
