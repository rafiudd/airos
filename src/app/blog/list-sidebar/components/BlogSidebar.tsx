import { Button, Card, CardTitle, Form, FormControl } from 'react-bootstrap'
import advImg from '@/assets/images/blog/adv.jpg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

const BlogSidebar = () => {
  const popularTags = [
    'blog',
    'business',
    'bootstrap',
    'data science',
    'deep learning',
    'Adventure',
    'Community',
    'Tutorials',
    'Interview',
    'Photography',
    'Classic',
  ]

  return (
    <>
      <Card className="card-body bg-light p-4">
        <svg className="mb-3" width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1113_392)">
            <path
              className="fill-primary"
              d="M22.5492 24.7427C23.8548 25.6131 26.1456 25.6132 27.4515 24.7426C27.4517 24.7425 27.452 24.7423 27.4522 24.7422L49.7048 9.90706C48.9749 7.79611 46.9686 6.27539 44.6128 6.27539H5.38754C3.03156 6.27539 1.0254 7.79611 0.29541 9.90706L22.5485 24.7423C22.5488 24.7425 22.549 24.7425 22.5492 24.7427Z"
            />
            <path
              className="fill-mode"
              d="M29.077 27.1812C29.0767 27.1814 29.0765 27.1816 29.0763 27.1817C27.9335 27.9435 26.4665 28.3244 25 28.3244C23.5332 28.3244 22.0668 27.9436 20.9239 27.1816C20.9237 27.1815 20.9236 27.1814 20.9234 27.1813L0 13.2324V38.3373C0 41.3077 2.41672 43.7244 5.38735 43.7244H44.6128C47.5834 43.7244 50 41.3077 50 38.3373V13.2324L29.077 27.1812Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_1113_392">
              <rect width={50} height={50} fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h6 className="mb-3">Get the latest Mizzle article delivered to your inbox</h6>
        <Form>
          <FormControl type="email" className="mb-2" placeholder="Email address" />
          <Button type="submit" variant="dark" className="mb-0">
            Subscribe
          </Button>
        </Form>
      </Card>
      <Card className="text-bg-dark mt-5">
        <Image src={advImg} className="card-img" alt="adv image" />
        <div className="card-img-overlay">
          <CardTitle>Advertisement</CardTitle>
        </div>
      </Card>
      <div className="mt-5">
        <h6 className="mb-3">Follow us on:</h6>
        <ul className="list-inline mb-0 icons-center gap-1">
          <li className="list-inline-item">
            
            <Link className="btn btn-round bg-facebook flex-centered" href="">
              <FaFacebookF className="fa-fw lh-base" />
            </Link>
          </li>
          <li className="list-inline-item">
            
            <Link className="btn btn-round bg-instagram flex-centered" href="">
              <FaInstagram className="fa-fw lh-base" />
            </Link>
          </li>
          <li className="list-inline-item">
            
            <Link className="btn btn-round bg-twitter flex-centered" href="">
              <FaTwitter className="fa-fw lh-base" />
            </Link>
          </li>
          <li className="list-inline-item">
            
            <Link className="btn btn-round bg-linkedin flex-centered" href="">
              <FaLinkedinIn className="fa-fw lh-base" />
            </Link>
          </li>
          <li className="list-inline-item">
            
            <Link className="btn btn-round bg-youtube flex-centered" href="">
              <FaYoutube className="fa-fw lh-base" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="align-items-center mt-5">
        <h6 className="mb-3 d-inline-block">Popular Tags:</h6>
        <ul className="list-inline mb-0 social-media-btn">
          {popularTags.map((tag, idx) => (
            <li className="list-inline-item" key={idx}>
              
              <Link className="btn btn-light btn-sm" href="">
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BlogSidebar
