'use client'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const ContactForm = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('please enter valid email').required('please enter your email'),
    phoneNo: yup.number().required('please enter your phone no'),
    company: yup.string().required('please enter company name'),
    message: yup.string().required('please enter your message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  return (
    <Row as={Form} className="g-4" onSubmit={handleSubmit(() => {})}>
      <TextFormInput
        name="name"
        label="Your name *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Full name"
      />
      <TextFormInput
        name="email"
        type="email"
        label="Email address *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="name@example.com"
      />
      <TextFormInput
        name="phoneNo"
        label="Phone number *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="(xxx) xx xxxx"
      />
      <TextFormInput
        name="company"
        label="Company *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Company name"
      />

      <TextAreaFormInput
        name="message"
        label="Message *"
        labelClass="heading-color"
        control={control}
        containerClass="col-12"
        style={{ height: 150 }}
        placeholder="Write your message here...."
      />

      <button className="btn btn-lg btn-primary mb-0" type="submit">
        Send a message
      </button>
    </Row>
  )
}

export default ContactForm
