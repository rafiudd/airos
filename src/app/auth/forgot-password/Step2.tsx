'use client'
import Stepper from 'bs-stepper'
import PageHeading from '../components/PageHeading'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { OTPInput } from 'input-otp'
import styles from './input.module.scss'
import { Form } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const Step2 = ({ stepperInstance }: { stepperInstance: Stepper | undefined }) => {
  const otpSchema = yup.object({
    otp: yup.string().matches(/\d{4}/).required('OTP is required'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(otpSchema),
  })

  const goToNextStep = () => {
    stepperInstance?.next()
  }

  return (
    <Form onSubmit={handleSubmit(goToNextStep)} id="step-2" role="tabpanel" className="content fade" aria-labelledby="steppertrigger2">
      <PageHeading
        heading="Password reset"
        subHeading={
          <>
            We sent a code to <span className="fw-bold">example@gmail.com</span>
          </>
        }
      />

      <div className="d-flex justify-content-between gap-1 gap-sm-3 mb-3 mt-4">
        <Controller
          control={control}
          name="otp"
          render={({ field }) => (
            <OTPInput
              maxLength={4}
              containerClassName="d-flex justify-content-between gap-1 gap-sm-3 mb-3 mt-4"
              autoFocus
              {...field}
              render={({ slots }) => {
                return slots.map((slot, idx) => (
                  <div key={idx} className={styles.input_slot}>
                    <input className="form-control text-center p-3" value={slot.char?.toString() ?? ''} onChange={() => null} />
                    {slot.hasFakeCaret && (
                      <div className={`${styles.cursor_wrapper} caret-blink`}>
                        <div className={`${styles.cursor}`} />
                      </div>
                    )}
                  </div>
                ))
              }}
            />
          )}
        />
      </div>

      <div className="d-grid text-center">
        <button className="btn btn-dark mb-0" type="submit">
          Continue
        </button>
        <p className="mb-0 mt-3">
          Didn&apos;t receive the code? <Link href="">Click to resend</Link>
        </p>
      </div>

      <div className="mt-4 text-center">
        <Link href="/auth/sign-up" className="text-primary-hover">
          <BsArrowLeft className="bi" /> Back to login
        </Link>
      </div>
    </Form>
  )
}

export default Step2
