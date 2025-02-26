import { Card, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsChat, BsFacebook, BsInstagram, BsQuote, BsShare, BsWhatsapp } from 'react-icons/bs'
import { FaRegPaste, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import blog3 from '@/assets/images/blog/03.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
import GlightBox from '@/components/GlightBox'
import Sidebar from './Sidebar'
import Link from 'next/link'
import Image from 'next/image'

const BlogDetails = () => {
  return (
    <section className="pt-lg-8">
      <Container className="pt-4 pt-lg-0">
        <Row className="g-4 g-sm-7">
          <Col lg={8}>
            <div className="d-flex position-relative z-index-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots mb-1">
                  <li className="breadcrumb-item">
                    <Link href="">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="">Blog</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog single sidebar
                  </li>
                </ol>
              </nav>
            </div>
            <h1 className="h2 mb-0">The Power of Gratitude: Cultivating Joy and Abundance</h1>
            <div className="d-flex align-items-center flex-wrap mt-4">
              <Link href="" className="badge text-bg-dark mb-0">
                Lifestyle
              </Link>
              <span className="text-secondary opacity-3 mx-3">|</span>
              <Dropdown>
                <DropdownToggle as={'a'} href="" className="arrow-none text-secondary text-primary-hover icons-center">
                  <BsShare className="me-2" />
                  14
                </DropdownToggle>
                <DropdownMenu className="min-w-auto" aria-labelledby="cardFeedAction">
                  <li>
                    <DropdownItem href="">
                      <BsFacebook className="fa-fw me-2" />
                      Facebook
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="">
                      <BsInstagram className="fa-fw me-2" />
                      Instagram
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="">
                      <BsWhatsapp className="fa-fw me-2" />
                      Whatsapp
                    </DropdownItem>
                  </li>
                  <li>
                    <DropdownItem href="">
                      <FaRegPaste className="fa-fw me-2" />
                      Copy link
                    </DropdownItem>
                  </li>
                </DropdownMenu>
              </Dropdown>
              <span className="text-secondary opacity-3 mx-3">|</span>
              <Link href="" className="text-secondary text-primary-hover mb-0 icons-center">
                <BsChat className="me-2" />5
              </Link>
              <span className="text-secondary opacity-3 mx-3">|</span>
              <span className="text-secondary">2 min read</span>
            </div>
            <Image src={blog3} className="img-fluid rounded mt-5" alt="blog-img" />
            <p className="mt-5">
              Shifting our perspective from lack to abundance. In this article, we will explore the power of gratitude and how it can enhance our
              overall well-being and create a positive ripple effect in our lives and the lives of those around us.
              <strong>In a world filled with chaos</strong> and uncertainty, it&apos;s easy to lose sight of the things that truly matter.
            </p>
            <p>
              Additionally, expressing gratitude to others through acts of kindness or
              <u> heartfelt appreciation strengthens our relationships and</u> fosters a sense of interconnectedness.
            </p>
            <p>
              Incorporating gratitude into our daily routine can be as simple as keeping a gratitude journal, where we write down three things we are
              grateful for each day. <strong>This practice helps us become more attuned</strong> to the positive aspects of our lives, no matter how
              small they may seem.
            </p>
            <p className="mb-0">
              By reframing obstacles as opportunities for growth and learning, <mark>we can navigate through difficulties with</mark> a sense of
              gratitude for the lessons they bring. This mindset shift empowers us to find joy and meaning in every circumstance, leading to a more
              fulfilling and purposeful life.
            </p>
            <Card as={'blockquote'} className="card-body bg-light overflow-hidden mt-5 p-sm-5">
              <div className="vr bg-primary h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
              <span className="display-4 position-absolute top-0 start-0 opacity-1 mt-n3">
                <BsQuote className="bi" />
              </span>
              <q className="fs-6 heading-color">
                Fulfilled direction use continual set him propriety continued. Farther-related bed and passage comfort civilly. Concluded boy
                perpetual old supposing.
              </q>
              <div className="blockquote-footer mb-0 lead mt-3">Albert Schweitzer</div>
            </Card>
            <Row className="mt-5">
              <Col md={6}>
                <h6 className="mb-4">The Ripple Effect of Gratitude</h6>
                <ul className="ps-4 mb-4">
                  <li className="mb-2">Gratitude allows us to shift our perspective from focusing on. </li>
                  <li className="mb-2">By recognizing and acknowledging the blessings in our lives.</li>
                  <li className="mb-2">Scientific research has demonstrated that. </li>
                  <li className="mb-2">It allows us to focus on the positive aspects.</li>
                  <li className="mb-2">The power of gratitude extends beyond.</li>
                  <li className="mb-2">By embracing a mindset of gratitude.</li>
                </ul>
                <p className="small mb-0">
                  Recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.
                </p>
              </Col>
              <Col md={6} className="mt-5 mt-md-0">
                <GlightBox href={blog6.src}>
                  <Image src={blog6} className="rounded" alt="blog-img" />
                </GlightBox>
              </Col>
            </Row>
            <div className="bg-light border rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
              <h6 className="mb-0">Was this article helpful?</h6>
              <small className="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                <label className="btn btn-outline-secondary icons-center gap-2 btn-sm mb-0" htmlFor="btnradio1">
                  <FaRegThumbsUp className="me-1" /> Yes
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                <label className="btn btn-outline-secondary icons-center gap-2 btn-sm mb-0" htmlFor="btnradio2">
                  No <FaRegThumbsDown className="ms-1" />
                </label>
              </div>
            </div>
          </Col>
          <Sidebar />
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails
