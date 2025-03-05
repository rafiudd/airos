'use client'
import GlightBox from '@/components/GlightBox'
import { BsPlayFill } from 'react-icons/bs'
import backgroundImg5 from '@/assets/images/bg/05.jpg'
import { Container } from 'react-bootstrap'

const MarketingVideo = () => {
  return (
    <section className="pt-0 mt-n7">
      <Container>
        <div
          className="position-relative h-300px h-md-400px rounded-3"
          style={{ background: `url(${backgroundImg5.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-overlay bg-dark opacity-5" />
          <div className="position-absolute top-50 start-50 translate-middle z-index-2">
            <GlightBox
              href="https://www.youtube.com/embed/tXHviS-4ygo"
              className="btn btn-icon btn-xl btn-white btn-round mb-0 stretched-link"
              data-glightbox
              data-gallery="Video">
              <BsPlayFill size={35} className="fa-lg" />
            </GlightBox>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MarketingVideo
