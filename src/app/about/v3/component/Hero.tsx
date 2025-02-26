'sue client'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import about17 from '@/assets/images/about/17.jpg'
import about18 from '@/assets/images/about/18.jpg'
import about14 from '@/assets/images/about/14.jpg'
import GlightBox from '@/components/GlightBox'
import { FaPlay } from 'react-icons/fa6'
import Clients from './Clients'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-7 pt-md-8 pt-xl-9">
      <Container className="pt-5 pt-md-0">
        <Row>
          <Col lg={6} xl={5} className="mb-6 mb-lg-0">
            <div className="d-flex flex-column h-100">
              <h1 className="mb-4">
                Exploring the Heart of <span className="text-primary">Mizzle </span>
              </h1>
              <p className="mb-5 mb-xl-0">We transform ideas into solutions that exceed your expectations. Dive into our story to understand how.</p>
              <div className="mt-auto">
                <ul className="list-inline mb-3">
                  {Array(4)
                    .fill(0)
                    .map((_star, idx) => (
                      <li className="list-inline-item me-1" key={idx}>
                        <BsStarFill className="text-warning" />
                      </li>
                    ))}
                  <li className="list-inline-item me-0">
                    <BsStarHalf className="text-warning" />
                  </li>
                </ul>
                <q className="h6 fw-semibold mb-0">Using the Mizzle theme has been a seamless journey from beginning to end!</q>
                <p className="mb-0 mt-3 text-body-secondary">
                  <span className="heading-color fw-normal">Dennis Barrett</span> CEO of company
                </p>
                <Row className="row-cols-sm-2 mt-3">
                  <div className="cols">
                    <hr className="mb-4" />
                    <figure className="text-primary mb-2">
                      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.47802 7.91504C2.25 8.79835 2.25 9.94603 2.25 11.9996C2.25 14.3272 2.25 15.491 2.582 16.4252C3.16141 18.0555 4.44414 19.3382 6.07444 19.9176C7.0086 20.2496 8.1724 20.2496 10.5 20.2496H13.5C15.8276 20.2496 16.9914 20.2496 17.9256 19.9176C19.5559 19.3382 20.8386 18.0555 21.418 16.4252C21.75 15.491 21.75 14.3272 21.75 11.9996C21.75 9.94605 21.75 8.79838 21.522 7.91506L17.754 10.6916C16.6402 11.5123 15.7625 12.1591 15.002 12.6175C14.2228 13.087 13.5145 13.3922 12.7288 13.4926C12.2452 13.5543 11.7557 13.5543 11.2721 13.4926C10.4864 13.3923 9.77801 13.0871 8.99883 12.6176C8.23833 12.1593 7.36057 11.5125 6.24672 10.6918L2.47802 7.91504Z"
                          fill="currentColor"
                          fillOpacity="0.25"
                        />
                        <path
                          d="M3.09186 6.50448L7.10646 9.46247C8.25692 10.3101 9.07916 10.915 9.77305 11.3332C10.4551 11.7442 10.9602 11.941 11.4621 12.005C11.8195 12.0507 12.1813 12.0507 12.5387 12.005C13.0406 11.9409 13.5457 11.7441 14.2277 11.3331C14.9216 10.9149 15.7438 10.31 16.8942 9.46225L20.9082 6.50449C20.2273 5.38896 19.1792 4.52754 17.9256 4.082C16.9914 3.75 15.8276 3.75 13.5 3.75L10.5 3.75C8.17241 3.75 7.00861 3.75 6.07445 4.082C4.82082 4.52754 3.7727 5.38895 3.09186 6.50448Z"
                          fill="currentColor"
                        />
                      </svg>
                    </figure>
                    <p className="heading-color mb-0">1421 Coburn Hollow Road Metamora, IL 61548.</p>
                  </div>
                  <div className="cols">
                    <hr className="mb-4" />
                    <figure className="text-primary mb-2">
                      <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.5573 21.3204C14.2451 20.8085 15.174 20.072 16.1369 19.1733C18.0303 17.4062 20.1864 14.8931 20.7356 12.1471C21.8463 6.59263 17.3472 2.25 12.0001 2.25C6.65311 2.25 2.15361 6.5926 3.26469 12.1471C3.81397 14.8931 5.97011 17.4062 7.86344 19.1733C8.8263 20.072 9.75517 20.8085 10.443 21.3204C10.4887 21.3544 10.3745 21.2694 10.3908 21.2812C11.275 21.9193 12.7253 21.9193 13.6095 21.2812C13.6258 21.2694 13.5116 21.3544 13.5573 21.3204Z"
                          fill="currentColor"
                          fillOpacity="0.25"
                        />
                        <path
                          d="M15.5 11.1504C15.5 13.0834 13.933 14.6504 12 14.6504C10.067 14.6504 8.5 13.0834 8.5 11.1504C8.5 9.21739 10.067 7.65039 12 7.65039C13.933 7.65039 15.5 9.21739 15.5 11.1504Z"
                          fill="currentColor"
                        />
                      </svg>
                    </figure>
                    <Link href="" className="heading-color text-primary-hover text-decoration-underline mb-0">
                      example@gmail.com
                    </Link>
                  </div>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={6} xl={6} className="ms-auto h-100">
            <Row className="align-items-center">
              <Col xs={6} className="me-sm-n7">
                <div className="position-relative">
                  <figure className="text-primary position-absolute top-0 start-0 mt-n5 ms-n5">
                    <svg width={111} height={71} viewBox="0 0 111 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M92.4335 8.12935C92.4029 8.01892 92.3733 7.90798 92.3427 7.79755C90.075 8.424 87.8078 9.04993 85.5395 9.67638C85.5762 9.80665 85.6125 9.93744 85.6482 10.0687C87.9103 9.42244 90.1719 8.77564 92.4335 8.12935M15.3001 60.9486C14.1257 60.2652 12.7044 59.8799 13.0538 58.1808C13.2768 57.1004 13.4645 55.963 13.9574 54.9982C15.4792 52.0166 16.8904 48.9301 18.8086 46.2106C21.3559 42.6001 24.9726 40.2261 29.5203 40.048C33.8593 39.8775 38.2167 40.1039 42.5649 40.2144C48.5375 40.3655 54.5352 40.8866 60.0899 37.8445C63.654 35.8924 66.6809 33.5194 68.5935 29.7735C70.7557 25.5375 73.0407 21.3412 75.6013 17.3367C79.1705 11.7552 84.2074 8.11866 90.9418 7.16806C91.6239 7.07188 92.4901 6.78384 92.9687 7.07646C93.7773 7.57161 94.4518 8.39448 94.9538 9.21888C95.1293 9.50641 94.7742 10.4463 94.4079 10.6631C93.6243 11.1277 92.6524 11.2626 91.8014 11.6326C91.1259 11.9257 90.5147 12.3669 89.877 12.7455C89.7592 12.8152 89.6398 12.9755 89.5357 12.9643C87.2639 12.7104 86.2364 14.6976 84.6605 15.6747C81.0188 17.9336 78.8394 21.4399 76.8645 25.0851C74.9993 28.5277 73.2244 32.0192 71.3235 35.4415C70.7817 36.4175 70.0588 37.3656 69.2134 38.0893C66.7595 40.192 64.2479 42.0591 61.1179 43.3451C55.0484 45.8386 48.9523 45.1313 42.7613 44.7669C38.9274 44.541 35.047 44.3303 31.237 44.6702C26.401 45.1013 23.0507 48.1505 20.3718 52.0247C19.6667 53.044 18.5959 53.8104 17.8827 54.8251C17.4102 55.4979 17.3128 56.4225 16.9817 57.2067C16.4649 58.4342 15.893 59.6382 15.3001 60.9486"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2538 29.9021C14.3216 30.0239 14.3899 30.1462 14.4571 30.268C15.6065 29.6346 16.7563 29.0011 17.9061 28.3677C17.8297 28.2296 17.7532 28.0915 17.6768 27.9534C16.5361 28.6031 15.3944 29.2524 14.2538 29.9021M47.9832 29.8797C48.0133 29.9918 48.0434 30.104 48.0734 30.2161C49.474 29.8369 50.8741 29.4583 52.2747 29.0791C52.2446 28.9685 52.2151 28.8585 52.1855 28.7479C50.7849 29.1255 49.3843 29.5026 47.9832 29.8797M78.1082 0.896364C77.8503 1.11448 77.5924 1.3331 77.1938 1.67047H78.4716C79.3809 3.33742 78.806 4.55693 77.5613 5.62916C76.4767 6.56329 75.4727 7.62736 73.8672 7.57691C73.7015 7.57182 73.4253 7.63959 73.3794 7.74916C72.7693 9.19953 71.7005 9.13888 70.5461 8.61755C70.4794 9.30502 70.567 10.0047 70.3163 10.549C70.0466 11.135 69.4773 11.5927 69.0089 12.0773C66.299 14.8792 65.2419 18.5041 63.8831 22.0164C62.6334 25.2458 60.8913 28.2352 57.7925 30.1248C57.3873 30.3715 56.8608 30.4199 56.0912 30.6492C55.5917 31.4651 54.8552 32.4747 53.2701 32.624C52.3481 32.7111 51.499 33.5168 50.5734 33.6264C48.025 33.9276 45.4246 34.3501 42.8992 34.1223C40.5572 33.9108 38.226 33.0811 35.9956 32.2423C31.1445 30.4184 26.1848 30.1396 21.2114 31.2292C18.4494 31.8346 15.8888 33.1515 14.0091 35.4768C13.4403 36.1806 12.6636 36.7121 12.0117 37.3527C8.83693 40.4716 6.33646 44.0577 4.58266 48.1545C4.04189 49.4189 3.5266 50.6945 2.98788 51.9603C2.73355 52.5556 2.44456 52.8511 1.73509 52.3731C-0.0110662 51.1964 -0.275079 50.4269 0.224405 48.2605C2.22897 39.5619 7.51075 33.2325 14.6865 28.3137C17.8659 26.134 21.5952 25.6897 25.3133 25.7931C27.8214 25.8634 30.3433 26.341 32.805 26.8817C35.1006 27.3857 37.3126 28.2561 39.5822 28.8895C42.3406 29.6591 45.0939 29.1474 47.8303 28.6847C54.7329 27.5171 59.004 23.4193 61.1095 16.8331C63.4438 9.52976 68.1343 4.24607 75.0894 1.02173C75.9513 0.6227 76.9772 0.579383 77.9273 0.37146C77.9879 0.546258 78.0481 0.721056 78.1082 0.896364"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M90.5433 31.653C90.0089 32.2353 89.4658 32.81 88.9435 33.4024C88.7191 33.6568 88.3095 34.1157 88.3694 34.1961C89.1835 35.2898 88.3278 36.2024 87.7359 36.6203C86.2178 37.6933 86.7147 39.2165 86.5046 40.5702C86.3792 41.3751 85.3706 42.6368 84.6306 42.7754C84.5702 42.4081 84.5113 42.0494 84.4529 41.6908C84.1281 41.8496 83.7459 41.9467 83.4911 42.181C83.0525 42.5846 82.6927 43.0738 82.1826 43.6617C82.714 43.7654 83.0769 43.8362 83.4586 43.9101C83.5322 44.3719 83.6033 44.8166 83.6738 45.2562C82.2856 45.7677 80.8872 46.0135 79.8238 47.2018C79.2457 47.8484 78.4453 48.1509 78.9026 49.2183C78.9417 49.3088 78.3889 49.8193 78.2991 49.7727C76.1353 48.6517 74.9592 50.6489 74.3009 51.6946C73.7578 52.5561 73.1244 53.018 72.4249 53.3468C71.8884 53.5987 71.0758 53.2552 70.3834 53.1986C70.2109 53.1844 70.0317 53.2547 69.7647 53.3018C69.7962 53.713 69.8246 54.0854 69.8515 54.4486C68.612 54.9742 68.612 54.9742 65.7985 54.1957C65.5488 55.7457 64.287 56.2678 62.6536 55.4244C62.5612 55.733 62.4739 56.0264 62.4617 56.0669C60.773 56.03 59.0072 54.3363 57.554 56.8182C56.2754 55.4118 54.9491 56.0153 53.4984 56.7514C52.8183 57.0959 51.8986 57.0423 51.0869 57.0478C47.7725 57.0701 44.5133 57.2906 41.2892 58.2498C39.7096 58.7198 38.3712 59.6769 36.8814 60.1114C33.6639 61.0504 32.1879 63.896 29.9322 65.8573C28.8739 66.7775 28.3349 68.284 27.5354 69.5087C27.0476 70.2554 26.838 71.4341 25.4224 70.7355C24.3265 70.1952 23.9134 69.5037 24.4209 68.1767C26.7796 62.0126 30.5941 57.2239 36.8809 54.528C41.6146 52.4994 46.5467 52.4731 51.5194 52.3386C54.7334 52.2516 57.9428 52.0254 61.1562 51.8818C61.6531 51.86 62.5003 51.4098 62.2749 52.5839L62.2805 52.5612L61.6592 52.7964C61.6542 52.8687 61.6496 52.9411 61.6445 53.0134C61.9557 53.0417 62.2739 53.1237 62.5754 53.0842C62.9302 53.0382 63.2743 52.7837 63.617 52.7964C66.3843 52.8971 68.7161 51.561 71.0321 50.398C73.4929 49.1621 75.7881 47.5873 78.1042 46.0823C78.8097 45.6245 79.3467 44.9087 79.9609 44.3107L79.9203 44.3446C80.3746 43.9854 80.8278 43.6258 81.5684 43.0394C80.7319 42.9873 80.3071 42.961 79.635 42.9195C80.5446 41.8147 81.3024 40.765 82.1998 39.8509C82.7942 39.2448 83.2043 39.5094 83.6276 40.5859C84.3052 40.5389 84.958 40.4938 85.7402 40.4392C85.3645 39.9338 85.0478 39.5069 84.824 39.2069C84.2301 39.1583 83.4941 39.2721 83.3733 39.0511C83.1505 38.6443 83.2048 38.0251 83.2972 37.5223C83.4276 36.813 83.6469 36.1073 83.9281 35.4421C84.0971 35.0424 84.4555 34.7227 84.8641 34.191C84.5976 33.0938 85.0595 31.9642 87.0147 29.4575C87.2817 29.5895 87.5634 29.7282 87.9116 29.9002C87.737 28.2029 87.9105 27.9297 88.745 27.999V29.7378L88.7166 29.6988C89.0089 30.2958 89.3008 30.8922 89.6262 31.5584C89.7038 31.5372 89.9921 31.4573 90.2809 31.3768C90.3682 31.4689 90.456 31.561 90.5433 31.653"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M91.05 30.6099C90.964 30.5189 90.8775 30.4279 90.7915 30.3369C90.9735 28.4059 90.893 28.3199 89.2505 28.6784L89.2785 28.7169C89.874 28.1504 90.4695 27.5834 91.1385 26.9459C90.717 26.6759 90.314 26.4179 89.698 26.0234C90.224 25.7174 90.6 25.4874 90.9885 25.2804C91.117 25.2119 91.3395 25.2544 91.4145 25.1614C94.349 21.5449 98.2415 19.3599 102.545 17.8789C104.536 17.1939 106.637 16.8294 108.692 16.3369C108.986 16.2664 109.304 16.2954 109.61 16.2784L109.739 16.7114C107.162 17.4684 104.584 18.2254 102.007 18.9824C102.04 19.1079 102.073 19.2334 102.106 19.3594C104.782 18.6204 107.457 17.8809 110.107 17.1489C111.038 19.2034 110.894 19.4559 108.979 20.2784C106.467 21.3584 103.996 22.5329 101.497 23.6449C101 23.8659 100.529 24.2159 99.9335 23.6049C99.691 23.3574 98.983 23.5644 98.3565 23.5644V22.6369C97.762 23.0134 97.2515 23.3364 96.4335 23.8544C97.1575 23.9409 97.5115 23.9829 97.852 24.0239C97.852 24.1599 97.8865 24.2669 97.8475 24.3164C97.4145 24.8639 96.7665 25.1309 96.822 26.1504C96.86 26.8489 95.937 26.8254 95.5255 26.1679C95.154 26.5799 94.7805 26.9944 94.222 27.6134C94.3215 28.8909 93.3995 29.6384 91.681 29.1314C91.745 29.5474 91.8975 29.9319 91.815 30.2559C91.7715 30.4279 91.3185 30.4954 91.05 30.6099"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M74 47.3765C72.0934 48.234 70.1858 49.0911 68.2787 49.9486C68.1856 49.82 68.0931 49.6914 68 49.5629C68.2614 49.3936 68.5055 49.1993 68.7858 49.0587C70.1138 48.3931 71.4413 47.7261 72.7943 47.0989C73.0854 46.9643 73.4799 46.9944 73.8274 46.9486C73.8847 47.0911 73.9426 47.234 74 47.3765"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M62 51.9486C62.9157 50.1567 64.5931 50.4906 66 49.9486C65.9333 50.9163 64.7375 51.4739 62.0101 51.9147C62.0058 51.9236 62 51.9486 62 51.9486"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M80 43.8445C79.4723 43.9225 78.9099 43.9279 78.4273 44.0993C77.9537 44.2675 77.5613 44.6045 77 44.9486C77.1311 43.9131 78.3455 42.8058 79.1308 42.9637C79.4702 43.0315 79.6842 43.5573 79.9565 43.875C79.958 43.8745 80 43.8445 80 43.8445"
                        fill="currentColor"
                      />
                    </svg>
                  </figure>
                  <Image src={about17} className="rounded-4" alt="" />
                </div>
              </Col>
              <Col xs={6} className="position-relative">
                <Card className="card-body overflow-hidden p-0 mb-4 mb-sm-7">
                  <Image src={about18} className="card-img" alt="video-img" />
                  <div className="bg-overlay bg-dark opacity-3" />
                  <div className="card-img-overlay d-flex p-3">
                    <div className="m-auto">
                      <GlightBox
                        href="https://www.youtube.com/embed/tXHviS-4ygo"
                        className="btn btn-lg btn-white btn-round stretched-link mb-0 flex-centered">
                        <FaPlay className="text-danger" />
                      </GlightBox>
                    </div>
                  </div>
                </Card>
                <Image src={about14} className="rounded-4" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-6 mt-lg-8">
          <Col md={10} className="text-center mx-auto">
            <p className="heading-color fw-semibold mb-4">Used by the world best companies</p>
            <Clients />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
