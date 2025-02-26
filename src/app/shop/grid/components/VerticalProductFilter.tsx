'use client'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs'
import { currency } from '@/states/constants'
import { categories } from '../data'

const VerticalProductFilter = () => {
  return (
    <>
      <Accordion defaultActiveKey={'1'} className="accordion-alt" id="accordionExample">
        <AccordionItem eventKey="0">
          <AccordionHeader>
            <div className="fs-6 fw-semibold">Availability</div>
          </AccordionHeader>
          <AccordionBody as={'form'}>
            <div className="form-check">
              <input className="form-check-input focus-shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="form-check mt-2">
              <input className="form-check-input focus-shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                New Arrival
              </label>
            </div>
            <div className="form-check mt-2">
              <input className="form-check-input focus-shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                On Stock Only
              </label>
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="1">
          <AccordionHeader>
            <div className="fs-6 fw-semibold">Categories</div>
          </AccordionHeader>
          <AccordionBody as={'form'}>
            {categories.map((category, idx) => (
              <div className={`form-check ${idx === 0 ? '' : 'mt-2'}`} key={idx}>
                <input className="form-check-input" type="checkbox" id={`category${idx}`} />
                <label className="form-check-label heading-color" htmlFor={`category${idx}`}>
                  {category.name}
                </label>
                <span className="small float-end">({category.total})</span>
              </div>
            ))}
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="2">
          <AccordionHeader>
            <div className="fs-6 fw-semibold">Price</div>
          </AccordionHeader>
          <AccordionBody as={'form'}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="price1" />
              <label className="form-check-label heading-color" htmlFor="price1">
                {currency}0 to {currency}200
              </label>
            </div>

            <div className="form-check mt-2">
              <input className="form-check-input" type="checkbox" id="price2" />
              <label className="form-check-label heading-color" htmlFor="price2">
                {currency}200 to {currency}500
              </label>
            </div>

            <div className="form-check mt-2">
              <input className="form-check-input" type="checkbox" id="price3" />
              <label className="form-check-label heading-color" htmlFor="price3">
                {currency}500 to {currency}1500
              </label>
            </div>

            <div className="form-check mt-2">
              <input className="form-check-input" type="checkbox" id="price4" />
              <label className="form-check-label heading-color" htmlFor="price4">
                {currency}1500 to more
              </label>
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="3">
          <AccordionHeader>
            <div className="fs-6 fw-semibold">Color</div>
          </AccordionHeader>
          <AccordionBody as={'form'}>
            <div className="color-check-radio">
              <input className="form-check-input" type="radio" name="flexRadiocolor" id="flexRadiocolor1" style={{ backgroundColor: '#9a0a0a' }} />
              <label className="form-check-label" htmlFor="flexRadiocolor1" />
              <input className="form-check-input" type="radio" name="flexRadiocolor" id="flexRadiocolor2" style={{ backgroundColor: '#32C7F5' }} />
              <label className="form-check-label" htmlFor="flexRadiocolor2" />
              <input className="form-check-input" type="radio" name="flexRadiocolor" id="flexRadiocolor3" style={{ backgroundColor: '#F7C32E' }} />
              <label className="form-check-label" htmlFor="flexRadiocolor3" />
              <input className="form-check-input" type="radio" name="flexRadiocolor" id="flexRadiocolor4" style={{ backgroundColor: '#333369' }} />
              <label className="form-check-label" htmlFor="flexRadiocolor4" />
            </div>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey="4">
          <AccordionHeader>
            <div className="fs-6 fw-semibold">Rating star</div>
          </AccordionHeader>
          <AccordionBody as={'form'}>
            <ul className="list-inline mb-0 g-3">
              {Array(5)
                .fill(0)
                .map((_star, idx) => (
                  <li className="list-inline-item mb-0" key={idx}>
                    <input type="checkbox" className="btn-check" id={`btn-star-${idx}`} />
                    <label className="btn btn-sm btn-light btn-primary-soft-check icons-center" htmlFor={`btn-star-${idx}`}>
                      {idx + 1}
                      <BsStarFill />
                    </label>
                  </li>
                ))}
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>

      <div className="d-flex justify-content-between p-2 p-xl-0 mt-xl-3">
        <button className="btn btn-link text-primary-hover p-0 mb-0">Clear all</button>
        <button className="btn btn-primary mb-0">Filter Result</button>
      </div>
    </>
  )
}

export default VerticalProductFilter
