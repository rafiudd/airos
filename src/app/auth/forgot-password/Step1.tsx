import Stepper from 'bs-stepper'
import PageHeading from '../components/PageHeading'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextFormInput from '@/components/form/TextFormInput'
import { Form } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

const Step1 = ({ stepperInstance }: { stepperInstance: Stepper | undefined }) => {
  const emailSchema = yup.object({
    email: yup.string().email('Please enter a valid Email').required('Please enter your email address'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(emailSchema),
  })

  const goToNextStep = () => {
    stepperInstance?.next()
  }

  return (
    <Form
      onSubmit={handleSubmit(goToNextStep)}
      id="step-1"
      role="tabpanel"
      className="content fade active show shown"
      aria-labelledby="steppertrigger1">
      <PageHeading heading="Forgot password" subHeading="Enter the email address associated with an account." />

      <TextFormInput control={control} name="email" containerClass="mb-3 mt-4" type="text" placeholder="name@example.com" label="Email address" />

      <div className="d-grid">
        <button className="btn btn-dark mb-0" type="submit">
          Reset password
        </button>
      </div>

      <div className="mt-4 text-center">
        <Link href="/auth/sign-in" className="text-primary-hover icons-center gap-1">
          <BsArrowLeft className="bi" /> Back to login
        </Link>
      </div>
    </Form>
  )
}

export default Step1
