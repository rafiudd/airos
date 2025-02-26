'use client'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter'
import { yupResolver } from '@hookform/resolvers/yup'
import Stepper from 'bs-stepper'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowLeft } from 'react-icons/bs'
import * as yup from 'yup'
import PageHeading from '../components/PageHeading'

const Step3 = ({ stepperInstance }: { stepperInstance: Stepper | undefined }) => {
  const [firstPassword, setFirstPassword] = useState<string>('')

  const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(8, 'Password must of minimum 8 characters').required('Please enter Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const { control, handleSubmit, getValues, watch } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })

  const goToNextStep = () => {
    stepperInstance?.next()
  }

  useEffect(() => {
    setFirstPassword(getValues().password)
  }, [watch('password')])

  return (
    <Form onSubmit={handleSubmit(goToNextStep)} id="step-3" role="tabpanel" className="content fade" aria-labelledby="steppertrigger3">
      <PageHeading heading="Set new password" subHeading="Must be at least 8 character" />

      <PasswordFormInput control={control} name="password" label="Password" placeholder="Enter your password" containerClass="mt-4 mb-3"  />

      <PasswordStrengthMeter password={firstPassword} />

      <PasswordFormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
        containerClass="mb-3 mt-4"
      />

      <div className="d-grid text-center">
        <button className="btn btn-dark mb-0" type="submit">
          Reset Password
        </button>
      </div>

      <div className="mt-4 text-center">
        <Link href="/auth/sign-in" className="text-primary-hover next-btn">
          <BsArrowLeft /> Back to login
        </Link>
      </div>
    </Form>
  )
}

export default Step3
