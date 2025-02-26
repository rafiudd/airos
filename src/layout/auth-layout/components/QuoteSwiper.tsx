import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa6'
import { FaStarHalfAlt } from 'react-icons/fa'
import { Card } from 'react-bootstrap'
import { quotesData } from '../data'

const QuoteSwiper = () => {
  return (
    <Swiper
      className="h-100"
      modules={[Autoplay, Pagination]}
      pagination={{
        el: ".swiper-pagination",
        clickable: true
      }}
      autoplay
    >

      {quotesData.map((quote, idx) => (
        <SwiperSlide key={idx}>
          <Card className="rounded-0 h-100" data-bs-theme="dark" style={{ backgroundImage: 'url(' + quote.image + ')', backgroundPosition: 'center left', backgroundSize: 'cover' }}>
            <div className="bg-overlay bg-dark opacity-5" />
            <div className="card-img-overlay z-index-2 p-7">
              <div className="d-flex flex-column justify-content-end h-100">

                <h4 className="fw-light">&qout;{quote.quote}&quot;</h4>

                <div className="d-flex justify-content-between mt-5">
                  <div>
                    <h5 className="mb-0">{quote.author}</h5>
                    <span>{quote.position}</span>
                  </div>

                  <ul className="list-inline mb-1">
                    <li className="list-inline-item small me-1"><FaStar size={16} className="fa-solid fa-star text-white" /></li>
                    <li className="list-inline-item small me-1"><FaStar size={16} className="fa-solid fa-star text-white" /></li>
                    <li className="list-inline-item small me-1"><FaStar size={16} className="fa-solid fa-star text-white" /></li>
                    <li className="list-inline-item small me-1"><FaStar size={16} className="fa-solid fa-star text-white" /></li>
                    <li className="list-inline-item small"><FaStarHalfAlt size={16} className="fa-solid fa-star-half-alt text-white" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination swiper-pagination-line mb-3" />
    </Swiper>
  )
}

export default QuoteSwiper