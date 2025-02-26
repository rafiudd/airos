import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from 'react-bootstrap'
import { faqData } from '../data'

const FAQs = () => {
  return (
    <section className="pt-0">
      <Container className="inner-container">
        <h3 className="text-center">Frequently Asked Questions</h3>

        <Accordion className="accordion-icon accordion-border-bottom mt-5" defaultActiveKey="0">
          {faqData.map((item, idx) => (
            <AccordionItem className="mb-3" key={idx} eventKey={idx.toString()}>
              <AccordionHeader as={'p'} className="font-base">
                <span className="fw-bold">{item.question}</span>
              </AccordionHeader>

              <AccordionBody>{item.answer}</AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export default FAQs
