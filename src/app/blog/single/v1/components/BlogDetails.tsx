/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import avatar5 from '@/assets/images/avatar/05.jpg'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import { BsChat, BsFacebook, BsInstagram, BsShare, BsWhatsapp } from 'react-icons/bs'
import { FaRegPaste } from 'react-icons/fa6'

import blog2 from '@/assets/images/blog/blog-2.png'
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
            <h1 className="h2 mb-0">Hidrasi dan Kesehatan: Mengapa Kualitas Air Penting</h1>
            <div className="d-sm-flex justify-content-center justify-content-sm-between align-items-center text-start mt-5">
              <div className="d-flex justify-content-center align-items-center mb-5 mb-sm-0">
                <div className="avatar flex-shrink-0">
                  <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </div>
                <div className="ms-2">
                  <h6 className="mb-0">
                    <Link href="">Yoga Chandra</Link>
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
            <p className="mb-0">
            Hidrasi yang baik adalah kunci untuk menjaga kesehatan tubuh kita. Namun, tidak semua air diciptakan sama. Kualitas air yang Anda minum memainkan peran penting dalam bagaimana tubuh Anda berfungsi.
            Air yang terkontaminasi atau kaya mineral dapat menyebabkan masalah kesehatan, mulai dari gangguan pencernaan hingga gangguan elektrolit. Inilah mengapa memilih air berkualitas tinggi seperti AiROS sangat penting. AiROS tidak hanya murni dan bebas dari kontaminan, tetapi juga memberikan rasa yang segar dan jernih, membuatnya ideal untuk dikonsumsi setiap hari.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails
