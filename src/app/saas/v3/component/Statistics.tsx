'use client'
import { Container, Row, Col } from 'react-bootstrap'
import decorationImg from '@/assets/images/elements/saas-decoration/decoration.png'
import decoration5 from '@/assets/images/elements/saas-decoration/decoration-5.png'
import decoration6 from '@/assets/images/elements/saas-decoration/decoration-6.png'
import about14 from '@/assets/images/about/14.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import CountUp from 'react-countup'
import Image from 'next/image'
import { statData } from '../data'

const Statistics = () => {
  return (
    <section className="pb-0">
      <Container>
        <Row className="g-4">
          <Col xl={7} className="position-relative pe-xl-4 order-2">
            <figure className="position-absolute top-0 end-50 me-6 mt-4">
              <svg className="opacity-2" width="148" height="140" viewBox="0 0 148 140" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-primary"
                  d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="131.41" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="131.41" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="113.61" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="113.61" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="95.81" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="95.81" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <circle className="fill-primary" cx="25.86" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="24.62" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="24.62" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                <path
                  className="fill-primary"
                  d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"></path>
                <circle className="fill-primary" cx="25.86" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="44.71" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="63.57" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="82.43" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="101.29" cy="6.82" r="2.95"></circle>
                <circle className="fill-primary" cx="120.14" cy="6.82" r="2.95"></circle>
                <path
                  className="fill-primary"
                  d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
              </svg>
            </figure>

            <figure className="position-absolute end-0 bottom-0 me-8">
              <svg width="120.4px" height="124.5px" viewBox="0 0 120.4 124.5">
                <path
                  className="fill-mode"
                  d="M92.9,58.4c-0.2-4.7-1.8-9-5-12.6c-3-3.3-6.4-6.2-10.4-8.4c-3.4-1.9-7-2.9-10.8-3.3c-3.1-0.4-6,0.2-8.6,1.8 c-6.5,3.8-11.5,9.1-14.6,16.1c-1.1,2.5-1.5,5.1-1.3,7.7c0.3,3.2,0.9,6.4,2.1,9.4c2.1,5.4,5.7,9.4,11.5,11c1.8,0.5,3.5,1,5.3,1.6 c2.1,0.7,4.3,0.8,6.5,0.5c2.4-0.3,4.8-0.8,7.1-1.4c1.8-0.5,3.4-1.5,4.6-2.9c2-2.2,3.9-4.6,5.2-7.3c0.7-1.4,1.3-3,1.6-4.5 c1.1-6.4-0.7-12.1-4.5-17.2c-1.8-2.5-4.3-4.2-7.2-5c-3-0.8-6.1-1.1-9.2-0.8c-4.5,0.4-8.4,2.2-11.4,5.7c-2.1,2.4-3.6,5-4.3,8.1 c-0.6,2.4-0.5,4.8-0.6,7.2c-0.2,5.8,6.2,12.5,12.3,12c2.7-0.2,5.5-0.5,8.2-0.7c5.4-0.5,9.3-4.9,9.8-9.6c0.2-1.9,0.2-3.9,0.1-5.8 c-0.1-2.5-1.3-4.6-3.1-6.3c-3.1-2.9-6.8-4.1-11.1-3.7c-2.4,0.2-4.4,1.2-5.8,3.2c-1.8,2.5-2.8,5.3-3.1,8.3c-0.2,1.9,0.3,3.7,1.9,5 c2.7,2.2,5.8,3.3,9.2,3c1.6-0.1,2.8-0.9,3.8-2.2c1.6-2.1,1.6-4.5,1.1-6.9c-1-4.3-4.6-5.5-8.2-2.9c-0.3,0.2-0.4,0.7-0.6,1.1 c0.1,0.1,0.3,0.3,0.4,0.4c0.9-0.4,1.8-0.9,2.8-1.2c1-0.3,2-0.1,2.8,0.7c1.6,1.8,1.9,5.4,0.5,7.4c-0.9,1.2-2.1,1.9-3.5,1.8 c-2.3-0.1-4.5-0.9-6.4-2.3c-1.3-1-1.8-2.3-1.7-3.9c0.2-1.7,0.7-3.4,1.4-4.9c1.8-3.6,4-4.9,8.1-4.4c0.9,0.1,1.8,0.3,2.7,0.6 c4.5,1.7,6.8,5,6.6,9.8c0,1.4-0.2,2.8-0.5,4.1c-0.9,3.2-2.9,5.5-6.3,6.1c-2.9,0.5-5.9,0.7-8.9,0.9c-5.6,0.4-10.5-5.4-10.3-9.9 c0.1-2.1,0.2-4.1,0.6-6.1c1.5-6.9,7.2-11.6,14.2-11.9c1.7-0.1,3.5,0,5.2,0.2c3.5,0.4,6.4,1.9,8.5,4.7c3.1,4.2,4.6,8.9,4.2,14.2 c-0.3,3.5-2.1,6.2-4,9c-2.1,3-4.7,5-8.4,5.4c-1.1,0.1-2.3,0.4-3.4,0.7c-2,0.5-3.9,0.4-5.8-0.1c-2.3-0.6-4.6-1.3-6.9-2 c-3.1-1-5.4-3-7.1-5.7c-2.7-4.3-3.8-9.1-3.8-14.1c0-2,0.6-3.8,1.5-5.6c2.9-6,7.3-10.5,12.9-14c2.2-1.4,4.7-1.9,7.3-1.6 c4.2,0.4,8.1,1.6,11.6,3.9c3.1,2,5.8,4.5,8.3,7.2c1.7,1.9,2.9,4.1,3.6,6.6c1.5,5,1.1,10.1-0.2,15c-2.2,8-9.4,14.2-17.5,15.9 c-1.7,0.4-3.3,0.9-4.9,1.5c-1.1,0.4-1.6,1.4-1.2,2.1c0.5,0.8,1.4,0.7,2.1,0.5c2.5-0.7,5.1-1.3,7.6-2.2c1.4-0.5,2.8-1.1,4-1.9 c2.9-1.7,5.4-3.9,7.6-6.4c2.6-3,4.5-6.5,5.2-10.4C92.8,65.1,93,61.7,92.9,58.4z"></path>
                <path
                  className="fill-primary"
                  d="M98.2,97.6c-1.9-3-3.8-6-5.7-9c-0.7-1-1.2-2.2-3-3c0,0.8-0.1,1.3,0,1.7c0.4,0.9,1,1.8,1.5,2.7 c2.8,5,5.7,9.9,9.2,14.5c1,1.2,2.2,2.3,3.4,3.4c0.3,0.3,0.8,0.4,1.2-0.3c-0.5-0.8-1.1-1.8-1.8-2.7C101.4,102.3,99.7,100,98.2,97.6z "></path>
                <path
                  className="fill-primary"
                  d="M75.3,98c-0.5-1.5-1.2-3-1.9-4.4c-0.1-0.3-0.6-0.4-0.9-0.6c-0.2,0.2-0.3,0.3-0.5,0.5c0.1,0.5,0.2,1.1,0.4,1.6 c1.6,5.3,3.1,10.5,4.8,15.8c0.5,1.6,1.1,3.3,1.7,4.9c0.5,1.3,1.4,1.8,1.9,1.4c0.8-0.6,0.5-1.4,0.2-2.2C79,109.3,77.2,103.6,75.3,98 z"></path>
                <path
                  className="fill-primary"
                  d="M26.5,69.5c-5.5,1.6-11,3.2-16.5,4.8c-2.1,0.6-4.1,1.4-6.1,2.2c-0.6,0.2-1.1,0.7-1.9,1.2 c5.9-0.4,24.8-6,28.2-8.3C28.8,68.8,27.6,69.2,26.5,69.5z"></path>
                <path
                  className="fill-primary"
                  d="M55,96.3c-2.2,7.9-4.5,15.8-6.7,23.8c-0.3,1.2-0.4,2.5-0.7,4.4c0.6-0.9,0.8-1.2,0.9-1.5 c2.6-7.8,5.1-15.7,7.6-23.5c0.3-1.1,0.5-2.2,0.6-3.4c0-0.4-0.4-0.9-0.8-1.7C55.5,95.3,55.2,95.8,55,96.3z"></path>
                <path
                  className="fill-primary"
                  d="M25.2,48.7c0.6,0.3,1.3,0.5,2,0.6c0.5,0.1,1.1-0.1,1.6-0.2c0-0.2,0-0.3,0-0.5c-3-1.4-6-3-9-4.2 c-3.2-1.3-6.4-2.4-9.7-3.5c-3.1-1-6.1-2.3-10-2.8c0.8,0.7,1.1,1.1,1.5,1.3c1.5,0.7,2.9,1.3,4.4,1.9C12.4,43.6,18.9,45.7,25.2,48.7z "></path>
                <path
                  className="fill-primary"
                  d="M38.2,86.5c-0.7,0.3-1.4,0.8-2,1.3c-5.1,4.5-10.1,9-14.5,14.2c-0.9,1-1.6,2.2-2.5,3.3c0.1,0.1,0.2,0.3,0.4,0.4 c6.7-6.2,13.4-12.3,20.1-18.5c0.1-0.1,0-0.4,0-0.9C39.2,86.4,38.6,86.3,38.2,86.5z"></path>
                <path
                  className="fill-primary"
                  d="M106.5,77.4c-1.1-1.1-2.4-2.2-3.6-3.1c-0.7-0.5-1.6-0.8-2.5-1c-0.5-0.1-1.2,0-1,1.1c2.1,0.8,3.6,2.5,5.2,4.1 c1.3,1.3,2.4,2.7,3.8,3.9c1.8,1.5,3.8,3,5.7,4.3c1,0.7,2.2,1.3,4.1,0.7c-0.7-0.7-1.1-1.1-1.5-1.4C112.9,83.6,109.6,80.5,106.5,77.4 z"></path>
                <path
                  className="fill-primary"
                  d="M33.5,27.3c0.7,0.7,1.6,1.3,2.5,1.8c0.5,0.3,1.3,0.4,1.9,0.5c-2.3-2.2-4-4.6-6-6.8c-3.5-3.8-7-7.6-10.5-11.3 c-0.4-0.4-0.7-0.9-1.4-0.6c-0.5,0.6-0.1,1.1,0.3,1.5C24.6,17.4,29.1,22.4,33.5,27.3z"></path>
                <path
                  className="fill-primary"
                  d="M53.3,20c0.1,1.1,0.3,2.3,0.6,3.4c0.1,0.4,0.7,0.6,1.3,1c-0.1-3.1-0.1-5.8-0.3-8.5c-0.1-2.6-0.4-5.2-0.6-7.9 c-0.4-5-0.6-5.7-2-8c0,0.9-0.1,1.6-0.1,2.2C52.6,8.2,52.9,14.1,53.3,20z"></path>
                <path
                  className="fill-primary"
                  d="M101.1,56.2c0.2,0.4,0.3,0.7,0.5,0.7c4.9,1.1,9.8,2.2,14.7,3.1c1.3,0.3,2.7,0.4,4.1-0.5 c-0.8-0.3-1.7-0.6-2.5-0.8c-5.2-0.9-10.3-1.9-15.5-2.7C102,56,101.6,56.1,101.1,56.2z"></path>
                <path
                  className="fill-primary"
                  d="M97.8,36.8c4.7-1.9,8.9-4.8,12.6-8.3c0.3-0.3,0.7-0.6,0.1-1.3c-2.5,1.7-5.1,3.5-7.7,5.1 c-2.6,1.6-5.3,3-8.1,4.6C95.9,37.7,96.8,37.2,97.8,36.8z"></path>
                <path
                  className="fill-primary"
                  d="M81.6,11.5c0.5-1.6,0.8-3.2,1.2-4.8c-0.3,0.2-0.6,0.3-0.7,0.5c-1.6,4.3-3.2,8.5-4.7,12.8 c-0.2,0.6-0.1,1.3-0.2,1.9C79.1,18.6,80.5,15.1,81.6,11.5z"></path>
                <path className="fill-primary" d="M82.8,6.5c0,0,0,0.1,0,0.1C82.8,6.6,82.8,6.6,82.8,6.5C82.9,6.6,82.8,6.5,82.8,6.5z"></path>
              </svg>
            </figure>

            <Row className="position-relative">
              <Col sm={6} xl={5} className="mt-auto">
                <Image src={decoration5} className="d-none d-sm-block" alt="Decoration-img" />
              </Col>
              <Col sm={6}>
                <Image src={about14} className="shadow rounded-4" alt="About-img" />
              </Col>
            </Row>

            <Row className="mt-4 position-relative">
              <Col xs={7} className="mt-auto">
                <Image src={decorationImg} className="shadow rounded-4" alt="Decoration-img" />
              </Col>
              <Col xl={4} xs={5}>
                <Image src={decoration6} className="shadow rounded-4" alt="Decoration-img" />
              </Col>
            </Row>
          </Col>

          <Col xl={5} className="order-1 order-xl-2 ms-auto">
            <h2 className="mb-4 mb-xl-5">See how can Mizzle help your business</h2>
            <p className="mb-4 mb-xl-5">With a track record of success, we&apos;re here to guide you through the ever-evolving digital landscape. </p>

            <Row className="row-cols-1 row-cols-sm-2 g-4 align-items-center">
              {statData.map((item, idx) => (
                <Col key={idx}>
                  <div className="bg-light p-4 rounded-3">
                    <div className="d-flex">
                      {item.prefix && <span className="h4 text-primary mb-0">{item.prefix}</span>}
                      <h4 className="purecounter mb-0">
                        <CountUp end={item.stat} delay={0.3} />
                      </h4>
                      {item.suffix && <span className="h4 text-primary mb-0">{item.suffix}</span>}
                    </div>
                    <p className="mb-0">{item.title}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <hr className="my-5" />

            <div className="d-flex align-items-sm-center">
              <div className="avatar avatar-xl flex-shrink-0">
                <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
              </div>
              <div className="ms-3">
                <p className="fs-6 fw-normal heading-color mb-4">&quot;We believe that it takes great people to deliver a great product&quot;</p>
                <div className="blockquote-footer mb-0">By Carolyn Ortiz</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Statistics
