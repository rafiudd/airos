'use client'
import avatar5 from '@/assets/images/avatar/05.jpg'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsChat, BsFacebook, BsInstagram, BsQuote, BsShare, BsWhatsapp } from 'react-icons/bs'
import { FaRegPaste, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import GlightBox from '@/components/GlightBox'

import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
import Link from 'next/link'
import Image from 'next/image'

const BlogDetails = () => {
  const popularTags = ['blog', 'business', 'bootstrap', 'data science', 'deep learning', 'deep learning', 'deep learning']

  return (
    <section className="pt-8 pt-xl-9">
      <Container>
        <Row className="g-4 g-lg-6">
          <Col lg={8} className="mx-auto text-center">
            <Link href="" className="badge text-bg-dark mb-4">
              Lifestyle
            </Link>
            <h1 className="h2 mb-0">The Power of Gratitude: Cultivating Joy and Abundance</h1>
            <div className="d-sm-flex justify-content-center justify-content-sm-between align-items-center text-start mt-5">
              <div className="d-flex justify-content-center align-items-center mb-5 mb-sm-0">
                <div className="avatar flex-shrink-0">
                  <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </div>
                <div className="ms-2">
                  <h6 className="mb-0">
                    <Link href="">Carolyn Ortiz</Link>
                  </h6>
                  <small>1 day ago</small>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center flex-wrap">
                <Dropdown>
                  <DropdownToggle as={'a'} href="" className="text-secondary text-primary-hover arrow-none icons-center">
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
            </div>
          </Col>
          <Col lg={10} className="mx-auto text-center">
            <Image src={blog2} className="img-fluid rounded" alt="blog-img" />
          </Col>
          <Col lg={8} className="mx-auto">
            <p>
              <span className="dropcap heading-color bg-light rounded px-2">T</span>he simple act of cultivating gratitude has the remarkable ability
              to bring joy and abundance into our lives, shifting our perspective from lack to abundance. In this article, we will explore the power
              of gratitude and how it can enhance our overall well-being and create a positive ripple effect in our lives and the lives of those
              around us. <strong>In a world filled with chaos</strong> and uncertainty, it&apos;s easy to lose sight of the things that truly matter.
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
          </Col>
          <Col lg={10} className="mx-auto">
            <Row className="g-4 g-lg-6">
              <Col sm={6}>
                <GlightBox href={blog4.src}>
                  <Image src={blog4} className="rounded" alt="blog-img" />
                </GlightBox>
              </Col>
              <Col sm={6}>
                <GlightBox href={blog6.src}>
                  <Image src={blog6} className="rounded" alt="blog-img" />
                </GlightBox>
              </Col>
            </Row>
          </Col>
          <Col lg={8} className="mx-auto">
            <h6>Step 1: Shifting Perspective: From Lack to Abundance</h6>
            <p className="mb-5">
              Gratitude has the unique ability to shift our perspective from focusing on what we lack to appreciating what we have. Often, we get
              caught up in the pursuit of material possessions or achievements, believing that they will bring us happiness. However, true abundance
              is found in appreciating the present moment and recognizing the blessings that already exist in our lives. Cultivating gratitude allows
              us to break free from the cycle of perpetual longing and embrace the abundance that surrounds us.
            </p>
            <h6>Step 2: The Ripple Effect of Gratitude</h6>
            <ul className="ps-4 mb-0">
              <li className="mb-2">
                Shift in Perspective: Gratitude allows us to shift our perspective from focusing on what we lack to appreciating what we have.
              </li>
              <li className="mb-2">By recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.</li>
              <li className="mb-2">Scientific research has demonstrated that gratitude positively impacts our mental and physical health. </li>
              <ul>
                <li className="mb-2">It allows us to focus on the positive aspects.</li>
                <li className="mb-2">It enables us to reframe obstacles as opportunities.</li>
                <li className="mb-2">The power of gratitude extends beyond ourselves.</li>
              </ul>
              <li className="mb-2">Enables us to reframe obstacles as opportunities for growth and learning. By embracing a mindset of gratitude.</li>
              <li className="mb-2">Recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.</li>
            </ul>
          </Col>
          <Col lg={10} className="mx-auto text-center">
            <Image src={blog3} className="img-fluid rounded" alt="blog-img" />
          </Col>
          <Col lg={8} className="mx-auto text-center">
            <h5 className="display-2 text-primary lh-0 mb-0">
              <BsQuote className="bi" />
            </h5>
            <q className="fs-4 heading-color">
              Fulfilled direction use continually set him propriety continued. Farther-related bed and passage comfort civilly. Concluded boy
              perpetual old supposing.
            </q>
            <div className="blockquote-footer mb-0 fs-6 mt-3">Albert Schweitzer</div>
            <hr className="my-6" />
            <div className="align-items-center">
              <h6>Popular Tags:</h6>
              <ul className="list-inline mb-0 icons-center flex-wrap gap-1">
                {popularTags.map((tag, idx) => (
                  <li key={idx} className="list-inline-item">
                   
                    <Link className="btn btn-outline-light btn-sm mb-lg-0" href="">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
              <h6 className="mb-0">Was this article helpful?</h6>
              <small className="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                <label className="btn btn-outline-secondary btn-sm mb-0 icons-center gap-1" htmlFor="btnradio1">
                  <FaRegThumbsUp className="me-1" /> Yes
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                <label className="btn btn-outline-secondary btn-sm mb-0 icons-center gap-1" htmlFor="btnradio2">
                 
                  No <FaRegThumbsDown className="ms-1" />
                </label>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails
