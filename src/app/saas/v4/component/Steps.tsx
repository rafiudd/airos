'use client'
import avatar5 from '@/assets/images/avatar/05.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import Image from 'next/image'
import { steps } from '../data'
import StepCard from './StepCard'

const Steps = () => {
  const { width } = useViewPort()

  return (
    <section className="bg-dark" data-bs-theme="dark">
      <Container data-sticky-container>
        <Row>
          <Col lg={5} className="mb-5">
            <Sticky boundaryElement="div.container" hideOnBoundaryHit={false} stickyStyle={{ marginTop: 100 }} disabled={width <= 768}>
              <h2 className="mb-4">Workflow become clearer and more organized</h2>
              <p className="mb-0">
                Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.
              </p>
              <hr className="my-5" />

              <div className="d-flex align-items-sm-center mb-3">
                <div className="avatar avatar-xl flex-shrink-0">
                  <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
                </div>
                <div className="ms-3">
                  <h6 className="mb-1">Carolyn Ortiz</h6>
                  <p className="mb-0">Manager at Mizzle agency</p>
                </div>
              </div>

              <q className="fs-6 fw-normal heading-color mb-4">
                At our agency, we don&apos;t just create campaigns; we craft immersive experiences that resonate with your audience, leaving an
                indelible mark in their hearts and minds.
              </q>
            </Sticky>
          </Col>

          <Col lg={6} className="ms-auto">
            {steps.map((step, idx) => (
              <StepCard step={step} key={idx} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Steps
