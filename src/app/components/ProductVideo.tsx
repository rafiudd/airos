import Jarallax from '@/components/Jarallax'
import GlightBox from '@/components/GlightBox'
import { BsPlayFill } from 'react-icons/bs'
import videoImg from '@/assets/images/products/video-img.jpg'

const ProductVideo = () => {
  return (
    <Jarallax
      className="bg-parallax position-relative h-400px h-xl-600px"
      style={{
        background: `url(${videoImg.src}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <GlightBox
          href="https://www.youtube.com/embed/tXHviS-4ygo"
          className="btn btn-icon btn-xl btn-dark btn-round mb-0 stretched-link"
          data-glightbox=""
          data-gallery="Video">
          <BsPlayFill size={34} className="fa-lg" />
        </GlightBox>
      </div>
    </Jarallax>
  )
}

export default ProductVideo
